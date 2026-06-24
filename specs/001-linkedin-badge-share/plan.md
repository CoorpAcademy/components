# Plan: Publish your badge on LinkedIn

> Phase 2 — Plan. HOW. Every decision traces to a requirement in `spec.md`.

- **Spec:** 001-linkedin-badge-share
- **Status:** approved

## 1. Specification summary
Add an opt-in "Publish on LinkedIn" button to the badge reward section of the certification
page. The component receives a ready-made LinkedIn URL and an optional analytics callback as
props; it never builds the URL. Copy is translated; the new key lands in all 30 locales. The
change is additive and backward-compatible, then flows through build → test → canary →
release → MOOC bump.

## 2. Constitution gates

| Gate | Pass? | Justification if not |
|------|-------|----------------------|
| P1 Presentational / consumer-injected URL | ✅ | URL + callback are props; no URL building in component |
| P2 Functional & immutable | ✅ | `useCallback` for the handler, `lodash/fp`, no mutation |
| P3 i18n complete (30 locales) | ✅ | `publish_on_linkedin` added everywhere; FR/EN real, rest EN fallback |
| P4 Test-first AVA + Testing Library | ✅ | Failing tests written before source; story + fixtures added |
| P5 Accessibility | ✅ | `aria-label`, `data-name`, `rel="noopener noreferrer"` |
| P6 Backward compatibility | ✅ | New props optional; absent → unchanged render |
| P7 Simplicity / anti-abstraction | ✅ | Reuse `button-link` + existing LinkedIn nova-icon; no new dep |
| P8 Release discipline | ✅ | lerna patch publish + MOOC bump per `doc/publish.md` |

**Complexity tracking:** none — no gate failed.

## 3. Architecture

```
certification-detail (template)            <-- NEW props: linkedinShareUrl, onLinkedinShareClick
  └─ ProgressWrapper (molecule)
       sections = compact([
         diplomaUrl && {type:'diploma', downloadUrl},
         badgeUrl  && {type:'badge', downloadUrl,
                       linkedinShareUrl,            <-- NEW (only on badge section)
                       onLinkedinShareClick},       <-- NEW
         stars && {type:'stars', stars}
       ])
       └─ DetailSection (badge branch)
            ├─ <ButtonLink download …/>            (existing)
            └─ <ButtonLink linkedin …/>            <-- NEW, rendered when linkedinShareUrl set & !isLocked
```

Data flow: MOOC builds `linkedinShareUrl` (e.g. `https://www.linkedin.com/sharing/share-offsite/?url=<public badge/cert url>`) → passes to `CertificationDetail` → forwarded into the badge `sections` entry → `DetailSection` renders the button. Click opens the URL (native anchor inside `ButtonLink` `link` prop) and fires `onLinkedinShareClick`.

## 4. Decisions & rationale

| Decision | Serves requirement | Rationale / alternatives rejected |
|----------|--------------------|-----------------------------------|
| Reuse `atom/button-link` with a LinkedIn nova-icon, styled like the download CTA | §3 S1, P7 | Visual consistency with the existing download button; `social-link` atom is icon-only (no label) so it's rejected for a labelled CTA |
| LinkedIn URL injected as `linkedinShareUrl` prop | §2 non-goals, P1 | Keeps component pure & environment-agnostic; org ID / public URL live in the platform |
| Optional `onLinkedinShareClick` callback | §3 S1 (analytics) | Lets the MOOC track shares without coupling the component to an analytics lib |
| Button only on `badge` section | §5 edge case | Diploma is a different artifact; client asked specifically about badges |
| Same locked/disabled behavior as download | §3 S2 | Don't invite sharing an unearned badge; reuse `isLocked` already in `DetailSection` |
| New key `publish_on_linkedin` translated FR/EN, EN fallback elsewhere | §4, P3 | Savoirs d'Avenir is FR-only but component is shared; avoid raw-key render |
| Additive optional props | §3 S3, P6 | Zero risk to existing consumers |

## 5. Data model & contracts

**`ProgressWrapper` section (badge) — additive fields**
```
{
  type: 'badge',
  downloadUrl: string,
  linkedinShareUrl?: string,        // when present & !isLocked → render button
  onLinkedinShareClick?: () => void // optional analytics hook
}
```

**`CertificationDetail` propTypes — additions**
```
linkedinShareUrl?: string
onLinkedinShareClick?: () => void
```

**Translate contract:** `translate('publish_on_linkedin')` → "Publier sur LinkedIn" (fr) /
"Publish on LinkedIn" (en).

**LinkedIn URL (built by MOOC, documented for the integrator, not implemented here):**
`https://www.linkedin.com/sharing/share-offsite/?url=<encodeURIComponent(publicBadgeUrl)>`
(or the `profile/add?startTask=CERTIFICATION_NAME&name=…&organizationId=…&certUrl=…` variant
if an org ID is provisioned — see spec §7 open question).

## 6. Risks & mitigations
- **R1: LinkedIn can't scrape a private S3 badge** → mitigate by sharing a public certification
  *page* URL (with OG tags) rather than the raw image; decided MOOC-side.
- **R2: 30-locale edit drift / missing key** → add a guard test asserting `publish_on_linkedin`
  exists in every `global.json`; FR/EN values asserted explicitly.
- **R3: snapshot churn** → regenerate fixtures (`npm run generate:fixtures`) and review diff is
  limited to the new button.
- **R4: MOOC bump forgets to drop the `^`** on a canary version → call it out in the bump PR
  checklist (per `doc/publish.md`).

## 7. Coverage check
Every acceptance criterion in `spec.md` (S1 × 4, S2 × 1, S3 × 1, NFRs, edge cases) maps to a
decision in §4 and a task in `tasks.md`. ☑
