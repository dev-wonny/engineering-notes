<script setup lang="ts">
type EvidenceKind = 'found' | 'proposed' | 'did' | 'team-decision' | 'constraint' | 'my-take' | 'outcome' | 'analysis-output'
const props = defineProps<{ kind: EvidenceKind }>()
const labels: Record<EvidenceKind, string> = {
  found: 'I FOUND', proposed: 'I PROPOSED', did: 'I DID',
  'team-decision': 'TEAM DECISION', constraint: 'CONSTRAINT',
  'my-take': 'MY TAKE', outcome: 'OUTCOME', 'analysis-output': 'ANALYSIS OUTPUT',
}
</script>

<template><span class="pf-evidence" :class="`is-${props.kind}`">{{ labels[props.kind] }}</span></template>
