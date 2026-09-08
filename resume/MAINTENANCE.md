# Resume maintenance

- Main resume source: `public/resume/index.html`.
- Static sections: `public/resume/sections/*.html`.
- Build must copy `public/` into `.vitepress/dist/` and verify `resume/index.html` exists.
- **Mobile rendering rule:** `public/resume/index.html` may load Experience with one simple `fetch('sections/career.html')` and Personal Project with one simple `fetch('sections/personal.html')` only.
- **Do not use `Promise.all`, `<template>`, `template.content`, `outerHTML`, runtime company replacement, or multi-file DOM composition for Experience.** These previously caused iOS/Kakao WebView to drop the entire Experience section.
- `career.html` is the single rendered source for all company history. When editing company content, update `career.html` rather than rebuilding companies at runtime in `index.html`.
- Do not replace full company history with mobile-only summaries.
- Preserve company URL, employment period, project period, subprojects, metrics, and tech stack unless explicitly asked to remove them.
- When Experience fails on mobile, check `resume/sections/career.html` deployment and its relative path first; do not delete or shorten career content as a workaround.
- Verify Experience, company links, DoubleDown subprojects, and Personal Project on mobile after every resume change.
- Resume navigation should point to `/resume/index.html`; `/resume/` must also resolve to the same static index.
- In case-study pages, use Mermaid diagrams instead of duplicate ASCII/text flow diagrams.
- Do not expose implementation notes such as fallback-rendering explanations to readers.
- Keep proposal vs implemented architecture clearly separated.
- Commerce terminology: Weed = customer-facing Dolfarmer shopping SaaS; 발주모아 = ordering/delivery/settlement SaaS; Butter = external implementation vendor.

## English resume: confirmed corrections and publication checks

- English source: `resume/english.md`; output: `.vitepress/dist/resume/english.html`; URL: `/engineering-notes/resume/english`.
- Keep English experience and education in the build-rendered Markdown page. Do not add runtime section fetching, DOM replacement, or a conflicting `public/resume/english` page.
- User-confirmed periods override older drafts: Batch begins **Aug 2026**, commerce migration criteria work was **Jul 2026**, image work was **Jul 2026**, and event-platform development was **Mar–Apr 2026**. Batch stays first.
- Commerce ownership is analysis, mapping/validation criteria, and handover. Migration execution is handled by other engineers. Do not turn this into an ongoing, personally executed migration.
- Batch validation is ongoing across the job portfolio; do not imply that all 40+ jobs are complete or already in production.
- Image-backup/validation scripts are genuine work. Lambda was discussed as an option; neither implementation nor final adoption/rejection is confirmed by that discussion alone.
- Do not restore an independently owned AWS infrastructure / CI/CD design project. Deployment participation and troubleshooting may be described in the actual service context.
- Preserve DoubleDown game API names (Wonder Card, Dice Master, Super High Limit Game), membership-tier work, and dated deeplink, inbox-advertising, and email-automation projects.
- Education: Hansung University; Public Administration degree; Multimedia Engineering minor; graduated 2016; GPA 3.63/4.0. Add only confirmed coursework: Data Structures, Operating Systems, C Programming. Do not rename the minor to Computer Science or claim degree equivalence.
- Keep company links, the Future Platform Notion reference, and Coopang wiki/issue links. Do not replace the current profile photo while changing text or project images.
- English evidence images: `event-verified.webp` and `msa.webp`. The old `event.webp` decodes but has visible corruption; do not reuse it. The verified event asset was re-encoded from the original event PNG embedded in the user-supplied Korean resume, without changing the screen content.
- Use static image URLs with product-context / contribution captions. A screenshot does not prove traffic metrics or UI ownership; the Coopang architecture is a personal learning project, not production evidence.
- `npm run docs:build` runs `scripts/check-english-resume.mjs`, checking compiled HTML, required company/project content, confirmed dates, coursework, links, and verified asset hashes. Update checks only for intentional, user-confirmed content or visually verified image changes.
- After deployment, inspect the Pages artifact and verify the English page at mobile width with JavaScript disabled as well as enabled. Do not equate a source commit with confirmed live-page rendering.
