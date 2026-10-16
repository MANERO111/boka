import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BOKA | Polito Chiken - Restaurant & Fast-Food Gourmand",
  description: "Découvrez Boka Polito Chiken : sandwiches Boca signatures, French tacos fondants, soft tacos, poulet frit extra-croustillant et sauces artisanales. Livraison rapide au +212 663-110370.",
  keywords: ["Boka", "Polito Chiken", "Fast food", "Sandwich Boca", "Tacos français", "Poulet frit", "Livraison restaurant", "Maroc"],
  openGraph: {
    title: "BOKA Polito Chiken | Le goût qui vous fait craquer",
    description: "Sandwiches signatures, Tacos croustillants, Big Box & Frito poulet. Commandez dès maintenant !",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-[#fbf7ee] text-slate-800">
        {children}
      </body>
    </html>
  );
}
