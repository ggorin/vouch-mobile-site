# Vouch Mobile Image Design Strategy

## Brand Visual Identity

### Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Primary | `#00B5A0` | CTAs, highlights, icons, accents |
| Primary Light | `rgba(0, 181, 160, 0.08)` | Backgrounds, subtle fills |
| Accent | `#FF6B4A` | Secondary accents, alerts, gradients |
| Dark | `#1F2937` | Text, dark backgrounds |
| Light | `#F8FAFC` | Backgrounds, cards |
| White | `#FFFFFF` | Cards, clean backgrounds |

### Typography (for image text)
- **Headlines:** Clash Display (Bold/Semibold)
- **Body:** Satoshi (Medium/Regular)
- **Style:** Clean, modern, confident

### Design Aesthetic
- Clean and professional (not corporate/boring)
- Bold typography with gradient accents
- Rounded corners (16-24px radius)
- Subtle shadows and depth
- Light gradients (primary → accent)
- Minimal, purposeful illustrations

---

## Image Categories & Specifications

### 1. Blog Post Featured Images
**Purpose:** Social shares, blog cards, article headers

| Spec | Value |
|------|-------|
| Dimensions | 1200 × 630px (OG standard) |
| Format | PNG (illustrations), JPG (photos) |
| File size | < 200KB optimized |
| Alt text | Descriptive, keyword-rich |

**Style Guidelines:**
- Left-aligned bold headline text
- Primary color (#00B5A0) accent elements
- Clean background (white or light gradient)
- Simple iconography or illustration
- Vouch logo watermark (optional, bottom corner)

**Template Elements:**
```
┌─────────────────────────────────┐
│                                 │
│  [Icon/Illustration]            │
│                                 │
│  HEADLINE TEXT                  │
│  Subtitle or context            │
│                                 │
│                    vouch logo   │
└─────────────────────────────────┘
```

### 2. State/Geographic Page Images
**Purpose:** State coverage pages, local SEO

| Spec | Value |
|------|-------|
| Dimensions | 800 × 600px (hero), 400 × 300px (card) |
| Format | SVG (state outlines), JPG (photos) |
| Style | State silhouette + iconic imagery |

**Approach Options:**

**Option A: State Silhouettes (Current)**
- Solid color state outline
- Primary teal (#00B5A0) fill
- Clean, consistent across all 50 states
- Fast to generate, scales well

**Option B: Photo + State Overlay**
- Iconic state landmark/cityscape photo
- Semi-transparent state outline overlay
- More engaging but harder to scale

**Option C: Illustrated State Cards**
- Stylized state shape
- 2-3 iconic elements (landmarks, symbols)
- Consistent illustration style

**Recommendation:** Stick with Option A (silhouettes) for consistency, add Option B photos for top 15 priority states.

### 3. Comparison Page Images
**Purpose:** Vouch vs Competitor pages

| Spec | Value |
|------|-------|
| Dimensions | 1200 × 630px (hero), 800 × 400px (inline) |
| Format | PNG |
| Style | Side-by-side visual comparison |

**Template:**
```
┌─────────────────────────────────┐
│                                 │
│   [Vouch]    VS    [Competitor] │
│    $30/mo         $45/mo        │
│                                 │
│   Which is better for you?      │
│                                 │
└─────────────────────────────────┘
```

**Design Notes:**
- Vouch always on LEFT (winner position)
- Use primary teal for Vouch side
- Neutral gray for competitor side
- Never use competitor logos (trademark issues)
- Use generic "carrier" representation

### 4. Guide/Educational Images
**Purpose:** How-to guides, glossary terms, educational content

| Spec | Value |
|------|-------|
| Dimensions | 1200 × 630px (hero), 800 × 450px (inline) |
| Format | SVG or PNG |
| Style | Clean infographic/diagram style |

**Image Types Needed:**

**Process Diagrams:**
- How to port your number (3-step flow)
- How to switch carriers (step-by-step)
- How to check if phone is unlocked

**Comparison Infographics:**
- eSIM vs Physical SIM
- Prepaid vs Postpaid
- 5G vs LTE

**Concept Illustrations:**
- What is an MVNO (network diagram)
- How deprioritization works
- WiFi Calling explained

### 5. Lifestyle/Demographic Images
**Purpose:** Segment-targeted content

| Spec | Value |
|------|-------|
| Dimensions | 1200 × 630px |
| Format | JPG (photos) or PNG (illustrations) |
| Style | Authentic, relatable, diverse |

**Segments & Visual Approach:**

| Segment | Visual Style |
|---------|--------------|
| College Students | Campus setting, young adults, casual |
| Gig Workers | In-car, delivery bag, active lifestyle |
| Seniors | Warm, accessible, clear displays |
| Remote Workers | Home office, laptop + phone |
| Families | Multi-generational, everyday moments |
| Immigrants | Diverse, international calling visual |

**Photo Guidelines:**
- Diverse representation (age, ethnicity, gender)
- Natural lighting, authentic settings
- Phone visible but not the focus
- Warm, approachable feel
- Avoid stock photo clichés

### 6. Tool/Calculator Images
**Purpose:** Interactive tool promotion

| Spec | Value |
|------|-------|
| Dimensions | 1200 × 630px |
| Format | PNG |
| Style | Screenshot mockup + results |

**Tools to visualize:**
- Savings Calculator → Show "$XXX saved" result
- Compatibility Checker → Phone + checkmark
- Coverage Checker → Map + location pin
- Data Calculator → Usage breakdown visual

---

## Image Generation Workflow

### AI-Generated Images (Recommended Approach)

**Use Gemini/Nanobanana MCP for:**
- Blog featured images
- Infographics and diagrams
- Conceptual illustrations
- Abstract/geometric backgrounds

---

## Gemini 3 Pro Image (Nano Banana Pro) Best Practices

*Based on official Google DeepMind documentation and prompt engineering research (January 2025).*

### Model Overview

| Model | ID | Best For | Max Resolution |
|-------|-----|----------|----------------|
| **Nano Banana Pro** | `gemini-3-pro-image-preview` | Professional quality, perfect text, 4K output | 4096px |

**Nano Banana Pro** is the community nickname for **Gemini 3 Pro Image** — Google DeepMind's state-of-the-art image generation model released November 2025. It represents a fundamental shift from standard generation to **"visual reasoning."**

### What Makes Gemini 3 Pro Image Different

Unlike standard diffusion models, Nano Banana Pro uses a **"Thinking" process** to:
- Reason through your prompt before generating
- Plan composition, lighting, and scene logic
- Render physically accurate results

**Key Capabilities:**
- **Perfect text rendering** — Spells long sentences and complex logos accurately
- **4K native resolution** — Up to 4096×4096 for print-quality assets
- **Google Search grounding** — Pulls real-time data for accurate infographics
- **Multi-image composition** — Up to 14 reference images (6 objects, 5 characters)
- **Character consistency** — Maintains identity across multiple generations
- **Conversational editing** — Refine images through natural language

### Core Prompting Principle

> **"Describe the scene, don't just list keywords."**

Gemini 3 understands natural language. Narrative descriptions outperform keyword lists.

**❌ Bad (2023-era prompting):**
```
phone, teal, modern, clean, infographic, professional, 4k,
trending on artstation, masterpiece, highly detailed
```

**✅ Good (Gemini 3 style):**
```
A clean, modern infographic showing a smartphone with a teal accent color.
The design is minimal and professional with plenty of white space.
The phone displays a savings comparison chart.
```

### Stop Using Old Prompt Hacks

Gemini 3 Pro Image does NOT benefit from:
- ❌ Keyword spam ("4k, trending on artstation, masterpiece")
- ❌ Repetitive quality modifiers
- ❌ Complex chain-of-thought prompt engineering
- ❌ Negative prompts (list what you DON'T want)

Instead, use:
- ✅ Clear, direct natural language
- ✅ Specific descriptive details
- ✅ The "Thinking" mode for complex scenes
- ✅ Conversational refinement for edits

### Prompt Structure Formula

Use this five-part structure for consistent results:

```
[Subject + Adjectives] doing [Action] in [Location/Context].
[Composition/Camera Angle].
[Lighting/Atmosphere].
[Style/Media].
[Specific Constraints/Text].
```

**Example for Vouch:**
```
A modern smartphone displaying the Vouch Mobile app interface,
floating above a subtle gradient background.
Centered composition with balanced negative space.
Soft, diffused studio lighting with subtle shadows.
Clean flat illustration style, minimal and professional.
Primary accent color: teal (#00B5A0), white background. 16:9 aspect ratio.
```

### Category-Specific Techniques

#### 1. Photorealistic Images
Think like a photographer. Include:
- **Shot type:** wide-angle, macro, close-up, portrait
- **Lens:** 85mm portrait lens, 24mm wide-angle
- **Lighting:** golden hour, three-point softbox, volumetric fog
- **Camera angles:** low-angle, Dutch angle, bird's-eye view
- **Depth of field:** f/1.8 shallow, f/11 deep focus

```
A professional product photo of a modern smartphone on a white marble
surface. Shot with an 85mm portrait lens at f/2.8, creating subtle
background blur. Soft three-point lighting from the left, highlighting
the teal (#00B5A0) accent on the phone case. Clean, minimal composition.
```

#### 2. Infographics & Diagrams
- Use precise numbers and labels
- Describe layout explicitly (horizontal, vertical, circular)
- Specify icon styles and colors
- Request clean backgrounds for text overlay areas

```
A horizontal 3-step process diagram showing how to switch phone carriers.
Step 1 on the left: phone icon with "Check Compatibility" label.
Step 2 in the center: SIM card icon with "Order New SIM" label.
Step 3 on the right: checkmark icon with "Activate Service" label.
Connected by teal (#00B5A0) arrows. Clean white background.
Numbers 1, 2, 3 in teal circles above each step.
Modern flat design, sans-serif labels.
```

#### 3. Comparison Visuals
- Position Vouch on LEFT (winner position in Western reading order)
- Use brand colors for differentiation
- Avoid competitor logos (trademark issues)
- Keep data clear and legible

```
A side-by-side comparison infographic for phone plans.
Left side: Teal (#00B5A0) themed box labeled "Vouch Mobile" showing
"$30/mo" in large text, with checkmarks for "Unlimited Data" and
"No Contract".
Right side: Gray themed box labeled "Other Carrier" showing "$45/mo"
with same features.
"VS" badge in the center. Clean white background, minimal style.
```

#### 4. Text Rendering (Titles, Labels)
Text rendering requires precision. Be explicit:
- Specify exact text in quotes
- Define font style (bold, sans-serif, serif)
- State color and size relationship
- Position text explicitly

```
Generate the text "No Credit Check" first, then create an image
with that text as the headline.
The text should be bold, sans-serif, in dark gray (#1F2937).
Centered at the top of a 16:9 canvas.
Below: a simple illustration of a smartphone with a green checkmark.
Teal (#00B5A0) accent color, white background.
```

**Pro Tip:** For complex text, generate text first, then generate the image containing that text.

#### 5. State/Geographic Images
- Reference iconic landmarks or symbols
- Use state silhouette shapes
- Maintain consistent style across all states

```
A stylized map silhouette of California state filled with teal (#00B5A0).
Inside the silhouette: subtle icons representing the Golden Gate Bridge,
palm trees, and the Hollywood sign.
Clean white background. Modern, flat illustration style.
Small text "California Coverage" below in dark gray.
```

#### 6. Lifestyle/Demographic Segments
- Describe authentic scenarios, not poses
- Specify diversity in representation
- Focus on context, not just the person

```
A warm, authentic illustration of a college student studying at a
campus café. Young woman of Asian descent, casually dressed, laptop
open with smartphone beside it showing a messaging app.
Natural daylight from a nearby window. Soft, approachable style.
Focus on the productive, connected lifestyle rather than the devices.
Warm color palette with teal (#00B5A0) accents.
```

### Iterative Editing Workflow

Gemini excels at conversational refinement. Use multi-turn editing:

1. **Generate base image** with detailed initial prompt
2. **Inspect** the result against your brief
3. **Refine** with natural language: "Make the lighting warmer" or "Move the phone to the right side"
4. **Constrain changes:** "Change only the background color to light gray. Keep everything else exactly the same."

**Reset context** if you notice style drift across many edits—start a new session with your best prompt.

### Quality Modifiers

Add these for higher quality outputs:

| Category | Keywords |
|----------|----------|
| **General** | high-quality, professional, polished, clean |
| **Render** | cinematic, studio-quality, octane render style |
| **Photography** | hyper-realistic, macro photography, high contrast |
| **Design** | minimal, modern, flat design, infographic style |

**Avoid:** Repetitive spam like "4k, trending on artstation, masterpiece" — descriptive precision beats keyword stacking.

### Aspect Ratios

| Ratio | Use Case | Dimensions |
|-------|----------|------------|
| `16:9` | Blog featured images, OG images | 1200×675 |
| `1:1` | Social media, thumbnails | 1080×1080 |
| `9:16` | Mobile/story format | 1080×1920 |
| `4:3` | Standard photos, media | 1200×900 |
| `21:9` | Cinematic wide banners | 1890×810 |

### Resolution Settings

Gemini 3 Pro Image supports three resolution tiers:
- **1K** (1024px) — Fast generation, good for drafts and iterations
- **2K** (2048px) — Balanced quality/speed (recommended for web)
- **4K** (4096px) — Highest quality for print and professional assets

**Pricing note:** 4K costs ~79% more tokens than 2K but produces 4× the pixels.

### Thinking Level Parameter

Control reasoning depth with `thinking_level`:
- **`low`** — Minimizes latency for simple tasks
- **`high`** (default) — Maximum reasoning for complex compositions

**Important:** Keep temperature at default **1.0** — lower values may cause looping or degraded output.

### Reference Images & Consistency

Nano Banana Pro excels at maintaining consistency:
- **Up to 5 characters** with preserved identity across generations
- **Up to 14 objects** with retained visual fidelity
- **Multi-image composition** — Combine reference images with clear instructions

**Example prompt for consistency:**
```
Using the attached reference images of the Vouch Mobile logo,
generate a product mockup showing the logo on a smartphone case.
Maintain the exact logo placement, colors (#00B5A0 teal), and proportions.
Professional product photography, white background, soft studio lighting.
```

### Known Limitations & Workarounds

| Issue | Workaround |
|-------|------------|
| Small faces rendering imprecisely | Use close-up shots; avoid distant crowd scenes |
| Text spelling errors | Put text in quotes; use Gemini 3 Pro (not Flash) |
| Character drift across edits | Re-upload the "good" image; constrain to single change |
| Complex infographic errors | Verify data accuracy manually; use Search grounding |
| Lighting artifacts in extreme edits | Break complex edits into multiple steps |

### Search Grounding (Real-Time Data)

Unique to Gemini 3: Pull live data into generated images.

```
Visualize the current AT&T 5G coverage map for California as a
modern infographic. Use teal (#00B5A0) for covered areas.
Clean, minimal design with a legend showing coverage percentages.
```

The model connects to Google Search to construct factually accurate visualizations.

---

### Vouch-Specific Prompt Templates

**Blog Featured Image:**
```
Create an image of a clean, modern illustration for a mobile phone
blog post about [TOPIC].

Subject: [describe main visual element related to topic]
Style: Flat design, minimal, professional infographic aesthetic.
Colors: Teal (#00B5A0) as primary accent, white (#FFFFFF) background.
Composition: Centered with ample negative space for text overlay.
Aspect ratio: 16:9 (1200x675 pixels).

Do not include any text in the image.
```

**Comparison Hero Image:**
```
Create an image of a side-by-side phone plan comparison visual.

Left side: Teal (#00B5A0) themed section with a modern smartphone icon
and "$30/mo" pricing indicator.
Center: A circular "VS" badge in dark gray.
Right side: Gray (#6B7280) themed section with a generic phone icon
and "$45/mo" pricing indicator.

Style: Clean, minimal, infographic design. No brand logos.
Background: White (#FFFFFF) with subtle teal gradient accent.
Aspect ratio: 16:9.
```

**Process Diagram:**
```
Create an image of a horizontal 3-step process diagram showing [PROCESS].

Layout: Three equally-spaced steps from left to right, connected by
teal (#00B5A0) arrows.

Step 1: [Icon description] with "Step 1: [Label]" below
Step 2: [Icon description] with "Step 2: [Label]" below
Step 3: [Icon description] with "Step 3: [Label]" below

Each step has a numbered circle (1, 2, 3) in teal above the icon.
Style: Modern flat design, clean sans-serif labels in dark gray (#1F2937).
Background: White (#FFFFFF).
Aspect ratio: 16:9.
```

**MVNO Explainer Diagram:**
```
Create an image of a network diagram explaining what an MVNO is.

Show three layers:
Top layer: Large cell tower icon labeled "AT&T Network Infrastructure"
Middle layer: Arrow pointing down to a cloud/network icon labeled "Vouch Mobile (MVNO)"
Bottom layer: Arrow pointing to multiple smartphone icons labeled "Customers"

Style: Clean infographic with teal (#00B5A0) accents on the MVNO layer.
Arrows in gray, network elements in teal.
White background, modern flat design.
Aspect ratio: 16:9.
```

---

### Sources

- [Gemini 3 Pro Image (Nano Banana Pro)](https://deepmind.google/models/gemini-image/pro/) - Google DeepMind Official
- [Nano Banana Pro Prompting Tips](https://blog.google/products/gemini/prompting-tips-nano-banana-pro/) - Google Blog
- [Gemini 3 Developer Guide](https://ai.google.dev/gemini-api/docs/gemini-3) - Google AI for Developers
- [Gemini 3 Prompting Guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/gemini-3-prompting-guide) - Google Cloud Documentation
- [Nano Banana Image Generation API](https://ai.google.dev/gemini-api/docs/image-generation) - Google AI for Developers

---

### Stock Photos (When Needed)

**Recommended Sources:**
- Unsplash (free, high quality)
- Pexels (free, diverse)
- Pixabay (free, large library)

**Search Terms by Category:**
- Lifestyle: "person using phone outdoor", "young adult smartphone"
- States: "[state name] landmark", "[city] skyline"
- Seniors: "senior smartphone", "elderly technology"
- Students: "college student phone", "campus mobile"

### Custom Photography (Future)
Consider for:
- Hero images
- About page
- Key landing pages
- Case studies/testimonials

---

## File Organization

```
src/images/
├── blog/
│   ├── [post-slug].png           # Featured images
│   └── [post-slug]-inline-1.png  # Inline images
├── coverage/
│   ├── [state-slug].svg          # State silhouettes
│   ├── [state-slug].png          # Fallback PNGs
│   └── [state-slug]-photo.jpg    # State photos (priority)
├── compare/
│   ├── vouch-vs-[competitor].png # Comparison heroes
│   └── comparison-hero.jpg       # Generic comparison
├── guides/
│   ├── [guide-slug].png          # Guide featured
│   └── diagrams/                 # Process diagrams
├── lifestyle/
│   ├── college-student.jpg
│   ├── gig-worker.jpg
│   ├── senior.jpg
│   └── ...
├── tools/
│   ├── savings-calculator.png
│   ├── compatibility-checker.png
│   └── ...
├── icons/
│   ├── *.svg                     # UI icons
│   └── *.png                     # Fallbacks
└── brand/
    ├── logo.png
    ├── logo-white.png
    ├── og-image.png              # Default social
    └── favicon.png
```

---

## SEO Image Optimization

### File Naming Convention
```
[primary-keyword]-[descriptor].[format]
```

**Examples:**
- `no-credit-check-phone-plans-guide.png`
- `vouch-vs-mint-mobile-comparison.png`
- `california-cell-phone-coverage.jpg`
- `esim-vs-sim-card-diagram.png`

### Alt Text Guidelines

**Format:** `[Descriptive content] - [Context/brand]`

**Examples:**
- ✅ "Diagram showing how to port your phone number in 3 steps - Vouch Mobile guide"
- ✅ "California state coverage map for Vouch Mobile AT&T network"
- ✅ "Comparison chart of Vouch Mobile vs Mint Mobile pricing and features"
- ❌ "image1.png"
- ❌ "phone plan"

### Technical Optimization

| Format | Use Case | Compression |
|--------|----------|-------------|
| WebP | Modern browsers, photos | 80-85% quality |
| PNG | Illustrations, transparency | TinyPNG optimized |
| SVG | Icons, simple graphics | SVGO minified |
| JPG | Photos, no transparency | 85% quality |

**Tools:**
- TinyPNG (https://tinypng.com/) - PNG/JPG compression
- SVGOMG (https://jakearchibald.github.io/svgomg/) - SVG optimization
- Squoosh (https://squoosh.app/) - WebP conversion

---

## Content-Specific Image Plans

### Phase 1: Foundation Images (Priority)

**Blog Posts (15 images):**
1. No credit check phone plans guide
2. What is an MVNO
3. How to switch carriers
4. How to port your number
5. eSIM vs SIM card
6. How to check if phone unlocked
7. Prepaid vs postpaid
8. How to save money on phone bills
9. What is 5G
10. What is deprioritization
11. Best phones for prepaid
12. Phone plans for bad credit
13. First phone plan guide
14. Phone plans for seniors
15. Family plan alternatives

**State Pages (15 hero images):**
- California, Texas, Florida, New York, Illinois
- Pennsylvania, Ohio, Georgia, North Carolina, Michigan
- New Jersey, Virginia, Washington, Arizona, Massachusetts

**Comparison Pages (12 images):**
- Vouch vs Mint Mobile
- Vouch vs Visible
- Vouch vs Cricket
- Vouch vs Metro
- Vouch vs Boost
- Vouch vs Straight Talk
- Vouch vs AT&T Prepaid
- Vouch vs Verizon Prepaid
- Vouch vs T-Mobile Prepaid
- Vouch vs US Mobile
- Vouch vs Google Fi
- Vouch vs Tello

### Phase 2: Expansion Images

**Remaining State Silhouettes:** 35 states
**Lifestyle Segment Images:** 8 segments
**Tool Promotional Images:** 5 tools
**Metro Area Images:** 5 cities

### Phase 3: Ongoing

**Seasonal Content:**
- Black Friday deals graphic
- Back to school promotion
- Tax refund season
- Holiday gift guide

---

## Image Generation Checklist

For each new page/post:

- [ ] Create featured image (1200×630)
- [ ] Optimize file size (<200KB)
- [ ] Use descriptive filename with keywords
- [ ] Write keyword-rich alt text
- [ ] Add to sitemap (if applicable)
- [ ] Test OG image preview (opengraph.xyz)
- [ ] Create mobile-optimized version if needed

---

## Brand Consistency Rules

### DO:
- Use primary teal (#00B5A0) as main accent
- Keep backgrounds clean (white/light)
- Use consistent rounded corners
- Maintain adequate white space
- Use Clash Display for headlines in images

### DON'T:
- Use competitor logos or trademarks
- Use outdated/unprofessional stock photos
- Overcrowd images with text
- Use clashing colors outside palette
- Include people's faces without rights

---

*Strategy created: January 2025*
*Review quarterly for updates*
