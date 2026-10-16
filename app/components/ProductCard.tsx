'use client';

import React from 'react';
import { MenuItem } from '../data/menu';

interface ProductCardProps {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
  priority?: boolean;
}

export default function ProductCard({ item, onSelect, priority = false }: ProductCardProps) {
  return (
    <div
      onClick={() => onSelect(item)}
      className="group relative flex flex-col justify-between bg-white rounded-3xl p-4 sm:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(32,55,81,0.12)] border border-slate-100/90 hover:border-[#ae332e]/30 transition-all duration-400 hover:-translate-y-2 cursor-pointer overflow-hidden transform-gpu"
    >
      {/* Top Floating Badges */}
      <div className="absolute top-6 left-6 z-10 flex flex-col gap-1.5 items-start pointer-events-none">
        {item.badge && (
          <span className="px-3.5 py-1 text-[11px] font-black uppercase tracking-wider rounded-full bg-gradient-to-r from-[#ae332e] to-[#c93b35] text-white shadow-lg shadow-[#ae332e]/35 backdrop-blur-xs flex items-center gap-1">
            <span>✨</span>
            <span>{item.badge}</span>
          </span>
        )}
        {item.popular && !item.badge && (
          <span className="px-3.5 py-1 text-[11px] font-black uppercase tracking-wider rounded-full bg-gradient-to-r from-[#203751] to-[#2d4c6f] text-white shadow-lg shadow-[#203751]/30 backdrop-blur-xs flex items-center gap-1">
            <span className="text-amber-400">★</span>
            <span>Populaire</span>
          </span>
        )}
        {item.spiceLevel && item.spiceLevel !== 'Doux' && (
          <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase rounded-full bg-amber-500/90 text-white backdrop-blur-md shadow-sm flex items-center gap-1">
            <span>🌶️</span>
            <span>{item.spiceLevel}</span>
          </span>
        )}
      </div>

      {/* Image container with subtle shimmer & glowing hover overlay */}
      <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 mb-4 shadow-inner">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
          loading={priority ? 'eager' : 'lazy'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#203751]/80 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Floating Quick Action Badge on Hover */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <span className="text-[11px] font-extrabold px-3 py-1.5 rounded-xl bg-white/95 text-[#203751] backdrop-blur-md shadow-md flex items-center gap-1">
            <span>🔍</span>
            <span>Ingrédients</span>
          </span>
          <span className="text-[11px] font-extrabold px-3 py-1.5 rounded-xl bg-emerald-600 text-white shadow-md flex items-center gap-1">
            <span>Commander</span>
            <span>&rarr;</span>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Title */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <h3 className="text-lg font-black text-[#203751] group-hover:text-[#ae332e] transition-colors line-clamp-1 tracking-tight">
              {item.name}
            </h3>
          </div>

          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4 font-normal">
            {item.description}
          </p>

          {/* Key ingredients pills tags preview */}
          {item.ingredients && item.ingredients.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {item.ingredients.slice(0, 2).map((ing, i) => (
                <span
                  key={i}
                  className="text-[10px] font-medium text-slate-500 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100 truncate max-w-[140px]"
                >
                  {ing}
                </span>
              ))}
              {item.ingredients.length > 2 && (
                <span className="text-[10px] font-medium text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded-md border border-slate-100">
                  +{item.ingredients.length - 2}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Price & CTA */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-3xl font-black text-[#203751] group-hover:text-[#ae332e] transition-colors tracking-tight">
              {item.price}
            </span>
            <span className="text-xs sm:text-sm font-black text-[#ae332e] uppercase tracking-wider">
              DH
            </span>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 text-[#203751] group-hover:bg-[#ae332e] group-hover:text-white transition-all duration-300 font-bold text-xs shadow-xs group-hover:shadow-md group-hover:shadow-[#ae332e]/25 cursor-pointer"
            aria-label={`Choisir ${item.name}`}
          >
            <span>Choisir</span>
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
