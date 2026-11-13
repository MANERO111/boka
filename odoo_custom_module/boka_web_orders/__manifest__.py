{
    'name': 'Boka Restaurant Web Orders',
    'version': '18.0.1.0.0',
    'category': 'Sales/Restaurant',
    'summary': 'Integration module for Boka website online orders in Odoo 18',
    'description': """
Boka Restaurant Web Orders Integration
======================================
This module optimizes Odoo 18 Sales for receiving web orders from the Boka restaurant website:
- Adds dedicated Web Order ID (x_web_order_id) and syncs with client_order_ref.
- Enhances Sales Order list, search, and form views to easily find and review web orders.
- Adds a dedicated search filter and menu shortcut: "Commandes Web".
    """,
    'author': 'Boka Fast-Food',
    'website': 'https://bokachiken.com',
    'license': 'LGPL-3',
    'depends': ['sale_management'],
    'data': [
        'views/sale_order_views.xml',
    ],
    'installable': True,
    'application': False,
    'auto_install': False,
}
