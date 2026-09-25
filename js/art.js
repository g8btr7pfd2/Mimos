/* ============================================================
   MIMOS Collections — Illustrated placeholder artwork
   Generates soft, on-brand SVG "photography" for products,
   categories and the Instagram strip (no external images).
   ============================================================ */

const MIMOS_PALETTES = [
  ['#f7d9e2', '#f3c9d4'],
  ['#f3e6d8', '#e9cfa8'],
  ['#e7eee0', '#c7d6b8'],
  ['#fbeef1', '#e7a3b6'],
  ['#eef1e6', '#aebb9d'],
  ['#f9f1e6', '#c9a567'],
];

function paletteFor(seed) {
  return MIMOS_PALETTES[seed % MIMOS_PALETTES.length];
}

const MIMOS_ICONS = {
  girls: `<path d="M100 40c-10 0-18 8-18 18 0 6 3 11 7 15l-28 90c-2 7 3 14 11 14h56c8 0 13-7 11-14l-28-90c4-4 7-9 7-15 0-10-8-18-18-18z" fill="rgba(255,255,255,0.55)"/>
    <circle cx="100" cy="58" r="12" fill="rgba(255,255,255,0.75)"/>`,
  boys: `<rect x="66" y="55" width="68" height="52" rx="10" fill="rgba(255,255,255,0.55)"/>
    <rect x="76" y="100" width="20" height="55" rx="6" fill="rgba(255,255,255,0.5)"/>
    <rect x="104" y="100" width="20" height="55" rx="6" fill="rgba(255,255,255,0.5)"/>
    <path d="M66 60l-16 26 12 8 14-24z" fill="rgba(255,255,255,0.5)"/>
    <path d="M134 60l16 26-12 8-14-24z" fill="rgba(255,255,255,0.5)"/>`,
  baby: `<path d="M100 48c-24 0-40 16-40 42 0 20 10 34 22 40v18c0 5 4 9 9 9h18c5 0 9-4 9-9v-18c12-6 22-20 22-40 0-26-16-42-40-42z" fill="rgba(255,255,255,0.55)"/>
    <circle cx="86" cy="86" r="4" fill="#8a7a6f"/><circle cx="114" cy="86" r="4" fill="#8a7a6f"/>
    <path d="M88 98q12 10 24 0" stroke="#8a7a6f" stroke-width="3" fill="none" stroke-linecap="round"/>`,
  custom: `<path d="M100 45l10 26 28 3-21 19 6 28-23-15-23 15 6-28-21-19 28-3z" fill="rgba(255,255,255,0.6)"/>
    <circle cx="100" cy="130" r="3" fill="rgba(255,255,255,0.7)"/>`,
  bow: `<path d="M100 100c-14-22-46-22-46 0 0 14 20 20 46 8 26 12 46 6 46-8 0-22-32-22-46 0z" fill="rgba(255,255,255,0.6)"/>
    <circle cx="100" cy="100" r="9" fill="rgba(255,255,255,0.8)"/>`,
};

const ICON_KEYS = Object.keys(MIMOS_ICONS);

function mimosArt(seed, category) {
  const [c1, c2] = paletteFor(seed);
  const iconKey = category && MIMOS_ICONS[category] ? category : ICON_KEYS[seed % ICON_KEYS.length];
  const icon = MIMOS_ICONS[iconKey];
  const id = `g${seed}-${Math.random().toString(36).slice(2, 7)}`;
  return `<svg viewBox="0 0 200 250" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${c1}"/>
        <stop offset="100%" stop-color="${c2}"/>
      </linearGradient>
    </defs>
    <rect width="200" height="250" fill="url(#${id})"/>
    <circle cx="30" cy="220" r="60" fill="rgba(255,255,255,0.12)"/>
    <circle cx="180" cy="30" r="40" fill="rgba(255,255,255,0.12)"/>
    <g transform="translate(0,20)">${icon}</g>
  </svg>`;
}

function mimosArtDataUri(seed, category) {
  const svg = mimosArt(seed, category);
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
