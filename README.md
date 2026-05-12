# CEEALAR Design System

The brand and visual system for the **Centre for Enabling EA Learning & Research**.

This repo is the engineering source of truth — tokens, fonts, and logo files —
maintained alongside a working design environment where the system evolves.

## Contents

```
colors_and_type.css     CSS custom properties — drop into any project
tokens.json             Same tokens in machine-readable JSON
fonts/                  DM Sans + Playfair Display variable fonts (self-hosted)
logo/                   Master logo PNGs (gradient, teal, white)
ui-kit/website/         Reference React components for marketing-site work
```

## Quick start (web)

```html
<link rel="stylesheet" href="path/to/colors_and_type.css">
```

Then use the CSS custom properties:

```css
.hero {
  background: var(--teal-700);
  color: var(--cream-50);
  font-family: var(--f-display);
}
```

## Brand rules (the short version)

- **Type:** DM Sans for everything. Playfair Display *italic* only for one
  expressive accent per surface. Never Playfair upright as a regular heading.
- **Colour:** `--teal-700` primary, `--gold-500` accent (sparingly — borders,
  rules, single highlighted words), `--cream-50` page background.
- **Logo:** use the PNG files in `logo/`. Don't redraw the mark.
- **No emoji, no decorative icons.** Text- and photograph-first.
- **Stats:** Playfair Display italic 500, in teal-700.

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

## Versioning

Tag releases semver-style. Breaking token renames bump major.

## Working source

The live design environment (preview cards, working drafts, brand book) lives
in a Claude project linked to this repo. Engineering changes flow Claude → here
via PR.
