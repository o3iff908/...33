// Smooth scrolling for navigation links
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

// Active navigation link highlighting
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Dropdown menu functionality for mobile
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.classList.toggle('active');
        }
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

// Contact button click handler
const contactBtn = document.querySelector('.contact-btn');
contactBtn.addEventListener('click', function() {
    // Add your contact form or page navigation logic here
    console.log('Contact button clicked');
    alert('Contact Us functionality - Add your form or navigation here');
});

// Add parallax effect to hero section on scroll (optional enhancement)
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-section');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.querySelector('.main-container').style.animation = 'fadeIn 0.8s ease-in-out';
});

// Add CSS animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Responsive navigation toggle for mobile (hamburger menu)
function createMobileMenu() {
    if (window.innerWidth <= 768 && !document.querySelector('.mobile-toggle')) {
        const navbar = document.querySelector('.navbar');
        const toggle = document.createElement('button');
        toggle.className = 'mobile-toggle';
        toggle.innerHTML = '☰';
        toggle.style.cssText = `
            display: none;
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            position: absolute;
            top: 20px;
            right: 20px;
        `;
        
        navbar.appendChild(toggle);
        
        toggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }
}

// Initialize mobile menu on load and resize
window.addEventListener('load', createMobileMenu);
window.addEventListener('resize', createMobileMenu);

console.log('SPC Solutions - Renewable Energy website loaded successfully!');
