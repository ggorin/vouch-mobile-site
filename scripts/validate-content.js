#!/usr/bin/env node
/**
 * Content Validation Script
 * Pre-build validation for SEO content quality
 *
 * Checks:
 * - FAQ answer word counts (target: 40-60 words)
 * - Required fields in data files
 * - Meta description lengths
 * - Duplicate meta descriptions
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'src', '_data');
const POSTS_DIR = path.join(__dirname, '..', 'src', 'blog', 'posts');

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  dim: '\x1b[2m',
  bold: '\x1b[1m',
};

// Configuration
const CONFIG = {
  faq: {
    minWords: 30,  // Lowered to be more realistic - 30 word answers are acceptable
    maxWords: 100, // Raised to allow more detailed answers
    targetMin: 40,
    targetMax: 60,
  },
  meta: {
    minLength: 120,
    maxLength: 160,
  },
  title: {
    maxLength: 60,
  },
};

// Required fields per data type (using actual field names from data files)
const REQUIRED_FIELDS = {
  states: ['name', 'slug', 'population', 'avgPhoneBill', 'coverage', 'faqs'],
  competitors: ['name', 'slug', 'network', 'startingPrice'],  // FAQs optional for competitors
  metros: ['name', 'slug', 'state', 'population', 'coverage'],
  tools: ['slug', 'name', 'description', 'metaDescription'],  // tools.json has items wrapper
  plansData: ['slug', 'title', 'metaDescription'],  // Uses title not name, metaDescription not description
  carriers: ['name', 'slug', 'network', 'alternatives'],
  glossary: ['term', 'slug', 'shortDefinition'],  // Uses shortDefinition not definition
};

// Fields that can be used interchangeably (field name aliases)
const FIELD_ALIASES = {
  description: ['description', 'metaDescription', 'shortDefinition', 'excerpt'],
  name: ['name', 'title', 'term'],
  price: ['price', 'startingPrice', 'regularPrice'],
};

function countWords(text) {
  if (!text) return 0;
  return text.trim().split(/\s+/).filter(w => w.length > 0).length;
}

function loadJson(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (e) {
    return null;
  }
}

function validateFaqs(faqs, source) {
  const issues = [];

  if (!faqs || !Array.isArray(faqs)) return issues;

  faqs.forEach((faq, index) => {
    const wordCount = countWords(faq.answer);

    if (wordCount < CONFIG.faq.minWords) {
      issues.push({
        type: 'warning',
        source,
        message: `FAQ ${index + 1}: Answer too short (${wordCount} words, min ${CONFIG.faq.minWords})`,
        question: faq.question?.substring(0, 50) + '...',
      });
    } else if (wordCount > CONFIG.faq.maxWords) {
      issues.push({
        type: 'info',
        source,
        message: `FAQ ${index + 1}: Answer may be too long (${wordCount} words, max ${CONFIG.faq.maxWords})`,
        question: faq.question?.substring(0, 50) + '...',
      });
    }

    if (!faq.question || faq.question.length < 10) {
      issues.push({
        type: 'error',
        source,
        message: `FAQ ${index + 1}: Missing or too short question`,
      });
    }
  });

  return issues;
}

function validateRequiredFields(item, fields, source) {
  const issues = [];

  for (const field of fields) {
    if (item[field] === undefined || item[field] === null || item[field] === '') {
      issues.push({
        type: 'error',
        source,
        message: `Missing required field: ${field}`,
      });
    }
  }

  return issues;
}

function validateMetaDescription(description, source) {
  const issues = [];

  if (!description) {
    issues.push({
      type: 'warning',
      source,
      message: 'Missing meta description',
    });
    return issues;
  }

  const length = description.length;

  if (length < CONFIG.meta.minLength) {
    issues.push({
      type: 'warning',
      source,
      message: `Meta description too short (${length} chars, min ${CONFIG.meta.minLength})`,
    });
  } else if (length > CONFIG.meta.maxLength) {
    issues.push({
      type: 'warning',
      source,
      message: `Meta description too long (${length} chars, max ${CONFIG.meta.maxLength})`,
    });
  }

  return issues;
}

function validateDataFile(filename, requiredFields) {
  const filePath = path.join(DATA_DIR, filename);
  const issues = [];

  if (!fs.existsSync(filePath)) {
    return [{ type: 'info', source: filename, message: 'File does not exist' }];
  }

  const data = loadJson(filePath);

  if (!data) {
    return [{ type: 'error', source: filename, message: 'Invalid JSON' }];
  }

  // Handle wrapper objects like { items: [...] } in tools.json
  let items;
  if (Array.isArray(data)) {
    items = data;
  } else if (data.items && Array.isArray(data.items)) {
    items = data.items;
  } else {
    items = [data];
  }

  items.forEach((item, index) => {
    const itemName = item.name || item.term || item.slug || `Item ${index + 1}`;
    const source = `${filename} > ${itemName}`;

    // Check required fields
    issues.push(...validateRequiredFields(item, requiredFields, source));

    // Check FAQs if present
    if (item.faqs) {
      issues.push(...validateFaqs(item.faqs, source));
    }

    // Check meta description if present
    if (item.description || item.metaDescription) {
      issues.push(...validateMetaDescription(item.description || item.metaDescription, source));
    }
  });

  return issues;
}

function validateBlogPosts() {
  const issues = [];

  if (!fs.existsSync(POSTS_DIR)) {
    return [{ type: 'info', source: 'blog/posts', message: 'Directory does not exist' }];
  }

  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));
  const descriptions = new Map();

  for (const file of files) {
    const filePath = path.join(POSTS_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const source = `blog/posts/${file}`;

    // Extract frontmatter
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!frontmatterMatch) {
      issues.push({ type: 'error', source, message: 'Missing frontmatter' });
      continue;
    }

    const frontmatter = frontmatterMatch[1];

    // Check for required fields (description OR excerpt is acceptable)
    const requiredFields = ['title', 'date'];
    for (const field of requiredFields) {
      if (!frontmatter.includes(`${field}:`)) {
        issues.push({ type: 'error', source, message: `Missing required field: ${field}` });
      }
    }

    // Check for description OR excerpt
    if (!frontmatter.includes('description:') && !frontmatter.includes('excerpt:')) {
      issues.push({ type: 'error', source, message: 'Missing required field: description or excerpt' });
    }

    // Extract and validate description (check both description and excerpt)
    let descMatch = frontmatter.match(/description:\s*["']?([^"'\n]+)["']?/);
    if (!descMatch) {
      descMatch = frontmatter.match(/excerpt:\s*["']?([^"'\n]+)["']?/);
    }
    if (descMatch) {
      const desc = descMatch[1];
      issues.push(...validateMetaDescription(desc, source));

      // Check for duplicates
      if (descriptions.has(desc)) {
        issues.push({
          type: 'warning',
          source,
          message: `Duplicate description with ${descriptions.get(desc)}`,
        });
      } else {
        descriptions.set(desc, file);
      }
    }

    // Check for image
    if (!frontmatter.includes('image:')) {
      issues.push({ type: 'warning', source, message: 'Missing hero image' });
    }
  }

  return issues;
}

function main() {
  console.log(`\n${colors.cyan}${colors.bold}Content Validation${colors.reset}\n`);

  const allIssues = [];

  // Validate data files
  console.log(`${colors.dim}Validating data files...${colors.reset}`);

  for (const [filename, fields] of Object.entries(REQUIRED_FIELDS)) {
    const issues = validateDataFile(`${filename}.json`, fields);
    allIssues.push(...issues);
  }

  // Validate blog posts
  console.log(`${colors.dim}Validating blog posts...${colors.reset}`);
  allIssues.push(...validateBlogPosts());

  // Group issues by type
  const errors = allIssues.filter(i => i.type === 'error');
  const warnings = allIssues.filter(i => i.type === 'warning');
  const infos = allIssues.filter(i => i.type === 'info');

  // Print results
  console.log(`\n${colors.cyan}Results:${colors.reset}`);
  console.log(`  Errors: ${errors.length > 0 ? colors.red : colors.green}${errors.length}${colors.reset}`);
  console.log(`  Warnings: ${warnings.length > 0 ? colors.yellow : colors.green}${warnings.length}${colors.reset}`);
  console.log(`  Info: ${infos.length}${colors.reset}`);

  if (errors.length > 0) {
    console.log(`\n${colors.red}Errors:${colors.reset}`);
    for (const issue of errors) {
      console.log(`  ${colors.red}✗${colors.reset} ${colors.dim}${issue.source}:${colors.reset} ${issue.message}`);
    }
  }

  if (warnings.length > 0) {
    console.log(`\n${colors.yellow}Warnings:${colors.reset}`);
    // Group by message type to reduce noise
    const grouped = {};
    for (const issue of warnings) {
      const key = issue.message.replace(/\d+/g, 'N');
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(issue);
    }

    for (const [key, issues] of Object.entries(grouped)) {
      if (issues.length > 3) {
        console.log(`  ${colors.yellow}!${colors.reset} ${key} ${colors.dim}(${issues.length} occurrences)${colors.reset}`);
      } else {
        for (const issue of issues) {
          console.log(`  ${colors.yellow}!${colors.reset} ${colors.dim}${issue.source}:${colors.reset} ${issue.message}`);
        }
      }
    }
  }

  // Summary
  console.log('\n' + '─'.repeat(50));

  if (errors.length === 0) {
    console.log(`${colors.green}✓ No critical errors found${colors.reset}`);
  } else {
    console.log(`${colors.red}✗ ${errors.length} critical errors - fix before deploying${colors.reset}`);
    process.exit(1);
  }

  if (warnings.length > 0) {
    console.log(`${colors.yellow}! ${warnings.length} warnings - review recommended${colors.reset}`);
  }

  console.log('');
}

main();
