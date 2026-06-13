# report-kit

A buildless static-HTML toolkit for **dark, matte, muted, scientific** reports,
dashboards, and notes — built to be read by other people and published free on
GitHub Pages. No npm, no build step, no framework.

## What's here

```
report-kit/
├── styles/
│   ├── tokens.css      ← design tokens (colors, fonts, scale) — edit the look HERE
│   ├── report.css      ← element & component styling built on the tokens
│   └── plot-theme.js   ← themed Observable Plot helper (charts match the palette)
├── template.html       ← base report + live style reference (the "kitchen sink")
├── index.html          ← landing page listing your reports
├── BRAND.md            ← the design contract (the rules the aesthetic enforces)
├── CLAUDE.md           ← instructions so Claude extends it in-style
├── new-report.sh       ← scaffold a new report from the template
└── .github/workflows/deploy.yml  ← one-click GitHub Pages deploy
```

## Quick start

```bash
# 1. Preview locally (use a server — ES modules + Plot need HTTP, not file://)
cd report-kit && python3 -m http.server
# open http://localhost:8000/template.html

# 2. Make a new report
./new-report.sh my-first-report
# edit reports/my-first-report.html, then add a card to index.html

# 3. Publish (once it's a GitHub repo)
#    Settings → Pages → Source: "GitHub Actions", then:
git add -A && git commit -m "new report" && git push
```

## How to ask Claude for a report

Point Claude at this folder and it will read `CLAUDE.md` + `BRAND.md` and stay
on-style. For example:

> "Make a new report in report-kit summarizing the Q2 distillation results.
> Use the kit's template and tokens. Include a cost/quality table and a loss
> curve chart."

## Design system

All look-and-feel lives in `styles/tokens.css`. Change a few variables and every
report updates. The aesthetic and its rules are documented in `BRAND.md`.

- **Palette:** layered darks, off-white text, muted blue + muted green accents.
- **Type:** IBM Plex Sans / Serif / Mono.
- **Components:** `.callout` (note/good/warn/danger), `.stats` key figures,
  themed tables, `.chart` + Observable Plot, `.card-grid` index.
- Print stylesheet included (flips to clean light ink-saving layout).

## Reusing the tokens elsewhere

`styles/tokens.css` is plain CSS variables — you can `@import` it into a Quarto
theme or an Observable Framework stylesheet later, so data-heavy projects share
the same identity. This kit covers prose reports + landing/index pages; add
Quarto or Observable Framework alongside it when you need live data pipelines.
