// Odoo 18 JSON-RPC helper and order creation API route
// =====================================================
// This file creates a draft sale.order in Odoo via JSON-RPC.
// Required env vars (set in .env.local):
//   ODOO_URL        – e.g. https://mycompany.odoo.com
//   ODOO_DB         – Odoo database name
//   ODOO_USERNAME   – Odoo login (email)
//   ODOO_PASSWORD   – Odoo password or API key

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

  // Fallback to first existing category if any
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
    // Ensure partner has category_id set (required by custom modules like livraison_module)
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

// Find Odoo product IDs by name, or return a fallback generic product
async function findOdooProduct(
  rpc: OdooRpcParams,
  productName: string
): Promise<number | null> {
  // Search by exact name first
  let ids = await callModel(rpc, 'product.product', 'search', [
    [['name', '=', productName]],
  ], { limit: 1 });

  if (ids && ids.length > 0) return ids[0];

  // Search by partial match
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

  // Create a generic service product
  const productId = await callModel(rpc, 'product.product', 'create', [
    {
      name: 'Produit Commande Web',
      default_code: 'WEB-GENERIC',
      type: 'consu',
      list_price: 0,
      sale_ok: true,
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

  if (!odooUrl || !db || !login || !password) {
    throw new Error(
      'Missing Odoo configuration. Set ODOO_URL, ODOO_DB, ODOO_USERNAME, ODOO_PASSWORD in .env.local'
    );
  }

  // 1. Authenticate
  const uid = await authenticate(odooUrl, db, login, password);
  const rpc: OdooRpcParams = { url: odooUrl, db, uid, password };

  // 2. Find or create customer partner
  const partnerId = await findOrCreatePartner(
    rpc,
    input.customer.name,
    input.customer.phone
  );

  // 3. Generate unique order ID
  const webOrderId = generateOrderId();

  // 4. Get or create a generic product for fallback
  const genericProductId = await getOrCreateGenericProduct(rpc);

  // 5. Build order lines
  const orderLines: [number, number, Record<string, any>][] = [];

  for (const item of input.items) {
    // Try to match an Odoo product by name
    const odooProductId = await findOdooProduct(rpc, item.name);

    orderLines.push([
      0,
      0,
      {
        product_id: odooProductId || genericProductId,
        name: item.name,
        product_uom_qty: item.quantity,
        price_unit: item.price,
      },
    ]);
  }

  // 6. Create draft sale.order
  const saleOrderId = await callModel(rpc, 'sale.order', 'create', [
    {
      partner_id: partnerId,
      client_order_ref: webOrderId,
      x_web_order_id: webOrderId,
      note: input.notes || '',
      order_line: orderLines,
    },
  ]);

  return {
    orderId: webOrderId,
    odooSaleOrderId: saleOrderId,
    partnerId,
  };
}

