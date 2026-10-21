# CV-based content staging

Source authority: user-supplied CV updated September 24, 2026, plus explicit website decisions. The source DOCX is private and is not stored here. The homepage and minimal Research Group context page now consume selected fields through the build-time allowlist in src/data/home.ts. The raw dataset is not shipped as a public asset.

Approved homepage update: metrics in cv-records.json are the single source for $4M+ funding, 50 journal publications, 3,000+ citations (exact snapshot 3,019 on September 24, 2026), and the separate 13 PhD / 14 MS / 50+ undergraduate mentoring categories. No combined mentoring total. There are now 15 news candidates including the user-confirmed DAIS first-place result. Seven projects are marked featuredOnProjectsPage for the future project-page pass; all 23 remain available for its compact archive. Individual project funding remains hidden. The homepage displays four featured projects.

Read ../v2-content-architecture-2026.md for the page plan, homepage wireframe, reconciliation decisions and remaining confirmations.

## Data contract

- identity, appointments, education: shared personal identity and profile facts. Ended appointments must not appear in current affiliation lists.
- researchAreas: four stable area IDs. All are active. Portfolio emphasis is an editorial choice, not an inactive/active distinction.
- methods: shared cross-cutting labels.
- journals: 50 records with stable IDs, full citation, extracted title/authors/venue/year/detail, status, area IDs, featured flag, links and source ordinal. Full citation is the fallback display authority. Preserve bibliographic punctuation; do not reconstruct a guessed citation from incomplete fields.
- books: one edited book and four chapters; retain full citations and type.
- projects: 23 external-award records. Exact title is separate from proposed displayTitle. Sponsor, period, role, collaborators, areaIds, description, image, relatedPublicationIds, links and optional funding are separate fields. Null description/image means not yet supplied, not a public placeholder card. Roles and collaborators retain source wording.
- people: unique person ID with multiple relationships; completedPeriod uses year/season, not an invented date. Current Ph.D. researchers with an earlier MS remain one person. No unique-person count should add all relationships.
- cohorts and undergraduateRecord: source-backed training cohorts and undergraduate history; undergraduateRecord needs normalization before cards. These are not automatically degree students.
- teaching: course code, title, source department context and terms. Context may preserve a former department name; use the current ISE label for the page heading. No evaluation scores.
- service and recognition: safe source excerpts for editorial selection, including source headings. They are not render-ready lists. Normalize chosen roles into the six architecture sections before publishing. Do not blindly display all rows.
- patents: provisional applications from the CV; currentLegalStatus unknown. Do not count as granted patents.
- media: source-supplied article URLs for supplementary verification and image discovery. Does not grant image reuse permission.
- metrics: single source of truth for every homepage number; showOnHome controls selection. Four currently enabled; maximum five. Citation snapshot is not a live counter.
- newsCandidates: proposed milestones, not the merged final archive. Date precision and dateBasis separate year/season/month and award-start from announcement. Scientific Reports appointment must merge with the existing archive item.
- navigation: proposed routes only; does not change the running site.

## Provenance and editorial decisions

CV facts do not need re-confirmation merely because the old website disagrees. Area tags, display titles, featured selection and drafted introduction are editorial proposals. Application-area tags are based on titles and should be reviewed; empty areaIds is valid for cross-cutting work. Related publications must not be attached to grants based only on similar topics.

Links copied from the CV or old website have not been validated online. Supplementary legacy links are stored as candidates with source and verifiedOnline=false. No invented DOI URLs. Some source-extracted link lists remain strings; normalize them to the same link object contract when promoting to runtime modules.

## Dates and counts

Award status is derived as of September 2026: seven active by listed period, fifteen with ended periods, one undated. This does not determine whether a training/research program continues. REU award/cohort dates need reconciliation.

A date such as 2026 means year precision, not January 1. A season must not be converted into an invented month. Sorting partial dates requires a display policy (year buckets plus explicit editorial order where necessary).

50 journal entries; one edited book; four chapters; 23 external project entries; 23 unique graduate researchers; 12 current graduate advisees; five Ph.D. and ten MS completion relationships; six REU/IRES cohorts; 11 course records; 14 news candidates before deduplication.

## Privacy and publication gate

Excluded: private source Word file, phone, full mailing address, personal funding shares, individual award amounts, evaluation scores and confidential proposal-review details. Project funding defaults to hidden/null. Direct CV URL remains null pending an approved public version.

Do not move this entire staging file into public/. It includes editorial notes, unresolved source excerpts and internal publication decisions. Promote only approved fields into typed src/data modules, preserve provenance for maintenance, and render an explicit allowlist.

## Validation

Run:
```sh
node docs/content-2026/validate.mjs
```

Checks IDs, references, expected counts, four active areas, privacy sentinels, date-derived statuses, metric limits and hidden funding defaults. It does not validate external links, confirm grant outcomes or certify all bibliographic metadata. No dependency install, build or deployment is required for these staging-only changes.
