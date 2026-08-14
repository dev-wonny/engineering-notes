<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import { withBase } from 'vitepress'
import LensSwitch from './LensSwitch.vue'
defineProps<{ lens: 'developer' | 'product' }>()
const open = ref(false)
function close() { open.value = false }
function onKey(event: KeyboardEvent) { if (event.key === 'Escape') close() }
if (typeof window !== 'undefined') window.addEventListener('keydown', onKey)
onBeforeUnmount(() => { if (typeof window !== 'undefined') window.removeEventListener('keydown', onKey) })
</script>

<template>
  <header class="pf-header">
    <div class="pf-shell pf-header-inner">
      <a class="pf-mark" :href="withBase(lens === 'developer' ? '/' : '/resume/portfolio/')" aria-label="WONNY 홈">WONNY<span>.</span></a>
      <button class="pf-menu-button" type="button" :aria-expanded="open" aria-controls="portfolio-menu" @click="open = !open"><span>{{ open ? 'Close' : 'Menu' }}</span></button>
      <div id="portfolio-menu" class="pf-menu" :class="{ 'is-open': open }">
        <nav :aria-label="lens === 'developer' ? 'Engineering navigation' : 'Product navigation'">
          <template v-if="lens === 'developer'">
            <a :href="withBase('/#domains')" @click="close">Engineering</a><a :href="withBase('/#engineering-cases')" @click="close">Cases</a><a :href="withBase('/#notes')" @click="close">Notes</a>
          </template>
          <template v-else>
            <a :href="withBase('/resume/portfolio/#outcomes')" @click="close">Outcomes</a><a :href="withBase('/resume/portfolio/#cases')" @click="close">Cases</a><a :href="withBase('/resume/portfolio/#how-i-work')" @click="close">How I Work</a><a :href="withBase('/resume/portfolio/#career')" @click="close">Career</a>
          </template>
        </nav>
        <div class="pf-menu-actions"><LensSwitch :lens="lens" /><a v-if="lens === 'product'" class="pf-resume-link" :href="withBase('/resume')" target="_self">Resume</a></div>
      </div>
    </div>
  </header>
</template>
