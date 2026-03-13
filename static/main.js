// =============================================
// AIESEC Canada - Shared JS
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile hamburger menu ---
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }

  // --- FAQ Accordion ---
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  // --- Testimonial Slider ---
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.testimonial-dots span');
  if (slides.length > 0) {
    let current = 0;

    function showSlide(idx) {
      slides.forEach((s, i) => {
        s.style.display = i === idx ? 'block' : 'none';
      });
      dots.forEach((d, i) => {
        d.classList.toggle('active', i === idx);
      });
      current = idx;
    }

    dots.forEach((d, i) => {
      d.addEventListener('click', () => showSlide(i));
    });

    showSlide(0);
    // Auto-advance every 6s
    setInterval(() => {
      showSlide((current + 1) % slides.length);
    }, 6000);
  }

  // --- Highlight active nav link ---
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && (href === path || (path === '/' && href === 'index.html'))) {
      a.style.background = 'rgba(255,255,255,0.2)';
      a.style.borderRadius = '4px';
    }
  });

});
