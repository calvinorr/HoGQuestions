Design tokens — HoGQuestions (frontend)
======================================

Purpose
-------
Centralize the project's design tokens (colors, typography, spacing, radii, shadows, motion) so visual updates are easy and consistent. Map these tokens to Tailwind so existing utility classes continue to work while giving us a single source of truth.

Status
------
- The project already contains many CSS variables in `frontend/src/index.css` (HSL RGB variable patterns). This document formalizes the token names, guidance, and provides a Tailwind mapping snippet you can add to `frontend/tailwind.config.js`.

Token naming (canonical)
------------------------
Color tokens (HSL / RGB variables stored in `:root`):
- --color-background        (page background)
- --color-foreground        (body text)
- --color-surface           (card/panel background)  (existing: --card)
- --color-surface-foreground (card text)            (existing: --card-foreground)
- --color-primary
- --color-primary-foreground
- --color-secondary
- --color-secondary-foreground
- --color-muted
- --color-muted-foreground
- --color-accent
- --color-accent-foreground
- --color-destructive
- --color-destructive-foreground
- --color-border
- --color-input
- --color-ring

Spacing tokens (use Tailwind spacing scale + optional CSS vars for major sizes)
- --space-1   : 0.25rem (4px)
- --space-2   : 0.5rem  (8px)
- --space-3   : 0.75rem (12px)
- --space-4   : 1rem    (16px)
- --space-6   : 1.5rem  (24px)
- --space-8   : 2rem    (32px)

Radii
- --radius-sm  : 4px
- --radius-md  : 8px
- --radius-lg  : 12px
(existing: --radius : 0.75rem)

Elevation / shadows
- --shadow-sm   : 0 1px 2px rgba(...)
- --shadow-md   : 0 4px 6px rgba(...)
- --card-shadow : 0 1px 2px rgba(...), 0 1px 3px rgba(...)

Typography
- --font-sans
- --font-mono (optional)
- Font sizes remain controlled by Tailwind (text-sm, text-base, text-lg). Document recommended scale:
  - sm: 14px
  - base: 16px
  - md: 18px
  - lg: 20px
  - xl: 24px
  - 2xl: 32px

Motion
- --motion-short: 120ms
- --motion-default: 200ms
- easing: cubic-bezier(.22,.9,.4,1)

Practical guidance
------------------
- Prefer utility classes (Tailwind) for layout but use token-backed utilities for semantic colors (primary/secondary/destructive).
- Keep paddings on container-level components (Card wrapper) and remove repeated px-6 on child slots.
- Create variants through class names (e.g., .card--compact) or via component prop-to-class mapping.

Proposed Tailwind mapping (add to frontend/tailwind.config.js)
----------------------------------------------------------------
In the `theme.extend` section, map CSS variables so Tailwind utilities resolve to token values at runtime.

Example snippet (copy into tailwind.config.js -> module.exports = { theme: { extend: { ... }}}):

colors: {
  primary: "rgb(var(--color-primary) / <alpha-value>)",
  "primary-foreground": "rgb(var(--color-primary-foreground) / <alpha-value>)",
  secondary: "rgb(var(--color-secondary) / <alpha-value>)",
  "secondary-foreground": "rgb(var(--color-secondary-foreground) / <alpha-value>)",
  background: "rgb(var(--color-background) / <alpha-value>)",
  foreground: "rgb(var(--color-foreground) / <alpha-value>)",
  surface: "rgb(var(--color-surface) / <alpha-value>)",
  "surface-foreground": "rgb(var(--color-surface-foreground) / <alpha-value>)",
  muted: "rgb(var(--color-muted) / <alpha-value>)",
  "muted-foreground": "rgb(var(--color-muted-foreground) / <alpha-value>)",
  destructive: "rgb(var(--color-destructive) / <alpha-value>)",
  border: "rgb(var(--color-border) / <alpha-value>)",
  input: "rgb(var(--color-input) / <alpha-value>)",
  ring: "rgb(var(--color-ring) / <alpha-value>)",
},

borderRadius: {
  sm: "var(--radius-sm)",
  md: "var(--radius-md)",
  lg: "var(--radius-lg)",
  DEFAULT: "var(--radius)",
},

boxShadow: {
  sm: "var(--shadow-sm)",
  md: "var(--shadow-md)",
  card: "var(--card-shadow)",
},

Outline / ring (for focus)
ringColor: {
  DEFAULT: "rgb(var(--color-ring) / <alpha-value>)",
},

Notes:
- Tailwind supports the <alpha-value> token which makes classes like bg-primary/50 work correctly.
- Colors stored as HSL or RGB components in CSS variables (as currently in src/index.css) are compatible with this approach: e.g. --color-primary: 217 91% 60%; then use rgb(var(--color-primary) / <alpha-value>).

Suggested additions to `frontend/src/index.css`
----------------------------------------------
The project already defines many variables. Recommended small additions (if you want me to apply them during implementation):

:root {
  --font-sans: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;

  --shadow-sm: 0 1px 2px rgba(16,24,40,0.04);
  --shadow-md: 0 4px 6px rgba(16,24,40,0.06);
  --card-shadow: 0 1px 2px rgba(16,24,40,0.04), 0 1px 3px rgba(16,24,40,0.06);

  --motion-short: 120ms;
  --motion-default: 200ms;
}

Migration notes
---------------
- Start by adding the Tailwind mapping snippet to `tailwind.config.js`. No code changes required; this will make Tailwind utilities reference the runtime CSS variables.
- Next, add or normalize the suggested CSS vars in `src/index.css` so a consistent token set exists.
- Then update a small set of components (Card, Button, Input) to reference token-based classes or continue using Tailwind utilities (bg-primary, text-muted-foreground) which now resolve to token values.
- Finally, run the app and check visual regressions at key breakpoints.

Acceptance criteria for Stage 2
-------------------------------
- `frontend/src/index.css` contains the canonical CSS variables for tokens (or the existing variables are normalized to match the canonical names).
- `frontend/docs/tokens.md` saved (this file).
- `frontend/tailwind.config.js` updated with the color/token mapping (next step / optional — I can prepare a PR).

Next steps (pick one)
---------------------
- I can prepare the actual edits:
  1) Add the missing CSS vars suggested above into `frontend/src/index.css`.
  2) Update `frontend/tailwind.config.js` with the `theme.extend` snippet.
  3) Commit changes on a branch `design/phase-1-tokens`.
  4) Present diff and screenshots for review.

- Or I can just generate the exact patch/diff for your review before applying changes.

If you want me to apply the changes now, confirm "Apply Stage 2 (add tokens + tailwind mapping)". If you prefer reviewing the proposed code before changes, say "Show patch first".
