import { career } from './career'

const periodFor = (company: string) => career.find(item => item.company === company)?.period ?? ''

export const resumeMetrics = [
  { value: '25%↑', label: '광고 CTR', note: '광고팀 측정 지표 기준' },
  { value: '90%↓', label: '이메일 운영 수작업 시간', note: '사이트별 반복 업무 자동화' },
  { value: '50%↓', label: '중복 링크 생성', note: '중복 생성 방지 구조 적용' },
  { value: '30%↓', label: 'DynamoDB 접근', note: 'Local Cache 적용' },
]

export const profileSummary = [
  '광고·게임·커머스 도메인',
  '내부 운영 시스템·Backoffice',
  '문제 정의부터 구현·검증까지',
  '기술 기반 Product 관점',
]

export const coreStrengths = [
  '운영 자동화',
  '내부 공통 플랫폼',
  '정책·데이터 구조화',
  'Backoffice / Admin',
  '이해관계자 조율',
  '기술 Trade-off 판단',
]

export const workingStyle = [
  { title: 'Observe', text: '운영자와 시스템이 실제로 어떻게 움직이는지 확인합니다.' },
  { title: 'Define', text: '현상을 사용자·정책·데이터·기술 문제로 분리합니다.' },
  { title: 'Design Options', text: '대안과 Trade-off, 변경 영향을 비교합니다.' },
  { title: 'Align', text: '누가 결정하고 구현하며 검증할지 역할과 완료 기준을 맞춥니다.' },
  { title: 'Execute', text: '직접 구현하거나 개발·운영 흐름에 반영합니다.' },
  { title: 'Validate', text: '사용·운영 결과와 지표로 개선 여부를 확인합니다.' },
]

export const technicalLiteracy = [
  { title: 'Backend', text: 'Java · Spring Boot · Spring Batch · MyBatis / JPA' },
  { title: 'Data', text: 'PostgreSQL · MySQL / Oracle · Redis · DynamoDB' },
  { title: 'Platform', text: 'AWS ECS(EC2) · AWS Batch · Airflow · CI/CD' },
  { title: 'Operations', text: 'ELK · CloudWatch · Backfill · Recovery' },
]

export const resumeExperiences = [
  {
    id: 'ds-global',
    company: 'DS GLOBAL',
    period: periodFor('DS GLOBAL'),
    role: '개발팀 과장 · Backend / Platform Engineer',
    context: '외주 개발된 커머스 플랫폼의 내재화 과정에서 데이터 이관·QA·배치와 운영 구조를 분석하고, 신규 서비스 전환을 위한 검증 업무를 수행하고 있습니다.',
    contributions: [
      'Legacy Commerce, Order / Settlement System, New Commerce Platform의 상품·업체·옵션·이미지 구조를 비교했습니다.',
      '데이터 이관 전후의 누락·중복·정합성을 검증하고, 단계별 완료 기준과 예외 항목을 정리했습니다.',
      'Migration 결과물과 장기 Operation 구조의 목적 차이, 조직별 책임 경계와 결정 필요 항목을 분석해 개선 방향을 제안했습니다.',
      'Airflow·Spring Batch Job을 로컬에서 실행하고 DB 전후·재실행·멱등성 기준으로 운영 검증 방식을 정리했습니다.',
    ],
  },
  {
    id: 'doubledown',
    company: 'DoubleDown Interactive',
    period: periodFor('DoubleDown Interactive'),
    role: '서비스개발팀 매니저',
    context: 'DAU 123만 규모의 글로벌 게임 서비스에서 내부 운영 플랫폼, 광고 시스템, Backoffice와 반복 업무 자동화를 개발·운영했습니다.',
    contributions: [
      '외부 URL 서비스에 의존하던 링크 운영을 내부 Deeplink 플랫폼으로 전환했습니다.',
      '여러 사이트에서 사람이 반복하던 광고 이메일 업무를 Admin·Batch·Slack 기반 Workflow로 자동화했습니다.',
      '코드에 분산된 광고 조건과 노출 정책을 수집·필터링·우선순위·노출 책임으로 분리했습니다.',
      '글로벌 서비스의 장애·성능·운영 이슈를 로그와 데이터 흐름을 기반으로 분석하고 대응했습니다.',
    ],
  },
  {
    id: 'future-platform',
    company: 'Future Platform',
    period: periodFor('Future Platform'),
    role: '서비스개발팀 팀장',
    context: '공공 분야 정보시스템 프로젝트에서 Java/Spring 기반 백엔드 개발과 서비스개발팀의 일정·테스트·협업 구조화를 담당했습니다.',
    contributions: [
      '폐쇄망 환경에서 Java/Spring 기반 서비스 기능을 개발했습니다.',
      '팀 업무를 나누고 일정, 테스트와 산출물 상태를 점검했습니다.',
      '개발·기획·사업 이해관계자 사이의 요구와 진행 상황을 문서로 구조화했습니다.',
    ],
  },
  {
    id: 'admax',
    company: 'AdMax / FSN',
    period: periodFor('AdMax / FSN'),
    role: 'R&D팀 매니저',
    context: '광고 Tracking·FDS 시스템과 데이터 수집·운영 자동화를 개발하고, 요청 흐름과 인프라 비용을 개선했습니다.',
    contributions: [
      '광고 클릭·액션 서버와 Tracking·FDS 시스템을 개발·운영했습니다.',
      'YouTube·Instagram·Facebook 데이터를 3분 단위로 자동 수집했습니다.',
      '불필요 클릭 요청을 필터링하고 캠페인 이상 징후 알림을 자동화했습니다.',
      '데이터 수집 정확도 90% 이상을 유지하고, 요청량 약 20%와 인프라 비용 약 20%를 줄였습니다.',
    ],
  },
]

export const productPerspectives = [
  {
    index: '01',
    label: 'AUTOMATION',
    title: '사람이 반복하는 일은 Workflow로 연결합니다.',
    body: '반복 업무는 개인의 숙련도보다 입력·실행·상태 확인·재처리 흐름을 하나의 시스템으로 연결할 때 안정적으로 줄일 수 있다고 생각합니다.',
    evidence: 'Email Automation · 수작업 시간 90% 감소',
  },
  {
    index: '02',
    label: 'SELF-SERVICE',
    title: '운영자는 작은 변경을 위해 개발자를 기다리지 않아야 합니다.',
    body: '반복 요청을 API 하나로 대체하는 데서 끝내지 않고, 운영자가 필요한 정보를 직접 입력하고 실행 결과를 확인할 수 있는 Admin과 상태 피드백까지 제품 범위로 봅니다.',
    evidence: 'Deeplink Admin · 내부 링크 생성·검색·삭제',
  },
  {
    index: '03',
    label: 'BOUNDARY',
    title: '공통화는 테이블 수를 줄이는 일이 아니라 변경 이유가 같은 것을 묶는 일입니다.',
    body: '출석·랜덤 리워드·응모권 이벤트를 하나의 범용 모델로 표현하는 경험을 통해, 공통 메타데이터와 각 도메인의 참여·보상·상태 전이 규칙을 어디에서 분리해야 하는지 고민하게 됐습니다.',
    evidence: 'MY TAKE · 기간·상태·노출 정보는 공통화하고, 핵심 참여·보상 정책은 도메인별로 분리합니다.',
  },
  {
    index: '04',
    label: 'COMPLETION CRITERIA',
    title: '정책과 완료 기준이 없으면 구현 속도는 제품 개발 속도가 되지 않습니다.',
    body: '데이터 이관 과정에서 구현보다 먼저 같은 데이터의 기준, 예외 처리, 책임 주체와 검증 단계를 정해야 재작업을 줄일 수 있음을 배웠습니다.',
    evidence: 'Commerce Analysis · Data + Policy + Ownership',
  },
]
