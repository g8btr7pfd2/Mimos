/* ============================================================
   MIMOS Collections — Cart (client-side, localStorage)
   ============================================================ */

const MIMOS_CART_KEY = 'mimos_cart_v1';

function mimosGetCart() {
  try {
    return JSON.parse(localStorage.getItem(MIMOS_CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function mimosSaveCart(cart) {
  localStorage.setItem(MIMOS_CART_KEY, JSON.stringify(cart));
  mimosUpdateCartBadge();
}

function mimosAddToCart(productId, size, qty) {
  const cart = mimosGetCart();
  const existing = cart.find(i => i.id === productId && i.size === size);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, size, qty });
  }
  mimosSaveCart(cart);
}

function mimosUpdateCartQty(index, qty) {
  const cart = mimosGetCart();
  if (!cart[index]) return;
  if (qty <= 0) {
    cart.splice(index, 1);
  } else {
    cart[index].qty = qty;
  }
  mimosSaveCart(cart);
}

function mimosRemoveFromCart(index) {
  const cart = mimosGetCart();
  cart.splice(index, 1);
  mimosSaveCart(cart);
}

function mimosCartCount() {
  return mimosGetCart().reduce((sum, i) => sum + i.qty, 0);
}

function mimosCartLines() {
  return mimosGetCart().map((item, index) => {
    const product = mimosGetProduct(item.id);
    if (!product) return null;
    return { ...item, index, product, lineTotal: product.price * item.qty };
  }).filter(Boolean);
}

function mimosCartSubtotal() {
  return mimosCartLines().reduce((sum, l) => sum + l.lineTotal, 0);
}

function mimosUpdateCartBadge() {
  const count = mimosCartCount();
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function mimosToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>&#10003;</span><span>${message}</span>`;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 2800);
}

document.addEventListener('DOMContentLoaded', mimosUpdateCartBadge);
