// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close menu when clicking a nav link
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
  }
});

// Subtle parallax on turbines when scrolling
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  const turbines = document.querySelector(".hero-turbines");
  if (hero && turbines) {
    const scrolled = window.scrollY;
    const heroHeight = hero.offsetHeight;
    if (scrolled < heroHeight) {
      turbines.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
  }
});
