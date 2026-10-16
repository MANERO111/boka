'use client';

import React, { useState } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Banner Delivery Bar */}
      <div className="bg-[#203751] text-white text-xs py-1.5 px-4 font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block animate-pulse text-amber-400">⚡</span>
            <span>Le goût qui vous fait craquer — Le poulet comme vous l&apos;aimez</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-slate-300">Service Livraison Rapide :</span>
            <a 
              href="tel:+212663110370" 
              className="font-bold text-amber-300 hover:text-white transition-colors flex items-center gap-1"
            >
              🛵 +212 663-110370
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center">
          {/* <Logo /> */}
          <img src="/img/logo1.png" className='w-40 ' alt="boka logo" />
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-sm text-[#203751]">
          <a href="/#about" className="hover:text-[#ae332e] transition-colors">
            Le Restaurant
          </a>
          <a href="/#specialites" className="hover:text-[#ae332e] transition-colors">
            Spécialités
          </a>
          <a href="/menu" className="hover:text-[#ae332e] transition-colors flex items-center gap-1.5 font-bold text-[#ae332e]">
            <span>Notre Menu</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#ae332e] text-white uppercase">
              43 items
            </span>
          </a>
          <a href="/#contact" className="hover:text-[#ae332e] transition-colors">
            Contact & Horaires
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/212663110370?text=Bonjour%20BOKA,%20je%20souhaite%20passer%20commande%20svp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#ae332e] hover:bg-[#c93b35] text-white font-bold text-sm shadow-md shadow-[#ae332e]/25 transition-all hover:scale-105"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.529 1.768.814 2.79.814 3.182 0 5.768-2.587 5.768-5.766 0-3.18-2.586-5.766-5.767-5.766zm9.969 5.766c0 5.514-4.486 10-10 10-1.761 0-3.414-.46-4.856-1.264l-5.144 1.348 1.373-5.018c-.88-1.488-1.373-3.218-1.373-5.066 0-5.514 4.486-10 10-10s10 4.486 10 10z"/>
            </svg>
            <span>Commander</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-700 hover:text-[#ae332e] hover:bg-slate-100"
          aria-label="Ouvrir le menu mobile"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3 font-semibold text-slate-700 animate-in slide-in-from-top-4">
          <a
            href="/#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-[#ae332e]"
          >
            Le Restaurant
          </a>
          <a
            href="/#specialites"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-[#ae332e]"
          >
            Spécialités
          </a>
          <a
            href="/menu"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#ae332e] font-bold"
          >
            Menu Complet (43 items)
          </a>
          <a
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-[#ae332e]"
          >
            Contact & Horaires
          </a>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="https://wa.me/212663110370"
              className="w-full text-center py-3 rounded-xl bg-[#ae332e] text-white font-bold"
            >
              Commander sur WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
