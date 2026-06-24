# Spec: Publish your badge on LinkedIn

> Phase 1 — Specify. WHAT & WHY only.

- **ID:** 001-linkedin-badge-share
- **Status:** ready
- **Author / date:** Silou — 2026-06-24

## 1. Overview
On the certification page, once a learner completes a certification (e.g. the 58 "Savoirs
d'Avenir" badges), they can already **download** their badge. The business wants learners to
go one step further and **share that achievement on LinkedIn**, the way competing learning
platforms do. This feature adds a "Publish on LinkedIn" action next to the badge in the
rewards section of the certification page, turning a private download into social proof and
free brand reach for Coorpacademy. The original client (via Geoffrey) explicitly asked for a
LinkedIn button directly on the certification page rather than a sentence buried in the badge
description — this spec delivers that button.

## 2. Goals / non-goals
- **Goals:**
  - Add an opt-in "Publish on LinkedIn" button in the badge reward section of the
    certification page.
  - Reuse existing visual language (LinkedIn nova-icon, button-link styling).
  - Fully internationalized copy (FR + EN real, 28 other locales fallback).
  - Emit an analytics-friendly click intent so the platform can track shares.
  - Ship through the standard build → test → publish → MOOC bump pipeline.
- **Non-goals:**
  - No OAuth / LinkedIn API posting on the user's behalf — we only open LinkedIn's public
    share/"add to profile" flow in a new tab.
  - No change to badge generation, badge hosting, or the download feature itself.
  - No back-office editing UI for the share text.
  - The component does **not** build the LinkedIn URL or know the org ID — the consumer
    (MOOC) injects a ready-made URL (constitution P1).
  - The certification email / notification copy is a separate, out-of-scope effort.

## 3. User stories

### Story 1 — Learner shares a completed badge
*As a learner who completed a certification, I want a LinkedIn button next to my badge, so that I can publish my achievement in one click.*

**Acceptance criteria** (EARS):
- Where a LinkedIn share URL is provided for the badge, the system shall render a
  "Publish on LinkedIn" button inside the badge reward section.
- When the learner clicks the LinkedIn button, the system shall open the provided LinkedIn
  URL in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.
- When the learner clicks the LinkedIn button, the system shall invoke the
  `onLinkedinShareClick` callback (if provided) for analytics, without blocking navigation.
- The button label shall be rendered through `translate('publish_on_linkedin')`.

### Story 2 — Locked / incomplete certification
*As a learner who has not finished the certification, I want the share button to behave consistently with the badge download (locked), so that I'm not invited to share an unearned badge.*

**Acceptance criteria** (EARS):
- While the certification progression is below 100%, the system shall render the LinkedIn
  button in the same disabled state as the existing download button (or hide it), matching
  the badge download's locked behavior.

### Story 3 — Backward-compatible rollout
*As a platform integrator, I want the feature to be opt-in, so that existing certification pages render unchanged until the MOOC passes the new prop.*

**Acceptance criteria** (EARS):
- If no LinkedIn share URL is provided, then the system shall render the badge section
  exactly as before, with no LinkedIn button.

## 4. Non-functional requirements
- **Accessibility:** the button shall expose `aria-label` and a stable
  `data-name="publish-linkedin-button"` for E2E selection (constitution P5).
- **i18n:** the new key shall be added to the **`en` Transifex source** only
  (`locales/en/global.json`, `.tx/config` `source_lang=en`); the other 29 locales are produced by
  the `transifex-integration` bot after merge to `master` (constitution P3).
- **Compat:** the new props shall be optional; default render is byte-for-byte unchanged
  (constitution P6).
- **Bundle:** no new third-party dependency — reuse the existing LinkedIn nova-icon.
- **Security:** external link shall use `rel="noopener noreferrer"`.

## 5. Edge cases & error handling
- If the LinkedIn share URL is an empty string, then the system shall treat it as absent and
  render no button.
- If `onLinkedinShareClick` is not provided, then the system shall still open the LinkedIn URL
  normally (callback is optional).
- If both `diploma` and `badge` rewards exist, then the system shall show the LinkedIn button
  only on the `badge` section, not the diploma.
- While the rewards details panel is collapsed, the system shall keep the LinkedIn button
  hidden until the panel is toggled open (same as download button).

## 6. Success metrics
- ≥ 1 measurable LinkedIn share click event per completed certification cohort within the
  first month (tracked via `onLinkedinShareClick`).
- Zero regressions in existing `certification-detail` / `progress-wrapper` snapshot tests.
- Feature available in the MOOC behind the injected prop within one release cycle.

## 7. Open questions
- [RESOLVED] LinkedIn flow = open `share-offsite` or "add to profile" URL injected by the
  consumer; component stays URL-agnostic.
- [RESOLVED] Scope = FR primary (Savoirs d'Avenir is FR-only) but key added to all locales.
- [NEEDS CLARIFICATION (MOOC-side, not blocking this component spec): exact LinkedIn URL
  template — simple `share-offsite/?url=` vs `profile/add?startTask=CERTIFICATION_NAME` — and
  whether a Coorpacademy LinkedIn `organizationId` is available.]

## 8. Change log
- [ADDED] `progress-wrapper` badge `DetailSection`: optional "Publish on LinkedIn" button.
- [ADDED] `progress-wrapper` prop: `sections[].linkedinShareUrl`, `sections[].onLinkedinShareClick`.
- [ADDED] `certification-detail` props: `linkedinShareUrl`, `onLinkedinShareClick`.
- [ADDED] locale key `publish_on_linkedin` in the `en` source (`locales/en/global.json`); the
  other 29 locales are translated by Transifex after merge — not hand-edited.
- [MODIFIED] none of the existing render paths (additive only).
