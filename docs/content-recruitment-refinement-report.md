# Final content and recruitment refinement

Branch: `website-v2`. No deployment or changes to master.

## 1. Files changed in this pass

Added:
- `src/data/recruitment.ts`
- `src/components/Recruitment.astro`
- `docs/content-recruitment-refinement-report.md`

Modified:
- `src/data/home.ts`
- `src/data/research.ts`
- `src/data/area-framing.ts`
- `src/data/leadership.ts`
- `src/components/TechnicalCapabilities.astro`
- `src/components/ResearchCitation.astro`
- `src/pages/index.astro`
- `src/pages/research/index.astro`
- `src/pages/research/areas/index.astro`
- `src/pages/research/group/index.astro`
- `src/pages/research/projects/index.astro`
- `src/pages/teaching-education/index.astro`
- `src/pages/leadership-service/index.astro`
- `src/styles/home.css`
- `src/styles/research.css`
- `docs/validate-homepage.mjs`
- `docs/validate-research.mjs`

Existing unrelated workspace changes were preserved. No image assets added.

## 2. Recruitment

One shared config controls the compact Home callout and full Group section. The full section follows Technical Capabilities and precedes Current Researchers, with two columns on desktop and one on mobile. Setting `active` to false hides both sections. No funding, start date, deadline, or admissions URL was invented; contact uses the existing university email.

## 3. Taxonomy and classification

Retained the four canonical research areas and refined the approved area descriptions/themes. Publications expose primary and secondary classifications; filters include either relationship and primary labels render first with slightly stronger emphasis. Corrected maintenance, remaining-useful-life, scheduling, logistics, mobility and autonomy relationships. Removed unsupported application classifications from the apparel and health-risk examples without deleting their publications. UNICOIL remains in production/service systems; generic manufacturing and NAVIFY records are unclassified. All 50 journal publications and 23 funded project records remain.

## 4. Home and Research curation

Home and Overview share Anchorage, parent NSF PFI-TT, NSF IRES, and UNICOIL as four representative current projects. Home uses a 2×2 desktop grid. Existing authentic photographs remain; the UNICOIL card is text-only because no verified project photograph is available. Updated hero copy and renamed curated news to Selected Recognition. Overview has the five requested publications; Areas use explicit, domain-representative selections rather than the first matching records. Unverified publication URLs remain absent. PFI supplements remain nested independent records, and TechHub remains separate.

## 5. Maintenance-date language

Removed visible Home update text, Overview CV snapshot text, and Projects award-period snapshot wording. Retained the short mentoring-overlap note and intrinsic publication, grant, education, news, alumni and course dates. Course offerings no longer use the Most recent prefix. Official course titles remain unchanged. Repository search findings in historical documentation, legacy Jekyll content, internal provenance data, tests and backward-compatible IDs were not blindly replaced. The generic recruitment reference to an applicant's manuscript is not an unpublished research disclosure.

## 6. Graduate Leadership

Preserved all six stages and single-panel interaction. Evaluate emphasizes developed evaluation processes; Develop retains five substantive leadership bullets. Removed repeated internal panel headings. Capability cards remain whole-card links; repeated CTA text is visually subdued while retaining accessible link text.

## 7. Redirects and data migration

No route changes or database migration. Existing Area 4 preferred and legacy aliases still resolve. The internal `service-healthcare` key remains for compatibility; its public label is Intelligent Production & Service Systems. Official publication, project and course titles were not renamed by taxonomy replacement.

## 8. Build and tests

- Astro production build: passed.
- `docs/validate-homepage.mjs`: passed.
- `docs/validate-research.mjs`: passed, including combined filters, bibliography/project counts, routes, assets, privacy safeguards, sponsor interactions and reduced-motion fallback.
- Recruitment disabled-state build: passed; both sections absent with `active=false`, restored to true afterward and rebuilt.
- Browser checks at 1280px and 390px: no horizontal overflow; Home four-project grid changes from two columns to one; recruitment changes from two columns to one.
- Keyboard Enter switches Graduate Leadership stages; exactly one has `aria-expanded=true`, its controlled panel is visible, and duplicate panel headings are absent.
- Live publication filtering matches primary and secondary areas. Live combined project status/area filtering works.
- Local preview responds successfully: http://127.0.0.1:4322/.
