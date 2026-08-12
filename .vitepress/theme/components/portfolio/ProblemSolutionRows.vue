<script setup lang="ts">defineProps<{ items: Array<{ problem: string; answer: string }> }>()</script>
<template><div class="pf-problem-rows"><div v-for="item in items" :key="item.answer"><span>{{ item.problem }}</span><b aria-hidden="true">→</b><strong>{{ item.answer }}</strong></div></div></template>
