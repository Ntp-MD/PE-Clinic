# Design System

## Visual Theme & Atmosphere

PE-Clinic's interface embodies the essence of a world-class beauty sanctuary — a sophisticated, clinical-luxury aesthetic where pristine imagery and serene spatial design become the primary experience. This is not a conventional medical website; it's a digital portrait of refined rejuvenation where every section evokes the tranquility of a premium wellness destination. Soft, ethereal lighting, flawless beauty portraits, and immaculate treatment spaces captured in high-quality photography dominate the viewport, creating an atmosphere of exclusivity and trust.

The design language centers on a single elegant typeface — abcNormal — a clean, geometric sans-serif that delivers everything from graceful display headlines to delicate 11px uppercase labels. This single-font discipline establishes typographic harmony that allows the visual content to convey the clinic's premium positioning. Headlines employ refined line-heights (1.0) with subtle negative letter-spacing (-0.9px to -1.2px), creating poised text blocks that feel like luxury brand statements rather than clinical announcements.

What distinguishes this aesthetic is the seamless fusion of medical precision with spa-like serenity. Instead of sterile diagrams or generic stock imagery, the design showcases authentic beauty transformations, luminous skin treatments, and the clinic's pristine environment. The interface dissolves into pure elegance: minimal borders, zero shadows, soft neutral text, and a carefully balanced palette of light and dark tones that directs full attention to the beauty photography and the promise of transformation.

## Tech Stack

-Vue 3 + Composition API + TypeScript
-CSS (Vanilla Only) — No Tailwind, No utility-first frameworks

## Architecture

- UI blocks → components/
- Page screens → pages/
- Shared logic → utils/, composables/
- Shared styles → central stylesheet
- Variables → variables.css
- Responsive → Mobile-first

# Core Principles

- Follow clean, scalable project structure (best practices)
- Apply YAGNI — build only what is needed
- Create new types/components only when necessary
- Keep system simple, consistent, and maintainable

# Strict Prohibitions (MANDATORY)

- Do NOT use Tailwind CSS
- Do NOT use utility-first classes (e.g. flex, grid, gap-4, text-center)
- Do NOT generate shorthand styling classes
- Do NOT use inline styles unless absolutely necessary

# CSS Core

## Avoid using em, rem , px unit

**For px Exception Guidelines ALLOWED** (check each before using):

- Micro-interactions (small gaps < 8px, precise positioning)
- Single elements without siblings (icon parts, window controls)
- Special positioning effects (negative margins, complex transforms)
- Position properties (top, left, right, bottom) allow use px, %, vw unit

## What in variables.css file Example

```css Just Example
:root {
  /* Colors Theme* use in background-color property */
  /* Base */
  --bg-primary: #0b0b0c; /* charcoal หลัก */
  --bg-surface: #121214; /* card */
  --bg-elevated: #1a1a1d; /* section layer */
  --bg-soft: #f9fafb; /* off-white highlight */
  --bg-soft-alt: #f3f4f6; /* off-white รอง */

  --accent-primary: #d4d4d8; /* soft silver (แนะนำ) */
  --accent-hover: #ffffff;

  --text-primary: #f9fafb; /* บน dark */
  --text-secondary: #a1a1aa;
  --text-muted: #71717a;
  --text-dark: #1f2937; /* บน off-white */
  --text-light: #6b7280;

  /* Font Size use in font-size property  h1-h6, p*/
  --font-xs: clamp(12px, 0.5vw, 14px);
  --font-sm: clamp(14px, 1.5vw, 16px);
  --font-md: clamp(16px, 2vw, 18px);
  --font-lg: clamp(18px, 2.5vw, 20px);
  --font-xl: clamp(20px, 3vw, 24px);
  --font-2xl: calc(var(--font-xl) * 2);
  --font-3xl: calc(var(--font-xl) * 3);

  /* Spacing use in margin and padding and gap */
  --gap-xs: 5px;
  --gap-sm: 10px;
  --gap-md: 20px;
  --gap-lg: 30px;
  --gap-xl: 50px;
  --gap-section: clamp(50px, 5vw, 150px);

  /* Border Radius */
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 15px;
  --radius-lg: 20px;
  --radius-xl: 30px;
}
```

## How to variable

- background-color use --\*\* (hex color code)
- font-size use --font-\*
- font-color use --font-color\*
- margin, padding, gap use --gap\*

# Directory Structure

```
/assets/styles/
├── variables.css    # USER ONLY (colors, fonts, gap, accents) *(this file can use px)*
├── reset.css        # HTML element resets (body, html, a , button, article, etc.)
├── utilities.css    # Reusable classes (.card-**, .btn-**, etc.) Create depent on use in website zero waste class
├── form.css         # Base form styles (input, textarea, select, etc.)
├── animations.css   # Animations (hover, focus, transition , etc.)
└── main.css         # Import order
```

## How Naming Classes BEM naming Hyphen Only

- [base] is name reuseable class such .card, .btn in [utilities.css]
- [component] is name variant as featured, pricing styling self in each component file [Component.vue]
- [btn-**] variant btn style store in [utilities.css]
- [effect] is name utility class such as hover-lift, focus-ring that store in [animations.css]

```html Namimg
<article class="[base] [base]-[component] [effect]">
  <!-- content -->
</article>

<button class="[base] [btn-**] [effect]">
  <!-- content -->
</button>
```

```html Usage
<article class="card card-pricing hover-lift">
  <!-- content -->
</article>

<button class="btn btn-ghost hover-scale">
  <!-- content -->
</button>
```

## [component] style in each component file

```html
<style scoped>
  .[base]-[component] {
    - what besides from [base]
  }
</style>
```

## [btn-**] property in [utilities.css]

```css
[btn-**] {
  background: var(--color * *);
  color: var(--font-color * *);
}
```

# Heading Hierarchy Rules:

- **h1**: Use ONCE per page (main title/hero section)
- **h2**: Use for major section headers (features, pricing, contact)
- **h3-h6**: Use for subsections and nested content

**Best Practices:**

- Semantic hierarchy: h1 → h2 → h3 → h4 → h5 → h6
- No skipping levels (h1 → h3 is invalid)
- Descriptive, concise text for screen readers
- WCAG 2.1 AA standards
