#!/usr/bin/env node
/**
 * SEO Technical Check Script
 * Validates SEO best practices in built HTML files
 *
 * Checks:
 * - Single H1 per page
 * - Title tag presence and length
 * - Meta description presence
 * - Open Graph tags
 * - Canonical URL
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

const CONFIG = {
  title: {
    maxLength: 70,
    minLength: 30,
  },
  description: {
    maxLength: 160,
    minLength: 120,
  },
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

function checkSEO() {
  console.log(colors.cyan + 'SEO Technical Check' + colors.reset + '\n');

  if (!fs.existsSync(SITE_DIR)) {
    console.log(colors.yellow + 'Warning: _site directory not found. Run npm run build first.' + colors.reset);
    return 0;
  }

  const htmlFiles = findHtmlFiles(SITE_DIR);
  console.log(colors.dim + 'Scanning ' + htmlFiles.length + ' HTML files...' + colors.reset + '\n');

  const issues = {
    multipleH1: [],
    missingH1: [],
    titleIssues: [],
    missingDescription: [],
    missingOG: [],
    missingCanonical: [],
  };

  for (const file of htmlFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(SITE_DIR, file);

    // Skip feed.xml and sitemap.xml html wrappers if any
    if (relativePath.includes('feed') || relativePath.includes('sitemap')) continue;

    // Check H1 count
    const h1Matches = content.match(/<h1[^>]*>/gi);
    const h1Count = h1Matches ? h1Matches.length : 0;

    if (h1Count === 0) {
      issues.missingH1.push(relativePath);
    } else if (h1Count > 1) {
      issues.multipleH1.push({
        file: relativePath,
        count: h1Count,
      });
    }

    // Check title tag
    const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/i);
    if (!titleMatch) {
      issues.titleIssues.push({
        file: relativePath,
        issue: 'missing',
      });
    } else {
      const titleLength = titleMatch[1].trim().length;
      if (titleLength > CONFIG.title.maxLength) {
        issues.titleIssues.push({
          file: relativePath,
          issue: 'too long (' + titleLength + ' chars, max ' + CONFIG.title.maxLength + ')',
        });
      } else if (titleLength < CONFIG.title.minLength) {
        issues.titleIssues.push({
          file: relativePath,
          issue: 'too short (' + titleLength + ' chars, min ' + CONFIG.title.minLength + ')',
        });
      }
    }

    // Check meta description
    const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i) ||
                      content.match(/<meta\s+content=["']([^"']+)["']\s+name=["']description["']/i);
    if (!descMatch) {
      issues.missingDescription.push(relativePath);
    }

    // Check Open Graph tags
    const hasOGTitle = /<meta\s+property=["']og:title["']/i.test(content);
    const hasOGDesc = /<meta\s+property=["']og:description["']/i.test(content);
    const hasOGImage = /<meta\s+property=["']og:image["']/i.test(content);

    if (!hasOGTitle || !hasOGDesc || !hasOGImage) {
      const missing = [];
      if (!hasOGTitle) missing.push('og:title');
      if (!hasOGDesc) missing.push('og:description');
      if (!hasOGImage) missing.push('og:image');
      issues.missingOG.push({
        file: relativePath,
        missing: missing,
      });
    }

    // Check canonical URL
    const hasCanonical = /<link\s+rel=["']canonical["']/i.test(content);
    if (!hasCanonical) {
      issues.missingCanonical.push(relativePath);
    }
  }

  // Report results
  let hasIssues = false;

  if (issues.missingH1.length > 0) {
    hasIssues = true;
    console.log(colors.yellow + 'Pages missing H1: ' + issues.missingH1.length + colors.reset);
    const shown = issues.missingH1.slice(0, 3);
    for (const file of shown) {
      console.log('  ' + colors.dim + file + colors.reset);
    }
    if (issues.missingH1.length > 3) {
      console.log('  ' + colors.dim + '... and ' + (issues.missingH1.length - 3) + ' more' + colors.reset);
    }
    console.log();
  }

  if (issues.multipleH1.length > 0) {
    hasIssues = true;
    console.log(colors.yellow + 'Pages with multiple H1 tags: ' + issues.multipleH1.length + colors.reset);
    const shown = issues.multipleH1.slice(0, 5);
    for (const issue of shown) {
      console.log('  ' + colors.dim + issue.file + ' (' + issue.count + ' H1 tags)' + colors.reset);
    }
    if (issues.multipleH1.length > 5) {
      console.log('  ' + colors.dim + '... and ' + (issues.multipleH1.length - 5) + ' more' + colors.reset);
    }
    console.log();
  }

  if (issues.titleIssues.length > 0) {
    hasIssues = true;
    console.log(colors.yellow + 'Title tag issues: ' + issues.titleIssues.length + colors.reset);
    const shown = issues.titleIssues.slice(0, 5);
    for (const issue of shown) {
      console.log('  ' + colors.dim + issue.file + ': ' + issue.issue + colors.reset);
    }
    if (issues.titleIssues.length > 5) {
      console.log('  ' + colors.dim + '... and ' + (issues.titleIssues.length - 5) + ' more' + colors.reset);
    }
    console.log();
  }

  if (issues.missingDescription.length > 0) {
    hasIssues = true;
    console.log(colors.yellow + 'Pages missing meta description: ' + issues.missingDescription.length + colors.reset);
    const shown = issues.missingDescription.slice(0, 3);
    for (const file of shown) {
      console.log('  ' + colors.dim + file + colors.reset);
    }
    if (issues.missingDescription.length > 3) {
      console.log('  ' + colors.dim + '... and ' + (issues.missingDescription.length - 3) + ' more' + colors.reset);
    }
    console.log();
  }

  if (issues.missingOG.length > 0) {
    hasIssues = true;
    console.log(colors.yellow + 'Pages missing Open Graph tags: ' + issues.missingOG.length + colors.reset);
    const shown = issues.missingOG.slice(0, 5);
    for (const issue of shown) {
      console.log('  ' + colors.dim + issue.file + ': missing ' + issue.missing.join(', ') + colors.reset);
    }
    if (issues.missingOG.length > 5) {
      console.log('  ' + colors.dim + '... and ' + (issues.missingOG.length - 5) + ' more' + colors.reset);
    }
    console.log();
  }

  if (issues.missingCanonical.length > 0) {
    hasIssues = true;
    console.log(colors.yellow + 'Pages missing canonical URL: ' + issues.missingCanonical.length + colors.reset);
    const shown = issues.missingCanonical.slice(0, 3);
    for (const file of shown) {
      console.log('  ' + colors.dim + file + colors.reset);
    }
    if (issues.missingCanonical.length > 3) {
      console.log('  ' + colors.dim + '... and ' + (issues.missingCanonical.length - 3) + ' more' + colors.reset);
    }
    console.log();
  }

  // Summary
  const totalIssues = issues.missingH1.length + issues.multipleH1.length +
                      issues.titleIssues.length + issues.missingDescription.length +
                      issues.missingOG.length + issues.missingCanonical.length;

  if (!hasIssues) {
    console.log(colors.green + '✓ No SEO issues found' + colors.reset);
  } else {
    console.log(colors.yellow + '⚠ Found ' + totalIssues + ' SEO issue(s) to review' + colors.reset);
  }

  // Return 0 - these are warnings, not errors
  return 0;
}

process.exitCode = checkSEO();
