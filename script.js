/* ============================================================
   EPC Solutions — Renewable Energy  |  script.js
   ============================================================ */

(function () {
  "use strict";

  // ---------- Mobile menu ----------
  const hamburger = document.getElementById("hamburger");
  const navLinks  = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  // Close on link click
  navLinks.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    })
  );

  // Close on outside click
  document.addEventListener("click", e => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    }
  });

  // ---------- Navbar scroll effect ----------
  const navbar = document.getElementById("navbar");
  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 60) {
          navbar.style.background = "rgba(10,21,37,.95)";
          navbar.style.backdropFilter = "blur(12px)";
          navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,.25)";
        } else {
          navbar.style.background = "transparent";
          navbar.style.backdropFilter = "none";
          navbar.style.boxShadow = "none";
        }
        ticking = false;
      });
      ticking = true;
    }
  });

  // ---------- Scroll-reveal animations ----------
  const animEls = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  animEls.forEach(el => observer.observe(el));

  // Stagger detail-card children
  document.querySelectorAll(".services-details .detail-card").forEach((card, i) => {
    card.style.setProperty("--i", i);
    card.setAttribute("data-animate", "");
    observer.observe(card);
  });

})();
