<script setup lang="ts">defineProps<{ steps: string[]; label?: string }>()</script>
<template><div class="pf-flow" role="img" :aria-label="label || steps.join('에서 ')" ><template v-for="(step, i) in steps" :key="step"><span>{{ step }}</span><b v-if="i < steps.length - 1" aria-hidden="true">→</b></template></div></template>
