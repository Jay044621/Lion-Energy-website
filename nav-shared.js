document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('primary-navigation');
  if (!nav) return;

  // Support multiple pages: hamburger may have .hamburger or .hamburger-toggle
  const hamburger = document.querySelector('.hamburger, .hamburger-toggle');
  if (!hamburger) return;

  const setAria = () => {
    const isOpen = nav.classList.contains('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  };

  const toggle = () => {
    nav.classList.toggle('open');
    setAria();
  };

  hamburger.addEventListener('click', toggle);

  nav.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      setAria();
    });
  });

  setAria();
});

