Next Stage Plan — Stage 6 (Layout polish) → Stage 7 (Visual & icon refresh)
==========================================================================

Context / problem summary
-------------------------
You tested the site and reported the UI still feels unbalanced:
- Navigation is too cluttered/“terrible” and not professionally modern.
- Cards and table columns stretch full width — visual rhythm and column balance are poor.
- Icons look dated; prefer crisp SVG icon system for a 2025 professional look.

Goal for next stage
-------------------
Produce a tight, professional, balanced layout and visual system:
- Navigation: compact, modern, clear hierarchy; mobile slide-over improved.
- Cards: constrained width for groups, consistent card sizes, compact variant for lists, elevated for featured cards.
- Tables: fixed column widths, sticky header, well-sized actions column, accessible keyboard interactions.
- Icons: replace/write a small set of SVG icons (or swap to modern icon library SVGs), ensure consistent sizing and line weights.
- Visual polish: consistent spacing, typographic scale, tonal card backgrounds (reduce noisy gradients), improved contrast.

Deliverables (concrete)
-----------------------
1. UI Changes (code)
   - Update layout container usage:
     - Add helper wrappers: .content-center or <Container maxWidth="..."> and apply to key pages (Dashboard, Games, Management Tools).
     - Constrain card groups with card-constrain or responsive columns: e.g., max-w-5xl center for stat cards; Management Tools use grid with consistent card sizes.
   - Card improvements:
     - Add `compact` prop usage on list cards; `elevated` for featured cards.
     - Add fixed card heights where appropriate (card variants) and consistent image/icon size.
   - Navigation:
     - Replace current nav buttons with a compact nav bar (logo + 3–4 primary links + user area).
     - Desktop: reduce padding on nav items; add subtle separators and clear hover/focus state.
     - Mobile: improve slide-over by using a left drawer (common pattern) with focus trap, larger touch areas, and optional icons.
   - Tables:
     - Use table-fixed, set column widths on header (Name 30%, Type 20%, Round 10%, Status 12%, Questions 12%, Actions 120px).
     - Add sticky header + slight shadow; ensure overflow-x scroll works gracefully on smaller screens.
     - Improve actions column: fixed width, center icons, use icon-only buttons with accessible aria-labels and visible keyboard focus.
   - Icons:
     - Decide between two approaches:
       a) Use a modern curated SVG set (e.g., Heroicons outline/solid) and import inline SVGs. Replace lucide-react icons with inline svgs to control stroke/size.
       b) Create a small internal icon wrapper that accepts stroke weight and size, and standardize all icon usage.
     - Replace heavy decorative icons with cleaner line SVGs for a 2025 aesthetic.
   - Tone down gradients:
     - Convert strong gradients to subtle tones or overlays to improve contrast for text, especially in dark mode.

2. Accessibility & UX
   - Ensure nav has aria-labels, active states use aria-current.
   - Keyboard user: table row actions reveal on focus-within, mobile drawer traps focus.
   - Color contrast audit (run axe) for updated color usage; adjust token values if needed.

3. Visual QA / Tests
   - Capture before/after screenshots for:
     - Dashboard (stat cards)
     - Management Tools (card grid)
     - Games list (table)
     - Mobile nav
   - Add visual snapshot tests or Storybook stories for Card variants and Table.

Concrete implementation plan — steps and commands
-----------------------------------------------
Phase A — Layout container & card balance (estimated 2–4 hours)
1. Add a Container component OR apply `.max-w-5xl mx-auto` wrappers to Dashboard stat grid and other wide groups.
2. Update Home (Dashboard) and Management Tools sections to use the container and consistent card sizes.
3. Add `compact` usage to cards rendered in lists (e.g., GameList list items).
4. Commit & push branch updates.

Phase B — Table polish (estimated 1–2 hours)
1. Enforce `table-fixed` (already added) and set column widths on TableHead rendering in GameList.
   - Add props/utility classes in GameList for the header cells (w-3/10 etc or w-[xxxpx]).
2. Ensure sticky header works and test on overflow.
3. Commit & push.

Phase C — Navigation overhaul (estimated 2–3 hours)
1. Replace nav items with a compact layout (reduce horizontal padding) and add a user avatar area.
2. Convert mobile drawer to left-side slide-over with focus-trap and larger touch targets.
3. Improve icons and spacing.
4. Commit & push.

Phase D — Icon system & visual polishing (estimated 3–6 hours)
1. Choose icon approach (Heroicons SVGs recommended).
2. Replace lucide icons in key places (nav, cards, table actions).
3. Adjust stroke widths, sizes, and spacing.
4. Reduce gradient intensity on cards and hero (use overlay colors for emphasis).
5. Commit & push.

Phase E — QA & PR
1. Capture before/after shots and add to PR.
2. Run axe/Lighthouse; fix critical a11y issues.
3. Add visual tests or Storybook stories for main components.
4. Finalize PR.

Acceptance criteria
-------------------
- Cards and key groups no longer span full page; content is visually centered and balanced.
- Table columns are readable with fixed widths; actions column is compact and accessible.
- Navigation feels modern and professional on desktop/mobile.
- Icons are consistent SVGs and look contemporary.
- No critical accessibility failures (axe/Lighthouse).
- Screenshots and documentation attached to PR.

Questions I need answered to proceed
------------------------------------
1. Icon preference: use Heroicons (free) or continue with Lucide but inline SVGs? (Heroicons recommended for a 2025 look)
2. Which pages to prioritize for the container constraints (Dashboard + Games + Management Tools recommended)?
3. Do you want stronger or subtler gradients for the brand look? (Subtle recommended for legibility)

Next immediate action (if you confirm)
-------------------------------------
- I'll start Phase A and B: constrain container + balance stat and management cards, and apply the table width changes (GameList).
- I'll push changes to the existing branch design/phase-1-quick-wins and capture updated screenshots for review.

Clearing context
----------------
You asked to "clear the context" because we are close to the limit. I will:
- Save the plan above to frontend/NEXT_STAGE_PLAN.md (done).
- After you confirm "Start Phase A", I'll proceed with concrete code changes and commit them.
- When you want me to clear the conversation/task context, tell me "Clear context now" and I will finalize the current task and stop further modifications until you start a new task. (Note: I cannot programmatically erase the session, so this is an operational step: I will stop making changes and mark the task paused.)
