'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { MENU_ITEMS, CATEGORIES, MenuItem } from '../data/menu';

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const [activeFilterBadge, setActiveFilterBadge] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'popular'>('default');

  // Filter & sort products
  const filteredProducts = useMemo(() => {
    let items = MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));

      let matchesBadge = true;
      if (activeFilterBadge === 'popular') {
        matchesBadge = Boolean(item.popular || item.badge);
      } else if (activeFilterBadge === 'spicy') {
        matchesBadge = Boolean(item.spiceLevel && item.spiceLevel !== 'Doux');
      }

      return matchesCategory && matchesSearch && matchesBadge;
    });

    if (sortBy === 'price-asc') {
      items = [...items].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      items = [...items].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'popular') {
      items = [...items].sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
    }

    return items;
  }, [selectedCategory, searchQuery, activeFilterBadge, sortBy]);

  // Active category meta
  const currentCategoryObj = CATEGORIES.find((c) => c.id === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf7ee]">
      <Navbar />

      <main className="flex-1">
        {/* ================= HERO HEADER ================= */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#203751] via-[#1a2d42] to-[#122030] text-white pt-14 pb-20 sm:pt-20 sm:pb-28 border-b-4 border-[#ae332e]">
          {/* Subtle Ambient Lighting */}
          <div className="absolute top-0 right-1/4 -mt-20 w-96 h-96 rounded-full bg-[#ae332e]/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 -mb-20 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-bold tracking-wide text-amber-300">
                <span className="w-2 h-2 rounded-full bg-[#ae332e] animate-ping" />
                <span>La Carte Gourmande 100% Fraîche</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Notre Menu <span className="text-[#ae332e]">Complet</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
                Découvrez nos 43 recettes d&apos;exception : Sandwichs Boca signatures, Tacos gratinés, poulet frit croustillant, Big Box généreuses et sauces maison. Tous nos prix sont affichés en <strong>DH</strong>.
              </p>

              {/* Quick Info Badges */}
              <div className="pt-2 flex flex-wrap justify-center gap-3 text-xs sm:text-sm font-bold">
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 flex items-center gap-2">
                  <span>🍗</span> Poulet Frais & Mariné 24h
                </div>
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 flex items-center gap-2">
                  <span>⚡</span> Préparé minute à la commande
                </div>
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 flex items-center gap-2">
                  <span>🛵</span> Livraison rapide +212 663-110370
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTROLS & SEARCH BAR ================= */}
        <section className="sticky top-[80px] z-30 bg-[#fbf7ee]/95 backdrop-blur-md border-b border-slate-200/80 py-4 shadow-xs">
          <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            {/* Search + Quick Badges + Sort */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              {/* Search Input */}
              <div className="relative flex-1 max-w-xl">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher un plat (ex: Boca Spyc, Tacos, Dragon, Frito, Cheddar...)"
                  className="w-full px-5 py-3 pl-12 rounded-2xl bg-white border border-slate-200 text-sm font-medium focus:outline-hidden focus:border-[#203751] focus:ring-2 focus:ring-[#203751]/20 shadow-xs"
                />
                <svg className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700 bg-slate-100 rounded-lg px-2 py-1"
                  >
                    Effacer
                  </button>
                )}
              </div>

              {/* Quick Filters & Sorting */}
              <div className="flex flex-wrap items-center gap-2 justify-between sm:justify-start">
                <div className="flex items-center gap-1.5 bg-white p-1 rounded-2xl border border-slate-200/80 shadow-xs">
                  <button
                    onClick={() => setActiveFilterBadge('all')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeFilterBadge === 'all'
                        ? 'bg-[#203751] text-white shadow-xs'
                        : 'text-slate-600 hover:text-[#203751]'
                    }`}
                  >
                    Tous
                  </button>
                  <button
                    onClick={() => setActiveFilterBadge('popular')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                      activeFilterBadge === 'popular'
                        ? 'bg-[#ae332e] text-white shadow-xs'
                        : 'text-slate-600 hover:text-[#ae332e]'
                    }`}
                  >
                    <span>⭐</span>
                    <span>Populaires</span>
                  </button>
                  <button
                    onClick={() => setActiveFilterBadge('spicy')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                      activeFilterBadge === 'spicy'
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-amber-600'
                    }`}
                  >
                    <span>🌶️</span>
                    <span>Épicés</span>
                  </button>
                </div>

                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-white border border-slate-200/80 rounded-2xl px-3 py-2 text-xs font-bold text-[#203751] focus:outline-hidden focus:ring-2 focus:ring-[#203751]/20 shadow-xs cursor-pointer"
                >
                  <option value="default">Trier par : Ordre Menu</option>
                  <option value="popular">Trier par : Coups de Cœur</option>
                  <option value="price-asc">Prix : Moins cher &rarr; Plus cher</option>
                  <option value="price-desc">Prix : Plus cher &rarr; Moins cher</option>
                </select>
              </div>
            </div>

            {/* Horizontal Scroll Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar pt-1">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                const count = cat.id === 'all' 
                  ? MENU_ITEMS.length 
                  : MENU_ITEMS.filter(m => m.category === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                    }}
                    className={`whitespace-nowrap px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-xs ${
                      isActive
                        ? 'bg-[#203751] text-white shadow-md shadow-[#203751]/25 scale-102 ring-2 ring-[#203751]'
                        : 'bg-white text-slate-700 hover:text-[#203751] hover:bg-slate-50 border border-slate-200/90'
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-black ${
                      isActive ? 'bg-[#ae332e] text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= PRODUCTS SHOWCASE ================= */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl md:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Headline / Stats */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-slate-200/80 gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#203751] flex items-center gap-2">
                  <span>{currentCategoryObj?.icon}</span>
                  <span>{currentCategoryObj?.label || 'Toutes les catégories'}</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Tous les sandwichs et plats sont préparés à la commande avec du pain doré et du poulet mariné.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-500 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-xs">
                  <strong>{filteredProducts.length}</strong> plat{filteredProducts.length > 1 ? 's' : ''} affiché{filteredProducts.length > 1 ? 's' : ''}
                </span>

                {(selectedCategory !== 'all' || searchQuery || activeFilterBadge !== 'all') && (
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSearchQuery('');
                      setActiveFilterBadge('all');
                      setSortBy('default');
                    }}
                    className="text-xs font-bold text-[#ae332e] hover:underline cursor-pointer"
                  >
                    Réinitialiser tout
                  </button>
                )}
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
                {filteredProducts.map((item, idx) => (
                  <ProductCard
                    key={item.id}
                    item={item}
                    onSelect={(selected) => setSelectedProduct(selected)}
                    priority={idx < 4}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300 p-8 shadow-xs max-w-xl mx-auto">
                <span className="text-5xl block mb-4">🔍</span>
                <h3 className="text-xl font-black text-[#203751]">Aucun plat ne correspond à votre sélection</h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Vérifiez l&apos;orthographe de votre recherche ou retirez certains filtres pour explorer nos 43 recettes.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                    setActiveFilterBadge('all');
                    setSortBy('default');
                  }}
                  className="mt-6 px-6 py-3 rounded-2xl bg-[#203751] hover:bg-[#152538] text-white text-xs font-black shadow-lg transition-transform hover:scale-105 cursor-pointer"
                >
                  Afficher tout le Menu
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ================= ORDERING FLOATING CALLOUT ================= */}
        <section className="bg-gradient-to-r from-[#203751] via-[#152538] to-[#203751] text-white py-14 border-t-2 border-[#ae332e]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-[#ae332e] text-white text-xs font-black uppercase tracking-wider">
              Service À Emporter & Livraison Rapide
            </span>
            <h2 className="text-3xl sm:text-4xl font-black">
              Vous avez fait votre choix ?
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
              Commandez directement sur WhatsApp ou par téléphone. Vos repas sont livrés chauds, emballés avec soin pour préserver tout le croustillant.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/212663110370?text=Bonjour%20BOKA,%20je%20souhaite%20passer%20une%20commande%20depuis%20la%20carte"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-xl shadow-emerald-900/40 hover:scale-105 transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.529 1.768.814 2.79.814 3.182 0 5.768-2.587 5.768-5.766 0-3.18-2.586-5.766-5.767-5.766zm9.969 5.766c0 5.514-4.486 10-10 10-1.761 0-3.414-.46-4.856-1.264l-5.144 1.348 1.373-5.018c-.88-1.488-1.373-3.218-1.373-5.066 0-5.514 4.486-10 10-10s10 4.486 10 10z"/>
                </svg>
                <span>Commander sur WhatsApp</span>
              </a>

              <a
                href="tel:+212663110370"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#ae332e] hover:bg-[#962924] text-white font-black text-sm shadow-xl shadow-[#ae332e]/30 hover:scale-105 transition-all"
              >
                <span>📞 Appeler le +212 663-110370</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Detail Modal */}
      <ProductModal
        item={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
