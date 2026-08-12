<script setup lang="ts">
import { withBase } from 'vitepress'
defineProps<{ items: Array<{ value: string; label: string; note?: string; href?: string }> }>()
</script>

<template>
  <div class="pf-metrics">
    <component :is="item.href ? 'a' : 'div'" v-for="item in items" :key="item.label" class="pf-metric" :href="item.href ? withBase(item.href) : undefined">
      <strong>{{ item.value }}</strong><span>{{ item.label }}</span><small v-if="item.note">{{ item.note }}</small>
    </component>
  </div>
</template>
