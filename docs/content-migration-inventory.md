# V2 content migration inventory

Prepared from the content present on the `website-v2` branch on 2026-09-23. This is a content-planning document only. It does not authorize removal or modification of the existing site.

## Scope and interpretation

- **User-verified correction, 2026-09-24:** Sharan Srinivas is no longer associated with Marketing. The V2 current affiliation is Associate Professor in the Department of Industrial & Systems Engineering at the University of Missouri. Historical Marketing courses remain part of the teaching record.
- Proposed V2 structure: **Home, Research, Projects, People, Publications, Teaching & Outreach, News, About, CV**.
- “Current” below means that the statement is internally consistent and not inherently time-sensitive. It does **not** mean it has been externally verified in 2026.
- “Outdated” means the material contains dates, counts, roles, or “current” language that ends in 2025 or earlier.
- “Uncertain” means the repository does not provide enough evidence to confirm the statement or distinguish an active initiative from historical work.
- Sample AcademicPages posts, publications, teaching records, talks, comments, authors, PDFs, and generator data are excluded from the real-content inventories.
- Historical facts should normally be retained even when old. Time-sensitive labels such as “current,” “in progress,” and “present” require confirmation before publication.

## Recommended V2 content model

| V2 section | Recommended role |
| --- | --- |
| Home | Current title and affiliations, a short research proposition, two or three verified impact metrics, featured projects, latest three to five news items, and calls to action. |
| Research | Enduring research agenda, methods, and four to six research areas. Avoid project-specific dates and long publication lists. |
| Projects | Named funded initiatives and substantive applied research programs, with role, dates, collaborators, sponsor, outcomes, students, publications, and media. |
| People | Current students, alumni, mentored researchers, program participants, and eventually collaborators. Every “current” status needs verification. |
| Publications | Complete structured bibliography generated from a durable source such as ORCID, BibTeX, or a maintained data file. |
| Teaching & Outreach | Teaching philosophy, current/recent courses, student advising approach, REU/IRES programs, workshops, and educational outreach. |
| News | One canonical reverse-chronological archive. Home should query a small subset rather than duplicate it. |
| About | Narrative biography, appointments, education, selected leadership, awards, editorial roles, and contact/profile links. |
| CV | A stable downloadable PDF and, optionally, an accessible HTML summary. Keep `/cv/` as the canonical URL even though it currently contains teaching content. |

## Itemized migration matrix

### Identity, biography, and overview

| Existing content | Current source | What it says | Assessment | V2 destination | Recommendation | Useful assets | Links to validate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Name and author profile | `_config.yml` | Sharan Srinivas; University of Missouri; email; GitHub; Google Scholar; LinkedIn; ORCID; profile photograph. | Real but inconsistent: the bio says “Assitant Professor,” while the homepage says Associate Professor. The LinkedIn value is a full URL even though the old template prepends another LinkedIn URL. | Home, About, site-wide footer/header | Retain identity and profiles; rewrite the title and link data into normalized fields. | `images/profile.png` | Email, Google Scholar, ORCID, GitHub, LinkedIn; specifically fix/verify the malformed LinkedIn construction. |
| Current appointment | `_pages/about.md`, line 11 | Associate Professor with joint appointments in Industrial & Systems Engineering and Marketing at MU; Director for Graduate Studies in ISE. | Current as of April 2025; uncertain in 2026. | Home, About | Retain after confirming exact titles, department names, college affiliation, and Graduate Studies role. | `images/profile.png` | Both MU department links and an official faculty profile. |
| Research mission | `_pages/about.md`, lines 13–15 | Develop theories, methods, and scalable tools for use-inspired operations research problems with societal and business impact, using optimization, stochastic models, simulation, analytics, machine learning, and heuristics. | Substantive and broadly current; verbose. Overlaps the research overview in `_portfolio/portfolio-0.md` and `_talks/2014-03-01-talk-3.md`. | Home summary; Research full narrative | Condense for Home and rewrite as an enduring Research statement. Keep one canonical source. | Research graphics may support area cards. | No direct links; verify terminology and current priority areas. |
| Research scope and application areas | `_pages/about.md`, `_portfolio/portfolio-0.md`, `_talks/2014-03-01-talk-3.md` | Operations research, industrial engineering, big data/data analytics, optimization, ML, supply chain, manufacturing, logistics/transportation, healthcare, biomedical informatics, and service systems. | Real but triplicated. “Web 2.0,” “in the current era,” and future-plan wording are dated. | Research | Rewrite and consolidate. Retain the strongest current themes and remove trend-language unless still strategically useful. | `HealthAnalytics.png`, `HealthAnalyticsSmall.jpg`, `Prevention.png`, `ssem.png`, `transportation.png` | Validate any claimed media recognition if retained. |
| Research scale and outputs | `_pages/about.md`, line 17 | More than $2.6M in funding; sponsors include NSF, FHWA, EDA, AKDOT, MDHEWD, Schneider Electric, Roche, Boeing, Rebundle, and Trinity Products; 45 journal articles, 45+ conference items, one edited book, four chapters, and two provisional patents. | Outdated snapshot as of 2025; underlying project/title data is incomplete. | Home metrics, About, CV | Retain only after updating totals and defining whether funding is awarded share, total project value, or PI/Co-PI aggregate. Move full detail to CV/Projects. | None | Sponsor/project records, publication count, book/chapter count, patent status. |
| Teaching/service summary | `_pages/about.md`, line 19 | Teaches undergraduate, graduate, and MBA courses in analytics, ML, simulation, service systems, and supply-chain optimization; active in INFORMS/IISE; editorial roles. | Real but time-sensitive and partially duplicated by Teaching and Service pages. | Home teaser, Teaching & Outreach, About | Condense on Home; maintain detailed roles in the appropriate sections. | None | Editorial-board and Topic Editor appointments. |
| Education | `_pages/about.md`, lines 24–29 | PhD and MEng from Penn State; MS from Binghamton; BE from College of Engineering–Guindy, Anna University. | Stable, apparently current. Years and thesis/advisor information are absent. | About, CV | Retain; standardize degree abbreviations and institution names. Add years only if desired and verified. | Institution marks only if licensed and useful. | Official institution names; degree years if added. |
| External CV | `_pages/about.md`, line 22 | Download link to a SharePoint-hosted CV. | Real but fragile; access and currency are uncertain. | CV | Replace or supplement with a versioned PDF hosted on the site; preserve `/cv/`. | New CV PDF is needed. | SharePoint access, public permissions, last-updated date, and whether the query token expires. |

### Research areas and publication evidence

| Existing content | Current source | What it says | Assessment | V2 destination | Recommendation | Useful assets | Links to validate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Healthcare Analytics and Operations Engineering | `_portfolio/portfolio-1.md` | Outpatient appointment scheduling under uncertainty and dynamic calls; multi-stage clinics; platelet inventory; emergency-department process reengineering; healthcare operations consortium. Includes three selected publications. | Real, useful foundation, but primarily describes work through 2020. The consortium’s current status is uncertain. | Research area; Projects for major initiatives; Publications | Rewrite around enduring questions and current work. Split appointment systems, blood-product inventory, and ED operations into project cards if outcomes and dates can be supplied. | `images/HealthAnalytics.png`, `images/HealthAnalyticsSmall.jpg` | Three publication URLs and the MU Consortium for Healthcare Operations Management and Engineering Analytics page. |
| Preventive Health Care and Health Informatics | `_portfolio/portfolio-2.md` | Longitudinal analysis of adolescent depression, emotions, well-being, biomarkers, and later cardiovascular risk; planned ML screening tool for chronic disease risk. Includes two selected publications. | Real but dated. “Currently” is unsupported after 2020. The second publication appears to reuse the first publication’s URL and is likely linked incorrectly. | Research; Projects; Publications | Rewrite as a completed/ongoing research program. Confirm whether the screening tool exists, its status, collaborators, funding, outcomes, and appropriate health-claims wording. | `images/Prevention.png` | Both publication records, especially the International Journal of Cardiology paper; Science Trends/media claims. |
| Service Systems Engineering and Management | `_portfolio/portfolio-3.md` | Lean, Six Sigma, simulation, and analytics applied to education, hospitality, campus dining, and other service systems. Includes two publications. | Real but old and broad. Card excerpt still contains template text. | Research; Projects; Publications | Condense into an enduring research-area description. Turn campus dining and student-review analytics into case-study projects only if still representative. | `images/ssem.png` | Replace ScienceDirect `casa_token` URLs with canonical DOI/publisher links. |
| Transportation and Logistics | `_portfolio/portfolio-4.md` | Emerging technology, drones, air taxi, last-mile delivery, warehouse logistics, and sustainable operations. Includes three publications. | Real and strategically important, but the copy stops around 2020 and one citation still says “In-Press.” Later grants/news substantially extend this area. | Research; Projects; Publications | Rewrite around aerial/road logistics, advanced air mobility, routing, and logistics operations. Link to the 2022–2025 project/news material. | `images/transportation.png` | All three citations; replace temporary `casa_token` URLs; update the air-taxi review’s final citation/DOI. |
| Collaborative human–robot operations | `_pages/publications.md`, 2022 and 2025 news; `_pages/about.md` | Collaborative picker/robot routing, dynamic order picking and intervention strategies, and a 2025 NSF I-Corps translation project for an optimization platform. | Real and likely current; absent from the old Research portfolio. | Research and Projects; Publications; News | Add as a first-class V2 research area or featured project after confirming scope and project status. | No dedicated repository image. | 2022 and 2025 articles; NSF award 2447357. |
| Manufacturing scheduling | `_pages/publications.md`, February 2025 | New MIP formulations for order acceptance and scheduling on non-identical parallel machines with dependent setup times. | Real, recent, but represented only as news. | Research or Projects; Publications; News | Retain as publication/news; create a project only if it represents an ongoing program. | None | Springer article link and final bibliographic metadata. |
| Publications represented in prose/news | `_portfolio/*.md`, `_pages/publications.md` | Twenty-plus real article titles/citations across healthcare, preventive health, service systems, transportation/logistics, robotics, scheduling, text analytics, adaptive clothing, and emergency-department operations. | Real but incomplete and inconsistently formatted. The site claims 45 journal articles but does not contain the full bibliography. | Publications | Use as a seed/checklist, not the final publication database. Import and reconcile a complete authoritative bibliography. | Optional covers/graphical abstracts, none currently stored. | Every DOI/publisher URL, titles, years, author order, status, and duplicates. |

### Teaching, advising, people, and outreach

| Existing content | Current source | What it says | Assessment | V2 destination | Recommendation | Useful assets | Links to validate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Teaching philosophy | `_pages/cv.md`, line 12 | Active and problem-based learning; hands-on tutorials, games, cases, research projects, inclusive methods, curiosity, research-teaching integration, technology, teamwork, and lifelong learning. | Real and enduring but very long. | Teaching & Outreach | Rewrite into three to five concise principles, with evidence/examples. | Classroom/project photography is absent. | No current links. |
| Six course descriptions | `_pages/cv.md`, lines 14–42 | Three Marketing/Business courses and three IMSE courses, including topics, terms taught, and software. | Real but last terms are 2017–2021; department name and course numbers may have changed. | Teaching & Outreach; CV | Retain historical teaching record; verify which courses remain current and rewrite current offerings separately. | Course/project visuals are absent. | Weka link; current MU catalog pages, titles, numbers, cross-listings, terms, and software. |
| Advising overview | `_pages/cv.md`, lines 44–46 | Claims three PhD and two MS graduates, eight current PhD and three current MS advisees, two unnamed international co-advisees, 25+ undergraduate mentees, and alumni placements. | Outdated and internally inconsistent with the named rosters. The graduate list contains three PhD and eight MS completions; the current list appears to contain nine PhD and four MS degree labels if dual-degree students are counted in both. “Fullbright” should be “Fulbright.” | People; Teaching & Outreach; About impact metric; CV | Rewrite after reconciling counts, degree status, co-advising, and placements. Avoid manually maintained aggregate counts unless generated from people data. | People portraits are absent. | Student statuses and alumni destinations. |
| Current students roster | `_pages/cv.md`, lines 49–61 | Eleven named students with MS and/or PhD designations. | Real but only current as of 2025. Several also appear as recent MS graduates who may have continued into PhD programs. | People | Retain after obtaining confirmation, preferred name order, degree program, research topic, start year, and profile links. | No portraits. | Institutional/student profile links, consent for photos/bios. |
| Graduated advisees | `_pages/cv.md`, lines 64–76 | Eleven named alumni with degree and graduation term, 2019–2025. | Real historical data; more complete than the summary count. | People alumni; CV | Retain, normalize degree notation, add thesis/dissertation, current position, and profile links where appropriate. | No portraits. | Graduation terms and current placements. |
| Grant-supported student researchers | `_pages/cv.md`, lines 80–88 | Seven named students supported on US Army, AKDOT, NSF PFI, and NSF REU Supplement projects during 2023–2025. | Real historical data; “student who is not my advisee” distinction matters. | People under “Mentored Researchers”; relevant Projects | Retain with role/date/project normalization and consent-aware profile detail. | No portraits. | Exact grant/project mapping and dates. |
| MU undergraduate mentees | `_pages/cv.md`, line 93 | Seventeen named MU students, with years or “In Progress” labels. | Real, but “In Progress” is outdated/uncertain in 2026. | People or Teaching & Outreach archive | Archive past cohorts; verify the three in-progress statuses and standardize programs/years. | No portraits. | Names, graduation years, honors status, programs. |
| NSF REU and IRES participants | `_pages/cv.md`, lines 95–100 | Named 2023 and 2024 REU/IRES cohorts. | Real historical outreach content. Ben McIntire and Vishnu Arun appear in multiple programs, appropriately. | Teaching & Outreach program archive; People | Retain as program cohorts. Add program descriptions, locations, outputs, and sponsor/award links. | Cohort/project photographs are absent. | Award pages, participant spellings, cohort years, project outcomes. |

### Leadership, service, awards, grants, and news

| Existing content | Current source | What it says | Assessment | V2 destination | Recommendation | Useful assets | Links to validate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| IISE Operations Research Division leadership | `_pages/markdown.md`, lines 13–20; news May 2020 | Director 2020–2022, President-Elect 2022–2023, President 2023–2024, Immediate Past President 2024–2025; IISE and INFORMS memberships. | Real and strong leadership arc; historical after 2025. | About; CV; selected News | Retain in compact timeline. Verify exact term dates and any role after 2025. | Organization marks only if permitted. | IISE OR Division page. |
| Editorial roles | `_pages/about.md`; `_pages/publications.md` | Scientific Reports Editorial Board; BMC Medical Informatics and Decision Making Editorial Board; Transportation Research Part E Editorial Board; Sustainability Topic Editor; Journal of Healthcare Engineering Academic Editor. | Real but time-sensitive and spread across pages. | About; CV; News for appointment events | Retain after confirming start/end dates and exact role names. Avoid “current” without an end-date field. | Journal logos only if licensed. | Each official journal masthead/profile. |
| Edited book and reviewing | `_pages/markdown.md`, lines 23–36 | Co-editor of *Supply Chain Management in Manufacturing and Service Systems*; ad-hoc reviewer for nine named journals; over 75 reviews. | Book is stable; review count and journal list are dated; one journal is duplicated. | About or Publications “Books”; CV | Retain book with complete citation. Condense reviewing into fields and update count only if verified. | Book cover could be sourced with permission. | Springer book link; current editorial/reviewer facts. |
| Conference leadership | `_pages/markdown.md`, lines 40–49 | IISE OR track chair/co-chair, competition judge, and invited-session chair roles from 2017–2022. Last entry, “Healthcare Modeling at the INFORMS…,” is incomplete. | Real historical service, but incomplete and dated. | About selected leadership; CV full list | Retain completed entries; repair or remove the incomplete one after confirmation. | Event photos are absent. | Conference names, dates, locations, and incomplete INFORMS entry. |
| University/college/department service | `_pages/markdown.md`, lines 52–77 | MU emergency-department process study, campus dining project, UM Faculty Scholars, committees, faculty searches, MU IISE advising, and guest speaking. | Real but several “Present” ranges are stale, one candidate-interview line is duplicated, and some entries may belong under Projects or Teaching. | About selected service; Projects for applied studies; Teaching & Outreach for student chapter; CV for full service | Condense the public website; retain full verified chronology in CV. | None. | All “Present” dates, committee names, Faculty Advisor status, and duplicate candidate-interview entry. |
| Awards and recognitions | `_pages/publications.md` and `_pages/about.md` | Outstanding Professor awards, Outstanding ISE/IMSE Faculty awards, Outstanding Junior Excellence in Teaching Award, INFORMS Best Paper Finalist, and MU Top 10 research recognition. | Real historical facts; duplicated in Home and News. | About highlights; News archive; CV | Retain; keep News canonical and show only selected awards elsewhere. | Award/event photos are absent. | Award pages, formal award names, dates, and “voted by graduating seniors” wording. |
| Grants and sponsored projects | `_pages/publications.md`, `_pages/about.md`, `_pages/cv.md` | Named NSF, DoD, AKDOT, Boeing, MDHEWD, Roche, and other projects; roles range from PI to Co-PI/Co-I. | Real but incomplete: some awards lack titles, identifiers, amounts, dates, outcomes, or sponsor links. | Projects; selected News; CV | Retain and normalize into structured project records. Confirm whether ongoing or completed. | Dedicated project imagery is absent. | Every award number, public abstract, role, funding period, amount, collaborators, and outcome. |
| News archive | `_pages/publications.md`; partial duplicate in `_pages/about.md` | Thirty-nine historical items from May 2020 through April 2025 covering publications, grants, awards, appointments, promotion, and a student milestone. | Real and useful. Duplicated on Home; one date differs between pages; order around March/April 2023 is inconsistent. | News; queried subset on Home; linked Publications/Projects/People records | Retain as one structured archive. Normalize dates and categories; avoid duplicating raw text. | Add images only where rights are clear. | All linked articles, awards, grants, institute pages, and journal pages. |

## 1. Real research areas and projects represented in the repository

### Enduring research areas

| Research area | Existing evidence | Recommended V2 treatment | Status/questions |
| --- | --- | --- | --- |
| Operations research methods for societal and business systems | `_pages/about.md`; `_portfolio/portfolio-0.md` | Use as the umbrella Research narrative. Feature discrete optimization, exact/approximate algorithms, stochastic/sequential decision-making, simulation, analytics, ML, and heuristics. | Current direction should be confirmed and prioritized. |
| Healthcare analytics and operations engineering | `_portfolio/portfolio-1.md`; service/news items | Research-area page with appointment systems, platelet inventory, emergency-department operations, and the healthcare consortium. | Most detailed evidence ends in 2020; consortium status needs verification. |
| Preventive healthcare and biomedical/health informatics | `_portfolio/portfolio-2.md`; 2022 CVD paper news | Research-area page with adolescent-to-adult cardiovascular risk and ML screening. | Confirm whether the screening tool or collaboration remains active. |
| Service systems engineering | `_portfolio/portfolio-3.md`; `_pages/markdown.md` | Research-area page or a sub-area under applied operations engineering. | Clarify whether education/hospitality/service systems remain a current priority. |
| Transportation, logistics, and advanced mobility | `_portfolio/portfolio-4.md`; 2020–2025 news | Major Research area covering drones, air taxis, truck-drone systems, autonomous delivery robots, routing, warehouse logistics, and sustainable operations. | Strong evidence of continued work; old page needs a full update. |
| Human–robot collaboration and warehouse operations | 2022 and 2025 publication news; 2025 NSF I-Corps | New first-class Research area or featured interdisciplinary theme. | Likely current; repository lacks a consolidated description and visuals. |
| Manufacturing scheduling and supply-chain optimization | 2025 scheduling paper; About and course material | Research sub-area; create project content only when a sustained program can be documented. | Scope, collaborators, and current projects are not described. |
| Data/text analytics for customer and organizational insight | Airline-review, adaptive-clothing, and student-review publications/news | Cross-cutting methods/application theme or individual Projects. | Decide whether this remains central or should be represented through publications only. |

### Named or clearly identifiable projects/initiatives

| Project/initiative | Dates visible in repository | Role/collaborators stated | Sponsor | Recommended action |
| --- | --- | --- | --- | --- |
| Translation Potential of a Software Platform for Optimizing Collaborative Human–Robot Operations | Awarded Jan 2025 | PI: Sharan Srinivas | NSF I-Corps, award 2447357 | Featured active/recent Project after confirming end date, customer-discovery outcomes, software status, and team. |
| Collaborative Human–Robot Teaming for Dynamic Order Picking | Publication accepted Mar 2025; related 2022 paper | Authors not enumerated in news | Not stated | Research project/case study linked to the I-Corps project and publications. |
| Order Acceptance and Scheduling on Non-Identical Parallel Machines | Publication accepted Feb 2025 | Not stated | Not stated | Publication-linked project if it reflects an ongoing manufacturing program. |
| Air Taxi Operating Site Location | Publication accepted Jan 2025 | Not stated | Not stated | Add to advanced-air-mobility project cluster. |
| Application-Inspired Cloud DevOps Training Using an Online Self-Service Learning Platform | Awarded Aug 2024 | PI Prasad Calyam; Co-PIs Sharan Srinivas and Noah Glaser | NSF CyberTraining, award 2417826 | Teaching & Outreach plus Projects. Add training audience, platform, materials, dates, and outcomes. |
| Analysis Capabilities for Competition, Crisis, and Combat (AC4) | Awarded Sep 2023 | PI James Noble; Co-PIs Sharan Srinivas and Suchithra Rajendran | DoD flow-through | Project entry after confirming public-safe description, award details, period, and outputs. |
| Intelligent Truck Transport Management Application | Awarded Sep 2023; students supported 2023–2024 | PI Sharan Srinivas; Co-PIs Suchithra Rajendran and Prasad Calyam | Alaska DOT | Strong Project candidate. Add route optimization, scenario/incident management, deliverables, team, and public report/software links. |
| Cloud-Based Route Management Platform for Electric Truck and Drone Operations | Awarded Aug 2023; student support in 2024 | PI Sharan Srinivas; Co-PIs Suchithra Rajendran and Prasad Calyam | NSF PFI-TT, award 2313887 | Featured Project. Connect students, translation outcomes, publications, prototypes, and media. |
| AI-Enabled Decision Analytics for Air Taxi and Drone Operations | Awarded Apr 2023; 2023 and 2024 cohorts | PI Suchithra Rajendran; Co-PIs Sharan Srinivas, Prasad Calyam, Derek Anderson | NSF IRES, award 2245469 | Teaching & Outreach program and Project. Add international partner/location, cohort outputs, and photos. |
| Research on Prescriptive Analytics for AI-Enabled Operations Engineering | Awarded Feb 2023; 2023 and 2024 cohorts | PI Suchithra Rajendran; Co-PIs Sharan Srinivas and Prasad Calyam | NSF REU, award 2243589 | Teaching & Outreach program and Project. Add research themes, cohort work, and outcomes. |
| Scalable Cloud-Based Route Optimization for Aerial and Road Logistics | Awarded Aug 2022 | PI Sharan Srinivas | NSF I-Corps, award 2240977 | Project; connect it to the later PFI platform and distinguish phase/outcomes. The source labels the link “NSF REU Public Abstract,” which is incorrect. |
| Collaborative Truck–Multi-Drone Delivery and Routing | Publications in 2022 and 2023 | Collaborators not summarized | Not stated | Consolidate into a transportation/logistics Project with both papers and later platform work. |
| Collaborative Picker–Robot Order Batching, Sequencing, and Routing | Publication accepted Sep 2022 | Collaborators not summarized | Not stated | Human–robot/warehouse project; link to 2025 work if part of the same program. |
| Adolescent Cardiovascular Risk and Explainable ML | Research page; publication accepted Dec 2022 | MU cardiologist and publication coauthors mentioned | Not stated | Preventive-health Project; confirm current state, data, tool development, and outcomes. |
| Healthcare Operations Management and Engineering Analytics Consortium | Described on research page | Sharan Srinivas and Suchithra Rajendran | Funding stated but sponsor/details absent | Project/initiative only if still active; otherwise archive as a past initiative. |
| MU Emergency Department Process Reengineering | Publication accepted Aug 2020; university service description | Operations team led by Sharan Srinivas | Not stated | Applied healthcare Project/case study with measurable outcomes if available. |
| MU Campus Dining Six Sigma/Simulation Improvement | Service description; 2020 publication | Graduate student group advised by Sharan Srinivas | Not stated | Applied service-systems Project/case study if outcomes and client permission permit. |
| Outpatient Appointment System Design | 2018–2020 selected publications | Regional outpatient clinics and A. R. Ravindran referenced | Not stated | Consolidated healthcare Project or completed research program. |
| Platelet Inventory Management | 2020 selected publication | Suchithra Rajendran | Not stated | Publication-linked healthcare project. |
| Boeing-sponsored project | Grant news Sep 2021 | Co-I Sharan Srinivas; PI Noble | Boeing | Insufficient detail: obtain title, dates, scope, amount/public-safe outcomes before creating a Project. |
| MDHEWD-sponsored project | Grant news Aug 2021 | PI Sharan Srinivas; Co-Is Seo, Scott, Matisziw | Missouri Department of Higher Education and Workforce Development | Insufficient detail: obtain title, dates, award record, scope, and outcomes. |
| Roche Molecular Systems project | Grant news Jul 2020 | Sharan Srinivas with Richard Hammer and Suchithra Rajendran | Roche Molecular Systems | Insufficient detail: obtain title, role, dates, scope, and public-safe outcomes. |

The About page also names FHWA, EDA, Schneider Electric, Rebundle, and Trinity Products as sponsors, but no associated project titles or dates are present. These are content leads, not publishable project records yet.

## Publications currently represented

This is a reconciliation list, not a complete bibliography. Final metadata should come from an authoritative CV/BibTeX/ORCID export.

1. *Collaborative Human–Robot Teaming for Dynamic Order Picking: Interventionist Strategies for Improving Warehouse Intralogistics Operations* (2025 acceptance notice).
2. *Order Acceptance and Scheduling on Non-Identical Parallel Machines with Dependent Setup Times: New Mixed Integer Programming Formulations* (2025 acceptance notice).
3. *A Clustering-Metaheuristic-Simulation Approach to Determine Air Taxi Operating Site Location* (2025 acceptance notice).
4. *Collaborative Truck Multi-Drone Delivery System Considering Drone Scheduling and En Route Operations* (2023 acceptance notice).
5. *Passenger Intelligence as a Competitive Opportunity: Unsupervised Text Analytics for Discovering Airline-Specific Insights from Online Reviews* (2022/2023 date discrepancy).
6. *It Is About Inclusion! Mining Online Reviews to Understand the Needs of Adaptive Clothing Customers* (2022 acceptance notice).
7. *Explainable Machine Learning Framework for Predicting Long-Term Cardiovascular Disease Risk Among Adolescents* (2022 acceptance notice).
8. *Collaborative Order Picking with Multiple Pickers and Robots: Integrated Approach for Order Batching, Sequencing and Picker-Robot Routing* (2022 acceptance notice).
9. *Autonomous Robot-Driven Deliveries: A Review of Recent Developments and Future Directions* (2022 acceptance notice).
10. *Collaborative Truck Multi-Drone Routing and Scheduling Problem: Package Delivery with Flexible Launch and Recovery Sites* (2022 acceptance notice).
11. *Predicting Demand for Air Taxi Urban Aviation Services Using Machine Learning Algorithms* (2021 acceptance notice).
12. *Air Taxi Service for Urban Mobility: A Critical Review of Recent Developments, Future Challenges, and Opportunities* (portfolio says 2019/In-Press; news gives 2020 acceptance and DOI).
13. *Modeling and Analysis of Business Process Reengineering Strategies for Improving Emergency Department Efficiency* (2020 acceptance notice).
14. *Designing Schedule Configuration of a Hybrid Appointment System for a Two-Stage Outpatient Clinic with Multiple Servers* (2020 citation).
15. *Hybrid Ordering Policies for Platelet Inventory Management Under Demand Uncertainty* (2020 citation).
16. *Optimizing Outpatient Appointment System Using Machine Learning Algorithms and Scheduling Rules: A Prescriptive Analytics Framework* (2018 citation).
17. *Longitudinal Association Between Adolescent Negative Emotions and Adulthood Cardiovascular Disease Risk: An Opportunity for Healthcare Quality Improvement* (2020 citation).
18. *Self-Reported Depressive Symptoms in Adolescence Increase the Risk for Obesity and High BP in Adulthood* (2018 citation; existing URL appears wrong).
19. *Improving Campus Dining Operations Using Capacity and Queue Management: A Simulation-Based Case Study* (2020 citation).
20. *Topic-Based Knowledge Mining of Online Student Reviews for Strategic Planning in Universities* (2019 citation).
21. *Joint Optimization of Customer Location Clustering and Drone-Based Routing for Last-Mile Deliveries* (2020 citation).
22. *A Simulation-Based Evaluation of Warehouse Check-In Strategies for Improving Inbound Logistics Operations* (2019 citation).
23. *Discovering Airline-Specific Business Intelligence From Online Passenger Reviews: An Unsupervised Text Analytics Approach* (2020 INFORMS Best Paper Finalist; determine whether this is a precursor/alternate title for item 5).
24. Edited book: *Supply Chain Management in Manufacturing and Service Systems: Advanced Analytics for Smarter Decisions*, co-edited with Suchithra Rajendran and Hans Ziegler.

## 2. Students mentioned in the real site content

This inventory includes everyone explicitly identified as a student, advisee, mentee, graduate researcher, undergraduate researcher, REU participant, or IRES participant. Publication coauthors are not classified as students unless another part of the site identifies them that way.

### Listed as current students in the 2025 source

All statuses require 2026 confirmation.

| Name | Degree/status as written | Reconciliation note |
| --- | --- | --- |
| Soham Basu | MS and PhD | Clarify whether sequential, dual program, or current PhD after MS. |
| Pyam Oveys | PhD | Verify preferred spelling and current status. |
| Paul Antonacci | PhD | Verify current status and research area. |
| Negar Jahanbakhsh Javid | PhD | Verify current status and preferred display name. |
| Mahima Naznin | PhD | Also listed as MS graduate, Spring 2025; likely continued to PhD. |
| Arash Alizadeh | PhD | Also listed as MS graduate, Fall 2024; likely continued to PhD. |
| Arghadeep Mitra | MS and PhD | Clarify program/status. |
| Celiker Busra | PhD | Confirm preferred ordering; likely “Busra Celiker.” |
| Fatemeh Pourdehghan | PhD | Also listed as MS graduate, Spring 2025; likely continued to PhD. |
| Ali Fallah | MS | Verify current/completed status. |
| Matt Floyd | MS | Also listed as an MU undergraduate mentee in 2024. |

### Graduated advisees

| Name | Degree and term as written | Recommended V2 handling |
| --- | --- | --- |
| Fatemeh Pourdehghan | MS, Spring 2025 | Alumni record; connect to current PhD record if confirmed. |
| Mahima Naznin | MS, Spring 2025 | Alumni record; connect to current PhD record if confirmed. |
| Arash Alizadeh | MS, Fall 2024 | Alumni record; connect to current PhD record if confirmed. |
| Parth Jahagirdar | MS, Summer 2024 | Alumni record. |
| Sai Kiran Singraj | MS, Summer 2024 | Alumni record. |
| Ray Wood | MS, Spring 2024 | Alumni record. |
| Shitao Yu | PhD, Summer 2023 | Alumni record. |
| Mohamed Salama | PhD, Spring 2022 | Alumni record; news also records his August 2020 comprehensive exam; coauthor on drone-routing work. |
| Haya Salah | PhD, Spring 2022 | Alumni record. |
| Dustin Smith | MS, Spring 2019 | Alumni record; also an MU undergraduate mentee in 2018 and a warehouse-logistics coauthor. |
| Alexander Jackson | MS, Spring 2019 | Alumni record. |

### Grant-supported students who were not advisees

| Name | Program/project and dates as written |
| --- | --- |
| Garrett Robison | PhD ISE; US Army project GRA, 2023–2025 |
| Michael Geisecke | PhD ISE; US Army project GRA, 2023–2025 |
| Nima Golghamat Raad | PhD ISE; AKDOT project GRA, 2023–2024 |
| Chandra Bhamidipati | MS EECS; NSF PFI project GRA, 2024 |
| Zack Murray | BS EECS; NSF REU Supplement, 2024 |
| Hemanth Sai Yeddulapalli | MS EECS; AKDOT project GRA, 2024 |
| Alicia Esquivel Morel | PhD EECS; NSF PFI project GRA, 2024 |

### MU undergraduate mentees

| Name | Program/year or status as written |
| --- | --- |
| Luke Richey | In Progress |
| Thomas Willerth | IE honors, In Progress |
| Stephen Swingle | IE honors, In Progress |
| Matt Floyd | IE, 2024 |
| Marc Rosner | Marketing, 2024 |
| Sienna Schreiber | IE, 2023 |
| Erik Starrenburg | IE, 2023 |
| Mikey Joyce | EECS, 2022 |
| Emily Pagel | IE, 2020 |
| Trenton Grimshaw | IE, 2020 |
| Grace Floyd | IE, 2020 |
| Jacob Beeth | IE, 2020 |
| John Tocco | IE, 2019 |
| Alex Stone | IE, 2019 |
| Dustin Smith | IE, 2018 |
| Joshua Zack | IE, 2018 |
| Abdulah Sibalo | Economics, 2018 |

### NSF REU participants

- **2024:** Neel Shah; Matt Lamborne; Joseph Couzens; John Maxwell; Ayhum Asfour; Emily Pham; Jakob Fick; Johann Zhang; Vishnu Arun.
- **2023:** Ben McIntire; Abdullahi Ayantayo; Dylan Nojadera; Brianna Abam; Lilyan Groat; Brian Yang; Emma Lewis; Daniel Grenier; Carson Swain; Aditya Khowal; Zachary Bazile.

### NSF IRES participants

- **2024:** Ben McIntire; Siddarth Tummala; Ryan Brophy; Abhinav Sairam; Snowbird Rubio; Faisal Shaikh; Rishi Jain.
- **2023:** Charan Govarthanaraj; Vishnu Arun; Prashish Lamsal; Nikhil Vyas.

### People-data issues to resolve

- The prose count of three PhD and two MS graduates conflicts with the named alumni list of three PhD and eight MS graduates.
- The prose count of eight current PhD and three current MS students does not cleanly match the degree labels attached to the eleven names.
- Two international co-advisees are described but not named: one PhD student from Eskisehir Technical University and one MS student from IIT Madras.
- “Current,” “In Progress,” and 2023–2025 funding labels need a single review date in the future data model.
- People profiles need research topics, start/completion years, thesis/dissertation titles, outcomes, profile URLs, preferred names/pronouns if supplied, and explicit permission for photos.

## 3. Awards, grants, professional service, and leadership

### Awards and recognitions

| Date | Item | Status/action |
| --- | --- | --- |
| Dec 2024 | Outstanding Professor in Industrial and Systems Engineering, voted by graduating seniors, Fall 2024 | Retain; verify formal title and source. |
| Nov 2024 | Outstanding ISE Faculty Award for research, teaching, and service, MU IMSE/ISE Hall of Fame | Retain; verify formal organization name. |
| Dec 2023 | Outstanding Professor in Industrial and Systems Engineering, voted by graduating seniors, Fall 2023 | Retain. |
| Mar 2023 | Outstanding Junior Excellence in Teaching Award, MU College of Engineering | Retain; source text includes a stray closing quote. |
| Oct 2022 | Outstanding IMSE Faculty Award for research, teaching, and service | Retain; reconcile “IMSE” versus later “ISE” naming. |
| Dec 2021 | Research featured among MU College of Engineering’s Top 10 Stories of 2021 | Retain as media/recognition, not an award unless officially described that way. |
| Nov 2020 | Best Paper Finalist, INFORMS Data Mining and Decision Analytics Competition | Retain with final paper title and team/authors. |
| Sep 2024 | Promotion to Associate Professor with tenure | Retain as career milestone under About/News, not Awards. |

### Grants and sponsored work

| Date | Award/project | Role | Validation needed |
| --- | --- | --- | --- |
| Jan 2025 | NSF I-Corps: Translation Potential of a Software Platform for Optimizing Collaborative Human–Robot Operations, award 2447357 | PI | Amount, dates, team, outcomes, current status. |
| Aug 2024 | NSF CyberTraining: Application-Inspired Cloud DevOps Training Using an Online Self-Service Learning Platform, award 2417826 | Co-PI; PI Prasad Calyam; Co-PI Noah Glaser | Amount, period, site/materials, outcomes. |
| Sep 2023 | DoD flow-through: Analysis Capabilities for Competition, Crisis, and Combat (AC4) | Co-PI; PI James Noble; Co-PI Suchithra Rajendran | Sponsor/pass-through institution, amount, dates, public description. |
| Sep 2023 | Alaska DOT: Intelligent Truck Transport Management Application | PI; Co-PIs Suchithra Rajendran and Prasad Calyam | Award/report URL, amount, period, deliverables. |
| Aug 2023 | NSF PFI-TT: Cloud-Based Route Management Platform for Electric Truck and Drone Operations, award 2313887 | PI; Co-PIs Suchithra Rajendran and Prasad Calyam | Amount, period, prototype/company outcomes. |
| Apr 2023 | NSF IRES: AI-Enabled Decision Analytics for Advancing Air Taxi and Drone Operations, award 2245469 | Co-PI; PI Suchithra Rajendran; Co-PIs Prasad Calyam and Derek Anderson | Period, international partner/location, cohort outcomes. |
| Feb 2023 | NSF REU: Prescriptive Analytics for AI-Enabled Operations Engineering, award 2243589 | Co-PI; PI Suchithra Rajendran; Co-PI Prasad Calyam | Period, cohorts, research products. |
| Aug 2022 | NSF I-Corps: Scalable Cloud-Based Route Optimization for Aerial and Road Logistics, award 2240977 | PI | Correct mislabeled source link, period, team, outcomes. |
| Sep 2021 | Boeing grant | Co-I; PI Noble | Full title, amount, dates, scope, collaborators. |
| Aug 2021 | Missouri Department of Higher Education and Workforce Development grant | PI; Co-Is Seo, Scott, Matisziw | Full title, amount, dates, outcomes, full collaborator names. |
| Jul 2020 | Roche Molecular Systems grant | Role not stated; with Richard Hammer and Suchithra Rajendran | Full title, role, amount, dates, public-safe outcomes. |
| Date absent | Healthcare Operations Management and Engineering Analytics Consortium funding | With Suchithra Rajendran | Sponsors, amount, dates, current status. |
| Dates/titles absent | Work sponsored by FHWA, EDA, Schneider Electric, Rebundle, and Trinity Products | PI/Co-PI aggregate claim only | Create individual records or omit sponsor logos/names from Projects until substantiated. |

### Professional leadership and editorial service

- Director, IISE Operations Research Division, 2020–2022.
- President-Elect, IISE Operations Research Division, 2022–2023.
- President, IISE Operations Research Division, 2023–2024.
- Immediate Past President, IISE Operations Research Division, 2024–2025.
- Lead Track Chair, Operations Research Track, IISE Annual Conference, 2022.
- Co-Chair and Co-organizer, Operations Research Track, IISE Annual Conference, 2021.
- Judge, IISE OR Division Undergraduate Student Paper Competition, 2020.
- Chair/organizer of sessions at INFORMS 2019, INFORMS 2017, and IISE 2017; one additional INFORMS “Healthcare Modeling” entry is incomplete.
- Editorial Board Member, Scientific Reports, appointed April 2025.
- Editorial Board Member, BMC Medical Informatics and Decision Making, appointed July 2024.
- Editorial Board Member, Transportation Research Part E, appointed February 2024.
- Topic Editor, Sustainability; start/end dates absent.
- Academic Editor, Journal of Healthcare Engineering, appointed May 2021; current status uncertain.
- Core Faculty, MU Institute of Data Science and Informatics, appointed March 2021; current status uncertain.
- Co-editor of the Springer book *Supply Chain Management in Manufacturing and Service Systems: Advanced Analytics for Smarter Decisions*.
- Ad-hoc reviewer for Artificial Intelligence, Computers & Industrial Engineering, Journal of Intelligent Manufacturing, Health Systems, Expert Systems with Applications, npj Digital Medicine, Networks and Spatial Economics, International Journal of Production Research, and Omega. The source duplicates Computers & Industrial Engineering and claims 75+ reviews.

### University and professional service

- Led an MU Emergency Department process-reengineering study.
- Advised a graduate-student Six Sigma improvement study for MU Campus Dining Services.
- UM Faculty Scholars, 2019–2020 cohort.
- College of Engineering Annual Lectureship Committee, listed as 2019–present; verify end date.
- Trulaske College of Business faculty candidate interviews, 2019–2020.
- Global Supply Chain Management Certificate development and advisory committees, 2018.
- Faculty Advisor, MU IISE Student Chapter, listed as 2021–present; verify end date.
- IMSE Faculty Search Committee, 2021 and 2022.
- Management Department faculty candidate interviews, 2020; duplicated in source.
- Course Planning Committee, listed as 2019–present; verify end date.
- Curriculum Development Committee, listed as 2017–present; verify end date.
- Marketing Analytics Committee, listed as 2017–present; verify end date.
- Marketing Department faculty candidate interviews, 2018 and 2019.
- Guest speaker in IMSE graduate seminar, 2017–2019.
- Membership in INFORMS and IISE; verify current membership only if the site will label it current.

## 4. Chronological inventory of real news

Reverse chronological, normalized from `_pages/publications.md`. The first thirteen items are duplicated on the homepage. Categories in brackets are proposed V2 metadata.

1. **Apr 2025 — [Appointment]** Appointed to the Editorial Board of Scientific Reports.
2. **Mar 2025 — [Publication]** *Collaborative Human–Robot Teaming for Dynamic Order Picking: Interventionist Strategies for Improving Warehouse Intralogistics Operations* accepted in Transportation Research Part E.
3. **Feb 2025 — [Publication]** *Order Acceptance and Scheduling on Non-Identical Parallel Machines with Dependent Setup Times: New Mixed Integer Programming Formulations* accepted in Flexible Services and Manufacturing Journal.
4. **Jan 2025 — [Publication]** *A Clustering-Metaheuristic-Simulation Approach to Determine Air Taxi Operating Site Location* accepted in Transportation Research Interdisciplinary Perspectives.
5. **Jan 2025 — [Grant]** NSF I-Corps award 2447357 for human–robot operations software translation potential.
6. **Dec 2024 — [Award]** Voted Outstanding Professor in Industrial and Systems Engineering by Fall 2024 graduating seniors.
7. **Nov 2024 — [Award]** Received the Outstanding ISE Faculty Award for research, teaching, and service.
8. **Sep 2024 — [Career]** Promoted to Associate Professor with tenure at MU.
9. **Aug 2024 — [Grant]** NSF CyberTraining award 2417826 for an application-inspired cloud DevOps training platform.
10. **Jul 2024 — [Appointment]** Appointed to the Editorial Board of BMC Medical Informatics and Decision Making.
11. **Feb 2024 — [Appointment]** Appointed to the Editorial Board of Transportation Research Part E.
12. **Dec 2023 — [Award]** Voted Outstanding Professor in Industrial and Systems Engineering by Fall 2023 graduating seniors.
13. **Sep 2023 — [Grant]** DoD flow-through award for Analysis Capabilities for Competition, Crisis, and Combat (AC4).
14. **Sep 2023 — [Grant]** Alaska DOT award for an intelligent truck transport management application.
15. **Aug 2023 — [Grant]** NSF PFI-TT award 2313887 for a cloud-based electric truck and drone route-management platform.
16. **May 2023 — [Publication]** *Collaborative Truck Multi-Drone Delivery System Considering Drone Scheduling and En Route Operations* accepted in Annals of Operations Research.
17. **Apr 2023 — [Grant/Outreach]** NSF IRES award 2245469 for international research experiences in AI-enabled air-taxi and drone decision analytics.
18. **Mar 2023 — [Award]** Received the Outstanding Junior Excellence in Teaching Award from the MU College of Engineering.
19. **Feb 2023 — [Grant/Outreach]** NSF REU award 2243589 for prescriptive analytics in AI-enabled operations engineering.
20. **Dec 2022 — [Publication]** *Passenger Intelligence as a Competitive Opportunity: Unsupervised Text Analytics for Discovering Airline-Specific Insights from Online Reviews* accepted in Annals of Operations Research. The homepage dates this item January 2023; verify the intended public date.
21. **Dec 2022 — [Publication]** *It Is About Inclusion! Mining Online Reviews to Understand the Needs of Adaptive Clothing Customers* accepted in International Journal of Consumer Studies.
22. **Dec 2022 — [Publication]** *Explainable Machine Learning Framework for Predicting Long-Term Cardiovascular Disease Risk Among Adolescents* accepted in Scientific Reports.
23. **Oct 2022 — [Award]** Received the Outstanding IMSE Faculty Award for research, teaching, and service.
24. **Sep 2022 — [Publication]** *Collaborative Order Picking with Multiple Pickers and Robots: Integrated Approach for Order Batching, Sequencing and Picker-Robot Routing* accepted in International Journal of Production Economics.
25. **Aug 2022 — [Grant]** NSF I-Corps award 2240977 for a scalable cloud-based route-optimization platform for aerial and road logistics.
26. **Jul 2022 — [Publication]** *Autonomous Robot-Driven Deliveries: A Review of Recent Developments and Future Directions* accepted in Transportation Research Part E.
27. **Jun 2022 — [Publication]** *Collaborative Truck Multi-Drone Routing and Scheduling Problem: Package Delivery with Flexible Launch and Recovery Sites* accepted in Transportation Research Part E.
28. **Dec 2021 — [Recognition]** Research featured among the MU College of Engineering’s Top 10 Stories of 2021.
29. **Sep 2021 — [Grant]** Boeing grant awarded; Sharan Srinivas listed as Co-I and Noble as PI.
30. **Aug 2021 — [Grant]** Missouri Department of Higher Education and Workforce Development grant awarded; Sharan Srinivas listed as PI.
31. **May 2021 — [Appointment]** Appointed Academic Editor for the Journal of Healthcare Engineering.
32. **Mar 2021 — [Appointment]** Appointed Core Faculty at the MU Institute of Data Science and Informatics.
33. **Feb 2021 — [Publication]** *Predicting Demand for Air Taxi Urban Aviation Services Using Machine Learning Algorithms* accepted in Journal of Air Transport Management.
34. **Nov 2020 — [Recognition]** Best Paper Finalist in the INFORMS Data Mining and Decision Analytics Competition for airline-review text analytics research.
35. **Sep 2020 — [Publication]** *Air Taxi Service for Urban Mobility: A Critical Review of Recent Developments, Future Challenges, and Opportunities* accepted in Transportation Research Part E.
36. **Aug 2020 — [Publication]** *Modeling and Analysis of Business Process Reengineering Strategies for Improving Emergency Department Efficiency* accepted in Simulation.
37. **Aug 2020 — [Student milestone]** PhD student Mohamed Salama passed his comprehensive exam.
38. **Jul 2020 — [Grant]** Roche Molecular Systems grant awarded with Richard Hammer and Suchithra Rajendran.
39. **May 2020 — [Leadership]** Elected Director of the IISE Operations Research Division.

## 5. Real teaching and course inventory

### Teaching philosophy

The existing philosophy emphasizes active/problem-based learning, inclusive teaching, curiosity, hands-on technology, current research methods, realistic applications, teamwork, peer learning, and preparation for lifelong learning. Retain these principles but replace the long single paragraph with concise themes and concrete examples.

### Courses

| Department | Course | Content represented | Terms listed | Software listed | Assessment and action |
| --- | --- | --- | --- | --- | --- |
| Marketing / Business | MRKTNG 4910/7910 — Data Analytics and Machine Learning for Business | Supervised/unsupervised learning, decision trees, random forests, clustering, association rules, data preparation, interpretation, and applications in healthcare, retail, streaming, and finance. | Spring 2018, Spring 2019, Spring 2020, Fall 2020 | Excel, Weka | Historical and likely outdated. Verify course number/title, whether still taught, audience, current tools, and recent semesters. Rewrite grammar. |
| Marketing / Business | MRKTNG 8810 — Python for Marketing Analytics | Python-based cleaning, preprocessing, visualization, predictive modeling, association analysis, clustering, and text mining. | Spring 2020, Spring 2021 | Python, Jupyter Notebook | Retain as prior teaching; verify current title/number and whether newer offerings exist. |
| Accounting/Marketing / Business | ACCTCY 8401 / MRKTNG 8001 — Analytics for Supply Chain Management | Supply-chain design, control, operations, OR models, cases, and management games. | Fall 2020 | Excel | Retain as prior teaching; verify cross-listing and current catalog title. |
| Industrial and Manufacturing Systems Engineering | IMSE 4410/7410 — Data Engineering and Predictive Modeling | Data extraction, cleaning, wrangling/feature engineering, visualization, supervised/unsupervised ML, and Apriori/association analysis. | Fall 2018, Fall 2019, Fall 2020 | Excel, R | Retain as prior teaching; verify department rename, course number/title, current software, and later offerings. |
| Industrial and Manufacturing Systems Engineering | IMSE 4370/7370 — Service Systems Engineering and Management | Quantitative service-system design and management with aircraft routing, patient scheduling, retail distribution, hotel reservations, and vendor selection. | Fall 2017, Spring 2020 | Excel, Python | Retain as prior teaching; verify current course status and later offerings. |
| Industrial and Manufacturing Systems Engineering | IMSE 4280/7280 — Systems Simulation | Discrete-event simulation, input modeling, random-number generation, experimentation, statistical testing, alternative comparison, and output analysis. | Fall 2018, Fall 2019 | Excel, Simio, Minitab, IBM SPSS | Retain as prior teaching; verify current course status, later offerings, and current toolset. |

### Advising and outreach content

- Advising philosophy/impact belongs in Teaching & Outreach, with the full current/alumni roster in People.
- NSF REU 2023/2024 and NSF IRES 2023/2024 should become structured program/cohort pages or sections with participants, research topics, mentors, partner institutions, outcomes, presentations/publications, and photos.
- The NSF CyberTraining project should appear in both Projects and Teaching & Outreach.
- MU IISE Student Chapter advising, undergraduate honors mentoring, graduate-seminar speaking, and student competition judging are useful outreach/service items after dates are verified.
- The existing claim that mentees joined Boeing, Honeywell, Rockwell Automation, Lockheed Martin, Edward Elmhurst Health, and Lochmueller Group is useful impact evidence but should be connected to verified alumni records and corrected organization names.

## 6. Content gaps for V2

### Critical before launch

1. **Current appointment data:** Confirm 2026 title, tenure status, both appointments, college/department names, Director for Graduate Studies role, office/location, and preferred contact details.
2. **Authoritative CV:** Obtain a current PDF, stable filename/URL, revision date, and permission to host it directly.
3. **Complete publication dataset:** Import all journal articles, conference papers/abstracts, book chapters, edited book, patents, and accepted/in-press work with DOI, year, authors, venue, type, and selected/featured flags.
4. **Current people roster:** Confirm every current student, degree, research topic, role, and status; reconcile alumni and advisee counts; identify the two unnamed international co-advisees if appropriate.
5. **Project records:** For each current/recent project, gather title, short summary, sponsor, award number, amount/publication policy, role, collaborators, dates, status, students, outcomes, related publications, software/data, and media.
6. **Current news:** Add all events after April 2025 and decide the canonical date/category model.
7. **Research strategy:** Decide which areas are primary in 2026—especially whether human–robot collaboration and manufacturing scheduling should join or replace any of the four legacy portfolio areas.
8. **URL migration map:** Decide exact destinations for `/portfolio/portfolio-0/` through `portfolio-4`, `/markdown/`, `/publications/`, `/cv/`, and historical collection URLs before implementation.

### Important content improvements

9. **Short and long biography:** Produce a 50-word Home bio, 150–250-word About bio, and optionally a formal third-person bio.
10. **Verified impact metrics:** Update funding, publications, citations, students graduated, patents, and other metrics; record an “as of” date.
11. **Awards and editorial chronology:** Confirm formal names, dates, active/end dates, and official source links.
12. **Teaching updates:** Add courses taught after Spring 2021, current syllabi/course links if public, teaching innovations, evaluations/awards where appropriate, and current software.
13. **Student outcomes:** Add dissertation/thesis titles, placements, awards, and profile links for alumni, subject to consent.
14. **Project outcomes:** Add measurable impacts, prototypes, reports, datasets, code, policy/practice changes, technology translation, and press coverage.
15. **Publications curation:** Identify featured publications and map each to research areas/projects; resolve duplicate/alternate titles and the 2022/2023 passenger-intelligence date discrepancy.
16. **Service chronology:** Replace stale “Present” ranges and repair the incomplete “Healthcare Modeling” session entry.
17. **Sponsor coverage:** Identify the missing FHWA, EDA, Schneider Electric, Rebundle, and Trinity Products projects or remove unsupported sponsor references from public summaries.

### Media and presentation gaps

18. Current professional headshot alternatives and accessible alt text.
19. Project photography, diagrams, screenshots, fieldwork, laboratory/warehouse/transportation imagery, and graphical abstracts with documented usage rights.
20. Student/team portraits or cohort photos with explicit permission.
21. Award, teaching, and outreach photos.
22. A consistent visual treatment for research areas; determine whether the existing four research graphics are owned/licensed and high enough quality.
23. A site logo/wordmark and complete favicon/social-sharing image set.

### Data and editorial gaps

24. A structured source of truth for people, projects, publications, news, awards, courses, and roles so counts and excerpts are generated rather than duplicated.
25. Consistent date precision: exact day where known, otherwise month/year or year without inventing a day.
26. Consistent terminology for ISE versus IMSE, adviser/advisor, degree abbreviations, PI/Co-PI/Co-I, and department names.
27. Link policy favoring DOI, official award, and institutional pages over temporary `casa_token`, tracking-parameter, or SharePoint-token URLs.
28. Accessibility metadata: alt text, link labels, heading hierarchy, transcripts/captions for future media, and accessible publication/CV files.
29. Privacy/consent rules for student names, photos, status, destinations, and contact/profile links.
30. Editorial ownership and update cadence for News, People, Projects, Publications, and CV.

## Link-validation inventory

Prioritize these before content import:

- MU Industrial & Systems Engineering and Marketing department URLs.
- Current official faculty/profile page and MU Institute of Data Science and Informatics profile.
- SharePoint CV URL and public permissions.
- Google Scholar, ORCID, GitHub, email, and LinkedIn; the current LinkedIn template/value combination is malformed.
- NSF awards 2447357, 2417826, 2313887, 2245469, 2243589, and 2240977.
- AKDOT, DoD, Boeing, MDHEWD, Roche, FHWA, EDA, Schneider Electric, Rebundle, and Trinity project/award pages where available.
- Scientific Reports, BMC Medical Informatics and Decision Making, Transportation Research Part E, Sustainability, and Journal of Healthcare Engineering role pages.
- IISE OR Division and INFORMS award/competition pages.
- MU award and Top 10 Stories pages.
- Consortium for Healthcare Operations Management and Engineering Analytics page.
- Every publication DOI/publisher page. In particular:
  - the second preventive-health citation currently points to the first citation’s Emerald URL;
  - several ScienceDirect URLs contain temporary `casa_token` parameters;
  - the air-taxi review is still labeled “In-Press” in the portfolio;
  - the 2022 NSF I-Corps link is mislabeled as an REU public abstract;
  - the Journal of Healthcare Engineering URL contains advertising/tracking parameters.
- Weka and any future course-resource links.
- Alumni employer names and destinations before presenting them as outcome metrics.

## Explicitly excluded as non-personal demo/template content

Do not migrate these as real content:

- `_posts/*` sample blog posts, including the 2199 future post.
- `_publications/*` “Paper Title Number” records and `files/paper1.pdf` through `paper3.pdf`.
- `_teaching/*` “Teaching experience” samples.
- `_talks/2012-03-01-talk-1.md` and `_talks/2013-03-01-tutorial-1.md` testing examples.
- `_talks/2014-02-01-talk-2.md`, which contains only a title and no corroborating venue/details; treat it as uncertain and do not migrate unless independently confirmed.
- `_talks/2014-03-01-talk-3.md` as a talk record; its body is real research-overview prose duplicated elsewhere, but the talk metadata is blank.
- `_data/authors.yml` fake author profiles and `_data/comments/*` sample comments.
- Template/archive/non-menu/terms pages unless a new V2 requirement independently justifies them.
- Demo images, sample alignment images, formatting screenshots, generic sample logos/photos, talk-map output, and generator notebooks/TSVs/scripts.

## Migration guardrails

- Keep `master` and the current GitHub Pages source untouched until V2 passes content review, URL testing, accessibility checks, and a production-like preview.
- Build V2 on `website-v2`; use a separate preview deployment or local environment rather than changing the current Pages source.
- Preserve original source content during migration. Mark migrated records and redirects before any later cleanup.
- Make News, People, Projects, Publications, and CV structured single sources of truth; Home and Research should reference/query those records rather than copy them.
- Do not publish uncertain “current” claims, student statuses, sponsor relationships, award amounts, project outcomes, or images until verified.
# Source-authority update — September 24, 2026

The current CV and [revised V2 content architecture](v2-content-architecture-2026.md) supersede this legacy inventory for personal facts, appointments, publications, projects and rosters. Retain this inventory for legacy-content context, assets and URL continuity. Structured CV staging is in [content-2026](content-2026/README.md).
