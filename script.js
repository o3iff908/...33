// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add active state to navigation items on click
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Contact button click handler
const contactBtn = document.querySelector('.contact-btn');
if (contactBtn) {
    contactBtn.addEventListener('click', function() {
        // Scroll to contact section or show contact form
        console.log('Contact button clicked');
        // You can add your contact form logic here
    });
}

// Optional: Add scroll effect to navbar
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(74, 26, 44, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.transition = 'all 0.3s ease';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.backdropFilter = 'none';
    }
    
    lastScroll = currentScroll;
});

// Dropdown menu functionality (optional enhancement)
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('mouseenter', function() {
        // Add dropdown menu animation if needed
        this.style.opacity = '1';
    });
    
    dropdown.addEventListener('mouseleave', function() {
        this.style.opacity = '1';
    });
});
