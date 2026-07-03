# Carta Website: Photography Generation Brief

Every image the site needs, with exact filenames, sizes, and generation prompts.
Generate at the listed resolution or larger, export as JPG (quality ~80), and drop
the files into `website/public/photos/` with these exact names. The homepage
destination band detects the three required files at build time and appears
automatically on the next `npm run build`. Optional images have their own notes.

---

## The style system (paste this into every prompt)

Append this block to each prompt below so the set looks shot by one photographer:

> Editorial travel photography, shot on 35mm film, natural dusk light, deep navy
> blue shadows, warm muted gold highlights, ivory and cream midtones, soft film
> grain, quiet and unstaged, no people's faces visible, understated luxury,
> composition with generous negative space, the mood of a place remembered
> rather than advertised.

Negative prompt (for tools that support one):

> no text, no watermark, no logos, no faces, no HDR, no oversaturation, no
> tourist crowds, no lens flare, not stock photography, no blue sky clichés

Midjourney users: add `--ar 4:5 --style raw` (or `--ar 16:9` for the wide shots).
ChatGPT/Firefly users: just paste the prompt plus the style block.

Why no faces: keeps the set timeless, avoids uncanny AI faces, and keeps the
focus on place. Hands, silhouettes, and figures from behind are fine.

---

## Required: homepage destination band (3 images)

These replace the current chart art on the homepage. Aspect 4:5 portrait,
minimum 1600 x 2000 px.

### 1. `paris.jpg`

> A quiet Paris side street in the 11th arrondissement at blue hour, wet
> cobblestones reflecting warm bistro light, a small restaurant's gold-lit
> windows glowing against deep blue dusk, empty café chairs, zinc rooftops
> fading into the evening, shot from street level.

### 2. `tokyo.jpg`

> A narrow Tokyo alley in Yanaka at dusk, paper lanterns glowing warm gold
> against deep blue twilight, a lone figure in the far distance walking away
> under an umbrella, layered signage receding into soft focus, steam rising
> from a small kitchen vent, intimate and calm.

### 3. `amalfi.jpg`

> The Amalfi coast seen from a high terrace at golden hour, lemon trees in
> terracotta pots in the foreground, whitewashed and pastel buildings stepping
> down the cliff to a deep navy sea, a small boat leaving a thin white wake,
> the sun low and gold on the water.

---

## Recommended: About page atelier scene (1 image)

Replaces the chart currently standing in on the About page. Aspect 3:4
portrait, minimum 1500 x 2000 px.

### 4. `atelier.jpg`

> A travel advisor's desk seen from above at evening, an open Moleskine with
> handwritten notes, a vintage map of Paris partially unrolled, a fountain pen,
> reading glasses, a phone showing a maps app, warm lamp light pooling on deep
> navy leather, espresso cup with saucer, meticulous but lived-in.

Note: the strongest possible image for the About page is a real portrait of
you. When you have one, we swap it in and move this atelier shot elsewhere.
AI cannot generate you, so this scene is the stand-in that still says
"a person does this work."

---

## Optional: atmosphere slots (nice to have)

### 5. `in-transit.jpg` — wide, for the How It Works hero or bridge

16:9, minimum 2400 x 1350 px.

> An airport window at dusk seen from the quiet end of a first-class lounge, a
> plane silhouetted against a deep navy and gold gradient sky, reflections of
> warm interior lamps in the glass, an empty leather chair and a folded coat,
> stillness before a journey.

### 6. `midnight-help.jpg` — wide, for the trip hub page

16:9, minimum 2400 x 1350 px.

> Hands holding a phone in the back seat of a taxi at night in a foreign city,
> the screen glowing softly (no readable text on screen), rain-blurred neon in
> deep blues and golds through the window, the feeling of being looked after
> far from home.

### 7. `arrival.jpg` — wide, for the services or contact page

16:9, minimum 2400 x 1350 px.

> A grand hotel corridor at night, a single door ajar spilling warm gold light
> across a deep navy carpet, a leather weekender bag set down beside it, quiet
> anticipation, symmetrical one-point perspective.

---

## Checklist

1. Generate 1-3 (required), 4 (recommended), 5-7 (optional).
2. Save into `website/public/photos/` with the exact filenames above.
3. Tell me, or run `npm run build` yourself; the destination band switches on
   automatically once paris.jpg, tokyo.jpg, and amalfi.jpg all exist.
4. I'll place 4-7 by hand when they arrive, since each changes a page layout.
