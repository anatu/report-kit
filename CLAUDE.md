# Working in this repo (instructions for Claude)

This is a **buildless static HTML report kit**. Output is plain HTML/CSS that
publishes directly to GitHub Pages — no npm, no build step, no framework.

## Before producing any deliverable

1. **Read `BRAND.md`** — it is the design contract. Follow it exactly.
2. **Use the design tokens** in `styles/tokens.css`. Never hardcode colors,
   fonts, or spacing inline — reference CSS variables or the existing classes.
3. **Treat `template.html` as a component palette, not a skeleton.** It shows
   every available element so you can pick what fits — it is NOT a structure to
   replicate top-to-bottom. Let the findings dictate which components appear and
   in what order. **Do not fabricate or backfill numbers to fill a slot** (e.g.
   a stat row of setup parameters); omit any component the content doesn't need.
   See "The template is a palette, not a checklist" in `BRAND.md`.

## How to make a new report

- Duplicate `template.html` into `reports/<slug>.html` (create `reports/` if
  needed). Fix the relative paths to the stylesheets (`../styles/...`).
- Write semantic HTML. The stylesheet themes bare `<h2>`, `<table>`,
  `<figure>`, `<blockquote>`, etc. — reach for a class only when one exists in
  `report.css` (`.callout`, `.stats`, `.table-wrap`, `.chart`).
- Add the report as a `.card` in `index.html` (newest first).
- For charts, use Observable Plot via the CDN import + `themed()` from
  `styles/plot-theme.js`, as shown in `template.html`. Load real data with
  `fetch('../data/<file>.json')`; keep raw data in `data/`.

## Do / don't

- DO keep it legible, structured, scientific. Lead with the conclusion.
- DO test by opening over a local server (`python3 -m http.server`), **not**
  `file://` — ES module imports and Plot need HTTP.
- DON'T add marketing flourishes, animations, gradients, or new fonts.
- DON'T introduce a build tool or dependencies without being asked. The value
  of this kit is that it stays buildless and publishes anywhere static.

## Publishing

Push to the repo's default branch; the GitHub Action in
`.github/workflows/deploy.yml` publishes the whole repo to Pages.
