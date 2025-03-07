document.addEventListener('DOMContentLoaded', () => {
    const cartCounter = document.querySelector('.cart-counter');
    const counterText = document.querySelector('.counter-text');
    let cartCount = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0;
    function updateCartCounter() {
        counterText.textContent = cartCount;
        cartCounter.style.display = cartCount > 0 ? 'flex' : 'none';
    }
    updateCartCounter();
});