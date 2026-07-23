document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  // Safeguard check to ensure no null errors trigger on other pages
  if (hamburger && navLinks) {
    
    // Toggle menu state on button click
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      navLinks.classList.toggle("open");

      // Set accessible expanded parameter state
      const isOpen = hamburger.classList.contains("open");
      hamburger.setAttribute("aria-expanded", isOpen);
    });

    // Automatically close mobile menu when clicking a link
    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        navLinks.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }
});

