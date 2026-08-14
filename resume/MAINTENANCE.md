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
