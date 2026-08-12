<script setup lang="ts">defineProps<{ before: string[]; after: string[] }>()</script>
<template><div class="pf-before-after"><div><small>BEFORE</small><p v-for="item in before" :key="item">{{ item }}</p></div><b aria-hidden="true">→</b><div><small>AFTER</small><p v-for="item in after" :key="item">{{ item }}</p></div></div></template>
