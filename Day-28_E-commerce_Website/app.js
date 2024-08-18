
const products = [
    { id: 1, name: "Product 1", price: 25, description: "Description of Product 1", imageURL: "https://via.placeholder.com/300x200/1a73e8/ffffff?text=Product+1" },
    { id: 2, name: "Product 2", price: 50, description: "Description of Product 2", imageURL: "https://via.placeholder.com/300x200/ff6f61/ffffff?text=Product+2" },
    { id: 3, name: "Product 3", price: 75, description: "Description of Product 3", imageURL: "https://via.placeholder.com/300x200/feb236/ffffff?text=Product+3" }
];

const productListElement = document.getElementById('product-list');
const cartItemsElement = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const checkoutModal = document.getElementById('checkout-modal');
const closeModalBtn = document.querySelector('.close-btn');
const checkoutForm = document.getElementById('checkout-form');
let cart = [];

// Generate product listing
function displayProducts() {
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.imageURL}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <button class="btn primary" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productListElement.appendChild(productCard);
    });
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartDisplay();
}

// Update cart display
function updateCartDisplay() {
    cartItemsElement.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        const cartItemElement = document.createElement('li');
        cartItemElement.innerHTML = `
            ${item.name} - $${item.price} x ${item.quantity}
            <button class="btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            <button class="btn" onclick="updateQuantity(${item.id}, -1)">-</button>
            <button class="btn" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsElement.appendChild(cartItemElement);
    });
    
    cartTotalElement.textContent = total.toFixed(2);
}

// Update quantity
function updateQuantity(productId, change) {
    const cartItem = cart.find(item => item.id === productId);
    
    if (cartItem) {
        cartItem.quantity += change;
        if (cartItem.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
        }
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Open checkout modal
document.getElementById('checkout-btn').onclick = function() {
    checkoutModal.style.display = 'block';
};

// Close checkout modal
closeModalBtn.onclick = function() {
    checkoutModal.style.display = 'none';
};

// Handle form submission
checkoutForm.onsubmit = function(event) {
    event.preventDefault();
    alert('Order submitted! Thank you for your purchase.');
    checkoutModal.style.display = 'none';
    cart = [];
    updateCartDisplay();
};

// Initialize
displayProducts();
