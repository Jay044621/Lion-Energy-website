document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.getElementById('primary-navigation');

  if (!hamburger || !nav) return;

  const toggle = () => {
    const isOpen = nav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  };

  hamburger.addEventListener('click', toggle);

  // Close menu when a link is clicked (mobile)
  nav.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
});

