{
    'name': 'Boka Restaurant Web Orders',
    'version': '18.0.1.0.0',
    'category': 'Sales/Restaurant',
    'summary': 'Integration module for Boka website online orders in Odoo 18 Point of Sale & Sales',
    'description': """
Boka Restaurant Web Orders Integration
======================================
This module optimizes Odoo 18 Point of Sale (POS) and Sales for receiving web orders:
- Adds dedicated fields on pos.order: x_order_type ('sur_place', 'emporter', 'livraison') and x_web_order_id.
- Enhances POS Order list, form, and search views so workers can clearly see the consumption mode and filter orders.
- Adds dedicated Web Order ID on sale.order.
    """,
    'author': 'Boka Fast-Food',
    'website': 'https://bokachiken.com',
    'license': 'LGPL-3',
    'depends': ['point_of_sale', 'sale_management'],
    'data': [
        'views/sale_order_views.xml',
        'views/pos_order_views.xml',
    ],
    'installable': True,
    'application': False,
    'auto_install': False,
}
