let cart = [];
let cartCount = 0;

function addToCart(id, name, price) {
    const product = { id, name, price };
    cart.push(product);
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}

function toggleCart() {
    const cartModal = document.getElementById('cart');
    cartModal.style.display = (cartModal.style.display === 'none' || cartModal.style.display === '') ? 'flex' : 'none';
}

function clearCart() {
    cart = [];
    cartCount = 0;
    document.getElementById('cart-count').textContent = cartCount;
    updateCart();
    toggleCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        alert('Proceeding to checkout...');
        // Here you would integrate with a payment gateway or backend for checkout
    }
}
