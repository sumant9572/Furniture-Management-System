// Sample product data
const products = [
    {
        id: 'F001',
        name: 'Modern Sofa',
        price: '₹899',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
        category: 'Living Room',
        stock: 15,
        description: 'A comfortable and stylish modern sofa perfect for your living room.',
        detailedDescription: 'This modern sofa features a sleek design with premium fabric upholstery. The deep seating and plush cushions provide exceptional comfort for you and your guests. The sturdy wooden frame ensures durability and long-lasting use.',
        specifications: {
            'Dimensions': '84" W x 35" D x 31" H',
            'Material': 'Premium Fabric, Solid Wood Frame',
            'Color': 'Gray',
            'Weight Capacity': '600 lbs',
            'Assembly Required': 'No'
        }
    },
    {
        id: 'F002',
        name: 'Wooden Dining Table',
        price: '₹599',
        image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7',
        category: 'Dining',
        stock: 8,
        description: 'Elegant wooden dining table that seats 6-8 people comfortably.',
        detailedDescription: 'This beautiful wooden dining table combines traditional craftsmanship with modern design. The solid wood construction ensures durability, while the smooth finish adds a touch of elegance to your dining space.',
        specifications: {
            'Dimensions': '72" L x 36" W x 30" H',
            'Material': 'Solid Oak Wood',
            'Color': 'Natural Oak',
            'Seating Capacity': '6-8 people',
            'Assembly Required': 'Yes'
        }
    },
    {
        id: 'F003',
        name: 'Queen Size Bed',
        price: '₹1,299',
        image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c',
        category: 'Bedroom',
        stock: 12,
        description: 'Luxurious queen size bed with headboard and footboard.',
        detailedDescription: 'This queen size bed features a modern design with a comfortable headboard and matching footboard. The sturdy construction and premium materials ensure a good night\'s sleep for years to come.',
        specifications: {
            'Dimensions': '65" W x 85" L x 45" H',
            'Material': 'Solid Wood, Upholstered Headboard',
            'Color': 'White',
            'Bed Size': 'Queen',
            'Assembly Required': 'Yes'
        }
    },
    {
        id: 'F004',
        name: 'Ergonomic Office Chair',
        price: '₹349',
        image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5',
        category: 'Office',
        stock: 20,
        description: 'Comfortable and adjustable ergonomic office chair for long working hours.',
        detailedDescription: 'This ergonomic office chair is designed to provide maximum comfort during long working hours. Features include adjustable height, lumbar support, and breathable mesh back.',
        specifications: {
            'Dimensions': '25" W x 25" D x 45" H',
            'Material': 'Mesh, Aluminum Base',
            'Color': 'Black',
            'Weight Capacity': '300 lbs',
            'Assembly Required': 'Minimal'
        }
    },
    {
        id: 'F005',
        name: 'Modern Bookshelf',
        price: '₹449',
        image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
        category: 'Living Room',
        stock: 10,
        description: 'Stylish and spacious bookshelf with multiple shelves for storage.',
        detailedDescription: 'This modern bookshelf offers ample storage space with its multiple shelves. The clean design and sturdy construction make it perfect for displaying books, decorative items, and more.',
        specifications: {
            'Dimensions': '36" W x 12" D x 72" H',
            'Material': 'Engineered Wood, Metal Frame',
            'Color': 'White',
            'Number of Shelves': '5',
            'Assembly Required': 'Yes'
        }
    },
    {
        id: 'F006',
        name: 'Glass Coffee Table',
        price: '₹299',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
        category: 'Living Room',
        stock: 15,
        description: 'Elegant glass coffee table with metal frame for your living room.',
        detailedDescription: 'This glass coffee table combines modern design with functionality. The tempered glass top and metal frame create a contemporary look while providing a stable surface for your living room.',
        specifications: {
            'Dimensions': '48" L x 24" W x 18" H',
            'Material': 'Tempered Glass, Metal Frame',
            'Color': 'Clear Glass, Black Frame',
            'Weight Capacity': '100 lbs',
            'Assembly Required': 'Yes'
        }
    }
];

// Initialize products in localStorage if not already present
if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify(products));
} 