<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import { withBase } from 'vitepress'
import {
  coreStrengths,
  productPerspectives,
  profileSummary,
  resumeExperiences,
  resumeMetrics,
  technicalLiteracy,
  workingStyle,
} from '../../data/resume'

const menuOpen = ref(false)
const dsGlobal = resumeExperiences[0]
const doubleDown = resumeExperiences[1]
const futurePlatform = resumeExperiences[2]
const adMax = resumeExperiences[3]

function closeMenu() { menuOpen.value = false }
function onKey(event: KeyboardEvent) { if (event.key === 'Escape') closeMenu() }
function printResume() { if (typeof window !== 'undefined') window.print() }

if (typeof window !== 'undefined') window.addEventListener('keydown', onKey)
onBeforeUnmount(() => { if (typeof window !== 'undefined') window.removeEventListener('keydown', onKey) })
</script>

<template>
  <div class="rs-page">
    <header class="rs-utility no-print">
      <div class="rs-shell rs-utility-inner">
        <a class="rs-mark" :href="withBase('/resume/')" aria-label="한정원 이력서 홈">WONNY<span>.</span></a>
        <button class="rs-menu-button" type="button" :aria-expanded="menuOpen" aria-controls="resume-menu" @click="menuOpen = !menuOpen">
          {{ menuOpen ? 'Close' : 'Menu' }}
        </button>
        <div id="resume-menu" class="rs-menu" :class="{ 'is-open': menuOpen }">
          <nav aria-label="Resume navigation">
            <a href="#experience" @click="closeMenu">Experience</a>
            <a href="#perspective" @click="closeMenu">Perspective</a>
            <a href="#strengths" @click="closeMenu">Strengths</a>
          </nav>
          <a class="rs-story-link" :href="withBase('/resume/portfolio/')">Product Story →</a>
        </div>
      </div>
    </header>

    <main>
      <section class="rs-hero rs-shell" aria-labelledby="resume-name">
        <p class="rs-kicker">DIGITAL RESUME · 2026</p>
        <div class="rs-hero-grid">
          <div>
            <h1 id="resume-name">한정원</h1>
            <p class="rs-role">Platform Product · Backend / Platform Engineer</p>
            <h2>복잡한 운영을 구조화하고,<br>반복 업무를 자동화·플랫폼으로 전환해왔습니다.</h2>
          </div>
          <div class="rs-intro">
            <p>광고·게임·커머스에서 내부 운영 시스템과 플랫폼을 개발하고 개선해왔습니다. 운영자가 반복하던 업무를 자동화하고, 외부 서비스 의존 구조를 내부 플랫폼으로 전환했으며, 데이터 이관과 운영 전환 과정에서는 불명확한 기준·예외·책임을 분석해 검증 가능한 구조로 정리했습니다.</p>
            <p>개발 구현에 그치지 않고 실제 사용 흐름을 확인하고, 문제를 구조화해 대안을 설계한 뒤 실행과 검증까지 연결하는 방식으로 일합니다.</p>
          </div>
        </div>
        <div class="rs-contact-links" aria-label="Contact and resume links">
          <a href="mailto:devwonny@gmail.com">Email</a>
          <a href="https://github.com/dev-wonny" target="_blank" rel="noreferrer">GitHub<span class="rs-sr-only"> 새 창</span></a>
          <a class="rs-screen-link" :href="withBase('/')">Engineering Notes</a>
          <a class="rs-screen-link" :href="withBase('/resume/backend/')">Backend Resume</a>
          <a class="rs-screen-link" :href="withBase('/resume/portfolio/')">Product Story</a>
          <button class="no-print" type="button" @click="printResume">PDF 저장</button>
        </div>
      </section>

      <section class="rs-metrics rs-shell" aria-labelledby="metric-title">
        <p id="metric-title" class="rs-section-label">SELECTED OUTCOMES</p>
        <div class="rs-metric-grid">
          <article v-for="metric in resumeMetrics" :key="metric.label">
            <strong>{{ metric.value }}</strong>
            <h3>{{ metric.label }}</h3>
            <p>{{ metric.note }}</p>
          </article>
        </div>
      </section>

      <div class="rs-body-grid rs-shell">
        <div class="rs-main-column">
          <section id="experience" class="rs-section rs-experience" aria-labelledby="experience-title">
            <div class="rs-section-heading">
              <p class="rs-section-label">CAREER</p>
              <h2 id="experience-title">EXPERIENCE</h2>
              <p>도메인은 달라도, 운영의 병목을 발견하고 시스템과 기준으로 바꾸는 일을 반복해왔습니다.</p>
            </div>

            <article class="rs-company is-current">
              <header class="rs-company-header">
                <div><p class="rs-period">{{ dsGlobal.period }}</p><h3>{{ dsGlobal.company }}</h3></div>
                <p>{{ dsGlobal.role }}</p>
              </header>
              <p class="rs-company-context">{{ dsGlobal.context }}</p>
              <ul class="rs-contributions"><li v-for="item in dsGlobal.contributions" :key="item">{{ item }}</li></ul>

              <div class="rs-selected-work">
                <p class="rs-work-heading">SELECTED WORK</p>
                <article class="rs-work-card is-featured">
                  <div class="rs-work-meta"><span>COMMERCE ANALYSIS</span><span>I FOUND · I PROPOSED · MY TAKE</span></div>
                  <h4>데이터 이관처럼 보였지만, 실제로는 운영 기준의 문제였습니다.</h4>
                  <p>기존 쇼핑몰·발주 시스템·신규 플랫폼의 데이터 구조를 비교하면서, 단순 ETL보다 같은 데이터를 판단하는 기준, 누가 결정하고 검증할지, 이관용 구조와 운영용 구조를 어떻게 구분할지가 핵심이라고 보았습니다.</p>
                  <p class="rs-screen-detail">이미 구현된 구조와 일정이라는 제약 안에서 정합성 검증과 QA를 수행하고, 더 적합한 매칭·검증·운영 방향을 제안하고 문서화했습니다.</p>
                  <div class="rs-commerce-mini no-print" role="img" aria-label="Legacy Commerce와 Order System이 Data Policy Ownership 기준을 거쳐 New Commerce Platform으로 이동">
                    <div><span>Legacy Commerce</span><span>Order System</span></div><b>→</b><strong>Data · Policy<br>· Ownership</strong><b>→</b><span>New Commerce Platform</span>
                  </div>
                  <a class="rs-detail-link no-print" :href="withBase('/resume/cases/commerce/')">상세 분석 보기 →</a>
                </article>

                <div class="rs-work-pair">
                  <article class="rs-work-card">
                    <div class="rs-work-meta"><span>EVENT PLATFORM</span></div>
                    <h4>AWS ECS 기반 이벤트 플랫폼 개발·운영</h4>
                    <p>출석·랜덤 리워드·응모권 이벤트의 참여 기록, 보상 처리와 운영 API를 개발하고, AWS ECS 기반 실행·배포 환경에서 운영했습니다.</p>
                    <p><strong>7일간 총 응모 10,950건</strong> · 참여 회원 6,305명 규모의 이벤트를 운영했습니다.</p>
                    <p class="rs-insight"><b>INSIGHT</b> 하나의 범용 테이블과 설정값으로 여러 이벤트를 표현하면서, 공통 메타데이터와 이벤트별 참여·보상·상태 전이 규칙의 경계를 경험했습니다.</p>
                  </article>
                  <article class="rs-work-card">
                    <div class="rs-work-meta"><span>BATCH OPERATION</span></div>
                    <h4>Batch 실행·재처리 검증</h4>
                    <p>Airflow와 Spring Batch로 구성된 기존 Job의 실행 방식·스케줄·선후행 관계를 분석하고, 로컬 실행, DB 전후 비교, 재실행과 Backfill 관점에서 운영 검증을 진행했습니다.</p>
                    <p class="rs-insight"><b>OPERATIONS</b> 장애나 데이터 오류 상황에서 임시 SQL보다 기존 Job을 안전하게 재사용할 수 있도록 재처리·멱등성 검증 기준을 정리했습니다.</p>
                  </article>
                </div>
              </div>
            </article>

            <article class="rs-company">
              <header class="rs-company-header">
                <div><p class="rs-period">{{ doubleDown.period }}</p><h3>{{ doubleDown.company }}</h3></div>
                <p>{{ doubleDown.role }}</p>
              </header>
              <p class="rs-company-context">{{ doubleDown.context }}</p>
              <ul class="rs-contributions"><li v-for="item in doubleDown.contributions" :key="item">{{ item }}</li></ul>

              <div class="rs-selected-work">
                <p class="rs-work-heading">SELECTED WORK</p>
                <article id="case-deeplink" class="rs-case-row">
                  <div class="rs-case-title"><span>01 · PLATFORM</span><h4>Internal Deeplink Platform</h4></div>
                  <p class="rs-print-summary">외부 URL 서비스 의존 구조를 Short URL / Deeplink API와 운영 Admin을 갖춘 내부 플랫폼으로 전환했습니다.</p>
                  <div class="rs-work-detail">
                    <div><b>PROBLEM</b><p>마케팅·운영 조직이 외부 URL 서비스에 의존해 링크 생성·조회·검색·삭제 과정과 데이터 통제에 제약이 있었습니다.</p></div>
                    <div><b>ACTION</b><p>Short URL / Deeplink API와 운영 Admin을 구축하고, DynamoDB TTL, Local Cache와 중복 생성 방지 구조를 적용했습니다.</p></div>
                    <div><b>RESULT</b><ul><li>Local Cache 적용으로 DynamoDB 접근량 약 30% 감소</li><li>중복 생성 방지 구조로 중복 링크 약 50% 감소</li><li>운영자가 링크를 직접 생성·검색·삭제할 수 있는 내부 관리 환경 구축</li></ul></div>
                  </div>
                  <p class="rs-linear-flow no-print">Marketing / Operation → Deeplink Admin → Redirect API → Local Cache / DynamoDB</p>
                </article>

                <article id="case-email" class="rs-case-row">
                  <div class="rs-case-title"><span>02 · AUTOMATION</span><h4>광고 이메일 운영 자동화</h4></div>
                  <p class="rs-print-summary">템플릿 관리부터 발송 상태 확인까지 Admin·Spring Batch·Slack으로 연결해 사이트별 수작업 시간을 약 90% 줄였습니다.</p>
                  <div class="rs-work-detail">
                    <div><b>PROBLEM</b><p>여러 사이트의 운영자가 대상자 추출, Deeplink 생성, 발송 요청과 상태 확인을 각각 수작업으로 수행했습니다.</p></div>
                    <div><b>ACTION</b><p>템플릿 관리, 대상자 추출, Deeplink 생성, 발송 요청을 Admin에 통합하고, Spring Batch Job과 Slack 상태 알림을 연결했습니다.</p></div>
                    <div><b>RESULT</b><ul><li>사이트별 수작업 소요시간 약 90% 감소</li><li>누락·오발송 위험 감소</li><li>운영자가 반복 업무를 직접 실행하고 결과를 확인하는 흐름 구축</li></ul></div>
                  </div>
                  <p class="rs-linear-flow no-print">Operator → Admin → Target → Deeplink → Batch → Send → Slack</p>
                </article>

                <article id="case-advertising" class="rs-case-row">
                  <div class="rs-case-title"><span>03 · GOVERNANCE</span><h4>광고 정책 중앙화 및 노출 구조 개선</h4></div>
                  <p class="rs-print-summary">분산된 광고 정책을 Strategy Pattern 기반 공통 구조로 중앙화해 광고팀 측정 지표 기준 CTR 약 25% 증가와 운영 관리시간 약 30% 감소를 만들었습니다.</p>
                  <div class="rs-work-detail">
                    <div><b>PROBLEM</b><p>광고 조건과 노출 정책이 여러 코드에 분산돼, 새 광고 유형 추가와 운영 실험 시 개발 의존도가 높았습니다.</p></div>
                    <div><b>ACTION</b><p>광고 수집, 필터링, 우선순위와 노출 책임을 분리하고 Strategy Pattern 기반 공통 구조와 중앙 관리 방식을 적용했습니다.</p></div>
                    <div><b>RESULT</b><ul><li>광고팀 측정 지표 기준 CTR 약 25% 증가</li><li>운영 관리시간 약 30% 감소</li><li>신규 광고 유형 추가 시 변경 범위 축소</li></ul></div>
                  </div>
                  <p class="rs-linear-flow no-print">Policy → Collection → Filtering → Priority → Exposure</p>
                </article>
              </div>
            </article>

            <article class="rs-company is-compact">
              <header class="rs-company-header">
                <div><p class="rs-period">{{ futurePlatform.period }}</p><h3>{{ futurePlatform.company }}</h3></div>
                <p>{{ futurePlatform.role }}</p>
              </header>
              <p class="rs-company-context">{{ futurePlatform.context }}</p>
              <ul class="rs-contributions"><li v-for="item in futurePlatform.contributions" :key="item">{{ item }}</li></ul>
            </article>

            <article class="rs-company is-compact">
              <header class="rs-company-header">
                <div><p class="rs-period">{{ adMax.period }}</p><h3>{{ adMax.company }}</h3></div>
                <p>{{ adMax.role }}</p>
              </header>
              <p class="rs-company-context">{{ adMax.context }}</p>
              <ul class="rs-contributions"><li v-for="item in adMax.contributions" :key="item">{{ item }}</li></ul>
            </article>
          </section>

          <section id="perspective" class="rs-section rs-perspective" aria-labelledby="perspective-title">
            <div class="rs-section-heading">
              <p class="rs-section-label">PRODUCT LENS</p>
              <h2 id="perspective-title">PRODUCT PERSPECTIVE</h2>
              <p>개발 경험을 돌아보면 제가 반복해서 관심을 가진 것은 기능의 개수보다 운영 방식과 책임 구조였습니다.</p>
            </div>
            <div class="rs-perspective-grid">
              <article v-for="item in productPerspectives" :key="item.index">
                <div><span>{{ item.index }}</span><small>{{ item.label }}</small></div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.body }}</p>
                <strong>{{ item.evidence }}</strong>
              </article>
            </div>
          </section>
        </div>

        <aside class="rs-sidebar" aria-label="Resume summary">
          <section class="rs-side-section rs-profile-block">
            <h2>PROFILE</h2>
            <ul><li v-for="item in profileSummary" :key="item">{{ item }}</li></ul>
          </section>

          <section id="strengths" class="rs-side-section rs-strengths">
            <h2>CORE STRENGTHS</h2>
            <ul class="rs-chip-list"><li v-for="item in coreStrengths" :key="item">{{ item }}</li></ul>
          </section>

          <section class="rs-side-section rs-how-block no-print">
            <h2>HOW I WORK</h2>
            <ol class="rs-work-style">
              <li v-for="(item, index) in workingStyle" :key="item.title"><span>{{ String(index + 1).padStart(2, '0') }}</span><div><h3>{{ item.title }}</h3><p>{{ item.text }}</p></div></li>
            </ol>
          </section>

          <section class="rs-side-section rs-technical">
            <h2>TECHNICAL LITERACY</h2>
            <dl><div v-for="item in technicalLiteracy" :key="item.title"><dt>{{ item.title }}</dt><dd>{{ item.text }}</dd></div></dl>
          </section>

          <section class="rs-side-section rs-education">
            <h2>EDUCATION</h2>
            <h3>한성대학교</h3>
            <p>행정학과 주전공<br>멀티미디어공학과 부전공</p>
            <small>2016년 졸업 · 3.63 / 4.0</small>
          </section>
        </aside>
      </div>

      <section class="rs-next rs-shell no-print" aria-labelledby="next-title">
        <p class="rs-section-label">EXPLORE MORE</p>
        <h2 id="next-title">상세한 설계 판단과 사례는 별도 페이지에 정리했습니다.</h2>
        <nav aria-label="Detailed resume links">
          <a :href="withBase('/')"><span>01</span>Engineering Notes에서 기술적 설계와 운영 기록 보기 →</a>
          <a :href="withBase('/resume/cases/commerce/')"><span>02</span>Commerce Analysis 상세 보기 →</a>
          <a :href="withBase('/resume/portfolio/')"><span>03</span>Product Story에서 사례와 Insight 전체 보기 →</a>
          <a :href="withBase('/resume/backend/')"><span>04</span>Backend / Platform 상세 이력서 보기 →</a>
        </nav>
      </section>
    </main>

    <footer class="rs-footer no-print"><div class="rs-shell"><strong>한정원</strong><a href="mailto:devwonny@gmail.com">devwonny@gmail.com</a><small>© {{ new Date().getFullYear() }} Jeongwon Han</small></div></footer>
  </div>
</template>
