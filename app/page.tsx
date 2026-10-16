'use client';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import { MENU_ITEMS, MenuItem } from './data/menu';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<'boka' | 'tacos' | 'frito' | 'big_box'>('boka');

  // Featured items
  const featuredBoka = MENU_ITEMS.find((item) => item.id === 'boka-original') || MENU_ITEMS[0];
  const itemsForActiveCategory = MENU_ITEMS.filter((item) => item.category === activeCategory).slice(0, 4);

  // Gallery of mouthwatering food highlights
  const visualGallery = [
    {
      title: 'Sandwichs Boca Croustillants',
      subtitle: 'Pain doré, graines & poulet pané minute',
      tag: 'Signature',
      price: '39 DH',
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
      span: 'col-span-1 md:col-span-2 row-span-2',
      link: '/menu',
    },
    {
      title: 'French Tacos Gourmands',
      subtitle: 'Nappés de notre sauce fromagère maison',
      tag: 'Populaire',
      price: 'Dès 39 DH',
      image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
      span: 'col-span-1',
      link: '/menu',
    },
    {
      title: 'Frito Crispy & Sauces',
      subtitle: 'Bouchées dorées ultra-croustillantes',
      tag: 'Croustillant',
      price: '43 DH',
      image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
      span: 'col-span-1',
      link: '/menu',
    },
    {
      title: 'Big Box Généreuses',
      subtitle: 'Tenders, frites & boisson bien fraîche',
      tag: 'Formule Complète',
      price: 'Dès 41 DH',
      image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
      span: 'col-span-1 md:col-span-2',
      link: '/menu',
    },
  ];

  // Craft photo steps
  const craftStories = [
    {
      title: 'Notre Pain Baguette Toasté',
      description: 'Pain croustillant cuit chaque matin, doré sur plaque avec graines torréfiées pour un craquant immédiat.',
      image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
      badge: 'Pain Artisanal',
    },
    {
      title: 'Poulet Mariné & Panure Secrète',
      description: 'Filets de poulet frais marinés 24h dans notre sélection d\'épices, puis panés et frits à la commande.',
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
      badge: '100% Frais',
    },
    {
      title: 'Sauces Fromagères Maison',
      description: 'Sauce fromagère coulante, cheddar affiné fondu et sauce secrète Boka pour une onctuosité incomparable.',
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
      badge: 'Recette Maison',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf7ee] text-slate-800">
      <Navbar />

      <main className="flex-1">
        {/* ================= HERO SECTION (Clean, Image-Rich, Modern) ================= */}
        <section id="hero" className="relative pt-8 pb-16 lg:pt-16 lg:pb-28 overflow-hidden">
          {/* Subtle warm ambient background glow */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-amber-400/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#ae332e]/8 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column Text & Clean Highlights */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                
                {/* Clean Editorial Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#ae332e] inline-block" />
                  <span className="text-xs font-semibold tracking-wide text-[#203751] uppercase">
                    BOKA Polito Chiken • Street Food Gourmande
                  </span>
                </div>

                {/* Impactful Heading */}
                <h1 className="text-4xl sm:text-6xl font-black text-[#203751] tracking-tight leading-[1.08]">
                  Le goût unique qui vous fait <span className="text-[#ae332e]">craquer</span>.
                </h1>

                {/* Subtitle */}
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Sandwichs au pain baguette croustillant doré, tacos français débordants de sauce fromagère, tenders marinés et Big Box généreuses. Tout est préparé minute avec des ingrédients 100% frais.
                </p>

                {/* Key Attributes Bar (Clean, no emoji clutter) */}
                <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0">
                  <div className="bg-white/90 p-3 rounded-2xl border border-slate-200/70 text-center">
                    <span className="block text-lg font-black text-[#ae332e]">43+</span>
                    <span className="text-xs font-medium text-slate-600">Recettes au menu</span>
                  </div>
                  <div className="bg-white/90 p-3 rounded-2xl border border-slate-200/70 text-center">
                    <span className="block text-lg font-black text-[#203751]">100%</span>
                    <span className="text-xs font-medium text-slate-600">Poulet frais mariné</span>
                  </div>
                  <div className="bg-white/90 p-3 rounded-2xl border border-slate-200/70 text-center">
                    <span className="block text-lg font-black text-amber-600">7j / 7</span>
                    <span className="text-xs font-medium text-slate-600">Livraison express</span>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start pt-3">
                  <a
                    href="/menu"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#ae332e] hover:bg-[#962924] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-[#ae332e]/25 transition-all hover:scale-102 active:scale-98"
                  >
                    <span>Découvrir la Carte</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>

                  <a
                    href="https://wa.me/212663110370?text=Bonjour%20BOKA,%20je%20souhaite%20commander%20pour%20livraison%20svp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#203751] hover:bg-[#152538] text-white font-bold text-sm sm:text-base shadow-md transition-all hover:scale-102 active:scale-98"
                  >
                    <svg className="w-4 h-4 fill-emerald-400" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.529 1.768.814 2.79.814 3.182 0 5.768-2.587 5.768-5.766 0-3.18-2.586-5.766-5.767-5.766zm9.969 5.766c0 5.514-4.486 10-10 10-1.761 0-3.414-.46-4.856-1.264l-5.144 1.348 1.373-5.018c-.88-1.488-1.373-3.218-1.373-5.066 0-5.514 4.486-10 10-10s10 4.486 10 10z"/>
                    </svg>
                    <span>Commander (+212 663-110370)</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Photo Collage Grid (Warm, authentic food photography) */}
              <div className="lg:col-span-6 relative">
                <div className="grid grid-cols-12 gap-4 items-center">
                  
                  {/* Big Hero Photo */}
                  <div className="col-span-8 relative group overflow-hidden rounded-3xl shadow-2xl border-4 border-white bg-slate-900 aspect-4/5">
                    <img
                      src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80"
                      alt="Sandwich Boca Signature"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-[#ae332e] text-white text-xs font-black uppercase tracking-wider shadow-md">
                        Signature Boka
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-xs text-amber-300 font-bold uppercase tracking-wider block">Best-Seller</span>
                      <h3 className="font-extrabold text-lg sm:text-xl">Boca Original Croustillant</h3>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/20">
                        <span className="text-lg font-black text-white">39 DH</span>
                        <button
                          onClick={() => setSelectedProduct(featuredBoka)}
                          className="px-3 py-1 rounded-xl bg-white text-[#203751] hover:bg-[#ae332e] hover:text-white transition-colors text-xs font-bold cursor-pointer"
                        >
                          Voir la recette &rarr;
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Two Stacked Side Photos */}
                  <div className="col-span-4 space-y-4">
                    {/* Side Photo 1: Tacos */}
                    <div className="relative group overflow-hidden rounded-2xl shadow-lg border-2 border-white aspect-square bg-slate-900">
                      <img
                        src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80"
                        alt="French Tacos Sauce Fromagère"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                        <span className="text-[10px] uppercase font-bold text-amber-300 block">Tacos Lyonnais</span>
                        <span className="text-xs font-black block">Sauce Fromagère</span>
                      </div>
                    </div>

                    {/* Side Photo 2: Crispy tenders */}
                    <div className="relative group overflow-hidden rounded-2xl shadow-lg border-2 border-white aspect-square bg-slate-900">
                      <img
                        src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80"
                        alt="Frito Crispy Chiken"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                        <span className="text-[10px] uppercase font-bold text-amber-300 block">Frito Poulet</span>
                        <span className="text-xs font-black block">Panure Dorée</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= VISUAL MOSAIC GALLERY ================= */}
        <section className="py-16 bg-white border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#ae332e] block mb-1">
                  En Direct de Nos Cuisines
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-[#203751]">
                  Des spécialités préparées avec passion
                </h2>
              </div>
              <a
                href="/menu"
                className="text-sm font-extrabold text-[#ae332e] hover:text-[#203751] transition-colors flex items-center gap-1"
              >
                <span>Explorer tout le menu (43 spécialités)</span>
                <span>&rarr;</span>
              </a>
            </div>

            {/* Photo Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visualGallery.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className={`group relative overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 min-h-[260px] md:min-h-[300px] flex flex-col justify-end p-6 ${item.span}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#203751] via-[#203751]/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

                  <div className="relative z-10 text-white space-y-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full bg-[#ae332e] text-white text-[11px] font-black uppercase tracking-wider">
                        {item.tag}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/20 text-white text-[11px] font-bold backdrop-blur-md">
                        {item.price}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-200 text-xs sm:text-sm max-w-md">
                      {item.subtitle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ================= INTERACTIVE MENU SHOWCASE ================= */}
        <section id="specialites" className="py-20 bg-[#fbf7ee]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#ae332e] block mb-1">
                  La Carte à la Loupe
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#203751]">
                  Nos recettes les plus commandées
                </h2>
              </div>

              {/* Clean Category Filter Tabs */}
              <div className="inline-flex flex-wrap p-1.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                {[
                  { id: 'boka', label: 'Boca Sandwiches' },
                  { id: 'tacos', label: 'French Tacos' },
                  { id: 'frito', label: 'Frito Crispy' },
                  { id: 'big_box', label: 'Big Box' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id as any)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      activeCategory === tab.id
                        ? 'bg-[#ae332e] text-white shadow-sm'
                        : 'text-slate-600 hover:text-[#203751] hover:bg-slate-50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Cards Grid with Real Item Photos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {itemsForActiveCategory.map((item) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  onSelect={(p) => setSelectedProduct(p)}
                />
              ))}
            </div>

            {/* View Full Menu Banner */}
            <div className="mt-14 p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-slate-200 shadow-sm hidden sm:block">
                  <img
                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=200&q=80"
                    alt="Menu preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-[#203751]">
                    Vous souhaitez voir toutes nos spécialités ?
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                    Accédez aux 43 plats complets avec ingrédients, options d&apos;épices et prix.
                  </p>
                </div>
              </div>

              <a
                href="/menu"
                className="shrink-0 px-7 py-3.5 rounded-xl bg-[#203751] hover:bg-[#152538] text-white font-bold text-sm transition-all hover:scale-102"
              >
                Voir le Menu Complet (43 Items) &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* ================= REAL PHOTO STORY & SAVOIR-FAIRE ================= */}
        <section id="about" className="py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-[#ae332e] block">
                Notre Philosophie Culinaire
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#203751]">
                Pourquoi BOKA fait toute la différence
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Une préparation artisanale, sans compromis sur la fraîcheur de la viande et le goût authentique.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {craftStories.map((story, i) => (
                <div
                  key={i}
                  className="rounded-3xl overflow-hidden border border-slate-200/80 bg-[#fbf7ee] flex flex-col group hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden bg-slate-900">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/95 text-[#203751] text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-sm">
                        {story.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h3 className="text-lg font-black text-[#203751] mb-2">
                        {story.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {story.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ORDER BANNER (Direct & Professional) ================= */}
        <section className="bg-[#203751] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#152538] rounded-3xl p-8 sm:p-12 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
              
              <div className="space-y-3 text-center lg:text-left">
                <span className="text-xs font-black uppercase tracking-widest text-[#ae332e] bg-[#ae332e]/10 px-3 py-1 rounded-full border border-[#ae332e]/30">
                  Service Livraison Directe
                </span>
                <h3 className="text-2xl sm:text-4xl font-black">
                  Commandez dès maintenant chez BOKA
                </h3>
                <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                  Par WhatsApp ou par appel téléphonique, notre équipe prend votre commande immédiatement pour une livraison chaude et rapide à votre porte.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3.5 w-full lg:w-auto shrink-0">
                <a
                  href="https://wa.me/212663110370?text=Bonjour%20BOKA,%20je%20veux%20commander%20pour%20livraison"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-lg transition-all hover:scale-102"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.529 1.768.814 2.79.814 3.182 0 5.768-2.587 5.768-5.766 0-3.18-2.586-5.766-5.767-5.766zm9.969 5.766c0 5.514-4.486 10-10 10-1.761 0-3.414-.46-4.856-1.264l-5.144 1.348 1.373-5.018c-.88-1.488-1.373-3.218-1.373-5.066 0-5.514 4.486-10 10-10s10 4.486 10 10z"/>
                  </svg>
                  <span>WhatsApp : +212 663-110370</span>
                </a>

                <a
                  href="tel:+212663110370"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#ae332e] hover:bg-[#c93b35] text-white font-extrabold text-sm shadow-lg transition-all hover:scale-102"
                >
                  <span>Appeler Directement</span>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* ================= CUSTOMER REVIEWS (Clean Minimal Cards) ================= */}
        <section id="reviews" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#ae332e] block">
                Avis Clients
              </span>
              <h2 className="text-3xl font-black text-[#203751]">
                Ce que nos clients apprécient le plus
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-7 rounded-3xl bg-[#fbf7ee] border border-slate-200/80 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-amber-500 font-bold text-sm tracking-widest">★★★★★</div>
                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    « Le sandwich Boca Original est de loin le meilleur sandwich au poulet croustillant que j&apos;ai goûté. Le pain est croustillant et le poulet tellement tendre. »
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <span className="text-sm font-black text-[#203751] block">Yassine M.</span>
                  <span className="text-xs text-slate-400">Client fidèle</span>
                </div>
              </div>

              <div className="p-7 rounded-3xl bg-[#fbf7ee] border border-slate-200/80 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-amber-500 font-bold text-sm tracking-widest">★★★★★</div>
                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    « Livraison impeccable en 25 minutes, les French Tacos étaient encore bien chauds avec la sauce fromagère qui coule. Portions très généreuses. »
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <span className="text-sm font-black text-[#203751] block">Sofia B.</span>
                  <span className="text-xs text-slate-400">Commande livraison</span>
                </div>
              </div>

              <div className="p-7 rounded-3xl bg-[#fbf7ee] border border-slate-200/80 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-amber-500 font-bold text-sm tracking-widest">★★★★★</div>
                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    « Big Box Original et fritos très bien assaisonnés. Excellent rapport qualité-prix pour un vrai repas gourmand entre amis. »
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <span className="text-sm font-black text-[#203751] block">Karim T.</span>
                  <span className="text-xs text-slate-400">Commande au comptoir</span>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />

      {/* Product Detail Modal */}
      <ProductModal
        item={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
