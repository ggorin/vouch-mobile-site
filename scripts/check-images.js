#!/usr/bin/env node
/**
 * Image Audit Script
 * Checks for image best practices in built HTML files
 *
 * Checks:
 * - Raw <img> tags for JPG/PNG that should use {% image %} shortcode
 * - Missing alt text
 * - Images without width/height (causes CLS)
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

function checkImages() {
  console.log(colors.cyan + 'Image Audit' + colors.reset + '\n');

  if (!fs.existsSync(SITE_DIR)) {
    console.log(colors.yellow + 'Warning: _site directory not found. Run npm run build first.' + colors.reset);
    return 0;
  }

  const htmlFiles = findHtmlFiles(SITE_DIR);
  console.log(colors.dim + 'Scanning ' + htmlFiles.length + ' HTML files...' + colors.reset + '\n');

  const issues = {
    rawImgTags: [],
    missingAlt: [],
    missingDimensions: [],
  };

  // Regex to find img tags
  const imgTagRegex = /<img\s+[^>]*>/gi;
  const srcRegex = /src=["']([^"']+)["']/i;
  const altRegex = /alt=["']([^"']*)["']/i;
  const widthRegex = /width=["']?(\d+)/i;
  const heightRegex = /height=["']?(\d+)/i;

  for (const file of htmlFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(SITE_DIR, file);

    let match;
    while ((match = imgTagRegex.exec(content)) !== null) {
      const imgTag = match[0];
      const srcMatch = imgTag.match(srcRegex);
      const altMatch = imgTag.match(altRegex);
      const hasWidth = widthRegex.test(imgTag);
      const hasHeight = heightRegex.test(imgTag);

      if (!srcMatch) continue;
      const src = srcMatch[1];

      // Skip external images, data URIs, SVGs, and logos
      if (src.startsWith('http') || src.startsWith('data:') || src.endsWith('.svg')) {
        continue;
      }

      // Skip logos (intentionally small, don't need {% image %} optimization)
      if (src.includes('logo')) {
        continue;
      }

      // Check for raw JPG/PNG that should use {% image %} shortcode
      // The shortcode generates <picture> tags with srcset, so raw <img> with .jpg/.png is suspicious
      const isRasterImage = /\.(jpg|jpeg|png|webp)$/i.test(src);
      const hasSrcset = /srcset=/i.test(imgTag);
      const isInPicture = content.substring(Math.max(0, match.index - 100), match.index).includes('<picture');

      if (isRasterImage && !hasSrcset && !isInPicture) {
        issues.rawImgTags.push({
          file: relativePath,
          src: src,
          tag: imgTag.substring(0, 80) + (imgTag.length > 80 ? '...' : ''),
        });
      }

      // Check for missing alt text
      if (!altMatch) {
        issues.missingAlt.push({
          file: relativePath,
          src: src,
        });
      }

      // Check for missing dimensions (causes layout shift)
      if (!hasWidth || !hasHeight) {
        // Only warn for images that aren't using responsive techniques
        if (!hasSrcset && isRasterImage) {
          issues.missingDimensions.push({
            file: relativePath,
            src: src,
            hasWidth,
            hasHeight,
          });
        }
      }
    }
  }

  // Report results
  let hasIssues = false;

  if (issues.rawImgTags.length > 0) {
    hasIssues = true;
    console.log(colors.yellow + 'Raw <img> tags (should use {% image %} shortcode): ' + issues.rawImgTags.length + colors.reset);
    const shown = issues.rawImgTags.slice(0, 5);
    for (const issue of shown) {
      console.log('  ' + colors.dim + issue.file + colors.reset);
      console.log('    src: ' + issue.src);
    }
    if (issues.rawImgTags.length > 5) {
      console.log('  ' + colors.dim + '... and ' + (issues.rawImgTags.length - 5) + ' more' + colors.reset);
    }
    console.log();
  }

  if (issues.missingAlt.length > 0) {
    hasIssues = true;
    console.log(colors.yellow + 'Images missing alt text: ' + issues.missingAlt.length + colors.reset);
    const shown = issues.missingAlt.slice(0, 5);
    for (const issue of shown) {
      console.log('  ' + colors.dim + issue.file + ': ' + issue.src + colors.reset);
    }
    if (issues.missingAlt.length > 5) {
      console.log('  ' + colors.dim + '... and ' + (issues.missingAlt.length - 5) + ' more' + colors.reset);
    }
    console.log();
  }

  if (issues.missingDimensions.length > 0) {
    hasIssues = true;
    console.log(colors.yellow + 'Images missing width/height (causes CLS): ' + issues.missingDimensions.length + colors.reset);
    const shown = issues.missingDimensions.slice(0, 5);
    for (const issue of shown) {
      const missing = [];
      if (!issue.hasWidth) missing.push('width');
      if (!issue.hasHeight) missing.push('height');
      console.log('  ' + colors.dim + issue.file + ': ' + issue.src + ' (missing: ' + missing.join(', ') + ')' + colors.reset);
    }
    if (issues.missingDimensions.length > 5) {
      console.log('  ' + colors.dim + '... and ' + (issues.missingDimensions.length - 5) + ' more' + colors.reset);
    }
    console.log();
  }

  // Summary
  const totalIssues = issues.rawImgTags.length + issues.missingAlt.length + issues.missingDimensions.length;

  if (!hasIssues) {
    console.log(colors.green + '✓ No image issues found' + colors.reset);
  } else {
    console.log(colors.yellow + '⚠ Found ' + totalIssues + ' image issue(s) to review' + colors.reset);
  }

  // Return 0 (success) - these are warnings, not errors
  return 0;
}

process.exitCode = checkImages();
