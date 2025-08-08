document.addEventListener('DOMContentLoaded', () => {
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            renderProducts(products);
        })
        .catch(error => console.error('Ошибка загрузки товаров:', error));
});

function renderProducts(products) {
    const grid = document.querySelector('.products-grid');
    grid.innerHTML = products.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                ${product.images.map(img => `
                    <img src="assets/photos/${img}" alt="${product.name}">
                `).join('')}
            </div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Готовый: ${product.priceReady} ₽</p>
            <p>Под заказ: ${product.priceCustom} ₽</p>
            <p>${product.inStock ? '✔ В наличии' : '✖ Под заказ'}</p>
        </div>
    `).join('');
}
