# Design Contract — Report Kit

> The aesthetic this kit enforces. Read this before producing any deliverable.
> The rules below are deliberate; follow them rather than defaulting to generic
> choices. All concrete values live in `styles/tokens.css` — change them there,
> never inline.

## Aesthetic in one line

**Dark, matte, muted, scientific.** A document built to be *read* by other
people — legibility and clean structure over visual flash. Think lab report or
technical memo, not landing page.

## The template is a palette, not a checklist

`template.html` is a **library of components to draw from**, not a skeleton to
fill in. Reuse the *design system* (tokens, themed elements, component
vocabulary) every time — but let the **findings dictate the structure**, not the
other way around.

- **Never invent or backfill numbers to populate a component.** A `.stats` row
  is only for genuine headline results a reader would actually quote — a
  benchmark delta, a cost, a rate, an effect size. Setup parameters (sample
  sizes, ranges, config values) are NOT headline stats. If the findings aren't
  "number-shaped," omit the stat row entirely.
- **Omit any component that doesn't fit.** No stat row, no chart, no table, no
  callout unless the content genuinely calls for it. A clean 3-section report
  with one figure can be the correct answer.
- **Section order and emphasis follow the argument**, not the template. Lead
  with the actual result; structure the rest around how the finding is best
  explained.
- **Match the form to the report type.** Dashboard/benchmark results are often
  stat- and table-heavy; narrative/scientific arguments are usually prose +
  a few decisive figures. Don't force one into the other's shape.

The test: every element on the page should be there because the *content* needs
it. If you added something because the template had a slot for it, remove it.

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
