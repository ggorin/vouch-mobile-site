/**
 * Phone Unlock Status Guide Tool
 * Provides carrier-specific unlock instructions
 */

// Unlock instructions by carrier
const unlockInstructions = {
  'att': {
    name: 'AT&T',
    logo: 'AT&T',
    requirements: [
      'Device must be paid off in full',
      'Account must be active for at least 60 days',
      'Account must be in good standing (no past due balance)',
      'Device must not be reported lost or stolen',
      'Only 2 unlock requests allowed per line per year'
    ],
    steps: [
      {
        title: 'Find Your IMEI',
        description: 'Dial *#06# on your phone or go to Settings > About Phone to find your 15-digit IMEI number.'
      },
      {
        title: 'Visit AT&T Device Unlock Portal',
        description: 'Go to att.com/deviceunlock and select "Unlock your device."'
      },
      {
        title: 'Submit Your Request',
        description: 'Enter your IMEI number and contact information. AT&T will verify your eligibility.'
      },
      {
        title: 'Wait for Confirmation',
        description: 'AT&T typically processes requests within 24-48 hours. You\'ll receive an email with unlock instructions.'
      },
      {
        title: 'Complete the Unlock',
        description: 'For iPhone: Insert new SIM, connect to WiFi, and follow prompts. For Android: You may receive an unlock code to enter.'
      }
    ],
    url: 'https://www.att.com/deviceunlock',
    timeline: '24-48 hours',
    cost: 'Free'
  },
  'verizon': {
    name: 'Verizon',
    logo: 'Verizon',
    requirements: [
      'Device must be paid off in full',
      'Device must be active on Verizon for at least 60 days',
      'Account must not have fraudulent activity',
      'Device must not be reported lost or stolen'
    ],
    steps: [
      {
        title: 'Good News!',
        description: 'Verizon automatically unlocks most devices 60 days after purchase or activation.'
      },
      {
        title: 'Check Unlock Status',
        description: 'Go to My Verizon > Devices > Device overview to verify your device is unlocked.'
      },
      {
        title: 'If Not Unlocked',
        description: 'Contact Verizon customer service at 1-800-922-0204 if your eligible device isn\'t automatically unlocked.'
      },
      {
        title: 'Test Your Device',
        description: 'Insert a non-Verizon SIM card. If it works, your phone is unlocked and ready for Vouch.'
      }
    ],
    url: 'https://www.verizon.com/support/device-locking-background/',
    timeline: 'Automatic after 60 days',
    cost: 'Free'
  },
  'tmobile': {
    name: 'T-Mobile',
    logo: 'T-Mobile',
    requirements: [
      'Device must be paid off in full',
      'Account must be active for at least 40 days',
      'Account must be in good standing',
      'Device must not be reported lost, stolen, or blocked',
      'Maximum 2 unlock requests per line of service per year'
    ],
    steps: [
      {
        title: 'Verify Eligibility',
        description: 'Log into your T-Mobile account to check if your device meets unlock requirements.'
      },
      {
        title: 'Request Unlock via App',
        description: 'Open the T-Mobile app > Account > Device > Request device unlock. Or call 1-877-746-0909.'
      },
      {
        title: 'Wait for Processing',
        description: 'T-Mobile processes unlock requests within 2-5 business days.'
      },
      {
        title: 'Complete for iPhone',
        description: 'Insert non-T-Mobile SIM, connect to WiFi, and your iPhone will unlock automatically.'
      },
      {
        title: 'Complete for Android',
        description: 'You\'ll receive an email with unlock instructions. Insert new SIM and enter the code if prompted.'
      }
    ],
    url: 'https://www.t-mobile.com/support/devices/unlock-your-t-mobile-device',
    timeline: '2-5 business days',
    cost: 'Free'
  },
  'sprint': {
    name: 'Sprint (now T-Mobile)',
    logo: 'Sprint',
    requirements: [
      'Device must be paid off in full',
      'Account must have been active for at least 50 days',
      'Account must be in good standing',
      'Device must not be reported lost or stolen'
    ],
    steps: [
      {
        title: 'Note: Sprint is now T-Mobile',
        description: 'Sprint merged with T-Mobile. Your unlock process now goes through T-Mobile.'
      },
      {
        title: 'Check Eligibility',
        description: 'Log into your T-Mobile account (using your Sprint credentials) to verify eligibility.'
      },
      {
        title: 'Request Unlock',
        description: 'Call T-Mobile customer service at 1-877-746-0909 or use the T-Mobile app.'
      },
      {
        title: 'Wait for Processing',
        description: 'Allow 2-5 business days for processing. You\'ll receive confirmation via email.'
      },
      {
        title: 'Complete the Unlock',
        description: 'Follow the email instructions. iPhone users: insert new SIM and connect to WiFi.'
      }
    ],
    url: 'https://www.t-mobile.com/support/devices/unlock-your-t-mobile-device',
    timeline: '2-5 business days',
    cost: 'Free'
  },
  'cricket': {
    name: 'Cricket Wireless',
    logo: 'Cricket',
    requirements: [
      'Device must be active on Cricket for at least 6 months',
      'Account must be in good standing',
      'Device must not be reported lost or stolen',
      'Device must not be associated with fraudulent activity'
    ],
    steps: [
      {
        title: 'Wait for 6 Months',
        description: 'Cricket requires 6 months of active service before unlocking. No exceptions.'
      },
      {
        title: 'Automatic Unlock',
        description: 'After 6 months, Cricket automatically sends unlock codes/approval. Check your email.'
      },
      {
        title: 'Request Manually if Needed',
        description: 'If not auto-unlocked, contact Cricket at 1-800-274-2538 or visit a Cricket store.'
      },
      {
        title: 'For iPhone',
        description: 'Insert new SIM card and connect to WiFi. Your iPhone will unlock automatically.'
      },
      {
        title: 'For Android',
        description: 'Enter the unlock code sent by Cricket when prompted after inserting a new SIM.'
      }
    ],
    url: 'https://www.cricketwireless.com/support/account-management/device-unlock-policy.html',
    timeline: 'Automatic after 6 months',
    cost: 'Free'
  },
  'metro': {
    name: 'Metro by T-Mobile',
    logo: 'Metro',
    requirements: [
      'Device must be active on Metro for at least 180 days (6 months)',
      'Account must be in good standing',
      'Device must not be reported lost or stolen',
      'Must have redeemed SIM activation kit'
    ],
    steps: [
      {
        title: 'Verify 180 Days of Service',
        description: 'Metro requires 180 consecutive days of active service before unlocking.'
      },
      {
        title: 'Contact Metro',
        description: 'Call Metro customer service at 1-888-863-8768 or visit a Metro store.'
      },
      {
        title: 'Provide Information',
        description: 'Have your account PIN, phone number, and IMEI ready for verification.'
      },
      {
        title: 'Wait for Processing',
        description: 'Metro typically processes unlocks within 24-48 hours.'
      },
      {
        title: 'Complete the Unlock',
        description: 'Follow the instructions sent via email or text message to complete the unlock.'
      }
    ],
    url: 'https://www.metrobyt-mobile.com/support/device-unlock-policy',
    timeline: '24-48 hours after 180 days',
    cost: 'Free'
  },
  'boost': {
    name: 'Boost Mobile',
    logo: 'Boost',
    requirements: [
      'Device must be active on Boost for at least 12 months',
      'Account must be in good standing',
      'Device must not be reported lost or stolen',
      'Device must be paid off in full'
    ],
    steps: [
      {
        title: 'Wait 12 Months',
        description: 'Boost requires 12 months of active service before unlocking. This is longer than most carriers.'
      },
      {
        title: 'Contact Boost',
        description: 'After 12 months, call Boost at 1-833-502-6678 or visit a Boost store.'
      },
      {
        title: 'Verify Your Account',
        description: 'Provide your account details and IMEI number for verification.'
      },
      {
        title: 'Receive Unlock Code',
        description: 'Boost will provide an unlock code or process the unlock remotely.'
      },
      {
        title: 'Complete the Unlock',
        description: 'Insert new SIM and enter the unlock code when prompted.'
      }
    ],
    url: 'https://www.boostmobile.com/support/faq/device-unlock-policy.html',
    timeline: 'After 12 months of service',
    cost: 'Free'
  },
  'visible': {
    name: 'Visible',
    logo: 'Visible',
    requirements: [
      'Device must be active on Visible for at least 60 days',
      'Device must be paid off in full',
      'Account must be in good standing',
      'Device must not be reported lost or stolen'
    ],
    steps: [
      {
        title: 'Check Eligibility',
        description: 'After 60 days of service, your device should be eligible for unlock.'
      },
      {
        title: 'Contact Visible Support',
        description: 'Open the Visible app and chat with support to request an unlock.'
      },
      {
        title: 'Automatic for Some Devices',
        description: 'Many Visible devices unlock automatically after 60 days on the Verizon network.'
      },
      {
        title: 'Test Your Phone',
        description: 'Insert a non-Visible SIM to verify your phone is unlocked.'
      }
    ],
    url: 'https://www.visible.com/help/device-unlocking-policy',
    timeline: '60 days (often automatic)',
    cost: 'Free'
  },
  'uscc': {
    name: 'US Cellular',
    logo: 'US Cellular',
    requirements: [
      'Device must not be associated with fraudulent activity',
      'Device must not be reported lost or stolen',
      'Installment plans must be paid in full'
    ],
    steps: [
      {
        title: 'Good News!',
        description: 'US Cellular does not lock devices. Most phones purchased from them are unlocked.'
      },
      {
        title: 'Verify Unlock Status',
        description: 'Insert a non-US Cellular SIM to verify your phone works on other networks.'
      },
      {
        title: 'Contact Support if Needed',
        description: 'If your device appears locked, call US Cellular at 1-888-944-9400.'
      }
    ],
    url: 'https://www.uscellular.com/support',
    timeline: 'Usually already unlocked',
    cost: 'Free'
  },
  'other': {
    name: 'Other Carrier',
    logo: 'Other',
    requirements: [
      'Requirements vary by carrier',
      'Device typically must be paid off',
      'Service time requirements vary (30-365 days)',
      'Account must be in good standing'
    ],
    steps: [
      {
        title: 'Contact Your Carrier',
        description: 'Call your carrier\'s customer service to ask about their unlock policy and requirements.'
      },
      {
        title: 'Gather Information',
        description: 'Have your account number, PIN, and IMEI number ready before calling.'
      },
      {
        title: 'Request Unlock',
        description: 'Ask specifically for a "device unlock" or "SIM unlock" and note any reference numbers.'
      },
      {
        title: 'Follow Up',
        description: 'If not completed within the promised timeframe, follow up or file an FCC complaint.'
      }
    ],
    url: 'https://www.fcc.gov/consumers/guides/cell-phone-unlocking-faqs',
    timeline: 'Varies by carrier',
    cost: 'Usually free'
  }
};

// Device-specific tips
const deviceTips = {
  'iphone': {
    findImei: 'Go to Settings > General > About and scroll down to IMEI.',
    checkUnlock: 'Settings > General > About. If you see "No SIM restrictions," your phone is unlocked.',
    unlockProcess: 'iPhone unlocks happen via Apple\'s activation server. After carrier approval, insert new SIM and connect to WiFi to complete.'
  },
  'android': {
    findImei: 'Go to Settings > About Phone > Status > IMEI information, or dial *#06#.',
    checkUnlock: 'Insert a SIM from another carrier. If it works and shows signal, your phone is unlocked.',
    unlockProcess: 'Android phones may require entering an unlock code. Keep your phone charged and have the code ready.'
  }
};

document.addEventListener('DOMContentLoaded', function() {
  // FAQ Accordion
  initFaqAccordion();

  // Tool-specific functionality
  initUnlockChecker();

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

      // Reset selections
      const deviceBtns = document.querySelectorAll('.device-btn');
      deviceBtns.forEach(btn => btn.classList.remove('selected'));

      const carrierBtns = document.querySelectorAll('.carrier-btn');
      carrierBtns.forEach(btn => btn.classList.remove('selected'));

      const carrierGroup = document.getElementById('carrier-group');
      if (carrierGroup) carrierGroup.style.display = 'none';

      const checkBtn = document.getElementById('check-unlock');
      if (checkBtn) checkBtn.disabled = true;

      // Reset state
      selectedDevice = null;
      selectedCarrier = null;
    });
  }

  const shareBtn = document.getElementById('share-results');
  if (shareBtn) {
    shareBtn.addEventListener('click', function() {
      if (navigator.share) {
        navigator.share({
          title: 'Phone Unlock Guide - Vouch Mobile',
          text: 'Check out how to unlock your phone for Vouch Mobile!',
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

let selectedDevice = null;
let selectedCarrier = null;

function initUnlockChecker() {
  const deviceBtns = document.querySelectorAll('.device-btn');
  const carrierGroup = document.getElementById('carrier-group');
  const carrierBtns = document.querySelectorAll('.carrier-btn');
  const checkBtn = document.getElementById('check-unlock');

  if (!deviceBtns.length || !checkBtn) return;

  // Device selection
  deviceBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      deviceBtns.forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');
      selectedDevice = this.dataset.device;

      // Show carrier selection
      if (carrierGroup) {
        carrierGroup.style.display = 'block';
        carrierGroup.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      updateCheckButton();
    });
  });

  // Carrier selection
  carrierBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      carrierBtns.forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');
      selectedCarrier = this.dataset.carrier;

      updateCheckButton();
    });
  });

  function updateCheckButton() {
    checkBtn.disabled = !(selectedDevice && selectedCarrier);
  }

  // Check button click
  checkBtn.addEventListener('click', function() {
    if (!selectedDevice || !selectedCarrier) return;

    this.classList.add('loading');

    setTimeout(() => {
      this.classList.remove('loading');
      document.getElementById('tool-body').style.display = 'none';
      const results = document.getElementById('tool-results');
      results.style.display = 'block';

      showUnlockResults(selectedDevice, selectedCarrier);
    }, 1000);
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
  } else if (type === 'external') {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6');
    svg.appendChild(path);

    const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    polyline.setAttribute('points', '15 3 21 3 21 9');
    svg.appendChild(polyline);

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', '10');
    line.setAttribute('y1', '14');
    line.setAttribute('x2', '21');
    line.setAttribute('y2', '3');
    svg.appendChild(line);
  } else if (type === 'clock') {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '12');
    circle.setAttribute('cy', '12');
    circle.setAttribute('r', '10');
    svg.appendChild(circle);

    const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    polyline.setAttribute('points', '12 6 12 12 16 14');
    svg.appendChild(polyline);
  } else if (type === 'unlock') {
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', '3');
    rect.setAttribute('y', '11');
    rect.setAttribute('width', '18');
    rect.setAttribute('height', '11');
    rect.setAttribute('rx', '2');
    rect.setAttribute('ry', '2');
    svg.appendChild(rect);

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M7 11V7a5 5 0 0 1 9.9-1');
    svg.appendChild(path);
  }

  return svg;
}

function showUnlockResults(device, carrier) {
  const resultsTitle = document.getElementById('results-title');
  const resultsContent = document.getElementById('results-content');

  const carrierInfo = unlockInstructions[carrier] || unlockInstructions['other'];
  const deviceInfo = deviceTips[device];
  const deviceName = device === 'iphone' ? 'iPhone' : 'Android';

  resultsTitle.textContent = 'Unlock Your ' + deviceName + ' from ' + carrierInfo.name;

  // Clear content
  resultsContent.textContent = '';

  // Summary section
  const summaryDiv = document.createElement('div');
  summaryDiv.className = 'tool-results__summary';

  const summaryGrid = document.createElement('div');
  summaryGrid.className = 'tool-results__summary-grid';

  const summaryItems = [
    { label: 'Carrier', value: carrierInfo.name },
    { label: 'Timeline', value: carrierInfo.timeline },
    { label: 'Cost', value: carrierInfo.cost }
  ];

  summaryItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'tool-results__summary-item';

    const labelSpan = document.createElement('span');
    labelSpan.className = 'tool-results__summary-label';
    labelSpan.textContent = item.label;

    const valueSpan = document.createElement('span');
    valueSpan.className = 'tool-results__summary-value';
    valueSpan.textContent = item.value;

    itemDiv.appendChild(labelSpan);
    itemDiv.appendChild(valueSpan);
    summaryGrid.appendChild(itemDiv);
  });

  summaryDiv.appendChild(summaryGrid);
  resultsContent.appendChild(summaryDiv);

  // Requirements section
  const reqDiv = document.createElement('div');
  reqDiv.className = 'tool-results__section';

  const reqTitle = document.createElement('h3');
  reqTitle.className = 'tool-results__section-title';
  reqTitle.textContent = 'Requirements';
  reqDiv.appendChild(reqTitle);

  const reqList = document.createElement('ul');
  reqList.className = 'tool-results__requirements';

  carrierInfo.requirements.forEach(req => {
    const li = document.createElement('li');
    li.className = 'tool-results__requirement';

    const icon = document.createElement('span');
    icon.className = 'tool-results__requirement-icon';
    icon.appendChild(createSvgIcon('check'));

    const text = document.createElement('span');
    text.textContent = req;

    li.appendChild(icon);
    li.appendChild(text);
    reqList.appendChild(li);
  });

  reqDiv.appendChild(reqList);
  resultsContent.appendChild(reqDiv);

  // Steps section
  const stepsDiv = document.createElement('div');
  stepsDiv.className = 'tool-results__section';

  const stepsTitle = document.createElement('h3');
  stepsTitle.className = 'tool-results__section-title';
  stepsTitle.textContent = 'Step-by-Step Instructions';
  stepsDiv.appendChild(stepsTitle);

  const stepsList = document.createElement('ol');
  stepsList.className = 'tool-results__steps';

  carrierInfo.steps.forEach((step, index) => {
    const li = document.createElement('li');
    li.className = 'tool-results__step';

    const number = document.createElement('span');
    number.className = 'tool-results__step-number';
    number.textContent = index + 1;

    const content = document.createElement('div');
    content.className = 'tool-results__step-content';

    const stepTitle = document.createElement('strong');
    stepTitle.className = 'tool-results__step-title';
    stepTitle.textContent = step.title;

    const stepDesc = document.createElement('p');
    stepDesc.className = 'tool-results__step-desc';
    stepDesc.textContent = step.description;

    content.appendChild(stepTitle);
    content.appendChild(stepDesc);
    li.appendChild(number);
    li.appendChild(content);
    stepsList.appendChild(li);
  });

  stepsDiv.appendChild(stepsList);
  resultsContent.appendChild(stepsDiv);

  // Device-specific tip
  const tipDiv = document.createElement('div');
  tipDiv.className = 'tool-results__tip';

  const tipTitle = document.createElement('h4');
  tipTitle.className = 'tool-results__tip-title';
  tipTitle.textContent = deviceName + ' Tip: Finding Your IMEI';
  tipDiv.appendChild(tipTitle);

  const tipText = document.createElement('p');
  tipText.className = 'tool-results__tip-text';
  tipText.textContent = deviceInfo.findImei;
  tipDiv.appendChild(tipText);

  const tipCheckLabel = document.createElement('strong');
  tipCheckLabel.textContent = 'Check if already unlocked: ';

  const tipCheck = document.createElement('p');
  tipCheck.className = 'tool-results__tip-text';
  tipCheck.appendChild(tipCheckLabel);
  tipCheck.appendChild(document.createTextNode(deviceInfo.checkUnlock));
  tipDiv.appendChild(tipCheck);

  resultsContent.appendChild(tipDiv);

  // Carrier link
  const linkDiv = document.createElement('div');
  linkDiv.className = 'tool-results__link';

  const linkBtn = document.createElement('a');
  linkBtn.href = carrierInfo.url;
  linkBtn.target = '_blank';
  linkBtn.rel = 'noopener noreferrer';
  linkBtn.className = 'btn btn-secondary';
  linkBtn.textContent = 'Visit ' + carrierInfo.name + ' Unlock Page ';
  linkBtn.appendChild(createSvgIcon('external'));

  linkDiv.appendChild(linkBtn);
  resultsContent.appendChild(linkDiv);

  // Create CTA
  const ctaDiv = document.createElement('div');
  ctaDiv.className = 'tool-results__cta';

  const ctaText = document.createElement('p');
  ctaText.className = 'tool-results__cta-text';
  ctaText.textContent = 'Once your phone is unlocked, you\'re ready to switch to Vouch!';
  ctaDiv.appendChild(ctaText);

  const ctaLink = document.createElement('a');
  ctaLink.href = 'https://vouchmobile.com';
  ctaLink.className = 'btn btn-primary';
  ctaLink.textContent = 'Start Your Switch to Vouch ';
  ctaLink.appendChild(createSvgIcon('arrow'));

  ctaDiv.appendChild(ctaLink);
  resultsContent.appendChild(ctaDiv);
}
