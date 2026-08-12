import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './custom.css'
import './portfolio.css'
import './resume.css'

import DeveloperHome from './components/portfolio/DeveloperHome.vue'
import ProductHome from './components/portfolio/ProductHome.vue'
import CommerceCase from './components/portfolio/CommerceCase.vue'
import ResumeHome from './components/portfolio/ResumeHome.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DeveloperHome', DeveloperHome)
    app.component('ProductHome', ProductHome)
    app.component('CommerceCase', CommerceCase)
    app.component('ResumeHome', ResumeHome)
  },
} satisfies Theme
