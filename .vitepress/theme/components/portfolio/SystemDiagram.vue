<template>
  <div class="pf-system" role="img" aria-label="Service에서 API, Data와 Cache, Batch, AWS ECS, Observability로 이어지는 시스템 흐름">
    <div class="pf-system-node is-top">Service</div><span class="pf-down">↓</span><div class="pf-system-node">API</div>
    <div class="pf-system-branch"><div><span class="pf-mini-label">COMMERCE</span><div class="pf-system-node">Data</div></div><div><span class="pf-mini-label">DEEPLINK</span><div class="pf-system-node">Cache</div></div></div>
    <span class="pf-down">↓</span><span class="pf-mini-label">BATCH PLATFORM</span><div class="pf-system-node">Batch</div><span class="pf-down">↓</span>
    <span class="pf-mini-label">EVENT PLATFORM</span><div class="pf-system-node is-dark">AWS / ECS</div><span class="pf-down">↓</span><div class="pf-system-node is-outline">Observability</div>
  </div>
</template>
