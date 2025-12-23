/* ==========================================================================
   Vouch Mobile - Main JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle
  initMobileNav();

  // FAQ Accordion
  initFaqAccordion();

  // Smooth Scroll
  initSmoothScroll();

  // Header Scroll Effect
  initHeaderScroll();

  // Form Validation (for contact page)
  initFormValidation();

  // Billing Toggle (for pricing section)
  initBillingToggle();
});

/* --------------------------------------------------------------------------
   Mobile Navigation
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (!mobileMenuBtn || !navLinks) return;

  mobileMenuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');

    // Toggle aria-expanded
    const isExpanded = navLinks.classList.contains('active');
    mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
      mobileMenuBtn.classList.remove('active');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      navLinks.classList.remove('active');
      mobileMenuBtn.classList.remove('active');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* --------------------------------------------------------------------------
   FAQ Accordion
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  if (!faqItems.length) return;

  faqItems.forEach(function(item) {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (!question || !answer) return;

    question.addEventListener('click', function() {
      // Close other items
      faqItems.forEach(function(otherItem) {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          if (otherAnswer) {
            otherAnswer.style.maxHeight = null;
          }
        }
      });

      // Toggle current item
      item.classList.toggle('active');

      if (item.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = null;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Smooth Scroll
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      if (href === '#') return;

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Header Scroll Effect
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.querySelector('.header');

  if (!header) return;

  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', function() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScrollY = currentScrollY;
  });
}

/* --------------------------------------------------------------------------
   Form Validation
   -------------------------------------------------------------------------- */
function initFormValidation() {
  const forms = document.querySelectorAll('form[data-validate]');

  forms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      let isValid = true;

      // Clear previous errors
      form.querySelectorAll('.form-error').forEach(function(error) {
        error.remove();
      });

      form.querySelectorAll('.form-input-error').forEach(function(input) {
        input.classList.remove('form-input-error');
      });

      // Validate required fields
      form.querySelectorAll('[required]').forEach(function(field) {
        if (!field.value.trim()) {
          isValid = false;
          showError(field, 'This field is required');
        }
      });

      // Validate email fields
      form.querySelectorAll('[type="email"]').forEach(function(field) {
        if (field.value && !isValidEmail(field.value)) {
          isValid = false;
          showError(field, 'Please enter a valid email address');
        }
      });

      if (!isValid) {
        e.preventDefault();
      }
    });
  });
}

function showError(field, message) {
  field.classList.add('form-input-error');

  const error = document.createElement('div');
  error.className = 'form-error';
  error.textContent = message;
  error.style.color = '#EF4444';
  error.style.fontSize = '0.875rem';
  error.style.marginTop = '0.25rem';

  field.parentNode.appendChild(error);
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/* --------------------------------------------------------------------------
   Utility Functions
   -------------------------------------------------------------------------- */

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/* --------------------------------------------------------------------------
   Billing Toggle (Annual/Monthly)
   -------------------------------------------------------------------------- */
function initBillingToggle() {
  const toggle = document.getElementById('billing-toggle');
  if (!toggle) return;

  const billingOptions = document.querySelectorAll('.billing-option');
  const priceAmounts = document.querySelectorAll('.price-amount[data-monthly][data-annual]');
  const annualNotes = document.querySelectorAll('.annual-note');
  const monthlyNotes = document.querySelectorAll('.monthly-note');

  function updatePrices(isAnnual) {
    priceAmounts.forEach(function(el) {
      const price = isAnnual ? el.dataset.annual : el.dataset.monthly;
      el.textContent = '$' + price;
    });

    annualNotes.forEach(function(el) {
      el.style.display = isAnnual ? 'block' : 'none';
    });

    monthlyNotes.forEach(function(el) {
      el.style.display = isAnnual ? 'none' : 'block';
    });

    // Update active state on billing options
    billingOptions.forEach(function(option, index) {
      if ((isAnnual && index === 1) || (!isAnnual && index === 0)) {
        option.classList.add('billing-option-active');
      } else {
        option.classList.remove('billing-option-active');
      }
    });
  }

  // Initial state (annual is default)
  updatePrices(toggle.checked);

  toggle.addEventListener('change', function() {
    updatePrices(this.checked);
  });
}
