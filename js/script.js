
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
            "description": "Fabrika yemekhaneleri için özel fiyatlar. Yüksek hacimli bakliyat, pirinç ve temel gıda tedariki.",
            "image": "https://images.unsplash.com/photo-1663841365334-06805f34af15?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "title": "Kurumsal Ofis Ve Yemekhaneler",
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
        link.addEventListener('click', function (e) {
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

// Companies Slider Functionality
function initCompaniesSlider() {
    const slider = document.getElementById('companiesSlider');
    if (!slider) return;

    // Clone all company logos once to create seamless infinite scroll
    const companies = Array.from(slider.children);
    
    // Clone the companies once for the infinite effect
    companies.forEach(company => {
        const clone = company.cloneNode(true);
        slider.appendChild(clone);
    });

    // Pause animation on hover for all company logos
    const allCompanyLogos = slider.querySelectorAll('.company-logo');
    
    allCompanyLogos.forEach(logo => {
        logo.addEventListener('mouseenter', () => {
            slider.style.animationPlayState = 'paused';
        });

        logo.addEventListener('mouseleave', () => {
            slider.style.animationPlayState = 'running';
        });
    });

    // Touch support for mobile
    let startX = 0;
    let currentX = 0;
    let isDown = false;
    let animationPaused = false;

    slider.addEventListener('touchstart', (e) => {
        isDown = true;
        animationPaused = true;
        startX = e.touches[0].pageX;
        currentX = startX;
        slider.style.animationPlayState = 'paused';
    });

    slider.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        currentX = e.touches[0].pageX;
    });

    slider.addEventListener('touchend', () => {
        isDown = false;
        
        // Resume animation after a short delay
        setTimeout(() => {
            if (!animationPaused) {
                slider.style.animationPlayState = 'running';
            }
        }, 100);
        
        animationPaused = false;
    });

    // Intersection Observer for performance optimization
    const observerOptions = {
        root: null,
        rootMargin: '50px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                slider.style.animationPlayState = 'running';
            } else {
                slider.style.animationPlayState = 'paused';
            }
        });
    }, observerOptions);

    observer.observe(slider);
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    loadCampaigns();
    initSmoothScroll();
    initCompaniesSlider();
});

// Update current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();