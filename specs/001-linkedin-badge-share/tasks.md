# Tasks: Publish your badge on LinkedIn

> Phase 3 — Tasks. Ordered, small, independently testable. `[P]` = parallel-safe.
> Tests before source. Each task cites the spec/EARS line it satisfies.

- **Spec:** 001-linkedin-badge-share
- **Status:** approved
- **Working dir:** `packages/@coorpacademy-components/`
- **Branch:** `feat/clxp-linkedin-badge-share` (cut from `master`)

## Legend
`[ ]` todo · `[x]` done · `[P]` parallel-safe

---

## 0. Setup
- [x] 0.1 Cut branch `feat/clxp-linkedin-badge-share` from up-to-date `master`.
- [x] 0.2 Deps already installed; nova-icons `NovaCompositionCoorpacademyLinkedin` export verified to resolve.
- [x] 0.3 Baseline confirmed green for the touched areas (targeted ava + full eslint + `tsc --noEmit` clean).

## 1. Locales (i18n first — establishes the contract) — *satisfies: spec §4 i18n, P3*
- [x] 1.1 Guard test added at `src/test/publish-on-linkedin-key.js` (ava only discovers `src/**/test/**`,
  so it lives under `src/test/`, not `locales/test/`): asserts `publish_on_linkedin` exists in all 30
  `locales/*/global.json`, fr="Publier sur LinkedIn", en="Publish on LinkedIn". — *spec §3 S1 line 4, R2*
- [x] 1.2 Added `"publish_on_linkedin": "Publier sur LinkedIn"` to `locales/fr/global.json`.
- [x] 1.3 Added `"publish_on_linkedin": "Publish on LinkedIn"` to `locales/en/global.json`.
- [x] 1.4 [P] Added EN fallback to the other 28 `global.json` files (incl. zh_TW) via a minimal,
  JSON-validated 1-line insert per file (30 files, +60/-30).
- [x] 1.5 Guard test green (3 assertions pass).

## 2. ProgressWrapper — badge LinkedIn button (TDD) — *satisfies: spec §3 S1, S2, S3, §5*
- [x] 2.1 Added fixture `molecule/progress-wrapper/test/fixtures/badge-with-linkedin.js`
  (progression 100, badge section incl. `linkedinShareUrl` + `onLinkedinShareClick`).
- [x] 2.2 Test `molecule/progress-wrapper/test/linkedin-share.tsx` (7 cases, all green):
  - renders `[data-name=publish-linkedin-button]` when `linkedinShareUrl` set & progression 100
    — *S1 line 1*
  - the anchor has `target=_blank` & `rel="noopener noreferrer"` & correct `href` — *S1 line 2, §4 security*
  - clicking it calls `onLinkedinShareClick` — *S1 line 3*
  - NO button rendered when `linkedinShareUrl` absent/empty — *S3 line 1, §5*
  - button disabled/hidden when progression < 100 (`isLocked`) — *S2 line 1*
  - LinkedIn button appears on `badge` section but not on `diploma` — *§5*
- [x] 2.3 Implemented in `molecule/progress-wrapper/index.js`:
  - `DetailSection` badge branch: when `type==='badge'` & non-empty `linkedinShareUrl` & `!isLocked`,
    renders a second `ButtonLink` with the LinkedIn nova-icon (`icon:{position:'left', type:'linkedin'}`),
    `label: translate('publish_on_linkedin')`, `link:{href, target:'_blank', rel:'noopener noreferrer'}`,
    `onClick: onLinkedinShareClick`, `data-name:'publish-linkedin-button'`, `aria-label`.
  - threads `linkedinShareUrl` + `onLinkedinShareClick` via the section spread (already `{...section}`).
  - extended `commonDetailSectionPropTypes` with `linkedinShareUrl`/`onLinkedinShareClick`.
  - reused the download CTA `customStyle`/hover for visual consistency (no `style.css` change needed).
  - registered `linkedin` in `src/util/button-icons.js` ICONS map; added optional `rel` to
    `button-link/types.ts` so it reaches the `<a>` via `Link`'s `{...restProps}`.
- [x] 2.4 New test green; `toggle-details.tsx` still green (P6).

## 3. CertificationDetail — wire props through — *satisfies: spec §3 S1, S3*
- [x] 3.1 Added fixture `template/certification-detail/test/fixtures/complete-with-linkedin.js` +
  test `template/certification-detail/test/linkedin-share.tsx` (renders the badge LinkedIn button
  with the injected URL; renders none without it). Both green. — *S1 line 1, S3*
- [x] 3.2 Implemented in `template/certification-detail/index.js`: destructured `linkedinShareUrl`/
  `onLinkedinShareClick`, added them to the `compact([...])` badge section, extended `propTypes`.
- [x] 3.3 Tests green.

## 4. Storybook + fixtures (visual + snapshot coverage) — *satisfies: P4*
- [x] 4.1 [P] New fixtures register stories `BadgeWithLinkedin` / `CompleteWithLinkedin` after
  regeneration.
- [x] 4.2 Ran `generate:fixtures` + `generate:storybook`; the `test/fixtures.js` and
  `test/index.stories.tsx` aggregators are **gitignored generated artifacts** (`.gitignore:17,19`) —
  only the individual `fixtures/*.js` files are committed. Generators touched only the two affected
  components (no unrelated churn). Snapshot tests render the new fixtures green.

## 5. Quality gate (whole package) — *satisfies: §4, P4*
- [x] 5.1 `eslint .` → **0 errors** from this change (the only failures were unrelated local
  `logs/*.json` hook artifacts; pre-existing `no-explicit-any` warnings in `skill-detail/*` remain).
  `tsc --noEmit` → **0 errors** (whole package clean).
- [x] 5.2 Targeted `ava` green: linkedin-share (7) + cert linkedin (2) + locale guard (3) + both
  fixtures suites + `locales.js` "keys used" macro + `toggle-details` + `button-link` regression.
  (Full `nyc` coverage run not executed — change is additive with new tests, coverage not reduced.)
- [x] 5.3 `tsc --noEmit` (strict) passes with the new optional props → ES type build is sound.
- [ ] 5.4 Manual Storybook check (`npm start`) — left for local interactive verification.

## 6. PR & review — *satisfies: P8*
- [ ] 6.1 Open PR to `master`, title `CLXP-XXXX: add Publish-on-LinkedIn button to certification badge`.
  Link this spec folder. Checklist: 30 locales touched, additive props, snapshots reviewed.
- [ ] 6.2 (Optional) Publish a **canary** for early MOOC validation:
  `npm run publish:canary` → note `@coorpacademy/components@<ver>-alpha.<sha>`.
- [ ] 6.3 In the MOOC branch, `yarn add @coorpacademy/components@<canary>`; wire
  `linkedinShareUrl` (build the LinkedIn share URL from the public cert/badge URL) +
  `onLinkedinShareClick` analytics into the certification page; validate end-to-end on staging.
  → resolves spec §7 MOOC-side open question.
- [ ] 6.4 Address review; ensure CI (Travis, node 22) is green.

## 7. Release (latest) — *satisfies: P8, doc/publish.md*
- [ ] 7.1 Merge PR to `master`; `git checkout master && git pull origin master` (reset hard to
  `origin/master` if conflicts); `git clean -xdf` to drop any root lockfile.
- [ ] 7.2 `npm whoami` (or `npm login`).
- [ ] 7.3 `npm run publish:latest` → choose **Patch** for `@coorpacademy/components`
  (additive, non-breaking). Record the new version `@coorpacademy/components@X.Y.Z`.
- [ ] 7.4 If publish fails after tags created → follow troubleshooting (reset soft, delete tags,
  republish) per `doc/publish.md`.

## 8. MOOC bump — *satisfies: P8*
- [ ] 8.1 Lerna auto-opens a bump PR on the MOOC. If not, on the MOOC branch:
  `yarn add @coorpacademy/components@X.Y.Z` (the released version).
- [ ] 8.2 Remove any `^` / canary pin so the exact published version installs (doc/publish.md warning).
- [ ] 8.3 Confirm the MOOC certification page passes `linkedinShareUrl` + `onLinkedinShareClick`
  (from 6.3) against the **released** version, not the canary.
- [ ] 8.4 Push branch, PR the bump, get staging QA sign-off, merge & deploy.

## 9. Post-ship
- [ ] 9.1 Verify analytics event fires in production for a real certification completion.
- [ ] 9.2 Move `specs/001-linkedin-badge-share/` → `specs/archive/` and update any specs it changed.

---

## Definition of done
- [ ] All tasks checked off.
- [ ] Every EARS criterion in `spec.md` verifiably passes (S1×4, S2, S3, edge cases, NFRs).
- [ ] `publish_on_linkedin` present in all 30 locales; FR/EN real.
- [ ] No regression in existing certification-detail / progress-wrapper snapshots.
- [ ] Released to npm (patch) and consumed in the MOOC at the exact pinned version.
- [ ] Spec folder archived.
