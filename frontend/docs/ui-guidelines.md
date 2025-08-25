UI Guidelines & Wireframes — HoGQuestions (frontend)
====================================================

Purpose
-------
Provide concrete, implementable guidelines for the core UI primitives (menus/navigation, cards, buttons, forms/inputs) so we can apply consistent tokens and spacing across components. This document is the Stage 4 deliverable; after you review I will pause and implement Phase 1 quick wins.

High-level principles
- Mobile-first, responsive: design utilities and components should scale from small to large breakpoints (sm → md → lg).
- Token-driven: use CSS variables / Tailwind mappings for colors, spacing, radii, and elevation.
- Clear hierarchy: spacing, weights and color must make CTAs and important content stand out.
- Accessibility-first: visible focus states, proper labels, ARIA roles for interactive widgets, keyboard operability.
- Small set of variants: keep components predictable (Default / Secondary / Ghost for buttons; Default / Compact / Elevated for cards).

Common token references
- Spacing: use spacing tokens (--space-4 / --space-6) or Tailwind utilities (p-4 md:p-6).
- Radii: --radius-sm / --radius-md (4 / 8px).
- Colors: bg-primary / bg-surface; text-primary / text-muted-foreground.
- Shadows: shadow-sm / shadow-card (tokenized via Tailwind).

1) Card guidelines
- Purpose: grouped content blocks (title, metadata, actions, optional image).
- Anatomy:
  - Card (wrapper) — padding, border-radius, box-shadow, background
  - Header — title (semibold), optional description/meta, optional actions (top-right)
  - Content — body text, images, lists
  - Footer — small actions, secondary info
- Spacing & sizing:
  - Default: p-4 (sm) → p-6 (md+)
  - Gap between header/content/footer: use gap-3 / gap-4
  - Border-radius: var(--radius-md) (8px)
  - Shadow: var(--card-shadow) or shadow-sm; elevation variant uses deeper shadow
- Variants:
  - Default (surface, subtle border)
  - Elevated (stronger shadow, no border)
  - Compact (reduced padding p-2 / p-3, smaller gap, used in dense lists)
  - Gradient (decorative): use only for highlighted cards
- Markup example (conceptual)
  - <Card className="bg-surface text-surface-foreground rounded-md shadow-card p-4 md:p-6">
      <CardHeader className="flex items-start justify-between gap-3">
        <div>
          <CardTitle className="text-lg font-semibold">Title</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">Meta</CardDescription>
        </div>
        <CardAction>...buttons</CardAction>
      </CardHeader>
      <CardContent className="mt-3">...</CardContent>
      <CardFooter className="mt-4">...</CardFooter>
    </Card>

- Responsive behavior:
  - Maintain padding scale: p-4 on small screens, p-6 on md+.
  - For card grids use responsive columns: grid-cols-1 (sm) → grid-cols-2 (md) → grid-cols-3 (lg).

2) Button guidelines
- Purpose: action triggers with clear visual hierarchy.
- Variants:
  - Primary: filled, strong color (bg-primary)
  - Secondary: softer filled or subtle outline
  - Ghost: transparent with hover surface change
  - Link: text-only (for inline actions)
- Sizes:
  - Small: h-8, px-3, text-sm
  - Default: h-9/h-10, px-4, text-base
  - Large: h-12, px-6, text-lg
  - Icon-only: min 40x40 tap target (w-10 h-10)
- Accessibility:
  - Focus-visible: use ring-2/outline with color from --color-ring
  - Disabled: reduced opacity and pointer-events-none
  - Hit area: ensure icon-only buttons have at least 40x40 px
- Interaction:
  - Hover: slight darken or opacity change (avoid large layout shift)
  - Active: scale down 0.98 or translateY(1px)
  - Motion timings: 120–200ms

3) Input & Form guidelines
- Labeling & layout:
  - Use explicit <label for="..."> or FormLabel tied to input id.
  - Vertical rhythm: label (12px gap) then input; group inputs with consistent margin (mb-4 / space-y-4).
- Input visual:
  - Height: 36–40px for default inputs (h-9)
  - Padding: px-3
  - Border-radius: --radius-sm or --radius-md depending on context
  - Focus: ring with --color-ring and contrast-friendly outline
- Validation:
  - Error visuals: border-destructive + subtle red background/border for inline message
  - Inline error text: 12px with icon (aria-live polite)
- Complex fields:
  - Selects: render as trigger with aria-haspopup, keyboard nav inside select content
  - Textarea: auto height up to a max; show character counts if relevant
- Buttons in forms:
  - Primary action on the left (or right consistent with platform convention), secondary as outline
- Accessibility:
  - Associate labels with inputs via id/name
  - Provide FormMessage area for errors with role="alert"

4) Menu & Navigation guidelines
- Desktop:
  - Horizontal top bar or left navigation — choose one primary pattern per app area
  - Spacing: items padding-left/right 16px, vertical padding 12px
  - Active state: left accent bar or background change and bold label
  - Hover: muted background (bg-muted with 8–12% opacity)
- Mobile:
  - Use a slide-over panel or full-screen sheet for menu
  - Clear close button at top-right; actions sized for touch (48px touch targets)
- Accessibility:
  - Ensure nav lists use <nav aria-label="Main"> and interactive elements have proper aria-current for active
  - Manage focus when opening mobile menu (trap focus inside sheet)

5) Lists & Tables
- Use spacing and typography over zebra striping for readability; keep table headers prominent.
- For action icons hidden on hover, ensure keyboard focus reveals the actionable items (e.g., reveal on row :focus-within).
- For count/badges, use consistent badge sizes and semantics.

6) Icons, Images & Media
- Images: use fixed aspect ratios (16:9 or 1:1) and object-fit: cover to avoid layout shift.
- Icons: consistent sizing tokens (size-4 for inline small; size-6 for feature icons). Use inline SVGs for crisp rendering.

Wireframes (simple ASCII / layout sketches)
- Card list (desktop)
  -----------------------------------------
  | [Header: Title -------------- Actions] |
  | [Search / filter bar]                  |
  |   [Card]  [Card]  [Card]   [Card]     |
  |   [Card]  [Card]  [Card]   [Card]     |
  -----------------------------------------

- Card detail (mobile)
  -------------
  | Title     |
  | Meta      |
  | Image     |
  | Body text |
  | Actions   |
  -------------

- Top navigation (desktop) / mobile sheet
  Desktop:
  [ Logo ] [ Home ] [ Games ] [ Analytics ]              [User]
  Mobile sheet:
  --------------------------------
  | X Close                       |
  | Home                          |
  | Games                         |
  | Analytics                     |
  | Settings                      |
  --------------------------------

Accessibility notes
- Keyboard focus visible on all interactive elements; test Tab order.
- Color contrast: ensure >= 4.5:1 for body text; use tokens to manage contrast between light/dark.
- Test with screen reader: nav landmarks, form labels, aria-live for messages, aria-current for active nav.

Implementation guidance & next steps (Phase 1 focus)
- Update Card component:
  - Move padding to Card wrapper (p-4 md:p-6), remove px-6 from slots.
  - Add compact and elevated variants via className or prop.
  - Use tokenized classes for bg / text / shadow.
- Update Button component:
  - Ensure size mapping follows guidelines; ensure icon-only buttons have at least 40x40 tap area.
  - Verify focus-visible ring uses --color-ring.
- Update Input component:
  - Make heights responsive and ensure label associations (Form wrappers already present).
  - Use tokenized border/color values for error states.
- Update Table / GameList:
  - Reveal row actions on focus-within; ensure keyboard users can access edit/delete.
  - Replace inline color classes with tokenized badge variants.
- Produce before/after screenshots and a small PR branch (design/phase-1-quick-wins) for these updates.

Approval / pause
- Review these guidelines. Approve to proceed with Stage 5 (I will implement Phase 1 quick wins: Card/Button/Input + small GameList accessibility tweak) or request modifications to the guidelines before implementation.
