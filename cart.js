let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
  const cartContainer = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');
  cartContainer.innerHTML = '';

  let total = 0;

  cart.forEach(item => {
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
      ${item.name} - $${item.amount.toFixed(2)} x ${item.quantity}
      <button onclick="increaseQuantity(${item.id})">+</button>
      <button onclick="decreaseQuantity(${item.id})">-</button>
      <button onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartContainer.appendChild(cartItem);

    total += item.amount * item.quantity;
  });

  totalElement.textContent = total.toFixed(2);
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);

  if (product) {
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    renderCart();
    saveCart();
  }
}

function increaseQuantity(productId) {
  const item = cart.find(i => i.id === productId);

  if (item) {
    item.quantity += 1;
    renderCart();
    saveCart();
  }
}

function decreaseQuantity(productId) {
  const item = cart.find(i => i.id === productId);

  if (item && item.quantity > 1) {
    item.quantity -= 1;
    renderCart();
    saveCart();
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  renderCart();
  saveCart();
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}
