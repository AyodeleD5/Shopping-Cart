// Sample product data with image URLs
const products = [
    { id: 1, name: 'Airpod', amount: 180.00, imageUrl: 'images/airpod.jpg' },
    { id: 2, name: 'Burette', amount: 23.00, imageUrl: 'images/burette.jpg' },
    { id: 3, name: 'Rose Flower 3', amount: 75.00, imageUrl: 'images/flower.jpg' },
    { id: 4, name: 'Glasses', amount: 25.00, imageUrl: 'images/glases.jpg' },
    { id: 5, name: 'Jean Trousers', amount: 45.00, imageUrl: 'images/jean.jpg' },
    { id: 6, name: 'Phone', amount: 500.00, imageUrl: 'images/phone.jpg' },
    { id: 7, name: 'Snickers', amount: 100.00, imageUrl: 'images/snickers.jpg' },
    { id: 8, name: 'Laptos Sticker', amount: 5.00, imageUrl: 'images/sticker.jpg' },
    { id: 9, name: 'Suit', amount: 120.00, imageUrl: 'images/suit.jpg' },
    { id: 10, name: 'Wool Cloth', amount: 35.00, imageUrl: 'images/wool.jpg' },
    // Add image URLs for other products as needed
  ];
  
  function renderProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
  
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.className = 'product';
      productElement.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}" width="100" height="100">
        <p>${product.name} - $${product.amount.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productsContainer.appendChild(productElement);
    });
  }
  