import { career } from './career'

const periodFor = (company: string) => career.find(item => item.company === company)?.period ?? ''

export const resumeMetrics = [
  { value: '25%↑', label: '광고 CTR', note: '광고팀 측정 지표 기준' },
  { value: '90%↓', label: '이메일 수작업', note: '사이트별 반복 업무 자동화' },
  { value: '20%↓', label: '불필요 요청', note: '광고 요청 패턴 분석·필터링' },
  { value: '20%↓', label: 'AWS 비용', note: '사용량 기준 Scale-up / Scale-out' },
]

export const profileSummary = [
  'Java / Spring Backend',
  'AWS Service Operations',
  'Data-driven Troubleshooting',
  'Technical Communication',
]

export const coreStrengths = [
  'AWS 실행·배포·운영',
  '실제 데이터 기반 검증',
  '레거시 규칙 역추적',
  '기술 Trade-off 설명',
  '이해관계자 조율',
  '반복 가능한 테스트 환경',
]

export const workingStyle = [
  { title: 'Observe', text: '코드뿐 아니라 실제 데이터, 로그, 화면과 실행 환경을 함께 확인합니다.' },
  { title: 'Define', text: '정책과 시스템 동작이 어긋나는 지점을 먼저 정의합니다.' },
  { title: 'Design Options', text: '기술적 대안과 Trade-off, 변경 영향을 비교합니다.' },
  { title: 'Align', text: '기획·개발·운영·외부 개발사와 필요한 기준을 반복해서 맞춥니다.' },
  { title: 'Execute', text: '최종 제약을 수용해 실제 구현 가능한 구조로 조정합니다.' },
  { title: 'Validate', text: '실제 데이터와 재실행 결과로 변경이 안전한지 다시 검증합니다.' },
]

export const technicalLiteracy = [
  { title: 'AWS / Cloud', text: 'EC2 · ECS(EC2/Fargate) · ALB/ELB · S3 · CloudFront · Route53 · CloudWatch · DynamoDB' },
  { title: 'Backend', text: 'Java · Spring · Spring Boot · Spring Batch · MyBatis · JPA · QueryDSL' },
  { title: 'Data', text: 'PostgreSQL · MySQL · MSSQL · Oracle · Redis · DynamoDB' },
  { title: 'Delivery / Operations', text: 'Docker · Airflow · CodePipeline · CodeBuild · CodeDeploy · Jenkins · ELK · LocalStack' },
]

export const resumeExperiences = [
  {
    id: 'ds-global',
    company: 'DS GLOBAL',
    period: periodFor('DS GLOBAL'),
    role: '개발팀 과장 · Backend / Platform Engineer',
    context: '레거시 쇼핑몰을 신규 커머스 플랫폼으로 전환하는 과정에서 백엔드 개발, AWS 실행 환경, 데이터 마이그레이션, 이미지 운영 정책과 Batch 검증을 담당하고 있습니다.',
    contributions: [
      '출석·랜덤 리워드·응모권 이벤트 플랫폼을 개발하고 ECS(EC2) 환경에서 배포·운영했습니다.',
      '기존 및 AI 기반 Batch 구현을 실제 데이터와 도메인 정책 기준으로 검증·수정하고 재실행·Backfill 멱등성을 확인했습니다.',
      'Weed 레거시 DB와 실제 화면을 대조해 이미지 저장·노출 규칙을 역추적하고, 백업·마이그레이션·신규 이미지 운영 정책을 정리했습니다.',
      'Weed와 발주모아 데이터를 신규 플랫폼으로 통합하며 1:1·1:N·N:1 관계와 판매상품/공급상품의 도메인 차이를 분석했습니다.',
    ],
  },
  {
    id: 'doubledown',
    company: 'DoubleDown Interactive',
    period: periodFor('DoubleDown Interactive'),
    role: '서비스개발팀 매니저',
    context: 'DAU 123만 규모의 글로벌 게임 서비스에서 백엔드 개발과 AWS 서비스 생성·배포·운영, 내부 운영 플랫폼과 반복 업무 자동화를 담당했습니다.',
    contributions: [
      'EC2/ECS 기반 서비스 환경을 생성·배포하고 서비스 상태와 애플리케이션 로그를 확인하며 운영 이슈에 대응했습니다.',
      '외부 URL 서비스에 의존하던 Deeplink 기능을 내부 플랫폼으로 전환하고 Local Cache로 DynamoDB 접근량을 약 30% 줄였습니다.',
      '사이트별 수동 이메일 업무를 Spring Batch로 자동화해 작업 시간을 약 90% 줄였습니다.',
      '광고 수집·필터링·우선순위·노출 로직을 구조화해 광고팀 측정 지표 기준 CTR을 약 25% 높였습니다.',
    ],
  },
  {
    id: 'future-platform',
    company: 'Future Platform',
    period: periodFor('Future Platform'),
    role: '서비스개발팀 팀장',
    context: '공공기관 폐쇄망 정보시스템 프로젝트에서 Java/Spring 기반 백엔드 개발과 개발·배포 환경 정비를 담당했습니다.',
    contributions: [
      'Java 8 / Spring 4.x / MyBatis 기반 백엔드를 개발하고 JBoss EAP 7.4 환경에 배포했습니다.',
      'AnyID 기반 공공기관 통합로그인 SSO를 개발했습니다.',
      'Docker / Jenkins / Nexus 기반 개발·빌드 환경과 의존성 관리 기준을 정리했습니다.',
      '개발·기획·사업 관계자 사이의 요구사항과 진행 상황을 조율했습니다.',
    ],
  },
  {
    id: 'admax',
    company: 'AdMax / FSN',
    period: periodFor('AdMax / FSN'),
    role: 'R&D팀 매니저',
    context: '광고 Tracking·FDS 시스템과 데이터 수집·운영 자동화를 개발하고, 요청 흐름과 AWS 인프라 비용을 개선했습니다.',
    contributions: [
      '약 12대 서버의 광고 요청·클릭 트래픽을 처리하고 Request Pattern과 로그를 분석했습니다.',
      '불필요 요청을 약 20% 줄이고 사용량에 맞춘 Scale-up / Scale-out으로 AWS 비용을 약 20% 절감했습니다.',
      'YouTube·Instagram·Facebook 데이터를 자동 수집하고 운영 알림을 연동했습니다.',
    ],
  },
]

export const productPerspectives = [
  {
    index: '01',
    label: 'DISCOVERY',
    title: '코드보다 실제 동작을 먼저 확인합니다.',
    body: '문서가 부족한 시스템에서는 코드, DB, 로그, 화면과 결과 데이터를 함께 보며 실제 규칙을 역추적합니다.',
    evidence: 'Batch Validation · Legacy Image Analysis',
  },
  {
    index: '02',
    label: 'TRADE-OFF',
    title: '기술적으로 더 좋은 안과 실제 가능한 안을 구분합니다.',
    body: '대안을 제안하되 일정, 기존 구현, 운영 방식과 의사결정자의 요구를 함께 보고 최종 제약 안에서 구현 가능한 구조로 조정합니다.',
    evidence: 'Event Platform · Image Policy',
  },
  {
    index: '03',
    label: 'MEANING',
    title: '이름이 같다고 같은 도메인은 아닙니다.',
    body: '데이터 통합에서는 컬럼명보다 각 시스템에서 그 데이터가 어떤 역할을 하는지 먼저 확인합니다.',
    evidence: 'Commerce Migration · 판매상품 vs 공급상품',
  },
  {
    index: '04',
    label: 'VALIDATION',
    title: '한 번 실행되는 것보다 다시 실행해도 안전한지를 봅니다.',
    body: 'Batch와 데이터 이관에서 재실행, Backfill, 누락·중복과 원천 데이터 변경을 포함한 검증 기준을 둡니다.',
    evidence: 'Spring Batch · Airflow · LocalStack',
  },
]
