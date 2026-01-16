# Vouch Mobile SEO Content - Remaining Work

**Last Updated:** January 16, 2026
**Total Remaining Pages:** 39 pages
**Estimated Effort:** 2-3 weeks

---

## Summary of Completed Work

| Section | Completed | Total | Status |
|---------|-----------|-------|--------|
| State Pages | 50 | 50 | ✅ Done |
| Metro Pages | 5 | 5 | ✅ Done |
| Comparison Pages (vs) | 12 | 12 | ✅ Done |
| Alternatives Pages | 3 | 8 | 🔄 37% |
| Glossary/Learn Pages | 10 | 10 | ✅ Done |
| Guide Pages | 5 | 15 | 🔄 33% |
| Commercial Intent Pages | 3 | 10 | 🔄 30% |
| Lifestyle Content | 0 | 15 | ❌ 0% |
| Tools | 3 | 5 | 🔄 60% |

---

## SECTION 1: Alternatives Pages (5 remaining)

These pages target users searching for "alternatives to [carrier]". They follow a listicle format ranking Vouch as #1.

### Pages to Create

| # | Page | URL | Target Keywords |
|---|------|-----|-----------------|
| 1 | Cricket Alternatives | `/alternatives/cricket-alternatives/` | cricket alternatives 2026 |
| 2 | Mint Mobile Alternatives | `/alternatives/mint-mobile-alternatives/` | mint mobile alternatives |
| 3 | Metro Alternatives | `/alternatives/metro-alternatives/` | metro by tmobile alternatives |
| 4 | Visible Alternatives | `/alternatives/visible-alternatives/` | visible alternatives |
| 5 | Boost Alternatives | `/alternatives/boost-alternatives/` | boost mobile alternatives |

### How to Create

1. **Add data to `src/_data/carriers.json`**:
   ```json
   {
     "name": "Cricket Wireless",
     "slug": "cricket-alternatives",
     "network": "AT&T",
     "tagline": "...",
     "originalPrice": "...",
     "painPoints": [...],
     "alternatives": [...],
     "faqs": [...]
   }
   ```

2. **Follow the pattern from existing entries** (AT&T, Verizon, T-Mobile in carriers.json)

3. **Required fields for each carrier**:
   - `name`: Full carrier name
   - `slug`: URL slug (e.g., "cricket-alternatives")
   - `network`: Which network they use
   - `tagline`: Hook for the hero section
   - `originalPrice`: Their typical price
   - `painPoints`: Array of 4 pain points with title/description
   - `alternatives`: Array of 4 alternatives (Vouch as #1)
   - `faqs`: Array of 5 relevant FAQs

4. **Pages are auto-generated** via `src/alternatives/alternatives.njk` template

---

## SECTION 2: Guide Pages (10 remaining)

Blog-style guide content that builds topical authority. Currently written as Markdown files in `src/blog/posts/`.

### Pages to Create

| # | Page | URL | Target Keywords |
|---|------|-----|-----------------|
| 1 | How to Port Your Phone Number | `/blog/posts/port-phone-number/` | port phone number, transfer phone number |
| 2 | How to Unlock Your Phone | `/blog/posts/unlock-phone/` | how to unlock phone, carrier unlock |
| 3 | Understanding Phone Plan Data | `/blog/posts/phone-plan-data-explained/` | how much data do i need |
| 4 | Prepaid vs Postpaid Plans | `/blog/posts/prepaid-vs-postpaid/` | prepaid vs postpaid |
| 5 | How to Save Money on Phone Bills | `/blog/posts/save-money-phone-bill/` | save money phone bill |
| 6 | Best Phones for Prepaid Plans | `/blog/posts/best-phones-prepaid/` | best prepaid phones |
| 7 | Phone Plan for Bad Credit | `/blog/posts/phone-plans-bad-credit/` | phone plans bad credit |
| 8 | First Phone Plan Guide | `/blog/posts/first-phone-plan/` | first phone plan |
| 9 | Phone Plans for Seniors | `/blog/posts/phone-plans-seniors/` | senior phone plans |
| 10 | Family Phone Plan Alternatives | `/blog/posts/family-plan-alternatives/` | cheap family phone plans |

### How to Create

1. **Create new Markdown file** in `src/blog/posts/[slug].md`

2. **Use this frontmatter template**:
   ```yaml
   ---
   title: "[Page Title]"
   description: "[Meta description under 160 chars]"
   date: 2026-01-XX
   layout: post.njk
   tags: posts
   ---
   ```

3. **Content requirements** (from SEO guidelines):
   - 1,000+ words minimum
   - H1 with primary keyword
   - 3-5 internal links to related pages
   - 3-5 external links to authoritative sources
   - FAQ section with 5-8 questions
   - Clear CTA to Vouch at the end

4. **Follow existing post patterns** - see `src/blog/posts/switch-carriers.md` for reference

---

## SECTION 3: Commercial Intent Pages (7 remaining)

High-converting plan-focused pages targeting purchase-intent keywords.

### Pages to Create

| # | Page | URL | Target Keywords |
|---|------|-----|-----------------|
| 1 | No Contract Phone Plans | `/plans/no-contract/` | no contract phone plans |
| 2 | Cheapest Unlimited Data Plans | `/plans/cheapest-unlimited/` | cheapest unlimited data |
| 3 | Phone Plans with Hotspot | `/plans/hotspot-plans/` | phone plans with hotspot |
| 4 | Pay As You Go Plans | `/plans/pay-as-you-go/` | pay as you go phone plans |
| 5 | Talk and Text Only Plans | `/plans/talk-text-only/` | talk and text plans |
| 6 | Single Line Phone Plans | `/plans/single-line/` | single line phone plan |
| 7 | AT&T Network Plans | `/plans/att-network/` | att network plans, att mvno |

### How to Create

1. **Add data to `src/_data/plansData.json`**:
   ```json
   {
     "slug": "no-contract",
     "title": "No Contract Phone Plans 2026",
     "metaDescription": "...",
     "heroTitle": "...",
     "heroSubtitle": "...",
     "badge": "...",
     "heroStats": [...],
     "plansTitle": "...",
     "plansSubtitle": "...",
     "tiers": [...],
     "includedTitle": "...",
     "includedSubtitle": "...",
     "includedFeatures": [...],
     "faqs": [...],
     "testimonials": [...],
     "ctaTitle": "...",
     "ctaText": "..."
   }
   ```

2. **Follow existing patterns** in plansData.json (unlimited-under-30, prepaid-unlimited, 5g-affordable)

3. **Pages are auto-generated** via `src/plans/plans-page.njk` template

4. **Each page needs**:
   - Unique hero section with relevant stats
   - 3 plan tiers (can reuse existing)
   - 6 included features
   - 5-6 FAQs specific to the keyword
   - 3 testimonials
   - Strong CTA section

---

## SECTION 4: Lifestyle Content (15 remaining)

Shareable content for links and social targeting specific audiences.

### Lifestyle/Situational Pages (8 pages)

| # | Page | URL | Target Keywords |
|---|------|-----|-----------------|
| 1 | Phone Plans for College Students | `/blog/college-student-phone-plans/` | college student phone plan |
| 2 | Phone Plans for Gig Workers | `/blog/gig-worker-phone-plans/` | uber driver phone plan |
| 3 | Phone Plans for Travelers | `/blog/traveler-phone-plans/` | phone plan for travel |
| 4 | Phone Plans for Remote Workers | `/blog/remote-worker-phone-plans/` | work from home phone plan |
| 5 | Phone Plans for Small Business | `/blog/small-business-phone-plans/` | small business cell phone |
| 6 | Phone Plans for New Americans | `/blog/new-americans-phone-plans/` | immigrant phone plan |
| 7 | Phone Plans for Parents | `/blog/parent-phone-plans/` | phone plan for kids |
| 8 | Best Budget Phone Tips | `/blog/budget-phone-tips/` | save money phone |

### Seasonal/Trend Pages (7 pages)

| # | Page | URL | Target Keywords |
|---|------|-----|-----------------|
| 9 | Black Friday Phone Deals | `/blog/black-friday-phone-deals/` | black friday phone plans |
| 10 | New Year Phone Plan Savings | `/blog/new-year-phone-savings/` | new year resolution save |
| 11 | Back to School Phone Plans | `/blog/back-to-school-phone/` | back to school phone |
| 12 | Tax Refund Phone Upgrade | `/blog/tax-refund-phone/` | tax refund phone |
| 13 | Summer Travel Phone Tips | `/blog/summer-travel-phone/` | summer travel phone plan |
| 14 | Holiday Gift: Phone Plan | `/blog/gift-phone-plan/` | gift phone plan |
| 15 | 2026 Phone Plan Trends | `/blog/2026-phone-plan-trends/` | phone plans 2026 |

### How to Create

1. **Create Markdown file** in `src/blog/posts/[slug].md`

2. **Frontmatter**:
   ```yaml
   ---
   title: "[Title]"
   description: "[Meta description]"
   date: 2026-01-XX
   layout: post.njk
   tags: posts
   ---
   ```

3. **Content focus**:
   - Audience-specific pain points
   - Why Vouch solves their unique needs
   - Real examples and scenarios
   - Cost comparisons relevant to audience
   - Strong CTA tailored to audience

4. **Note**: Seasonal content should be published at appropriate times (Black Friday in November, etc.)

---

## SECTION 5: Interactive Tools (2 remaining)

JavaScript-powered tools that provide utility and capture leads.

### Tools to Create

| # | Tool | URL | Purpose |
|---|------|-----|---------|
| 1 | Coverage Checker | `/tools/coverage-checker/` | Check coverage by ZIP code |
| 2 | Phone Unlock Status Checker | `/tools/unlock-checker/` | Check if phone is unlocked |

### How to Create

1. **Add data to `src/_data/tools.json`**:
   ```json
   {
     "slug": "coverage-checker",
     "name": "Coverage Checker",
     "shortName": "Coverage Checker",
     "tagline": "Check coverage in your area",
     "description": "...",
     "metaDescription": "...",
     "icon": "map-pin",
     "category": "Coverage",
     "estimatedTime": "1 minute",
     "features": [...],
     "howToSteps": [...],
     "whyMatters": {...},
     "faqs": [...],
     "relatedTools": [...]
   }
   ```

2. **Create JavaScript file** in `src/js/tools/[slug].js`

3. **Tool page template** at `src/tools/tools.njk` auto-generates pages

4. **Implementation notes**:
   - **Coverage Checker**: Could integrate with a coverage API or use ZIP code lookup table with AT&T coverage data
   - **Unlock Checker**: Provide step-by-step instructions based on phone model selection, not actual IMEI lookup (privacy concerns)

---

## Priority Order for Remaining Work

### High Priority (Week 1)
1. **5 Alternatives Pages** - High commercial intent, data-driven (easy to add)
2. **No Contract Plans Page** - High search volume keyword
3. **Cheapest Unlimited Plans Page** - High search volume keyword

### Medium Priority (Week 2)
4. **Remaining 5 Commercial Intent Pages**
5. **Port Phone Number Guide** - Supports conversion funnel
6. **Unlock Phone Guide** - Supports conversion funnel
7. **Coverage Checker Tool** - High utility

### Lower Priority (Week 3+)
8. **Remaining Guide Pages** (8 pages)
9. **Lifestyle Content** (15 pages) - Can be rolled out over time
10. **Unlock Status Checker Tool**

---

## Technical Notes

### Data-Driven Pages
These pages are auto-generated from JSON data files:
- States → `src/_data/states.json`
- Metros → `src/_data/metros.json`
- Competitors → `src/_data/competitors.json`
- Carriers/Alternatives → `src/_data/carriers.json`
- Glossary/Learn → `src/_data/glossary.json`
- Plans → `src/_data/plansData.json`
- Tools → `src/_data/tools.json`

### Manual Pages
These are individual Markdown or Nunjucks files:
- Blog posts → `src/blog/posts/*.md`
- Custom pages → `src/*.njk`

### Build & Deploy
```bash
npm run build        # Build site
npm start           # Dev server
git add . && git commit -m "..." && git push  # Deploy
```

---

## Content Quality Checklist

Before publishing any page:

- [ ] 800+ words (1000+ for guides)
- [ ] Unique, non-templated content
- [ ] Primary keyword in H1
- [ ] 3-5 internal links
- [ ] 3-5 external links to authoritative sources
- [ ] FAQ section with schema
- [ ] Meta title under 60 characters
- [ ] Meta description under 160 characters
- [ ] Mobile-responsive
- [ ] Clear CTA to Vouch

---

## FRONTEND DESIGN SYSTEM

The Vouch Mobile site uses a **Bold, Confident, Approachable** aesthetic with distinctive design choices that avoid generic AI patterns.

### Design Tokens (CSS Variables)

```css
/* Typography */
--font-display: 'Clash Display'   /* Headings - bold geometric sans */
--font-body: 'Satoshi'            /* Body - clean humanist sans */

/* Primary Colors */
--color-primary: #00B5A0          /* Teal - confident, fresh */
--color-primary-hover: #009D8B
--color-primary-glow: rgba(0, 181, 160, 0.3)

/* Accent Colors */
--color-accent: #FF6B4A           /* Coral - warm, energetic */
--color-accent-light: rgba(255, 107, 74, 0.1)

/* Dark Theme */
--color-bg: #0F172A               /* Deep navy background */
--color-primary: #2DD4BF          /* Lighter teal for dark mode */

/* Effects */
--shadow-glow: 0 0 20px var(--color-primary-glow)
--radius-2xl: 1.5rem
--transition-bounce: 500ms cubic-bezier(0.34, 1.56, 0.64, 1)
```

### Core Component Patterns

#### Hero Sections (Reuse Across Page Types)
```html
<section class="[page]-hero">
  <div class="[page]-hero__bg">
    <div class="[page]-hero__gradient"></div>
    <div class="[page]-hero__orbs">
      <div class="[page]-hero__orb [page]-hero__orb--1"></div>
      <div class="[page]-hero__orb [page]-hero__orb--2"></div>
      <div class="[page]-hero__orb [page]-hero__orb--3"></div>
    </div>
    <div class="[page]-hero__grid"></div>
  </div>
  <div class="container">
    <!-- breadcrumb, badge, title, subtitle, stats, scroll CTA -->
  </div>
</section>
```

#### Visual Effects
- **Floating orbs**: Animated gradient circles with blur
- **Grid overlay**: Subtle line pattern for depth
- **Glassmorphism**: `rgba(255, 255, 255, 0.9)` + backdrop-blur
- **Glow shadows**: Primary color glow on interactive elements
- **Staggered animations**: Use `--delay: {{ loop.index * 0.1 }}s`

#### Card Components
```html
<div class="[type]-card {% if featured %}[type]-card--featured{% endif %}">
  <div class="[type]-card__badge">Featured</div>
  <h3 class="[type]-card__title">Title</h3>
  <p class="[type]-card__desc">Description</p>
  <div class="[type]-card__features">...</div>
  <a class="btn btn--primary">CTA</a>
</div>
```

#### Section Pattern
```html
<section class="[section-name]">
  <div class="container">
    <div class="[section-name]__header">
      <span class="section-tag">Tag</span>
      <h2 class="[section-name]__title">Title</h2>
      <p class="[section-name]__subtitle">Subtitle</p>
    </div>
    <div class="[section-name]__grid">
      <!-- content -->
    </div>
  </div>
</section>
```

### Animation Guidelines

```css
/* Entry animations - stagger on scroll */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Hover states - subtle bounce */
.card:hover { transform: translateY(-4px) scale(1.02); }

/* Glow pulse on primary elements */
@keyframes glowPulse {
  0%, 100% { box-shadow: var(--shadow-glow); }
  50% { box-shadow: 0 0 30px var(--color-primary-glow); }
}
```

---

## OPTIMIZED SUB-AGENT WORKFLOW

Use parallel sub-agents to maximize throughput. Group work by **data file** to minimize conflicts.

### Batch Strategy

```
┌─────────────────────────────────────────────────────────────────┐
│                    PARALLEL EXECUTION PLAN                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  BATCH 1 (Parallel - No Dependencies)                           │
│  ├── Agent A: carriers.json (5 alternatives)                    │
│  ├── Agent B: plansData.json (7 commercial pages)               │
│  └── Agent C: tools.json (2 tools)                              │
│                                                                  │
│  BATCH 2 (Parallel - Blog Posts, No Conflicts)                  │
│  ├── Agent D: Guide posts 1-5 (port, unlock, data, prepaid, save)│
│  └── Agent E: Guide posts 6-10 (phones, credit, first, senior, family)│
│                                                                  │
│  BATCH 3 (Parallel - Lifestyle Content)                         │
│  ├── Agent F: Lifestyle posts 1-8                               │
│  └── Agent G: Seasonal posts 9-15                               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Sub-Agent Task Templates

#### Agent A: Alternatives Pages (carriers.json)
```
TASK: Add 5 carrier alternatives to src/_data/carriers.json

CARRIERS TO ADD:
1. Cricket Wireless (slug: cricket-alternatives)
2. Mint Mobile (slug: mint-mobile-alternatives)
3. Metro by T-Mobile (slug: metro-alternatives)
4. Visible (slug: visible-alternatives)
5. Boost Mobile (slug: boost-alternatives)

PATTERN: Follow existing AT&T/Verizon/T-Mobile entries exactly

REQUIRED FIELDS PER CARRIER:
- name, slug, network, tagline, originalPrice
- painPoints: Array of 4 {title, description}
- alternatives: Array of 4 with Vouch as rank 1
- faqs: Array of 5 {question, answer}

RESEARCH: Use competitors.json for pricing/feature data
OUTPUT: Valid JSON appended to carriers.json array
```

#### Agent B: Commercial Intent Pages (plansData.json)
```
TASK: Add 7 plan pages to src/_data/plansData.json

PAGES TO ADD:
1. no-contract (No Contract Phone Plans)
2. cheapest-unlimited (Cheapest Unlimited Data)
3. hotspot-plans (Phone Plans with Hotspot)
4. pay-as-you-go (Pay As You Go Plans)
5. talk-text-only (Talk and Text Only Plans)
6. single-line (Single Line Phone Plans)
7. att-network (AT&T Network Plans)

PATTERN: Follow existing unlimited-under-30 structure exactly

REQUIRED FIELDS:
- slug, title, metaDescription, heroTitle, heroSubtitle, badge
- heroStats: Array of 3 {value, label}
- tiers: Array of 3 plans (can adapt existing)
- includedFeatures: Array of 6 {name, description, icon}
- faqs: Array of 5-6 keyword-specific
- testimonials: Array of 3 {quote, name, plan, rating, savings}
- CTA fields

DESIGN: Each page needs UNIQUE angle matching keyword intent
```

#### Agent C: Interactive Tools (tools.json + JS)
```
TASK: Add 2 tools to src/_data/tools.json and create JS files

TOOLS TO ADD:
1. coverage-checker
   - ZIP code input → coverage quality display
   - Use static coverage data (no API needed)
   - Show: coverage %, 5G availability, nearest tower estimate

2. unlock-checker
   - Device selection (iPhone/Android/Model)
   - Step-by-step unlock instructions
   - Carrier-specific unlock requirements
   - NO actual IMEI lookup (privacy)

PATTERN: Follow existing compatibility-checker structure

JS FILES: Create in src/js/tools/
- coverage-checker.js
- unlock-checker.js

DESIGN: Match existing tool page aesthetic with form inputs
```

#### Agents D-G: Blog Post Batches
```
TASK: Write [X] blog posts in src/blog/posts/

FORMAT: Markdown with YAML frontmatter
WORD COUNT: 1,000-1,500 words each
STRUCTURE:
1. H1 with primary keyword
2. Intro paragraph (problem statement)
3. 3-5 H2 sections with actionable content
4. Comparison table where relevant
5. FAQ section (5-8 questions)
6. CTA to Vouch

INTERNAL LINKS (include 3-5):
- /coverage/ - coverage pages
- /compare/vouch-vs-[competitor]/ - comparisons
- /plans/ - pricing
- /learn/[term]/ - glossary terms
- Other relevant blog posts

EXTERNAL LINKS (include 3-5):
- FCC.gov (regulations)
- Census.gov (demographics)
- Consumer Reports (reviews)
- Industry sources

VOICE: Helpful expert, not salesy. Solve problems first.
```

### Execution Commands

```bash
# Launch parallel sub-agents (example)
claude --task "Agent A" --file carriers.json &
claude --task "Agent B" --file plansData.json &
claude --task "Agent C" --file tools.json &
wait

# Validate JSON after each batch
npm run build

# Then launch blog post agents
claude --task "Agent D" --files "port,unlock,data,prepaid,save" &
claude --task "Agent E" --files "phones,credit,first,senior,family" &
wait
```

### Conflict Prevention Rules

1. **One agent per JSON file** - Never have two agents edit the same data file
2. **Blog posts are safe to parallelize** - Each is a separate file
3. **Validate between batches** - Run `npm run build` to catch JSON errors
4. **CSS changes last** - Only add new CSS after templates are finalized

---

## FRONTEND SPECS BY PAGE TYPE

### Alternatives Pages (5 pages)
**Template:** `src/_includes/alternatives.njk`
**Data:** `src/_data/carriers.json`

**Design Requirements:**
- Hero with floating orbs + gradient background
- Podium-style ranking cards (1st place elevated)
- Pain points section with icon cards
- Side-by-side comparison table
- FAQ accordion with schema
- Strong CTA banner at bottom

**Unique Per Page:**
- Carrier-specific pain points
- Competitor-specific alternatives
- Tailored FAQs

### Commercial Intent Pages (7 pages)
**Template:** `src/_includes/plans-page.njk`
**Data:** `src/_data/plansData.json`

**Design Requirements:**
- Hero with stats badges (price, coverage, features)
- 3-tier pricing cards (one featured with glow)
- "What's Included" feature grid
- Savings calculator embed
- Comparison table vs competitors
- Testimonial carousel
- FAQ section
- Final CTA with urgency

**Unique Per Page:**
- Stats tailored to keyword (e.g., "No Contract" emphasizes flexibility)
- Feature grid emphasizes keyword benefit
- FAQs answer keyword-specific questions

### Guide/Blog Pages (10+ pages)
**Template:** `src/_includes/post.njk`
**Data:** Individual Markdown files

**Design Requirements:**
- Clean article layout with max-width content
- Table of contents sidebar (sticky on scroll)
- Inline callout boxes for tips
- Comparison tables with highlight rows
- Step-by-step numbered lists
- FAQ section at bottom
- Related posts grid
- CTA banner

**Typography:**
- H1: 2.5rem Clash Display
- H2: 1.75rem Clash Display
- Body: 1.125rem Satoshi, 1.7 line-height
- Code blocks: monospace with teal border

### Interactive Tools (2 pages)
**Template:** `src/_includes/tool.njk`
**Data:** `src/_data/tools.json` + JS files

**Design Requirements:**
- Tool interface as hero focal point
- Input fields with focus glow effect
- Real-time results display
- Animated result reveal
- "How to Use" steps below
- "Why This Matters" explainer
- FAQ section
- Related tools grid

**UX Patterns:**
- Large, touch-friendly inputs
- Instant validation feedback
- Loading state with skeleton/pulse
- Success state with confetti/checkmark
- Error state with helpful message

---

## Questions?

Refer to:
- `docs/seo-content-plan.md` - Full SEO strategy
- `docs/seo-content-guidelines.md` - Content quality guidelines
- `docs/seo-research/SOURCES.md` - Approved external link sources
- `docs/seo-research/IMAGE-DESIGN-STRATEGY.md` - Image requirements
- `src/css/styles.css` - Full design system reference
