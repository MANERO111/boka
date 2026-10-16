import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#203751] text-white pt-16 pb-12 border-t-4 border-[#ae332e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: About */}
          <div className="space-y-4">
            {/* <Logo light className="h-10" /> */}
          <img src="/img/logo.png" className='w-60 ' alt="boka logo" />

            <p className="text-slate-300 text-sm leading-relaxed">
              BOKA Polito Chiken est votre destination incontournable pour des sandwichs savoureux, du poulet mariné croustillant, des tacos généreux et des recettes exclusives.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#ae332e] text-white text-xs font-bold uppercase tracking-wider">
                Halal Certifié
              </span>
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-bold">
                100% Frais
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider text-amber-400 mb-4">
              Navigation Rapide
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><a href="/#about" className="hover:text-white transition-colors">À propos du restaurant</a></li>
              <li><a href="/#specialites" className="hover:text-white transition-colors">Nos Spécialités Signatures</a></li>
              <li><a href="/menu" className="hover:text-white transition-colors text-amber-300 font-semibold">Consulter le Menu Complet (43 Plats)</a></li>
              <li><a href="/#reviews" className="hover:text-white transition-colors">Avis de nos clients</a></li>
            </ul>
          </div>

          {/* Col 3: Horaires */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider text-amber-400 mb-4">
              Heures d&apos;Ouverture
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex justify-between py-1 border-b border-white/5">
                <span>Lundi - Jeudi :</span>
                <span className="font-semibold text-white">11h30 - 00h30</span>
              </li>
              <li className="flex justify-between py-1 border-b border-white/5">
                <span>Vendredi :</span>
                <span className="font-semibold text-white">14h00 - 01h30</span>
              </li>
              <li className="flex justify-between py-1 border-b border-white/5">
                <span>Samedi - Dimanche :</span>
                <span className="font-semibold text-white">12h00 - 02h00</span>
              </li>
              <li className="pt-2 text-xs text-amber-300">
                Service continu & livraison à domicile 7j/7 !
              </li>
            </ul>
          </div>

          {/* Col 4: Delivery & Contact */}
          <div className="space-y-4">
            <h3 className="text-base font-bold uppercase tracking-wider text-amber-400 mb-4">
              Service Livraison
            </h3>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-xs text-slate-400 uppercase tracking-wider block">Numéro Officiel</span>
              <a 
                href="tel:+212663110370" 
                className="text-xl font-black text-amber-400 hover:text-white transition-colors block"
              >
                +212 663-110370
              </a>
              <p className="text-xs text-slate-300">
                Livraison express directement à votre porte, chaude et croustillante.
              </p>
            </div>

            <a
              href="https://wa.me/212663110370"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#ae332e] hover:bg-[#c93b35] text-white font-bold text-sm shadow-lg transition-transform hover:scale-102"
            >
              <span>Commander par WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 BOKA Polito Chiken. Tous droits réservés.</p>
          <div className="flex gap-6">
            <span>« Le goût qui vous fait craquer »</span>
            <span>« Le poulet comme vous l&apos;aimez »</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
