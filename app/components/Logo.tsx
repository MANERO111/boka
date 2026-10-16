import React from 'react';

export default function Logo({ className = "h-10", light = false }: { className?: string; light?: boolean }) {
  const mainColor = light ? "#ffffff" : "#203751";
  const redColor = "#ae332e";

  return (
    <div className={`flex items-center gap-2.5 font-black tracking-tight select-none ${className}`}>
      {/* Stylized Chicken Crest & Typography resembling the menu logo */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#203751] text-white shadow-md overflow-hidden p-1.5 flex-shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current" aria-hidden="true">
          {/* Rooster comb in brand red */}
          <path d="M50 15 C52 5, 62 8, 60 20 C68 14, 76 22, 70 30 C78 28, 80 40, 70 42 C60 42, 54 35, 50 25 Z" fill={redColor} />
          {/* Head & beak */}
          <path d="M40 30 C45 25, 55 25, 60 30 C65 35, 65 45, 60 52 C55 60, 42 62, 35 55 C28 47, 32 35, 40 30 Z" fill="#ffffff" />
          <path d="M60 36 L72 40 L60 46 Z" fill="#f59e0b" />
          {/* Eye */}
          <circle cx="52" cy="36" r="3.5" fill="#203751" />
          {/* Swirl body / wings */}
          <path d="M30 52 C45 48, 65 52, 75 62 C68 70, 52 72, 38 70 C30 65, 26 58, 30 52 Z" fill="#ffffff" opacity="0.9" />
          <path d="M35 68 C48 64, 60 66, 68 75 C60 82, 45 84, 32 80 C26 77, 28 72, 35 68 Z" fill={redColor} />
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <div className="flex items-center">
          <span className="text-2xl font-black tracking-wider uppercase" style={{ color: mainColor }}>
            B<span style={{ color: redColor }}>O</span>KA
          </span>
        </div>
        <span className="text-[10px] uppercase font-bold tracking-[0.25em] -mt-0.5" style={{ color: light ? 'rgba(255,255,255,0.7)' : '#ae332e' }}>
          Polito Chiken
        </span>
      </div>
    </div>
  );
}
