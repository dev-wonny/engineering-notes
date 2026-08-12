<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import { withBase } from 'vitepress'
import {
  coreStrengths,
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
            <a href="#skills" @click="closeMenu">Skills</a>
            <a href="#style" @click="closeMenu">How I Work</a>
          </nav>
          <a class="rs-story-link" :href="withBase('/')">Engineering Notes →</a>
        </div>
      </div>
    </header>

    <main>
      <section class="rs-hero rs-shell" aria-labelledby="resume-name">
        <p class="rs-kicker">DIGITAL RESUME · 2026</p>
        <div class="rs-hero-grid">
          <div>
            <h1 id="resume-name">한정원</h1>
            <p class="rs-role">Backend / Platform Engineer</p>
            <h2>코드만 보지 않고,<br>데이터·실행 환경·운영 흐름까지 확인합니다.</h2>
          </div>
          <div class="rs-intro">
            <p>Java/Spring 기반 백엔드 개발과 AWS 환경의 서비스 배포·운영을 경험해 온 엔지니어입니다.</p>
            <p>새로운 시스템을 접하면 실제 데이터, 로그, 실행 환경과 운영 흐름을 함께 확인하고, 정책이 명확하지 않은 상황에서도 근거를 찾아 구조화합니다. 기술적 대안과 trade-off를 설명해 이해관계자와 합의 가능한 형태로 조정하는 방식으로 일해왔습니다.</p>
          </div>
        </div>
        <div class="rs-contact-links" aria-label="Contact and resume links">
          <a href="mailto:devwonny@gmail.com">Email</a>
          <a href="https://github.com/dev-wonny" target="_blank" rel="noreferrer">GitHub</a>
          <a class="rs-screen-link" :href="withBase('/')">Engineering Notes</a>
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
              <p>본문에는 핵심만 두고, 판단 근거와 실제 데이터는 상세 페이지에 분리했습니다.</p>
            </div>

            <article class="rs-company is-current">
              <header class="rs-company-header">
                <div><p class="rs-period">{{ dsGlobal.period }}</p><h3>{{ dsGlobal.company }}</h3></div>
                <p>{{ dsGlobal.role }}</p>
              </header>
              <p class="rs-company-context">{{ dsGlobal.context }}</p>

              <div class="rs-selected-work">
                <article class="rs-work-card">
                  <div class="rs-work-meta"><span>EVENT PLATFORM</span></div>
                  <h4>출석·랜덤 리워드·응모권 이벤트 플랫폼</h4>
                  <p>이벤트 유형별 도메인 차이를 고려한 모델을 제안하고, 조직의 최종 데이터 모델 제약을 수용해 구현했습니다.</p>
                  <p>ECS(EC2) 환경에서 배포·운영했으며 MAU 약 <strong>16만</strong>, DAU 약 <strong>9,700</strong> 환경에서 운영했습니다.</p>
                  <a class="rs-detail-link no-print" :href="withBase('/resume/cases/event-platform/')">설계 판단 상세보기 →</a>
                </article>

                <article class="rs-work-card">
                  <div class="rs-work-meta"><span>BATCH VALIDATION</span></div>
                  <h4>정책·데이터 기준 Batch 검증 및 실행 환경 운영</h4>
                  <p>기존 및 AI 기반 Batch 구현을 실제 데이터와 도메인 정책 기준으로 검증·수정하고, 재실행·Backfill 시 멱등성을 확인했습니다.</p>
                  <p>EC2 Airflow → ECS Fargate → Spring Batch 구조를 사용하고 Docker·PostgreSQL·LocalStack 기반 로컬 검증 환경을 구성했습니다.</p>
                  <a class="rs-detail-link no-print" :href="withBase('/resume/cases/batch-validation/')">데이터·테스트 상세보기 →</a>
                </article>

                <article class="rs-work-card">
                  <div class="rs-work-meta"><span>IMAGE MIGRATION & POLICY</span></div>
                  <h4>레거시 이미지 규칙 역추적과 신규 운영 정책</h4>
                  <p>Weed DB와 실제 화면을 대조해 테이블·조건별 이미지 저장·노출 규칙을 파악하고, 기획자와 보존 대상을 확정해 백업과 마이그레이션 스크립트를 작성했습니다.</p>
                  <p>원본 <strong>15,736건</strong>, 생성 결과 <strong>73,401건</strong>, HTML URL 치환 <strong>5,053건</strong>을 검증하고 주요 서비스 사례를 비교해 Temp·원본·Resize·경로 정책을 제안했습니다.</p>
                  <a class="rs-detail-link no-print" :href="withBase('/resume/cases/image-migration/')">분석·운영 정책 상세보기 →</a>
                </article>

                <article class="rs-work-card is-featured">
                  <div class="rs-work-meta"><span>COMMERCE DATA MIGRATION</span><span>DOMAIN MAPPING</span></div>
                  <h4>같은 ‘상품’이 정말 같은 상품인지부터 확인했습니다.</h4>
                  <p>Weed와 발주모아를 신규 플랫폼으로 통합하며 1:1·1:N·N:1 관계와 사업자번호·업체명·상품코드 기준의 매핑 규칙을 분석했습니다.</p>
                  <p>고객 노출 판매상품과 공급·발주 상품의 의미가 다름을 확인해 분리 모델을 제안했고, 최종 통합 모델의 제약을 수용하면서 광고·오픈마켓 연동 시 식별자 충돌 리스크를 문서화했습니다.</p>
                  <a class="rs-detail-link no-print" :href="withBase('/resume/cases/commerce/')">도메인 매핑 상세보기 →</a>
                </article>
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
                <div class="rs-work-pair">
                  <article class="rs-work-card">
                    <div class="rs-work-meta"><span>DEEPLINK PLATFORM</span></div>
                    <h4>외부 URL 의존을 내부 플랫폼으로 전환</h4>
                    <p>Short URL / Deeplink API와 운영 Admin을 구축하고 Local Cache로 DynamoDB 접근량을 약 30% 줄였습니다.</p>
                  </article>
                  <article class="rs-work-card">
                    <div class="rs-work-meta"><span>AUTOMATION</span></div>
                    <h4>광고 이메일 운영 자동화</h4>
                    <p>사이트별 수동 업무를 Spring Batch로 자동화해 반복 작업 시간을 약 90% 줄였습니다.</p>
                  </article>
                </div>
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
        </div>

        <aside class="rs-side-column">
          <section id="skills" class="rs-section" aria-labelledby="skills-title">
            <p class="rs-section-label">CORE EXPERIENCE</p>
            <h2 id="skills-title">TECHNICAL</h2>
            <div class="rs-side-list">
              <article v-for="item in technicalLiteracy" :key="item.title">
                <h3>{{ item.title }}</h3>
                <p>{{ item.text }}</p>
              </article>
            </div>
          </section>

          <section class="rs-section" aria-labelledby="strength-title">
            <p class="rs-section-label">STRENGTHS</p>
            <h2 id="strength-title">CORE</h2>
            <div class="rs-tag-list"><span v-for="item in coreStrengths" :key="item">{{ item }}</span></div>
          </section>

          <section class="rs-section" aria-labelledby="profile-title">
            <p class="rs-section-label">PROFILE</p>
            <h2 id="profile-title">FOCUS</h2>
            <div class="rs-tag-list"><span v-for="item in profileSummary" :key="item">{{ item }}</span></div>
          </section>

          <section id="style" class="rs-section" aria-labelledby="style-title">
            <p class="rs-section-label">HOW I WORK</p>
            <h2 id="style-title">PROCESS</h2>
            <div class="rs-side-list">
              <article v-for="item in workingStyle" :key="item.title">
                <h3>{{ item.title }}</h3>
                <p>{{ item.text }}</p>
              </article>
            </div>
          </section>
        </aside>
      </div>
    </main>
  </div>
</template>
