/* ============================================
   PANDIT GURUJI — MAIN SCRIPT (v4 - minimal nav)
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
  document.body.style.overflow  = '';
  document.body.style.overflowX = 'hidden';

  var btn = document.getElementById('hamburger');
  var nav = document.getElementById('mainNav');
  var ovl = document.getElementById('navOverlay');

  if (!btn || !nav || !ovl) return;

  /* ── Open / Close ── */
  function openMenu() {
    btn.classList.add('open');
    nav.classList.add('open');
    ovl.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    btn.classList.remove('open');
    nav.classList.remove('open');
    ovl.classList.remove('active');
    document.body.style.overflow  = '';
    document.body.style.overflowX = 'hidden';
  }

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    nav.classList.contains('open') ? closeMenu() : openMenu();
  });

  ovl.addEventListener('click', closeMenu);

  /* ── Nav links: DO NOTHING except close the menu.
       Let the browser follow the <a href> completely on its own.
       No preventDefault, no window.location, no setTimeout. ── */
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      closeMenu();
      /* browser navigates via href naturally */
    });
  });

});

/* ---------- Fade-Up ---------- */
document.addEventListener('DOMContentLoaded', function () {
  var els = document.querySelectorAll('.fade-up');
  if (!els.length) return;
  function show() {
    var h = window.innerHeight * 0.92;
    els.forEach(function (el) {
      if (el.getBoundingClientRect().top < h) el.classList.add('show');
    });
  }
  window.addEventListener('scroll', show, { passive: true });
  show();
});

/* ---------- Hero reveal ---------- */
window.addEventListener('load', function () {
  var hero = document.querySelector('.hero-content');
  if (hero) { hero.style.opacity = '1'; hero.style.transform = 'translateY(0)'; }
});