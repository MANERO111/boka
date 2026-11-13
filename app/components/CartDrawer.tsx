'use client';

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import OrderModal from './OrderModal';

export default function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    totalItems,
    totalPrice,
    isCartOpen,
    setCartOpen,
  } = useCart();

  const [orderModalOpen, setOrderModalOpen] = useState(false);

  if (!isCartOpen && !orderModalOpen) return null;

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div
          className="fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setCartOpen(false)}
        />
      )}

      {/* Drawer Panel */}
      {isCartOpen && (
        <div className="fixed right-0 top-0 bottom-0 z-[56] w-full max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#203751] to-[#1a2d42] px-6 py-5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <span className="text-lg">🛒</span>
              </div>
              <div>
                <h2 className="text-base font-black text-white">Mon Panier</h2>
                <p className="text-xs text-slate-300">
                  {totalItems} article{totalItems > 1 ? 's' : ''}
                </p>
              </div>
            </div>
            <button
              onClick={() => setCartOpen(false)}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <span className="text-5xl block">🍽️</span>
                <p className="font-bold text-slate-600">Votre panier est vide</p>
                <p className="text-xs text-slate-400">
                  Ajoutez des plats depuis le menu pour commencer
                </p>
                <button
                  onClick={() => setCartOpen(false)}
                  className="mt-3 px-6 py-2.5 rounded-xl bg-[#203751] text-white font-bold text-xs hover:bg-[#152538] transition-colors cursor-pointer"
                >
                  Voir le Menu
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors"
                >
                  {/* Product Image */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-200 shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-bold text-sm text-[#203751] truncate">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="shrink-0 w-6 h-6 rounded-full bg-red-50 hover:bg-red-100 text-red-400 hover:text-red-600 flex items-center justify-center transition-colors cursor-pointer"
                        title="Supprimer"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <p className="text-xs text-slate-400 mt-0.5">
                      {item.product.price} DH / unité
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity Controls */}
                      <div className="flex items-center bg-white rounded-lg border border-slate-200 p-0.5">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-md hover:bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
                        >
                          −
                        </button>
                        <span className="w-8 text-center font-black text-xs text-[#203751]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-md hover:bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      {/* Line Total */}
                      <span className="font-black text-sm text-[#ae332e]">
                        {item.product.price * item.quantity} DH
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer with Total & Order Button */}
          {items.length > 0 && (
            <div className="border-t border-slate-200 p-4 space-y-3 bg-white shrink-0">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-600">Total</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black text-[#203751]">{totalPrice}</span>
                  <span className="text-xs font-black text-[#ae332e] uppercase">DH</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setCartOpen(false);
                  setOrderModalOpen(true);
                }}
                className="w-full py-4 rounded-2xl bg-[#ae332e] hover:bg-[#962924] text-white font-black text-sm shadow-lg shadow-[#ae332e]/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Commander</span>
                <span className="text-amber-300">({totalPrice} DH)</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Order Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
      />
    </>
  );
}

