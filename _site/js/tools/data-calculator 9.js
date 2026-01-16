/**
 * Data Usage Calculator Tool
 * Estimates monthly data needs based on usage habits
 */

document.addEventListener('DOMContentLoaded', function() {
  // FAQ Accordion
  initFaqAccordion();

  // Tool-specific functionality
  initDataCalculator();

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

      // Reset sliders
      document.querySelectorAll('.tool-slider').forEach(slider => {
        slider.value = 0;
      });
      document.querySelectorAll('.tool-slider__value').forEach(display => {
        display.textContent = '0 hrs';
      });

      // Reset quality select
      const qualitySelect = document.getElementById('video-quality');
      if (qualitySelect) qualitySelect.value = 'hd';
    });
  }

  const shareBtn = document.getElementById('share-results');
  if (shareBtn) {
    shareBtn.addEventListener('click', function() {
      if (navigator.share) {
        navigator.share({
          title: 'Data Usage Results - Vouch Mobile',
          text: 'Check out my estimated data usage!',
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

function initDataCalculator() {
  const sliders = document.querySelectorAll('.tool-slider');

  sliders.forEach(slider => {
    const valueDisplay = document.getElementById(slider.id.replace('-hours', '-value'));
    slider.addEventListener('input', function() {
      valueDisplay.textContent = this.value + ' hrs';
    });
  });

  document.getElementById('calculate-data').addEventListener('click', function() {
    this.classList.add('loading');

    const videoHours = parseFloat(document.getElementById('video-hours').value) || 0;
    const socialHours = parseFloat(document.getElementById('social-hours').value) || 0;
    const musicHours = parseFloat(document.getElementById('music-hours').value) || 0;
    const callsHours = parseFloat(document.getElementById('calls-hours').value) || 0;
    const browseHours = parseFloat(document.getElementById('browse-hours').value) || 0;
    const quality = document.getElementById('video-quality').value;

    // Data usage per hour in GB
    const videoRates = { sd: 1, hd: 2.5, '4k': 7 };
    const videoRate = videoRates[quality];

    // Calculate daily usage in GB
    const videoDaily = videoHours * videoRate;
    const socialDaily = socialHours * 0.8; // ~800 MB/hour
    const musicDaily = musicHours * 0.1; // ~100 MB/hour
    const callsDaily = callsHours * 0.25; // ~250 MB/hour
    const browseDaily = browseHours * 0.07; // ~70 MB/hour

    const dailyTotal = videoDaily + socialDaily + musicDaily + callsDaily + browseDaily;
    const monthlyTotal = dailyTotal * 30;

    setTimeout(() => {
      this.classList.remove('loading');
      document.getElementById('tool-body').style.display = 'none';
      const results = document.getElementById('tool-results');
      results.style.display = 'block';

      showDataResults(monthlyTotal, {
        video: videoDaily * 30,
        social: socialDaily * 30,
        music: musicDaily * 30,
        calls: callsDaily * 30,
        browse: browseDaily * 30
      });
    }, 1200);
  });
}

function createSvgIcon(type) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', type === 'info' ? '24' : '18');
  svg.setAttribute('height', type === 'info' ? '24' : '18');
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
  } else if (type === 'info') {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '12');
    circle.setAttribute('cy', '12');
    circle.setAttribute('r', '10');
    svg.appendChild(circle);

    const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line1.setAttribute('x1', '12');
    line1.setAttribute('y1', '16');
    line1.setAttribute('x2', '12');
    line1.setAttribute('y2', '12');
    svg.appendChild(line1);

    const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line2.setAttribute('x1', '12');
    line2.setAttribute('y1', '8');
    line2.setAttribute('x2', '12.01');
    line2.setAttribute('y2', '8');
    svg.appendChild(line2);
  }

  return svg;
}

function showDataResults(monthlyTotal, breakdown) {
  const resultsTitle = document.getElementById('results-title');
  const resultsContent = document.getElementById('results-content');

  resultsTitle.textContent = 'Your Estimated Data Usage';

  // Determine recommendation
  let recommendation = '';
  if (monthlyTotal < 5) {
    recommendation = "You're a light user! Any plan will work great for you.";
  } else if (monthlyTotal < 20) {
    recommendation = "You're a moderate user. Our unlimited plan gives you peace of mind.";
  } else if (monthlyTotal < 50) {
    recommendation = "You're a regular user. Unlimited data is perfect for your needs.";
  } else {
    recommendation = "You're a power user! Vouch's unlimited plan is ideal for you.";
  }

  // Clear content
  resultsContent.textContent = '';

  // Create main data display
  const dataDiv = document.createElement('div');
  dataDiv.className = 'tool-results__data';

  const mainDiv = document.createElement('div');
  mainDiv.className = 'tool-results__data-main';

  const amountSpan = document.createElement('span');
  amountSpan.className = 'tool-results__data-amount';
  amountSpan.textContent = monthlyTotal.toFixed(1);

  const unitSpan = document.createElement('span');
  unitSpan.className = 'tool-results__data-unit';
  unitSpan.textContent = 'GB/month';

  mainDiv.appendChild(amountSpan);
  mainDiv.appendChild(unitSpan);

  // Create breakdown
  const breakdownDiv = document.createElement('div');
  breakdownDiv.className = 'tool-results__data-breakdown';

  const breakdownItems = [
    { name: 'Video Streaming', value: breakdown.video },
    { name: 'Social Media', value: breakdown.social },
    { name: 'Music Streaming', value: breakdown.music },
    { name: 'Video Calls', value: breakdown.calls },
    { name: 'Web Browsing', value: breakdown.browse }
  ];

  breakdownItems.forEach(item => {
    if (item.value > 0) {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'tool-results__data-item';

      const nameSpan = document.createElement('span');
      nameSpan.textContent = item.name;

      const valueSpan = document.createElement('span');
      valueSpan.textContent = item.value.toFixed(1) + ' GB';

      itemDiv.appendChild(nameSpan);
      itemDiv.appendChild(valueSpan);
      breakdownDiv.appendChild(itemDiv);
    }
  });

  dataDiv.appendChild(mainDiv);
  dataDiv.appendChild(breakdownDiv);

  // Create recommendation
  const recDiv = document.createElement('div');
  recDiv.className = 'tool-results__recommendation';

  const recIconDiv = document.createElement('div');
  recIconDiv.className = 'tool-results__recommendation-icon';
  recIconDiv.appendChild(createSvgIcon('info'));

  const recText = document.createElement('p');
  recText.textContent = recommendation;

  recDiv.appendChild(recIconDiv);
  recDiv.appendChild(recText);

  // Create CTA
  const ctaDiv = document.createElement('div');
  ctaDiv.className = 'tool-results__cta';

  const ctaLink = document.createElement('a');
  ctaLink.href = 'https://vouchmobile.com';
  ctaLink.className = 'btn btn-primary';
  ctaLink.textContent = 'Get Unlimited Data for $30/mo ';
  ctaLink.appendChild(createSvgIcon('arrow'));

  ctaDiv.appendChild(ctaLink);

  // Append all
  resultsContent.appendChild(dataDiv);
  resultsContent.appendChild(recDiv);
  resultsContent.appendChild(ctaDiv);
}
