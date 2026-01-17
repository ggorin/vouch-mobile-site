#!/usr/bin/env node
/**
 * Accessibility Check Script
 * Basic a11y checks for built HTML files
 *
 * Checks:
 * - Heading hierarchy (no skipped levels)
 * - Form inputs with labels
 * - Links with discernible text
 * - Language attribute on html
 */

const fs = require('fs');
const path = require('path');

const SITE_DIR = path.join(__dirname, '..', '_site');

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  dim: '\x1b[2m',
};

function findHtmlFiles(dir, files) {
  if (!files) files = [];
  if (!fs.existsSync(dir)) return files;
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      findHtmlFiles(fullPath, files);
    } else if (item.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

function checkAccessibility() {
  console.log(colors.cyan + 'Accessibility Check' + colors.reset + '\n');

  if (!fs.existsSync(SITE_DIR)) {
    console.log(colors.yellow + 'Warning: _site directory not found. Run npm run build first.' + colors.reset);
    return 0;
  }

  const htmlFiles = findHtmlFiles(SITE_DIR);
  console.log(colors.dim + 'Scanning ' + htmlFiles.length + ' HTML files...' + colors.reset + '\n');

  const issues = {
    headingSkips: [],
    missingLang: [],
    emptyLinks: [],
    inputsWithoutLabels: [],
  };

  for (const file of htmlFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(SITE_DIR, file);

    // Check for lang attribute on html
    if (!/<html[^>]*\slang=["'][^"']+["']/i.test(content)) {
      issues.missingLang.push(relativePath);
    }

    // Check heading hierarchy
    const headingRegex = /<h([1-6])[^>]*>/gi;
    const headings = [];
    let match;
    while ((match = headingRegex.exec(content)) !== null) {
      headings.push(parseInt(match[1], 10));
    }

    // Check for skipped heading levels
    for (let i = 1; i < headings.length; i++) {
      const current = headings[i];
      const previous = headings[i - 1];
      // Allow going down (h2 to h1) or same level, but not skipping (h1 to h3)
      if (current > previous + 1) {
        issues.headingSkips.push({
          file: relativePath,
          from: 'h' + previous,
          to: 'h' + current,
        });
        break; // Only report first skip per file
      }
    }

    // Check for empty links (no text content, no aria-label)
    const linkRegex = /<a\s+[^>]*>([^<]*)<\/a>/gi;
    while ((match = linkRegex.exec(content)) !== null) {
      const fullTag = match[0];
      const textContent = match[1].trim();

      // Skip if has aria-label or aria-labelledby
      if (/aria-label/i.test(fullTag)) continue;

      // Skip if contains an image (which should have alt)
      if (/<img/i.test(fullTag)) continue;

      // Skip if contains SVG with title
      if (/<svg/i.test(fullTag) && /<title/i.test(fullTag)) continue;

      // Check if empty
      if (!textContent) {
        // Extract href for context
        const hrefMatch = fullTag.match(/href=["']([^"']+)["']/i);
        issues.emptyLinks.push({
          file: relativePath,
          href: hrefMatch ? hrefMatch[1] : 'unknown',
        });
      }
    }

    // Check for form inputs without labels
    const inputRegex = /<input\s+[^>]*type=["'](text|email|password|tel|search|url|number)["'][^>]*>/gi;
    const labelForRegex = /<label[^>]*\sfor=["']([^"']+)["']/gi;

    const labelFors = new Set();
    let labelMatch;
    while ((labelMatch = labelForRegex.exec(content)) !== null) {
      labelFors.add(labelMatch[1]);
    }

    while ((match = inputRegex.exec(content)) !== null) {
      const inputTag = match[0];
      const idMatch = inputTag.match(/\sid=["']([^"']+)["']/i);
      const ariaLabel = /aria-label/i.test(inputTag);
      const placeholder = /placeholder/i.test(inputTag);

      // Skip if has aria-label
      if (ariaLabel) continue;

      // Check if has matching label
      if (idMatch && labelFors.has(idMatch[1])) continue;

      // Check if wrapped in label (simplified check)
      const beforeInput = content.substring(Math.max(0, match.index - 200), match.index);
      const afterInput = content.substring(match.index, Math.min(content.length, match.index + 200));
      if (beforeInput.includes('<label') && afterInput.includes('</label>')) continue;

      issues.inputsWithoutLabels.push({
        file: relativePath,
        hasPlaceholder: placeholder,
      });
    }
  }

  // Report results
  let hasIssues = false;

  if (issues.missingLang.length > 0) {
    hasIssues = true;
    console.log(colors.yellow + 'Missing lang attribute on <html>: ' + issues.missingLang.length + colors.reset);
    const shown = issues.missingLang.slice(0, 3);
    for (const file of shown) {
      console.log('  ' + colors.dim + file + colors.reset);
    }
    if (issues.missingLang.length > 3) {
      console.log('  ' + colors.dim + '... and ' + (issues.missingLang.length - 3) + ' more' + colors.reset);
    }
    console.log();
  }

  if (issues.headingSkips.length > 0) {
    hasIssues = true;
    console.log(colors.yellow + 'Heading level skips: ' + issues.headingSkips.length + colors.reset);
    const shown = issues.headingSkips.slice(0, 5);
    for (const issue of shown) {
      console.log('  ' + colors.dim + issue.file + ': ' + issue.from + ' -> ' + issue.to + colors.reset);
    }
    if (issues.headingSkips.length > 5) {
      console.log('  ' + colors.dim + '... and ' + (issues.headingSkips.length - 5) + ' more' + colors.reset);
    }
    console.log();
  }

  if (issues.emptyLinks.length > 0) {
    hasIssues = true;
    console.log(colors.yellow + 'Links without discernible text: ' + issues.emptyLinks.length + colors.reset);
    const shown = issues.emptyLinks.slice(0, 5);
    for (const issue of shown) {
      console.log('  ' + colors.dim + issue.file + ': ' + issue.href + colors.reset);
    }
    if (issues.emptyLinks.length > 5) {
      console.log('  ' + colors.dim + '... and ' + (issues.emptyLinks.length - 5) + ' more' + colors.reset);
    }
    console.log();
  }

  if (issues.inputsWithoutLabels.length > 0) {
    hasIssues = true;
    console.log(colors.yellow + 'Form inputs without labels: ' + issues.inputsWithoutLabels.length + colors.reset);
    const shown = issues.inputsWithoutLabels.slice(0, 5);
    for (const issue of shown) {
      const note = issue.hasPlaceholder ? ' (has placeholder but needs label)' : '';
      console.log('  ' + colors.dim + issue.file + note + colors.reset);
    }
    if (issues.inputsWithoutLabels.length > 5) {
      console.log('  ' + colors.dim + '... and ' + (issues.inputsWithoutLabels.length - 5) + ' more' + colors.reset);
    }
    console.log();
  }

  // Summary
  const totalIssues = issues.missingLang.length + issues.headingSkips.length +
                      issues.emptyLinks.length + issues.inputsWithoutLabels.length;

  if (!hasIssues) {
    console.log(colors.green + '✓ No accessibility issues found' + colors.reset);
  } else {
    console.log(colors.yellow + '⚠ Found ' + totalIssues + ' accessibility issue(s) to review' + colors.reset);
  }

  // Return 0 - these are warnings, not errors
  return 0;
}

process.exitCode = checkAccessibility();
