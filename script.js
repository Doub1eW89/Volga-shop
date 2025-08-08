console.log("Script loaded!"); // Должно появиться в консоли

async function loadProducts() {
    console.log("Fetching products...");
    try {
        const response = await fetch('products.json');
        console.log("Response status:", response.status);
        
        const text = await response.text();
        console.log("Raw JSON:", text); // Проверьте содержимое
        
        const products = JSON.parse(text);
        console.log("Parsed products:", products);
        
        renderProducts(products);
    } catch (error) {
        console.error("Full error:", error);
    }
}
[
    {
        "id": 1,
        "name": "Кошелек Minimalist",
        "description": "Натуральная кожа, ручная сборка. Размер: 10х7 см.",
        "price": 8500,
        "image": "wallet_black.jpg",
        "inStock": true
    },
    {
        "id": 2,
        "name": "Портмоне Classic",
        "description": "Гальванизированная кожа, 12 отделений.",
        "price": 12000,
        "image": "wallet_brown.jpg",
        "inStock": true
    },
    {
        "id": 3,
        "name": "Рюкзак Urban",
        "description": "Натуральная кожа, вместительный. Вес: 800 г.",
        "price": 25000,
        "image": "backpack.jpg",
        "inStock": false
    }
]
