# -*- coding: utf-8 -*-
from odoo import models, fields, api

class SaleOrder(models.Model):
    _inherit = 'sale.order'

    x_web_order_id = fields.Char(
        string='N° Commande Web',
        index=True,
        copy=False,
        help='Identifiant unique généré par le site web Boka (ex: WEB-20261111-0001)'
    )
    x_is_web_order = fields.Boolean(
        string='Commande Web',
        compute='_compute_is_web_order',
        store=True,
        help='Indique si la commande provient du site web'
    )

    @api.depends('x_web_order_id', 'client_order_ref')
    def _compute_is_web_order(self):
        for order in self:
            order.x_is_web_order = bool(order.x_web_order_id or (order.client_order_ref and order.client_order_ref.startswith('WEB-')))

    @api.model_create_multi
    def create(self, vals_list):
        for vals in vals_list:
            # Synchronize x_web_order_id and client_order_ref if either is provided
            if vals.get('client_order_ref') and not vals.get('x_web_order_id'):
                vals['x_web_order_id'] = vals['client_order_ref']
            elif vals.get('x_web_order_id') and not vals.get('client_order_ref'):
                vals['client_order_ref'] = vals['x_web_order_id']
        return super(SaleOrder, self).create(vals_list)

