# V2 content architecture — CV reconciliation
Updated September 24, 2026 • Review stage • Branch: website-v2

## Approved homepage implementation update

The homepage and global shell are now implemented using the existing visual system. This update supersedes earlier review-stage statements below: the four approved metrics are $4M+ externally funded research; 50 peer-reviewed journal publications; 3,000+ citations with the dated exact snapshot; and 13 PhD, 14 MS, 50+ undergraduate students mentored (never summed). Metrics remain centralized in content-2026/cv-records.json. The hero uses the user's exact optimization, simulation and AI introduction. The 2026 DAIS result is confirmed as 1st Place for Pyam Oveys, Sharan Srinivas and James Noble and appears in homepage news and Research Group context. It no longer requires confirmation.

Project-page direction is seven selected/current features followed by a compact complete archive of all 23 records; that interior-page work is deferred. Homepage features four projects. Selected approved dataset fields are now consumed at build time, not copied wholesale to public assets. The global CV control is visibly pending until a public URL is approved. REU wording, AC4 dates, patent status and unsupported student bios keep their safe defaults. Other interior-page completion and deployment remain out of scope.

## Decision and scope

This is **Sharan Srinivas’s personal academic website**, with a clearly identified research group—not a lab-branded landing page. Keep the existing V2 typography, spacing, responsive components, black/white/warm-neutral palette, and restrained Missouri gold.

The September 24, 2026 CV is the factual authority. The old website supplies supplementary images, links, and historical news context, not current appointments or rosters. This document supersedes the older design specification’s content hierarchy and the migration inventory’s factual assumptions wherever they conflict. It does not replace the visual system.

This pass creates a reviewable dataset in `docs/content-2026/cv-records.json`. It is intentionally not imported by Astro pages. No broad page edits, deployment, master changes, source-CV publication, or visual redesign are part of this pass.

## 1. Proposed pages and reconciliation

| Page | Content to use | Change from current V2 |
|---|---|---|
| Home / | Personal identity, short biography, current appointments, research proposition, selected evidence and previews | Replace group-first introduction; fold relevant About content into homepage |
| Research /research/ | Four active areas, shared methods, selected projects and representative papers | Replace legacy topic taxonomy; keep service/healthcare active |
| Research areas /research/areas/ | Four areas with related projects/publications | Use stable area IDs; methods are cross-cutting, not extra application areas |
| Projects /research/projects/ | Current and significant completed sponsored work | Replace nine legacy cards with curated views of 23 CV project records |
| Publications /research/publications/ | All 50 journal papers, one edited book, four chapters | Replace incomplete 24-paper migration; year and optional area filters |
| Research Group /research-group/ | Formal lab name, current researchers, alumni, training cohorts, achievements, prospective students | Replace People label and stale 2025 roster |
| Teaching & Education /teaching-education/ | Recent ISE teaching, experiential/research-connected education, REU/IRES | Historical Marketing courses become compact secondary content |
| Leadership & Service /leadership-service/ | Six organized sections below | Current roles and substantive contributions, not an exhaustive CV transcription |
| News /news/ | Reconciled legacy archive plus selected 2025–26 milestones | Structured date precision, categories, optional authentic images |
| CV button | Direct approved public document URL | No dedicated CV page; private source DOCX is never a website asset |

Navigation: **Home | Research | Research Group | Teaching & Education | Leadership & Service | News**, plus a prominent CV button. Research contains Research Areas, Projects, Publications. On mobile, those links belong immediately under Research, not after News.

Preserve existing external profiles and email. The CV provides a different LinkedIn URL than V2; use the CV link after checking the destination. Keep Google Scholar, ORCID and GitHub links, subject to ordinary link validation.

### Routes and continuity

Implementation should preserve or redirect `/people/` to `/research-group/`, `/about/` and `/about.html` to `/#profile`, and `/cv/` to the approved direct public CV once chosen. Preserve existing publication, teaching and other legacy routes using the original migration inventory. Do not remove redirect stubs or existing public assets during this content phase. Redirect behavior must be tested in the static production build; a client-side development redirect alone is not sufficient.

## 2. Homepage wireframe

A spacious desktop composition; each section stacks naturally on mobile. The wireframe specifies content hierarchy, not a new visual design.

1. **Personal hero**
   - Sharan Srinivas
   - Associate Professor and Director of Graduate Studies
   - Industrial & Systems Engineering · University of Missouri
   - “Operations Research + AI for Intelligent, Resilient & Autonomous Systems”
   - Draft introduction: “I develop optimization, analytics, and AI-enabled decision methods for logistics, supply chains, healthcare, manufacturing, and emerging mobility systems.”
   - Buttons: Explore Research · Research Group · CV.
   - Existing professional portrait, fully visible without the narrow oversized crop. A genuine research image may accompany it later.
2. **Research proposition and profile**
   - A compact visual line: Operations Research + Artificial Intelligence → Intelligent Decision Systems.
   - Six method labels: Optimization, Simulation, Machine Learning, Stochastic Methods, Metaheuristics, Prescriptive Analytics.
   - Short profile/appointments strip with DGS, Quantum Innovation Center affiliation and IDSI affiliation. Education can be a compact expandable detail, not a résumé block.
   - The conceptual line is secondary to the personal hero; no large Venn diagram.
3. **Four active research areas**
   - Resilient Logistics & Supply Chains
   - Autonomous & Human-Robot Operations
   - Advanced Air Mobility & Aviation Systems
   - Service Systems & Healthcare Operations
   - All four remain visible and active. First three lead the project selection without labeling healthcare “past research.”
4. **Featured current projects**
   - Anchorage resilient freight; collaborative human–mobile robot IRES; electric truck–drone route management; LLM-enabled steel-market decisions.
   - Short display title, sponsor, period, PI/Co-PI role, concise supported description and authentic image when available.
   - No fabricated results, quantified impact or project screenshots.
5. **Research and impact at a glance**
   - Four centrally maintained metrics: 50 journal publications; 3,019 citations; 50+ undergraduate students mentored; two NSF research-training program types (REU and IRES).
   - Citation/count snapshot explicitly dated September 24, 2026.
   - Funding may replace one metric after display wording is approved; never add a long metrics wall.
6. **Research Group / mentorship preview**
   - Introduce Optimization & Intelligent Decision Systems Lab without an acronym.
   - Current graduate researchers, alumni progression, undergraduate and international research training; link to Research Group.
7. **Teaching & Education preview**
   - Recent ISE courses, problem-based learning and research-connected education. Use specific activities only when supported.
8. **Leadership & Service preview**
   - DGS, 2027 IISE Annual Conference program chair, editorial service and selected recognition.
9. **Recent News**
   - Three selected milestones, optionally one authentic feature image, plus archive link.
10. **Footer**
   - Correct ISE appointment and professional email; Google Scholar, ORCID, GitHub, LinkedIn, direct CV.

Interior pages retain the visual language but use compact introductions and varied card/list compositions. Do not repeat the oversized homepage hero or pale-gold ornament on every page.

## 3. Confidently populated content

### Appointments and biography

The CV confirms ISE Associate Professor since September 2024; Director of Graduate Studies since July 2023; Quantum Innovation Center affiliate since July 2025; IDSI Core Faculty since March 2021. Marketing Associate Professor ended December 2025 and must not appear as a current affiliation. Prior assistant professorships and visiting roles may be condensed into homepage biography details.

Education: Penn State Ph.D. (2017) and MEng (2015), Binghamton MS (2013), and CEG/Anna University BE (2011). Do not publish office address or phone from the source.

### Projects

The dataset contains all **23 externally funded ongoing/completed project entries** in the CV. Seven have listed award periods covering September 2026, fifteen have listed periods that ended, and one lacks dates. These are date-derived award states, not claims about the closure of a research program.

| Current by listed period | Period | Proposed area |
|---|---|---|
| Anchorage freight transportation | Mar 2026–Dec 2027 | Logistics |
| Risk-aware commodity pricing | Apr 2026–Dec 2030 | Logistics |
| Human–mobile robot IRES | Sep 2025–Aug 2028 | Autonomy; service systems |
| Electric truck–drone platform translation | Sep 2025–Dec 2026 | Logistics; autonomy |
| LLM steel-market analytics | Apr 2025–Dec 2028 | Logistics |
| Cloud DevOps CyberTraining | Aug 2024–Jul 2027 | Cross-cutting research education |
| AI-powered steel-price prediction | Jan 2024–Dec 2028 | Logistics |

Significant completed work includes PFI truck–drone logistics and supplements, I-Corps translation, Alaska freight/fuel management, air-taxi/drone IRES, Missouri manufacturing resilience, supplier collaboration and tumor-board economic evaluation. Related awards should be linked as a portfolio rather than misleadingly presented as unrelated platforms or double-counted impacts.

Title, sponsor, listed period, role and collaborator strings are transcribed. Display titles, featured choices and area tags are editorial proposals. Descriptions, images and project-to-paper relationships remain null/empty where not established: similar topics alone do not prove a paper arose from a particular grant.

Internal seed grants, cost share and in-kind software licenses remain outside the 23-project external portfolio. Do not combine their values into external funding metrics. They can be added as separately typed records if selected for public storytelling.

### Publications and patents

All 50 journal citations have stable IDs, year, authors, title, journal, bibliographic detail, full citation, status, optional links and area IDs. One edited book and four chapters are separately recorded. CV citation text remains available for fidelity checking. Do not substitute an old acceptance-news year for a publication year or invent a DOI. Papers marked accepted/in press retain that status.

Featured candidates span truck–drone routing, disaster logistics, freight software, human–robot picking, air mobility and cardiovascular risk modeling. These choices and title-based area tags are reviewable editorial decisions. Untagged work remains in the complete list; do not force every methodological or interdisciplinary paper into one of the four application areas.

Two provisional patent applications are recorded, not two granted patents. Do not headline them as granted/current patents without legal-status confirmation. Conference presentations are intentionally not added to the 50-journal count or expanded into a competing homepage bibliography.

### Research Group

The reconciled dataset contains **23 unique graduate researchers**, with separate current-advising and completed-degree relationships. There are **12 current graduate advisees**, **five Ph.D. completion records**, and **ten MS completion records**. These counts overlap and must not be added as unique people.

Current roster: Yusuf Salik; Soham Basu; Pyam Oveys; Negar Jahanbakhsh Javid; Mahima Naznin; Arghadeep Mitra; Celiker Busra; Fatemeh Pourdehghan; Ilitch Fisher; George Miras; Kallan Jennings; Proffitt Blackburn.

Ph.D. alumni: Paul Antonacci (summer 2026), Arash Alizadeh (fall 2025), Shitao Yu (summer 2023), Mohamed Salama and Haya Salah (spring 2022).

Current doctoral students with completed MS degrees should have one person record with both relationships, not duplicate cards implying they left the group. Preserve names as supplied; do not invent job placements, thesis titles, photos, bios or dates.

The CV also supplies MU undergraduate history and six REU/IRES cohorts spanning 2023–25. Luke Richey is listed current; Thomas Willerth and Matt Floyd appear with 2025 undergraduate work, and Stephen Swingle with 2024. Do not carry Matt Floyd’s old MS-status claim forward. Keep training cohorts separate from degree advisees.

The CV’s aggregate 13 Ph.D./14 MS/50+ undergraduate mentoring figures are mentoring totals, not numbers graduated. Prospective-student openings, funding availability and application instructions need supplied content, not a generic promise.

### Teaching & Education

Eleven course records cover six ISE course/laboratory entries, three Marketing courses, one Accounting course and one Penn State course. Recent emphasis:

- ISE 4370/7370 Service Systems Engineering and Management — through fall 2026.
- ISE 4410/7410 Data Engineering and Predictive Modeling — through fall 2026.
- ISE 8410 Advanced Analytics with Engineering Applications — through fall 2025.
- ISE 4610/7610 Quality Engineering and Analytics — through spring 2025.
- Systems Simulation and its laboratory remain useful prior teaching, not presumed current offerings.

Condense Marketing/Accounting and earlier Penn State teaching into Additional Courses Taught. Retain Passau summer teaching and IIM workshop information where relevant. Build research-training modules from REU and IRES awards/cohorts, noting the REU timeline conflict below. No semester evaluation scores are in the staged teaching data.

Use the user’s active/problem-based and experiential-learning direction. Specific robotics, drone or AI classroom activities require supporting examples or source material before making claims about a particular course.

### Leadership & Service

1. **Professional Leadership:** IISE OR Division president (2023–24), president-elect (2022–23), director (2020–22), immediate past president (2024–25).
2. **Editorial Service:** Scientific Reports (2025–); Transportation Research Part E (2024–present); BMC Medical Informatics and Decision Making (2024–present); Sustainability topic editor (2021–present). Journal of Healthcare Engineering is a completed 2021–23 role, not current.
3. **Research & Peer Review:** General service to 30+ journals; selected thesis evaluation work. No confidential proposal-panel details or manuscript information.
4. **Conference Leadership & Service:** 2027 IISE Annual Conference program chair (2026–27), 2023 regional conference chair and selected OR track/session leadership.
5. **University Leadership & Service:** DGS; Ph.D. qualifying committee chair; IISE chapter advisor; college P&T committee; AI integration, graduate-school strategy and quantum-certificate work; AI Faculty Fellow (2026–27).
6. **Selected Recognition:** 2026 ASEE John L. Imhoff award, senior faculty teaching award, distinguished young alumnus award; 2024 Stanford–Elsevier citation recognition; faculty awards; Koopman Prize; selected student-voted teaching recognition.

Do not reproduce journal impact factors or every committee membership. Keep closed leadership terms historical. Omit the apparently ongoing Marketing Analytics Committee listing from selected current service until reconciled with the ended appointment.

## 4. News reconciliation

Fourteen CV-based candidates are staged, not published. They include 2026 awards/fellowship, 2027 conference leadership, new freight and pricing projects, a representative 2026 paper, Ph.D. completions, and 2025 IRES/LLM/Quantum developments. Select rather than publish every candidate.

The existing 39-item archive must be reconciled, not discarded:
- Match events before insertion. Scientific Reports already has April 2025 news; the CV’s year-only candidate is the same event, not a second appointment.
- Preserve reliable legacy links and historical news context; resolve factual conflicts in favor of the CV.
- Keep acceptance announcements as acceptance events even when the final publication year differs.
- Use CV wording for the 2023 junior faculty teaching award.
- Separate grant announcement date from award start: the I-Corps archive says January 2025, while the CV award period begins February 2025.
- The Stanford–Elsevier recognition is for 2024 citation ranking; any 2025 news item must distinguish announcement year from ranking year.
- Add 2025/26 student-voted teaching recognition selectively; do not invent a month or semester.
- Do not describe the 2026 DAIS competition as a win before its result is confirmed.

Date fields support year, month and season precision. Within a year, partially dated events need editorial ordering; do not manufacture January 1 timestamps. Images are optional, not placeholder stock. Keep text category labels alongside decorative accessible icons: grant/dollar, award/trophy, publication/document, appointment/person, career/briefcase. This carries forward the earlier browser feedback for eventual implementation.

## 5. Assets, links and presentation

Reusable local assets include `public/images/profile.png`, `HealthAnalytics.png`, `HealthAnalyticsSmall.jpg`, `Prevention.png`, `transportation.png`, and `ssem.png`. Match diagrams to the actual subject and inspect resolution before reuse; do not relabel an old generic diagram as evidence of a new grant. Existing publication/news links are useful candidates, not proof that they are still live.

Needed to enrich cards: approved current project graphics/screenshots, graduate/student photos, cohort photographs and permission/credit details. Null images are acceptable in this review dataset. Do not scrape or invent photographs.

The private DOCX remains outside the repository. The existing SharePoint CV URL is a candidate only: confirm that it opens anonymously and contains the intended public version. Do not silently replace it with the private Word file. Link checks and external source verification have not been completed in this phase.

## 6. Genuine remaining confirmations

These do not block the content architecture or known CV facts.

| Item | Why it matters | Safe default |
|---|---|---|
| Approved public CV PDF/URL | Private source is not a distributable website asset; current link may be stale/access-controlled | Keep staged URL null; do not publish source DOCX |
| REU award extension/renewal | Listed period ends Dec 2024 but CV includes 2025 cohort and current program leadership | Preserve both facts; no closure claim |
| AC4 period | CV gives project but no start/end | Dates unknown; exclude from current-project count |
| 2026 IISE DAIS competition result | CV names event with Pyam Oveys, no placement | Do not claim award/winner |
| Public funding wording | CV uses both $4M+ and approximately $4M | Hide funding metric and all project amounts by default |
| Marketing Analytics Committee | Service lists present despite Marketing appointment ending Dec 2025 | Omit from selected current roles |
| Patent status, if featured | CV records provisional filings, not current/granted status | Label only as provisional applications |
| Prospective-student details, student bios/placements and authentic visuals | CV does not supply them | Omit unsupported claims; retain empty optional fields |

Exact months for year-only recognition are optional, not blockers. DOI/publisher discovery and link checks are editorial verification tasks, not questions the user must answer. Project summaries should be drafted narrowly from supported scope and reviewed; outcomes need actual evidence.

## 7. Implementation after review

1. Approve this hierarchy and featured selections.
2. Promote staged records into typed runtime modules, keeping stable IDs and provenance; normalize selected service/recognition rows into their six public sections.
3. Merge/deduplicate the news archive; reuse validated links without copying stale facts.
4. Update navigation, homepage and page content using the existing components; add filters and accessible category icons.
5. Add legacy redirects and test routes, keyboard/mobile behavior, image fitting, accessibility and production build.
6. Review the complete local V2. Deployment remains a separate explicit decision.

The earlier portrait, affiliation, wordmark-size, nested mobile Research links and news-icon feedback remains applicable during page implementation; this architecture pass does not claim those UI fixes have been completed.
