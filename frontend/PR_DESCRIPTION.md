PR: design/phase-1-quick-wins — Design improvements (tokens, components, layout)

Summary
-------
This PR contains the Phase 1 design improvements for the frontend UI. It centralizes design tokens, maps them into Tailwind, and applies component-level polish to improve layout, spacing, accessibility and responsiveness.

Branch
- design/phase-1-quick-wins

High-level changes
- Tokens & Tailwind
  - Added canonical CSS tokens and aliases to frontend/src/index.css
  - Mapped token variables into frontend/tailwind.config.js so Tailwind utilities resolve to tokens

- Shared component updates (frontend/@/components/ui)
  - Card: centralized padding, responsive spacing, added compact & elevated variants
  - Button: ensured icon button sizing (40x40), consistent focus rings and variants
  - Input: responsive heights and focus states
  - Badge: semantic variant classes and token-aware styling
  - Table: container styling, improved spacing and keyboard reveal for row actions
  - Form: Form wrappers and ARIA-friendly helpers (FormLabel, FormControl, FormMessage)

- Page/layout updates
  - App navigation: responsive desktop links + mobile slide-over menu
  - Constrained content container and tuned card grids (desktop/tablet/mobile)
  - GameList: accessibility improvements for action buttons (reveal on focus-within) and icon hit areas

- Docs
  - frontend/DESIGN_PLAN.md (design plan)
  - frontend/DESIGN_STEPS.md (staged work)
  - frontend/UI_AUDIT.md (initial audit)
  - frontend/docs/tokens.md (tokens & tailwind mapping guidance)
  - frontend/docs/ui-guidelines.md (component guidelines & wireframes)

Why
---
- Central tokens make visual updates predictable and fast.
- Component-level standardization improves visual hierarchy and UX consistency.
- Accessibility improvements (focus states, keyboard reveal, ARIA) reduce barriers for keyboard/screen reader users.
- Responsive nav and constrained layout prevent UI elements from stretching full-width and improve readability.

Files touched (representative)
- frontend/src/index.css
- frontend/tailwind.config.js
- frontend/@/components/ui/card.tsx
- frontend/@/components/ui/button.tsx
- frontend/@/components/ui/input.tsx
- frontend/src/components/ui/table.tsx
- frontend/src/App.tsx
- frontend/src/components/GameList.tsx
- frontend/src/components/Games.tsx
- frontend/src/components/GameForm.tsx
- frontend/docs/*

Testing & verification
- Run dev server:
  - cd frontend && npm run dev
  - Dev server used Node 22 during my run (nvm exec 22 npm run dev)
  - Local URL used during testing: http://localhost:5176/
- Manually verified:
  - Dashboard and Games pages render correctly with updated cards, nav and table styles
  - Responsive nav slide-over works on mobile
  - Icon buttons have correct tap targets and keyboard access
- Suggested automated checks (to run after PR):
  - Lighthouse and axe accessibility scan
  - Visual diff (before/after) with screenshots or Chromatic/Perceptual diff tool

Screenshots (attach before merging)
- Dashboard (after): screenshot captured from running branch
- Games list (after): screenshot captured from running branch
- Please attach these screenshots to the PR description or comments.
  - I opened the PR creation page in your browser so you can paste these images:
    https://github.com/calvinorr/HoGQuestions/pull/new/design/phase-1-quick-wins

PR checklist
- [ ] Add before screenshots (checkout main + capture) — optional for stricter visual diff
- [x] Add after screenshots (captured from dev server)
- [x] Run unit tests
- [ ] Run accessibility checks & fix critical issues (if any)
- [ ] Review and merge (squash or keep commits, your preference)

Notes / Caveats
- I adjusted some imports to relative paths in the `@/` area (keeping compatibility). Verify TypeScript path aliases if your editor warns.
- Some gradient cards are visually strong in dark mode — if you'd like, I can tone gradients down to improve body text contrast.
- I used Node 22 via nvm exec to run Vite locally. Your environment may use a different Node version; upgrade to Node >= 20.19 for Vite compatibility.

What I recommend doing now
1. Open the PR page (I already opened it): https://github.com/calvinorr/HoGQuestions/pull/new/design/phase-1-quick-wins
2. Paste this PR_DESCRIPTION.md content into the PR description.
3. Attach the screenshots captured (Dashboard and Games) to the PR.
4. Run the automated a11y checks (I can run them and report back if you want).
5. Once approved, merge and I can proceed to Stage 6 (layout & navigation updates across pages) or Stage 7 (forms & micro-interactions).

If you'd like, I can draft a compact PR body for you to paste directly into GitHub (with bullet points and the checklist already formatted). Reply "Draft PR body" and I'll prepare it.
