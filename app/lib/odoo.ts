// Odoo 18 JSON-RPC helper and order creation API route
// =====================================================
// This file creates orders directly in Odoo Point de Vente (pos.order).
// Required env vars (set in .env.local):
//   ODOO_URL        – e.g. http://localhost:8069
//   ODOO_DB         – Odoo database name
//   ODOO_USERNAME   – Odoo login (email)
//   ODOO_PASSWORD   – Odoo password or API key
//   ODOO_POS_NAME   – (optional) POS Config name, defaults to "BOKA"

interface OdooRpcParams {
  url: string;
  db: string;
  uid: number;
  password: string;
}

// Low-level JSON-RPC call to Odoo
async function jsonRpc(
  odooUrl: string,
  endpoint: string,
  params: Record<string, unknown>
): Promise<any> {
  const response = await fetch(`${odooUrl}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: 'call',
      id: Date.now(),
      params,
    }),
  });

  const data = await response.json();

  if (data.error) {
    const msg =
      data.error.data?.message ||
      data.error.message ||
      JSON.stringify(data.error);
    throw new Error(`Odoo RPC error: ${msg}`);
  }

  return data.result;
}

// Authenticate and get uid
async function authenticate(
  odooUrl: string,
  db: string,
  login: string,
  password: string
): Promise<number> {
  const uid = await jsonRpc(odooUrl, '/jsonrpc', {
    service: 'common',
    method: 'authenticate',
    args: [db, login, password, {}],
  });

  if (!uid || typeof uid !== 'number') {
    throw new Error('Odoo authentication failed – check credentials');
  }

  return uid;
}

// Call an Odoo model method
async function callModel(
  rpc: OdooRpcParams,
  model: string,
  method: string,
  args: any[],
  kwargs: Record<string, any> = {}
): Promise<any> {
  return jsonRpc(rpc.url, '/jsonrpc', {
    service: 'object',
    method: 'execute_kw',
    args: [rpc.db, rpc.uid, rpc.password, model, method, args, kwargs],
  });
}

// Find active POS Config and Session
async function getPosSessionAndPaymentMethod(
  rpc: OdooRpcParams,
  posName: string = 'BOKA'
): Promise<{ sessionId: number; paymentMethodId: number; configId: number }> {
  // 1. Find POS config by name
  let configIds = await callModel(rpc, 'pos.config', 'search', [
    [['name', '=', posName]],
  ], { limit: 1 });

  if (!configIds || configIds.length === 0) {
    configIds = await callModel(rpc, 'pos.config', 'search', [
      [['name', 'ilike', posName]],
    ], { limit: 1 });
  }

  if (!configIds || configIds.length === 0) {
    configIds = await callModel(rpc, 'pos.config', 'search', [[]], { limit: 1 });
  }

  if (!configIds || configIds.length === 0) {
    throw new Error(`Aucun Point de Vente trouvé dans Odoo.`);
  }

  const configId = configIds[0];
  const configData = await callModel(rpc, 'pos.config', 'read', [
    [configId],
    ['name', 'current_session_id', 'payment_method_ids'],
  ]);

  const cfg = configData[0];
  let sessionId: number | null = cfg.current_session_id ? cfg.current_session_id[0] : null;

  // If no session open on this config, look for any open session
  if (!sessionId) {
    const openSessions = await callModel(rpc, 'pos.session', 'search', [
      [['config_id', '=', configId], ['state', '=', 'opened']],
    ], { limit: 1 });

    if (openSessions && openSessions.length > 0) {
      sessionId = openSessions[0];
    } else {
      const anyOpen = await callModel(rpc, 'pos.session', 'search', [
        [['state', '=', 'opened']],
      ], { limit: 1 });
      if (anyOpen && anyOpen.length > 0) {
        sessionId = anyOpen[0];
      }
    }
  }

  if (!sessionId) {
    throw new Error(
      `La session du Point de Vente "${cfg.name}" n'est pas ouverte. Veuillez ouvrir une session dans le Point de Vente sur Odoo.`
    );
  }

  // Get available payment method for the session/config
  let paymentMethodId: number | null = null;
  if (cfg.payment_method_ids && cfg.payment_method_ids.length > 0) {
    paymentMethodId = cfg.payment_method_ids[0];
  } else {
    const pms = await callModel(rpc, 'pos.payment.method', 'search', [[]], { limit: 1 });
    if (pms && pms.length > 0) {
      paymentMethodId = pms[0];
    }
  }

  if (!paymentMethodId) {
    throw new Error(`Aucun mode de paiement configuré pour le Point de Vente "${cfg.name}".`);
  }

  return { sessionId, paymentMethodId, configId };
}

// Get or create a partner category (tag) for web customers
async function getOrCreatePartnerCategory(
  rpc: OdooRpcParams,
  name: string = 'Client Web'
): Promise<number> {
  const existingIds = await callModel(rpc, 'res.partner.category', 'search', [
    [['name', '=', name]],
  ], { limit: 1 });

  if (existingIds && existingIds.length > 0) {
    return existingIds[0];
  }

  const anyCategories = await callModel(rpc, 'res.partner.category', 'search', [
    [],
  ], { limit: 1 });

  if (anyCategories && anyCategories.length > 0) {
    return anyCategories[0];
  }

  const categoryId = await callModel(rpc, 'res.partner.category', 'create', [
    { name },
  ]);

  return categoryId;
}

// Search for an existing partner by phone, or create a new one
async function findOrCreatePartner(
  rpc: OdooRpcParams,
  name: string,
  phone: string
): Promise<number> {
  const categoryId = await getOrCreatePartnerCategory(rpc);

  // Search by phone
  const existingIds = await callModel(rpc, 'res.partner', 'search', [
    [['phone', '=', phone]],
  ], { limit: 1 });

  if (existingIds && existingIds.length > 0) {
    const partnerId = existingIds[0];
    try {
      const partnerData = await callModel(rpc, 'res.partner', 'read', [
        [partnerId],
        ['category_id'],
      ]);
      if (!partnerData[0]?.category_id || partnerData[0].category_id.length === 0) {
        await callModel(rpc, 'res.partner', 'write', [
          [partnerId],
          { category_id: [[4, categoryId]] },
        ]);
      }
    } catch {
      // Ignore if write fails
    }
    return partnerId;
  }

  // Create new partner with category
  const partnerId = await callModel(rpc, 'res.partner', 'create', [
    {
      name,
      phone,
      customer_rank: 1,
      category_id: [[6, 0, [categoryId]]],
    },
  ]);

  return partnerId;
}

// Generate a unique web order ID
function generateOrderId(): string {
  const now = new Date();
  const date = now.toISOString().slice(0, 10).replace(/-/g, '');
  const rand = String(Math.floor(Math.random() * 10000)).padStart(4, '0');
  return `WEB-${date}-${rand}`;
}

// Find Odoo product IDs by reference (default_code) or name, or return null
async function findOdooProduct(
  rpc: OdooRpcParams,
  productRef?: string,
  productName?: string
): Promise<number | null> {
  // 1. Search by Internal Reference (default_code) if provided
  if (productRef) {
    const idsByRef = await callModel(rpc, 'product.product', 'search', [
      [['default_code', '=', productRef]],
    ], { limit: 1 });

    if (idsByRef && idsByRef.length > 0) return idsByRef[0];
  }

  if (!productName) return null;

  // 2. Search by exact name
  let ids = await callModel(rpc, 'product.product', 'search', [
    [['name', '=', productName]],
  ], { limit: 1 });

  if (ids && ids.length > 0) return ids[0];

  // 3. Search by partial match
  ids = await callModel(rpc, 'product.product', 'search', [
    [['name', 'ilike', productName]],
  ], { limit: 1 });

  if (ids && ids.length > 0) return ids[0];

  return null;
}

// Create or find a generic "Website Order" product for items not in Odoo catalog
async function getOrCreateGenericProduct(
  rpc: OdooRpcParams
): Promise<number> {
  const ids = await callModel(rpc, 'product.product', 'search', [
    [['default_code', '=', 'WEB-GENERIC']],
  ], { limit: 1 });

  if (ids && ids.length > 0) return ids[0];

  // Create a generic consumable product
  const productId = await callModel(rpc, 'product.product', 'create', [
    {
      name: 'Produit Commande Web',
      default_code: 'WEB-GENERIC',
      type: 'consu',
      list_price: 0,
      sale_ok: true,
      available_in_pos: true,
    },
  ]);

  return productId;
}

interface OrderLineInput {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

interface OrderInput {
  customer: { name: string; phone: string };
  notes: string;
  items: OrderLineInput[];
}

export async function createOdooOrder(input: OrderInput) {
  const odooUrl = process.env.ODOO_URL;
  const db = process.env.ODOO_DB;
  const login = process.env.ODOO_USERNAME;
  const password = process.env.ODOO_PASSWORD;
  const posName = process.env.ODOO_POS_NAME || 'BOKA';

  if (!odooUrl || !db || !login || !password) {
    throw new Error(
      'Missing Odoo configuration. Set ODOO_URL, ODOO_DB, ODOO_USERNAME, ODOO_PASSWORD in .env.local'
    );
  }

  // 1. Authenticate
  const uid = await authenticate(odooUrl, db, login, password);
  const rpc: OdooRpcParams = { url: odooUrl, db, uid, password };

  // 2. Find open POS session and payment method for Point de Vente BOKA
  const { sessionId, paymentMethodId } = await getPosSessionAndPaymentMethod(rpc, posName);

  // 3. Find or create customer partner
  const partnerId = await findOrCreatePartner(
    rpc,
    input.customer.name,
    input.customer.phone
  );

  // 4. Generate unique order ID
  const webOrderId = generateOrderId();
  const orderRef = `Order ${webOrderId}`;

  // 5. Get or create a generic product for fallback
  const genericProductId = await getOrCreateGenericProduct(rpc);

  // 6. Build POS order lines and calculate total
  let totalAmount = 0;
  const posOrderLines: [number, number, Record<string, any>][] = [];

  for (const item of input.items) {
    const odooProductId = await findOdooProduct(rpc, item.productId, item.name);
    const lineTotal = item.price * item.quantity;
    totalAmount += lineTotal;

    posOrderLines.push([
      0,
      0,
      {
        product_id: odooProductId || genericProductId,
        qty: item.quantity,
        price_unit: item.price,
        price_subtotal: lineTotal,
        price_subtotal_incl: lineTotal,
        customer_note: input.notes || '',
      },
    ]);
  }

  const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');

  // 7. Create pos.order in Point de Vente BOKA
  const posOrderId = await callModel(rpc, 'pos.order', 'create', [
    {
      session_id: sessionId,
      partner_id: partnerId,
      name: orderRef,
      pos_reference: orderRef,
      general_note: input.notes ? `Commande Web: ${input.notes}` : `Commande Web ${webOrderId}`,
      amount_tax: 0,
      amount_total: totalAmount,
      amount_paid: totalAmount,
      amount_return: 0,
      lines: posOrderLines,
      payment_ids: [
        [
          0,
          0,
          {
            payment_method_id: paymentMethodId,
            amount: totalAmount,
            payment_date: currentDate,
          },
        ],
      ],
    },
  ]);

  // 8. Mark the order as paid in the POS session
  try {
    await callModel(rpc, 'pos.order', 'action_pos_order_paid', [[posOrderId]]);
  } catch (err) {
    console.warn('Could not mark pos.order as paid automatically:', err);
  }

  return {
    orderId: webOrderId,
    odooPosOrderId: posOrderId,
    partnerId,
  };
}
