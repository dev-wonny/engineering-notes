<script setup lang="ts">
import { withBase } from 'vitepress'
import PortfolioHeader from './PortfolioHeader.vue'
import PortfolioFooter from './PortfolioFooter.vue'
import SectionHeading from './SectionHeading.vue'
import MetricStrip from './MetricStrip.vue'
import SystemDiagram from './SystemDiagram.vue'
import FlowDiagram from './FlowDiagram.vue'
import { developerMetrics } from '../../data/metrics'
import { domains, notes } from '../../data/cases'
</script>

<template>
  <div class="pf-page pf-developer">
    <PortfolioHeader lens="developer" />
    <main>
      <section id="hero" class="pf-hero pf-shell">
        <div class="pf-hero-copy">
          <p class="pf-eyebrow">BACKEND / PLATFORM ENGINEER</p>
          <h1 class="pf-hero-title">
            <span class="sr-only">운영되는 시스템을 만들고, 반복되는 문제를 구조로 해결합니다.</span>
            <span class="pf-title-lines is-desktop" aria-hidden="true"><span>운영되는 시스템을 만들고,</span><span>반복되는 문제를 구조로</span><span>해결합니다.</span></span>
            <span class="pf-title-lines is-mobile" aria-hidden="true"><span>운영되는 시스템을</span><span>만들고,</span><span>반복되는 문제를</span><span>구조로 해결합니다.</span></span>
          </h1>
          <p class="pf-hero-lead">광고·게임·커머스에서 백엔드와 플랫폼을 개발해왔습니다.<br>기능 구현에 그치지 않고 데이터, 실행 환경, 배포와 운영 흐름까지<br>함께 보며 문제를 해결합니다.</p>
          <div class="pf-actions"><a class="pf-button is-primary" href="#engineering-cases">Engineering Case 보기</a><a class="pf-text-link" :href="withBase('/resume/portfolio/')">Product 관점에서 보기 →</a></div>
        </div>
        <SystemDiagram />
      </section>

      <section id="impact" class="pf-section pf-shell pf-section-tight" aria-labelledby="impact-title">
        <p id="impact-title" class="pf-eyebrow">ENGINEERING IMPACT</p><MetricStrip :items="developerMetrics" />
      </section>

      <section id="domains" class="pf-section pf-shell">
        <SectionHeading eyebrow="WHAT I BUILD" title="서비스의 안쪽부터 운영의 바깥까지" description="코드 한 계층이 아니라, 데이터가 흐르고 시스템이 실행되며 사람이 운영하는 전체 구조를 봅니다." />
        <div class="pf-domain-grid"><a v-for="domain in domains" :key="domain.title" :href="withBase(domain.href)" class="pf-domain-card"><small>{{ domain.index }}</small><h3>{{ domain.title }}</h3><p>{{ domain.description }}</p><span>Explore →</span></a></div>
      </section>

      <section id="engineering-cases" class="pf-section pf-shell">
        <SectionHeading eyebrow="SELECTED ENGINEERING WORK" title="복잡도를 줄이는 구조를 만들었습니다" />
        <article class="pf-work is-commerce">
          <div class="pf-work-copy"><p class="pf-eyebrow">COMMERCE / DATA</p><h3>Legacy Commerce →<br>New Commerce Platform</h3><p>서로 다른 데이터 의미를 매핑하고 단계별 검증 기준으로 이관의 신뢰도를 높였습니다.</p><a class="pf-text-link" :href="withBase('/resume/cases/commerce/')">Product Insight →</a></div>
          <FlowDiagram :steps="['Legacy Commerce', 'Domain Mapping', 'Validation', 'New Commerce Platform']" label="Legacy Commerce에서 도메인 매핑과 검증을 거쳐 New Commerce Platform으로 이동" />
        </article>
        <article class="pf-work">
          <div class="pf-work-copy"><p class="pf-eyebrow">PLATFORM</p><h3>Internal Deeplink Platform</h3><p>외부 링크 서비스 의존을 내부 공통 플랫폼으로 바꾸고 조회와 중복 생성을 각각 개선했습니다.</p><div class="pf-inline-metrics"><span><b>30%↓</b>DynamoDB Access</span><span><b>50%↓</b>Duplicate Link</span></div><a class="pf-text-link" :href="withBase('/resume/portfolio/#case-deeplink')">Product Story →</a></div>
          <div class="pf-split-flow" role="img" aria-label="Client에서 Redirect API를 거쳐 Local Cache와 DynamoDB로 조회"><span>Client</span><b>→</b><span>Redirect API</span><b>→</b><div><span>Local Cache</span><span>DynamoDB</span></div></div>
        </article>
        <article class="pf-work">
          <div class="pf-work-copy"><p class="pf-eyebrow">BATCH / PLATFORM</p><h3>Scheduled Batch Platform</h3><p>작업을 카탈로그로 정리하고 오케스트레이션과 실제 업무 실행의 책임을 나눴습니다.</p><div class="pf-inline-metrics"><span><b>42</b>Scheduled Catalog</span><span><b>39</b>Java Batch Jobs</span></div><a class="pf-text-link" :href="withBase('/case-studies/batch-operation')">Batch Note →</a></div>
          <FlowDiagram :steps="['Airflow', 'AWS Batch', 'ECS', 'Spring Batch']" />
        </article>
      </section>

      <section id="notes" class="pf-section pf-shell">
        <SectionHeading eyebrow="ENGINEERING NOTES" title="결과보다 판단의 근거를 기록합니다" description="실무의 문제를 공개 가능한 형태로 일반화하고, 선택과 Trade-off를 다시 검증합니다." />
        <div class="pf-note-list"><a v-for="(note, i) in notes" :key="note.title" :href="withBase(note.href)"><small>{{ String(i + 1).padStart(2, '0') }} · {{ note.category }}</small><h3>{{ note.title }}</h3><p>{{ note.description }}</p><span aria-hidden="true">↗</span></a></div>
      </section>

      <section id="product-bridge" class="pf-bridge">
        <div class="pf-shell"><p class="pf-eyebrow">THE NEXT LENS</p><h2>그런데 시스템을 만들다 보니,<br>계속 코드 바깥의 문제가 보였습니다.</h2><div class="pf-questions"><p>왜 이 일을 사람이 반복하고 있지?</p><p>왜 운영자가 개발자를 기다려야 하지?</p><p>왜 같은 데이터인데 시스템마다 기준이 다르지?</p></div><a class="pf-button is-light" :href="withBase('/resume/portfolio/')">Platform Product View →</a></div>
      </section>
    </main>
    <PortfolioFooter lens="developer" />
  </div>
</template>
