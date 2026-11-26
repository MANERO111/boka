const fs = require('fs');
const path = require('path');

const menuContent = fs.readFileSync(path.join(__dirname, '..', 'app', 'data', 'menu.ts'), 'utf8');

const startMarker = 'export const MENU_ITEMS: MenuItem[] = [';
const startIndex = menuContent.indexOf(startMarker);
const endIndex = menuContent.lastIndexOf('];');

if (startIndex === -1 || endIndex === -1) {
  console.error('Could not find MENU_ITEMS in menu.ts');
  process.exit(1);
}

const arrayCode = menuContent.substring(startIndex + startMarker.length - 1, endIndex + 1);

// Safely evaluate array
const items = eval(`(${arrayCode})`);

const CATEGORY_MAP = {
  boka: 'Boka Fast Food / Boka Sandwiches',
  tacos: 'Boka Fast Food / Tacos Français',
  bowls_wraps: 'Boka Fast Food / Bowls & Wraps',
  classic: 'Boka Fast Food / Classics & Burgers',
  panini: 'Boka Fast Food / Panini',
  frito: 'Boka Fast Food / Frito Crispy',
  chiken: 'Boka Fast Food / Crispy Poulet',
  big_box: 'Boka Fast Food / Big Box',
  pasta: 'Boka Fast Food / Pasta & Salades',
  suplimo: 'Boka Fast Food / Suppléments & Sauces',
  desserts: 'Boka Fast Food / Boissons & Desserts',
  boissons: 'Boka Fast Food / Boissons & Desserts',
};

function escapeCsv(val) {
  if (val === null || val === undefined) return '';
  const str = String(val);
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

const headers = [
  'id',
  'name',
  'default_code',
  'list_price',
  'categ_id',
  'type',
  'sale_ok',
  'purchase_ok',
  'available_in_pos',
  'description_sale'
];

const rows = [headers];

items.forEach((item) => {
  // 1. Regular item (Seul)
  rows.push([
    `boka_product_${item.id.replace(/-/g, '_')}`,
    item.name,
    item.id,
    item.price,
    CATEGORY_MAP[item.category] || 'Boka Fast Food',
    'consu',
    '1',
    '0',
    '1',
    item.description || ''
  ]);

  // 2. Menu formula if available
  if (item.menuPrice) {
    rows.push([
      `boka_product_${item.id.replace(/-/g, '_')}_menu`,
      `${item.name} (Menu)`,
      `${item.id}-menu`,
      item.menuPrice,
      CATEGORY_MAP[item.category] || 'Boka Fast Food',
      'consu',
      '1',
      '0',
      '1',
      `Formule Menu (avec frites + boisson) - ${item.description || ''}`
    ]);
  }
});

const csvData = rows.map((r) => r.map(escapeCsv).join(',')).join('\n');
const outputPath = path.join(__dirname, '..', 'boka_products_odoo.csv');
fs.writeFileSync(outputPath, csvData, 'utf8');

console.log(`Generated ${outputPath} with ${rows.length - 1} products (including menu formulas).`);
