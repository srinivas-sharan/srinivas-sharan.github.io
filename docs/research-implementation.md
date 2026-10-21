# Research + OptiDec implementation

Implemented September 26, 2026. The personal site retains Sharan Srinivas as its global identity; OptiDec is the restrained identity within Research.

## Navigation and routes

Global navigation: Home, Research, Teaching & Education, Leadership & Service, News, CV. Research Group is no longer a separate global item.

The persistent Research navigation provides Overview, Areas, Projects, Publications, and Group at `/research/`, `/research/areas/`, `/research/projects/`, `/research/publications/`, and `/research/group/`.

`/research-group/` and `/people/` redirect to `/research/group/`. The legacy `/publications/` redirect points to the bibliography. Legacy research-area redirects target the appropriate current anchors.

## Pages and interactions

- Overview introduces OptiDec, reuses the OR + AI figure and four approved area illustrations, shows four representative current projects, the sponsor strip, a group summary, compact impact counts, and five selected publications.
- Areas presents all four exact approved titles, descriptions, methods, selected projects, supported researcher relationships, and three to four publications per area.
- Projects includes all 23 external projects. Status and area filters combine without reloading. Three projects have sourced inline details; sparse records do not receive speculative expansions.
- Publications includes all 50 journal entries, grouped by CV year, with authors and bibliographic details. Search matches titles, authors, journals, and represented area terms; search, year, and area combine. Nine publisher destinations were verified; other titles remain unlinked.
- Group includes the supplied picnic photograph, capabilities, 13 unique current researchers, a one-time research-pathway reveal, REU/IRES/I-Corps experiences, selected recognition, PhD/MS alumni, and recent undergraduate research. Degree filters affect only current researchers. Accessible monograms are used, with an optional portrait field for future replacements.
- Sponsor strip uses all 12 supplied individual logos: NSF, Alaska DOT, DoD, Army Research Office, EDA, Roche, Schneider Electric, Boeing, UNICOIL, Trinity Products, Rebundle, and Missouri Higher Education & Workforce Development. Images retain their proportions. The 45-second cycle supports hover/focus pause, an explicit pause control, dragging, and touch scrolling. Reduced-motion mode is a static scrollable strip.

## Sources and reconciliation

The supplied `CV_SharanSrinivas.docx` is the primary factual source. All 50 journal titles and 23 external project titles in the existing staged CV records were reconciled against it. Shared build-only data projects an allowlist of public fields; private CV details and internal budget shares are not shipped to the browser.

The current roster contains 12 graduate researchers and Luke Richey as an undergraduate. MS/PhD entries are merged by person. Pyam Oveys, Mahima Naznin, and Fatemeh Pourdehghan remain current PhD researchers despite completed MS degrees. Five PhD alumni and seven MS alumni are represented; a person with both completed degrees may appear in both degree directories. Current PhD students are excluded from the MS alumni directory.

Project status is derived from the CV's listed periods as of September 2026: seven current, fifteen completed, and one undated. The DoD AC4 project has no dates in the source and appears under All without an invented status.

Research descriptions and person/project relationships are limited to CV evidence and verified existing university research stories. Missing biographies, jobs, uncertain classifications, and unsupported project/publication relationships remain absent. A researcher-area filter was omitted because supported associations are incomplete. CV publication metadata is retained even where a publisher's later issue year differs.

The supplied `ISE_picnic_8_2024.JPG` is copied as `src/assets/photos/optidec-community-2024.jpg` and optimized by Astro. Its caption describes the ISE research community rather than claiming every pictured person belongs to OptiDec. No stock or generated portraits were added. The supplied logo files were retained without downloading replacements; some originals have low resolution.

## Files

Shared implementation:

- `src/data/research.ts`
- `src/layouts/ResearchLayout.astro`
- `src/components/ResearchCitation.astro`
- `src/components/ResearchProject.astro`
- `src/components/ResearchSponsors.astro`
- `src/scripts/research.ts`
- `src/scripts/research-filters.ts`
- `src/styles/research.css`

Pages and routing:

- `src/pages/research/index.astro`
- `src/pages/research/areas/index.astro`
- `src/pages/research/projects/index.astro`
- `src/pages/research/publications/index.astro`
- `src/pages/research/group/index.astro`
- `src/pages/research-group/index.astro`
- `src/pages/people/index.astro`
- `src/data/site.ts`
- `astro.config.mjs`

Assets and verification:

- `src/assets/photos/optidec-community-2024.jpg`
- `public/images/sponsors/` (12 supplied PNG files)
- `docs/validate-research.mjs`
- `docs/validate-homepage.mjs` (updated navigation/route expectations)
- `docs/research-implementation.md`

## Verification and limitations

Astro production build and both validation scripts pass. Research checks cover complete source counts, deduplicated roster, combined filters, routes, assets, privacy exclusions, and redirects. Sponsor logic tests cover looping, hover/focus/user pause, dragging, wrapping, and reduced-motion fallback. Static HTML checks found no duplicate IDs or broken local anchor destinations. Scope checks confirm Home, Teaching, Leadership, and News page content was preserved.

Responsive CSS provides stacked layouts, scrollable secondary navigation, wrapping controls, readable citations, and bounded images. Accessibility includes semantic headings, labeled native controls, visible focus states, live result counts, meaningful logo alternatives, accessible monograms, and reduced-motion support.

Visual browser QA at 1440, 1024, 768, and 390 pixels remains unverified: the browser tool rejected local-preview access under its security policy. No alternate browser-access workaround was attempted. Automated interaction checks do not establish visual correctness at those widths.

Changes are local; no deployment or push was performed.
