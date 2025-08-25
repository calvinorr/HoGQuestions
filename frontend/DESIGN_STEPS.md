# Design Implementation Stages — HoGQuestions (frontend)

This document breaks the DESIGN_PLAN into clear stages. We'll proceed stage-by-stage and pause at the end of each stage for your review and approval before moving on.

Top-level staged checklist
- [x] Plan created (frontend/DESIGN_PLAN.md)
- [ ] Stage 1 — Analyze requirements & audit UI
- [ ] Stage 2 — Define design tokens (typography, color, spacing)
- [ ] Stage 3 — Tailwind + token integration (config + css variables)
- [ ] Stage 4 — Component guidelines & wireframes (menus, cards, forms)
- [ ] Stage 5 — Implement Phase 1 quick wins (tokens + core components)
- [ ] Stage 6 — Layout & navigation updates (grids, menus, pages)
- [ ] Stage 7 — Forms, accessibility, micro-interactions
- [ ] Stage 8 — Testing, visual regression, docs & PR

Stage 1 — Analyze requirements & audit UI
Description
- Create a full inventory of UI surfaces and components currently in the repo.
- Capture visual issues, inconsistent spacing/typography, accessibility problems and mobile behavior for each item.
Deliverables
- A markdown audit file at `frontend/UI_AUDIT.md` listing: component/file, purpose, issues, screenshots (optional), recommended fixes, priority.
- A short summary listing the 10 highest-impact fixes.
Estimated time
- 1–3 hours (depending on number of screens)
Acceptance criteria
- Audit file created and saved.
- High-impact items prioritized and agreed.
Pause/approval
- I will stop and present the audit summary for your approval before moving to Stage 2.

Stage 2 — Define design tokens
Description
- Formalize tokens for typography, color, spacing, radii, shadows and motion.
- Add a `:root` CSS variables block in `frontend/src/index.css` and document token names.
Deliverables
- Token definitions in `frontend/src/index.css`
- Short token README in `frontend/docs/tokens.md` describing usage and mapping to Tailwind.
Estimated time
- 1–2 hours
Acceptance criteria
- CSS variables added and token README saved.
Pause/approval
- I will show the token set and mapping for your approval.

Stage 3 — Tailwind + token integration
Description
- Map CSS tokens into `tailwind.config.js` so utility classes reflect tokens (colors, radii, spacing where useful).
- Keep existing Tailwind utilities working and add a minimal custom color palette if needed.
Deliverables
- Updated `frontend/tailwind.config.js` with token mapping and a short migration note describing changes.
Estimated time
- 1–2 hours
Acceptance criteria
- Tailwind config updated and project builds locally (dev server start).
Pause/approval
- I will show the config diff and run the dev server (or provide instructions) and wait for your sign-off.

Stage 4 — Component guidelines & wireframes
Description
- Create detailed component guidelines (menu, card, button, input, form layout) and simple wireframes/sketches for desktop/tablet/mobile.
Deliverables
- `frontend/docs/ui-guidelines.md` with component specs and small wireframe images or ASCII layouts.
Estimated time
- 2–4 hours
Acceptance criteria
- Guidelines cover layout, spacing, states (hover/focus/disabled) and accessibility notes.
Pause/approval
- I will present the guidelines and wireframes for approval.

Stage 5 — Implement Phase 1 quick wins
Description
- Implement tokens + Tailwind mapping, update `frontend/@/components/ui/card.tsx`, `button.tsx`, `input.tsx` to use tokens and improved spacing/focus.
Deliverables
- Commits on a branch `design/phase-1-quick-wins` and a PR draft (or patch) with before/after screenshots.
Estimated time
- 4–8 hours
Acceptance criteria
- Component visuals updated; dev server renders changes; smoke-tested pages look consistent.
Pause/approval
- I will present screenshots and PR summary for approval before merging.

Stage 6 — Layout & navigation updates
Description
- Standardize card grids, update GameList/Games pages, implement responsive navigation (desktop + mobile sheet).
Deliverables
- Updated page components and navigation; migration notes.
Estimated time
- 6–12 hours
Acceptance criteria
- Layouts responsive and consistent; navigation accessible and keyboard operable.
Pause/approval
- I will present live screenshots (or a running demo) and wait for sign-off.

Stage 7 — Forms, accessibility, micro-interactions
Description
- Improve forms (error UI, spacing), add ARIA attributes and keyboard interactions, micro-interaction polish (hover, active, skeletons).
Deliverables
- Component updates, a11y test results (axe/Lighthouse), and short notes on motion.
Estimated time
- 3–6 hours
Acceptance criteria
- No critical a11y failures; motion respects prefers-reduced-motion; forms validated visually and by keyboard.
Pause/approval
- I will present a11y report and interaction videos/snapshots.

Stage 8 — Testing, visual regression, docs & PR
Description
- Add snapshot tests or Storybook stories for core components; prepare PR with screenshots and migration notes.
Deliverables
- Tests/Stories, PR description and screenshots.
Estimated time
- 2–4 hours
Acceptance criteria
- Tests pass; PR ready to merge with clear notes.
Pause/approval
- Final review and merge confirmation.

How we'll work
- I'll perform each stage, then pause and present the deliverables for your approval.
- You can request changes or approve; only after approval I'll proceed to the next stage.
- If you want research or references before a stage, tell me and I'll use plan mode to fetch/prepare (you requested this option).

Next action
- Confirm you want me to start Stage 1 (audit). If confirmed, I will:
  - Run an inventory of UI-related files and create `frontend/UI_AUDIT.md` with findings.
  - Pause and present the audit for your review.
