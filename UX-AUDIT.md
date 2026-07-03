# Carta Website: UI/UX Audit

Reviewed July 3, 2026, against the production build at 1440px. Covers every page, plus code review of all components. Ordered by priority: fix, improve, then the excitement layer (Framer Motion and Three.js).

---

## P0: Broken or blocking

**1. The Calendly embed is dead.**
The widget on /contact renders Calendly's "Looking to explore?" fallback, which means `calendly.com/travelbycarta/discovery-call` does not exist. Every "Book a Call" CTA on the site funnels here. Until the event type is created in Calendly (or `NEXT_PUBLIC_CALENDLY_URL` points at a real one), the site's primary conversion path is a 404 inside a card. Also worth adding: a graceful fallback in `CalendlyEmbed.tsx` that shows the email/phone block if the widget fails to load, so this class of failure can never silently eat leads again.

**2. Pages start invisible.**
Every section on every page is wrapped in `FadeIn`, which renders at opacity 0 until an IntersectionObserver fires. Consequences: content is blank until JS hydrates (slow connections see an ivory void), fast scrollers see half-faded text, and if JS ever errors the page simply never appears. Fix: render visible by default and add the hidden class only after JS confirms it will animate ("animate in, never hide by default"), shorten the duration to ~0.45s, and respect `prefers-reduced-motion` (currently ignored by the fades, the compass spin, and the phone float).

---

## P1: Real usability issues

**3. How It Works timeline labels are illegible.** The duration chips ("AT YOUR PACE", "1 TO 2 WEEKS") are 9px gold at 70% opacity on ivory. Bump to 11px, full-strength gold-deep.

**4. How It Works wastes enormous vertical space.** The alternating left/right layout puts ~500px of dead space between steps at desktop. Tighten `lg:py-12` and the step gaps by roughly half, and strengthen the center line (gold/20 is nearly invisible) so the timeline actually reads as a spine.

**5. Bullet markers are nearly invisible.** The services card and app-showcase lists use a tiny middot. Replace with a short gold dash (like the GoldRule motif) or a small compass tick, 1.5px stroke. This is the brand's chance to own even its list markers.

**6. Two identical quote sections on the homepage.** "What Carta Is" and the brand story section are the same layout, same italic serif, same author line, three sections apart. Merge them, or differentiate hard: keep one as the pull quote and turn the other into a founder block with a photo (the About page still uses a placeholder gradient where a portrait should be).

**7. "How the pricing works" link looks like a stray caption.** Italic serif with no affordance. Style it like the other text links (uppercase, gold, tracking) or make it a proper secondary button.

**8. No current-page indicator in the nav.** All five links look identical on every page. Add a gold underline or dot for the active route (usePathname).

**9. Accessibility gaps.** No skip-to-content link; `.btn-primary`/`.btn-secondary` have no visible focus-visible ring; `prefers-reduced-motion` unhandled; the 9px labels fail WCAG contrast. All cheap to fix, all worth fixing before launch.

**10. No analytics.** Nothing is measuring whether any of this works. Add Vercel Analytics (zero config) or Plausible before driving any traffic.

---

## P2: What it needs to feel alive

**11. A "See a sample trip hub" demo. The single highest-impact addition possible.**
The trip app already serves the Paris demo at a public slug. Nothing sells the product like touching it. Add a prominent "Explore a sample trip hub" CTA on the homepage and /the-carta that opens the demo (new tab, or framed in a phone-shaped modal). The site currently *describes* the product everywhere and *shows* it nowhere interactive.

**12. Photography.**
The site is 100% typography. Confident, but for luxury travel it leaves emotion on the table. Per the voice doc, avoid stock; use your own trip photos, edited consistently (warm, slightly desaturated, navy-friendly). Three placements that would transform it: a full-bleed image band on the homepage between How It Works and the app showcase, a real founder portrait on About, and small square images in the How It Works bridge section.

**13. Social proof, when it exists.** The founder quote standing in for testimonials is the right move today. The moment two real client quotes exist, give them the navy quote treatment with trip context ("Paris, October 2026").

---

## The excitement layer

### Framer Motion (already installed, only the hero uses it)

Worth doing, in order of payoff:

1. **Phone mockup parallax and tilt.** `useScroll` + `useTransform` so the phone drifts slower than the page and straightens from its -2° tilt as it enters. On hover, a gentle 3D tilt following the cursor (rotateX/rotateY spring). Makes the product feel physical.
2. **Live demo loop inside the mockup.** Cycle the mockup's state every ~4s with `AnimatePresence`: Up Next banner slides in, day pill switches Thu to Fri, a card flips from Idea to Confirmed. The mockup becomes a 12-second silent movie of the product doing its job. This pairs with item 11 as the excitement core of the site.
3. **Timeline draw on How It Works.** Tie the center line's `scaleY` to `useScroll` progress so the gold line draws down the page as you read, dots popping as it passes. Turns the weakest page into the most satisfying scroll.
4. **Hero refinements.** Per-word mask reveal on the headline (staggered `clipPath`), and draw the compass SVG in with `pathLength` on load. Cheap, elegant.
5. **Scroll progress hairline.** A 1.5px gold gradient bar under the sticky nav tracking page progress. On-brand (it is literally the GoldRule).
6. **Page transitions.** An `app/template.tsx` with a 0.3s fade/8px rise on route change. Makes the whole site feel composed.
7. **Comparison table strike-through.** On /the-carta, animate the line-through drawing across each "generic travel app" cell as it enters view.

### Three.js (not installed; adds ~150kB gzipped, so spend it once)

The honest recommendation: one Three.js moment maximum, in the hero, lazy-loaded with `next/dynamic` (ssr: false), paused when offscreen, with a static fallback for mobile and reduced-motion. Options, best first:

1. **Wireframe globe with route arcs.** A slow-rotating, low-poly wireframe globe in gold lines (0.5 opacity) behind or beside the hero headline, with 3 or 4 great-circle arcs pulsing between cities. It is literally the brand: carta, maps, navigation. react-three-fiber + drei makes this ~150 lines.
2. **Particle compass rose.** A few thousand gold particles loosely forming the compass mark, drifting apart and reforming with cursor movement. Subtler, cheaper to render, less legible as a concept.
3. **Contour-line shader band.** A section divider running an animated topographic-contour fragment shader in navy/gold. Atmospheric, but weakest tie to a message.

Skip: a 3D phone model (the CSS mockup with Framer tilt achieves 90% of it for 0% of the bundle), and any full-page WebGL background (fights the typography, hurts LCP).

### If you do only three things

1. Fix the Calendly link (P0, ten minutes, it is the entire funnel).
2. The mockup demo loop + sample trip hub link (the site starts showing instead of telling).
3. The hero globe (the one "whoa" moment, and it is on-brand to its bones).

---

## Page-by-page notes

**Home.** Strong spine, right order. Weaknesses: quote duplication (item 6), invisible bullets (5), pricing link (7). The new mockup reads well at both sizes.

**How It Works.** Content is excellent; layout undercuts it (items 3, 4). With the timeline draw animation this becomes the best page on the site.

**The Carta.** Now the richest page. The In Your Pocket grid is dense and scannable. The sample entry (Septime) is the most persuasive block on the entire site; consider promoting a compact version of it to the homepage.

**Services.** FAQ copy is genuinely good. The WorldVia band feels like a legal disclaimer wedged between sections; fold it into the FAQ as "Who is behind Carta?".

**About.** Needs the founder photo more than any other change on the site. The placeholder gradient card with a quote reads as unfinished precisely where trust is built.

**Contact.** Fix Calendly. Otherwise well-structured; the write-first form with honeypot and clear success state is solid. Consider swapping the generic select for "How did you hear about me?" pill buttons, which are friendlier on mobile.
