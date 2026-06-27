/* ============================================================
   NAV.JS — Bulletproof mobile navigation for iOS + Android
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  var hamburger = document.getElementById('hamburger');
  var mainNav   = document.getElementById('mainNav');
  var overlay   = document.getElementById('navOverlay');
  var navbar    = document.getElementById('navbar');

  /* ── Open / Close ── */
  function openMenu() {
    if (!hamburger || !mainNav || !overlay) return;
    hamburger.classList.add('open');
    mainNav.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (!hamburger || !mainNav || !overlay) return;
    hamburger.classList.remove('open');
    mainNav.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* ── Hamburger ── */
  if (hamburger) {
    hamburger.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      mainNav && mainNav.classList.contains('open') ? closeMenu() : openMenu();
    });
  }

  /* ── Overlay tap = close ── */
  if (overlay) {
    overlay.addEventListener('touchstart', function (e) {
      e.preventDefault();
      closeMenu();
    }, { passive: false });
    overlay.addEventListener('click', closeMenu);
  }

  /* ── Nav links — use touchstart for instant response on mobile ──
     touchstart fires immediately (no 300ms delay) and before any
     other handler can interfere. We navigate directly from here.   */
  if (mainNav) {
    mainNav.querySelectorAll('a').forEach(function (link) {
      var tapped = false;

      link.addEventListener('touchstart', function (e) {
        tapped = true;
        /* Do NOT preventDefault here — we want the tap to register visually */
      }, { passive: true });

      link.addEventListener('touchend', function (e) {
        if (!tapped) return;
        tapped = false;
        e.preventDefault();   /* prevent the ghost click that follows */
        e.stopPropagation();
        var href = link.getAttribute('href');
        closeMenu();
        if (href && href !== '#') {
          /* Small delay so the close animation starts before page changes */
          setTimeout(function () { window.location.href = href; }, 50);
        }
      }, { passive: false });

      /* Fallback for desktop / non-touch */
      link.addEventListener('click', function (e) {
        if (tapped) return; /* already handled by touchend */
        var href = link.getAttribute('href');
        closeMenu();
        if (href && href !== '#') {
          e.preventDefault();
          window.location.href = href;
        }
      });
    });
  }

  /* ── Fade-up on scroll ── */
  var fadeEls = document.querySelectorAll('.fade-up');
  function checkFade() {
    var threshold = window.innerHeight * 0.92;
    fadeEls.forEach(function (el) {
      if (el.getBoundingClientRect().top < threshold) el.classList.add('show');
    });
  }
  if (fadeEls.length) {
    window.addEventListener('scroll', checkFade, { passive: true });
    checkFade();
  }

  /* ── Navbar scroll shadow ── */
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

});