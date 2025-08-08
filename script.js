// Загрузка товаров из JSON
async function loadProducts() {
    try {
        const response = await fetch('products.json');
        if (!response.ok) throw new Error('Ошибка загрузки');
        const products = await response.json();
        renderProducts(products);
    } catch (error) {
        console.error('Ошибка:', error);
        document.getElementById('products').innerHTML = 
            '<p style="color:red">Не удалось загрузить товары. Обновите страницу.</p>';
    }
}

// Отрисовка товаров
function renderProducts(products) {
    const container = document.getElementById('products');
    container.innerHTML = products.map(product => `
        <div class="product" data-id="${product.id}">
            <img src="assets/photos/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">${product.price} ₽</div>
            <button class="btn">${product.inStock ? 'Купить' : 'Под заказ'}</button>
        </div>
    `).join('');
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', loadProducts);
