# Resume maintenance

- Main resume source: `public/resume/index.html`.
- Static sections: `public/resume/sections/*.html`.
- Build must copy `public/` into `.vitepress/dist/` and verify `resume/index.html` exists.
- Do not replace full company history with mobile-only summaries.
- Preserve company URL, employment period, project period, subprojects, metrics, and tech stack unless explicitly asked to remove them.
- When Experience fails on mobile, check deployed section files and paths first; do not delete content to work around rendering.
- Verify Experience, company links, DoubleDown subprojects, and Personal Project on mobile after every resume change.
- Resume navigation should point to `/resume/index.html`; `/resume/` must also resolve to the same static index.
- In case-study pages, use Mermaid diagrams instead of duplicate ASCII/text flow diagrams.
- Do not expose implementation notes such as fallback-rendering explanations to readers.
- Keep proposal vs implemented architecture clearly separated.
- Commerce terminology: Weed = customer-facing Dolfarmer shopping SaaS; 발주모아 = ordering/delivery/settlement SaaS; Butter = external implementation vendor.
