<script setup lang="ts">
import { withBase } from 'vitepress'
import PortfolioHeader from './PortfolioHeader.vue'
import PortfolioFooter from './PortfolioFooter.vue'
import SectionHeading from './SectionHeading.vue'
import MetricStrip from './MetricStrip.vue'
import EvidenceBadge from './EvidenceBadge.vue'
import ProblemSolutionRows from './ProblemSolutionRows.vue'
import BeforeAfter from './BeforeAfter.vue'
import FlowDiagram from './FlowDiagram.vue'
import CareerTimeline from './CareerTimeline.vue'
import ProductProcessDiagram from './ProductProcessDiagram.vue'
import { productMetrics } from '../../data/metrics'
import { problems } from '../../data/cases'
</script>

<template>
  <div class="pf-page pf-product">
    <PortfolioHeader lens="product" />
    <main>
      <section id="hero" class="pf-hero pf-product-hero pf-shell">
        <div class="pf-hero-copy"><p class="pf-eyebrow">PLATFORM PRODUCT</p><h1 class="pf-hero-title">
          <span class="sr-only">복잡한 운영을 구조화하고 사람이 반복하는 일을 플랫폼으로 바꿔왔습니다.</span>
          <span class="pf-title-lines is-desktop" aria-hidden="true"><span>복잡한 운영을 구조화하고</span><span>사람이 반복하는 일을</span><span>플랫폼으로 바꿔왔습니다.</span></span>
          <span class="pf-title-lines is-mobile" aria-hidden="true"><span>복잡한 운영을</span><span>구조화하고,</span><span>사람이 반복하는</span><span>일을 플랫폼으로</span><span>바꿔왔습니다.</span></span>
        </h1><p class="pf-hero-lead">광고·게임·커머스에서 내부 운영 시스템과 플랫폼을 설계하고 개선해왔습니다.</p><p class="pf-hero-lead">반복 오퍼레이션을 자동화하고, 외부 서비스 의존 구조를 내부 플랫폼으로 전환하며, 서로 다른 데이터와 정책을 운영 가능한 기준으로 구조화해왔습니다.</p><div class="pf-actions"><a class="pf-button is-primary" href="#cases">Case 보기</a><a class="pf-text-link" href="#how-i-work">일하는 방식 →</a></div></div>
        <ProductProcessDiagram />
      </section>

      <section id="outcomes" class="pf-section pf-shell pf-section-tight"><p class="pf-eyebrow">MEASURED CHANGE</p><MetricStrip :items="productMetrics" /></section>

      <section id="problems" class="pf-section pf-shell pf-two-column"><SectionHeading eyebrow="PROBLEMS I SOLVE" title="반복되는 운영 문제를 제품의 언어로 바꿉니다" description="기능 요청 뒤에 있는 기다림, 불일치, 불명확한 책임을 찾아 구조를 바꿉니다." /><ProblemSolutionRows :items="problems" /></section>

      <section id="cases" class="pf-section pf-shell">
        <SectionHeading eyebrow="SELECTED CASES" title="발견한 문제와 실제 성과를 구분해 설명합니다" />
        <article class="pf-commerce-preview">
          <div><p class="pf-eyebrow">CURRENT WORK · ANALYSIS &amp; PRODUCT INSIGHT</p><h3>데이터를 옮기는 문제처럼 보였지만,<br>실제로는 운영 기준을 정하는 문제였습니다.</h3><p>Legacy Commerce와 Order / Settlement System, New Commerce Platform 사이의 의미 차이를 분석해 정책·책임·검증 질문으로 다시 정리했습니다.</p><div class="pf-badge-row"><EvidenceBadge kind="found" /><EvidenceBadge kind="proposed" /><EvidenceBadge kind="constraint" /></div><a class="pf-button is-dark" :href="withBase('/resume/cases/commerce/')">Commerce Case 보기 →</a></div>
          <div class="pf-reframe-card" role="img" aria-label="Legacy Commerce와 Order Settlement System이 New Commerce Platform으로 합쳐지며 Data Migration에서 Data Policy Ownership 문제로 재정의"><div><span>Legacy Commerce</span><span>Order / Settlement System</span></div><b>?</b><span>New Commerce Platform</span><hr><small>DATA MIGRATION</small><b>↓</b><strong>DATA + POLICY + OWNERSHIP</strong></div>
        </article>

        <article id="case-deeplink" class="pf-story">
          <div class="pf-story-heading"><div><p class="pf-eyebrow">SELF-SERVICE PLATFORM</p><h3>외부 Deeplink 서비스를 내부 공통 플랫폼으로 전환</h3><p class="pf-story-meta">2023.10 ~ 2023.12 · DoubleDown Interactive</p></div><div class="pf-badge-row"><EvidenceBadge kind="did" /><EvidenceBadge kind="outcome" /></div></div>
          <div class="pf-story-detail">
            <div><strong>배경과 문제</strong><p>마케팅·운영 조직이 Bitly에 의존하면서 외부 비용이 증가했고, 링크 생성과 관리 방식도 외부 서비스 기능에 제약받고 있었습니다.</p></div>
            <div><strong>문제 정의</strong><p>단순 URL 단축 기능이 아니라 여러 조직이 공통으로 사용할 수 있는 링크 생성·조회·검색·관리 플랫폼이 필요하다고 정의했습니다.</p></div>
            <div><strong>구조 설계</strong><p>자체 Short URL / Deeplink 플랫폼과 운영 Admin을 구축하고, DynamoDB TTL과 Local Cache를 적용했습니다. 동일 목적의 링크가 반복 생성되지 않도록 생성 규칙도 정리했습니다.</p></div>
            <div><strong>협업과 실행</strong><p>마케팅·운영 조직의 기존 링크 생성 방식과 사용 패턴을 확인하고, 필요한 검색·관리 기능을 반영해 운영 방식을 내부 플랫폼으로 전환했습니다.</p></div>
          </div>
          <BeforeAfter :before="['외부 서비스 의존', '링크별 수동 관리', '제한된 검색과 통제']" :after="['Internal Admin', 'Redirect API', 'Cache + DynamoDB']" />
          <div class="pf-story-outcome"><strong>결과</strong><p>Bitly 외부 비용을 제거하고, 반복 조회와 중복 생성을 줄였습니다. 운영자가 개발자 요청 없이 직접 링크를 생성·검색·관리할 수 있는 환경을 구축했습니다.</p></div>
          <div class="pf-story-metrics"><div><b>30%↓</b><span>DynamoDB Access</span><small>Local Cache 적용</small></div><div><b>50%↓</b><span>Duplicate Link</span><small>중복 생성 감소</small></div></div>
        </article>

        <article id="case-email" class="pf-story">
          <div class="pf-story-heading"><div><p class="pf-eyebrow">WORKFLOW AUTOMATION</p><h3>광고 이메일 발송 운영 자동화</h3><p class="pf-story-meta">2023.06 ~ 2023.08 · DoubleDown Interactive</p></div><div class="pf-badge-row"><EvidenceBadge kind="did" /><EvidenceBadge kind="outcome" /></div></div>
          <div class="pf-story-detail">
            <div><strong>배경과 문제</strong><p>운영자가 대상자 추출, Deeplink 생성, 발송 요청, 상태 확인을 수작업으로 수행해 시간이 오래 걸리고 누락·오발송 위험이 있었습니다.</p></div>
            <div><strong>문제 정의</strong><p>단순 발송 기능의 부족이 아니라 운영 프로세스 전체가 사람에게 의존하는 문제로 정의했습니다.</p></div>
            <div><strong>구조 설계</strong><p>템플릿 관리, 대상자 추출, Deeplink 자동 생성, 발송 요청을 Admin UI에 통합하고 Spring Batch Job과 Slack 알림을 연계했습니다.</p></div>
            <div><strong>협업과 실행</strong><p>운영자의 실제 업무 흐름을 기준으로 필수 입력값과 예외 조건을 정의하고, 운영 피드백을 반영해 반복 개선했습니다.</p></div>
          </div>
          <BeforeAfter :before="['각 사이트 담당자', '대상 추출 → Deeplink 생성', '발송 요청 → 상태 확인']" :after="['Operator → Admin', 'Target → Deeplink → Batch', 'Send → Slack']" />
          <div class="pf-story-outcome"><strong>결과</strong><p>광고 이메일 발송 시간을 약 90% 단축하고 수작업 누락·오발송 위험을 줄였습니다. 운영자가 개발자 지원 없이 업무를 수행할 수 있는 흐름으로 전환했습니다.</p></div>
          <div class="pf-story-metrics"><div><b>약 90%↓</b><span>Manual Work Time</span><small>수작업 소요시간 기준</small></div></div>
        </article>

        <article id="case-advertising" class="pf-story">
          <div class="pf-story-heading"><div><p class="pf-eyebrow">POLICY &amp; GOVERNANCE</p><h3>광고 정책 중앙화 및 운영 플랫폼 리팩터링</h3><p class="pf-story-meta">2023.12 ~ 2024.01 · DoubleDown Interactive</p></div><div class="pf-badge-row"><EvidenceBadge kind="did" /><EvidenceBadge kind="outcome" /></div></div>
          <div class="pf-story-detail">
            <div><strong>배경과 문제</strong><p>광고 조건과 노출 정책이 여러 코드에 분산돼 신규 광고 유형 추가와 운영 실험 시 개발 의존도가 높았습니다.</p></div>
            <div><strong>문제 정의</strong><p>광고 기능 자체보다 정책 분산이 실험과 운영 속도를 제한하는 구조가 핵심 문제라고 정의했습니다.</p></div>
            <div><strong>구조 설계</strong><p>광고 수집·필터링·노출·우선순위 책임을 분리하고 Strategy Pattern 기반으로 광고 유형별 정책을 나눠 변경 영향 범위를 줄였습니다.</p></div>
            <div><strong>협업과 실행</strong><p>기획·광고 운영·개발팀과 정책 우선순위, 호환성, 전환 범위를 협의하고 운영자가 조건을 직접 관리할 수 있는 구조로 개선했습니다.</p></div>
          </div>
          <BeforeAfter :before="['Ad A → Rule A', 'Ad B → Rule B', 'Ad C → Rule C']" :after="['Policy → Collection', 'Filtering → Priority', 'Exposure']" />
          <div class="pf-story-outcome"><strong>결과</strong><p>광고 CTR을 약 25% 높이고 운영 관리시간을 약 30% 줄였습니다. 신규 광고 추가 시 수정해야 하는 개발 범위도 축소했습니다.</p></div>
          <div class="pf-story-metrics"><div><b>약 25%↑</b><span>Advertising CTR</span><small>광고팀 측정 지표 기준</small></div><div><b>약 30%↓</b><span>Operation Time</span></div></div>
        </article>

        <article class="pf-story pf-event"><div class="pf-story-heading"><div><p class="pf-eyebrow">PRODUCT × ENGINEERING TRADE-OFF</p><h3>모든 이벤트를 하나의 모델로 만들면<br>정말 확장하기 쉬울까?</h3></div><span class="pf-coming">COMING LATER</span></div><div class="pf-event-tree" role="img" aria-label="Event 아래 Attendance, Random, Raffle의 서로 다른 규칙"><strong>Event</strong><div><span>Attendance<small>reset / streak / milestone</small></span><span>Random<small>probability / inventory / limit</small></span><span>Raffle<small>ticket / draw / winner</small></span></div></div><div class="pf-take"><EvidenceBadge kind="my-take" /><p>공통 메타데이터는 공유하되, 참여·보상·상태 전이는 도메인별로 분리한다.</p></div></article>
      </section>

      <section id="product-engineering" class="pf-section pf-shell"><SectionHeading eyebrow="PRODUCT × ENGINEERING" title="두 렌즈를 동시에 사용합니다" /><div class="pf-lens-grid"><article><small>PRODUCT LENS</small><h3>왜 풀어야 하는가</h3><ul><li>내부 사용자의 실제 병목</li><li>정책과 책임의 경계</li><li>완료와 검증의 기준</li></ul></article><article><small>ENGINEERING LENS</small><h3>어떻게 운영되게 만들 것인가</h3><ul><li>데이터 의미와 상태 전이</li><li>실행·실패·복구 흐름</li><li>확장성과 복잡도의 균형</li></ul></article></div></section>

      <section id="how-i-work" class="pf-section pf-shell pf-process-section"><SectionHeading eyebrow="HOW I WORK" title="관찰에서 검증까지, 질문을 잃지 않습니다" /><FlowDiagram :steps="['OBSERVE', 'DEFINE', 'DESIGN OPTIONS', 'ALIGN', 'EXECUTE', 'VALIDATE']" /></section>

      <section id="career" class="pf-section pf-shell"><SectionHeading eyebrow="CAREER" title="만든 기능보다 바뀐 운영을 중심으로" /><CareerTimeline /></section>

      <section id="why-product" class="pf-section pf-shell pf-why"><SectionHeading eyebrow="WHY PLATFORM PRODUCT" title="좋은 플랫폼은 기술의 공통점보다 운영의 경계를 먼저 묻습니다" /><div class="pf-question-grid"><p>어떤 문제를<br><strong>시스템으로 바꿔야 하는가?</strong></p><p>어디까지 공통화하고<br><strong>어디부터 도메인으로 분리해야 하는가?</strong></p><p>무엇을 완료로 보고<br><strong>누가 검증해야 하는가?</strong></p></div></section>

      <section id="contact" class="pf-contact"><div class="pf-shell"><p class="pf-eyebrow">LET'S CONNECT</p><h2>복잡한 운영을<br>명확한 제품으로 바꾸는 일.</h2><a href="mailto:devwonny@gmail.com">devwonny@gmail.com →</a></div></section>
    </main><PortfolioFooter lens="product" />
  </div>
</template>
