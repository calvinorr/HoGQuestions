# Styles Guide — House of Games (dashboard)

This document captures the design tokens, component patterns and implementation notes I applied while turning the mockup into the working dashboard. Use this as the canonical reference when adding UI or continuing development.

---

## Where to look
- Global tokens & utilities: `frontend/src/index.css`
- Dashboard component: `frontend/src/components/Dashboard.tsx`
- App entry & nav: `frontend/src/App.tsx`
- Shared UI primitives: `frontend/src/components/ui/*` (card, button, container)

---

## Design tokens (CSS variables)
Defined in `index.css :root`. Use the HSL-style variables already present.

Key tokens:
- --background: deep page bg
- --foreground: primary text
- --card / --card-foreground: surfaces
- --primary / --primary-foreground: primary actions
- --accent: accent/secondary highlights
- Spacing scale: --space-1 .. --space-8
- Radii: --radius-sm / --radius-md / --radius-lg
- Shadows: --shadow-sm / --shadow-md / --card-shadow

Recommendation: Always use tokens in new components rather than hard-coded colors.

---

## Palette & Gradients
- Primary CTA gradient (used for prominent CTAs): `linear-gradient(90deg, #7c4dff 0%, #40e0ff 100%)`
- Soft glass surfaces: `rgba(30,41,59,0.8)` with subtle border: `rgba(51,65,85,0.5)` and `backdrop-filter: blur(...)`.
- Button gradient variations exist for thematic tiles (blue / purple / green / orange).

---

## Top navigation — rules
Objective: simple, professional, highly readable top bar.

- Use `.nav-glass` container for the top bar. It provides:
  - dark translucent surface
  - subtle elevated shadow
  - strong foreground color for text and icons
- Nav items:
  - Use `.nav-item` for each link: inline-flex, center aligned, 8px radius, comfortable padding.
  - Icons have consistent sizing (≈ 18–20px) and 0.6rem gap to label.
  - Hover: very light soft lift and slightly brighter background (not large contrast).
  - Focus: `box-shadow` ring for keyboard users (existing CSS includes 3px soft ring).
- Brand:
  - Use a solid foreground text for the short brand inside the top nav (avoid bg-clip text in the nav to preserve readability).
- Responsive:
  - Current approach keeps a single professional bar and collapses label visibility at very small widths (we hide less important text using utility classes where required). If needed, implement a "More" menu for overflow instead of full-screen slide-over.

---

## Cards
Central primitive for content:
- Card variants:
  - `.glass-card` — the main dark glass surface with blur and inset border.
  - `.card-gradient-*` — small gradient tile variants for stat tiles.
  - `.card--elevated` and `.card--compact` supported by UI card component.
- Structure:
  - Header (title + optional small meta), content, footer/actions.
  - Use `Card`, `CardHeader`, `CardContent` components in `frontend/src/components/ui/card.tsx`.

---

## Stat tiles
- Use `.stat-tile` wrapper and `.stat-number` for the big numeric emphasis.
- Color-coded gradient tiles already defined (blue/green/purple/orange).
- Keep large number, uppercase label, and compact icon.

---

## Buttons & CTAs
- Primary CTA (manage games): pill-shaped `.btn-primary` with the main gradient and stronger shadow.
- Buttons are implemented with `buttonVariants` in `ui/button.tsx`. Prefer using `Button` component for consistent variants/sizes.
- For disabled/coming-soon features, use muted surfaces with `cursor-not-allowed`.

---

## Layout
- The dashboard uses a 3-column grid:
  - left: minmax(220px, 260px)
  - center: 1fr (fluid)
  - right: minmax(260px, 320px)
- Utility `.dashboard-grid` centralises grid settings (responsive rules are in `index.css`).
- Left column is sticky below the nav using `.dashboard-left` with `top` offset matching nav height.

---

## Responsive behavior
- Breakpoints in CSS:
  - <= 1280px: grid collapses to two columns; right panel moves under center
  - <= 768px: single-column stack (left, center, right stacked)
- Nav labels collapse using `hidden sm:inline` patterns where necessary; icons remain visible.

---

## Accessibility notes (todo)
- Add explicit ARIA roles for interactive composite widgets and ensure `aria-label` on icons where the label is not visible.
- Ensure focusable elements have a visible focus state (already included for `.nav-item:focus-visible`).
- Buttons and links should include `aria-disabled` when visually disabled.
- Contrast: verify small gray text against background for WCAG AA compliance.

---

## Utilities created / used
- .glass-card — shared card surface
- .card-gradient-blue / purple / green / orange — stat tile palettes
- .nav-glass, .nav-item, .nav-label — nav system
- .dashboard-grid, .dashboard-left, .dashboard-right — layout helpers
- .btn-primary — pill CTA gradient
- .stat-tile, .stat-number — stat tiles

---

## Best practices when extending styles
- Prefer tokens (CSS variables) over hard-coded color values.
- Reuse card and button primitives instead of adding bespoke styles for similar UI.
- Keep components small and composable: prefer creating small subcomponents (e.g., StatsTile) that receive props and apply consistent classes.
- Keep visual-only classes in `index.css` and behavioral logic in components.

---

## Example: Creating a new dashboard card
HTML-like usage (React):
```
<Card className="glass-card rounded-2xl p-6">
  <div className="flex items-center justify-between mb-4">
    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">...</div>
    <div className="px-3 py-1 bg-blue-500/20 text-blue-300 border-blue-500/30 font-semibold rounded-md">Meta</div>
  </div>
  <h3 className="text-xl font-bold text-foreground mb-3">Title</h3>
  <p className="text-foreground/70 mb-4">Body copy</p>
  <button className="w-full btn-primary">Primary CTA</button>
</Card>
```

---

## Next steps I will prepare for your next session
- Verify breakpoints and produce a short responsive QA checklist.
- Add keyboard focus / ARIA refinements for nav + core widgets.
- Add a small visual snapshot test harness (optional when you want CI coverage).

---

If you want the file moved or re-named (top-level `STYLES.md` vs `frontend/STYLES.md`), tell me and I'll move it. I will also push the new file and the last commits to GitHub now.
