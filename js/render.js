/* ============================================================
   MIMOS Collections — Shared render helpers
   ============================================================ */

function mimosBadgeHTML(badge) {
  if (!badge) return '';
  const cls = badge === 'Custom' ? 'custom' : badge === 'New' ? 'new' : '';
  return `<span class="badge ${cls}">${badge}</span>`;
}

function mimosProductCardHTML(p) {
  return `
  <div class="product-card">
    <a href="product.html?id=${p.id}">
      <div class="product-thumb">
        ${mimosBadgeHTML(p.badge)}
        ${mimosArt(p.seed, p.category === 'custom' ? 'custom' : p.category)}
      </div>
    </a>
    <div class="product-info">
      <div class="product-cat">${MIMOS_CATEGORY_LABELS[p.category]}</div>
      <a href="product.html?id=${p.id}"><div class="product-name">${p.name}</div></a>
      <div class="product-price">
        ${mimosFormatPrice(p.price)}
        ${p.was ? `<span class="was">${mimosFormatPrice(p.was)}</span>` : ''}
      </div>
      <a href="product.html?id=${p.id}" class="btn btn-outline btn-sm btn-block">View Details</a>
    </div>
  </div>`;
}

function mimosRenderGrid(containerId, products) {
  const el = document.getElementById(containerId);
  if (!el) return;
  if (!products.length) {
    el.innerHTML = `<p class="lead" style="grid-column:1/-1;text-align:center;padding:40px 0;">No products match your filters yet — try adjusting them.</p>`;
    return;
  }
  el.innerHTML = products.map(mimosProductCardHTML).join('');
}

const MIMOS_CATEGORY_META = {
  girls: { label: 'Girls', tag: 'Dresses · Sets · Blouses' },
  boys: { label: 'Boys', tag: 'Shirts · Suits · Shorts' },
  baby: { label: 'Baby', tag: 'Rompers · Layette · Gifting' },
  custom: { label: 'Custom Confección', tag: 'Made-to-Order' },
};

function mimosCategoryCardHTML(key, seed) {
  const meta = MIMOS_CATEGORY_META[key];
  return `
  <a class="cat-card" href="shop.html?cat=${key}">
    <div class="art">${mimosArt(seed, key)}</div>
    <div class="overlay">
      <h3>${meta.label}</h3>
      <span>${meta.tag}</span>
    </div>
  </a>`;
}

function mimosInstaTileHTML(seed) {
  return `<a class="insta-tile" href="https://www.instagram.com/mimos_rd" target="_blank" rel="noopener">
    ${mimosArt(seed)}
    <div class="ig-overlay">&#9825;</div>
  </a>`;
}
