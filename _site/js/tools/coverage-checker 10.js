/**
 * Network Coverage Checker Tool
 * Checks Vouch Mobile network coverage by ZIP code
 */

// Coverage data by ZIP prefix (first 3 digits)
// Based on AT&T network coverage areas
const coverageData = {
  // New York Metro
  '100': { rating: 'Excellent', fiveG: true, type: '5G Ultra', city: 'New York City' },
  '101': { rating: 'Excellent', fiveG: true, type: '5G Ultra', city: 'New York City' },
  '102': { rating: 'Excellent', fiveG: true, type: '5G Ultra', city: 'New York City' },
  '103': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Staten Island' },
  '104': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Bronx' },
  '110': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Queens' },
  '111': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Long Island' },
  '112': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Brooklyn' },
  '113': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Flushing' },

  // Los Angeles Metro
  '900': { rating: 'Excellent', fiveG: true, type: '5G Ultra', city: 'Los Angeles' },
  '901': { rating: 'Excellent', fiveG: true, type: '5G Ultra', city: 'Los Angeles' },
  '902': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Inglewood' },
  '903': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Inglewood' },
  '904': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Santa Monica' },
  '905': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Torrance' },
  '906': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Whittier' },
  '907': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Long Beach' },
  '908': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Long Beach' },
  '910': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Pasadena' },
  '911': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Pasadena' },
  '912': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Glendale' },
  '913': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Van Nuys' },
  '914': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Van Nuys' },
  '917': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Industry' },
  '918': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Alhambra' },

  // San Francisco Bay Area
  '941': { rating: 'Excellent', fiveG: true, type: '5G Ultra', city: 'San Francisco' },
  '940': { rating: 'Excellent', fiveG: true, type: '5G', city: 'San Francisco' },
  '942': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Sacramento' },
  '943': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Palo Alto' },
  '944': { rating: 'Excellent', fiveG: true, type: '5G', city: 'San Mateo' },
  '945': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Oakland' },
  '946': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Oakland' },
  '947': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Berkeley' },
  '948': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Richmond' },
  '949': { rating: 'Excellent', fiveG: true, type: '5G', city: 'San Rafael' },
  '950': { rating: 'Excellent', fiveG: true, type: '5G', city: 'San Jose' },
  '951': { rating: 'Excellent', fiveG: true, type: '5G', city: 'San Jose' },

  // Chicago Metro
  '606': { rating: 'Excellent', fiveG: true, type: '5G Ultra', city: 'Chicago' },
  '607': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Chicago' },
  '608': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Chicago' },
  '600': { rating: 'Excellent', fiveG: true, type: '5G', city: 'North Chicago' },
  '601': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Carol Stream' },
  '602': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Evanston' },
  '603': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Oak Park' },
  '604': { rating: 'Excellent', fiveG: true, type: '5G', city: 'South Holland' },
  '605': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Joliet' },

  // Houston Metro
  '770': { rating: 'Excellent', fiveG: true, type: '5G Ultra', city: 'Houston' },
  '771': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Houston' },
  '772': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Houston' },
  '773': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Houston' },
  '774': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Richmond' },
  '775': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Houston' },

  // Dallas-Fort Worth Metro
  '750': { rating: 'Excellent', fiveG: true, type: '5G Ultra', city: 'Dallas' },
  '751': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Dallas' },
  '752': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Dallas' },
  '753': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Dallas' },
  '760': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Fort Worth' },
  '761': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Fort Worth' },
  '762': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Fort Worth' },
  '763': { rating: 'Good', fiveG: true, type: '5G', city: 'Wichita Falls' },

  // Phoenix Metro
  '850': { rating: 'Excellent', fiveG: true, type: '5G Ultra', city: 'Phoenix' },
  '851': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Phoenix' },
  '852': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Phoenix' },
  '853': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Phoenix' },
  '857': { rating: 'Good', fiveG: true, type: '5G', city: 'Tucson' },

  // Philadelphia Metro
  '190': { rating: 'Excellent', fiveG: true, type: '5G Ultra', city: 'Philadelphia' },
  '191': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Philadelphia' },
  '192': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Philadelphia' },
  '193': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Philadelphia' },
  '194': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Norristown' },

  // Miami Metro
  '331': { rating: 'Excellent', fiveG: true, type: '5G Ultra', city: 'Miami' },
  '330': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Miami' },
  '332': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Miami' },
  '333': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Fort Lauderdale' },
  '334': { rating: 'Excellent', fiveG: true, type: '5G', city: 'West Palm Beach' },

  // Atlanta Metro
  '303': { rating: 'Excellent', fiveG: true, type: '5G Ultra', city: 'Atlanta' },
  '300': { rating: 'Excellent', fiveG: true, type: '5G', city: 'North Atlanta' },
  '301': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Atlanta' },
  '302': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Atlanta' },
  '304': { rating: 'Good', fiveG: true, type: '5G', city: 'Swainsboro' },
  '305': { rating: 'Good', fiveG: true, type: '5G', city: 'Gainesville' },
  '306': { rating: 'Good', fiveG: true, type: '5G', city: 'Athens' },

  // Boston Metro
  '021': { rating: 'Excellent', fiveG: true, type: '5G Ultra', city: 'Boston' },
  '020': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Brockton' },
  '022': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Boston' },
  '023': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Brockton' },
  '024': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Lexington' },

  // Seattle Metro
  '981': { rating: 'Excellent', fiveG: true, type: '5G Ultra', city: 'Seattle' },
  '980': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Seattle' },
  '982': { rating: 'Good', fiveG: true, type: '5G', city: 'Everett' },
  '983': { rating: 'Good', fiveG: true, type: '5G', city: 'Federal Way' },
  '984': { rating: 'Good', fiveG: true, type: '5G', city: 'Tacoma' },
  '985': { rating: 'Good', fiveG: true, type: '5G', city: 'Olympia' },

  // Denver Metro
  '802': { rating: 'Excellent', fiveG: true, type: '5G Ultra', city: 'Denver' },
  '800': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Denver' },
  '801': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Denver' },
  '803': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Boulder' },
  '804': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Denver' },
  '805': { rating: 'Good', fiveG: true, type: '5G', city: 'Longmont' },

  // Detroit Metro
  '482': { rating: 'Excellent', fiveG: true, type: '5G Ultra', city: 'Detroit' },
  '480': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Royal Oak' },
  '481': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Detroit' },
  '483': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Royal Oak' },
  '484': { rating: 'Good', fiveG: true, type: '5G', city: 'Flint' },

  // San Diego
  '920': { rating: 'Excellent', fiveG: true, type: '5G Ultra', city: 'San Diego' },
  '921': { rating: 'Excellent', fiveG: true, type: '5G', city: 'San Diego' },
  '919': { rating: 'Excellent', fiveG: true, type: '5G', city: 'San Diego' },

  // Austin Metro
  '787': { rating: 'Excellent', fiveG: true, type: '5G Ultra', city: 'Austin' },
  '786': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Austin' },
  '788': { rating: 'Good', fiveG: true, type: '5G', city: 'Del Valle' },

  // San Antonio
  '782': { rating: 'Excellent', fiveG: true, type: '5G Ultra', city: 'San Antonio' },
  '780': { rating: 'Good', fiveG: true, type: '5G', city: 'San Antonio' },
  '781': { rating: 'Good', fiveG: true, type: '5G', city: 'San Antonio' },

  // Las Vegas
  '891': { rating: 'Excellent', fiveG: true, type: '5G Ultra', city: 'Las Vegas' },
  '890': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Las Vegas' },
  '889': { rating: 'Good', fiveG: true, type: '5G', city: 'Reno' },

  // Washington DC Metro
  '200': { rating: 'Excellent', fiveG: true, type: '5G Ultra', city: 'Washington DC' },
  '201': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Dulles' },
  '202': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Washington DC' },
  '203': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Southeast DC' },
  '204': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Southwest DC' },
  '205': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Northwest DC' },
  '206': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Northwest DC' },
  '207': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Southern MD' },
  '208': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Prince Georges' },
  '209': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Silver Spring' },

  // Minneapolis Metro
  '554': { rating: 'Excellent', fiveG: true, type: '5G Ultra', city: 'Minneapolis' },
  '550': { rating: 'Excellent', fiveG: true, type: '5G', city: 'St. Paul' },
  '551': { rating: 'Excellent', fiveG: true, type: '5G', city: 'St. Paul' },
  '553': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Minneapolis' },
  '555': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Minneapolis' },

  // Portland OR
  '972': { rating: 'Excellent', fiveG: true, type: '5G Ultra', city: 'Portland' },
  '970': { rating: 'Good', fiveG: true, type: '5G', city: 'Bend' },
  '971': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Portland' },
  '973': { rating: 'Good', fiveG: true, type: '5G', city: 'Salem' },

  // Charlotte NC
  '282': { rating: 'Excellent', fiveG: true, type: '5G Ultra', city: 'Charlotte' },
  '280': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Charlotte' },
  '281': { rating: 'Good', fiveG: true, type: '5G', city: 'Charlotte' },

  // Tampa Bay
  '336': { rating: 'Excellent', fiveG: true, type: '5G Ultra', city: 'Tampa' },
  '335': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Tampa' },
  '337': { rating: 'Excellent', fiveG: true, type: '5G', city: 'St. Petersburg' },
  '338': { rating: 'Good', fiveG: true, type: '5G', city: 'Lakeland' },

  // Orlando
  '328': { rating: 'Excellent', fiveG: true, type: '5G Ultra', city: 'Orlando' },
  '327': { rating: 'Excellent', fiveG: true, type: '5G', city: 'Orlando' },
  '329': { rating: 'Good', fiveG: true, type: '5G', city: 'Melbourne' },

  // Default for unknown areas
  'default': { rating: 'Good', fiveG: true, type: '5G/LTE', city: null }
};

document.addEventListener('DOMContentLoaded', function() {
  // FAQ Accordion
  initFaqAccordion();

  // Tool-specific functionality
  initCoverageChecker();

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
      const zipInput = document.getElementById('zip-input');
      if (zipInput) zipInput.value = '';

      const checkBtn = document.getElementById('check-coverage');
      if (checkBtn) checkBtn.disabled = true;

      document.getElementById('zip-valid').classList.remove('visible');
      document.getElementById('zip-invalid').classList.remove('visible');
    });
  }

  const shareBtn = document.getElementById('share-results');
  if (shareBtn) {
    shareBtn.addEventListener('click', function() {
      if (navigator.share) {
        navigator.share({
          title: 'Coverage Check Results - Vouch Mobile',
          text: 'Check out my coverage results for Vouch Mobile!',
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

function initCoverageChecker() {
  const zipInput = document.getElementById('zip-input');
  const checkBtn = document.getElementById('check-coverage');
  const validIcon = document.getElementById('zip-valid');
  const invalidIcon = document.getElementById('zip-invalid');

  if (!zipInput || !checkBtn) return;

  zipInput.addEventListener('input', function() {
    const value = this.value.replace(/\D/g, '');
    this.value = value;

    if (value.length === 5) {
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

  // Allow Enter key to submit
  zipInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !checkBtn.disabled) {
      e.preventDefault();
      checkBtn.click();
    }
  });

  checkBtn.addEventListener('click', function() {
    const zip = zipInput.value;
    if (zip.length !== 5) return;

    this.classList.add('loading');

    setTimeout(() => {
      this.classList.remove('loading');
      document.getElementById('tool-body').style.display = 'none';
      const results = document.getElementById('tool-results');
      results.style.display = 'block';

      showCoverageResults(zip);
    }, 1200);
  });
}

function createSvgIcon(type) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', type === 'check' || type === 'signal' ? '24' : '18');
  svg.setAttribute('height', type === 'check' || type === 'signal' ? '24' : '18');
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
  } else if (type === 'signal') {
    // Signal bars icon
    const rect1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect1.setAttribute('x', '4');
    rect1.setAttribute('y', '16');
    rect1.setAttribute('width', '3');
    rect1.setAttribute('height', '4');
    rect1.setAttribute('fill', 'currentColor');
    svg.appendChild(rect1);

    const rect2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect2.setAttribute('x', '9');
    rect2.setAttribute('y', '12');
    rect2.setAttribute('width', '3');
    rect2.setAttribute('height', '8');
    rect2.setAttribute('fill', 'currentColor');
    svg.appendChild(rect2);

    const rect3 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect3.setAttribute('x', '14');
    rect3.setAttribute('y', '8');
    rect3.setAttribute('width', '3');
    rect3.setAttribute('height', '12');
    rect3.setAttribute('fill', 'currentColor');
    svg.appendChild(rect3);

    const rect4 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect4.setAttribute('x', '19');
    rect4.setAttribute('y', '4');
    rect4.setAttribute('width', '3');
    rect4.setAttribute('height', '16');
    rect4.setAttribute('fill', 'currentColor');
    svg.appendChild(rect4);
  } else if (type === 'fiveG') {
    // 5G text
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', '12');
    text.setAttribute('y', '15');
    text.setAttribute('font-size', '10');
    text.setAttribute('font-weight', 'bold');
    text.setAttribute('fill', 'currentColor');
    text.setAttribute('text-anchor', 'middle');
    text.textContent = '5G';
    svg.appendChild(text);
  } else if (type === 'map') {
    // Map pin icon
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z');
    svg.appendChild(path);

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '12');
    circle.setAttribute('cy', '10');
    circle.setAttribute('r', '3');
    svg.appendChild(circle);
  }

  return svg;
}

function showCoverageResults(zip) {
  const resultsTitle = document.getElementById('results-title');
  const resultsContent = document.getElementById('results-content');

  const prefix = zip.substring(0, 3);
  const coverage = coverageData[prefix] || coverageData['default'];

  const ratingClass = coverage.rating === 'Excellent' ? 'success' :
                      coverage.rating === 'Good' ? 'success' : 'warning';

  resultsTitle.textContent = coverage.rating === 'Excellent'
    ? 'Great News! Excellent Coverage in Your Area'
    : coverage.rating === 'Good'
    ? 'Good News! Strong Coverage in Your Area'
    : 'Coverage Available in Your Area';

  // Clear content
  resultsContent.textContent = '';

  // Create location display
  const locationDiv = document.createElement('div');
  locationDiv.className = 'tool-results__location';

  const locationText = document.createElement('p');
  locationText.className = 'tool-results__location-text';
  locationText.textContent = coverage.city
    ? `Coverage for ${coverage.city} (${zip})`
    : `Coverage for ZIP code ${zip}`;
  locationDiv.appendChild(locationText);

  resultsContent.appendChild(locationDiv);

  // Create results grid
  const resultsGrid = document.createElement('div');
  resultsGrid.className = 'tool-results__grid';

  const items = [
    {
      label: 'Coverage Quality',
      value: coverage.rating,
      icon: 'signal',
      status: ratingClass
    },
    {
      label: '5G Available',
      value: coverage.fiveG ? 'Yes' : 'LTE Only',
      icon: 'fiveG',
      status: coverage.fiveG ? 'success' : 'info'
    },
    {
      label: 'Network Type',
      value: coverage.type,
      icon: 'check',
      status: coverage.type.includes('Ultra') ? 'success' : 'info'
    }
  ];

  items.forEach(item => {
    const itemEl = document.createElement('div');
    itemEl.className = `tool-results__item tool-results__item--${item.status}`;

    const iconDiv = document.createElement('div');
    iconDiv.className = 'tool-results__item-icon';
    iconDiv.appendChild(createSvgIcon(item.icon));

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

  resultsContent.appendChild(resultsGrid);

  // Coverage description
  const descDiv = document.createElement('div');
  descDiv.className = 'tool-results__description';

  let descText = '';
  if (coverage.rating === 'Excellent') {
    descText = 'Your area has excellent AT&T network coverage with ' + coverage.type + '. You can expect fast speeds, reliable connections, and great indoor coverage throughout your neighborhood.';
  } else if (coverage.rating === 'Good') {
    descText = 'Your area has good AT&T network coverage. You should have reliable service for calls, texts, and data. Signal may vary in some indoor locations or remote areas.';
  } else {
    descText = 'AT&T coverage is available in your area. Service quality may vary. We recommend testing coverage at your most frequent locations.';
  }

  const descP = document.createElement('p');
  descP.textContent = descText;
  descDiv.appendChild(descP);
  resultsContent.appendChild(descDiv);

  // Create CTA
  const ctaDiv = document.createElement('div');
  ctaDiv.className = 'tool-results__cta';

  const ctaLink = document.createElement('a');
  ctaLink.href = 'https://vouchmobile.com';
  ctaLink.className = 'btn btn-primary';
  ctaLink.textContent = 'Start Your Switch to Vouch ';
  ctaLink.appendChild(createSvgIcon('arrow'));

  ctaDiv.appendChild(ctaLink);
  resultsContent.appendChild(ctaDiv);
}
