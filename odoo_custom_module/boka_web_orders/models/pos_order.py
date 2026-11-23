# -*- coding: utf-8 -*-
from odoo import models, fields, api

class PosOrder(models.Model):
    _inherit = 'pos.order'

    x_order_type = fields.Selection([
        ('sur_place', 'Sur Place (Table)'),
        ('emporter', 'À Emporter'),
        ('livraison', 'Livraison'),
    ], string='Type de Commande', default='emporter', index=True, help="Mode de consommation choisi par le client sur le site web")

    x_web_order_id = fields.Char(
        string='N° Web',
        index=True,
        copy=False,
        help="Référence de la commande web (ex: WEB-20261123-0001)"
    )
