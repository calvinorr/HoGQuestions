# UI Audit — HoGQuestions (frontend)

Status: initial inventory and prioritized high-impact fixes. This is the Stage 1 deliverable. After you review I'll perform targeted code reads and add concrete findings and screenshots.

Summary
-------
This file lists UI-related files/components, their purpose, quick notes on what to look for, and a prioritized list of the highest-impact fixes to implement first.

Inventory (files / components)
- Global
  - `frontend/src/index.css` — Global CSS / baseline styles. Check for tokens, font, base spacing, resets, body background, and existing custom properties.
  - `frontend/tailwind.config.js` — Tailwind theme and breakpoints. Check customizations and whether color/spacing are centralized.

- Shared UI components (single source of truth)
  - `frontend/@/components/ui/card.tsx` — Shared Card component (used across app). Inspect padding, radius, shadow, header/footer patterns.
  - `frontend/@/components/ui/button.tsx` — Primary/secondary button variants & sizes. Inspect focus/hover states and spacing.
  - `frontend/@/components/ui/form.tsx` — Form wrapper (if present) — layout and spacing.
  - `frontend/@/components/ui/input.tsx` — Input styling, labels, error states.
  - `frontend/@/components/ui/label.tsx` — Label text style & spacing.
  - `frontend/@/components/ui/select.tsx` — Select component styling and accessibility.
  - `frontend/@/components/ui/switch.tsx` — Toggle component visuals and keyboard accessibility.
  - `frontend/@/components/ui/textarea.tsx` — Textarea styling and sizing.

- Page / Feature components
  - `frontend/src/components/Games.tsx` — Main games page or container. Check layout, container width, list vs grid, spacing between cards.
  - `frontend/src/components/GameList.tsx` — Game list display — how cards are rendered (grid responsive breakpoints).
  - `frontend/src/components/GameForm.tsx` — Form for creating/updating games — label spacing, validation visuals, button arrangement.
  - `frontend/src/components/ui/*` — Local UI variants inside src/components/ui (badge, button, card, input, label, select, table, textarea) — ensure consistency with `@/components/ui` shared components.

- Other
  - `frontend/index.html` — Document-level meta, font links, viewport.
  - `frontend/src/assets/` — Icons/images used by cards and lists (check aspect ratios, sizes).
  - `frontend/src/main.tsx` & `frontend/src/App.tsx` — App container, top-level layout, nav/header usage.

What to check for each component (audit checklist)
- Layout & spacing
  - Consistent horizontal/vertical spacing and padding (use a spacing scale).
  - Container width vs content (max-widths, centered content).
- Typography
  - Consistent scale and weights across headings, body, metadata.
  - Readability on mobile.
- Color & contrast
  - Text contrast ratios (>= 4.5:1 for body text).
  - Consistent use of primary/secondary colors.
- Buttons & CTAs
  - Clear hierarchy (primary/secondary/ghost).
  - Size consistency and accessible hit areas.
  - Visible focus states (keyboard focus ring).
- Cards
  - Consistent padding, border-radius, shadow, header layout and actions area.
  - Responsive grid behavior (columns at breakpoints).
- Forms & inputs
  - Label association (for attribute), error state visuals, helper text.
  - Keyboard and screen-reader accessibility.
- Navigation & menus
  - Spacing, clear active state, mobile collapse behavior.
- Icons & images
  - Consistent size, alignment, and aspect-ratio handling (avoid shifting layout).
- Motion & interactions
  - Subtle hover/active states and respect for prefers-reduced-motion.
- Accessibility
  - ARIA roles where applicable, focus order, no keyboard traps.

High-impact fixes (prioritized)
1. Establish design tokens (colors, spacing, radii, typography) and apply globally — fixes inconsistent padding/typography quickly.
2. Standardize Card component (padding, shadow, header/action layout) so lists and pages become consistent.
3. Improve Button styles and focus outlines — fixes accessibility and visual hierarchy.
4. Ensure inputs/forms have visible validation states and proper label associations.
5. Make GameList/Games grid responsive with clear breakpoints (1/2/3+ columns).
6. Add consistent container max-width and horizontal padding to app pages to improve rhythm.
7. Improve navigation/menu spacing and mobile collapse pattern (sheet/drawer).
8. Add subtle hover elevations and motion timings; ensure prefers-reduced-motion respected.
9. Replace inconsistent hard-coded colors with token variables and Tailwind mapping.
10. Run automated accessibility checks (axe / Lighthouse) and fix critical issues (color contrast, missing labels, focus).

Next steps (for me to perform after you approve this initial audit)
- Read key files to capture precise issues and code locations (I will read: card.tsx, button.tsx (both `@` and `src` variants), input.tsx, GameList.tsx, Games.tsx, GameForm.tsx, src/index.css, tailwind.config.js).
- Update this audit with exact lines to change, suggested class names, and example code snippets.
- Capture before/after screenshots as I implement.

Deliverable saved
- File saved to `frontend/UI_AUDIT.md`.

Pause for approval
- Confirm you want me to proceed to read the key files to expand the audit into exact change recommendations, or request any modifications to the audit approach first.
