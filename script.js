<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Магазин кожаных изделий</title>
    <link rel="stylesheet" href="style.css">
    <style>
        /* Стили слайдера (дополнение к основным) */
        .gallery {
            position: relative;
            overflow: hidden;
            border-radius: 8px;
            margin-bottom: 10px;
            height: 200px;
        }
        
        .gallery-container {
            display: flex;
            transition: transform 0.5s ease;
            height: 100%;
        }
        
        .gallery img {
            min-width: 100%;
            object-fit: cover;
            border-radius: 8px;
        }
        
        .gallery-dots {
            text-align: center;
            margin-top: 10px;
        }
        
        .dot {
            display: inline-block;
            width: 10px;
            height: 10px;
            margin: 0 3px;
            background: #ccc;
            border-radius: 50%;
            cursor: pointer;
            transition: background 0.3s;
        }
        
        .dot.active {
            background: #0088cc;
        }
        
        .product {
            position: relative;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Кожаные изделия ручной работы</h1>
        </header>

        <div class="products" id="products">
            <!-- Товары загружаются через JS -->
        </div>
    </div>

    <script>
        // Данные товаров (временные, пока не подключим JSON)
        const tempProducts = [
            {
                id: 1,
                name: "Кошелек Minimalist",
                description: "Натуральная кожа, ручная работа. Размер: 10х7 см.",
                price: 8500,
                images: ["wallet_black.jpg", "wallet_brown.jpg"],
                inStock: true
            },
            {
                id: 2,
                name: "Портмоне Classic",
                description: "Гальванизированная кожа, 12 отделений.",
                price: 12000,
                images: ["backpack.jpg", "backpack_side.jpg"],
                inStock: true
            }
        ];

        // Отрисовка товаров
        function renderProducts(products) {
            const container = document.getElementById('products');
            container.innerHTML = products.map(product => `
                <div class="product" data-id="${product.id}">
                    <div class="gallery">
                        <div class="gallery-container">
                            ${product.images.map(img => `
                                <img src="assets/photos/${img}" alt="${product.name}">
                            `).join('')}
                        </div>
                        <div class="gallery-dots">
                            ${product.images.map((_, index) => `
                                <span class="dot" data-index="${index}"></span>
                            `).join('')}
                        </div>
                    </div>
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="price">${product.price} ₽</div>
                    <button class="btn">${product.inStock ? 'В корзину' : 'Под заказ'}</button>
                </div>
            `).join('');
            
            initSliders();
        }

        // Инициализация слайдеров
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
                
                // Автопереключение (каждые 3 секунды)
                setInterval(() => {
                    currentIndex = (currentIndex + 1) % dots.length;
                    updateSlider();
                }, 3000);
                
                updateSlider(); // Инициализация первого слайда
            });
        }

        // Загрузка при открытии страницы
        document.addEventListener('DOMContentLoaded', () => {
            renderProducts(tempProducts);
        });
    </script>
</body>
</html>
