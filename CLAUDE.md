# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vouch Mobile marketing website - a static site for an AT&T MVNO (Mobile Virtual Network Operator) offering unlimited phone plans. Built with Eleventy (11ty) static site generator using Nunjucks templating.

## Commands

```bash
npm install          # Install dependencies
npm run build        # Build site to _site/
npm start            # Dev server with hot reload at localhost:8080
npm run clean        # Remove _site/ build folder
```

**Node version:** 20.x (specified in `.nvmrc` and `package.json`)

## Architecture

### Directory Structure
- `src/` - Source files (Eleventy input)
- `_site/` - Build output (tracked in git for Sevalla deployment)
- `.eleventy.js` - Eleventy configuration

### Templating System
- **Base layout:** `src/_includes/base.njk` - HTML shell with header/footer
- **Page layouts:** `post.njk`, `state.njk`, `compare.njk` - extend base.njk
- **Partials:** `header.njk`, `footer.njk`, `savings-calculator.njk`

### Data-Driven Content
JSON files in `src/_data/` are globally available in templates:
- `site.json` - Site metadata, pricing plans
- `states.json` - State coverage data → generates `/coverage/{state}/` pages
- `competitors.json` - Competitor data → generates `/compare/vouch-vs-{competitor}/` pages
- `faqs.json` - FAQ content

### Collections (defined in .eleventy.js)
- `posts` - Blog posts from `src/blog/posts/*.md`
- `states` - Pages using `layout: state.njk`
- `competitors` - Pages using `layout: compare.njk`

### Available Filters & Shortcodes
- `{{ date | readableDate }}` - Format date as "January 1, 2024"
- `{{ date | isoDate }}` - ISO format for sitemap
- `{{ text | slug }}` - URL-safe slugs
- `{% year %}` - Current year

## Deployment

**Host:** Sevalla (static site hosting)

The CI builds locally in GitHub Actions and pushes pre-built `_site/` to the repo. Sevalla serves files directly without building (their npm has a cache bug).

### CI Workflow (`.github/workflows/deploy.yml`)
1. **Build & Validate** - Runs `npm run build`, uploads artifacts
2. **Monitor Sevalla Deployment** - Triggers deploy via Sevalla API, waits for completion
3. **Notifications** - Optional Slack/Discord alerts

### Required GitHub Secrets
- `SEVALLA_TOKEN` - Sevalla API key
- `SEVALLA_STATIC_SITE_ID` - Site ID (e.g., `ss_xxxxx`)

### After Making Changes
1. Run `npm run build` locally
2. Commit both source changes AND `_site/` changes
3. Push to `main` - CI will deploy automatically

## Content Guidelines

**IMPORTANT:** All new content must follow the SEO guidelines documented in:

📄 **[docs/seo-content-guidelines.md](docs/seo-content-guidelines.md)**

This document covers:
- Page structure (inverted pyramid for AI citations)
- Content length by page type
- Heading hierarchy (H1-H6 rules)
- Keyword placement and density
- Image SEO (alt text, file naming, srcset)
- FAQ implementation with schema
- Listicle formatting
- Schema markup requirements by page type
- Internal linking strategy
- Topic cluster architecture
- AI Overviews optimization
- E-E-A-T signals
- Pre-publish checklist

### Schema Validation

```bash
npm run validate:schema    # Validate all page schemas
npm run build:validate     # Build + validate in one step
```

Schema is implemented via `{% block schema %}` in templates. See existing pages for examples.
