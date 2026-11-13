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
    id: 'boca-fresh',
    name: 'Boca Fresh',
    category: 'boka',
    price: 30,
    popular: true,
    description: 'Une version fraîche et savoureuse avec garniture fraîche, crudités croquantes et sauce spéciale Boka.',
    ingredients: ['Pain artisanal croustillant', 'Poulet tendre', 'Légumes frais croquants', 'Sauce maison'],
    image: '/img/p16.jpeg'
  },
  {
    id: 'boca-original',
    name: 'Boca Original',
    category: 'boka',
    price: 42,
    popular: true,
    badge: 'Best-Seller',
    spiceLevel: 'Doux',
    description: 'Le sandwich signature Boca dans un pain croustillant aux graines, garni d\'un filet de poulet pané ultra croustillant, cheddar fondu, salade fraîche et sauce maison Boka.',
    ingredients: ['Pain baguette artisanale croustillante', 'Poulet pané doré & croustillant', 'Cheddar fondant', 'Salade croquante', 'Sauce Boka secrète'],
    image: '/img/p14.jpeg'
  },
  {
    id: 'boca-spicy',
    name: 'Boca Spicy',
    category: 'boka',
    price: 42,
    badge: 'Piquant 🔥',
    spiceLevel: 'Très Épicé',
    description: 'La version intense du Boca pour les amateurs de sensations fortes avec jalapeños, marinade pimentée et sauce épicée artisanale.',
    ingredients: ['Pain artisanal', 'Poulet mariné aux épices fortes', 'Piments jalapeños', 'Sauce spicy maison', 'Salade fraîche', 'Fromage'],
    image: '/img/p14.jpeg'
  },
  {
    id: 'boca-mexicain',
    name: 'Boca Mexicain',
    category: 'boka',
    price: 42,
    spiceLevel: 'Épicé',
    description: 'Inspirations mexicaines : poulet mariné aux herbes latines, poivrons sautés, sauce salsa onctueuse et fromage râpé fondant.',
    ingredients: ['Poulet grillé façon fajitas', 'Poivrons et oignons caramélisés', 'Sauce mexicaine fumée', 'Gouda fondu', 'Pain toasté'],
    image: '/img/p14.jpeg'
  },
  {
    id: 'boca-amirican',
    name: 'Boca Amirican',
    category: 'boka',
    price: 42,
    description: 'Gourmandise américaine pure avec double cheddar, crispy bacon de dinde, oignons frits croustillants et sauce barbecue caramélisée.',
    ingredients: ['Poulet pané tendre', 'Bacon grillé croustillant', 'Double cheddar affiné', 'Oignons frits croustillants', 'Sauce BBQ américaine'],
    image: '/img/p14.jpeg'
  },
  {
    id: 'boca-buffalo',
    name: 'Boca Buffalo',
    category: 'boka',
    price: 42,
    spiceLevel: 'Épicé',
    description: 'Nappé de la véritable sauce Buffalo douce-amère et relevée, accompagnée de sauce ranch fraîche et céleri croquant.',
    ingredients: ['Poulet croustillant glacé sauce Buffalo', 'Sauce ranch crémeuse', 'Salade iceberg', 'Pickles', 'Fromage'],
    image: '/img/p14.jpeg'
  },
  {
    id: 'boca-pizza',
    name: 'Boca Pizza',
    category: 'boka',
    price: 42,
    badge: 'Spécialité',
    description: 'L\'accord parfait entre un sandwich et une pizza : sauce tomate basilic mijotée, mozzarella fondante filante et origan.',
    ingredients: ['Poulet sauté aux herbes', 'Coulis de tomate', 'Mozzarella fondante', 'Origan séché', 'Olives noires'],
    image: '/img/p15.jpeg'
  },

  // --- TACOS ---
  {
    id: 'tacos-mexicain',
    name: 'Tacos Mexicain',
    category: 'tacos',
    price: 42,
    spiceLevel: 'Épicé',
    badge: 'Coup de Cœur',
    description: 'Saveurs latines avec sauce salsa braisée, poivrons marinés, épices tex-mex et frites dorées.',
    ingredients: ['Galette grillée', 'Poulet tex-mex', 'Frites', 'Sauce salsa épicée', 'Sauce fromagère', 'Poivrons'],
    image: '/img/p12.jpeg'
  },
  {
    id: 'tacos-original',
    name: 'Tacos Original',
    category: 'tacos',
    price: 42,
    popular: true,
    badge: 'Incontournable',
    description: 'Le fameux tacos garni de viandes savoureuses au choix, frites dorées à l\'intérieur et nappé de notre divine sauce fromagère secrète.',
    ingredients: ['Galette de blé toastée', 'Viande hachée & poulet mariné', 'Frites croustillantes à l\'intérieur', 'Sauce fromagère maison onctueuse'],
    image: '/img/p13.jpeg'
  },
  {
    id: 'tacos-spicy',
    name: 'Tacos Spicy',
    category: 'tacos',
    price: 42,
    spiceLevel: 'Très Épicé',
    badge: 'Piquant 🔥',
    description: 'Tacos garni de viandes épicées, sauce samouraï pimentée, jalapeños et notre sauce gruyère fondante.',
    ingredients: ['Galette toastée', 'Poulet piquant mariné', 'Frites', 'Sauce samouraï & sauce fromagère', 'Piments forts'],
    image: '/img/p13.jpeg'
  },
  {
    id: 'tacos-amirican',
    name: 'Tacos Amirican',
    category: 'tacos',
    price: 44,
    badge: 'Extra Gourmand',
    description: 'Gros tacos américain avec double viande, bacon croustillant, frites et double dose de cheddar chaud.',
    ingredients: ['Galette XL', 'Steak haché pur bœuf & tenders', 'Bacon grillé', 'Sauce BBQ & Sauce fromagère', 'Frites'],
    image: '/img/p13.jpeg'
  },
  {
    id: 'tacos-cheesy',
    name: 'Tacos Cheesy',
    category: 'tacos',
    price: 42,
    badge: '3 Fromages',
    description: 'Le paradis du fromage : cheddar, emmental râpé et sauce fromagère fondue à flot.',
    ingredients: ['Galette garnie', 'Émincé de poulet', 'Frites croustillantes', 'Cheddar fondant', 'Emmental râpé', 'Sauce fromagère'],
    image: '/img/p13.jpeg'
  },
  {
    id: 'tacos-thai',
    name: 'Tacos Thai',
    category: 'tacos',
    price: 40,
    spiceLevel: 'Épicé',
    description: 'Une touche asiatique originale : poulet sauté sauce Sweet Chili thaïlandaise, coriandre, frites et crème onctueuse.',
    ingredients: ['Poulet sauté wok', 'Sauce thaï sweet chili & sésame', 'Frites', 'Sauce fromagère', 'Oignons nouveaux'],
    image: '/img/p13.jpeg'
  },
  {
    id: 'tacos-french',
    name: 'Tacos French',
    category: 'tacos',
    price: 38,
    description: 'La recette lyonnaise traditionnelle : crème, champignons persillés, frites et sauce gruyère crémeuse.',
    ingredients: ['Galette de blé', 'Poulet émincé à la crème', 'Champignons sautés', 'Frites dorées', 'Sauce gruyère maison'],
    image: '/img/p13.jpeg'
  },

  // --- SOFT TACO ---
  {
    id: 'soft-taco-big-up',
    name: 'Soft Taco Big Up',
    category: 'soft_taco',
    price: 16,
    badge: 'Coup de Cœur',
    description: 'Garni de tendres morceaux de poulet mariné, sauce spéciale Big Up, fromage râpé et crudités du jour.',
    ingredients: ['Tortilla souple', 'Poulet tendre sauté', 'Sauce Big Up signature', 'Cheddar râpé', 'Salade & tomates'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/7_Up_Mojito_330ml_can-front_PNr%C2%B00881.jpg',
  },
  {
    id: 'soft-taco-mexicain',
    name: 'Soft Taco Mexicain',
    category: 'soft_taco',
    price: 16,
    spiceLevel: 'Épicé',
    description: 'Le vrai taco street-food mexicain avec viande assaisonnée, salsa mexicaine et fromage fondant.',
    ingredients: ['Tortilla souple de maïs', 'Viande assaisonnée', 'Pico de gallo', 'Sauce mexicaine'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/7_Up_Mojito_330ml_can-front_PNr%C2%B00881.jpg',
  },
  {
    id: 'soft-taco-spicy',
    name: 'Soft Taco Spicy',
    category: 'soft_taco',
    price: 16,
    spiceLevel: 'Très Épicé',
    description: 'Coquille souple de maïs garnie de viande épicée, dés de tomates fraîches, salade, cheddar et sauce chili pimentée.',
    ingredients: ['Tortilla souple', 'Viande hachée épicée', 'Dés de tomates', 'Salade verte croquante', 'Sauce chili piquante'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/7_Up_Mojito_330ml_can-front_PNr%C2%B00881.jpg',
  },
  {
    id: 'soft-bbq',
    name: 'Soft BBQ',
    category: 'soft_taco',
    price: 16,
    description: 'Tortilla souple garnie de viandes grillées caramélisées au barbecue, oignons doux et fromage fondant.',
    ingredients: ['Tortilla souple', 'Poulet grillé BBQ', 'Salade', 'Tomates fraîches', 'Sauce barbecue fumée'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/7_Up_Mojito_330ml_can-front_PNr%C2%B00881.jpg',
  },

  // --- CLASSIC & BURGERS ---
  {
    id: 'chicken-burger',
    name: 'Chicken Burger',
    category: 'classic',
    price: 32,
    popular: true,
    badge: 'Top Burger',
    description: 'Pain brioché aux graines de sésame grillé, épais filet de poulet croustillant pané minute, salade batavia, tomate et sauce burger onctueuse.',
    ingredients: ['Bun brioché artisanal au sésame', 'Filet de poulet croustillant', 'Cheddar fondant', 'Salade, cornichons doux', 'Sauce burger maison'],
    image: '/img/p11.jpeg'
  },
  {
    id: 'soft-burger',
    name: 'Soft Burger',
    category: 'classic',
    price: 30,
    description: 'Burger moelleux léger avec steak tendre, fromage fondant et condiments savoureux pour combler les petites faims.',
    ingredients: ['Pain moelleux sans croûte dure', 'Steak tendre haché', 'Tranche de cheddar', 'Ketchup & moutarde douce', 'Pickles'],
    image: '/img/p11.jpeg'
  },
  {
    id: 'osta-chicken',
    name: 'Osta Chicken',
    category: 'classic',
    price: 30,
    description: 'Burger spécial toasté façon Osta avec galette de poulet croustillante, oignons caramélisés et sauce crémeuse.',
    ingredients: ['Pain rond doré', 'Galette de poulet croustillante', 'Oignons caramélisés', 'Sauce douce', 'Fromage'],
    image: '/img/p6.jpeg'
  },
  {
    id: 'soft-chees-boeuf',
    name: 'Soft Chees Boeuf',
    category: 'classic',
    price: 30,
    description: 'Pain moelleux toasté garni de pur bœuf savoureux, fromage cheddar ultra fondant et sauce onctueuse.',
    ingredients: ['Bun moelleux toasté', 'Steak haché pur bœuf', 'Cheddar fondant', 'Sauce cheese onctueuse', 'Pickles'],
    image: '/img/p9.jpeg'
  },

  // --- FRITO ---
  {
    id: 'frito-cheesy',
    name: 'Frito Cheesy',
    category: 'frito',
    price: 40,
    popular: true,
    badge: 'Fromage Chaud',
    description: 'Délicieux frito croustillant servi sous une cascade de sauce fromage cheddar bien fondante et chaude.',
    ingredients: ['Morceaux croustillants de poulet pané', 'Sauce cheddar fondue abondante', 'Ciboulette fraîche'],
    image: '/img/p3.jpeg'
  },
  {
    id: 'frito-bbq-spicy',
    name: 'Frito BBQ Spicy',
    category: 'frito',
    price: 40,
    spiceLevel: 'Épicé',
    description: 'Poulet frito nappé d\'un glaçage barbecue fumé relevé d\'un filet de sauce pimentée.',
    ingredients: ['Poulet pané croustillant', 'Glaçage sauce BBQ épicée', 'Graines de sésame grillées'],
    image: '/img/p3.jpeg'
  },
  {
    id: 'frito-big-up',
    name: 'Frito Big Up',
    category: 'frito',
    price: 40,
    badge: 'Best-Seller',
    description: 'Le frito servi avec notre légendaire sauce Big Up douce et relevée aux herbes aromatiques.',
    ingredients: ['Poulet frit signature', 'Sauce secrète Big Up', 'Frites croustillantes en accompagnement'],
    image: '/img/p3.jpeg'
  },
  {
    id: 'frito-mexican',
    name: 'Frito Mexican',
    category: 'frito',
    price: 40,
    spiceLevel: 'Épicé',
    description: 'Bouchées croustillantes saupoudrées d\'épices mexicaines cajun, accompagnées de sauce salsa fraîche.',
    ingredients: ['Poulet extra croustillant', 'Assaisonnement cajun et lime', 'Sauce salsa roja'],
    image: '/img/p3.jpeg'
  },
  {
    id: 'frito-mechoui',
    name: 'Frito Mechoui',
    category: 'frito',
    price: 40,
    badge: 'Spécialité',
    description: 'Poulet frito aromatisé aux épices traditionnelles du méchoui marocain (cumin torréfié, coriandre et ail).',
    ingredients: ['Poulet mariné méchoui', 'Panure croustillante dorée', 'Épices cumin & sel de Guérande'],
    image: '/img/p3.jpeg'
  },
  {
    id: 'frito-extra-spicy',
    name: 'Frito Extra Spicy',
    category: 'frito',
    price: 40,
    spiceLevel: 'Très Épicé',
    badge: 'Extra Piquant 🔥',
    description: 'Bâtonnets & morceaux de poulet ultra-croustillants frits à la commande, enrobés d\'un mélange d\'épices volcaniques.',
    ingredients: ['Poulet ultra crispy panure dorée', 'Épices piments rouges & paprika fumé', 'Sauce dipping pimentée'],
    image: '/img/p3.jpeg'
  },

  // --- BIG BOX ---
  {
    id: 'big-box-original',
    name: 'Big Box Original',
    category: 'big_box',
    price: 38,
    popular: true,
    badge: 'Formule Complète',
    description: 'La boîte complète Boka : assortiment de tenders croustillants dorés, frites, sauces maison au choix et accompagnements.',
    ingredients: ['Assortiment tenders de poulet pané', 'Grande portion de frites', '2 Sauces au choix'],
    image: '/img/p7.jpeg'
  },
  {
    id: 'big-box-spicy',
    name: 'Big Box Spicy',
    category: 'big_box',
    price: 38,
    spiceLevel: 'Très Épicé',
    badge: 'Spicy 🔥',
    description: 'Box généreuse épicée avec tenders pimentés ultra crispy, frites dorées et sauces pimentées.',
    ingredients: ['Tenders épicés panure croustillante', 'Grande portion de frites', 'Sauce spicy', 'Sauce fromagère'],
    image: '/img/p8.jpeg'
  },
  {
    id: 'big-box-dragon',
    name: 'Big Box Dragon Boeuf',
    category: 'big_box',
    price: 42,
    spiceLevel: 'Très Épicé',
    badge: 'Box Boeuf 🔥',
    description: 'Grande boîte généreuse au bœuf savoureux avec sauce dragon piquante, frites maison croustillantes et sauces.',
    ingredients: ['Steak / bouchées de bœuf savoureuses', 'Sauce dragon piquante', 'Portion généreuse de frites dorées', 'Sauces maison'],
    image: '/img/p10.jpeg'
  },

  // --- CRISPY CHIKEN ---
  {
    id: 'dedo-chicken-6ps',
    name: 'Dedo Chicken 6pcs',
    category: 'chiken',
    price: 39,
    popular: true,
    badge: '6 Morceaux',
    description: '6 délicieux bâtonnets de poulet croustillants (« dedos ») panés à la perfection, tendres à cœur.',
    ingredients: ['6 bâtonnets de blanc de poulet véritable', 'Panure artisanale secrète croustillante', 'Sauce dipping au choix'],
    image: '/img/p4.jpeg'
  },
  {
    id: 'wings-6pcs',
    name: 'Wings 6pcs',
    category: 'chiken',
    price: 39,
    badge: '6 Ailes Dorées',
    description: '6 ailes de poulet juteuses marinées et dorées, croustillantes à l\'extérieur et savoureuses à l\'intérieur.',
    ingredients: ['6 ailes de poulet fraîches', 'Marinade paprika doux et herbes', 'Panure fine craquante'],
    image: '/img/p5.jpeg'
  },

  // --- PASTA & SALADES ---
  {
    id: 'pasta-salad',
    name: 'Pasta Salad',
    category: 'pasta',
    price: 27,
    description: 'Salade de pâtes fraîches avec fromage fondant, maïs doux, lanchon savoureux et olives noires.',
    ingredients: ['Pâtes al dente', 'Fromage', 'Maïs doux', 'Lanchon', 'Olives noires', 'Assaisonnement maison'],
    image: '/img/p1.jpeg'
  },
  {
    id: 'chicken-pasta',
    name: 'Chicken Pasta',
    category: 'pasta',
    price: 36,
    popular: true,
    badge: 'Chaud & Crémeux',
    description: 'Pâtes sautées à la poêle avec émincé de blanc de poulet, sauce crème parfumée et fromage fondant.',
    ingredients: ['Pâtes italiennes', 'Morceaux de blanc de poulet grillé', 'Sauce crème onctueuse', 'Fromage', 'Herbes aromatiques'],
    image: '/img/p1.jpeg'
  },
  {
    id: 'chicken-salad',
    name: 'Chicken Salad',
    category: 'pasta',
    price: 39,
    popular: true,
    badge: 'Fraîcheur',
    description: 'Grande salade composée garnie de tranches de poulet croustillant ou grillé, crudités fraîches et assaisonnement savoureux.',
    ingredients: ['Poulet croustillant tranché', 'Salade fraîche croquante', 'Tomates fraîches', 'Maïs & légumes', 'Sauce gourmande'],
    image: '/img/p2.jpeg'
  },

  // --- BOISSONS & DESSERT ---
  {
    id: 'pepsi-25cl',
    name: 'Pepsi 25cl',
    category: 'boissons',
    price: 6,
    description: 'Bouteille rafraîchissante de Pepsi 25cl servie bien fraîche.',
    ingredients: ['Boisson gazeuse rafraîchissante'],
    image: 'img/pepsi.webp'
  },
  {
    id: 'pepsi-zero-33cl',
    name: 'Pepsi Zéro 33cl',
    category: 'boissons',
    price: 8,
    description: 'Canette fraîche de Pepsi Zéro sucre 33cl.',
    ingredients: ['Boisson gazeuse sans sucre'],
    image: 'img/pepsi_zero_33.jpg',
  },
  {
    id: '7up-25cl',
    name: '7up 25cl',
    category: 'boissons',
    price: 6,
    description: 'Boisson rafraîchissante aux arômes naturels de citron et lime 25cl.',
    ingredients: ['Boisson gazeuse citron-lime'],
    image: 'img/7up.webp',
  },
  {
    id: 'mirinda-orange-25cl',
    name: 'Mirinda Orange 25cl',
    category: 'boissons',
    price: 6,
    description: 'Mirinda saveur Orange pétillante et fruitée 25cl.',
    ingredients: ['Boisson gazeuse arôme orange'],
    image: 'img/mirinda.webp',
  },
  {
    id: 'mirinda-pomme-25cl',
    name: 'Mirinda Pomme 25cl',
    category: 'boissons',
    price: 6,
    description: 'Mirinda rafraîchissante au goût intense de pomme verte 25cl.',
    ingredients: ['Boisson gazeuse saveur pomme'],
    image: 'img/mirindaPomme.jpg',
  },
  {
    id: 'mirinda-citron-25cl',
    name: 'Mirinda Citron 25cl',
    category: 'boissons',
    price: 6,
    description: 'Mirinda saveur Citron acidulée et vivifiante 25cl.',
    ingredients: ['Boisson gazeuse arôme citron'],
    image: 'img/mirindaCitron.jpg',
  },
  {
    id: 'mirinda-citron-33cl',
    name: 'Mirinda Citron 33cl',
    category: 'boissons',
    price: 8,
    description: 'Canette de Mirinda saveur Citron 33cl servie glacée.',
    ingredients: ['Boisson gazeuse arôme citron'],
    image: 'img/mirindaC33.webp',
  },
  {
    id: 'mirinda-plus-ananas-25cl',
    name: 'Mirinda Plus Ananas 25cl',
    category: 'boissons',
    price: 7,
    description: 'Mirinda Plus aux saveurs tropicales d\'ananas 25cl.',
    ingredients: ['Boisson gazeuse ananas tropical'],
    image: 'img/mirindaPlus.jpg',
  },
  {
    id: 'mirinda-plus-tropical-25cl',
    name: 'Mirinda Plus Tropical 25cl',
    category: 'boissons',
    price: 7,
    description: 'Mirinda Plus saveur cocktail tropical fruité 25cl.',
    ingredients: ['Boisson gazeuse fruits tropicaux'],
    image: 'img/mirindaPlusT.jpg',
  },
  {
    id: 'palpi-25cl',
    name: 'Palpi',
    category: 'boissons',
    price: 6,
    description: 'Jus fruité et rafraîchissant avec pulpe.',
    ingredients: ['Boisson fruitée rafraîchissante'],
    image: 'img/pulpy.jpg',
  },
  {
    id: 'oulmes-33cl',
    name: 'Oulmès',
    category: 'boissons',
    price: 6,
    description: 'Eau minérale gazeuse naturelle pétillante marocaine servie bien fraîche.',
    ingredients: ['Eau minérale gazeuse naturelle'],
    image: 'img/oulmas.png',
  },
  {
    id: 'aquafina-50cl',
    name: 'Aquafina 50cl',
    category: 'boissons',
    price: 6,
    description: 'Eau minérale pure et rafraîchissante 50cl.',
    ingredients: ['Eau pure minérale'],
    image: 'img/aquafina50cl.jpg',
  },
  {
    id: 'lipton-citron-33cl',
    name: 'Lipton Citron 33cl',
    category: 'boissons',
    price: 10,
    description: 'Thé glacé Lipton saveur citron rafraîchissant 33cl.',
    ingredients: ['Thé glacé arôme citron'],
    image: 'img/liptonCitron.jpg',
  },
  {
    id: 'lipton-fruit-rouge-33cl',
    name: 'Lipton Fruit Rouge 33cl',
    category: 'boissons',
    price: 10,
    description: 'Thé glacé Lipton saveur fruits rouges délicieux 33cl.',
    ingredients: ['Thé glacé fruits rouges'],
    image: 'img/liptonRed.jpg',
  },
  {
    id: 'tiramisu',
    name: 'Tiramisu',
    category: 'boissons',
    price: 18,
    popular: true,
    badge: 'Dessert Maison',
    description: 'Délicieux tiramisu artisanal préparé maison avec mascarpone onctueux, biscuit cuillère et cacao pur.',
    ingredients: ['Crème au mascarpone fouettée', 'Biscuits imbibés au café', 'Cacao en poudre', 'Vanille'],
    image: 'img/tiramisu.png',
  },

  // --- SUPLIMO (Sauces & Suppléments) ---
  {
    id: 'suplimo-ss-algi',
    name: 'Sauce Algérienne',
    category: 'suplimo',
    price: 2,
    spiceLevel: 'Épicé',
    description: 'Pot de sauce algérienne épicée aux oignons caramélisés et tomate piquante.',
    ingredients: ['Mayonnaise, tomates, oignons frits, piment'],
    image: 'img/algerien.jpg',
  },
  {
    id: 'suplimo-ss-bigup',
    name: 'Sauce Big Up',
    category: 'suplimo',
    price: 2,
    description: 'La sauce signature de la maison, douce et riche en condiments.',
    ingredients: ['Sauce spéciale Boka'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/7_Up_Mojito_330ml_can-front_PNr%C2%B00881.jpg',
  },
  {
    id: 'suplimo-ss-bbq',
    name: 'Sauce BBQ',
    category: 'suplimo',
    price: 2,
    description: 'Sauce barbecue au goût fumé traditionnel américain.',
    ingredients: ['Sauce barbecue américaine fumée'],
    image: 'img/sauceBbq.jpg',
  },
  {
    id: 'suplimo-ss-blanch',
    name: 'Sauce Blanche',
    category: 'suplimo',
    price: 2,
    description: 'Sauce blanche fraîche aux herbes et pointe d\'ail doux.',
    ingredients: ['Yaourt égoutté, ail doux, ciboulette'],
    image: 'img/sauceBlanche.png',
  },
  {
    id: 'suplimo-ss-cheesy',
    name: 'Sauce Cheesy',
    category: 'suplimo',
    price: 3,
    badge: 'Extra Fromage',
    description: 'Pot de sauce cheddar fondue extra onctueuse pour tremper vos frites et poulets.',
    ingredients: ['Cheddar coulant fondu chaud'],
    image: 'img/sauceChesse.jpg',
  }
];
