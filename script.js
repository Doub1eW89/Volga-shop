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

// Слайдер для галерей
function initSliders() {
  document.querySelectorAll('.gallery').forEach(gallery => {
    const container = gallery.querySelector('.gallery-container');
    const dots = gallery.querySelectorAll('.dot');
    let currentIndex = 0;
    
    // Переключение по точкам
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
      });
    });
    
    function updateSlider() {
      container.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[currentIndex].classList.add('active');
    }
    
    // Автопереключение (опционально)
    setInterval(() => {
      currentIndex = (currentIndex + 1) % dots.length;
      updateSlider();
    }, 3000);
  });
}

// Обновляем вызов в loadProducts
async function loadProducts() {
  const response = await fetch('products.json');
  const products = await response.json();
  renderProducts(products);
  initSliders(); // Инициализируем слайдеры
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', loadProducts);
