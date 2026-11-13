import { createOdooOrder } from '../../lib/odoo';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate input
    if (!body.customer?.name || !body.customer?.phone) {
      return Response.json(
        { error: 'Le nom et le téléphone du client sont requis' },
        { status: 400 }
      );
    }

    if (!body.items || !Array.isArray(body.items) || body.items.length === 0) {
      return Response.json(
        { error: 'Le panier est vide' },
        { status: 400 }
      );
    }

    // Create order in Odoo
    const result = await createOdooOrder({
      customer: {
        name: body.customer.name,
        phone: body.customer.phone,
      },
      notes: body.notes || '',
      items: body.items.map((item: any) => ({
        productId: item.productId,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
    });

    return Response.json({
      success: true,
      orderId: result.orderId,
      odooPosOrderId: result.odooPosOrderId,
      message: 'Commande créée avec succès dans le Point de Vente',
    });
  } catch (error: any) {
    console.error('Order API error details:', {
      message: error?.message,
      stack: error?.stack,
      cause: error?.cause,
    });
    return Response.json(
      {
        error: error.message || 'Erreur lors de la création de la commande',
        details: error?.stack || String(error),
      },
      { status: 500 }
    );
  }
}

