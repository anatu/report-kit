# Design Contract — Report Kit

> The aesthetic this kit enforces. Read this before producing any deliverable.
> The rules below are deliberate; follow them rather than defaulting to generic
> choices. All concrete values live in `styles/tokens.css` — change them there,
> never inline.

## Aesthetic in one line

**Dark, matte, muted, scientific.** A document built to be *read* by other
people — legibility and clean structure over visual flash. Think lab report or
technical memo, not landing page.

## Hard rules

1. **Dark mode only.** Layered dark surfaces (`--bg`, `--bg-elevated`,
   `--bg-inset`) — never pure black `#000`, never pure white `#fff`.
2. **Off-white text** (`--text`, `--text-strong`) on dark. Matte: avoid glows,
   heavy shadows, glossy gradients, neon saturation.
3. **Accents are muted blue (`--accent`) and muted green (`--accent-2`).** Use
   them sparingly — for one or two accents per view, not as fills everywhere.
   Color marks data and structure, not decoration.
4. **No marketing flourishes.** No hero gradients, no animated reveals, no
   oversized CTAs, no emoji-as-iconography. Motion is at most a 0.12s hover.
5. **Never the AI clichés** (from Anthropic's frontend-aesthetics guidance):
   - ✗ Purple gradient on white
   - ✗ Inter / Roboto / Arial / system-font defaults
   - ✗ Evenly-distributed rainbow palettes

## Typography

- **Sans:** IBM Plex Sans — body and UI. Technical provenance, highly legible.
- **Serif:** IBM Plex Serif — optional for long-form prose / quotations.
- **Mono:** IBM Plex Mono — code, data, labels, eyebrows, metadata.
- Restrained type scale (1.20 ratio, 17px base). Generous line-height (1.66)
  on a constrained measure (~72ch). Headings tight, slightly negative tracking.

## Structure

- Single readable column (`--content-max`); figures/tables may break wider.
- Lead with the conclusion. State the takeaway above each figure.
- Use semantic HTML: `<h2>`, `<table>`, `<figure>`/`<figcaption>`, `<blockquote>`.
  The stylesheet themes elements directly — **no utility-class soup needed.**
- Components available: `.callout` (note/good/warn/danger), `.stats`/`.stat`
  key-figure row, `.table-wrap`, `.chart`, `.card-grid` (index).

## Charts

- **Observable Plot**, themed via `styles/plot-theme.js` (pulls colors from
  tokens). Categorical order: blue → green → muted neutrals.
- Transparent chart background on `--bg-elevated` surface. Gridlines muted so
  the data leads. Tabular numerals. Label axes; caption every figure.

## When in doubt

Optimize for the reader skimming on a laptop at 11pm. Quiet, legible, structured.
If a choice makes it look more like a pitch deck, it's wrong.
