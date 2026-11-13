'use client';

import React from 'react';
import { MenuItem } from '../data/menu';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
  priority?: boolean;
}

export default function ProductCard({ item, onSelect, priority = false }: ProductCardProps) {
  const { addItem } = useCart();
  return (
    <div
      onClick={() => onSelect(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(item);
        }
      }}
      className="group relative flex flex-col justify-between bg-white/95 hover:bg-white rounded-[28px] p-3.5 sm:p-4 shadow-[0_4px_20px_rgba(32,55,81,0.05)] hover:shadow-[0_22px_45px_rgba(32,55,81,0.13)] border border-slate-100 hover:border-[#ae332e]/35 transition-all duration-400 ease-out hover:-translate-y-2 cursor-pointer overflow-hidden transform-gpu focus:outline-hidden focus:ring-2 focus:ring-[#ae332e]/50"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-[#ae332e]/10 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />

      {/* Floating Badges */}
      <div className="absolute top-5 left-5 z-20 flex flex-col gap-1.5 items-start pointer-events-none">
        {item.badge && (
          <span className="px-3 py-1 text-[11px] font-black uppercase tracking-wider rounded-full bg-gradient-to-r from-[#ae332e] to-[#c93b35] text-white shadow-md shadow-[#ae332e]/30 flex items-center gap-1">
            <span>✨</span>
            <span>{item.badge}</span>
          </span>
        )}
        {item.popular && !item.badge && (
          <span className="px-3 py-1 text-[11px] font-black uppercase tracking-wider rounded-full bg-gradient-to-r from-[#203751] to-[#2d4c6f] text-white shadow-md shadow-[#203751]/30 flex items-center gap-1">
            <span className="text-amber-400">★</span>
            <span>Populaire</span>
          </span>
        )}
        {item.spiceLevel && item.spiceLevel !== 'Doux' && (
          <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase rounded-full bg-amber-500/90 text-white backdrop-blur-md shadow-xs flex items-center gap-1">
            <span>🌶️</span>
            <span>{item.spiceLevel}</span>
          </span>
        )}
      </div>

      {/* Square Aspect Ratio Image Container (1:1 perfect for 1254x1254) */}
      <div className="relative w-full aspect-square rounded-[22px] overflow-hidden bg-gradient-to-br from-slate-100 via-stone-50 to-slate-200 shadow-inner">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover object-center group-hover:scale-108 group-hover:rotate-0.5 transition-transform duration-700 ease-out"
          loading={priority ? 'eager' : 'lazy'}
        />

        {/* Cinematic gradient overlays on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#203751]/80 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Quick View Pill / Floating hover indicator */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <span className="text-[11px] font-bold px-3 py-1.5 rounded-xl bg-white/95 text-[#203751] backdrop-blur-md shadow-md flex items-center gap-1.5">
            <span>👁️</span>
            <span>Détails & Recette</span>
          </span>
          <span className="text-[11px] font-black px-2.5 py-1.5 rounded-xl bg-[#ae332e] text-white shadow-md flex items-center gap-1">
            <span>+</span>
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="pt-3.5 pb-1 flex-1 flex flex-col justify-between">
        <div>
          {/* Header Title & Mini Category */}
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="text-base sm:text-lg font-black text-[#203751] group-hover:text-[#ae332e] transition-colors line-clamp-1 tracking-tight">
              {item.name}
            </h3>
          </div>

          {/* Description */}
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-3 font-normal">
            {item.description}
          </p>

          {/* Key ingredients pills tags */}
          {item.ingredients && item.ingredients.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3.5">
              {item.ingredients.slice(0, 2).map((ing, i) => (
                <span
                  key={i}
                  className="text-[10px] font-semibold text-slate-600 bg-slate-100/80 px-2 py-0.5 rounded-lg border border-slate-200/50 truncate max-w-[130px]"
                >
                  {ing}
                </span>
              ))}
              {item.ingredients.length > 2 && (
                <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded-lg border border-slate-100">
                  +{item.ingredients.length - 2}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Price & Action Button */}
        <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl sm:text-[26px] font-black text-[#203751] group-hover:text-[#ae332e] transition-colors tracking-tight">
              {item.price}
            </span>
            <span className="text-xs font-black text-[#ae332e] uppercase tracking-wider">
              DH
            </span>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              addItem(item, 1);
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100/90 text-[#203751] group-hover:bg-[#ae332e] group-hover:text-white transition-all duration-300 font-bold text-xs shadow-xs group-hover:shadow-md group-hover:shadow-[#ae332e]/30 cursor-pointer"
          >
            <span>+ Ajouter</span>
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
