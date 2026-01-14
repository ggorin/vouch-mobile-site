#!/usr/bin/env node
/**
 * Schema.org JSON-LD Validator
 * Extracts and validates structured data from built HTML files
 */

const fs = require('fs');
const path = require('path');

const SITE_DIR = path.join(__dirname, '..', '_site');

// Schema.org type requirements
const SCHEMA_REQUIREMENTS = {
  'Organization': ['name', 'url'],
  'LocalBusiness': ['name'],
  'FAQPage': ['mainEntity'],
  'Question': ['name', 'acceptedAnswer'],
  'BlogPosting': ['headline', 'datePublished'],
  'Product': ['name'],
  'WebPage': ['name'],
  'WebSite': ['name', 'url'],
  'BreadcrumbList': ['itemListElement'],
  'ContactPage': ['name'],
  'AboutPage': ['name'],
  'Offer': ['price', 'priceCurrency'],
};

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  dim: '\x1b[2m',
};

function findHtmlFiles(dir, files = []) {
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

function extractJsonLd(html) {
  const schemas = [];
  const regex = /<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    schemas.push(match[1]);
  }
  return schemas;
}

function getTypes(obj) {
  if (!obj) return [];
  const type = obj['@type'];
  if (Array.isArray(type)) return type;
  if (type) return [type];
  return [];
}

function validateSchema(schema, filePath) {
  const errors = [];
  const warnings = [];

  // Check @context
  if (!schema['@context'] || !schema['@context'].includes('schema.org')) {
    errors.push('Missing or invalid @context (should include schema.org)');
  }

  // Validate each type in @graph or root
  const items = schema['@graph'] || [schema];

  for (const item of items) {
    const types = getTypes(item);

    for (const type of types) {
      const required = SCHEMA_REQUIREMENTS[type];
      if (required) {
        for (const prop of required) {
          if (item[prop] === undefined) {
            warnings.push(`${type}: Missing recommended property "${prop}"`);
          }
        }
      }

      // Check for @id on important types (entity graph best practice)
      if (['Organization', 'LocalBusiness', 'WebSite'].includes(type)) {
        if (!item['@id']) {
          warnings.push(`${type}: Missing @id (recommended for entity graph linking)`);
        }
      }
    }

    // Recursively check nested items
    if (item.mainEntity) {
      const nested = Array.isArray(item.mainEntity) ? item.mainEntity : [item.mainEntity];
      for (const n of nested) {
        const nestedTypes = getTypes(n);
        for (const type of nestedTypes) {
          const required = SCHEMA_REQUIREMENTS[type];
          if (required) {
            for (const prop of required) {
              if (n[prop] === undefined) {
                warnings.push(`${type}: Missing recommended property "${prop}"`);
              }
            }
          }
        }
      }
    }
  }

  return { errors, warnings };
}

function main() {
  console.log(`\n${colors.cyan}Schema.org JSON-LD Validator${colors.reset}\n`);

  if (!fs.existsSync(SITE_DIR)) {
    console.error(`${colors.red}Error: _site directory not found. Run 'npm run build' first.${colors.reset}`);
    process.exit(1);
  }

  const htmlFiles = findHtmlFiles(SITE_DIR);
  console.log(`${colors.dim}Found ${htmlFiles.length} HTML files${colors.reset}\n`);

  let totalSchemas = 0;
  let validSchemas = 0;
  let filesWithSchema = 0;
  let filesWithoutSchema = [];
  const allErrors = [];
  const allWarnings = [];

  for (const file of htmlFiles) {
    const relativePath = path.relative(SITE_DIR, file);
    const html = fs.readFileSync(file, 'utf8');
    const jsonLdBlocks = extractJsonLd(html);

    if (jsonLdBlocks.length === 0) {
      // Only flag main content pages, not feeds/sitemaps
      if (!relativePath.includes('feed') && !relativePath.includes('sitemap') &&
          !relativePath.includes('compare/index') && !relativePath.includes('blog/index')) {
        filesWithoutSchema.push(relativePath);
      }
      continue;
    }

    filesWithSchema++;

    for (const jsonLd of jsonLdBlocks) {
      totalSchemas++;

      // Parse JSON
      let schema;
      try {
        schema = JSON.parse(jsonLd);
      } catch (e) {
        allErrors.push({ file: relativePath, error: `Invalid JSON: ${e.message}` });
        continue;
      }

      // Validate schema
      const { errors, warnings } = validateSchema(schema, relativePath);

      if (errors.length === 0) {
        validSchemas++;
      }

      for (const err of errors) {
        allErrors.push({ file: relativePath, error: err });
      }
      for (const warn of warnings) {
        allWarnings.push({ file: relativePath, warning: warn });
      }
    }
  }

  // Print results
  console.log(`${colors.cyan}Results:${colors.reset}`);
  console.log(`  Files with schema: ${filesWithSchema}`);
  console.log(`  Total schemas: ${totalSchemas}`);
  console.log(`  Valid schemas: ${colors.green}${validSchemas}${colors.reset}`);

  if (allErrors.length > 0) {
    console.log(`\n${colors.red}Errors (${allErrors.length}):${colors.reset}`);
    for (const { file, error } of allErrors) {
      console.log(`  ${colors.dim}${file}${colors.reset}: ${error}`);
    }
  }

  if (allWarnings.length > 0) {
    console.log(`\n${colors.yellow}Warnings (${allWarnings.length}):${colors.reset}`);
    // Group warnings by type to reduce noise
    const groupedWarnings = {};
    for (const { file, warning } of allWarnings) {
      if (!groupedWarnings[warning]) {
        groupedWarnings[warning] = [];
      }
      groupedWarnings[warning].push(file);
    }
    for (const [warning, files] of Object.entries(groupedWarnings)) {
      if (files.length > 3) {
        console.log(`  ${warning} ${colors.dim}(${files.length} files)${colors.reset}`);
      } else {
        console.log(`  ${warning} ${colors.dim}[${files.join(', ')}]${colors.reset}`);
      }
    }
  }

  if (filesWithoutSchema.length > 0 && filesWithoutSchema.length <= 5) {
    console.log(`\n${colors.yellow}Pages without schema:${colors.reset}`);
    for (const file of filesWithoutSchema) {
      console.log(`  ${colors.dim}${file}${colors.reset}`);
    }
  }

  // Summary
  console.log('\n' + '─'.repeat(50));
  if (allErrors.length === 0) {
    console.log(`${colors.green}✓ All schemas are valid JSON-LD${colors.reset}`);
  } else {
    console.log(`${colors.red}✗ ${allErrors.length} schema errors found${colors.reset}`);
    process.exit(1);
  }

  console.log(`\n${colors.dim}For full validation, test with:${colors.reset}`);
  console.log(`  ${colors.dim}https://search.google.com/test/rich-results${colors.reset}`);
  console.log(`  ${colors.dim}https://validator.schema.org/${colors.reset}\n`);
}

main();
