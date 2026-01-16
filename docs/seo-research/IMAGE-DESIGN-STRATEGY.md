# Vouch Mobile Image Design Strategy

## Logo Reference Requirement

**CRITICAL:** All generated media assets MUST use the Vouch logo as a reference image to ensure brand consistency.

### Logo File Location
```
src/images/logo.png
```

### Logo Specifications
- **Format:** PNG with transparency
- **Size:** 3.9 KB
- **Elements:**
  - "Vouch" text in dark navy (#1F2937)
  - Teal checkmark forming the "V" (#00B5A0)
  - "MOBILE" in smaller caps underneath

### Using Logo as Reference Image

When generating images with AI tools (Gemini/Nanobanana), always:

1. **Upload the logo** as a reference image input for brand consistency
2. **Reference the brand colors** extracted from the logo in your prompt
3. **Verify output** matches the logo's color palette and aesthetic

The logo serves as a **brand reference** - it doesn't need to appear in every image, but should inform the style and colors.

**Example prompt with logo reference:**
```
Using the attached Vouch Mobile logo as a brand reference,
create a featured image for a blog post about [TOPIC].

Maintain the brand colors:
- Primary teal: #00B5A0 (from the logo checkmark)
- Dark navy: #1F2937 (from the logo text)
- White background

Style should match the clean, modern aesthetic of the logo.
```

**When to include the logo in the image:**
- Social share images (OG images)
- Infographics meant for external distribution
- Comparison charts
- Any image that may be shared outside the website

**When logo is not needed in output:**
- Decorative hero images
- Background imagery
- Inline illustrations
- Photos

**MCP Tool Usage:**
```
mcp__nanobanana__generate_image with:
- input_image_path_1: "/path/to/vouch/src/images/logo.png"
- prompt: [your prompt referencing the logo]
```

---

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
| Dimensions | 1920 × 1080px (16:9 hero) |
| Format | JPG (optimized) |
| Style | Editorial photography with duotone treatment |

**Recommended Approach: Editorial Photography with Duotone**

This approach creates premium, magazine-quality images that don't look AI-generated.

**Why this works:**
- Real photography grounds the image in reality
- Duotone color treatment makes it ownable with brand colors
- Cinematic composition leaves space for text overlay
- No clip-art icons or literal state silhouettes
- Looks like premium stock photography

**Duotone Color Treatment:**
- **Shadows:** Deep navy (#1F2937)
- **Highlights:** Shift toward teal (#00B5A0)
- Creates brand-consistent look across all states

**Composition Rules:**
- Subject (skyline/landmark) in right two-thirds
- Open sky/negative space on left for text placement
- Water reflections add depth when available
- Golden hour or blue hour lighting preferred

**Prompt Template for State Images:**
```
Editorial photograph of [ICONIC LOCATION], [CITY], [STATE] at golden hour,
shot from [VANTAGE POINT]. The image has a sophisticated duotone color
treatment: shadows are deep navy (#1F2937), highlights shift toward teal
(#00B5A0). Cinematic composition with the [SUBJECT] in the right two-thirds,
open sky on the left for text placement. [ADDITIONAL DETAILS - water,
reflections, etc.]. Photorealistic, shot on medium format camera.
Moody, premium, magazine-quality. No text, no graphics, no overlays.
```

**Required Parameters:**
```
aspectRatio: "16:9"
imageSize: "2K"
style: "editorial photography duotone cinematic"
useGoogleSearch: true  ← CRITICAL for accurate landmarks
```

**Example Locations by State:**

| State | Iconic Location | Vantage Point |
|-------|-----------------|---------------|
| California | Golden Gate Bridge, SF | Baker Beach or Marin Headlands |
| Texas | Austin skyline | Lady Bird Lake |
| Florida | Miami skyline | Biscayne Bay |
| New York | Manhattan skyline | Brooklyn Bridge Park |
| Illinois | Chicago skyline | North Avenue Beach |
| Washington | Seattle skyline | Kerry Park |
| Arizona | Phoenix skyline | Papago Park |
| Colorado | Denver skyline | City Park |
| Georgia | Atlanta skyline | Jackson Street Bridge |
| North Carolina | Charlotte skyline | Midtown Park |

**What NOT to do:**
- ❌ State silhouettes with icons inside (looks like clip art)
- ❌ "Clean white background" (sterile, generic)
- ❌ Multiple competing landmarks in one image
- ❌ Flat illustration style (screams AI-generated)
- ❌ Generic "city skyline" without specific location

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

## MCP Tool Reference (mcp__nanobanana__)

This project uses the **nanobanana MCP server** for AI image generation with Gemini 3 Pro Image.

### Available Image Tools

| Tool | Purpose |
|------|---------|
| `mcp__nanobanana__gemini_generate_image` | Generate new images from prompts with reference image support |
| `mcp__nanobanana__gemini_edit_image` | Edit existing images with natural language instructions |
| `mcp__nanobanana__gemini_chat` | Multi-turn conversations with image context (up to 10 images) |
| `mcp__nanobanana__set_aspect_ratio` | Set default aspect ratio for a session |
| `mcp__nanobanana__get_image_history` | Retrieve generated images from a session |
| `mcp__nanobanana__clear_conversation` | Clear conversation history for a session |

### gemini_generate_image Parameters

| Parameter | Required | Type | Notes |
|-----------|----------|------|-------|
| `prompt` | ✅ | string | Natural language scene description |
| `aspect_ratio` | ❌ | string | `1:1`, `9:16`, `16:9`, `3:4`, `4:3`, `3:2`, `2:3`, `5:4`, `4:5`, `21:9` |
| `output_path` | ❌ | string | Custom save location (default: `~/Documents/nanobanana_generated/`) |
| `reference_images` | ❌ | array | File paths to reference images for style/character consistency |
| `conversation_id` | ❌ | string | Session ID for maintaining image history across generations |
| `use_image_history` | ❌ | boolean | Include previous session images for style consistency |
| `enable_google_search` | ❌ | boolean | Ground image in real-world data via Google Search |

### gemini_edit_image Parameters

| Parameter | Required | Type | Notes |
|-----------|----------|------|-------|
| `image_path` | ✅ | string | Path to source image, `'last'`, or `'history:N'` (e.g., `'history:0'`) |
| `edit_prompt` | ✅ | string | Natural language edit instructions |
| `aspect_ratio` | ❌ | string | Override aspect ratio for edited output |
| `output_path` | ❌ | string | Custom save location |
| `conversation_id` | ❌ | string | Session ID for accessing image history |
| `reference_images` | ❌ | array | Additional reference images for style consistency (max 10) |
| `enable_google_search` | ❌ | boolean | Ground edits in real-world data |

### Aspect Ratio Quick Reference

| Ratio | Use Case | Vouch Application |
|-------|----------|-------------------|
| `1:1` | Social thumbnails, icons | Profile images, app icons |
| `16:9` | Blog featured, OG images | **Primary for blog posts** |
| `4:3` | Standard photos, heroes | State page heroes |
| `3:2` | Photography standard | Lifestyle images |
| `9:16` | Mobile/story format | Instagram stories, mobile ads |
| `21:9` | Ultra-wide cinematic | Wide banners, hero backgrounds |

### Session-Based Workflow

Use `conversation_id` to maintain consistency across multiple generations:

```python
# Step 1: Generate base image with a session ID
mcp__nanobanana__gemini_generate_image(
    prompt="Editorial photograph of Golden Gate Bridge at golden hour...",
    aspect_ratio="16:9",
    conversation_id="california-hero",
    output_path="src/images/coverage/california.jpg"
)

# Step 2: Edit using session history
mcp__nanobanana__gemini_edit_image(
    image_path="last",  # References last image in session
    edit_prompt="Make the sky more dramatic with deeper orange tones",
    conversation_id="california-hero"
)

# Step 3: Generate related image with style consistency
mcp__nanobanana__gemini_generate_image(
    prompt="Editorial photograph of Los Angeles skyline at golden hour...",
    conversation_id="california-hero",
    use_image_history=True  # Maintains style from previous generations
)
```

### Reference Image Workflow

Use reference images to maintain brand consistency:

```python
# Using Vouch logo as brand reference
mcp__nanobanana__gemini_generate_image(
    prompt="A clean, modern infographic showing phone plan comparison.
           Use the brand colors from the reference logo: teal (#00B5A0)
           as primary accent, dark navy (#1F2937) for text elements.
           White background, minimal professional style.",
    reference_images=["src/images/logo.png"],
    aspect_ratio="16:9",
    output_path="src/images/blog/phone-plan-comparison.png"
)
```

**Reference Image Limits (Gemini 3 Pro):**
- Up to **6 object images** for high-fidelity inclusion
- Up to **5 human/character images** for identity consistency
- Up to **14 total reference images** when combining objects and characters

### Practical Examples for Vouch

**State Page Hero (16:9, editorial photography):**
```python
mcp__nanobanana__gemini_generate_image(
    prompt="""Editorial photograph of the Golden Gate Bridge, San Francisco
    at golden hour, shot from Baker Beach. Sophisticated duotone color
    treatment: shadows are deep navy (#1F2937), highlights shift toward
    teal (#00B5A0). Cinematic composition with the bridge in the right
    two-thirds, open sky on the left for text placement. Photorealistic,
    shot on medium format camera. Moody, premium, magazine-quality.
    No text, no graphics, no overlays.""",
    aspect_ratio="16:9",
    enable_google_search=True,  # Ensures accurate landmark rendering
    output_path="src/images/coverage/california.jpg"
)
```

**Blog Featured Image (16:9, illustration):**
```python
mcp__nanobanana__gemini_generate_image(
    prompt="""A clean, modern illustration showing a smartphone beside a
    piggy bank with gold coins. The phone displays a green checkmark on
    its screen. Teal (#00B5A0) accent color on the phone case, white
    background with subtle shadows. Minimal flat design style with soft
    gradients. Represents saving money on phone bills. Centered composition
    with ample negative space. Do not include any text.""",
    reference_images=["src/images/logo.png"],
    aspect_ratio="16:9",
    output_path="src/images/blog/save-money-phone-bill.png"
)
```

**Comparison Infographic (16:9):**
```python
mcp__nanobanana__gemini_generate_image(
    prompt="""Side-by-side phone plan comparison infographic. Left side:
    teal (#00B5A0) themed panel showing '$30/mo' in large bold text with
    three green checkmarks below for features. Right side: gray (#6B7280)
    themed panel showing '$45/mo' with same feature layout. Circular 'VS'
    badge in dark navy (#1F2937) centered between panels. Clean white
    background, modern flat design, professional infographic style.
    No brand logos.""",
    aspect_ratio="16:9",
    output_path="src/images/compare/vouch-vs-competitor.png"
)
```

**Lifestyle Image with Character Consistency:**
```python
# Generate base lifestyle image
mcp__nanobanana__gemini_generate_image(
    prompt="""Warm, authentic photograph of a young professional woman
    in her late 20s, Asian descent, working at a bright home office.
    She's smiling while looking at her smartphone, laptop open nearby.
    Natural daylight from a window, casual professional attire.
    Warm color palette with teal (#00B5A0) accent on a coffee mug.
    Shot with 50mm lens at f/2.8, shallow depth of field.""",
    conversation_id="remote-worker-series",
    aspect_ratio="16:9",
    output_path="src/images/lifestyle/remote-worker.jpg"
)

# Generate related image maintaining character consistency
mcp__nanobanana__gemini_generate_image(
    prompt="""Same young professional woman from the previous image,
    now at a coffee shop, working on her laptop with phone beside her.
    Maintain her exact facial features and appearance. Warm afternoon
    light, casual atmosphere. Teal accent in the scene.""",
    conversation_id="remote-worker-series",
    use_image_history=True,
    aspect_ratio="16:9",
    output_path="src/images/lifestyle/remote-worker-cafe.jpg"
)
```

### Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Colors don't match brand | Be explicit: `"teal (#00B5A0)"` not just `"teal"` |
| Too much detail/clutter | Add `"minimal style, clean, ample white space"` |
| Unwanted text in image | Add `"Do not include any text in the image"` |
| Style drift across images | Use `conversation_id` + `use_image_history=True` |
| Character looks different | Upload reference image, specify `"maintain exact facial features"` |
| Landmark inaccurate | Enable `enable_google_search=True` for real-world grounding |
| Aspect ratio changes on edit | Add `"Do not change the input aspect ratio"` to edit prompt |
| Image too dark | Specify `"white background, bright, well-lit, high key lighting"` |

---

## Gemini 3 Pro Image Best Practices

*Based on official Google documentation and prompt engineering research (January 2026).*

### Model Overview

| Model | Best For | Max Resolution | Speed |
|-------|----------|----------------|-------|
| **Gemini 3 Pro Image** | Professional quality, perfect text, production assets | 4K (3840px) | 5-8 sec |

Gemini 3 Pro Image uses a **"Thinking" process** that reasons through your prompt before generating, planning composition, lighting, and scene logic for physically accurate results.

**Key Capabilities:**
- **Perfect text rendering** — Accurate spelling for long sentences and complex logos
- **4K native resolution** — Up to 4096×4096 for print-quality assets
- **Google Search grounding** — Pulls real-time data for accurate infographics
- **Multi-image composition** — Up to 14 reference images (6 objects, 5 characters)
- **Character consistency** — Maintains identity across multiple generations
- **Conversational editing** — Refine images through natural language in sessions

### Core Prompting Principle

> **"Describe the scene, don't just list keywords."**

Narrative-based prompting increases output quality by **3.2x** while reducing generation failures by **68%**.

**❌ Bad (2023-era prompting):**
```
phone, teal, modern, clean, infographic, professional, 4k,
trending on artstation, masterpiece, highly detailed
```

**✅ Good (Gemini 3 style):**
```
A clean, modern infographic showing a smartphone with a teal (#00B5A0)
accent color. The design is minimal and professional with plenty of white
space. The phone displays a savings comparison chart. Centered composition
with soft studio lighting.
```

### Stop Using Old Prompt Hacks

Gemini 3 Pro Image does **NOT** benefit from:
- ❌ Keyword spam ("4k, trending on artstation, masterpiece")
- ❌ Repetitive quality modifiers
- ❌ Negative prompts (list what you DON'T want) — use positive descriptions instead
- ❌ Complex chain-of-thought prompt engineering

Instead, use:
- ✅ Clear, direct natural language
- ✅ Specific descriptive details with precision ("elderly Japanese ceramicist" > "old craftsman")
- ✅ Positive descriptions ("empty street" instead of "no cars")
- ✅ Conversational refinement for edits via session history

---

## The 6-Component Prompting Framework

Research shows this structure maximizes output quality. Each component contributes measurably:

| Component | Impact | Purpose |
|-----------|--------|---------|
| **Shot Type** | +35% | Composition control (close-up, wide-angle, overhead) |
| **Subject** | Core | Primary focus with specific descriptors |
| **Action/State** | +28% | Dynamic verbs activate physics ("leaping", "pouring") |
| **Environment** | +41% | Context from general to specific |
| **Lighting** | +47% | Atmospheric descriptions guide mood and quality |
| **Style/Mood** | +31% | Artistic direction and emotional tone |

### The Formula

```
[Shot Type] + [Subject with Adjectives] + [Action/State] + [Environment] +
[Lighting] + [Style/Mood] + [Technical Constraints]
```

### Three Critical Elements for Scene Descriptions

1. **Spatial relationships must be explicit** — "beside," "overlooking," "nestled between" provide compositional anchors
2. **Lighting descriptions guide atmosphere** — "harsh midday sun," "blue hour glow," "candlelit warmth" dramatically influence mood
3. **Action verbs activate physics** — "leaping," "pouring," "rustling" generate dynamic scenes rather than static poses

### Framework Applied to Vouch Use Cases

**Blog Featured Image:**
```
[Shot type] Product-style flat lay composition
[Subject] A modern smartphone with teal (#00B5A0) accent case beside a white piggy bank with gold coins
[Action] Coins appearing to fall into the piggy bank
[Environment] Clean white surface with subtle soft shadows
[Lighting] Bright, diffused studio lighting from above-left
[Style] Minimal flat design, professional infographic aesthetic
[Constraints] 16:9 aspect ratio, no text, ample negative space on right for overlay
```

**State Hero Image:**
```
[Shot type] Wide-angle editorial photograph
[Subject] The Golden Gate Bridge spanning San Francisco Bay
[Action] Morning fog rolling beneath the bridge deck
[Environment] Shot from Baker Beach with rocky foreground, open sky on left
[Lighting] Golden hour with warm highlights, deep navy shadows
[Style] Sophisticated duotone treatment, cinematic, magazine-quality
[Constraints] 16:9 aspect ratio, no text or graphics, photorealistic
```

**Lifestyle Segment:**
```
[Shot type] Medium shot, 50mm portrait lens at f/2.8
[Subject] A young professional woman in her late 20s, Asian descent, casual attire
[Action] Smiling while checking her smartphone
[Environment] Bright home office with laptop, plants, natural elements
[Lighting] Soft natural daylight from large window, warm afternoon tones
[Style] Authentic, warm, approachable lifestyle photography
[Constraints] Teal (#00B5A0) accent visible (coffee mug), shallow depth of field
```

---

## Production-Ready Prompt Templates

These templates have **92-96% success rates** in production environments.

### Template 1: Portrait/Lifestyle (96% success)

```
A [age/gender] [profession/descriptor] with [expression], captured in
[lighting type] against [background/environment]. Shot with [lens] at
[aperture], creating [mood] atmosphere with [color grading/treatment].
[Specific details about clothing, accessories, or props with brand colors.]
```

**Vouch Example:**
```
A college student in his early 20s, diverse background, with a relaxed
confident smile, captured in soft natural daylight against a campus quad
with blurred students in background. Shot with 85mm lens at f/2.0,
creating warm approachable atmosphere with slightly lifted shadows.
He holds a smartphone with teal (#00B5A0) case while checking messages.
```

### Template 2: Product/Infographic (94% success)

```
[Resolution/quality] [product/concept description] on [surface/background].
[Lighting setup] from [direction]. [Camera angle] with [focus description].
[Aspect ratio]. [Brand color specifications]. [Style descriptors].
Do not include any text.
```

**Vouch Example:**
```
Professional product-style illustration of a smartphone displaying a
savings chart beside stacked coins on a clean white surface. Soft
three-point studio lighting from above-left creating subtle shadows.
Centered overhead view with entire composition in sharp focus. 16:9
aspect ratio. Primary accent teal (#00B5A0) on phone elements, gold
coins, white background. Clean minimal infographic style.
Do not include any text.
```

### Template 3: Editorial/Geographic (92% success)

> **KEY LEARNING:** Emphasize "HIGH CONTRAST" and "BRIGHT VIBRANT teal sky" -
> without this, images come out too dark and muted.

```
Editorial photograph of [iconic location], [city], [state] at blue hour,
shot from [vantage point]. HIGH CONTRAST duotone color treatment with
VIVID TEAL (#00B5A0) sky and deep navy (#1F2937) shadows. The sky should
be BRIGHT and VIBRANT, not dark. Strong contrast between illuminated
[subject] and colorful sky. Cinematic composition with [subject] in the
right two-thirds, open bright teal sky on left for text placement.
[Additional details]. Photorealistic, shot on medium format camera.
Vibrant, high contrast, magazine-quality. No text, no graphics, no overlays.
```

**Vouch Example:**
```
Editorial photograph of the Austin skyline, Texas at blue hour, shot from
across Lady Bird Lake. HIGH CONTRAST duotone color treatment with VIVID
TEAL (#00B5A0) sky and deep navy (#1F2937) shadows. The sky should be
BRIGHT and VIBRANT teal, NOT dark. Strong contrast between illuminated
buildings and colorful sky. Cinematic composition with skyline in the
right two-thirds, open bright teal sky on left for text placement.
Congress Avenue Bridge visible, water reflections mirroring the teal sky.
Photorealistic, shot on medium format camera. Vibrant, high contrast,
magazine-quality. No text, no graphics, no overlays.
```

### Template 4: Comparison/Infographic (94% success)

```
Side-by-side [comparison type] infographic. Left side: [primary color] themed
[container] showing [primary data] with [supporting elements]. Right side:
[secondary color] themed [container] showing [comparison data] with [matching
elements]. [Divider element] centered between panels. [Background]. [Style].
[Constraints about logos/text].
```

**Vouch Example:**
```
Side-by-side phone plan comparison infographic. Left side: teal (#00B5A0)
themed rounded rectangle showing "$30/mo" in large bold numerals with three
checkmark icons below for unlimited data, talk, and text. Right side: gray
(#6B7280) themed rounded rectangle showing "$45/mo" with matching layout.
Circular "VS" badge in dark navy (#1F2937) centered between panels. Clean
white background with subtle drop shadows. Modern flat design, professional
style. No brand logos, generic carrier representation only.
```

### Template 5: Process Diagram (91% success)

```
A horizontal [number]-step process diagram showing [process name]. Layout:
[number] equally-spaced steps from left to right, connected by [connector style]
arrows in [color].

Step 1: [Icon description] with "[Label]" below
Step 2: [Icon description] with "[Label]" below
Step 3: [Icon description] with "[Label]" below

Each step has a numbered circle ([numbers]) in [color] above the icon.
Style: [design style], [font style] labels in [text color].
Background: [color]. Aspect ratio: [ratio].
```

**Vouch Example:**
```
A horizontal 3-step process diagram showing how to switch phone carriers.
Layout: 3 equally-spaced steps from left to right, connected by curved
arrows in teal (#00B5A0).

Step 1: Smartphone with magnifying glass icon with "Check Compatibility" below
Step 2: SIM card with download arrow icon with "Order & Activate" below
Step 3: Checkmark in circle icon with "Start Saving" below

Each step has a numbered circle (1, 2, 3) in teal (#00B5A0) above the icon.
Style: Modern flat design, clean sans-serif labels in dark gray (#1F2937).
Background: White (#FFFFFF). Aspect ratio: 16:9.
```

---

## Character Consistency Techniques

Maintaining consistent characters across multiple images requires specific techniques.

### Method 1: Session-Based Consistency

Use `conversation_id` and `use_image_history`:

```python
# Initial generation establishes the character
mcp__nanobanana__gemini_generate_image(
    prompt="Portrait of a friendly customer service representative...",
    conversation_id="vouch-rep-sarah",
    output_path="src/images/lifestyle/rep-sarah-1.jpg"
)

# Subsequent generations reference the session
mcp__nanobanana__gemini_generate_image(
    prompt="The same customer service representative from the previous image,
           now helping a customer at a desk. Maintain exact facial features,
           hair style, and general appearance...",
    conversation_id="vouch-rep-sarah",
    use_image_history=True,
    output_path="src/images/lifestyle/rep-sarah-2.jpg"
)
```

### Method 2: Reference Image Consistency

Upload the best generated image as a reference:

```python
mcp__nanobanana__gemini_generate_image(
    prompt="The woman shown in the reference image, now in a different setting.
           Maintain her exact facial features, hair color and style, and
           approximate age. She is now at a coffee shop...",
    reference_images=["src/images/lifestyle/rep-sarah-1.jpg"],
    output_path="src/images/lifestyle/rep-sarah-cafe.jpg"
)
```

### Method 3: Detailed Feature Specification

Include 5-7 specific feature details for **94% likeness retention**:

```
Maintain exact features from previous image:
- Oval face shape with soft jawline
- Dark brown eyes, almond-shaped
- Shoulder-length black hair with subtle waves
- Light olive skin tone
- Friendly smile showing teeth
- Approximately 28-32 years old
- Medium build
```

### Handling Character Drift

If features drift after multiple edits:
1. **Restart conversation** with a detailed description based on your best image
2. **Re-upload** the "good" image as a reference
3. **Constrain changes** to single modifications: "Change ONLY the background. Keep the person exactly the same."

---

## Prompt Structure Formula (Legacy Reference)

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
```python
mcp__nanobanana__gemini_generate_image(
    prompt="""A clean, modern illustration for a mobile phone blog post
    about [TOPIC]. [Describe main visual element related to topic].

    Style: Flat design, minimal, professional infographic aesthetic.
    Colors: Teal (#00B5A0) as primary accent, white (#FFFFFF) background.
    Composition: Centered with ample negative space on right for text overlay.
    Soft studio lighting with subtle shadows for depth.

    Do not include any text in the image.""",
    reference_images=["src/images/logo.png"],
    aspect_ratio="16:9",
    output_path="src/images/blog/[slug].png"
)
```

**Comparison Hero Image:**
```python
mcp__nanobanana__gemini_generate_image(
    prompt="""Side-by-side phone plan comparison infographic.

    Left side: Teal (#00B5A0) themed rounded panel with modern smartphone
    icon and "$30/mo" in large bold numerals, three checkmarks below.
    Center: Circular "VS" badge in dark navy (#1F2937).
    Right side: Gray (#6B7280) themed panel with phone icon and "$45/mo",
    matching layout to left side.

    Style: Clean, minimal, infographic design. No brand logos.
    Background: White (#FFFFFF) with subtle drop shadows on panels.
    Professional, modern flat design.""",
    aspect_ratio="16:9",
    output_path="src/images/compare/vouch-vs-[competitor].png"
)
```

**Process Diagram:**
```python
mcp__nanobanana__gemini_generate_image(
    prompt="""A horizontal 3-step process diagram showing [PROCESS NAME].

    Layout: Three equally-spaced steps from left to right, connected by
    curved arrows in teal (#00B5A0).

    Step 1: [Icon description] with "[Label]" below
    Step 2: [Icon description] with "[Label]" below
    Step 3: [Icon description] with "[Label]" below

    Each step has a numbered circle (1, 2, 3) in teal (#00B5A0) above the icon.
    Style: Modern flat design, clean sans-serif labels in dark gray (#1F2937).
    Background: White (#FFFFFF) with subtle depth through shadows.
    Ample negative space around elements.""",
    aspect_ratio="16:9",
    output_path="src/images/guides/[process-slug]-diagram.png"
)
```

**MVNO Explainer Diagram:**
```python
mcp__nanobanana__gemini_generate_image(
    prompt="""A network diagram explaining what an MVNO is.

    Visual hierarchy showing three connected layers:
    Top layer: Large cell tower icon labeled "AT&T Network Infrastructure"
    in dark gray (#1F2937), representing the major carrier.

    Middle layer: Arrow pointing down to a cloud/network icon labeled
    "Vouch Mobile (MVNO)" in teal (#00B5A0), the focal point of the diagram.

    Bottom layer: Arrow pointing to multiple smartphone icons labeled
    "Customers" showing the end users.

    Style: Clean infographic with teal (#00B5A0) highlighting the MVNO layer.
    Arrows in gray connecting layers. White background, modern flat design.
    Professional, educational visual.""",
    enable_google_search=True,
    aspect_ratio="16:9",
    output_path="src/images/blog/what-is-mvno-diagram.png"
)
```

**State Coverage Hero (Editorial Photography):**

> **CRITICAL:** Use **high contrast** with **bright vibrant teal sky** - not dark/muted.
> Reference `california.jpg` as the contrast standard. Use **16:9 aspect ratio** for card consistency.

```python
mcp__nanobanana__gemini_generate_image(
    prompt="""Editorial photograph of [ICONIC LANDMARK], [CITY], [STATE]
    at blue hour, shot from [VANTAGE POINT].

    HIGH CONTRAST duotone color treatment with VIVID TEAL (#00B5A0) sky
    and deep navy (#1F2937) shadows. The sky should be BRIGHT and VIBRANT
    teal, NOT dark or muted. Strong contrast between illuminated buildings
    and the colorful sky.

    Cinematic composition with the [SUBJECT] in the right two-thirds,
    open bright teal sky on the left for text placement. Water reflections
    mirroring the teal sky. [Additional details: bridges, landmarks, etc.].

    Photorealistic, shot on medium format camera. Vibrant, high contrast,
    magazine-quality. No text, no graphics, no overlays.""",
    enable_google_search=True,  # Critical for accurate landmarks
    aspect_ratio="16:9",        # Must match for consistent card crops
    output_path="src/images/coverage/[state-slug].jpg"
)
```

**Key Contrast Requirements:**
- Sky must be **bright vibrant teal**, not dark navy
- Strong separation between light sky and dark buildings/water
- Buildings should have visible illumination/city lights
- Water reflections should mirror the teal sky color
```

**Lifestyle Segment Image:**
```python
mcp__nanobanana__gemini_generate_image(
    prompt="""Warm, authentic photograph of [DEMOGRAPHIC DESCRIPTION]
    in [SETTING/ENVIRONMENT].

    [Subject] is [ACTION with phone], showing natural, unposed moment.
    [Environmental details that match the demographic].

    Lighting: [Natural daylight/warm afternoon/soft indoor] creating
    [mood] atmosphere. Shot with 50mm lens at f/2.8, shallow depth of field.

    Teal (#00B5A0) accent visible naturally in scene (phone case, mug,
    clothing detail, etc.). Diverse representation, authentic feel.
    Focus on lifestyle context rather than the device.""",
    conversation_id="[segment]-lifestyle-series",
    aspect_ratio="16:9",
    output_path="src/images/lifestyle/[segment].jpg"
)
```

---

### Sources

**Official Documentation:**
- [Nano Banana Image Generation API](https://ai.google.dev/gemini-api/docs/image-generation) - Google AI for Developers
- [How to Prompt Gemini Image Generation](https://developers.googleblog.com/en/how-to-prompt-gemini-2-5-flash-image-generation-for-the-best-results/) - Google Developers Blog
- [Gemini Image Generation Production Release](https://developers.googleblog.com/en/gemini-2-5-flash-image-now-ready-for-production-with-new-aspect-ratios/) - Google Developers Blog

**MCP Server:**
- [Nanobanana MCP Server](https://github.com/zhongweili/nanobanana-mcp-server) - GitHub Repository

**Prompting Research:**
- [Gemini Flash Image Prompting Guide](https://www.cursor-ide.com/blog/gemini-flash-image-prompting-guide) - Production templates and cost optimization

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

**Pre-Generation:**
- [ ] Identify image category (blog, state, comparison, lifestyle, diagram)
- [ ] Select appropriate template from Production-Ready Templates section
- [ ] Determine if `conversation_id` needed for multi-image consistency

**Generation:**
- [ ] Use `reference_images=["src/images/logo.png"]` for brand consistency
- [ ] Apply 6-component framework: Shot → Subject → Action → Environment → Lighting → Style
- [ ] Set correct `aspect_ratio` (usually `"16:9"` for blog/OG images)
- [ ] Use `enable_google_search=True` for geographic/landmark images
- [ ] Specify `output_path` following file organization conventions

**Post-Generation:**
- [ ] Verify brand colors match (#00B5A0 teal, #1F2937 navy)
- [ ] Check composition leaves space for text overlay if needed
- [ ] Optimize file size (<200KB for web)
- [ ] Use descriptive filename with keywords
- [ ] Write keyword-rich alt text
- [ ] Test OG image preview (opengraph.xyz)
- [ ] If character consistency needed, note `conversation_id` for future use

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
*Updated: January 2026 - Added logo reference requirement, MCP tool reference*
*Updated: January 2026 - Migrated to mcp__nanobanana__ tools, added 6-component prompting framework, production templates, session workflows, character consistency techniques*
*Review quarterly for updates*
