<script setup lang="ts">
defineProps<{ eyebrow?: string; title: string; description?: string }>()
</script>

<template>
  <header class="pf-section-heading">
    <p v-if="eyebrow" class="pf-eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p v-if="description" class="pf-section-lead">{{ description }}</p>
  </header>
</template>
