export interface MenuItem {
  id: string;
  name: string;
  category: 'boka' | 'tacos' | 'classic' | 'frito' | 'soft_taco' | 'big_box' | 'chiken' | 'pasta' | 'panini' | 'desserts' | 'boissons' | 'suplimo';
  price: number;
  menuPrice?: number;
  description: string;
  ingredients: string[];
  image: string;
  popular?: boolean;
  badge?: string;
  spiceLevel?: 'Doux' | 'Épicé' | 'Très Épicé';
}

export const CATEGORIES = [
  { id: 'all', label: 'Tout le Menu', icon: '🍽️' },
  { id: 'boka', label: 'Boka Sandwiches', icon: '🥖' },
  { id: 'tacos', label: 'Tacos Français', icon: '🌯' },
  { id: 'classic', label: 'Classics & Burgers', icon: '🍔' },
  { id: 'frito', label: 'Frito Crispy', icon: '🍗' },
  { id: 'chiken', label: 'Crispy Poulet', icon: '🍗' },
  { id: 'big_box', label: 'Big Box', icon: '📦' },
  { id: 'panini', label: 'Panini', icon: '🥪' },
  { id: 'pasta', label: 'Pasta & Salades', icon: '🥗' },
  { id: 'suplimo', label: 'Frites & Sauces', icon: '🍟' },
  { id: 'desserts', label: 'Tiramisu & Desserts', icon: '🍰' },
  { id: 'boissons', label: 'Boissons', icon: '🥤' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // ==========================================
  // 1. BOKA SANDWICHES (Prix Seul: 35/45 DH, Menu: +8 DH)
  // ==========================================
  {
    id: 'boca-fresh',
    name: 'Boca Fresh',
    category: 'boka',
    price: 35,
    menuPrice: 43,
    popular: true,
    description: 'Une version fraîche et savoureuse avec garniture fraîche, crudités croquantes et sauce spéciale Boka.',
    ingredients: ['Pain artisanal croustillant', 'Poulet tendre', 'Légumes frais croquants', 'Sauce maison'],
    image: '/img/p16.jpeg'
  },
  {
    id: 'boca-original',
    name: 'Boca Original',
    category: 'boka',
    price: 45,
    menuPrice: 53,
    popular: true,
    badge: 'Best-Seller',
    spiceLevel: 'Doux',
    description: "Le sandwich signature Boca dans un pain croustillant aux graines, garni d'un filet de poulet pané ultra croustillant, cheddar fondu, salade fraîche et sauce maison Boka.",
    ingredients: ['Pain baguette artisanale', 'Poulet pané doré & croustillant', 'Cheddar fondant', 'Salade croquante', 'Sauce Boka secrète'],
    image: '/img/p14.jpeg'
  },
  {
    id: 'boca-spicy',
    name: 'Boca Spicy',
    category: 'boka',
    price: 45,
    menuPrice: 53,
    badge: 'Piquant 🔥',
    spiceLevel: 'Très Épicé',
    description: 'La version intense du Boca pour les amateurs de sensations fortes avec jalapeños, marinade pimentée et sauce épicée artisanale.',
    ingredients: ['Pain artisanal', 'Poulet mariné aux épices fortes', 'Piments jalapeños', 'Sauce spicy maison', 'Salade fraîche', 'Fromage'],
    image: '/img/p14.jpeg'
  },
  {
    id: 'boca-mexican',
    name: 'Boca Mexican',
    category: 'boka',
    price: 45,
    menuPrice: 53,
    spiceLevel: 'Épicé',
    description: 'Inspirations mexicaines : poulet mariné aux herbes latines, poivrons sautés, sauce salsa onctueuse et fromage râpé fondant.',
    ingredients: ['Poulet grillé façon fajitas', 'Poivrons et oignons caramélisés', 'Sauce mexicaine fumée', 'Gouda fondu', 'Pain toasté'],
    image: '/img/p14.jpeg'
  },
  {
    id: 'boca-amirican',
    name: 'Boca Amirican',
    category: 'boka',
    price: 45,
    menuPrice: 53,
    description: 'Gourmandise américaine pure avec double cheddar, crispy bacon de dinde, oignons frits croustillants et sauce barbecue caramélisée.',
    ingredients: ['Poulet pané tendre', 'Bacon grillé croustillant', 'Double cheddar affiné', 'Oignons frits croustillants', 'Sauce BBQ américaine'],
    image: '/img/p14.jpeg'
  },
  {
    id: 'boca-buffalo',
    name: 'Boca Buffalo',
    category: 'boka',
    price: 45,
    menuPrice: 53,
    spiceLevel: 'Épicé',
    description: 'Nappé de la véritable sauce Buffalo douce-amère et relevée, accompagnée de sauce ranch fraîche et céleri croquant.',
    ingredients: ['Poulet croustillant glacé sauce Buffalo', 'Sauce ranch crémeuse', 'Salade iceberg', 'Pickles', 'Fromage'],
    image: '/img/p14.jpeg'
  },
  {
    id: 'boca-pizza',
    name: 'Boca Pizza',
    category: 'boka',
    price: 45,
    menuPrice: 53,
    badge: 'Spécialité',
    description: "L'accord parfait entre un sandwich et une pizza : sauce tomate basilic mijotée, mozzarella fondante filante et origan.",
    ingredients: ['Poulet sauté aux herbes', 'Coulis de tomate', 'Mozzarella fondante', 'Origan séché', 'Olives noires'],
    image: '/img/p15.jpeg'
  },

  // ==========================================
  // 2. TACOS FRANÇAIS (Prix Menu: +8 DH ou indiqué)
  // ==========================================
  {
    id: 'tacos-mexicain',
    name: 'Tacos Mexicain',
    category: 'tacos',
    price: 42,
    menuPrice: 48,
    spiceLevel: 'Épicé',
    badge: 'Coup de Cœur',
    description: 'Poulet, poivrons, frites et sauce mexicaine.',
    ingredients: ['Poulet mariné', 'Poivrons sautés', 'Frites', 'Sauce mexicaine', 'Galette grillée'],
    image: '/img/p12.jpeg'
  },
  {
    id: 'tacos-original',
    name: 'Tacos Original',
    category: 'tacos',
    price: 45,
    menuPrice: 53,
    popular: true,
    badge: 'Incontournable',
    description: "Le fameux tacos garni de viandes savoureuses au choix, frites dorées à l'intérieur et nappé de notre divine sauce fromagère.",
    ingredients: ['Galette de blé toastée', 'Viande hachée & poulet mariné', 'Frites croustillantes', 'Sauce fromagère maison onctueuse'],
    image: '/img/p13.jpeg'
  },
  {
    id: 'tacos-cheesy',
    name: 'Tacos Cheesy',
    category: 'tacos',
    price: 45,
    menuPrice: 53,
    badge: '3 Fromages',
    description: 'Le paradis du fromage : cheddar, emmental râpé et sauce fromagère fondue à flot.',
    ingredients: ['Galette garnie', 'Émincé de poulet', 'Frites croustillantes', 'Cheddar fondant', 'Emmental râpé', 'Sauce fromagère'],
    image: '/img/p13.jpeg'
  },
  {
    id: 'tacos-amirican',
    name: 'Tacos Amirican',
    category: 'tacos',
    price: 46,
    menuPrice: 54,
    badge: 'Extra Gourmand',
    description: 'Gros tacos américain avec double viande, bacon croustillant, frites et double dose de cheddar chaud.',
    ingredients: ['Galette XL', 'Steak haché pur bœuf & tenders', 'Bacon grillé', 'Sauce BBQ & Sauce fromagère', 'Frites'],
    image: '/img/p13.jpeg'
  },
  {
    id: 'tacos-thai',
    name: 'Tacos Thai',
    category: 'tacos',
    price: 44,
    menuPrice: 52,
    spiceLevel: 'Épicé',
    description: 'Une touche asiatique originale : poulet sauté sauce Sweet Chili thaïlandaise, coriandre, frites et crème onctueuse.',
    ingredients: ['Poulet sauté wok', 'Sauce thaï sweet chili', 'Frites', 'Sauce fromagère', 'Oignons nouveaux'],
    image: '/img/p13.jpeg'
  },
  {
    id: 'tacos-french',
    name: 'Tacos French',
    category: 'tacos',
    price: 43,
    menuPrice: 51,
    description: 'La recette lyonnaise traditionnelle : crème, champignons persillés, frites et sauce gruyère crémeuse.',
    ingredients: ['Galette de blé', 'Poulet émincé à la crème', 'Champignons sautés', 'Frites dorées', 'Sauce gruyère maison'],
    image: '/img/p13.jpeg'
  },

  // ==========================================
  // 3. CLASSICS & BURGERS
  // ==========================================
  {
    id: 'chicken-burger',
    name: 'Chicken Burger',
    category: 'classic',
    price: 35,
    menuPrice: 41,
    popular: true,
    badge: 'Top Burger',
    description: 'Poulet croustillant, fromage fondant et sauce blanche et pain burger.',
    ingredients: ['Bun burger artisanal', 'Poulet croustillant', 'Fromage fondant', 'Sauce blanche maison', 'Salade'],
    image: '/img/p11.jpeg'
  },
  {
    id: 'soft-cheese-boeuf',
    name: 'Soft Cheese Boeuf',
    category: 'classic',
    price: 35,
    menuPrice: 41,
    popular: true,
    badge: 'Pur Bœuf',
    description: 'Viande hachée, fromage, salade, oignons, tomates, ketchup et frites.',
    ingredients: ['Pain moelleux toasté', 'Viande hachée pur bœuf', 'Fromage fondant', 'Salade', 'Oignons', 'Tomates', 'Ketchup', 'Frites'],
    image: '/img/p9.jpeg'
  },
  {
    id: 'osta-chicken',
    name: 'Osta Chicken',
    category: 'classic',
    price: 35,
    menuPrice: 41,
    badge: 'Spécialité Pain Arab',
    description: "Pain Arab garni de poulet croustillant, de salade fraîche, de tomates, de fromage fondant et d'une délicieuse sauce blanche.",
    ingredients: ['Pain Arab artisanal', 'Poulet croustillant', 'Salade fraîche', 'Tomates', 'Fromage fondant', 'Sauce blanche'],
    image: '/img/p6.jpeg'
  },

  // ==========================================
  // 4. PANINI
  // ==========================================
  {
    id: 'panini',
    name: 'Panini',
    category: 'panini',
    price: 33,
    menuPrice: 39,
    popular: true,
    badge: 'Chaud & Toasté',
    description: 'Poulet croustillant, fromage fondant, frites et sauce blanche.',
    ingredients: ['Pain panini grillé', 'Poulet croustillant', 'Fromage fondant', 'Frites dorées', 'Sauce blanche'],
    image: '/img/p17.jpeg'
  },

  // ==========================================
  // 5. FRITO CRISPY (Pain Arab + Poulet Crispé + Oignons Croustillants)
  // Prix Seul : 43 DH, Menu : 49 DH
  // ==========================================
  {
    id: 'frito-cheesy',
    name: 'Frito Cheesy',
    category: 'frito',
    price: 43,
    menuPrice: 49,
    popular: true,
    badge: 'Sauce Cheesy',
    description: "Pain Arab accompagné de poulet crispé, d'oignons croustillants et d'une délicieuse sauce cheesy fondante.",
    ingredients: ['Pain Arab', 'Poulet crispé doré', 'Oignons croustillants', 'Sauce cheesy fondante'],
    image: '/img/p3.jpeg'
  },
  {
    id: 'frito-extra-spicy',
    name: 'Frito Extra Spicy',
    category: 'frito',
    price: 43,
    menuPrice: 49,
    spiceLevel: 'Très Épicé',
    badge: 'Extra Piquant 🔥',
    description: "Pain Arab accompagné de poulet crispé, d'oignons croustillants et d'une sauce extra spicy pimentée.",
    ingredients: ['Pain Arab', 'Poulet crispé doré', 'Oignons croustillants', 'Sauce pimentée extra spicy'],
    image: '/img/p3.jpeg'
  },
  {
    id: 'frito-bbq-spicy',
    name: 'Frito BBQ Spicy',
    category: 'frito',
    price: 43,
    menuPrice: 49,
    spiceLevel: 'Épicé',
    description: "Pain Arab accompagné de poulet crispé, d'oignons croustillants et de sauce barbecue fumée relevée.",
    ingredients: ['Pain Arab', 'Poulet crispé doré', 'Oignons croustillants', 'Sauce BBQ spicy'],
    image: '/img/p3.jpeg'
  },
  {
    id: 'frito-big-up',
    name: 'Frito Big Up',
    category: 'frito',
    price: 43,
    menuPrice: 49,
    badge: 'Sauce Big Up',
    description: "Pain Arab accompagné de poulet crispé, d'oignons croustillants et de notre sauce signature Big Up.",
    ingredients: ['Pain Arab', 'Poulet crispé signature', 'Oignons croustillants', 'Sauce Big Up maison'],
    image: '/img/p3.jpeg'
  },
  {
    id: 'frito-mechoui',
    name: 'Frito Mechoui',
    category: 'frito',
    price: 43,
    menuPrice: 49,
    badge: 'Épices Méchoui',
    description: "Pain Arab accompagné de poulet crispé, d'oignons croustillants et d'épices méchoui marocain savoureuses.",
    ingredients: ['Pain Arab', 'Poulet mariné méchoui crispé', 'Oignons croustillants', 'Sauce au choix'],
    image: '/img/p3.jpeg'
  },
  {
    id: 'frito-mexico',
    name: 'Frito Mexico',
    category: 'frito',
    price: 43,
    menuPrice: 49,
    spiceLevel: 'Épicé',
    description: "Pain Arab accompagné de poulet crispé, d'oignons croustillants et d'une sauce salsa mexicaine relevée.",
    ingredients: ['Pain Arab', 'Poulet crispé assaisonné', 'Oignons croustillants', 'Sauce mexicaine'],
    image: '/img/p3.jpeg'
  },

  // ==========================================
  // 6. CRISPY POULET (Poulet Pané, Pilons, Ailes)
  // ==========================================
  {
    id: 'dedo-chicken-6pcs',
    name: 'Dedo Chicken',
    category: 'chiken',
    price: 40,
    menuPrice: 46,
    popular: true,
    badge: '6 Bâtonnets',
    description: '6 bâtonnets de poulet croustillants accompagnés de frites, de pain et de deux sauces barbecue et blanche.',
    ingredients: ['6 bâtonnets de poulet croustillants', 'Portion de frites', 'Pain', 'Sauce barbecue', 'Sauce blanche'],
    image: '/img/p4.jpeg'
  },
  {
    id: 'drumsticks-3pcs',
    name: 'Drumsticks (3pcs)',
    category: 'chiken',
    price: 45,
    menuPrice: 51,
    popular: true,
    badge: '3 Pilons',
    description: '3 pilons de poulet croustillants accompagnés de frites, de pain et de deux sauces : barbecue et blanche.',
    ingredients: ['3 pilons de poulet croustillants', 'Portion de frites', 'Pain frais', 'Sauce barbecue', 'Sauce blanche'],
    image: '/img/p5.jpeg'
  },
  {
    id: 'chicken-wings-6pcs',
    name: 'Chicken Wings',
    category: 'chiken',
    price: 41,
    menuPrice: 47,
    badge: '6 Ailes',
    description: '6 ailes de poulet croustillantes accompagnées de frites, de pain et de deux sauces barbecue et blanche.',
    ingredients: ['6 ailes de poulet croustillantes', 'Portion de frites', 'Pain frais', 'Sauce barbecue', 'Sauce blanche'],
    image: '/img/p5.jpeg'
  },

  // ==========================================
  // 7. BIG BOX
  // ==========================================
  {
    id: 'big-box-boeuf-original',
    name: 'Big Box Bœuf Original',
    category: 'big_box',
    price: 42,
    menuPrice: 48,
    popular: true,
    badge: 'Double Steak',
    description: 'Double steak, double fromage, salade fraîche, oignons, tomates et sauce Biggy.',
    ingredients: ['Double steak de bœuf', 'Double fromage fondant', 'Salade fraîche', 'Oignons', 'Tomates', 'Sauce Biggy'],
    image: '/img/p7.jpeg'
  },
  {
    id: 'big-box-chicken-original',
    name: 'Big Box Chicken Original',
    category: 'big_box',
    price: 40,
    menuPrice: 46,
    popular: true,
    badge: 'Formule Complète',
    description: 'Poulet accompagné de sauce Biggy, salade fraîche, oignons, tomates et fromage.',
    ingredients: ['Poulet pané croustillant', 'Sauce Biggy', 'Salade fraîche', 'Oignons', 'Tomates', 'Fromage fondant'],
    image: '/img/p7.jpeg'
  },
  {
    id: 'big-box-chicken-spicy',
    name: 'Big Box Chicken Spicy',
    category: 'big_box',
    price: 43,
    menuPrice: 49,
    spiceLevel: 'Épicé',
    badge: 'Spicy 🔥',
    description: 'Poulet accompagné de sauce algérienne, salade fraîche, oignons, tomates et fromage.',
    ingredients: ['Poulet mariné épicé', 'Sauce algérienne', 'Salade fraîche', 'Oignons', 'Tomates', 'Fromage'],
    image: '/img/p8.jpeg'
  },
  {
    id: 'big-box-boeuf-spicy',
    name: 'Big Box Bœuf Spicy',
    category: 'big_box',
    price: 45,
    menuPrice: 51,
    spiceLevel: 'Très Épicé',
    badge: 'Bœuf Spicy 🔥',
    description: 'Double steak, double fromage, salade fraîche, oignons, tomates et sauce algérienne.',
    ingredients: ['Double steak de bœuf', 'Double fromage', 'Salade fraîche', 'Oignons', 'Tomates', 'Sauce algérienne pimentée'],
    image: '/img/p10.jpeg'
  },
  {
    id: 'big-box-dragon',
    name: 'Big Box Dragon',
    category: 'big_box',
    price: 46,
    menuPrice: 52,
    spiceLevel: 'Très Épicé',
    badge: 'Box Dragon 🔥',
    description: "Pain garni de salade fraîche, d'oignons, de tomates, de double fromage et de sauce algérienne.",
    ingredients: ['Pain artisanal', 'Viande savoureuse', 'Double fromage', 'Salade fraîche', 'Oignons & tomates', 'Sauce algérienne relevée'],
    image: '/img/p10.jpeg'
  },

  // ==========================================
  // 8. PASTA & SALADES
  // ==========================================
  {
    id: 'chicken-salad',
    name: 'Chicken Salade',
    category: 'pasta',
    price: 39,
    menuPrice: 45,
    popular: true,
    badge: 'Salade Complète',
    description: 'Salade fraîche composée de laitue, carottes râpées, maïs, cœurs de palmier, olives noires, concombre, thon et fromage rouge, garnie de poulet croustillant et de sauce blanche.',
    ingredients: ['Laitue croquante', 'Carottes râpées', 'Maïs doux', 'Cœurs de palmier', 'Olives noires', 'Concombre', 'Thon', 'Fromage rouge', 'Poulet croustillant', 'Sauce blanche maison'],
    image: '/img/p2.jpeg'
  },
  {
    id: 'pasta-salad',
    name: 'Pasta Salade',
    category: 'pasta',
    price: 33,
    menuPrice: 39,
    popular: true,
    description: 'Salade de pâtes au maïs, luncheon, olives noires, thon et fromage rouge, accompagnée d’une sauce blanche.',
    ingredients: ['Pâtes al dente', 'Maïs doux', 'Luncheon', 'Olives noires', 'Thon', 'Fromage rouge', 'Sauce blanche'],
    image: '/img/p1.jpeg'
  },
  {
    id: 'pasta-chicken',
    name: 'Pasta Chicken',
    category: 'pasta',
    price: 41,
    menuPrice: 47,
    popular: true,
    badge: 'Chaud & Gourmand',
    description: 'Salade de pâtes au maïs, luncheon, olives noires, thon, fromage rouge et poulet grillé, avec une sauce blanche.',
    ingredients: ['Pâtes italiennes', 'Poulet grillé émincé', 'Maïs doux', 'Luncheon', 'Olives noires', 'Thon', 'Fromage rouge', 'Sauce blanche'],
    image: '/img/p1.jpeg'
  },

  // ==========================================
  // 9. SUPPLÉMENTS & SAUCES
  // ==========================================
  {
    id: 'frite-normal',
    name: 'Frite Normal',
    category: 'suplimo',
    price: 10,
    description: 'Portion généreuse de frites dorées croustillantes.',
    ingredients: ['Pommes de terre fraîches sélectionnées', 'Sel'],
    image: '/img/p3.jpeg'
  },
  {
    id: 'frite-normal-spicy',
    name: 'Frite Normal Spicy',
    category: 'suplimo',
    price: 13,
    spiceLevel: 'Épicé',
    badge: 'Piquant 🔥',
    description: 'Portion de frites dorées assaisonnées aux épices épicées piquantes.',
    ingredients: ['Frites croustillantes', 'Mélange d’épices spicy'],
    image: '/img/p3.jpeg'
  },
  {
    id: 'extra-frite',
    name: 'Extra Frite',
    category: 'suplimo',
    price: 13,
    description: 'Grande portion XL de frites dorées croustillantes.',
    ingredients: ['Pommes de terre fraîches sélectionnées', 'Sel'],
    image: '/img/p3.jpeg'
  },
  {
    id: 'extra-frite-spicy',
    name: 'Extra Frite Spicy',
    category: 'suplimo',
    price: 15,
    spiceLevel: 'Très Épicé',
    badge: 'XL Piquant 🔥',
    description: 'Grande portion XL de frites dorées avec assaisonnement spicy pimenté.',
    ingredients: ['Grande portion de frites', 'Mélange d’épices volcaniques'],
    image: '/img/p3.jpeg'
  },
  // Sauces 2 DH
  {
    id: 'sauce-algerienne',
    name: 'Sauce Algérienne',
    category: 'suplimo',
    price: 2,
    spiceLevel: 'Épicé',
    description: 'Pot de sauce algérienne épicée aux oignons caramélisés et tomate piquante.',
    ingredients: ['Sauce algérienne maison'],
    image: '/img/algerien.jpg'
  },
  {
    id: 'sauce-pita',
    name: 'Sauce Pita',
    category: 'suplimo',
    price: 2,
    description: 'Sauce crémeuse pita idéale pour accompagner viandes et sandwichs.',
    ingredients: ['Sauce pita fraîche'],
    image: '/img/sauceBlanche.png'
  },
  {
    id: 'sauce-mexicain',
    name: 'Sauce Mexicain',
    category: 'suplimo',
    price: 2,
    spiceLevel: 'Épicé',
    description: 'Sauce mexicaine relevée et parfumée aux herbes latines.',
    ingredients: ['Sauce salsa mexicaine'],
    image: '/img/sauceBbq.jpg'
  },
  {
    id: 'sauce-bbq',
    name: 'Sauce BBQ',
    category: 'suplimo',
    price: 2,
    description: 'Sauce barbecue au goût fumé traditionnel américain.',
    ingredients: ['Sauce barbecue américaine fumée'],
    image: '/img/sauceBbq.jpg'
  },
  {
    id: 'sauce-biggy',
    name: 'Sauce Biggy',
    category: 'suplimo',
    price: 2,
    description: 'Sauce burger Biggy onctueuse aux fines herbes et cornichons doux.',
    ingredients: ['Sauce Biggy signature'],
    image: '/img/algerien.jpg'
  },
  {
    id: 'sauce-classic',
    name: 'Sauce Classic',
    category: 'suplimo',
    price: 2,
    description: 'Sauce classique douce et équilibrée pour tous vos plats.',
    ingredients: ['Sauce douce classique'],
    image: '/img/sauceBlanche.png'
  },
  {
    id: 'sauce-mayonnaise',
    name: 'Sauce Mayonnaise',
    category: 'suplimo',
    price: 2,
    description: 'Mayonnaise crémeuse et onctueuse préparée traditionnellement.',
    ingredients: ['Mayonnaise riche'],
    image: '/img/sauceBlanche.png'
  },
  {
    id: 'sauce-ketchup',
    name: 'Sauce Ketchup',
    category: 'suplimo',
    price: 2,
    description: 'Ketchup savoureux à base de tomates mûries au soleil.',
    ingredients: ['Pur coulis de tomate assaisonné'],
    image: '/img/sauceBbq.jpg'
  },
  {
    id: 'sauce-sweet-thai',
    name: 'Sauce Sweet Thaï',
    category: 'suplimo',
    price: 2,
    spiceLevel: 'Épicé',
    description: 'Sauce thaïlandaise douce, sucrée et subtilement pimentée.',
    ingredients: ['Sauce sweet chili thaï'],
    image: '/img/sauceBbq.jpg'
  },
  {
    id: 'sauce-cheesy',
    name: 'Sauce Cheesy',
    category: 'suplimo',
    price: 2,
    badge: 'Extra Fromage',
    description: 'Pot de sauce cheddar fondue extra onctueuse.',
    ingredients: ['Cheddar coulant fondu'],
    image: '/img/sauceChesse.jpg'
  },

  // ==========================================
  // 10. DESSERTS (Tiramisus 20 DH & Cheesecakes 25 DH)
  // ==========================================
  {
    id: 'tiramisu-oreo',
    name: 'Tiramisu Oreo',
    category: 'desserts',
    price: 20,
    popular: true,
    badge: 'Maison',
    description: 'Tiramisu artisanal crémeux au mascarpone avec éclats de biscuits Oreo croustillants.',
    ingredients: ['Mascarpone italien', 'Biscuits Oreo', 'Crème fouettée', 'Cacao'],
    image: '/img/tiramisu.png'
  },
  {
    id: 'tiramisu-kit-kat',
    name: 'Tiramisu Kit Kat',
    category: 'desserts',
    price: 20,
    badge: 'Gourmand',
    description: 'Tiramisu au mascarpone onctueux garni de morceaux croustillants de Kit Kat.',
    ingredients: ['Mascarpone', 'Gaufrettes Kit Kat', 'Chocolat', 'Crème'],
    image: '/img/tiramisu.png'
  },
  {
    id: 'tiramisu-tmx',
    name: 'Tiramisu TMX',
    category: 'desserts',
    price: 20,
    badge: 'Spécialité',
    description: 'Recette spéciale tiramisu maison TMX avec texture ultra crémeuse et gourmande.',
    ingredients: ['Crème mascarpone maison TMX', 'Biscuits cuillère', 'Saveurs intenses'],
    image: '/img/tiramisu.png'
  },
  {
    id: 'tiramisu-snickers',
    name: 'Tiramisu Snickers',
    category: 'desserts',
    price: 20,
    popular: true,
    badge: 'Cacahuète & Caramel',
    description: 'Accord parfait entre mascarpone, caramel fondant, éclats de cacahuètes et chocolat Snickers.',
    ingredients: ['Mascarpone', 'Caramel beurre salé', 'Cacahuètes grillées', 'Chocolat Snickers'],
    image: '/img/tiramisu.png'
  },
  {
    id: 'tiramisu-framboise',
    name: 'Tiramisu Framboise',
    category: 'desserts',
    price: 20,
    badge: 'Fruits Rouges',
    description: 'Tiramisu frais et léger parfumé au coulis de framboises acidulées.',
    ingredients: ['Mascarpone', 'Coulis de framboises fraîches', 'Biscuits imbibés'],
    image: '/img/tiramisu.png'
  },
  {
    id: 'tiramisu-nutella',
    name: 'Tiramisu Nutella',
    category: 'desserts',
    price: 20,
    popular: true,
    badge: 'Chocolat Noisette',
    description: 'Tiramisu ultra gourmand généreusement nappé de Nutella fondant.',
    ingredients: ['Mascarpone velouté', 'Nutella chocolat noisette', 'Biscuits'],
    image: '/img/tiramisu.png'
  },
  {
    id: 'tiramisu-caramel',
    name: 'Tiramisu Caramel',
    category: 'desserts',
    price: 20,
    description: 'Tiramisu onctueux rehaussé d’un caramel coulant doré et savoureux.',
    ingredients: ['Mascarpone', 'Caramel fondant', 'Biscuits cuillère'],
    image: '/img/tiramisu.png'
  },
  {
    id: 'tiramisu-chocolat',
    name: 'Tiramisu Chocolat',
    category: 'desserts',
    price: 20,
    description: 'Le grand classique tiramisu au pur chocolat noir intense et cacao saupoudré.',
    ingredients: ['Mascarpone', 'Ganache chocolat noir', 'Cacao pur'],
    image: '/img/tiramisu.png'
  },
  {
    id: 'tiramisu-speculoos',
    name: 'Tiramisu Spéculoos',
    category: 'desserts',
    price: 20,
    popular: true,
    badge: 'Best-Seller',
    description: 'Tiramisu irrésistible aux brisures de Spéculoos lotus et pâte croustillante caramélisée.',
    ingredients: ['Mascarpone onctueux', 'Biscuits Spéculoos Lotus', 'Pâte de Spéculoos'],
    image: '/img/tiramisu.png'
  },
  // Cheesecakes 25 DH
  {
    id: 'cheesecake-citron',
    name: 'Cheesecake Citron',
    category: 'desserts',
    price: 25,
    popular: true,
    badge: 'Fraîcheur',
    description: 'Cheesecake crémeux sur lit de biscuit sablé croquant, nappé d’un zeste de citron acidulé.',
    ingredients: ['Cream cheese', 'Sablé croustillant', 'Crémeux citron jaune frais'],
    image: '/img/tiramisu.png'
  },
  {
    id: 'cheesecake-oreo',
    name: 'Cheesecake Oreo',
    category: 'desserts',
    price: 25,
    popular: true,
    badge: 'Chocolaté',
    description: 'Cheesecake fondant incrusté et saupoudré de morceaux de biscuits Oreo.',
    ingredients: ['Cream cheese fondant', 'Base sablée Oreo', 'Éclats Oreo'],
    image: '/img/tiramisu.png'
  },
  {
    id: 'cheesecake-framboise',
    name: 'Cheesecake Framboise',
    category: 'desserts',
    price: 25,
    badge: 'Fruits Rouges',
    description: 'Cheesecake onctueux surmonté d’un généreux coulis de framboises fraîches.',
    ingredients: ['Cream cheese', 'Base biscuit croustillant', 'Nappage framboise'],
    image: '/img/tiramisu.png'
  },

  // ==========================================
  // 11. BOISSONS FRAÎCHES
  // ==========================================
  {
    id: 'pepsi-25cl',
    name: 'Pepsi 25cl',
    category: 'boissons',
    price: 6,
    description: 'Bouteille rafraîchissante de Pepsi 25cl servie bien fraîche.',
    ingredients: ['Boisson gazeuse rafraîchissante'],
    image: '/img/pepsi.webp'
  },
  {
    id: 'pepsi-zero-33cl',
    name: 'Pepsi Zéro 33cl',
    category: 'boissons',
    price: 8,
    description: 'Canette fraîche de Pepsi Zéro sucre 33cl.',
    ingredients: ['Boisson gazeuse sans sucre'],
    image: '/img/pepsi_zero_33.jpg'
  },
  {
    id: '7up-25cl',
    name: '7up 25cl',
    category: 'boissons',
    price: 6,
    description: 'Boisson rafraîchissante aux arômes naturels de citron et lime 25cl.',
    ingredients: ['Boisson gazeuse citron-lime'],
    image: '/img/7up.webp'
  },
  {
    id: 'mirinda-orange-25cl',
    name: 'Mirinda Orange 25cl',
    category: 'boissons',
    price: 6,
    description: 'Mirinda saveur Orange pétillante et fruitée 25cl.',
    ingredients: ['Boisson gazeuse arôme orange'],
    image: '/img/mirinda.webp'
  },
  {
    id: 'mirinda-pomme-25cl',
    name: 'Mirinda Pomme 25cl',
    category: 'boissons',
    price: 6,
    description: 'Mirinda rafraîchissante au goût intense de pomme verte 25cl.',
    ingredients: ['Boisson gazeuse saveur pomme'],
    image: '/img/mirindaPomme.jpg'
  },
  {
    id: 'mirinda-citron-25cl',
    name: 'Mirinda Citron 25cl',
    category: 'boissons',
    price: 6,
    description: 'Mirinda saveur Citron acidulée et vivifiante 25cl.',
    ingredients: ['Boisson gazeuse arôme citron'],
    image: '/img/mirindaCitron.jpg'
  },
  {
    id: 'mirinda-citron-33cl',
    name: 'Mirinda Citron 33cl',
    category: 'boissons',
    price: 8,
    description: 'Canette de Mirinda saveur Citron 33cl servie glacée.',
    ingredients: ['Boisson gazeuse arôme citron'],
    image: '/img/mirindaC33.webp'
  },
  {
    id: 'mirinda-plus-ananas-25cl',
    name: 'Mirinda Plus Ananas 25cl',
    category: 'boissons',
    price: 7,
    description: "Mirinda Plus aux saveurs tropicales d'ananas 25cl.",
    ingredients: ['Boisson gazeuse ananas tropical'],
    image: '/img/mirindaPlus.jpg'
  },
  {
    id: 'mirinda-plus-tropical-25cl',
    name: 'Mirinda Plus Tropical 25cl',
    category: 'boissons',
    price: 7,
    description: 'Mirinda Plus saveur cocktail tropical fruité 25cl.',
    ingredients: ['Boisson gazeuse fruits tropicaux'],
    image: '/img/mirindaPlusT.jpg'
  },
  {
    id: 'palpi-25cl',
    name: 'Palpi',
    category: 'boissons',
    price: 6,
    description: 'Jus fruité et rafraîchissant avec pulpe.',
    ingredients: ['Boisson fruitée rafraîchissante'],
    image: '/img/pulpy.jpg'
  },
  {
    id: 'oulmes-33cl',
    name: 'Oulmès',
    category: 'boissons',
    price: 6,
    description: 'Eau minérale gazeuse naturelle pétillante marocaine servie bien fraîche.',
    ingredients: ['Eau minérale gazeuse naturelle'],
    image: '/img/oulmas.png'
  },
  {
    id: 'aquafina-50cl',
    name: 'Aquafina 50cl',
    category: 'boissons',
    price: 6,
    description: 'Eau minérale pure et rafraîchissante 50cl.',
    ingredients: ['Eau pure minérale'],
    image: '/img/Aquafina50cl.jpg'
  },
  {
    id: 'lipton-citron-33cl',
    name: 'Lipton Citron 33cl',
    category: 'boissons',
    price: 10,
    description: 'Thé glacé Lipton saveur citron rafraîchissant 33cl.',
    ingredients: ['Thé glacé arôme citron'],
    image: '/img/liptonCitron.jpg'
  },
  {
    id: 'lipton-fruit-rouge-33cl',
    name: 'Lipton Fruit Rouge 33cl',
    category: 'boissons',
    price: 10,
    description: 'Thé glacé Lipton saveur fruits rouges délicieux 33cl.',
    ingredients: ['Thé glacé fruits rouges'],
    image: '/img/liptonRed.jpg'
  }
];
