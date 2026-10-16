'use client';

import React, { useEffect } from 'react';
import { MenuItem } from '../data/menu';

interface ProductModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onOrderWhatsapp?: (item: MenuItem) => void;
}

export default function ProductModal({ item, onClose, onOrderWhatsapp }: ProductModalProps) {
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

  const handleWhatsapp = () => {
    const message = encodeURIComponent(
      `Bonjour BOKA Polito Chiken ! Je souhaite commander : *${item.name}* (${item.price} DH). Pouvez-vous me confirmer la disponibilité pour livraison ? Merci !`
    );
    window.open(`https://wa.me/212663110370?text=${message}`, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 transform transition-all animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-modal-btn"
          aria-label="Fermer la modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 text-slate-700 hover:text-white hover:bg-[#ae332e] shadow-md flex items-center justify-center transition-colors cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Product Image Header with Gradient & Badges */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          {/* Badges on image */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {item.badge && (
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ae332e] text-white shadow-lg">
                {item.badge}
              </span>
            )}
            {item.spiceLevel && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-[#203751] backdrop-blur-md shadow">
                🌶️ {item.spiceLevel}
              </span>
            )}
          </div>

          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between text-white">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                Spécialité BOKA
              </span>
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-black drop-shadow-sm">
                {item.name}
              </h2>
            </div>
            <div className="text-right">
              <span className="text-2xl sm:text-3xl font-black text-amber-400 drop-shadow-md">
                {item.price} <span className="text-base sm:text-lg font-bold text-white">DH</span>
              </span>
            </div>
          </div>
        </div>

        {/* Details Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Description</h4>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base font-normal">
              {item.description}
            </p>
          </div>

          {/* Ingredients list */}
          {item.ingredients && item.ingredients.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#203751] mb-3 flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#ae332e]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Ingrédients & Composition
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {item.ingredients.map((ing, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="w-2 h-2 rounded-full bg-[#ae332e] flex-shrink-0" />
                    <span>{ing}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Delivery & Ordering Actions */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Préparé à la minute & chaud</span>
            </div>

            <div className="flex w-full sm:w-auto gap-3">
              <button
                type="button"
                onClick={handleWhatsapp}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Commander via WhatsApp</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.529 1.768.814 2.79.814 3.182 0 5.768-2.587 5.768-5.766 0-3.18-2.586-5.766-5.767-5.766zm9.969 5.766c0 5.514-4.486 10-10 10-1.761 0-3.414-.46-4.856-1.264l-5.144 1.348 1.373-5.018c-.88-1.488-1.373-3.218-1.373-5.066 0-5.514 4.486-10 10-10s10 4.486 10 10z"/>
                </svg>
              </button>

              <a
                href="tel:+212663110370"
                className="inline-flex items-center justify-center px-4 py-3.5 rounded-2xl bg-[#203751] hover:bg-[#152538] text-white font-bold text-sm shadow-md transition-all hover:scale-[1.02]"
                title="Appeler le restaurant"
              >
                📞 Appeler
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
