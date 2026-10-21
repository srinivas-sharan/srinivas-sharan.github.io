# OptiDec V3 refinement

Implemented on `website-v2`; no deployment or changes to master.

## Files changed

- `src/data/capabilities.ts`: canonical terminology corrections and researcher capability relationships.
- `src/data/research.ts`: eight curated current profiles, explicit collapsed tags, expanded expertise, and verified research streams.
- `src/components/TechnicalCapabilities.astro`: consistent shared icons and aligned capability blocks.
- `src/components/ResearcherCard.astro`: explicitly selected tags and labeled expanded content.
- `src/pages/research/group/index.astro`: approved introduction, ecosystem component, undergraduate anchor/tiles, accessible alumni summary.
- `src/scripts/research.ts`: synchronize MS alumni aria-expanded with native disclosure state.
- `src/styles/research.css`: capability alignment, ecosystem emphasis, compact undergraduate tiles, structured alumni columns, print grouping.

New files: `src/components/ResearchIcon.astro`, `src/components/ResearchEcosystem.astro`, and this report. No new image assets.

## Visual and content refinements

Six capabilities remain a 3 × 2 desktop matrix, using a coherent 32px outline family with 1.5px strokes. Heading tracks and calls to action align. Learning-Augmented Optimization replaces Algorithm Adaptation; Explainable Optimization and Interpretable Decision Models are separate terms. Emerging methods retain their preliminary qualifier.

The ecosystem uses four contemporary dimensions around a smaller hub with a supporting OR + AI line. Curved connectors and a restrained orbit convey interaction rather than sequence. Hover and keyboard focus emphasize dimensions; information remains visible without interaction. Mobile stacks the dimensions. Reduced-motion rules suppress transitions.

Yusuf, Soham, Arghadeep, Celiker Busra, Negar, Mahima, Fatemeh, and Pyam have the supplied profiles and explicitly curated three-tag identities. Negar links to PFI-TT and the existing 2026 publication. Mahima's current profile now describes causal/interpretable adolescent diabetes-risk modeling; the historical steel-project team record remains historical. No new health sponsored project was created. Completed MS relationships are preserved only where recorded.

No manuscript/publication status or quantum specialization was invented for Soham; the inspected repository evidence did not establish those details. Ilitch Fisher, George Miras, Kallan Jennings, and Proffitt Blackburn remain minimal without invented tags or expansion controls.

MS alumni rows now share three fixed grid tracks, with consistently centered degree/date and right-aligned positions on desktop; mobile records stack. Undergraduate tiles measured about 85px at 390px width, eliminating their former blank space. Graduate cards have a shared minimum default height.

GradLab_Students.jpg, RayPyamAward.jpg, and the community picnic image remain in their approved locations. Faculty award photography was not moved. No sponsor logos added to Group. No unrelated page source changed.

## Validation

- Astro production build passed.
- Existing research regression suite passed: bibliography, projects, roster/alumni, combined filters, relationships, routes/assets, privacy, redirects, and sponsor behavior including reduced motion.
- Overview, Areas, Projects and Group checked at 1440, 1024, 768 and 390px: no page-level horizontal overflow.
- Keyboard Enter expands researcher details and MS alumni; aria-expanded updates to true. Mobile alumni use one column.
- Community print rules verified in the loaded stylesheet: break-inside avoid, heading/description kept with following content, and photograph constrained to 14cm. Actual paginated PDF output was not verified; browser API does not expose print-media emulation.
- Preview: http://127.0.0.1:4322/research/group/
