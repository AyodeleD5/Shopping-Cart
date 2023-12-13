function applyCoupon() {
    const couponInput = document.getElementById('coupon');
    const couponCode = couponInput.value.trim();
  
    if (couponCode === 'WEB3BRIDGECOHORTx') {
      const totalElement = document.getElementById('total');
      const total = parseFloat(totalElement.textContent);
      const discountedTotal = total * 0.9;
      totalElement.textContent = discountedTotal.toFixed(2);
    }
  
    couponInput.value = ''; // Clear the input field
  }
  
  function checkout() {
    alert('Checkout complete! Thank you for shopping with us.');
    // You may want to perform additional actions here, such as sending the order to the server.
    // Clear the cart after successful checkout
    cart = [];
    renderCart();
    saveCart();
  }
  
  renderProducts();
  renderCart();
  