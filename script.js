// A's Pinoy Foods, LLC — MANYAMAN site behavior

document.addEventListener('DOMContentLoaded', function () {

  // ---- Mobile nav toggle ----
  var navToggle = document.getElementById('navToggle');
  var mobileNav = document.getElementById('mobileNav');

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('open');
      navToggle.classList.toggle('active', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile nav after tapping a link
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- Scroll reveal ----
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }

  // ---- Wholesale inquiry form ----
  var form = document.getElementById('wholesaleForm');
  var note = document.getElementById('formNote');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = form.name.value.trim();
      var email = form.email.value.trim();

      if (!name || !email) {
        note.textContent = 'Please fill in your name and email so we can follow up.';
        note.style.color = '#7A2331';
        return;
      }

      // No backend is connected yet. This opens a pre-filled email as a
      // temporary path for inquiries until a form service is wired up.
      var subject = encodeURIComponent('Wholesale Inquiry - ' + name);
      var bodyLines = [
        'Name: ' + name,
        'Company: ' + (form.company.value.trim() || '-'),
        'Email: ' + email,
        'Phone: ' + (form.phone.value.trim() || '-'),
        '',
        'Message:',
        form.message.value.trim() || '-'
      ];
      var body = encodeURIComponent(bodyLines.join('\n'));

      window.location.href = 'mailto:admin@aspinoyfoods.com?subject=' + subject + '&body=' + body;

      note.textContent = 'Thank you! Your email app should open with your inquiry pre-filled — just hit send.';
      note.style.color = '#2B4B3E';
      form.reset();
    });
  }

});
