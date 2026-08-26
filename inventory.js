// Sample product data
const products = {
    'living-room': [
        { id: 'L001', name: 'Modern Sofa', price: 899, stock: 15, image: 'https://via.placeholder.com/50', status: 'In Stock' },
        { id: 'L002', name: 'Coffee Table', price: 299, stock: 10, image: 'https://via.placeholder.com/50', status: 'In Stock' },
        { id: 'L003', name: 'Accent Chair', price: 499, stock: 5, image: 'https://via.placeholder.com/50', status: 'Low Stock' }
    ],
    'bedroom': [
        { id: 'B001', name: 'Queen Size Bed', price: 1299, stock: 12, image: 'https://via.placeholder.com/50', status: 'In Stock' },
        { id: 'B002', name: 'Dresser', price: 799, stock: 8, image: 'https://via.placeholder.com/50', status: 'In Stock' },
        { id: 'B003', name: 'Nightstand', price: 199, stock: 0, image: 'https://via.placeholder.com/50', status: 'Out of Stock' }
    ],
    'dining-room': [
        { id: 'D001', name: 'Dining Table', price: 899, stock: 6, image: 'https://via.placeholder.com/50', status: 'In Stock' },
        { id: 'D002', name: 'Dining Chair Set', price: 599, stock: 4, image: 'https://via.placeholder.com/50', status: 'Low Stock' },
        { id: 'D003', name: 'China Cabinet', price: 1199, stock: 3, image: 'https://via.placeholder.com/50', status: 'Low Stock' }
    ],
    'office': [
        { id: 'O001', name: 'Office Desk', price: 499, stock: 10, image: 'https://via.placeholder.com/50', status: 'In Stock' },
        { id: 'O002', name: 'Office Chair', price: 299, stock: 7, image: 'https://via.placeholder.com/50', status: 'In Stock' },
        { id: 'O003', name: 'Bookshelf', price: 399, stock: 0, image: 'https://via.placeholder.com/50', status: 'Out of Stock' }
    ]
};

// Function to update the active category card and selected category text
function updateActiveCard(selectedCategory) {
    // Update category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('active-card');
        if (card.dataset.category === selectedCategory) {
            card.classList.add('active-card');
        }
    });

    // Update selected category text
    const selectedCategoryElem = document.getElementById('selected-category');
    if (selectedCategoryElem) {
        selectedCategoryElem.textContent = selectedCategory.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }
}

// Function to display products for selected category
function displayProducts(category) {
    const productsContainer = document.getElementById('products-container');
    if (!productsContainer) {
        console.error('Products container not found');
        return;
    }

    const categoryProducts = products[category] || [];
    
    let html = '';
    if (categoryProducts.length === 0) {
        html = '<tr><td colspan="8" class="text-center py-4">No products found in this category</td></tr>';
    } else {
        categoryProducts.forEach(product => {
            const statusClass = product.status === 'In Stock' ? 'bg-success' : 
                              product.status === 'Low Stock' ? 'bg-warning' : 'bg-danger';
            
            html += `
                <tr>
                    <td>${product.id}</td>
                    <td><img src="${product.image}" alt="${product.name}" class="product-image rounded"></td>
                    <td>${product.name}</td>
                    <td>${category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</td>
                    <td>$${product.price.toLocaleString()}</td>
                    <td>${product.stock}</td>
                    <td><span class="badge ${statusClass}">${product.status}</span></td>
                    <td>
                        <button class="btn btn-sm btn-outline-primary me-1" onclick="editProduct('${product.id}')">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-danger" onclick="deleteProduct('${product.id}')">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `;
        });
    }
    
    productsContainer.innerHTML = html;
}

// Function to edit product (placeholder)
function editProduct(productId) {
    console.log('Edit product:', productId);
    // Add your edit logic here
}

// Function to delete product (placeholder)
function deleteProduct(productId) {
    console.log('Delete product:', productId);
    // Add your delete logic here
}

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const category = card.dataset.category;
            console.log('Selected category:', category); // Debug log
            updateActiveCard(category);
            displayProducts(category);
        });
    });

    // Add console log to verify script is loading
    console.log('Inventory script loaded successfully');
}); 