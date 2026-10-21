# OptiDec refinement report — September 27, 2026

Implemented on `website-v2`; no deployment or master changes. Teaching and Leadership files, global navigation/footer, publication bibliography/search interface, and the four application-area names/illustrations are unchanged. News receives only the specifically requested faculty-recognition photograph.

## Files modified

- `src/data/research.ts`: extended PFI periods, family/related-program relationships, capability references, supported researcher evidence, exact supplied alumni positions, undergraduate roster.
- `src/components/ResearchProject.astro`: capability tags, nested supplements, separate TechHub relationship.
- `src/components/ResearchSponsors.astro`: logo dimensions increased 25%.
- `src/components/NewsItem.astro`: optional recognition image, default off.
- `src/pages/index.astro`: Meet OptiDec links, compact capability cue, updated group introduction only.
- `src/pages/research/index.astro`: shared capability section and concise graduate-researcher preview.
- `src/pages/research/areas/index.astro`: capability links, emerging logistics themes, accurate people-status labels.
- `src/pages/research/projects/index.astro`: capability dropdown and parent/supplement display selection.
- `src/pages/research/group/index.astro`: photographs, consistent researchers, nonlinear ecosystem, alumni positions, undergraduate section.
- `src/pages/news/index.astro`: enables the faculty photo only on the verified November 2024 Outstanding ISE Faculty Award entry.
- `src/scripts/research.ts`: capability query/filter and accessible researcher disclosure controls; preserved existing search/filter and sponsor behavior.
- `src/scripts/research-filters.ts`: optional capability predicate composed with existing predicates.
- `src/styles/research.css`: capability matrix, compact researcher structure, project family, ecosystem, photo placement, responsive behavior, sponsor breathing room.
- `src/styles/home.css`: only the compact capability-cue typography.
- `docs/validate-research.mjs`: updated assertions and regression checks.

## Files added

- `src/data/capabilities.ts`: one canonical six-pillar taxonomy plus curated area/project/researcher maps.
- `src/components/TechnicalCapabilities.astro`: shared Overview/Group 3×2 matrix, links to filtered Projects; 2 columns on tablet, 1 on mobile.
- `src/components/ResearcherCard.astro`: monogram, degree, up to three supported expertise tags, optional keyboard-operable research expansion.
- `src/assets/photos/GradLab_Students.jpg`
- `src/assets/photos/RayPyamAward.jpg`
- `src/assets/photos/ISE Award 2024.jpg`
- This report.

## Shared relationships

The six canonical capabilities are Optimization & Decision Intelligence; Learning-Augmented & Adaptive Algorithms; AI, Analytics & Explainable Decisions; Simulation & Digital Decision Support; Autonomous & Multi-Agent Decision Systems; Emerging Computational Methods. They remain separate from the four unchanged application areas.

Area mappings:

| Area | Capabilities |
|---|---|
| Resilient Supply Chains & Logistics | Optimization, Algorithms, AI, Simulation |
| Advanced Mobility & Logistics Systems | Optimization, Algorithms, Simulation, Autonomy |
| Autonomous & Human-Robot Operations | Optimization, Simulation, Autonomy |
| Service Systems Engineering & Management | Optimization, AI, Simulation |

Emerging computational methods are explicitly preliminary. No unsupported quantum-to-area, project, or researcher connection was added. Contested logistics is an emerging theme within logistics, not a fifth area or an invented award association.

Project-capability maps use the user-specified examples and methods explicit in existing titles/descriptions: Anchorage → Optimization/Simulation; IRES human–robot → Optimization/Autonomy/Simulation; electric truck–drone program → Optimization/Algorithms/Autonomy; steel analytics → AI (and digital decision support where supported). Unclassified projects remain unclassified. Full ID mappings live in `capabilities.ts` rather than being duplicated across pages.

Researcher-capability links are limited to existing documented work: Negar, Pyam, Mahima, Arghadeep and five alumni with supported published methods. No capabilities are assigned to name-only researcher records. Existing project-to-person and paper-to-person evidence is retained; Arghadeep’s Cobot iCommander/I-Corps relationship comes from the previously supplied 2026 Mizzou story. No new paper-to-project assignments were guessed.

## PFI family and dates

- Primary NSF PFI-TT: Aug 2023 – Jan 2028.
- REU supplement: Aug 2024 – Jan 2028.
- PAWR supplement: Aug 2025 – Jan 2028.
- All three are Current. Both supplements nest under the primary research program; 23 separate structured award records remain, displayed as 21 projects/programs.
- TechHub remains separate with sponsor `Mizzou TechHub (NSF ART flow-through)`, Sep 2025 – Dec 2026, and a related-program link to PFI-TT.
- Human–robot I-Corps and the separate UNICOIL awards remain independent.
- Original CV snapshot records are immutable; user-confirmed extensions override the public research projection.

## People and photographs

Twelve graduate researchers remain in the CV-derived roster. Pyam, Mahima, and Fatemeh retain their completed MS milestones only within current researcher records. MS & PhD for Soham and Arghadeep is not interpreted as a completed MS. Five PhD alumni and six distinct MS alumni display the exact supplied current positions. Arash appears in PhD alumni only rather than twice.

Spring 2026 undergraduate entries are Victoria Prettejohn (Undergraduate Research Scholar), Arush Singh (IE Innovation Fellow), and Eric Pflasterer (Undergraduate Researcher). Luke is no longer presented as current. The existing degree filter includes the separately positioned undergraduate cards, with a jump link from Current Researchers.

Group photo sequence: GradLab_Students near the introduction; RayPyamAward beside student recognition (captioned 2024, not presented as a photograph of the 2026 DAIS award); existing picnic photo in Research Community before Alumni. Natural compositions preserve the research posters and group context. The faculty-award photograph appears only in its verified November 2024 News entry. Astro produces optimized WebP variants without changing the original files. No gallery, stock photos, or repeated new photos were added.

Research at OptiDec is an unnumbered, nondirectional four-node ecosystem around OptiDec Research; on mobile the dimensions stack without a sequential pathway.

## Researcher information still needed

Checked the CV-derived structured records, existing research/news evidence, and repository content/migration records. No additional researcher manuscripts or supported detailed profiles were available for the following entries. Missing fields are omitted publicly.

| Person | Missing fields |
|---|---|
| Yusuf Salik | Research description; primary project/research stream; representative publication/achievement; verified expertise |
| Soham Basu | Research description; primary project/research stream; representative publication/achievement; verified expertise. Completed MS is not claimed. |
| Celiker Busra | Research description; primary project/research stream; representative publication/achievement; verified expertise. Preferred name order also remains unconfirmed; preserved CV spelling/order. |
| Fatemeh Pourdehghan | Research description; primary project/research stream; representative publication/achievement; verified expertise. Spring 2025 MS milestone is retained. |
| Ilitch Fisher | Research description; primary project/research stream; representative publication/achievement; verified expertise |
| George Miras | Research description; primary project/research stream; representative publication/achievement; verified expertise |
| Kallan Jennings | Research description; primary project/research stream; representative publication/achievement; verified expertise |
| Proffitt Blackburn | Research description; primary project/research stream; representative publication/achievement; verified expertise |
| Mahima Naznin | Individually attributable representative publication/achievement beyond the verified steel-market team contribution |

Negar has a documented research stream and linked representative paper; Pyam has the verified DAIS achievement and steel-market stream; Arghadeep has the Cobot iCommander stream and I-Corps translation outcome. These descriptions do not imply a new award assignment. Current-priority updates are welcome, particularly for research streams supported by older published stories.

## QA

- Astro production build passed.
- Data assertions passed: 50 journal records, 23 award records, corrected dates, separate TechHub/I-Corps identities, nested supplements, deduplicated alumni, undergraduate names, canonical capability IDs, route/assets, and no private CV metadata in rendered pages.
- Browser checks covered Overview, Areas, Projects, Publications, Group, and Home at 1440, 1024, 768, and 390px. No page-level horizontal overflow; capability columns are 3/2/2/1.
- Verified project capability query links and combined status/area/capability filtering, publication search/year/area filtering, degree filtering, and keyboard researcher expansion.
- Sponsor logos appear only on Overview and are 25% larger; automated sponsor regression tests cover motion, hover/focus pause, explicit pause, drag scrolling, seamless wraparound, and reduced-motion cancellation. Browser pause control also passed.
- Reduced-motion logic is regression-tested; actual OS preference emulation and physical touch hardware were not tested. Native scrolling and semantic buttons are retained.
- Existing verified publication-title links were already implemented and remain unchanged. No guessed DOI/source URLs were introduced.
