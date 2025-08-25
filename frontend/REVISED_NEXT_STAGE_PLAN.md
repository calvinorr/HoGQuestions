Revised Quick Diagnostic & Fix Plan — Layout & Navigation (simple steps)
========================================================================

Objective
---------
Diagnose why the layout and menu system look "terrible" and get a minimal, repeatable set of fixes in place so the UI is visually balanced and navigation feels modern on desktop and mobile.

High-level approach
-------------------
1. Reproduce the problem locally (baseline screenshots).
2. Run the correct Node version via nvm to ensure builds/tests match CI.
3. Add minimal visual debugging aids (temporary outlines, spacing overlays).
4. Inspect and fix the root causes (container usage, nav markup/padding, table/card sizing, Tailwind classes).
5. Apply targeted, reversible fixes and verify visually and with tests.
6. Replace/standardize icons last.

Immediate checklist (playbook)
------------------------------
- [ ] Confirm Node version with nvm and use it
- [ ] Start the frontend dev server and capture baseline desktop + mobile screenshots
- [ ] Add temporary debug markers (element outlines, background bands) and re-check layout
- [ ] Audit top-level layout: App.tsx, root layout/container component(s)
- [ ] Audit navigation: header/nav component(s), mobile drawer implementation
- [ ] Audit card components and lists for full-width usage (remove unconstrained wrappers)
- [ ] Audit table component/how the table head cells are rendered (set fixed widths)
- [ ] Identify Tailwind classes that cause full-width/stretch (e.g., w-full on outer wrappers)
- [ ] Run unit & visual tests, note failing tests introduced by "self-tests"
- [ ] Apply minimal CSS / component changes (constrain containers, reduce padding, compact nav)
- [ ] Replace or standardize icons (Heroicons recommended) in nav and actions
- [ ] Re-run dev server + tests, take after screenshots
- [ ] Commit and push a small branch with clear changes and screenshots

Concrete step-by-step diagnostic plan (simple)
----------------------------------------------
1) Prepare environment (nvm)
   - Confirm .nvmrc at repo root and run:
     - cd frontend
     - nvm install         # installs node version specified in .nvmrc
     - nvm use
     - node -v             # verify correct version
     - npm ci              # install deps cleanly
   - Rationale: inconsistent Node can cause different Tailwind builds / CSS output.

2) Run the app and capture baseline
   - cd frontend && npm run dev
   - Open http://localhost:5173 (or port from the dev output) on desktop and mobile responsive mode
   - Capture screenshots of:
     - Dashboard / stat cards
     - Games list (table)
     - Management Tools (card grid)
     - Mobile nav (toggle drawer)
   - Save these for visual diff & PR.

3) Add quick debug overlays (temporary)
   - Add to global CSS (index.css or App.css) a debug toggle (commented by default); e.g.:
     * outline: 1px solid rgba(255,0,0,0.25) on all elements, or add background bands around main sections
   - Purpose: easily see which container is full width and which elements are responsible.

4) Reproduce and narrow root cause
   - Inspect in DevTools which element spans full width. Common culprits:
     - Outer wrappers using w-full instead of max-w-* + mx-auto
     - Grid/row wrappers with flex: 1 or width utilities applied incorrectly
     - Card components lacking constrained container.
   - Files to inspect quickly:
     - src/main.tsx / App.tsx (root layout)
     - src/components/* (GameList, Games, GameList row)
     - @/components/ui/container.tsx and the implementations in src/components/ui/container.tsx (look for a Container component or missing usage)
     - Header / Nav components (both places under frontend/src/components and frontend/@/components)
     - tailwind.config.js for container settings and breakpoints

5) Fix container & card constraints (quick change)
   - Wrap wide sections in a Container: <Container maxWidth="5xl"> or apply .max-w-5xl.mx-auto.px-4
   - For card lists, add a compact variant or apply max-w on cards and consistent heights for featured cards.
   - Commit a tiny PR with these changes and screenshots.

6) Fix table widths
   - Ensure table uses table-fixed and explicit header widths:
     - Name 30%, Type 20%, Round 10%, Status 12%, Questions 12%, Actions 120px
   - Add sticky header class and overflow container for small screens.

7) Triage nav issues
   - Desktop:
     - Reduce horizontal padding on nav items, limit link count shown, add a compact user avatar area.
   - Mobile:
     - Ensure slide-over is a left drawer with focus trap and larger touch targets.
     - Verify touch hit area via DevTools device mode.
   - If the nav currently uses a bulky component or multiple wrappers, simplify markup first.

8) Icon standardization
   - Recommended: adopt Heroicons (outline) inline SVGs or a small Icon wrapper component to control stroke width/size.
   - Replace noisy icons in nav and table actions.

9) Tests & snapshots
   - Run unit tests (npm test or npm run test). Note failing tests — decide whether test implementation or code regressions are the cause.
   - If visual snapshot tests exist, run them and update baselines only after visual approval.
   - If "self-tests" introduced failures, revert the last local commit that added them or inspect which components the tests target.

10) Final verification & PR
   - Run Lighthouse/axe to catch major accessibility issues.
   - Take after screenshots and include before/after in PR description.
   - Keep changes small, focused, and reversible.

Commands cheat-sheet (to run locally)
------------------------------------
# from repo root
cd frontend

# use Node version from .nvmrc
nvm install
nvm use
node -v

# install and start dev server
npm ci
npm run dev

# run tests (may be vitest)
npm test
# or
npm run test

Acceptance criteria (simple)
----------------------------
- Key pages are visually centered with content constrained (no full-width cards unless intentional).
- Table columns respect fixed widths; actions column compact.
- Nav is compact on desktop and usable on mobile (drawer works and is focus-trapped).
- No new critical accessibility failures are introduced.
- Changes are small, documented, and have before/after screenshots.

Notes & next step I can take if you confirm
-------------------------------------------
- I can start Phase A: run the environment steps and make small container fixes in Dashboard and Games list, then create a small branch and push.
- I will keep changes isolated and include before/after screenshots in the PR.
