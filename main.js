// main.js

document.addEventListener('DOMContentLoaded', function () {
  // Insert current year into footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    const now = new Date();
    yearSpan.textContent = now.getFullYear();
  }

  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll('.site-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // You can add more JS here (e.g. lazy load images, simple animations)
});
