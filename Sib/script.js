
// Image Gallery Navigation
document.addEventListener('DOMContentLoaded', function() {
    const images = [
        '../imgs/room1.jpg',
        '../imgs/room2.jpg',
        '../imgs/room3.jpg',
        '../imgs/room4.jpg',
        '../imgs/room5.jpg',
        '../imgs/room6.jpg'
    ];

    let currentImageIndex = 0;
    const mainImage = document.querySelector('.gallery-image');
    const imageCounter = document.querySelector('.image-counter');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const prevBtn = document.querySelector('.nav-prev');
    const nextBtn = document.querySelector('.nav-next');

    function updateImage(index) {
        currentImageIndex = index;
        mainImage.src = images[currentImageIndex];
        imageCounter.textContent = `${currentImageIndex + 1} / ${images.length}`;
        
        // Update active thumbnail
        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === currentImageIndex);
        });
    }

    function nextImage() {
        const nextIndex = (currentImageIndex + 1) % images.length;
        updateImage(nextIndex);
    }

    function prevImage() {
        const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateImage(prevIndex);
    }

    // Event listeners
    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);

    // Thumbnail click handlers
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            updateImage(index);
        });
    });

    // Auto-play slideshow (optional)
    setInterval(nextImage, 2000);

    // Search Tab Functionality
    const searchTabs = document.querySelectorAll('.search-tab');
    
    searchTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            searchTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Update search form based on selected tab
            const tabType = this.getAttribute('data-tab');
            console.log(`Search mode changed to: ${tabType}`);
        });
    });

    // Search Button Functionality
    const searchBtn = document.querySelector('.search-btn');
    const searchInputs = document.querySelectorAll('.search-input, .search-select');
    
    searchBtn.addEventListener('click', function() {
        const searchData = {};
        
        searchInputs.forEach(input => {
            if (input.value && input.value !== input.placeholder) {
                searchData[input.placeholder || input.name] = input.value;
            }
        });
        
        console.log('Search initiated with data:', searchData);
        alert('Search functionality would be implemented here with the following data:\n' + JSON.stringify(searchData, null, 2));
    });

    // Show phone number functionality
    const showNumberBtn = document.querySelector('.show-number');
    const phoneNumber = document.querySelector('.phone-number');
    
    showNumberBtn.addEventListener('click', function() {
        phoneNumber.textContent = '+91 98765 43210';
        showNumberBtn.style.display = 'none';
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation
    const images_to_preload = images.concat([
        'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop'
    ]);

    images_to_preload.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('.btn-primary, .btn-secondary, .nav-arrow, .thumbnail, .search-btn, .search-tab');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = this.style.transform || '';
            if (!this.style.transform.includes('scale')) {
                this.style.transform += ' scale(1.05)';
            }
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = this.style.transform.replace(' scale(1.05)', '');
        });
    });

    // Add parallax effect to header
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('.header');
        const opacity = Math.max(0.9, 1 - scrolled / 500);
        header.style.backgroundColor = `rgba(11, 28, 60, ${opacity})`;
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.property-gallery, .property-details, .contact-section, .location-section');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add click handlers for CTA buttons
    document.querySelector('.btn-primary').addEventListener('click', function() {
        alert('Chat feature would open here - Connect with the seller!');
    });

    document.querySelectorAll('.btn-secondary').forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.textContent.trim();
            alert(`${action} feature would be implemented here!`);
        });
    });

    // Add map interaction
    const mapControls = document.querySelectorAll('.map-control');
    mapControls.forEach(control => {
        control.addEventListener('click', function() {
            const action = this.textContent === '+' ? 'Zoom In' : 'Zoom Out';
            console.log(`Map ${action} clicked`);
            // Here you would integrate with a real map API
        });
    });

    // Enhanced search field focus effects
    const searchFields = document.querySelectorAll('.search-field');
    searchFields.forEach(field => {
        const input = field.querySelector('input, select');
        
        input.addEventListener('focus', function() {
            field.style.transform = 'translateY(-2px)';
            field.style.boxShadow = '0 8px 25px rgba(255, 215, 0, 0.3)';
        });
        
        input.addEventListener('blur', function() {
            field.style.transform = 'translateY(0)';
            field.style.boxShadow = '';
        });
    });
});

// Add some utility functions
function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0
    }).format(price);
}

function addToFavorites() {
    console.log('Property added to favorites');
    // Here you would save to localStorage or send to server
}

function shareProperty() {
    if (navigator.share) {
        navigator.share({
            title: 'Check out this amazing property!',
            text: 'Patilya Forest 3BHK Residences – Where Lifestyle Meets Investment',
            url: window.location.href
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copied to clipboard!');
        });
    }
}

// Advanced search functionality
function performAdvancedSearch(searchData) {
    // This would typically make an API call to search for properties
    console.log('Performing advanced search with:', searchData);
    
    // Simulate API response
    setTimeout(() => {
        console.log('Search results would be displayed here');
    }, 1000);
}

const buyBtn = document.querySelector('.buy-btn');
buyBtn.onclick = () => {
  window.location.href = "../Sai/Payment Interface/pay.html";
};