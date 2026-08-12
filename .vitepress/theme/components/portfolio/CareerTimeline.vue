<script setup lang="ts">import { career } from '../../data/career'</script>
<template><ol class="pf-career"><li v-for="item in career" :key="item.company"><div><small>{{ item.period }}</small><h3>{{ item.company }}</h3><span>{{ item.role }}</span></div><p>{{ item.change }}</p></li></ol></template>
