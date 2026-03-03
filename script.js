/* ===================================================
   EPC Solutions — Main JavaScript
   =================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ----- Mobile Menu Toggle ----- */
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  // Create overlay element for mobile menu backdrop
  const overlay = document.createElement("div");
  overlay.classList.add("nav-overlay");
  document.body.appendChild(overlay);

  function openMenu() {
    navLinks.classList.add("active");
    menuToggle.classList.add("active");
    menuToggle.setAttribute("aria-expanded", "true");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.contains("active");
    isOpen ? closeMenu() : openMenu();
  });

  // Close menu when clicking overlay
  overlay.addEventListener("click", closeMenu);

  // Close menu when clicking a nav link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close menu on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  /* ----- Scroll Animations (Intersection Observer) ----- */
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    animatedElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback: show all elements immediately
    animatedElements.forEach((el) => el.classList.add("visible"));
  }

  /* ----- Active Nav Link on Scroll ----- */
  const sections = document.querySelectorAll("section[id]");
  const navLinkItems = document.querySelectorAll(".nav-link");

  function highlightNav() {
    const scrollY = window.scrollY + 150;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinkItems.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + sectionId) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNav, { passive: true });

  /* ----- Navbar Background on Scroll ----- */
  const navbar = document.querySelector(".navbar");

  function handleNavbarScroll() {
    if (window.scrollY > 80) {
      navbar.style.background = "rgba(0, 35, 70, 0.95)";
      navbar.style.backdropFilter = "blur(10px)";
      navbar.style.padding = "15px 60px";
    } else {
      navbar.style.background = "transparent";
      navbar.style.backdropFilter = "none";
      navbar.style.padding = "25px 60px";
    }
  }

  window.addEventListener("scroll", handleNavbarScroll, { passive: true });

  /* ----- Smooth Scroll for Anchor Links ----- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

});
