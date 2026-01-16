/* ==========================================================================
   Vouch Mobile - Main JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
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

  // Scroll Animations
  initScrollAnimations();

  // Theme Toggle
  initThemeToggle();

  // Savings Calculator
  initSavingsCalculator();

  // Hero Parallax
  initHeroParallax();

  // Price Calculation/Filters
  initCoverageSearch();
});

/* --------------------------------------------------------------------------
   Scroll Animations
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Target elements to animate
  const elementsToAnimate = document.querySelectorAll(
    '.benefit-card, .pricing-card, .step, .faq-item, .section h2, .section p.text-center'
  );

  elementsToAnimate.forEach(function (el, index) {
    // Add delay based on index for grid items
    if (el.classList.contains('benefit-card') || el.classList.contains('step') || el.classList.contains('pricing-card')) {
      // Reset animation delay for each row if we could detect rows, but simple stagger is okay
      // We'll just rely on CSS or natural stagger if we added classes, but here we'll just let them fade in
      // optionally add a style for delay
      el.style.animationDelay = (index % 3) * 0.1 + 's';
    }
    observer.observe(el);
  });
}

/* --------------------------------------------------------------------------
   Mobile Navigation
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (!mobileMenuBtn || !navLinks) return;

  mobileMenuBtn.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');

    // Toggle aria-expanded
    const isExpanded = navLinks.classList.contains('active');
    mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (e) {
    if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
      mobileMenuBtn.classList.remove('active');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
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

  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (!question || !answer) return;

    question.addEventListener('click', function () {
      // Close other items
      faqItems.forEach(function (otherItem) {
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
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
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

  window.addEventListener('scroll', function () {
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

  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      let isValid = true;

      // Clear previous errors
      form.querySelectorAll('.form-error').forEach(function (error) {
        error.remove();
      });

      form.querySelectorAll('.form-input-error').forEach(function (input) {
        input.classList.remove('form-input-error');
      });

      // Validate required fields
      form.querySelectorAll('[required]').forEach(function (field) {
        if (!field.value.trim()) {
          isValid = false;
          showError(field, 'This field is required');
        }
      });

      // Validate email fields
      form.querySelectorAll('[type="email"]').forEach(function (field) {
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
    priceAmounts.forEach(function (el) {
      const price = isAnnual ? el.dataset.annual : el.dataset.monthly;
      el.textContent = '$' + price;
    });

    annualNotes.forEach(function (el) {
      el.style.display = isAnnual ? 'block' : 'none';
    });

    monthlyNotes.forEach(function (el) {
      el.style.display = isAnnual ? 'none' : 'block';
    });

    // Update active state on billing options
    billingOptions.forEach(function (option, index) {
      if ((isAnnual && index === 1) || (!isAnnual && index === 0)) {
        option.classList.add('billing-option-active');
      } else {
        option.classList.remove('billing-option-active');
      }
    });
  }

  // Initial state (annual is default)
  updatePrices(toggle.checked);

  toggle.addEventListener('change', function () {
    updatePrices(this.checked);
  });
}

/* --------------------------------------------------------------------------
   Theme Toggle
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const toggleBtn = document.querySelector('.theme-toggle');
  const iconSun = document.querySelector('.icon-sun');
  const iconMoon = document.querySelector('.icon-moon');

  if (!toggleBtn) return;

  // Check preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
    updateIcon(true);
  } else {
    updateIcon(false);
  }

  toggleBtn.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateIcon(isDark);
  });

  function updateIcon(isDark) {
    if (isDark) {
      iconSun.style.display = 'none';
      iconMoon.style.display = 'block';
    } else {
      iconSun.style.display = 'block';
      iconMoon.style.display = 'none';
    }
  }
}

/* --------------------------------------------------------------------------
   Savings Calculator
   -------------------------------------------------------------------------- */
function initSavingsCalculator() {
  const currentBillInput = document.getElementById('current-bill');
  const calculateBtn = document.getElementById('calculate-btn');
  const resultDisplay = document.getElementById('savings-result');
  const savingsAmount = document.getElementById('savings-amount');
  const switchBtn = document.getElementById('switch-btn');

  if (!currentBillInput || !calculateBtn) return;

  calculateBtn.addEventListener('click', function () {
    const bill = parseFloat(currentBillInput.value);

    if (isNaN(bill) || bill < 0) {
      showError(currentBillInput, 'Please enter a valid amount');
      return;
    }

    // Vouch Mobile Plan Cost: $30/mo (Annual Plan)
    const vouchCost = 30;

    // Calculate monthly savings
    let monthlySavings = bill - vouchCost;

    // If they already pay less than $30 (unlikely for major carriers but possible), show 0
    if (monthlySavings < 0) monthlySavings = 0;

    const annualSavings = monthlySavings * 12;

    // Animate the number
    resultDisplay.style.display = 'block';
    calculateBtn.style.display = 'none';
    switchBtn.style.display = 'flex'; // It's an a tag but styled as btn

    animateValue(savingsAmount, 0, annualSavings, 1000);
  });

  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
}

/* --------------------------------------------------------------------------
   Hero Parallax
   -------------------------------------------------------------------------- */
function initHeroParallax() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const elements = hero.querySelectorAll('.hero-mesh span, .hero-orb');

  hero.addEventListener('mousemove', function (e) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    elements.forEach(function (el, index) {
      const sensitivity = (index + 1) * 20;
      const offsetX = (x - 0.5) * sensitivity;
      const offsetY = (y - 0.5) * sensitivity;

      el.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
  });
}

/* --------------------------------------------------------------------------
   Coverage Search
   -------------------------------------------------------------------------- */
function initCoverageSearch() {
  const searchInput = document.getElementById('state-search');
  const stateLinks = document.querySelectorAll('.state-link');
  const noResults = document.getElementById('no-results');

  if (!searchInput || !stateLinks.length) return;

  searchInput.addEventListener('input', debounce(function (e) {
    const term = e.target.value.toLowerCase().trim();
    let hasResults = false;

    stateLinks.forEach(function (link) {
      const stateName = link.getAttribute('data-state');

      if (stateName && stateName.includes(term)) {
        link.style.display = 'flex';
        hasResults = true;
      } else {
        link.style.display = 'none';
      }
    });

    if (noResults) {
      noResults.style.display = hasResults ? 'none' : 'block';
    }
  }, 100));
}


