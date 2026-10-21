# Final research architecture and site organization

## Implemented

- One canonical four-area framing, shared by Home and Research. Removed the unused legacy six-area definition from content.ts; CV records remain unchanged.
- Fourth area renamed Intelligent Production & Service Systems. Stable `service-healthcare` IDs retain historical anchors and filter links. New descriptive query value is also accepted.
- Added the requested personal, operational framing and research themes. Home and Overview use compact summaries; Areas uses the full supplied descriptions.
- Added a lightweight, code-native SVG for production jobs/schedules, an AI + OR + simulation decision layer, and service queues/resources. Other supplied illustrations and all authentic photographs remain intact.
- Added explicit primary/secondary area fields to projects and publications. Project tags expose the distinction. UNICOIL decision-support projects now use the production/service area. Fatemeh maps to it; Mahima remains method-oriented without an application-area assignment. iFreightOps remains logistics.
- Preserved all 50 journal titles, 23 project records, parent PFI supplements, project periods, researcher statuses, alumni, sponsor behavior, impact values, and navigation.
- Updated emerging capability punctuation and AI-OR terminology. No speculative manuscript content added.
- Each area has 3–4 selected publications with verified publisher links. Added verified DOI links for human-robot teaming, Lagrangian-relaxation transportation research, and warehouse check-in simulation. Existing links remain unchanged.

## Routes

The new `/research/areas/intelligent-production-service-systems/` landing alias redirects to the corresponding section of the existing Areas page. `/research/areas/service-systems-engineering-management/` and `/research/areas/service-healthcare/` redirect through that alias. Existing `#service-healthcare` anchors and `?area=service-healthcare` filters continue to work. This preserves the approved single Areas page rather than introducing a separate page architecture.

## Exact files changed in this pass

- `astro.config.mjs`
- `src/data/research.ts`
- `src/data/home.ts`
- `src/data/content.ts`
- `src/data/capabilities.ts`
- `src/components/TechnicalCapabilities.astro`
- `src/components/ResearchProject.astro`
- `src/pages/index.astro`
- `src/pages/research/index.astro`
- `src/pages/research/areas/index.astro`
- `src/scripts/research.ts`
- `src/styles/research.css`
- `docs/validate-research.mjs`

Added: `src/data/area-framing.ts`, `src/assets/photos/production-service-systems.svg`, and this report.

## QA

Production build and regression checks passed. Tests cover bibliography/roster counts, taxonomy mappings, selected publication links, project family dates, combined filters, internal built destinations across the site, area redirect files, public manuscript-status safeguards, and sponsor reduced-motion/interaction behavior.

Home and all five Research pages checked at 1440, 1024, 768, and 390px: no page-level horizontal overflow. Live project capability/area combination and publication year/area combination worked. New descriptive area query resolved to the stable filter value. Redirect destination verified in browser.

Existing community print grouping rules remain loaded, with break-inside avoidance and constrained photo height. Actual PDF pagination has not been visually verified. No print-capable browser API is available in the current testing surface.

No changes to Teaching, Leadership, News, raw CV records, master, or deployment configuration beyond local static route aliases. All work remains on website-v2.

## Publisher verification

- https://www.sciencedirect.com/science/article/pii/S1366554525001231
- https://www.tandfonline.com/doi/abs/10.1080/23302674.2023.2224511
- https://www.sciencedirect.com/science/article/abs/pii/S1569190X19300280
