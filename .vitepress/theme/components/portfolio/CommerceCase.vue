<script setup lang="ts">
import { ref } from 'vue'
import { withBase } from 'vitepress'
import PortfolioHeader from './PortfolioHeader.vue'
import PortfolioFooter from './PortfolioFooter.vue'
import SectionHeading from './SectionHeading.vue'
import EvidenceBadge from './EvidenceBadge.vue'
import FlowDiagram from './FlowDiagram.vue'
import StakeholderMap from './StakeholderMap.vue'
import BeforeAfter from './BeforeAfter.vue'
import CommerceContextDiagram from './CommerceContextDiagram.vue'
import { findings, decisionGates } from '../../data/commerce'
const opened = ref<number[]>([0])
function toggle(index: number) { opened.value = opened.value.includes(index) ? opened.value.filter(i => i !== index) : [...opened.value, index] }
</script>

<template>
  <div class="pf-page pf-commerce-case">
    <PortfolioHeader lens="product" />
    <main>
      <section id="case-hero" class="pf-case-hero pf-shell">
        <div class="pf-case-hero-grid"><div class="pf-case-hero-copy"><div class="pf-badge-row"><span class="pf-status">CURRENT WORK</span><EvidenceBadge kind="analysis-output" /></div><h1 class="pf-hero-title">
          <span class="sr-only">데이터를 옮기는 문제처럼 보였지만, 실제로는 운영 기준을 정하는 문제였습니다.</span>
          <span class="pf-title-lines is-desktop" aria-hidden="true"><span>데이터를 옮기는 문제처럼 보였지만,</span><span>실제로는 운영 기준을 정하는</span><span>문제였습니다.</span></span>
          <span class="pf-title-lines is-mobile" aria-hidden="true"><span>데이터를 옮기는</span><span>문제처럼 보였지만,</span><span>실제로는 운영 기준을</span><span>정하는 문제였습니다.</span></span>
        </h1><p>Legacy Commerce, Order / Settlement System, New Commerce Platform의 데이터 구조를 비교하며 발견한 문제와 제안한 방향을 정리했습니다.</p></div><CommerceContextDiagram class="is-desktop" /></div>
        <dl class="pf-case-meta"><div><dt>COMPANY</dt><dd>DS GLOBAL</dd></div><div><dt>OFFICIAL ROLE</dt><dd>Backend / Platform Engineer</dd></div><div class="pf-contribution"><dt>CONTRIBUTION</dt><dd><span>분석</span><span>매핑 검토</span><span>QA·검증</span><span>개선안 제안</span></dd></div></dl>
        <CommerceContextDiagram class="is-mobile" />
        <div class="pf-evidence-legend" aria-label="이 사례의 근거 라벨 안내"><p><EvidenceBadge kind="found" /><span>실제 분석에서 발견</span></p><p><EvidenceBadge kind="proposed" /><span>제가 제안한 방향</span></p><p><EvidenceBadge kind="team-decision" /><span>실제 합의된 범위</span></p><p><EvidenceBadge kind="my-take" /><span>PO라면 적용할 원칙</span></p></div>
      </section>

      <section id="context" class="pf-section pf-shell pf-two-column"><SectionHeading eyebrow="01 · CONTEXT" title="세 시스템은 같은 단어를 다른 의미로 사용했습니다" description="내부 명칭과 실제 데이터는 공개하지 않고 구조를 일반화했습니다." /><FlowDiagram :steps="['Legacy Commerce', 'Order / Settlement System', 'External Development Partner', 'New Commerce Platform']" /></section>

      <section id="found" class="pf-section pf-shell"><SectionHeading eyebrow="02 · WHAT I FOUND" title="매핑표보다 먼저, 단어의 의미를 맞춰야 했습니다" /><div class="pf-badge-row"><EvidenceBadge kind="found" /></div><div class="pf-accordion"><article v-for="(item, i) in findings" :key="item.title"><button type="button" :aria-expanded="opened.includes(i)" :aria-controls="`finding-${i}`" @click="toggle(i)"><span>{{ String(i + 1).padStart(2, '0') }}</span><strong>{{ item.title }}</strong><p>{{ item.summary }}</p><b aria-hidden="true">{{ opened.includes(i) ? '−' : '+' }}</b></button><div v-show="opened.includes(i)" :id="`finding-${i}`" class="pf-accordion-body"><p>{{ item.detail }}</p></div></article></div></section>

      <section id="reframe" class="pf-reframe-section"><div class="pf-shell"><p class="pf-eyebrow">03 · REFRAME</p><div class="pf-big-reframe"><span>DATA MIGRATION</span><b>↓</b><strong>DATA + POLICY + OWNERSHIP</strong></div><p>데이터 변환만 끝내서는 운영 전환이 완료되지 않습니다. 어떤 의미를 기준으로 삼고, 예외를 누가 판단하며, 무엇을 완료로 검증할지 함께 정의해야 합니다.</p></div></section>

      <section id="proposals" class="pf-section pf-shell"><SectionHeading eyebrow="04 · WHAT I PROPOSED" title="정책을 확정한 것이 아니라, 결정할 수 있는 구조를 제안했습니다" /><div class="pf-badge-row"><EvidenceBadge kind="proposed" /></div><div class="pf-proposals"><article><small>PROPOSAL 01</small><h3>Supplier Matching</h3><FlowDiagram :steps="['Business Registration Number', 'Normalized Supplier Name', 'Exception / Manual Review']" /><p>일치하지 않거나 모호한 데이터는 자동 확정하지 않고 예외 검토로 보냅니다. 이 흐름은 최종 확정 정책이 아닌 제안입니다.</p></article><article><small>PROPOSAL 02</small><h3>Migration ≠ Operation</h3><div class="pf-dual"><div><b>MIGRATION</b><span>source trace</span><span>verify</span><span>temporary</span></div><div><b>OPERATION</b><span>upload / domain</span><span>original-resize</span><span>long-term</span></div></div><p>이관 증적의 수명주기와 신규 운영 자산의 수명주기·책임을 분리합니다.</p></article><article><small>PROPOSAL 03</small><h3>Validation Stages</h3><FlowDiagram :steps="['Source Count', 'Mapping Check', 'Migration Result', 'DEV', 'STG', 'Operation QA']" /><p>건수 확인을 넘어 매핑, 환경별 검증, 실제 운영 QA까지 완료 기준을 단계화합니다.</p></article></div></section>

      <section id="team-decision" class="pf-section pf-shell"><SectionHeading eyebrow="05 · REALITY CHECK" title="제안과 팀의 결정, 제약을 섞지 않았습니다" /><div class="pf-reality-grid"><article><EvidenceBadge kind="team-decision" /><h3>확인된 합의 범위</h3><ul><li>데이터 이관과 QA·정합성 검증을 병행</li><li>원천 추적·검증 데이터와 신규 운영 저장 정책을 분리</li><li>세부 매핑과 역할 경계는 항목별로 협의</li></ul><p class="pf-caution">최종 정책이 명확하지 않은 항목은 ‘협의 중’으로 관리합니다.</p></article><article><EvidenceBadge kind="constraint" /><h3>변경 가능한 범위의 한계</h3><ul><li>핵심 구조가 이미 구현된 상태</li><li>외부 개발과 오픈 일정이 진행 중</li><li>전면 재설계가 어려운 시점</li><li>최종 정책 결정권자는 별도 존재</li></ul></article></div></section>

      <section id="stakeholders" class="pf-section pf-shell pf-two-column"><SectionHeading eyebrow="06 · STAKEHOLDERS" title="제가 맡은 위치는 비교하고 검증하며 제안하는 곳이었습니다" /><StakeholderMap /></section>

      <section id="artifacts" class="pf-section pf-shell"><SectionHeading eyebrow="07 · ARTIFACTS" title="민감한 화면 대신 분석 구조를 재구성했습니다" /><div class="pf-artifacts"><article><small>01 · DOMAIN MAPPING</small><svg class="pf-artifact-svg" viewBox="0 0 280 210" role="img" aria-label="Legacy Product Supplier Option Media를 New Domain으로 매핑"><g class="pf-svg-source"><rect x="8" y="15" width="92" height="32" rx="7"/><rect x="8" y="62" width="92" height="32" rx="7"/><rect x="8" y="109" width="92" height="32" rx="7"/><rect x="8" y="156" width="92" height="32" rx="7"/></g><g class="pf-svg-text"><text x="54" y="36">Product</text><text x="54" y="83">Supplier</text><text x="54" y="130">Option</text><text x="54" y="177">Media</text></g><path d="M110 31 L166 78 M110 78 L166 91 M110 125 L166 104 M110 172 L166 117"/><rect class="pf-svg-target" x="171" y="68" width="100" height="62" rx="12"/><text class="pf-svg-target-text" x="221" y="95">NEW</text><text class="pf-svg-target-text" x="221" y="113">DOMAIN</text></svg></article><article><small>02 · IMAGE FLOW</small><svg class="pf-artifact-svg" viewBox="0 0 280 210" role="img" aria-label="Migration과 Operation 이미지 흐름 분리"><rect class="pf-svg-target" x="90" y="14" width="100" height="42" rx="10"/><text class="pf-svg-target-text" x="140" y="40">SOURCE</text><path d="M130 61 L67 112 M150 61 L213 112"/><g class="pf-svg-source"><rect x="9" y="118" width="116" height="66" rx="10"/><rect x="155" y="118" width="116" height="66" rx="10"/></g><g class="pf-svg-text"><text x="67" y="145">TRACE</text><text x="67" y="163">VERIFY</text><text x="213" y="145">UPLOAD</text><text x="213" y="163">RESIZE</text></g></svg></article><article><small>03 · QA PIPELINE</small><svg class="pf-artifact-svg" viewBox="0 0 280 210" role="img" aria-label="Count Mapping DEV STG Operation QA 검증 파이프라인"><path d="M28 105 H252"/><g class="pf-svg-points"><circle cx="28" cy="105" r="10"/><circle cx="84" cy="105" r="10"/><circle cx="140" cy="105" r="10"/><circle cx="196" cy="105" r="10"/><circle cx="252" cy="105" r="10"/></g><g class="pf-svg-text"><text x="28" y="76">COUNT</text><text x="84" y="139">MAP</text><text x="140" y="76">DEV</text><text x="196" y="139">STG</text><text x="252" y="76">QA</text></g></svg></article></div></section>

      <section id="my-take" class="pf-take-section"><div class="pf-shell"><EvidenceBadge kind="my-take" /><h2>If I Owned the Product</h2><p>전면 재설계보다 네 개의 Decision Gate를 먼저 운영하겠습니다.</p><ol class="pf-gates"><li v-for="(gate, i) in decisionGates" :key="gate.title"><small>GATE {{ String(i + 1).padStart(2, '0') }}</small><h3>{{ gate.title }}</h3><p>{{ gate.text }}</p></li></ol></div></section>

      <section id="analysis-output" class="pf-section pf-shell"><SectionHeading eyebrow="08 · ANALYSIS OUTPUT" title="성과가 아니라, 다음 결정을 위한 분석 산출물입니다" /><div class="pf-badge-row"><EvidenceBadge kind="analysis-output" /></div><BeforeAfter :before="['담당자별 판단', '정책 / 기술 혼재', '완료 기준 불명확', 'Migration / Operation 혼동']" :after="['결정 질문 정리', '대안·Trade-off 문서화', '구조 분리 제안', '검증 체크리스트', '책임 질문 구조화']" /></section>

      <section id="learning" class="pf-section pf-shell pf-learning"><p class="pf-eyebrow">09 · LEARNING</p><h2>구현 속도와 제품 개발 속도는<br>같은 것이 아니었습니다.</h2><p>이미 만들어진 구조 안에서도 결정 질문, 책임, 검증 기준을 명확히 하면 운영 위험을 줄일 수 있습니다. 동시에 늦게 발견한 정책 문제는 기술만으로 되돌리기 어렵다는 것도 배웠습니다.</p></section>

      <section id="engineering" class="pf-section pf-shell pf-two-column"><SectionHeading eyebrow="10 · ENGINEERING LENS" title="분석은 구현 가능한 검증 단위로 이어져야 합니다" /><div class="pf-engineering-list"><p><span>01</span>재실행 가능한 이관 단위</p><p><span>02</span>원천과 결과를 잇는 추적 키</p><p><span>03</span>환경별 검증 데이터와 판정 기준</p><p><span>04</span>예외를 숨기지 않는 수동 검토 흐름</p></div></section>

      <section id="next" class="pf-next"><div class="pf-shell"><p class="pf-eyebrow">NEXT CASE</p><h2>외부 도구를 내부 공통 플랫폼으로</h2><a class="pf-button is-light" :href="withBase('/resume/#case-deeplink')">Deeplink Story 보기 →</a></div></section>
    </main><PortfolioFooter lens="product" />
  </div>
</template>
