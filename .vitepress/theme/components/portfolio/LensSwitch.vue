<script setup lang="ts">
import { withBase } from 'vitepress'
defineProps<{ lens: 'developer' | 'product' }>()
</script>

<template><a class="pf-lens" :href="withBase(lens === 'developer' ? '/resume/' : '/')">{{ lens === 'developer' ? 'Product View →' : 'Engineering View →' }}</a></template>
