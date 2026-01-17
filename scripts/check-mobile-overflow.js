#!/usr/bin/env node
/**
 * Mobile Horizontal Overflow Checker
 * Analyzes CSS for potential horizontal scrolling issues on mobile devices
 */

const fs = require('fs');
const path = require('path');

const CSS_FILE = path.join(__dirname, '..', 'src', 'css', 'styles.css');

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  dim: '\x1b[2m',
};

// Thresholds for mobile (in pixels)
const MOBILE_WIDTH = 375; // iPhone SE width
const WARNING_THRESHOLD = 300; // Warn if fixed width > this

function checkMobileOverflow() {
  console.log(colors.cyan + 'Mobile Horizontal Overflow Checker' + colors.reset + '\n');

  if (!fs.existsSync(CSS_FILE)) {
    console.error(colors.red + 'ERROR: CSS file not found at ' + CSS_FILE + colors.reset);
    return 1;
  }

  const css = fs.readFileSync(CSS_FILE, 'utf8');
  const lines = css.split('\n');

  const issues = [];
  const warnings = [];

  // Check 1: overflow-x: hidden on html and body
  const htmlOverflow = /html\s*\{[^}]*overflow-x\s*:\s*hidden/s.test(css);
  const bodyOverflow = /body\s*\{[^}]*overflow-x\s*:\s*hidden/s.test(css);

  if (!htmlOverflow) {
    issues.push({
      type: 'CRITICAL',
      message: 'Missing overflow-x: hidden on html element',
      fix: 'Add "overflow-x: hidden;" to the html {} rule'
    });
  }

  if (!bodyOverflow) {
    issues.push({
      type: 'CRITICAL',
      message: 'Missing overflow-x: hidden on body element',
      fix: 'Add "overflow-x: hidden;" to the body {} rule'
    });
  }

  // Check 2: Fixed widths larger than mobile viewport
  const fixedWidthRegex = /width\s*:\s*(\d+)px/g;
  let match;
  let lineNum = 0;

  for (const line of lines) {
    lineNum++;
    // Skip media queries (they define breakpoints, not element widths)
    if (line.includes('@media')) continue;
    // Skip max-width (safe)
    if (line.includes('max-width')) continue;
    // Skip min-width (used in media queries inside rules)
    if (line.includes('min-width')) continue;

    while ((match = fixedWidthRegex.exec(line)) !== null) {
      const width = parseInt(match[1], 10);
      if (width > WARNING_THRESHOLD) {
        warnings.push({
          type: 'WARNING',
          line: lineNum,
          message: 'Fixed width: ' + width + 'px may cause overflow on mobile (< ' + MOBILE_WIDTH + 'px)',
          code: line.trim()
        });
      }
    }
  }

  // Check 3: Elements with negative right margins or positions
  const negativeRightRegex = /(right|margin-right)\s*:\s*-\d+/;
  lineNum = 0;
  for (const line of lines) {
    lineNum++;
    if (negativeRightRegex.test(line)) {
      warnings.push({
        type: 'WARNING',
        line: lineNum,
        message: 'Negative right positioning can cause horizontal overflow',
        code: line.trim()
      });
    }
  }

  // Check 4: white-space: nowrap count
  const nowrapLines = [];
  lineNum = 0;
  for (const line of lines) {
    lineNum++;
    if (/white-space\s*:\s*nowrap/.test(line)) {
      nowrapLines.push({ line: lineNum, code: line.trim() });
    }
  }

  if (nowrapLines.length > 10) {
    warnings.push({
      type: 'INFO',
      message: 'Found ' + nowrapLines.length + ' uses of white-space: nowrap - ensure containers have overflow handling',
      details: 'Consider adding text-overflow: ellipsis and overflow: hidden to prevent overflow'
    });
  }

  // Check 5: Viewport-relative widths > 100vw
  const vwRegex = /width\s*:\s*(\d+)vw/g;
  lineNum = 0;
  for (const line of lines) {
    lineNum++;
    while ((match = vwRegex.exec(line)) !== null) {
      const vw = parseInt(match[1], 10);
      if (vw > 100) {
        issues.push({
          type: 'CRITICAL',
          line: lineNum,
          message: 'Width ' + vw + 'vw exceeds viewport and will cause horizontal scroll',
          code: line.trim()
        });
      }
    }
  }

  // Output results
  console.log(colors.dim + 'Analyzed: ' + CSS_FILE + colors.reset + '\n');

  if (issues.length === 0 && warnings.length === 0) {
    console.log(colors.green + '✓ No mobile overflow issues detected' + colors.reset + '\n');
    return 0;
  }

  // Print critical issues
  if (issues.length > 0) {
    console.log(colors.red + 'CRITICAL ISSUES (' + issues.length + '):' + colors.reset);
    for (const issue of issues) {
      console.log('  ' + colors.red + '✗' + colors.reset + ' ' + issue.message);
      if (issue.line) {
        console.log('    ' + colors.dim + 'Line ' + issue.line + ': ' + issue.code + colors.reset);
      }
      if (issue.fix) {
        console.log('    ' + colors.cyan + 'Fix: ' + issue.fix + colors.reset);
      }
    }
    console.log();
  }

  // Print warnings (limit to first 10 to avoid noise)
  if (warnings.length > 0) {
    console.log(colors.yellow + 'WARNINGS (' + warnings.length + '):' + colors.reset);
    const displayWarnings = warnings.slice(0, 10);
    for (const warning of displayWarnings) {
      console.log('  ' + colors.yellow + '⚠' + colors.reset + ' ' + warning.message);
      if (warning.line) {
        console.log('    ' + colors.dim + 'Line ' + warning.line + ': ' + warning.code + colors.reset);
      }
      if (warning.details) {
        console.log('    ' + colors.dim + warning.details + colors.reset);
      }
    }
    if (warnings.length > 10) {
      console.log('  ' + colors.dim + '... and ' + (warnings.length - 10) + ' more warnings' + colors.reset);
    }
    console.log();
  }

  // Summary
  const hasErrors = issues.length > 0;
  if (hasErrors) {
    console.log(colors.red + '✗ Found ' + issues.length + ' critical issue(s) that may cause horizontal scrolling on mobile' + colors.reset);
    return 1;
  } else {
    console.log(colors.yellow + '⚠ Found ' + warnings.length + ' potential issue(s) - review manually' + colors.reset);
    return 0;
  }
}

// Run the check
const exitCode = checkMobileOverflow();
if (typeof exitCode === 'number') {
  process.exitCode = exitCode;
}
