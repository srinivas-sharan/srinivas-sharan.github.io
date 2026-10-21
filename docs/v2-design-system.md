# V2 design system and experience specification

Content update (September 24, 2026): [CV-based content architecture](v2-content-architecture-2026.md) supersedes this document's group-first positioning, navigation labels and homepage content plan. Keep the visual tokens and component foundation below; the site is a personal academic website.

Status: implementation baseline for the `website-v2` branch. This document preceded page construction and defines the shared visual and interaction rules for the Astro build.

## 1. Proposed design system

### Design idea

The V2 site should feel like a contemporary research group rather than an online résumé: editorial typography, generous white space, strong evidence, human-centered research stories, and a restrained University of Missouri gold signal. The interface should visually prioritize current research, funded projects, students, and outcomes.

The signature visual motif is a thin gold research “trace”: short horizontal rules, small square markers, and subtle grid lines that suggest routes, systems, and connected decisions without becoming decorative illustration. Cards use photography or real research graphics where available; no generated or generic stock imagery is used.

### Core principles

1. **Research first:** Lead with the questions, systems, and outcomes—not a biography sidebar.
2. **Evidence over decoration:** Use verified metrics, named programs, publications, and people. Unknown content is visibly labeled as pending rather than invented.
3. **Editorial hierarchy:** Large display type, compact metadata, short readable paragraphs, and clear section rhythm.
4. **MU connection, restrained:** Gold is an accent for rules, buttons, labels, and focus states; it is not a full-page background.
5. **Human and accessible:** Real portraits and project imagery, strong contrast, keyboard-visible navigation, generous targets, semantic structure, and reduced-motion support.
6. **Composable content:** People, projects, publications, news, and research areas are reusable records rather than duplicated page prose.

### Surface and shape language

- Primary surface: pure white.
- Secondary surface: warm off-white for sectional contrast.
- Dark feature surface: charcoal, used sparingly for one high-impact band and footer.
- Borders: 1px neutral-gray rules; 2px gold rules for emphasis.
- Corners: 2px for buttons and content cards; avoid rounded “app dashboard” styling.
- Shadows: none by default; a very soft lift only on interactive image cards.
- Image treatment: 4:3 or 16:10 editorial crops; consistent object positioning; optional subtle grayscale-to-color hover only where motion preferences allow.
- Iconography: minimal; prefer text labels and simple CSS arrows over an icon library.

### Interaction language

- Links use an underline or directional arrow; hover should never be the only cue.
- Cards translate upward by 2–3px and sharpen their border on hover/focus.
- Gold underline/reveal transitions use 180–240ms timing.
- Focus rings are 3px gold with a dark offset for visibility on white and dark surfaces.
- `prefers-reduced-motion: reduce` removes transforms and nonessential transitions.

## 2. Typography scale

Font strategy: use a high-quality system sans stack to avoid an external font dependency. Display and body type share the same family; weight, tracking, measure, and scale create hierarchy.

Primary stack:

```css
font-family: "Helvetica Neue", "Inter", "Segoe UI", Arial, sans-serif;
```

| Token | Fluid size | Line height | Weight/tracking | Use |
| --- | --- | --- | --- | --- |
| `display-xl` | `clamp(3.35rem, 8vw, 7.75rem)` | 0.92 | 650 / -0.055em | Homepage thesis statement |
| `display-lg` | `clamp(2.75rem, 6vw, 5.75rem)` | 0.96 | 650 / -0.045em | Interior-page title |
| `heading-1` | `clamp(2.2rem, 4vw, 4rem)` | 1.02 | 650 / -0.04em | Major section heading |
| `heading-2` | `clamp(1.75rem, 2.8vw, 2.75rem)` | 1.08 | 620 / -0.03em | Card group or subsection |
| `heading-3` | `clamp(1.25rem, 1.8vw, 1.65rem)` | 1.15 | 620 / -0.02em | Card title |
| `lead` | `clamp(1.15rem, 1.6vw, 1.45rem)` | 1.5 | 430 / -0.01em | Introductory copy |
| `body-lg` | `1.125rem` | 1.65 | 400 | Primary narrative |
| `body` | `1rem` | 1.65 | 400 | General content |
| `small` | `0.875rem` | 1.5 | 500 | Metadata and supporting text |
| `label` | `0.75rem` | 1.2 | 700 / 0.12em uppercase | Eyebrows, categories, dates |

Readable text measure is 64–72 characters. Dense metadata can use wider measures; major narrative text should not span the full page width.

## 3. Color palette

| Token | Hex | Purpose | Contrast note |
| --- | --- | --- | --- |
| `ink-950` | `#10110F` | Primary text, dark feature surface | White text passes AAA |
| `ink-800` | `#2A2B27` | Secondary text | Strong contrast on white |
| `ink-600` | `#555750` | Muted text | Use at 16px or larger |
| `paper` | `#FFFFFF` | Main background | Primary surface |
| `paper-warm` | `#F7F6F1` | Alternate section background | Subtle section separation |
| `line` | `#D9D9D1` | Rules and borders | Never used as text |
| `gold-500` | `#F1B82D` | Primary MU gold accent | Use behind dark text, not white |
| `gold-600` | `#A87300` | Text links and small accent text | Stronger small-text contrast on white |
| `gold-100` | `#FFF4D2` | Highlight wash and tags | Pair with `ink-950` |
| `success` | `#1F6A4A` | Optional status indicator | Reserved for verified status only |

Gold usage target: less than 10% of any viewport. Primary buttons use `ink-950` with white text and a gold edge/hover state; secondary buttons are white with a charcoal border.

## 4. Page-width and spacing system

### Widths

| Token | Value | Use |
| --- | --- | --- |
| `page-max` | `90rem / 1440px` | Overall shell and wide media |
| `content-max` | `77.5rem / 1240px` | Navigation, grids, standard sections |
| `reading-max` | `45rem / 720px` | Long-form text |
| `narrow-max` | `36rem / 576px` | Intros and compact calls to action |

Horizontal page padding:

- Mobile: `1.25rem`
- Small tablet: `2rem`
- Desktop: `clamp(2rem, 5vw, 5rem)`

### Spacing tokens

Base unit: 4px.

| Token | Value | Common use |
| --- | --- | --- |
| `space-1` | 4px | Tight inline gap |
| `space-2` | 8px | Label/icon gap |
| `space-3` | 12px | Compact metadata |
| `space-4` | 16px | Base component padding |
| `space-6` | 24px | Card gap/mobile section rhythm |
| `space-8` | 32px | Card padding/tablet rhythm |
| `space-12` | 48px | Major internal component spacing |
| `space-16` | 64px | Small section padding |
| `space-24` | 96px | Standard desktop section padding |
| `space-32` | 128px | Hero and major editorial breaks |

Section block padding is `clamp(4.5rem, 9vw, 8rem)`. Grid gaps are `clamp(1.25rem, 3vw, 2.5rem)`.

### Grid

- 12-column desktop grid.
- 8-column tablet grid.
- 4-column mobile grid.
- Research-area cards: asymmetric 7/5 or 8/4 spans on desktop, stacked on mobile.
- Project cards: two columns on desktop, one column below 760px.
- People cards: four columns on wide desktop, two on tablet, one or two on mobile depending on available imagery.

## 5. Reusable component list

### Global

- `SiteHeader`: wordmark, primary navigation, Research dropdown, CV button, mobile menu control.
- `MobileNavigation`: full-width drawer below the header, nested Research links, focus-safe behavior.
- `SiteFooter`: short research statement, contact/profile links, secondary About/CV links, copyright.
- `PageShell`: shared metadata, skip link, header/footer, and page transitions.
- `Container`: width and horizontal padding primitive.
- `SectionHeading`: eyebrow, title, optional intro and action link.
- `ButtonLink`: primary, secondary, and text-arrow variants.
- `GoldRule`: small branded section marker.
- `PlaceholderPanel`: clearly identifies missing approved content or imagery without fabricating it.

### Content

- `Hero`: editorial headline, role/affiliations, CTA pair, portrait or real project media.
- `ResearchAreaCard`: area label, title, summary, methods/applications, image, destination link.
- `ProjectCard`: project title, sponsor, role, dates/status, summary, related topics, optional image.
- `MetricBand`: verified impact statistics with an “as of” date; hidden or placeholder until verified.
- `PersonCard`: name, degree/role, status, research interests, optional portrait/profile link.
- `PublicationItem`: title, authors, venue/year/status, DOI link, area tags.
- `NewsCard`: date, category, title, short summary, related link.
- `CourseCard`: course code/title, audience, topics, terms, tools, current/historical status.
- `Timeline`: leadership and service roles with dates and organization.
- `ProfileLinkList`: Scholar, ORCID, GitHub, LinkedIn, and email with descriptive labels.
- `Breadcrumbs`: interior research subpages only; not shown on Home.

### Content/data collections

- Site identity and navigation
- Research areas
- Projects
- People and cohorts
- Publications
- Courses
- Leadership/service records
- News

## 6. Homepage wireframe

```text
┌──────────────────────────────────────────────────────────────────────┐
│ Skip link                                                           │
│ SHARAN SRINIVAS      Home Research⌄ People Teaching… Service News CV │
├──────────────────────────────────────────────────────────────────────┤
│ EYEBROW: OPERATIONS RESEARCH FOR SOCIETAL SYSTEMS                    │
│                                                                      │
│ Better decisions for                        ┌──────────────────────┐ │
│ complex human, health,                      │ Existing professional│ │
│ and mobility systems.                      │ portrait             │ │
│                                             │ + gold trace motif   │ │
│ Short verified role/affiliation             └──────────────────────┘ │
│ [Explore research] [Meet the group]                                  │
├──────────────────────────────────────────────────────────────────────┤
│ RESEARCH AREAS                                                       │
│ Intro + link to all                                                  │
│ ┌──────────────────────────┐ ┌─────────────────────────────────────┐ │
│ │ Healthcare operations    │ │ Transportation & advanced mobility │ │
│ │ real research graphic    │ │ real research graphic               │ │
│ └──────────────────────────┘ └─────────────────────────────────────┘ │
│ ┌─────────────────────────────────────┐ ┌──────────────────────────┐ │
│ │ Human–robot operations              │ │ Preventive health        │ │
│ │ text-led until imagery is supplied  │ │ real research graphic    │ │
│ └─────────────────────────────────────┘ └──────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────┤
│ FEATURED PROJECTS — two large evidence-led cards                     │
│ [Human–robot I-Corps]             [Electric truck + drone platform] │
├──────────────────────────────────────────────────────────────────────┤
│ DARK METHODS BAND                                                    │
│ “Model. Optimize. Translate.” + shared methodological foundation     │
├──────────────────────────────────────────────────────────────────────┤
│ PEOPLE + EDUCATION                                                    │
│ Group statement / selected student names / REU–IRES program links    │
├──────────────────────────────────────────────────────────────────────┤
│ LATEST NEWS — 3 recent verified items                                │
├──────────────────────────────────────────────────────────────────────┤
│ Short About statement + education/profile links + prominent CV CTA   │
├──────────────────────────────────────────────────────────────────────┤
│ Footer: contact, Scholar, ORCID, GitHub, LinkedIn, About, CV          │
└──────────────────────────────────────────────────────────────────────┘
```

Homepage content rules:

- The first viewport contains the research thesis, role/affiliation, portrait, and two clear actions.
- Home may show only a short selection from Research, Projects, People, and News; it must not maintain duplicate copy.
- Metrics remain omitted or visibly pending until 2026 values are verified.
- Cards use existing research graphics where relevant; missing project imagery uses a typographic/gold-grid treatment rather than stock or generated imagery.

## 7. Desktop and mobile navigation behavior

### Desktop, 960px and above

- Sticky white header with a thin lower rule; height approximately 80px.
- Left: text wordmark “Sharan Srinivas” with a small “Industrial & Systems Engineering” descriptor on very wide screens.
- Center/right: Home, Research, People, Teaching & Education, Leadership & Service, News.
- Research opens an accessible dropdown on click and keyboard activation, containing Research Overview, Research Areas, Projects, and Publications.
- Current section uses a 2px gold underline plus `aria-current="page"`.
- Far right: high-contrast `CV` button. It remains visible at all desktop widths.
- Escape closes the Research dropdown; focus is never trapped in the desktop menu.

### Mobile, below 960px

- Header height approximately 68px with wordmark left and a “Menu” text button plus simple CSS line marker right.
- Activating Menu reveals a full-width panel immediately below the sticky header; the page is not covered by an opaque full-screen modal.
- Primary items are 22–26px high-hierarchy links with at least 48px touch rows.
- Research is expanded by default inside the open mobile panel, showing indented links for Overview, Areas, Projects, and Publications.
- CV is a full-width primary button at the end of the panel.
- The menu closes on Escape and after selecting a link. The button exposes `aria-expanded` and `aria-controls`.
- JavaScript is limited to menu/dropdown state. Navigation remains visible and usable if JavaScript fails through a `<details>`-based structure where practical.

### Responsive content behavior

- Hero becomes a single column below 760px: copy first, portrait second.
- Display type scales fluidly and never forces horizontal scrolling.
- All two-column editorial compositions stack with content order preserved.
- Card hover motion is removed on touch/coarse-pointer devices.
- Tables become stacked definition-style records or horizontally scroll only when the content is genuinely tabular.
- No interaction relies on hover; all functionality is keyboard and touch accessible.

## Content integrity rules

- Use only facts present in the migration inventory unless the user supplies or verifies new material.
- Mark time-sensitive records as “Status to be confirmed” when necessary.
- Use designed non-pictorial placeholders for missing project/team photography.
- Do not invent biographies, research outcomes, dates, funding amounts, student topics, publication metadata, or affiliations.
- Keep legacy URLs in a redirect map separate from visible V2 content.
