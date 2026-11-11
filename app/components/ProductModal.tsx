'use client';

import React, { useEffect, useState } from 'react';
import { MenuItem } from '../data/menu';

interface ProductModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onOrderWhatsapp?: (item: MenuItem) => void;
}

export default function ProductModal({ item, onClose, onOrderWhatsapp }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  // Reset quantity when modal opens for a new product
  useEffect(() => {
    if (item) {
      setQuantity(1);
    }
  }, [item]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const totalPrice = item.price * quantity;

  const handleWhatsapp = () => {
    const qStr = quantity > 1 ? ` (x${quantity})` : '';
    const message = encodeURIComponent(
      `Bonjour BOKA Polito Chiken ! Je souhaite commander :\n- *${item.name}*${qStr} au total de *${totalPrice} DH*.\nPouvez-vous me confirmer la disponibilité et le délai de livraison ? Merci !`
    );
    window.open(`https://wa.me/212663110370?text=${message}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-[#0a121c]/70 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-7xl bg-white rounded-[32px] sm:rounded-[36px] shadow-[0_25px_70px_rgba(0,0,0,0.35)] overflow-hidden border border-slate-100 transform transition-all animate-in zoom-in-95 duration-300 max-h-[92vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          id="close-modal-btn"
          aria-label="Fermer la modal"
          className="absolute top-4 right-4 z-30 w-11 h-11 rounded-full bg-white/90 md:bg-white text-slate-700 hover:text-white hover:bg-[#ae332e] shadow-lg flex items-center justify-center transition-all duration-200 hover:rotate-90 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* LEFT / TOP SIDE: Square 1:1 Image Showcase (optimisé pour 1254x1254) */}
        <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto md:min-h-[480px] bg-gradient-to-br from-stone-900 to-slate-900 overflow-hidden flex items-center justify-center">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none md:hidden" />

          {/* Floating Badges */}
          <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2 pointer-events-none">
            {item.badge && (
              <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-[#ae332e] to-[#c93b35] text-white shadow-lg flex items-center gap-1">
                <span>✨</span>
                <span>{item.badge}</span>
              </span>
            )}
            {item.spiceLevel && (
              <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-500 text-white shadow-md flex items-center gap-1">
                <span>🌶️</span>
                <span>{item.spiceLevel}</span>
              </span>
            )}
          </div>

          {/* Mobile Overlay Name & Price */}
          <div className="absolute bottom-4 left-4 right-4 z-20 md:hidden flex items-end justify-between text-white">
            <div className="max-w-[70%]">
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300">
                Spécialité BOKA
              </span>
              <h2 className="text-xl font-black drop-shadow-md line-clamp-1">{item.name}</h2>
            </div>
            <div className="text-right">
              <span className="text-2xl font-black text-amber-400 drop-shadow-md">
                {item.price} <span className="text-sm font-bold text-white">DH</span>
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Details & Customization */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-5">
            {/* Desktop Title & Category */}
            <div className="hidden md:block">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[11px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-lg bg-[#ae332e]/10 text-[#ae332e]">
                  Spécialité Maison
                </span>
                {item.popular && (
                  <span className="text-[11px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 flex items-center gap-1">
                    <span>★</span> Coup de cœur
                  </span>
                )}
              </div>
              <h2 id="modal-title" className="text-2xl lg:text-3xl font-black text-[#203751] tracking-tight">
                {item.name}
              </h2>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                À propos de la recette
              </h4>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
                {item.description}
              </p>
            </div>

            {/* Ingredients list */}
            {item.ingredients && item.ingredients.length > 0 && (
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#203751] mb-2.5 flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#ae332e]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Ingrédients & Composition</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.ingredients.map((ing, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100/80 p-2.5 rounded-xl border border-slate-100 transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#ae332e] shrink-0" />
                      <span className="truncate">{ing}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Preparation Guarantee */}
            <div className="bg-[#fbf7ee] rounded-2xl p-3.5 border border-amber-200/60 flex items-center gap-3">
              <span className="text-xl">🔥</span>
              <div className="text-xs text-amber-950">
                <strong className="font-bold">Préparé minute à la commande :</strong> pain croustillant et viandes fraîches pour préserver tout le croquant.
              </div>
            </div>
          </div>

          {/* Bottom Actions: Quantity + WhatsApp CTA */}
          <div className="pt-5 mt-5 border-t border-slate-100 space-y-4">
            <div className="flex items-center justify-between">
              {/* Quantity selector */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Quantité</span>
                <div className="flex items-center bg-slate-100 rounded-xl p-1 border border-slate-200/60">
                  <button
                    type="button"
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="w-8 h-8 rounded-lg bg-white hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-base transition-colors cursor-pointer shadow-xs"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-black text-sm text-[#203751]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="w-8 h-8 rounded-lg bg-white hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-base transition-colors cursor-pointer shadow-xs"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total Price */}
              <div className="text-right">
                <span className="text-xs text-slate-400 block font-medium">Total</span>
                <div className="flex items-baseline justify-end gap-1">
                  <span className="text-2xl sm:text-3xl font-black text-[#203751]">
                    {totalPrice}
                  </span>
                  <span className="text-xs font-black text-[#ae332e] uppercase">
                    DH
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Order Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5">
              <button
                type="button"
                onClick={handleWhatsapp}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-xl shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.529 1.768.814 2.79.814 3.182 0 5.768-2.587 5.768-5.766 0-3.18-2.586-5.766-5.767-5.766zm9.969 5.766c0 5.514-4.486 10-10 10-1.761 0-3.414-.46-4.856-1.264l-5.144 1.348 1.373-5.018c-.88-1.488-1.373-3.218-1.373-5.066 0-5.514 4.486-10 10-10s10 4.486 10 10z"/>
                </svg>
                <span>Commander ({totalPrice} DH)</span>
              </button>

              <a
                href="tel:+212663110370"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-[#203751] hover:bg-[#152538] text-white font-bold text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
                title="Appeler le restaurant"
              >
                <span>📞 Appeler</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
