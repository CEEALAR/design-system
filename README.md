# CEEALAR Design System

The brand and visual system for the **Centre for Enabling EA Learning & Research**.

This repo is the engineering source of truth — tokens, fonts, and logo files —
maintained alongside a working design environment where the system evolves.

**Current version: 0.4.0** — adds restrained, editorial scroll motion.
v0.3 reflected the deeper, less-saturated teal and warmer gold used in
production web work (web is canonical for digital surfaces; Canva sources may
drift). v0.4 adds a scroll-reveal system (`.reveal-enabled` + `.is-visible`)
and an opt-in staggered container (`[data-reveal-stagger]`), plus reference
`ScrollReveal` and `CountUp` components. All motion is reduced-motion safe and
degrades to fully-visible content with no JS.

## Contents

```
colors_and_type.css        CSS custom properties — palette, type, spacing, radii
effects-and-motion.css     Shadows, gradients, motion tokens, editorial utilities
tokens.json                All tokens in machine-readable JSON (Tokens Studio schema)
fonts/                     DM Sans + Playfair Display variable fonts (self-hosted)
logo/                      Master logo PNGs (gradient, teal, white)
ui-kit/website/            Reference React components for marketing-site work
```

## Quick start (web)

```html
<link rel="stylesheet" href="path/to/colors_and_type.css">
<link rel="stylesheet" href="path/to/effects-and-motion.css">
```

Then use the CSS custom properties:

```css
.hero {
  background: var(--gradient-teal);
  color: var(--fg-inverse);
  font-family: var(--f-display);
  box-shadow: var(--shadow-hero);
  border-radius: var(--r-xl);
}

.stat {
  font-family: var(--f-serif);
  font-style: italic;
  font-weight: 500;
  color: var(--teal-700);
}
```

## Brand rules (the short version)

- **Type:** DM Sans for everything. Playfair Display *italic* only for one
  expressive accent per surface. Never Playfair upright as a regular heading.
- **Colour:** `--teal-700` (`#0F766E`) primary, `--gold-500` (`#D4A017`) accent
  (sparingly — borders, rules, single highlighted words), `--cream-50` page
  background.
- **Logo:** use the PNG files in `logo/`. Don't redraw the mark.
- **No emoji, no decorative icons.** Text- and photograph-first.
- **Stats:** Playfair Display italic 500, in `--teal-700`.

## Palette

### Teal (primary)

| Token | Hex | Use |
|---|---|---|
| `--teal-deep` | `#0B5953` | Deep hover, gradient companion |
| `--teal-700` | `#0F766E` | **Primary** — fills, buttons, brand surfaces |
| `--teal-soft` | `#14958B` | Gradient companion, lighter primary |
| `--teal-500` | `#2BA0B0` | Accents, interactive states |
| `--teal-300` | `#63C5CE` | Subtitle on teal |
| `--teal-100` | `#D3EBED` | Background tint |

### Gold (accent)

| Token | Hex | Use |
|---|---|---|
| `--gold-deep` | `#B8870E` | Gradient companion — deepest gold |
| `--gold-700` | `#B08A3E` | Hover for gold actions (text contexts) |
| `--gold-500` | `#D4A017` | **Accent** — italic serif, borders, dividers |
| `--gold-soft` | `#E8B73E` | Softer accent, gradient companion |
| `--gold-300` | `#E5C896` | Subtle backgrounds |

### Cream (surface)

| Token | Hex | Use |
|---|---|---|
| `--cream-50` | `#FAF7F0` | Page background |
| `--cream-100` | `#F5F0EA` | Card surface |
| `--cream-200` | `#EBE3D6` | Divider |
| `--cream-deep` | `#F4EFE3` | Warm tint (gradient base) |

## Gradients

```css
--gradient-teal  /* 135deg, #14958B → #0B5953 (buttons, hero surfaces)   */
--gradient-gold  /* 135deg, #E8B73E → #B8870E (accent emphasis)          */
--gradient-warm  /* 180deg, #FAF7F0 → #F4EFE3 (section dividers)         */
--gradient-mesh  /* radial dual-tint (page-level under cream)            */
```

## Elevation

```css
--shadow-xs         /* hairline / inset    */
--shadow-sm         /* card resting state  */
--shadow-md         /* card hover, popover */
--shadow-lg         /* modal / dialog      */
--shadow-hero       /* hero header — teal-tinted */
--shadow-glow-teal  /* focus ring          */
```

## Motion

```css
--duration-fast    /* 120ms — press/hover feedback     */
--duration-medium  /* 200ms — standard (default)       */
--duration-slow    /* 320ms — sheet/dialog enter/leave */

--ease-out-quart   /* default ease — quick start, gentle settle */
--ease-out-expo    /* dramatic enter — hero/modal reveals       */
```

All motion respects `prefers-reduced-motion: reduce`.

## Editorial utilities

```html
<h1 class="editorial-h1">
  We host <em>independent</em> researchers.
</h1>
<p class="editorial-eyebrow">Funded residency</p>
<hr class="hr-editorial">

<div class="hero-header">…feature card with cream gradient + teal shadow…</div>
<nav class="glass">…translucent floating tab strip…</nav>

<a class="press" href="…">Tappable surface (active state scales down)</a>
<article class="lift">Card with hover lift</article>
<section class="fade-up">Fades and rises in on first paint</section>
<ul class="stagger">
  <li>Children animate in sequence (40ms apart)</li>
</ul>
```

## Logo

| File | Use |
|---|---|
| `logo/logo-mark-gradient.png` | Primary — on cream, white, or charcoal |
| `logo/logo-mark-teal.png` | Single-ink contexts |
| `logo/logo-mark-white.png` | Knockout on teal-700 / dark backgrounds |

## Fonts

DM Sans and Playfair Display are variable fonts loaded via `@font-face` in
`colors_and_type.css`. No external CDN — fonts ship with the system.

Licences:
- DM Sans — SIL Open Font License 1.1
- Playfair Display — SIL Open Font License 1.1

## UI kit

`ui-kit/website/` contains React reference components for landing-page work:
header, hero, stat block, offer list, alumni roll, quote, apply CTA, footer.
Open `ui-kit/website/index.html` in a browser to see them composed.

> **Note (v0.3):** these components still reference the v0.2 token names
> (`--teal-700: #018498` etc.) via the embedded `site.css`. They render fine
> against the v0.3 palette because token names are unchanged — only the hex
> values shifted. Visual review encouraged before next marketing-site update.

## Versioning

Tag releases semver-style. Breaking token renames bump major.

| Version | Date | Notes |
|---|---|---|
| 0.3.0 | 2026-05-17 | Aligned with CEEALAR Pulse v1. Teal/gold values shifted; added `effects-and-motion.css` with shadow tiers, gradients, motion tokens, editorial utilities. Token *names* unchanged from 0.2. |
| 0.2.0 | 2026-05-12 | Canva-extracted palette baseline. |

## Working source

The live design environment (preview cards, working drafts, brand book) lives
in a Claude project linked to this repo. Engineering changes flow Claude → here
via PR.
