'use client';

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type OrderStep = 'form' | 'loading' | 'success' | 'error';

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<OrderStep>('form');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [orderId, setOrderId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setStep('loading');

    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer: { name: name.trim(), phone: phone.trim() },
          notes: notes.trim(),
          items: items.map((i) => ({
            productId: i.product.id,
            name: i.product.name,
            price: i.product.price,
            quantity: i.quantity,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de la commande');
      }

      setOrderId(data.orderId);
      setStep('success');
      clearCart();
    } catch (err: any) {
      setErrorMsg(err.message || 'Une erreur est survenue');
      setStep('error');
    }
  };

  const handleClose = () => {
    setStep('form');
    setName('');
    setPhone('');
    setNotes('');
    setOrderId('');
    setErrorMsg('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#203751] to-[#1a2d42] px-6 py-5 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-black text-white">
              {step === 'success' ? '✅ Commande Confirmée' : step === 'error' ? '❌ Erreur' : '🛒 Finaliser la Commande'}
            </h2>
            {step === 'form' && (
              <p className="text-slate-300 text-xs mt-0.5">
                Remplissez vos infos pour recevoir votre N° de commande
              </p>
            )}
          </div>
          <button
            onClick={handleClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          {/* === FORM STEP === */}
          {step === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Order Summary */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Récapitulatif ({items.length} article{items.length > 1 ? 's' : ''})
                </h4>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex items-center justify-between text-sm">
                      <span className="text-slate-700 font-medium">
                        {item.quantity}× {item.product.name}
                      </span>
                      <span className="font-bold text-[#203751]">
                        {item.product.price * item.quantity} DH
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between">
                  <span className="font-bold text-[#203751]">Total</span>
                  <span className="text-xl font-black text-[#ae332e]">{totalPrice} DH</span>
                </div>
              </div>

              {/* Customer Info */}
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                    Votre Nom *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Ahmed Benali"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium focus:outline-hidden focus:border-[#203751] focus:ring-2 focus:ring-[#203751]/20"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ex: 0663110370"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium focus:outline-hidden focus:border-[#203751] focus:ring-2 focus:ring-[#203751]/20"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                    Notes (optionnel)
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ex: Sans oignons, extra sauce..."
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium focus:outline-hidden focus:border-[#203751] focus:ring-2 focus:ring-[#203751]/20 resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-[#ae332e] hover:bg-[#962924] text-white font-black text-sm shadow-lg shadow-[#ae332e]/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Confirmer la Commande</span>
                <span className="text-amber-300 font-black">({totalPrice} DH)</span>
              </button>
            </form>
          )}

          {/* === LOADING STEP === */}
          {step === 'loading' && (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full border-4 border-slate-200 border-t-[#ae332e] animate-spin mx-auto" />
              <p className="text-slate-600 font-bold">Envoi de votre commande...</p>
              <p className="text-slate-400 text-xs">Connexion avec le système de commande en cours</p>
            </div>
          )}

          {/* === SUCCESS STEP === */}
          {step === 'success' && (
            <div className="text-center py-8 space-y-5">
              <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <div>
                <h3 className="text-xl font-black text-[#203751]">Commande envoyée avec succès !</h3>
                <p className="text-sm text-slate-500 mt-1">
                  Présentez ce numéro au restaurant pour récupérer votre commande
                </p>
              </div>

              {/* Order ID Display */}
              <div className="bg-gradient-to-br from-[#203751] to-[#152538] rounded-2xl p-6 text-white">
                <p className="text-xs uppercase tracking-widest font-bold text-slate-300 mb-2">
                  Votre N° de Commande
                </p>
                <p className="text-2xl sm:text-3xl font-black tracking-wider text-amber-400 select-all">
                  {orderId}
                </p>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  📋 Montrez ce numéro au comptoir BOKA pour récupérer votre commande.
                </p>
              </div>

              <button
                onClick={handleClose}
                className="w-full py-3.5 rounded-2xl bg-[#203751] hover:bg-[#152538] text-white font-bold text-sm transition-all cursor-pointer"
              >
                Fermer
              </button>
            </div>
          )}

          {/* === ERROR STEP === */}
          {step === 'error' && (
            <div className="text-center py-8 space-y-5">
              <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>

              <div>
                <h3 className="text-xl font-black text-[#203751]">Erreur</h3>
                <p className="text-sm text-slate-500 mt-1">{errorMsg}</p>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setStep('form')}
                  className="w-full py-3.5 rounded-2xl bg-[#ae332e] hover:bg-[#962924] text-white font-bold text-sm transition-all cursor-pointer"
                >
                  Réessayer
                </button>
                <button
                  onClick={handleClose}
                  className="w-full py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-all cursor-pointer"
                >
                  Fermer
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

