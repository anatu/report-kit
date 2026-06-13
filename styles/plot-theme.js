// ============================================================
// plot-theme.js — themed Observable Plot for the report kit.
// Pulls colors straight from the CSS variables in tokens.css,
// so charts always match the document. No build step.
//
// Usage (in an HTML module script):
//   import * as Plot from "https://cdn.jsdelivr.net/npm/@observablehq/plot/+esm";
//   import { themed, palette } from "./styles/plot-theme.js";
//   const fig = Plot.plot(themed({ marks: [ Plot.line(data, {x:"t", y:"v"}) ] }));
//   document.querySelector("#chart").append(fig);
// ============================================================

const css = (name, fallback) => {
  if (typeof getComputedStyle === "undefined") return fallback;
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback;
};

// Ordered categorical palette: blue, green, then muted neutrals.
// Kept low-saturation to honour the matte/scientific aesthetic.
export const palette = () => [
  css("--accent", "#6ea7d0"),
  css("--accent-2", "#79b487"),
  css("--warn", "#cda35c"),
  css("--text-muted", "#97a2b1"),
  css("--danger", "#cf7f7b"),
  "#9b8bd0", // reserved 6th — muted violet
];

// Wrap a Plot spec with consistent dark theming.
// Pass any normal Plot options; theme defaults fill the gaps.
export function themed(spec = {}) {
  const text = css("--text-muted", "#97a2b1");
  const font = css("--font-sans", "system-ui, sans-serif");

  return {
    width: 720,
    height: 360,
    marginLeft: 52,
    marginBottom: 40,
    ...spec,
    style: {
      background: "transparent",
      color: text,
      fontFamily: font,
      fontSize: "13px",
      overflow: "visible",
      ...(spec.style || {}),
    },
    // Sensible axis defaults; callers can override per-spec.
    // Gridlines inherit the muted text color so data leads, not chrome.
    x: { tickSize: 4, ...(spec.x || {}) },
    y: { grid: true, tickSize: 0, ...(spec.y || {}) },
    color: { range: palette(), ...(spec.color || {}) },
  };
}

// Convenience: append a themed plot into a selector.
export function renderPlot(Plot, selector, spec) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.replaceChildren(Plot.plot(themed(spec)));
}
