
// Campaign Data (Embedded to avoid CORS issues)
const campaignData = {
    "campaigns": [
        {
            "title": "Otel ve Restoranlara Özel",
            "description": "Otel ve restoranlara özel toptan fiyatlar. 10.000 TL üzeri siparişlerde İstanbul içi ücretsiz teslimat.",
            "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        },
        {
            "title": "Fabrika Yemekhane Paketleri",
            "description": "Fabrika yemekhaneleri için paket fiyatlar. Yüksek hacimli bakliyat, pirinç ve temel gıda tedariki.",
            "image": "https://images.unsplash.com/photo-1663841365334-06805f34af15?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "title": "Kurumsal Ofis Kantinleri",
            "description": "Ofis kantinlerine aylık tedarik anlaşmaları ve düzenli teslimat. Eksiksiz ve zamanında hizmet.",
            "image": "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "title": "Catering Şirketleri",
            "description": "Catering şirketlerine özel fiyat listeleri ve esnek teslimat seçenekleri. 7/24 sipariş ve destek.",
            "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        }
    ]
};

// Products Data
const productsData = {
    "products": [
        {
            "product-name": "Nişasta Mısır 25 Kg",
            "product-image": "https://images.unsplash.com/photo-1574323347407-f178e9123b30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            "product-price": "450 ₺",
            "discount": false,
            "discount-rate": "0",
            "discount-price": "0"
        },
        {
            "product-name": "Susam 25 Kg Çuval",
            "product-image": "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            "product-price": "1250 ₺",
            "discount": true,
            "discount-rate": "12",
            "discount-price": "1100 ₺"
        },
        {
            "product-name": "Zeytinyağı Sızma 5 Lt",
            "product-image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "product-price": "6780 ₺",
            "discount": false,
            "discount-rate": "0",
            "discount-price": "0"
        },
        {
            "product-name": "Pirinç Yerli Pilavlık 25 Kg",
            "product-image": "https://images.unsplash.com/photo-1586201375761-83865001e8c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "product-price": "520 ₺",
            "discount": true,
            "discount-rate": "13",
            "discount-price": "450 ₺"
        },
        {
            "product-name": "Kırmızı Mercimek 25 Kg",
            "product-image": "https://images.unsplash.com/photo-1604857864317-b3f0e69574b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "product-price": "385 ₺",
            "discount": true,
            "discount-rate": "12",
            "discount-price": "339 ₺"
        },
        {
            "product-name": "Domates Salçası 5 Kg",
            "product-image": "https://images.unsplash.com/photo-1599934309761-a17e656ad062?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "product-price": "2150 ₺",
            "discount": false,
            "discount-rate": "0",
            "discount-price": "0"
        },
        {
            "product-name": "Nohut Beyaz İri 25 Kg",
            "product-image": "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "product-price": "1075 ₺",
            "discount": true,
            "discount-rate": "8",
            "discount-price": "989 ₺"
        },
        {
            "product-name": "Ayçiçek Yağı 18 Lt",
            "product-image": "https://images.unsplash.com/photo-1588514912908-8f5891714f8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "product-price": "8750 ₺",
            "discount": true,
            "discount-rate": "15",
            "discount-price": "7438 ₺"
        },
        {
            "product-name": "Bulgur Pilavlık 25 Kg",
            "product-image": "https://images.unsplash.com/photo-1574323347407-f178e9123b30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "product-price": "275 ₺",
            "discount": true,
            "discount-rate": "10",
            "discount-price": "248 ₺"
        },
        {
            "product-name": "Un Beyaz 50 Kg",
            "product-image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "product-price": "725 ₺",
            "discount": false,
            "discount-rate": "0",
            "discount-price": "0"
        },
        {
            "product-name": "Fasulye Beyaz 25 Kg",
            "product-image": "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "product-price": "890 ₺",
            "discount": true,
            "discount-rate": "18",
            "discount-price": "730 ₺"
        },
        {
            "product-name": "Şeker Kristal 50 Kg",
            "product-image": "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "product-price": "1650 ₺",
            "discount": false,
            "discount-rate": "0",
            "discount-price": "0"
        },
        {
            "product-name": "Tuz Sofra 25 Kg",
            "product-image": "https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "product-price": "125 ₺",
            "discount": true,
            "discount-rate": "20",
            "discount-price": "100 ₺"
        },
        {
            "product-name": "Makarna Burgu 20 Kg",
            "product-image": "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "product-price": "380 ₺",
            "discount": false,
            "discount-rate": "0",
            "discount-price": "0"
        },
        {
            "product-name": "Barbunya 25 Kg",
            "product-image": "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "product-price": "1200 ₺",
            "discount": true,
            "discount-rate": "14",
            "discount-price": "1032 ₺"
        },
        {
            "product-name": "Tereyağı 10 Kg",
            "product-image": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "product-price": "4500 ₺",
            "discount": false,
            "discount-rate": "0",
            "discount-price": "0"
        },
        {
            "product-name": "Peynir Beyaz 10 Kg",
            "product-image": "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "product-price": "3200 ₺",
            "discount": true,
            "discount-rate": "16",
            "discount-price": "2688 ₺"
        },
        {
            "product-name": "Yumurta Köy 30'lu",
            "product-image": "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "product-price": "85 ₺",
            "discount": false,
            "discount-rate": "0",
            "discount-price": "0"
        },
        {
            "product-name": "Tavuk But 10 Kg",
            "product-image": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "product-price": "650 ₺",
            "discount": true,
            "discount-rate": "11",
            "discount-price": "579 ₺"
        },
        {
            "product-name": "Balık Levrek 5 Kg",
            "product-image": "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "product-price": "1250 ₺",
            "discount": false,
            "discount-rate": "0",
            "discount-price": "0"
        },
        {
            "product-name": "Çay Bergamot 5 Kg",
            "product-image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "product-price": "890 ₺",
            "discount": true,
            "discount-rate": "22",
            "discount-price": "694 ₺"
        },
        {
            "product-name": "Kahve Türk 10 Kg",
            "product-image": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "product-price": "2800 ₺",
            "discount": false,
            "discount-rate": "0",
            "discount-price": "0"
        },
        {
            "product-name": "Bal Çiçek 5 Kg",
            "product-image": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "product-price": "1650 ₺",
            "discount": true,
            "discount-rate": "9",
            "discount-price": "1502 ₺"
        },
        {
            "product-name": "Reçel Çilek 10 Kg",
            "product-image": "https://images.unsplash.com/photo-1506459225024-1428097a7e18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "product-price": "980 ₺",
            "discount": false,
            "discount-rate": "0",
            "discount-price": "0"
        },
        {
            "product-name": "Sirke Elma 20 Lt",
            "product-image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "product-price": "450 ₺",
            "discount": true,
            "discount-rate": "17",
            "discount-price": "374 ₺"
        },
        {
            "product-name": "Bakliyat Karışık 25 Kg",
            "product-image": "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "product-price": "1150 ₺",
            "discount": false,
            "discount-rate": "0",
            "discount-price": "0"
        },
        {
            "product-name": "Baharat Karışık 5 Kg",
            "product-image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "product-price": "1890 ₺",
            "discount": true,
            "discount-rate": "25",
            "discount-price": "1418 ₺"
        },
        {
            "product-name": "Konserve Domates 24'lü",
            "product-image": "https://images.unsplash.com/photo-1599934309761-a17e656ad062?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "product-price": "680 ₺",
            "discount": false,
            "discount-rate": "0",
            "discount-price": "0"
        },
        {
            "product-name": "Zeytin Siyah 10 Kg",
            "product-image": "https://images.unsplash.com/photo-1611171711912-e3c6d2752e4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "product-price": "1450 ₺",
            "discount": true,
            "discount-rate": "19",
            "discount-price": "1175 ₺"
        },
        {
            "product-name": "Turşu Karışık 20 Kg",
            "product-image": "https://images.unsplash.com/photo-1628191081676-8f40d4ce6c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "product-price": "890 ₺",
            "discount": false,
            "discount-rate": "0",
            "discount-price": "0"
        }
    ]
};

// Swiper instance
let campaignSwiper;

// Load Campaigns Function with Swiper
function loadCampaigns() {
    const campaigns = campaignData.campaigns;
    const slider = document.getElementById('slider');

    slider.innerHTML = '';

    campaigns.forEach(campaign => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
                    <img src="${campaign.image}" alt="${campaign.title}">
                    <div class="swiper-slide-overlay">
                        <div class="swiper-slide-content">
                            <h2>${campaign.title}</h2>
                            <p>${campaign.description}</p>
                        </div>
                    </div>
                `;
        slider.appendChild(slide);
    });

    // Initialize Swiper
    campaignSwiper = new Swiper('.campaignSwiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 800,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        keyboard: {
            enabled: true,
        },
        mousewheel: {
            enabled: false,
        },
        touchRatio: 1,
        simulateTouch: true,
        grabCursor: true,
    });
}

// Load Products Function
function loadProducts() {
    const products = productsData.products;
    const productsGrid = document.getElementById('productsGrid');

    productsGrid.innerHTML = '';

    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        // Create price HTML
        let priceHTML = '';
        if (product.discount && product["discount-price"] !== "0") {
            priceHTML = `
                        <div class="product-price-container">
                            <span class="product-old-price">${product["product-price"]}</span>
                            <span class="product-price">${product["discount-price"]}</span>
                        </div>
                    `;
        } else {
            priceHTML = `
                        <div class="product-price-container">
                            <span class="product-price">${product["product-price"]}</span>
                        </div>
                    `;
        }

        // Create discount badge HTML
        let discountBadge = '';
        if (product.discount && product["discount-rate"] !== "0") {
            discountBadge = `<div class="discount-badge">%${product["discount-rate"]}</div>`;
        }

        // Create product URL (index + 1 for 1-based numbering)
        const productUrl = `webvafe.com/${index + 1}`;

        productCard.innerHTML = `
                    <div class="product-image-container">
                        <a href="${productUrl}" class="product-image-link">
                            <img src="${product["product-image"]}" alt="${product["product-name"]}" class="product-image">
                        </a>
                        ${discountBadge}
                    </div>
                    <div class="product-info">
                        <h3 class="product-name">${product["product-name"]}</h3>
                        ${priceHTML}
                    </div>
                `;

        productsGrid.appendChild(productCard);
    });
}

// Bootstrap handles navbar toggle automatically - no custom JS needed!

// Smooth scroll for navigation links (Updated for Bootstrap navbar)
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open (Bootstrap)
                const navbarCollapse = document.querySelector('#navbarNav');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        toggle: false
                    });
                    bsCollapse.hide();
                }
            }
        });
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    loadCampaigns();
    initSmoothScroll();
});

// Update current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();