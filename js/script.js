document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.mainHeader nav');

    hamburger.addEventListener('click', function () {
      nav.classList.toggle('open');
      hamburger.classList.toggle('active');
      // Update aria-expanded for accessibility
      if (nav.classList.contains('open')) {
        hamburger.setAttribute('aria-expanded', 'true');
      } else {
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });

    // Optional: Close menu if clicking outside nav
    document.addEventListener('click', function(e) {
      if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  });