export interface MenuItem {
  id: string;
  name: string;
  category: 'boka' | 'tacos' | 'classic' | 'frito' | 'soft_taco' | 'big_box' | 'chiken' | 'pasta' | 'boissons' | 'suplimo';
  price: number;
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
  { id: 'soft_taco', label: 'Soft Tacos', icon: '🌮' },
  { id: 'classic', label: 'Classics & Burgers', icon: '🍔' },
  { id: 'frito', label: 'Frito Crispy', icon: '🍗' },
  { id: 'chiken', label: 'Crispy Poulet', icon: '🍗' },
  { id: 'big_box', label: 'Big Box', icon: '📦' },
  { id: 'pasta', label: 'Pasta & Salades', icon: '🍝' },
  { id: 'boissons', label: 'Boissons & Desserts', icon: '🥤' },
  { id: 'suplimo', label: 'Suppléments & Sauces', icon: '🥣' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // --- BOKA ---
  {
    id: 'boka-original',
    name: 'Boca Original',
    category: 'boka',
    price: 39,
    popular: true,
    badge: 'Best-Seller',
    spiceLevel: 'Doux',
    description: 'Le sandwich signature Boca dans un pain croustillant aux graines, garni d\'un filet de poulet pané ultra croustillant, cheddar fondu, salade fraîche et sauce maison Boka.',
    ingredients: ['Pain baguette artisanale croustillante', 'Poulet pané doré & croustillant', 'Cheddar fondant', 'Salade croquante', 'Sauce Boka secrète'],
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'boka-spyc',
    name: 'Boca Spyc',
    category: 'boka',
    price: 39,
    badge: 'Piquant 🔥',
    spiceLevel: 'Très Épicé',
    description: 'La version intense du Boca pour les amateurs de sensations fortes avec jalapeños, marinade pimentée et sauce épicée artisanale.',
    ingredients: ['Pain artisanal', 'Poulet mariné aux épices fortes', 'Piments jalapeños', 'Sauce spicy maison', 'Salade fraîche', 'Fromage'],
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'boka-mexican',
    name: 'Boca Mexican',
    category: 'boka',
    price: 39,
    spiceLevel: 'Épicé',
    description: 'Inspirations mexicaines : poulet mariné aux herbes latines, poivrons sautés, sauce salsa onctueuse et fromage râpé fondant.',
    ingredients: ['Poulet grillé façon fajitas', 'Poivrons et oignons caramélisés', 'Sauce mexicaine fumée', 'Gouda fondu', 'Pain toasté'],
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'boka-amiricane',
    name: 'Boca Amiricane',
    category: 'boka',
    price: 39,
    description: 'Gourmandise américaine pure avec double cheddar, crispy bacon de dinde, oignons frits croustillants et sauce barbecue caramélisée.',
    ingredients: ['Poulet pané tendre', 'Bacon grillé croustillant', 'Double cheddar affiné', 'Oignons frits croustillants', 'Sauce BBQ américaine'],
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'boka-boufalo',
    name: 'Boca Boufalo',
    category: 'boka',
    price: 39,
    spiceLevel: 'Épicé',
    description: 'Nappé de la véritable sauce Buffalo douce-amère et relevée, accompagnée de sauce ranch fraîche et céleri croquant.',
    ingredients: ['Poulet croustillant glacé sauce Buffalo', 'Sauce ranch crémeuse', 'Salade iceberg', 'Pickles', 'Fromage'],
    image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'boka-pizza',
    name: 'Boca Pizza',
    category: 'boka',
    price: 39,
    description: 'L\'accord parfait entre un sandwich et une pizza : sauce tomate basilic mijotée, mozzarella fondante filante et origan.',
    ingredients: ['Poulet sauté aux herbes', 'Coulis de tomate San Marzano', 'Mozzarella fior di latte', 'Origan séché', 'Olives noires'],
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'boka-frich',
    name: 'Boca Frich',
    category: 'boka',
    price: 30,
    description: 'Une version légère et rafraîchissante avec légumes croquants, crème légère ciboulette et émincé de poulet tendre cuit vapeur/grillé.',
    ingredients: ['Poulet tendre finement émincé', 'Concombres & tomates fraîches', 'Salade batavia', 'Sauce yaourt ciboulette citronnée'],
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80'
  },

  // --- TACOS ---
  {
    id: 'tacos-original',
    name: 'Tacos Original',
    category: 'tacos',
    price: 40,
    popular: true,
    badge: 'Incontournable',
    description: 'Le fameux tacos garni de viandes savoureuses au choix, frites dorées à l\'intérieur et nappé de notre divine sauce fromagère secrète.',
    ingredients: ['Galette de blé toastée', 'Viande hachée & poulet mariné', 'Frites croustillantes à l\'intérieur', 'Sauce fromagère maison onctueuse'],
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tacos-spyc',
    name: 'Tacos Spyc',
    category: 'tacos',
    price: 40,
    spiceLevel: 'Très Épicé',
    description: 'Tacos garni de viandes épicées, sauce samouraï pimentée, jalapeños et notre sauce gruyère fondante.',
    ingredients: ['Galette toastée', 'Poulet piquant mariné', 'Frites', 'Sauce samouraï & sauce fromagère', 'Piments forts'],
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'taco-amirican',
    name: 'Tacoamirican',
    category: 'tacos',
    price: 43,
    badge: 'Extra Gourmand',
    description: 'Gros tacos américain avec double viande, bacon croustillant, oignons rings, frites et double dose de cheddar chaud.',
    ingredients: ['Galette XL', 'Steak haché pur bœuf & tenders', 'Bacon grillé', 'Sauce BBQ & Sauce fromagère', 'Frites'],
    image: 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tacos-mexican',
    name: 'Tacos Mexican',
    category: 'tacos',
    price: 39,
    spiceLevel: 'Épicé',
    description: 'Saveurs latines avec sauce salsa braisée, poivrons marinés, épices tex-mex et frites dorées.',
    ingredients: ['Galette grillée', 'Poulet tex-mex', 'Frites', 'Sauce salsa épicée', 'Sauce fromagère', 'Poivrons'],
    image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tacos-french',
    name: 'Tacos French',
    category: 'tacos',
    price: 39,
    description: 'La recette lyonnaise traditionnelle : crème, champignons persillés, frites et sauce gruyère crémeuse.',
    ingredients: ['Galette de blé', 'Poulet émincé à la crème', 'Champignons sautés', 'Frites dorées', 'Sauce gruyère maison'],
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tacos-thai',
    name: 'Tacos Thai',
    category: 'tacos',
    price: 40,
    spiceLevel: 'Épicé',
    description: 'Une touche asiatique originale : poulet sauté sauce Sweet Chili thaïlandaise, coriandre, frites et crème onctueuse.',
    ingredients: ['Poulet sauté wok', 'Sauce thaï sweet chili & sésame', 'Frites', 'Sauce fromagère', 'Oignons nouveaux'],
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tacos-chezzy',
    name: 'Tacos Chezzy',
    category: 'tacos',
    price: 41,
    badge: '3 Fromages',
    description: 'Le paradis du fromage : cheddar, emmental râpé et sauce fromagère fondue à flot.',
    ingredients: ['Galette garnie', 'Émincé de poulet', 'Frites croustillantes', 'Cheddar fondant', 'Emmental râpé', 'Sauce fromagère'],
    image: 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?auto=format&fit=crop&w=800&q=80'
  },

  // --- SOFT TACO ---
  {
    id: 'soft-taco-spyc',
    name: 'Soft Taco Spyc',
    category: 'soft_taco',
    price: 19,
    spiceLevel: 'Très Épicé',
    description: 'Coquille souple de maïs garnie de viande hachée assaisonnée, dés de tomates fraîches, salade, cheddar et sauce chili pimentée.',
    ingredients: ['Tortilla souple', 'Viande hachée épicée', 'Dés de tomates', 'Salade verte croquante', 'Sauce chili piquante'],
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'soft-taco-bbq',
    name: 'Soft Taco BBQ',
    category: 'soft_taco',
    price: 19,
    description: 'Tortilla souple garnie de viandes grillées caramélisées au barbecue, oignons doux et fromage fondant.',
    ingredients: ['Tortilla souple', 'Poulet grillé BBQ', 'Salade', 'Tomates fraîches', 'Sauce barbecue fumée'],
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'soft-taco-bigup',
    name: 'Soft Taco Bigup',
    category: 'soft_taco',
    price: 19,
    badge: 'Coup de Cœur',
    description: 'Garni de tendres morceaux de poulet mariné, sauce spéciale Bigup, fromage râpé et crudités du jour.',
    ingredients: ['Tortilla souple', 'Poulet tendre sauté', 'Sauce Bigup signature', 'Cheddar râpé', 'Salade & tomates'],
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'soft-taco-mexico',
    name: 'Soft Taco Mexico',
    category: 'soft_taco',
    price: 19,
    spiceLevel: 'Épicé',
    description: 'Le vrai taco street-food mexicain avec viande hachée parfumée aux graines de coriandre et cumin, pico de gallo et crème fraîche.',
    ingredients: ['Tortilla souple de maïs', 'Bœuf haché mijoté', 'Pico de gallo (tomates, oignons, coriandre)', 'Sauce crème acidulée'],
    image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=800&q=80'
  },

  // --- CLASSIC ---
  {
    id: 'mini-boca',
    name: 'Mini Boca',
    category: 'classic',
    price: 34,
    description: 'Format parfait pour un en-cas : baguette croustillante petit format garnie de poulet pané maison et sauce délicate.',
    ingredients: ['Demi-baguette croustillante', 'Poulet pané doré', 'Salade fraîche', 'Mayonnaise maison au poivre'],
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'panini',
    name: 'Panini',
    category: 'classic',
    price: 28,
    description: 'Pain panini grillé et toasté aux marques fumantes, garni de fromage fondant mozzarella et garnitures au choix.',
    ingredients: ['Pain panini grillé à la presse', 'Mozzarella fondante', 'Poulet ou dinde fumée', 'Sauce au choix'],
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chiken-bergur',
    name: 'Chiken Bergur',
    category: 'classic',
    price: 35,
    popular: true,
    badge: 'Top Burger',
    description: 'Pain brioché aux graines de sésame grillé, épais filet de poulet croustillant pané minute, salade batavia, tomate et sauce burger onctueuse.',
    ingredients: ['Bun brioché artisanal au sésame', 'Filet de poulet croustillant Panure Cornflakes', 'Cheddar fondant', 'Salade, cornichons doux', 'Sauce burger maison'],
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'osta-chiken',
    name: 'Osta Chiken',
    category: 'classic',
    price: 33,
    description: 'Burger spécial toasté façon Osta avec galette de poulet croustillante, oignons caramélisés et sauce crémeuse à l\'ail doux.',
    ingredients: ['Pain rond doré', 'Galette de poulet croustillante', 'Oignons caramélisés', 'Sauce aïoli douce', 'Fromage'],
    image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'soft-bergur',
    name: 'Soft Bergur',
    category: 'classic',
    price: 30,
    description: 'Burger moelleux léger avec steak tendre, fromage fondant et condiments savoureux pour combler les petites faims.',
    ingredients: ['Pain moelleux sans croûte dure', 'Steak tendre haché', 'Tranche de cheddar', 'Ketchup & moutarde douce', 'Pickles'],
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80'
  },

  // --- FRITO ---
  {
    id: 'frito-extra-spyc',
    name: 'Frito Extra Spyc',
    category: 'frito',
    price: 43,
    spiceLevel: 'Très Épicé',
    badge: 'Extra Piquant',
    description: 'Bâtonnets & morceaux de poulet ultra-croustillants frits à la commande, enrobés d\'un mélange d\'épices volcaniques.',
    ingredients: ['Poulet ultra crispy panure dorée', 'Épices piments rouges & paprika fumé', 'Sauce dipping pimentée'],
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'frito-bbq-spyc',
    name: 'Frito BBQ Spyc',
    category: 'frito',
    price: 43,
    spiceLevel: 'Épicé',
    description: 'Poulet frito nappé d\'un glaçage barbecue fumé relevé d\'un filet de sauce pimentée.',
    ingredients: ['Poulet pané croustillant', 'Glaçage sauce BBQ épicée', 'Graines de sésame grillées'],
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'frito-chezzy',
    name: 'Frito Chezzy',
    category: 'frito',
    price: 43,
    popular: true,
    badge: 'Fromage Chaud',
    description: 'Délicieux frito croustillant servi sous une cascade de sauce fromage cheddar bien fondante et chaude.',
    ingredients: ['Morceaux croustillants de poulet pané', 'Sauce cheddar fondue abondante', 'Ciboulette fraîche'],
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'frito-bigup',
    name: 'Frito Bigup',
    category: 'frito',
    price: 43,
    description: 'Le frito servi avec notre légendaire sauce Bigup douce et relevée aux herbes aromatiques.',
    ingredients: ['Poulet frit signature', 'Sauce secrète Bigup', 'Frites croustillantes en accompagnement'],
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'frito-mechoui',
    name: 'Frito Mechoui',
    category: 'frito',
    price: 43,
    badge: 'Spécialité Marocaine',
    description: 'Poulet frito aromatisé aux épices traditionnelles du méchoui marocain (cumin torréfié, coriandre et ail)',
    ingredients: ['Poulet mariné méchoui', 'Panure croustillante dorée', 'Épices cumin & sel de Guérande'],
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'frito-mexico',
    name: 'Frito Mexico',
    category: 'frito',
    price: 43,
    spiceLevel: 'Épicé',
    description: 'Bouchées croustillantes saupoudrées d\'épices mexicaines cajun, accompagnées de sauce salsa fraîche.',
    ingredients: ['Poulet extra croustillant', 'Assaisonnement cajun et lime', 'Sauce salsa roja'],
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80'
  },

  // --- BIG BOX ---
  {
    id: 'big-box-dragon',
    name: 'Big Box Dragon',
    category: 'big_box',
    price: 41,
    spiceLevel: 'Très Épicé',
    badge: 'Box Épicée 🔥',
    description: 'Grande boîte généreuse comprenant poulet croustillant sauce dragon piquante, frites maison croustillantes et canette fraîche.',
    ingredients: ['Tenders épicés sauce dragon', 'Portion généreuse de frites dorées', 'Sauce piquante supplémentaire', 'Pain & Boisson fraîche'],
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'big-box-original',
    name: 'Big Box Original',
    category: 'big_box',
    price: 41,
    popular: true,
    badge: 'Formule Complète',
    description: 'La boîte complète Boka : assortiment de tenders croustillants dorés, frites, sauces maison au choix et boisson.',
    ingredients: ['Assortiment tenders de poulet pané', 'Grande portion de frites', '2 Sauces au choix', 'Boisson au choix'],
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'big-chiken-bouf',
    name: 'Big Chiken Bouf',
    category: 'big_box',
    price: 43,
    badge: 'Mix Bœuf & Poulet',
    description: 'Le festin ultime réunissant des morceaux de poulet croustillant et des steaks façon smash bœuf avec frites et sauces.',
    ingredients: ['Pilons ou tenders de poulet', 'Bouchées de bœuf savoureuses', 'Frites croustillantes dorées', 'Sauce fromagère'],
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
  },

  // --- CHIKEN ---
  {
    id: 'dedo-chiken-6ps',
    name: 'Dedo Chiken (6 pcs)',
    category: 'chiken',
    price: 38,
    popular: true,
    badge: '6 Morceaux',
    description: '6 délicieux bâtonnets de poulet croustillants (« dedos ») panés à la perfection, tendres à cœur.',
    ingredients: ['6 bâtonnets de blanc de poulet véritable', 'Panure artisanale secrète croustillante', 'Sauce dipping au choix'],
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'wing-6ps',
    name: 'Wing (6 pcs)',
    category: 'chiken',
    price: 35,
    badge: '6 Ailes Dorées',
    description: '6 ailes de poulet juteuses marinées et dorées, croustillantes à l\'extérieur et savoureuses à l\'intérieur.',
    ingredients: ['6 ailes de poulet fraîches', 'Marinade paprika doux et herbes', 'Panure fine craquante'],
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'drams-stik-3ps',
    name: 'Drams Stik (3 pcs)',
    category: 'chiken',
    price: 42,
    badge: '3 Pilons Dorés',
    description: '3 gros pilons de poulet tendres et charnus, marinés durant 24h et enrobés d\'une friture dorée ultra croustillante.',
    ingredients: ['3 pilons de poulet généreux', 'Panure épaisse extra croquante', 'Sauce au choix'],
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'suplimo-chiken',
    name: 'Suplimo Chiken',
    category: 'chiken',
    price: 8,
    description: 'Morceau individuel de poulet croustillant en supplément pour compléter votre menu.',
    ingredients: ['1 tender ou bouchée de poulet croustillant'],
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'suplimo-drams',
    name: 'Suplimo Drams',
    category: 'chiken',
    price: 14,
    description: '1 pilon de poulet croustillant supplémentaire à l\'unité.',
    ingredients: ['1 pilon de poulet frit doré'],
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'suplimo-wings',
    name: 'Suplimo Wings',
    category: 'chiken',
    price: 10,
    description: 'Portion supplémentaire d\'ailes de poulet croustillantes pour les plus gourmands.',
    ingredients: ['2 ailes de poulet frites dorées'],
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80'
  },

  // --- PASTA ---
  {
    id: 'pasta-salad',
    name: 'Pasta Salad',
    category: 'pasta',
    price: 28,
    description: 'Salade de pâtes fraîches al dente avec dés de tomates, maïs doux, olives noires, concombres et vinaigrette aux herbes.',
    ingredients: ['Pâtes penne ou fusilli', 'Tomates cerises fraîches', 'Maïs doux', 'Olives noires', 'Vinaigrette maison légère'],
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chiken-pasta',
    name: 'Chiken Pasta',
    category: 'pasta',
    price: 33,
    popular: true,
    badge: 'Chaud & Crémeux',
    description: 'Pâtes sautées à la poêle avec émincé de blanc de poulet, sauce crème parfumée et parmesan râpé.',
    ingredients: ['Pâtes italiennes', 'Morceaux de blanc de poulet grillé', 'Sauce crème onctueuse', 'Parmesan', 'Persil frais'],
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281781?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chiken-salad',
    name: 'Chiken Salad',
    category: 'pasta',
    price: 30,
    description: 'Grande salade composée garnie de tranches de poulet croustillant ou grillé, croûtons dorés, tomates et sauce césar maison.',
    ingredients: ['Poulet croustillant tranché', 'Cœur de salade romaine', 'Croûtons dorés à l\'ail', 'Sauce césar crémeuse'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
  },

  // --- BOISSONS & DESSERT ---
  {
    id: 'coca-cola-25cl',
    name: 'Coca Cola 25cl',
    category: 'boissons',
    price: 6,
    description: 'Bouteille en verre rafraîchissante de Coca Cola Original 25cl servie bien fraîche.',
    ingredients: ['Boisson gazeuse rafraîchissante'],
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fanta-orong-25cl',
    name: 'Fanta Orong 25cl',
    category: 'boissons',
    price: 6,
    description: 'Fanta saveur Orange pétillante et fruitée 25cl.',
    ingredients: ['Boisson gazeuse arôme orange'],
    image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fanta-citro-25cl',
    name: 'Fanta Citro 25cl',
    category: 'boissons',
    price: 6,
    description: 'Fanta saveur Citron acidulée et vivifiante 25cl.',
    ingredients: ['Boisson gazeuse arôme citron'],
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'poms-25cl',
    name: 'Poms 25cl',
    category: 'boissons',
    price: 6,
    description: 'La boisson gazeuse marocaine culte à la pomme verte rafraîchissante.',
    ingredients: ['Boisson gazeuse saveur pomme'],
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hawai-25cl',
    name: 'Hawai 25cl',
    category: 'boissons',
    price: 6,
    description: 'L\'iconique soda marocain Hawai aux arômes tropicaux exotiques.',
    ingredients: ['Boisson pétillante aux fruits tropicaux'],
    image: 'https://images.unsplash.com/photo-1534057308991-b9b32825445d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hawai-anans-25cl',
    name: 'Hawai Anans 25cl',
    category: 'boissons',
    price: 6,
    description: 'Variante tropicale saveur Ananas doux et rafraîchissant.',
    ingredients: ['Boisson gazeuse ananas'],
    image: 'https://images.unsplash.com/photo-1534057308991-b9b32825445d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chwips-anans-25cl',
    name: 'Chwips Anans 25cl',
    category: 'boissons',
    price: 19,
    description: 'Schweppes Ananas, boisson finement gazeuse et élégante.',
    ingredients: ['Schweppes ananas'],
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chwips-mokhito25cl',
    name: 'Chwips Mokhito 25cl',
    category: 'boissons',
    price: 19,
    badge: 'Saveur Mojito',
    description: 'Schweppes rafraîchissant parfum mojito (menthe fraîche et citron vert).',
    ingredients: ['Schweppes menthe et citron vert sans alcool'],
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sprait-25cl',
    name: 'Sprait 25cl',
    category: 'boissons',
    price: 6,
    description: 'Sprite rafraîchissant au goût pur de citron vert.',
    ingredients: ['Boisson gazeuse citron-lime'],
    image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sidi-ali-33cl',
    name: 'Sidi Ali 33cl',
    category: 'boissons',
    price: 6,
    description: 'Eau minérale naturelle marocaine pure de montagne 33cl.',
    ingredients: ['Eau minérale naturelle pure'],
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'oualmes-33cl',
    name: 'Oualmes 33cl',
    category: 'boissons',
    price: 6,
    description: 'Eau minérale gazeuse naturelle Oulmès, pure effervescence.',
    ingredients: ['Eau minérale gazeuse naturelle'],
    image: 'https://images.unsplash.com/photo-1559839914-ba2a16d96f73?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tirameso',
    name: 'Tirameso',
    category: 'boissons',
    price: 20,
    popular: true,
    badge: 'Dessert Maison',
    description: 'Délicieux tiramisu artisanal préparé maison avec mascarpone onctueux, biscuit cuillère et cacao pur.',
    ingredients: ['Crème au mascarpone fouettée', 'Biscuits imbibés au café', 'Cacao en poudre hollandais', 'Vanille de Madagascar'],
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80'
  },

  // --- SUPLIMO (Sauces & Suppléments) ---
  {
    id: 'suplimo-ss-algi',
    name: 'Suplimo Sauce Algérienne',
    category: 'suplimo',
    price: 2,
    spiceLevel: 'Épicé',
    description: 'Pot de sauce algérienne épicée aux oignons caramélisés et tomate piquante.',
    ingredients: ['Mayonnaise, tomates, oignons frits, piment'],
    image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'suplimo-ss-bigup',
    name: 'Suplimo Sauce Bigup',
    category: 'suplimo',
    price: 2,
    description: 'La sauce signature de la maison, douce et riche en condiments.',
    ingredients: ['Sauce spéciale Boka'],
    image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'suplimo-ss-bbq',
    name: 'Suplimo Sauce BBQ',
    category: 'suplimo',
    price: 2,
    description: 'Sauce barbecue au goût fumé traditionnel américain.',
    ingredients: ['Sauce barbecue américaine fumée'],
    image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'suplimo-ss-blanch',
    name: 'Suplimo Sauce Blanche',
    category: 'suplimo',
    price: 2,
    description: 'Sauce blanche fraîche aux herbes et pointe d\'ail doux.',
    ingredients: ['Yaourt égoutté, ail doux, ciboulette'],
    image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'suplimo-ss-chezzy',
    name: 'Suplimo Sauce Chezzy',
    category: 'suplimo',
    price: 2,
    badge: 'Extra Fromage',
    description: 'Pot de sauce cheddar fondue extra onctueuse pour tremper vos frites et poulets.',
    ingredients: ['Cheddar coulant fondu chaud'],
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80'
  }
];
