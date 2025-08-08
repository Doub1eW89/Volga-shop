// Загружаем товары из JSON
async function loadProducts() {
    const response = await fetch('products.json');
    const products = await response.json();
    renderProducts(products);
}

// Отрисовка товаров
function renderProducts(products) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = products.map(product => `
        <div class="product" data-category="${product.category}">
            <div class="gallery">
                ${product.images.map(img => `
                    <img src="assets/photos/${img}" alt="${product.name}">
                `).join('')}
            </div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="prices">
                <span class="price-ready">✅ ${product.priceReady} ₽</span>
                <span class="price-custom">⏳ ${product.priceCustom} ₽</span>
            </div>
            <button class="order-btn">Уточнить наличие</button>
        </div>
    `).join('');
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', loadProducts);
