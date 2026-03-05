/* ============================================================
   EPC Solutions — Renewable Energy  |  script.js
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Mobile menu ---------- */
  var hamburger = document.getElementById("hamburger");
  var navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });

  document.addEventListener("click", function (e) {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    }
  });

  /* ---------- Navbar scroll ---------- */
  var navbar = document.querySelector(".navbar");
  var ticking = false;

  window.addEventListener("scroll", function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        if (window.scrollY > 50) {
          navbar.style.background = "rgba(255,255,255,.95)";
          navbar.style.boxShadow = "0 2px 16px rgba(0,0,0,.08)";
        } else {
          navbar.style.background = "transparent";
          navbar.style.boxShadow = "none";
        }
        ticking = false;
      });
      ticking = true;
    }
  });

  /* ---------- Scroll reveal ---------- */
  var targets = document.querySelectorAll(
    ".intro-card, .services-row, .services-cards, .svc-card, .cta-body, .footer-col"
  );

  targets.forEach(function (el) {
    el.classList.add("fade-up");
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
  );

  targets.forEach(function (el) { observer.observe(el); });

  /* Stagger service cards */
  document.querySelectorAll(".svc-card").forEach(function (card, i) {
    card.style.transitionDelay = (i * 0.08) + "s";
  });

})();
