import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Jeongwon Han · Engineering Notes',
  description: 'Backend / Platform Engineer — Java, Spring, AWS, Commerce, Batch and system design notes.',
  lang: 'ko-KR',
  base: '/engineering-notes/',
  cleanUrls: true,
  rewrites: {
    'backend/README.md': 'backend/index.md',
    'database/README.md': 'database/index.md',
    'database/temporal-table/README.md': 'database/temporal-table/index.md',
    'commerce/README.md': 'commerce/index.md',
    'architecture/README.md': 'architecture/index.md',
    'infrastructure/README.md': 'infrastructure/index.md',
    'case-studies/README.md': 'case-studies/index.md',
    'troubleshooting/README.md': 'troubleshooting/index.md'
  },
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#111827' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js' }],
    ['script', {}, `(function () {
      let scheduled = false;
      function renderMermaid() {
        scheduled = false;
        if (!window.mermaid) return;
        const blocks = document.querySelectorAll('.language-mermaid');
        if (!blocks.length) return;
        blocks.forEach((block) => {
          if (block.dataset.mermaidConverted === 'true') return;
          const code = block.querySelector('code');
          if (!code) return;
          const diagram = document.createElement('div');
          diagram.className = 'mermaid';
          diagram.textContent = code.textContent || '';
          block.dataset.mermaidConverted = 'true';
          block.replaceWith(diagram);
        });
        window.mermaid.initialize({ startOnLoad: false, theme: 'neutral', securityLevel: 'strict' });
        window.mermaid.run({ querySelector: '.mermaid:not([data-processed])' }).catch(console.error);
      }
      function scheduleRender() {
        if (scheduled) return;
        scheduled = true;
        setTimeout(renderMermaid, 50);
      }
      window.addEventListener('DOMContentLoaded', function () {
        scheduleRender();
        new MutationObserver(scheduleRender).observe(document.body, { childList: true, subtree: true });
      });
      window.addEventListener('load', scheduleRender);
    })();`]
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Resume', link: '/resume/' },
      { text: 'Engineering Notes', link: '/getting-started/about-this-site' },
      { text: 'Case Studies', link: '/case-studies/' },
      { text: 'GitHub', link: 'https://github.com/dev-wonny' }
    ],
    sidebar: {
      '/backend/': [{ text: 'Backend', link: '/backend/' }],
      '/database/': [{ text: 'Database', link: '/database/' }],
      '/commerce/': [{ text: 'Commerce', link: '/commerce/' }],
      '/architecture/': [{ text: 'Architecture', link: '/architecture/' }],
      '/infrastructure/': [{ text: 'Infrastructure', link: '/infrastructure/' }],
      '/case-studies/': [{ text: 'Case Studies', link: '/case-studies/' }],
      '/troubleshooting/': [{ text: 'Troubleshooting', link: '/troubleshooting/' }]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/dev-wonny' }],
    search: { provider: 'local' },
    footer: {
      message: 'Built from engineering experience and continuously refined.',
      copyright: '© Jeongwon Han'
    }
  }
})
