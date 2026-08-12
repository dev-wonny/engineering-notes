<script setup lang="ts">
import { withBase } from 'vitepress'
import { profile } from '../../data/profile'
defineProps<{ lens: 'developer' | 'product' }>()
</script>

<template>
  <footer class="pf-footer">
    <div class="pf-shell pf-footer-inner">
      <div><strong>{{ profile.mark }}</strong><p>Systems, platforms, and the decisions between them.</p></div>
      <nav aria-label="Footer navigation">
        <a :href="withBase('/')">Engineering</a><a :href="withBase('/resume/portfolio/')">Product</a><a :href="withBase('/resume/')">Resume</a><a :href="profile.github" target="_blank" rel="noreferrer">GitHub <span class="sr-only">(새 창)</span></a>
      </nav>
      <small>© {{ new Date().getFullYear() }} Jeongwon Han</small>
    </div>
  </footer>
</template>
