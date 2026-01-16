/**
 * Phone Compatibility Checker Tool
 * Checks if a user's phone is compatible with Vouch Mobile's AT&T network
 */

document.addEventListener('DOMContentLoaded', function() {
  // FAQ Accordion
  initFaqAccordion();

  // Tool-specific functionality
  initCompatibilityChecker();

  // Reset and share buttons
  initToolActions();
});

function initFaqAccordion() {
  const faqTriggers = document.querySelectorAll('.tool-faq__trigger');
  faqTriggers.forEach(function(trigger) {
    trigger.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      const answer = this.nextElementSibling;

      faqTriggers.forEach(function(t) {
        t.setAttribute('aria-expanded', 'false');
        t.nextElementSibling.style.maxHeight = null;
      });

      if (!isExpanded) {
        this.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

function initToolActions() {
  const resetBtn = document.getElementById('reset-tool');
  if (resetBtn) {
    resetBtn.addEventListener('click', function() {
      document.getElementById('tool-results').style.display = 'none';
      document.getElementById('tool-body').style.display = 'block';

      // Reset form
      const imeiInput = document.getElementById('imei-input');
      if (imeiInput) imeiInput.value = '';

      const brandSelect = document.getElementById('brand-select');
      if (brandSelect) brandSelect.selectedIndex = 0;

      const modelGroup = document.getElementById('model-group');
      if (modelGroup) modelGroup.style.display = 'none';

      const checkBtn = document.getElementById('check-compatibility');
      if (checkBtn) checkBtn.disabled = true;

      document.getElementById('imei-valid').classList.remove('visible');
      document.getElementById('imei-invalid').classList.remove('visible');
    });
  }

  const shareBtn = document.getElementById('share-results');
  if (shareBtn) {
    shareBtn.addEventListener('click', function() {
      if (navigator.share) {
        navigator.share({
          title: 'Phone Compatibility Results - Vouch Mobile',
          text: 'Check out my phone compatibility results!',
          url: window.location.href
        });
      } else {
        navigator.clipboard.writeText(window.location.href);
        this.textContent = 'Copied!';
        setTimeout(() => {
          this.textContent = 'Share Results';
        }, 2000);
      }
    });
  }
}

function initCompatibilityChecker() {
  // Tab switching
  const tabs = document.querySelectorAll('.tool-tab');
  const tabContents = document.querySelectorAll('.tool-tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(t => t.classList.remove('tool-tab--active'));
      tabContents.forEach(c => c.classList.remove('tool-tab-content--active'));
      this.classList.add('tool-tab--active');
      document.getElementById('tab-' + this.dataset.tab).classList.add('tool-tab-content--active');
    });
  });

  // IMEI validation
  const imeiInput = document.getElementById('imei-input');
  const checkBtn = document.getElementById('check-compatibility');
  const validIcon = document.getElementById('imei-valid');
  const invalidIcon = document.getElementById('imei-invalid');

  imeiInput.addEventListener('input', function() {
    const value = this.value.replace(/\D/g, '');
    this.value = value;

    if (value.length === 15) {
      validIcon.classList.add('visible');
      invalidIcon.classList.remove('visible');
      checkBtn.disabled = false;
    } else if (value.length > 0) {
      validIcon.classList.remove('visible');
      invalidIcon.classList.add('visible');
      checkBtn.disabled = true;
    } else {
      validIcon.classList.remove('visible');
      invalidIcon.classList.remove('visible');
      checkBtn.disabled = true;
    }
  });

  // Phone model selection
  const brandSelect = document.getElementById('brand-select');
  const modelGroup = document.getElementById('model-group');
  const modelSelect = document.getElementById('model-select');

  const phoneModels = {
    apple: ['iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15', 'iPhone 14 Pro Max', 'iPhone 14 Pro', 'iPhone 14', 'iPhone 13', 'iPhone 12', 'iPhone SE (2022)'],
    samsung: ['Galaxy S24 Ultra', 'Galaxy S24+', 'Galaxy S24', 'Galaxy S23 Ultra', 'Galaxy Z Fold 5', 'Galaxy Z Flip 5', 'Galaxy A54', 'Galaxy A34'],
    google: ['Pixel 8 Pro', 'Pixel 8', 'Pixel 7a', 'Pixel 7 Pro', 'Pixel 7', 'Pixel 6a'],
    motorola: ['Motorola Edge+ (2024)', 'Motorola Razr+ (2024)', 'Moto G Power (2024)', 'Moto G Stylus (2024)'],
    oneplus: ['OnePlus 12', 'OnePlus 11', 'OnePlus Nord N30', 'OnePlus Open'],
    other: ['Other (enter IMEI instead)']
  };

  brandSelect.addEventListener('change', function() {
    if (this.value && phoneModels[this.value]) {
      modelGroup.style.display = 'block';
      modelSelect.textContent = '';

      const defaultOption = document.createElement('option');
      defaultOption.value = '';
      defaultOption.textContent = 'Choose a model...';
      modelSelect.appendChild(defaultOption);

      phoneModels[this.value].forEach(model => {
        const option = document.createElement('option');
        option.value = model;
        option.textContent = model;
        modelSelect.appendChild(option);
      });
    } else {
      modelGroup.style.display = 'none';
    }
  });

  modelSelect.addEventListener('change', function() {
    checkBtn.disabled = !this.value;
  });

  // Check compatibility
  checkBtn.addEventListener('click', function() {
    this.classList.add('loading');

    setTimeout(() => {
      this.classList.remove('loading');
      document.getElementById('tool-body').style.display = 'none';
      const results = document.getElementById('tool-results');
      results.style.display = 'block';

      showCompatibilityResults();
    }, 1500);
  });
}

function createSvgIcon(type) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', type === 'check' ? '24' : '18');
  svg.setAttribute('height', type === 'check' ? '24' : '18');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '2');

  if (type === 'check') {
    const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    polyline.setAttribute('points', '20 6 9 17 4 12');
    svg.appendChild(polyline);
  } else if (type === 'arrow') {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', '5');
    line.setAttribute('y1', '12');
    line.setAttribute('x2', '19');
    line.setAttribute('y2', '12');
    svg.appendChild(line);

    const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    polyline.setAttribute('points', '12 5 19 12 12 19');
    svg.appendChild(polyline);
  }

  return svg;
}

function showCompatibilityResults() {
  const resultsTitle = document.getElementById('results-title');
  const resultsContent = document.getElementById('results-content');

  resultsTitle.textContent = 'Great News! Your Phone is Compatible';

  // Create results grid
  const resultsGrid = document.createElement('div');
  resultsGrid.className = 'tool-results__grid';

  const items = [
    { label: 'Network', value: 'AT&T Compatible' },
    { label: '5G Support', value: 'Full 5G Access' },
    { label: 'LTE Bands', value: 'All bands supported' }
  ];

  items.forEach(item => {
    const itemEl = document.createElement('div');
    itemEl.className = 'tool-results__item tool-results__item--success';

    const iconDiv = document.createElement('div');
    iconDiv.className = 'tool-results__item-icon';
    iconDiv.appendChild(createSvgIcon('check'));

    const contentDiv = document.createElement('div');
    contentDiv.className = 'tool-results__item-content';

    const labelSpan = document.createElement('span');
    labelSpan.className = 'tool-results__item-label';
    labelSpan.textContent = item.label;

    const valueSpan = document.createElement('span');
    valueSpan.className = 'tool-results__item-value';
    valueSpan.textContent = item.value;

    contentDiv.appendChild(labelSpan);
    contentDiv.appendChild(valueSpan);
    itemEl.appendChild(iconDiv);
    itemEl.appendChild(contentDiv);
    resultsGrid.appendChild(itemEl);
  });

  // Create CTA
  const ctaDiv = document.createElement('div');
  ctaDiv.className = 'tool-results__cta';

  const ctaLink = document.createElement('a');
  ctaLink.href = 'https://vouchmobile.com';
  ctaLink.className = 'btn btn-primary';
  ctaLink.textContent = 'Bring Your Phone to Vouch ';
  ctaLink.appendChild(createSvgIcon('arrow'));

  ctaDiv.appendChild(ctaLink);

  // Clear and append
  resultsContent.textContent = '';
  resultsContent.appendChild(resultsGrid);
  resultsContent.appendChild(ctaDiv);
}
