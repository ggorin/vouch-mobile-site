/**
 * Phone Bill Savings Calculator Tool
 * Calculates potential savings when switching to Vouch Mobile
 */

document.addEventListener('DOMContentLoaded', function() {
  // FAQ Accordion
  initFaqAccordion();

  // Tool-specific functionality
  initSavingsCalculator();

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
      const currentBill = document.getElementById('current-bill');
      if (currentBill) currentBill.value = '';

      const numLines = document.getElementById('num-lines');
      if (numLines) numLines.value = 1;

      const carrierSelect = document.getElementById('carrier-select');
      if (carrierSelect) carrierSelect.selectedIndex = 0;
    });
  }

  const shareBtn = document.getElementById('share-results');
  if (shareBtn) {
    shareBtn.addEventListener('click', function() {
      if (navigator.share) {
        navigator.share({
          title: 'Savings Calculator Results - Vouch Mobile',
          text: 'Check out my potential savings with Vouch Mobile!',
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

function initSavingsCalculator() {
  const currentBill = document.getElementById('current-bill');
  const numLines = document.getElementById('num-lines');
  const linesMinus = document.getElementById('lines-minus');
  const linesPlus = document.getElementById('lines-plus');
  const calculateBtn = document.getElementById('calculate-savings');

  linesMinus.addEventListener('click', function() {
    const val = parseInt(numLines.value);
    if (val > 1) numLines.value = val - 1;
  });

  linesPlus.addEventListener('click', function() {
    const val = parseInt(numLines.value);
    if (val < 10) numLines.value = val + 1;
  });

  calculateBtn.addEventListener('click', function() {
    const bill = parseFloat(currentBill.value) || 0;
    const lines = parseInt(numLines.value) || 1;

    if (bill <= 0) {
      currentBill.classList.add('tool-input--error');
      return;
    }
    currentBill.classList.remove('tool-input--error');

    this.classList.add('loading');

    setTimeout(() => {
      this.classList.remove('loading');
      document.getElementById('tool-body').style.display = 'none';
      const results = document.getElementById('tool-results');
      results.style.display = 'block';

      showSavingsResults(bill, lines);
    }, 1200);
  });
}

function createSvgIcon(type) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '18');
  svg.setAttribute('height', '18');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '2');

  if (type === 'arrow') {
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

function showSavingsResults(bill, lines) {
  const resultsTitle = document.getElementById('results-title');
  const resultsContent = document.getElementById('results-content');

  const vouchCost = lines * 30;
  const monthlySavings = bill - vouchCost;
  const annualSavings = monthlySavings * 12;
  const savingsPercent = Math.round((monthlySavings / bill) * 100);

  resultsTitle.textContent = monthlySavings > 0
    ? 'You Could Save Big with Vouch!'
    : 'See How Vouch Compares';

  // Clear content
  resultsContent.textContent = '';

  // Create savings cards
  const savingsDiv = document.createElement('div');
  savingsDiv.className = 'tool-results__savings';

  // Monthly savings card
  const monthlyCard = document.createElement('div');
  monthlyCard.className = 'tool-results__savings-card tool-results__savings-card--monthly';

  const monthlyLabel = document.createElement('span');
  monthlyLabel.className = 'tool-results__savings-label';
  monthlyLabel.textContent = 'Monthly Savings';

  const monthlyAmount = document.createElement('span');
  monthlyAmount.className = 'tool-results__savings-amount ' + (monthlySavings > 0 ? 'positive' : 'negative');
  monthlyAmount.textContent = (monthlySavings > 0 ? '+' : '') + '$' + Math.abs(monthlySavings).toFixed(0);

  const monthlyNote = document.createElement('span');
  monthlyNote.className = 'tool-results__savings-note';
  monthlyNote.textContent = 'per month';

  monthlyCard.appendChild(monthlyLabel);
  monthlyCard.appendChild(monthlyAmount);
  monthlyCard.appendChild(monthlyNote);

  // Annual savings card
  const annualCard = document.createElement('div');
  annualCard.className = 'tool-results__savings-card tool-results__savings-card--annual';

  const annualLabel = document.createElement('span');
  annualLabel.className = 'tool-results__savings-label';
  annualLabel.textContent = 'Annual Savings';

  const annualAmount = document.createElement('span');
  annualAmount.className = 'tool-results__savings-amount ' + (annualSavings > 0 ? 'positive' : 'negative');
  annualAmount.textContent = (annualSavings > 0 ? '+' : '') + '$' + Math.abs(annualSavings).toFixed(0);

  const annualNote = document.createElement('span');
  annualNote.className = 'tool-results__savings-note';
  annualNote.textContent = 'per year';

  annualCard.appendChild(annualLabel);
  annualCard.appendChild(annualAmount);
  annualCard.appendChild(annualNote);

  savingsDiv.appendChild(monthlyCard);
  savingsDiv.appendChild(annualCard);

  // Create comparison table
  const comparisonDiv = document.createElement('div');
  comparisonDiv.className = 'tool-results__comparison';

  // Current bill row
  const currentRow = document.createElement('div');
  currentRow.className = 'tool-results__comparison-row';

  const currentLabel = document.createElement('span');
  currentLabel.className = 'tool-results__comparison-label';
  currentLabel.textContent = 'Your Current Bill';

  const currentValue = document.createElement('span');
  currentValue.className = 'tool-results__comparison-value tool-results__comparison-value--old';
  currentValue.textContent = '$' + bill.toFixed(0) + '/mo';

  currentRow.appendChild(currentLabel);
  currentRow.appendChild(currentValue);

  // Vouch cost row
  const vouchRow = document.createElement('div');
  vouchRow.className = 'tool-results__comparison-row';

  const vouchLabel = document.createElement('span');
  vouchLabel.className = 'tool-results__comparison-label';
  vouchLabel.textContent = 'Vouch (' + lines + ' line' + (lines > 1 ? 's' : '') + ')';

  const vouchValue = document.createElement('span');
  vouchValue.className = 'tool-results__comparison-value tool-results__comparison-value--new';
  vouchValue.textContent = '$' + vouchCost + '/mo';

  vouchRow.appendChild(vouchLabel);
  vouchRow.appendChild(vouchValue);

  comparisonDiv.appendChild(currentRow);
  comparisonDiv.appendChild(vouchRow);

  // Savings percentage row (if positive)
  if (monthlySavings > 0) {
    const savingsRow = document.createElement('div');
    savingsRow.className = 'tool-results__comparison-row tool-results__comparison-row--highlight';

    const savingsLabel = document.createElement('span');
    savingsLabel.className = 'tool-results__comparison-label';
    savingsLabel.textContent = 'You Save';

    const savingsValue = document.createElement('span');
    savingsValue.className = 'tool-results__comparison-value tool-results__comparison-value--savings';
    savingsValue.textContent = savingsPercent + '%';

    savingsRow.appendChild(savingsLabel);
    savingsRow.appendChild(savingsValue);
    comparisonDiv.appendChild(savingsRow);
  }

  // Create CTA
  const ctaDiv = document.createElement('div');
  ctaDiv.className = 'tool-results__cta';

  const ctaLink = document.createElement('a');
  ctaLink.href = 'https://vouchmobile.com';
  ctaLink.className = 'btn btn-primary';
  ctaLink.textContent = 'Start Saving Now ';
  ctaLink.appendChild(createSvgIcon('arrow'));

  ctaDiv.appendChild(ctaLink);

  // Append all
  resultsContent.appendChild(savingsDiv);
  resultsContent.appendChild(comparisonDiv);
  resultsContent.appendChild(ctaDiv);
}
