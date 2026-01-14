# Infinite Zoom Animation Technique

A technique for creating continuous zoom-in/zoom-out video animations using AI-generated outpainted images.

---

## What It Is

A video effect where you appear to zoom in or out infinitely through AI-generated scenes. It uses **outpainting** (extending an image beyond its borders) to create a sequence of images that smoothly transition into each other.

**Use Cases:**
- Eye-catching social media content
- Music videos and intros
- Brand storytelling
- Artistic showcases

---

## How It Works

### Step 1: Generate Base Image

Start with a detailed prompt in Midjourney:

```
/imagine A cozy room with fireplace, cat sleeping, warm lighting --ar 16:9 --s 200
```

**Tips:**
- Use 16:9 aspect ratio for YouTube/social compatibility
- Adjust `--stylize` (0-1000) for artistic variation
- Adjust `--chaos` (0-100) for unexpected results

### Step 2: Use Midjourney's "Zoom Out" Feature

After upscaling your image:
1. Click **"Custom Zoom"** button
2. Choose zoom level: **1.5x** or **2x**
3. The AI fills in the surrounding area
4. Repeat **10-20+ times** to build a sequence

**Important:**
- Don't use "Make Variations" or "Remaster" — they break the zoom sequence
- Midjourney's "1.5x" zoom is actually 1.33x mathematically

### Step 3: Evolve the Prompt (Scene Transitions)

Change your prompt every few frames to create narrative transitions:

| Frame | Scene Description |
|-------|-------------------|
| 1-3 | Cozy room with fireplace |
| 4-6 | Room becomes a framed photo on a mantelpiece |
| 7-9 | Mantelpiece is inside a dark cave |
| 10-12 | Cave opens to a vast mountain landscape |
| 13-15 | Landscape is inside a snow globe |
| 16+ | Snow globe on a desk in a spaceship |

**Example prompt evolution:**
```
Frame 1: A cozy room with a chair by fireplace. Old woman reading. Black cat. --ar 16:9
Frame 5: A framed photo of a cozy room, sitting on an ornate wooden mantelpiece in a mysterious cave --ar 16:9
Frame 10: A vast underground cavern with glowing crystals, portal in the distance --ar 16:9
```

### Step 4: Download & Upscale Images

1. Click each upscaled image
2. Select "Open in Browser"
3. Right-click → Save as high-resolution file
4. (Optional) Use **Topaz Photo AI** to upscale 2x and enhance sharpness

### Step 5: Assemble in Video Editor

**Premiere Pro / After Effects / Final Cut Pro:**

1. **Import images** in sequence order
2. **Stack on timeline** with equal duration per image (e.g., 2-3 seconds each)
3. **Add keyframes:**
   - Start of each image: **Scale 200%**
   - End of each image: **Scale 100%**
4. **Add crossfades** (0.5s dissolve) between each transition
5. **Speed up** the final video by **400%** for smooth motion
6. **Crop edges** slightly to hide alignment issues

**Keyframe Math:**
- For 2x zoom images: 200% → 100%
- For 1.5x (1.33x) zoom images: 133% → 100%

---

## Tools Required

| Tool | Purpose | Link |
|------|---------|------|
| **Midjourney** | Generate outpainted image sequence | [midjourney.com](https://midjourney.com) |
| **Premiere Pro** | Video editing, keyframes, transitions | Adobe CC |
| **After Effects** | Advanced animation, smoother keyframes | Adobe CC |
| **Final Cut Pro** | Mac video editing alternative | Apple |
| **Topaz Photo AI** | Upscale images 2x with enhancement | [topazlabs.com](https://topazlabs.com) |
| **AI-Infinite-Zoom-Generator** | Python script to automate video creation | [GitHub](https://github.com/beltoforion/AI-Infinite-Zoom-Generator) |

---

## Automated Workflow (Python Script)

For batch processing, use the AI-Infinite-Zoom-Generator:

```bash
# Install dependencies
pip install opencv-python numpy

# Clone the repo
git clone https://github.com/beltoforion/AI-Infinite-Zoom-Generator.git
cd AI-Infinite-Zoom-Generator

# Run the script
python3 ./infinite_zoom.py -as -i ./your_images_folder -o video.mp4
```

**Parameters:**
| Flag | Description |
|------|-------------|
| `-as` | Auto-sort images by visual matching |
| `-zf 2` | Zoom factor (2 for Midjourney 2x, 1.33 for 1.5x) |
| `-zs 60` | Zoom steps per image (frames) |
| `-fps 30` | Output frame rate |
| `-i` | Input folder with images |
| `-o` | Output video file |

The script handles:
- Automatic image ordering via template matching
- Alignment correction for position shifts
- Content deviation compensation through cropping
- Smooth zoom interpolation using exponential scaling

---

## Key Settings Reference

| Setting | Value | Notes |
|---------|-------|-------|
| Aspect Ratio | 16:9 | Best for YouTube/social |
| Zoom Factor | 2x or 1.5x | Midjourney options |
| Images Needed | 10-20+ | More = longer video |
| Keyframe Start | 200% scale | For 2x zoom images |
| Keyframe End | 100% scale | Natural size |
| Crossfade | 0.5s dissolve | Hides seams |
| Speed Ramp | 400% | Smooth motion |

---

## Advanced Scroll & Animation Techniques

Beyond the standard "Infinite Zoom," AI outpainting allows for other mesmerizing scroll effects.

### 1. The "Infinite Pan" (Horizontal/Vertical Scroll)
Instead of moving *into* an image, you move *across* it. This creates the effect of a camera tracking through a continuous world.

**How to do it:**
1.  **Generate Base Image:** Start with a standard image.
2.  **Use "Pan" Arrows:** In Midjourney, click ⬅️ ➡️ ⬆️ or ⬇️.
3.  **Remix Prompt (Optional):** As you pan, change the prompt to evolve the story (e.g., "City street" -> "Forest path").
4.  **Repeat:** Continue panning in the *same* direction 5-10 times.
5.  **Assembly:** Stitch images in an editor. Unlike Zoom, the scale remains constant.
    *   *Tip:* In Premiere/AE, align images edge-to-edge. No scaling keyframes needed, just position movement.

**Use Cases:**
- **Horizontal:** Walking through a street, train window views, evolving historical timelines.
- **Vertical:** Dropping from space to ocean floor, climbing a beanstalk.

### 2. Parallax "2.5D" Scroll
Give your scroll depth by separating layers.

**The Concept:** Foreground elements move faster than background elements.

**Workflow:**
1.  **Generate Image:** Create a scene with clear depth (e.g., "A wolf in foreground, forest midground, mountains background").
2.  **Generate Depth Map:** Use tools like **LeiaPix** or **DepthAnything** to create a depth map.
3.  **Animate:**
    *   **Auto:** Use **Runway ML** or **CapCut's "3D Zoom"**.
    *   **Manual:** In After Effects, displace layers based on the depth map.

### 3. Seamless Looping Backgrounds
Create a scroll that never ends and never changes context—perfect for website backgrounds or Lofi music channels.

**Technique:**
1.  **Generate a Wide Pan:** Pan continuously for 3-4 frames.
2.  **The "Offset" Trick:** In Photoshop/After Effects:
    *   Apply "Offset" filter to shift the image horizontally by 50%.
    *   The "seam" will be visible in the middle.
    *   Use **Photoshop Generative Fill** to repair the seam seamlessly.
3.  **Result:** An image that can be repeated infinitely side-by-side without visible edges.

### 4. Reverse Zoom (Zoom IN)
Simply reverse the standard image sequence in your timeline to create a zoom-in effect instead of zoom-out.

### 5. Dynamic Rotation & Spiral Effects
Add a hypnotic quality by rotating the camera as it zooms.

**Technique (Post-Production):**
1.  **Generate Standard Zoom:** Create a standard straight zoom sequence.
2.  **Animate Rotation:** In your video editor (After Effects/Premiere):
    *   Parent all image layers to a "Null Object".
    *   Keyframe the **Rotation** of the Null Object (e.g., 0° -> 90° over the full clip).
    *   **Crucial:** You must generate *extra* padding/resolution or scale up slightly (110-120%) to avoid seeing black corners when the image rotates.

**Creative Prompts:**
- "A spiraling staircase extending infinitely..."
- "A twisted tunnel of clocks..."
- "Fractal patterns swirling into darkness..."

### 6. Camera Shake & Handheld Look
Break the "AI perfection" by adding human imperfection.

**Technique:**
- Apply a "Wiggle" expression (After Effects) or "Handheld" effect (Premiere/CapCut) to the camera position.
- This adds subtle organic movement, making the zoom feel like a drone shot or POV camera rather than a digital slide.

---

## Tool Update: AI Video Animators

Static scrolls are cool, but *moving* scrolls are better. Use these tools to animate elements *within* your scroll (e.g., flowing water, waving flags) before you animate the camera movement.

| Tool | Best For |
|------|----------|
| **Runway Gen-2 (Motion Brush)** | Paint specific areas to move (e.g., "make clouds move left"). |
| **Pika Labs** | Animate entire scenes with text prompts. |
| **LeiaPix** | Instant depth animation from static images. |
| **Luma Dream Machine** | High-quality realistic motion extension. |

---

## Gemini 3 Pro (Nano Banana) Workflow

The **Nano Banana Pro** (Gemini 3 Pro) model offers distinct advantages for infinite zoom/scroll generation, specifically its native ability to maintain subject consistency across frames and its dedicated "Story" mode.

### Method A: The Automated Story Sequence (Best for Keyframes)
Instead of generating one image at a time, use the `/story` command (or `generate_story` tool) to create a consistent 4-8 frame zoom sequence in one go.

**Command:**
`/story prompt:"A camera zooms out from a close up of a bee to a flower, then a meadow, then a mountain range" steps:4 transition:smooth`

**Why it works:**
- **Consistency:** Gemini 3 Pro keeps the style and core subjects identical across all generated frames.
- **Speed:** Generates the "keyframe" images for your video timeline instantly.

### Method B: Precision Outpainting with `/edit`
For granular control (standard Infinite Zoom/Pan), use the `/edit` (or `edit_image`) command.

**Workflow:**
1.  **Generate Base:** `/image prompt:"Cyberpunk city street --ar 16:9"`
2.  **Zoom Out:**
    *   Command: `/edit file:"image1.png" prompt:"Zoom out 2x, show the skyscrapers surrounding the street"`
    *   *Note:* Gemini's "edit" function handles outpainting when the prompt explicitly asks to "zoom out" or "expand view".
3.  **Pan (Scroll):**
    *   Command: `/edit file:"image1.png" prompt:"Pan right, show the neon market next to the street"`

### Tip: "Consistency Seed"
When using Nano Banana, you can lock the `seed` parameter.
- If you like Frame 1, note its **Seed ID**.
- Use that same seed for the subsequent `/edit` or `/story` commands to ensure the art style (brush strokes, lighting, color palette) remains perfectly matched.


---

## Common Issues & Fixes

| Problem | Solution |
|---------|----------|
| **Jumpy transitions** | Add longer crossfades; ensure consistent zoom factor |
| **Misaligned images** | Use the Python script's auto-alignment; crop edges |
| **Style inconsistency** | Keep `--seed` value consistent across prompts |
| **Edge artifacts** | Slight crop (5-10%) hides Midjourney's edge issues |
| **Low resolution** | Upscale with Topaz Photo AI before video assembly |

---

## Example Prompt Sequences

### Sci-Fi Journey
```
1. Astronaut floating in space station, looking at Earth through window --ar 16:9
2. Space station window is a screen in a futuristic control room --ar 16:9
3. Control room is inside a massive alien mothership --ar 16:9
4. Mothership orbits a ringed planet with two suns --ar 16:9
5. Planet is a hologram projection on a child's desk --ar 16:9
```

### Nature Macro to Macro
```
1. Dewdrop on a leaf, extreme macro --ar 16:9
2. Leaf is part of a flower in a meadow --ar 16:9
3. Meadow stretches to distant mountains --ar 16:9
4. Mountains are part of a continent seen from space --ar 16:9
5. Earth is a tiny dot in the Milky Way galaxy --ar 16:9
```

### Fantasy Portal
```
1. Ancient book with glowing runes, candlelit --ar 16:9
2. Book sits on altar in mysterious temple --ar 16:9
3. Temple is inside a giant tree in enchanted forest --ar 16:9
4. Forest surrounds a floating castle in the clouds --ar 16:9
5. Castle is a snow globe held by a wizard --ar 16:9
```

---

## Sources

- [Infinite Zoom from Midjourney Images](https://beltoforion.de/en/infinite_zoom/) — Technical breakdown
- [Infinite Zoom Video Tutorial](https://www.dotslinesandpaper.com/infinite-zoom-video-using-midjourney/) — Step-by-step guide
- [AI-Infinite-Zoom-Generator](https://github.com/beltoforion/AI-Infinite-Zoom-Generator) — Python automation tool
- [CineD Tutorial](https://www.cined.com/how-to-make-an-impressive-zoom-out-video-with-the-help-of-ai-tools-tutorial/) — Video production workflow

---

*Document created: January 2025*
