// Cart Management
function addToCart(name, price, image, category) {
    // Get existing cart items from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        // Add new item to cart
        cart.push({
            name: name,
            price: price,
            image: image,
            category: category,
            quantity: 1
        });
    }
    
    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count in navbar
    updateCartCount();
    
    // Show success message with toast notification
    showToast('Item added to cart!', 'success');
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.querySelector('.badge');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Toast Notifications
function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toastContainer') || createToastContainer();
    
    const toast = document.createElement('div');
    toast.className = `toast align-items-center text-white bg-${type} border-0`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');
    
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    `;
    
    toastContainer.appendChild(toast);
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
    
    // Remove toast after it's hidden
    toast.addEventListener('hidden.bs.toast', () => {
        toast.remove();
    });
}

function createToastContainer() {
    const container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    document.body.appendChild(container);
    return container;
}

// Product Filtering
function filterProducts(category) {
    const productCards = document.querySelectorAll('.col-md-4[data-category]');
    const buttons = document.querySelectorAll('.category-filter .btn');
    
    // Update active button
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        }
    });
    
    // Filter products
    productCards.forEach(card => {
        const productCategory = card.getAttribute('data-category');
        if (category === 'all' || productCategory === category) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Search Functionality
function searchProducts(query) {
    const productCards = document.querySelectorAll('.col-md-4[data-category]');
    const searchTerm = query.toLowerCase();
    
    productCards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const category = card.querySelector('.card-text').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || category.includes(searchTerm)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Form Validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('is-invalid');
            
            // Add validation message if it doesn't exist
            if (!input.nextElementSibling?.classList.contains('invalid-feedback')) {
                const feedback = document.createElement('div');
                feedback.className = 'invalid-feedback';
                feedback.textContent = 'This field is required';
                input.parentNode.appendChild(feedback);
            }
        } else {
            input.classList.remove('is-invalid');
        }
    });
    
    return isValid;
}

// Initialize all tooltips
function initializeTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

// Smooth Scroll
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart count
    updateCartCount();
    
    // Initialize tooltips
    initializeTooltips();
    
    // Add event listeners for category filter buttons
    const filterButtons = document.querySelectorAll('.category-filter .btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterProducts(this.getAttribute('data-category'));
        });
    });
    
    // Add event listener for search input
    const searchInput = document.querySelector('.input-group input[type="text"]');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchProducts(this.value);
        });
    }
    
    // Add event listeners for smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScroll(this.getAttribute('href'));
        });
    });
    
    // Add event listeners for form validation
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!validateForm(this.id)) {
                e.preventDefault();
            }
        });
    });

    // Initialize cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartDisplay();

    // Add to cart button click handler
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const product = {
                id: this.dataset.id,
                name: this.dataset.name,
                price: parseFloat(this.dataset.price),
                image: this.dataset.image,
                quantity: 1
            };

            // Check if product already exists in cart
            const existingProductIndex = cart.findIndex(item => item.id === product.id);
            
            if (existingProductIndex > -1) {
                cart[existingProductIndex].quantity += 1;
            } else {
                cart.push(product);
            }

            // Save to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
            
            // Update cart display
            updateCartDisplay();

            // Show success message
            showToast('Product added to cart!');
        });
    });

    // Clear cart button click handler
    document.querySelector('.clear-cart')?.addEventListener('click', function() {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
        showToast('Cart cleared!');
    });

    // Function to update cart display
    function updateCartDisplay() {
        const cartItemsContainer = document.querySelector('.cart-items');
        const cartCount = document.querySelector('.cart-count');
        const cartTotal = document.querySelector('.cart-total');
        
        // Update cart count
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);

        // Update cart items
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<div class="text-center text-muted py-3">Your cart is empty</div>';
        } else {
            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="cart-item d-flex align-items-center gap-2 mb-2">
                    <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover;">
                    <div class="flex-grow-1">
                        <h6 class="mb-0">${item.name}</h6>
                        <div class="d-flex justify-content-between align-items-center">
                            <small class="text-muted">Qty: ${item.quantity}</small>
                            <span class="text-primary">₹${(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                    </div>
                    <button class="btn btn-sm btn-link text-danger remove-from-cart" data-id="${item.id}">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `).join('');

            // Update total
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotal.textContent = `₹${total.toLocaleString()}`;

            // Add remove button handlers
            document.querySelectorAll('.remove-from-cart').forEach(button => {
                button.addEventListener('click', function() {
                    const id = this.dataset.id;
                    cart = cart.filter(item => item.id !== id);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateCartDisplay();
                    showToast('Product removed from cart!');
                });
            });
        }
    }
}); 