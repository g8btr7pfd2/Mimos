/* ============================================================
   MIMOS Collections — Product catalog
   ============================================================ */

const MIMOS_PRODUCTS = [
  { id: 'mc-001', name: 'Isabela Tulle Party Dress', category: 'girls', price: 88, was: null, sizes: ['2T','3T','4T','5','6','7'], badge: 'Bestseller', desc: 'A dreamy tiered tulle dress with a satin sash, hand-finished with delicate embroidery. Perfect for birthdays, weddings and holiday portraits.', fabric: 'Cotton-lined tulle, satin sash', care: 'Hand wash cold, hang dry', seed: 1 },
  { id: 'mc-002', name: 'Valentina Smocked Sundress', category: 'girls', price: 62, was: 74, sizes: ['12M','18M','2T','3T','4T','5'], badge: null, desc: 'Breezy hand-smocked cotton sundress with puff sleeves, inspired by classic European children\'s tailoring.', fabric: '100% Pima cotton', care: 'Machine wash gentle', seed: 2 },
  { id: 'mc-003', name: 'Camila Ruffle Romper', category: 'baby', price: 48, was: null, sizes: ['NB','3M','6M','9M','12M'], badge: 'New', desc: 'Soft ruffled romper with snap closures for easy changes, finished with a hand-tied bow at the back.', fabric: 'Organic cotton jersey', care: 'Machine wash cold', seed: 3 },
  { id: 'mc-004', name: 'Sofia Linen Pinafore Set', category: 'girls', price: 70, was: null, sizes: ['2T','3T','4T','5','6'], badge: null, desc: 'A two-piece linen pinafore and blouse set with pearl buttons — effortlessly elegant for special occasions.', fabric: 'European linen blend', care: 'Dry clean recommended', seed: 4 },
  { id: 'mc-005', name: 'Mateo Linen Guayabera Set', category: 'boys', price: 66, was: null, sizes: ['2T','3T','4T','5','6','7'], badge: 'Bestseller', desc: 'Classic linen guayabera shirt paired with tailored shorts — timeless island-inspired style for little gentlemen.', fabric: 'Washed linen', care: 'Machine wash gentle', seed: 5 },
  { id: 'mc-006', name: 'Diego Suspender Short Set', category: 'boys', price: 58, was: 68, sizes: ['12M','18M','2T','3T','4T'], badge: null, desc: 'Button-front shirt with matching suspender shorts, finished with a hand-tied bow tie — perfect for portraits.', fabric: 'Cotton poplin', care: 'Machine wash cold', seed: 6 },
  { id: 'mc-007', name: 'Lucas Knit Overall Romper', category: 'baby', price: 44, was: null, sizes: ['NB','3M','6M','9M','12M','18M'], badge: 'New', desc: 'Cozy ribbed-knit overalls with brass buttons and a soft cotton bodysuit beneath — a keepsake first outfit.', fabric: 'Cotton knit', care: 'Machine wash cold', seed: 7 },
  { id: 'mc-008', name: 'Amelia Embroidered Blouse', category: 'girls', price: 46, was: null, sizes: ['2T','3T','4T','5','6','7','8'], badge: null, desc: 'Hand-embroidered floral blouse with balloon sleeves and a delicate ruffled collar.', fabric: 'Cotton voile', care: 'Hand wash cold', seed: 8 },
  { id: 'mc-009', name: 'Antonella Quinceañera-Inspired Gown', category: 'custom', price: 240, was: null, sizes: ['Made to Order'], badge: 'Custom', desc: 'Fully custom confección gown, hand-fitted to your daughter\'s measurements with imported tulle and hand-appliqued lace. Ships in 3–4 weeks.', fabric: 'Imported tulle & lace, made to order', care: 'Dry clean only', seed: 9 },
  { id: 'mc-010', name: 'Gabriel Custom Christening Suit', category: 'custom', price: 165, was: null, sizes: ['Made to Order'], badge: 'Custom', desc: 'Heirloom christening set tailored to size, including cap and booties. Personalization and monogramming available.', fabric: 'Silk-blend, made to order', care: 'Dry clean only', seed: 10 },
  { id: 'mc-011', name: 'Bianca Velvet Holiday Dress', category: 'girls', price: 94, was: 110, sizes: ['2T','3T','4T','5','6','7'], badge: 'Bestseller', desc: 'Rich emerald velvet dress with a bow back sash — a MIMOS holiday signature piece.', fabric: 'Cotton velvet', care: 'Dry clean recommended', seed: 11 },
  { id: 'mc-012', name: 'Emilia Baby Bonnet & Booties Set', category: 'baby', price: 32, was: null, sizes: ['0-6M','6-12M'], badge: null, desc: 'Hand-crocheted bonnet and bootie set, a sweet finishing touch for newborn photos and gifting.', fabric: 'Cotton yarn', care: 'Hand wash cold', seed: 12 },
  { id: 'mc-013', name: 'Rafael Plaid Vest & Shorts', category: 'boys', price: 60, was: null, sizes: ['2T','3T','4T','5','6'], badge: 'New', desc: 'Tailored plaid vest over a crisp white shirt with matching shorts — a modern-classic look.', fabric: 'Cotton blend', care: 'Machine wash gentle', seed: 13 },
  { id: 'mc-014', name: 'Elena Bow Headband Trio', category: 'girls', price: 24, was: null, sizes: ['One Size'], badge: null, desc: 'Set of three hand-tied silk bow headbands in signature MIMOS blush, cream and sage tones.', fabric: 'Silk-blend ribbon', care: 'Spot clean', seed: 14 },
  { id: 'mc-015', name: 'Nicolás Custom Birthday Outfit', category: 'custom', price: 120, was: null, sizes: ['Made to Order'], badge: 'Custom', desc: 'Fully personalized first-birthday outfit including name or number appliqué, made to your exact specifications.', fabric: 'Cotton blend, made to order', care: 'Machine wash gentle', seed: 15 },
  { id: 'mc-016', name: 'Paloma Linen Two-Piece Set', category: 'girls', price: 54, was: null, sizes: ['12M','18M','2T','3T','4T','5'], badge: null, desc: 'Relaxed linen top and shorts set for warm-weather ease without sacrificing polish.', fabric: 'Washed linen', care: 'Machine wash gentle', seed: 16 },
];

const MIMOS_CATEGORY_LABELS = {
  girls: 'Girls',
  boys: 'Boys',
  baby: 'Baby',
  custom: 'Custom Confección',
};

function mimosFormatPrice(n) {
  return `$${n.toFixed(2)}`;
}

function mimosGetProduct(id) {
  return MIMOS_PRODUCTS.find(p => p.id === id);
}
