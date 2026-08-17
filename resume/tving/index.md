---
title: TVING Backend Engineer | 한정원
description: TVING Service Platform / API Platform 지원용 Backend Engineer 경력 기술서
outline: [2, 3]
---

# 한정원

**Backend / Platform Engineer**  
**희망 도메인: 1순위 Service Platform · 2순위 API Platform**

Email. devwonny@gmail.com · GitHub. [github.com/dev-wonny](https://github.com/dev-wonny)

![한정원 프로필](https://dev-wonny.github.io/engineering-notes/resume/assets/profile.jpg)

DAU 약 **123만** 규모의 글로벌 게임 서비스부터 한국·대만 광고 플랫폼, 공공 시스템, 커머스 플랫폼까지 다양한 환경에서 백엔드 서비스를 개발하고 운영했습니다.

기능 구현뿐 아니라 AWS 배포·운영, Batch, 데이터 처리, 로그 분석, Admin/백오피스와 반복 업무 자동화까지 서비스가 실제로 동작하는 흐름을 함께 다뤄왔습니다.

최근에는 AI를 활용해 구현된 Batch 코드를 기존 서비스 정책과 실제 데이터 기준으로 검증하고 수정하고 있습니다. **코드가 정상적으로 실행되는 것과 서비스 정책에 맞는 데이터를 만드는 것은 별개의 문제**라는 기준으로 검증합니다.

---

## TVING과 연결되는 경험

### AI Agent / Engineering Productivity

- AI 기반으로 재구현된 Spring Batch Job을 기존 코드·원천 데이터·서비스 정책과 비교해 검증 및 수정
- 코드 탐색, 반복 구현, 문서 분석에 AI Agent 활용
- 코드 컨벤션·아키텍처 제약·검증 기준을 재사용 가능한 지침과 커스텀 스킬 형태로 관리
- 생성 결과를 코드·데이터·테스트 결과와 다시 비교해 검증

### Service Platform

- Deeplink / Short URL 기능을 외부 서비스에서 내부 플랫폼으로 전환
- 운영자가 직접 사용할 수 있는 Admin / Self-service 기능 개발
- Spring Batch 기반 반복 이메일 업무 자동화로 수작업 시간 약 **90% 감소**
- CodePipeline · CodeBuild · CodeDeploy · Jenkins 기반 배포 및 운영 경험

### API Platform

- DAU 약 **123만** 글로벌 게임 서비스의 Java/Spring Backend API 개발·운영
- 게임별 상태와 정책을 클라이언트 요구에 맞춰 API로 제공
- 게임 레벨·등급 정책 변경 시 일부 사용자 대상 A/B 테스트 후 결과에 따라 확대 적용
- 실제 서비스 요청과 로그를 확인하며 변경 영향 분석

### Data / Operations

- 운영 검증 대상 Batch Job **41개**를 기준으로 주문·회원·통계 등 도메인별 데이터 검증
- PostgreSQL · MySQL · MSSQL · Oracle · Redis · DynamoDB 사용
- Kafka / RabbitMQ 기반 비동기 처리 경험
- ELK, CloudWatch 및 애플리케이션 로그 기반 운영 이슈 분석

### AWS / Runtime

- EC2 · ECS(EC2) 기반 서비스 환경 생성·배포·운영
- 일부 Batch 실행 환경에서 ECS Fargate Task 사용
- ALB/ELB · S3 · CloudFront · Route53 · CloudWatch · DynamoDB 사용
- 비용을 고려해 EC2에 Apache Airflow 직접 구성

---

## Core Skills

- **Backend**: Java, Spring, Spring Boot, Spring Batch, Spring Security, MyBatis, JPA, QueryDSL
- **Data**: PostgreSQL, MySQL, MSSQL, Oracle, Redis, DynamoDB
- **Cloud / Runtime**: AWS EC2, ECS(EC2/Fargate), ALB/ELB, S3, CloudFront, Route53, CloudWatch
- **Delivery / Operations**: CodePipeline, CodeBuild, CodeDeploy, Jenkins, Docker, Airflow, ELK
- **Messaging**: Kafka, RabbitMQ
- **Personal Project / Observability**: GitHub Actions, Prometheus, Grafana, Loki

---

# Experience

## DS GLOBAL

**개발팀 과장 · Backend / Platform Engineer**  
**2026.01 — Present**

레거시 쇼핑몰을 신규 커머스 플랫폼으로 전환하는 과정에서 백엔드 개발, AWS 실행 환경, Batch 시스템 검증, 데이터·이미지 마이그레이션과 운영 정책 정리를 담당하고 있습니다.

### 1. Batch 실행 구조 개선 및 AI 기반 구현 검증

**2026.07 — 진행 중**  
**Spring Batch · Airflow · AWS EC2 · ECS Fargate · PostgreSQL · MyBatis · Docker · LocalStack**

기존 외부 개발사 시스템은 장기 실행 ECS Service 내부의 Quartz Scheduler를 중심으로 동작하고 있었고, 일부 정기 작업은 API 애플리케이션에도 나뉘어 있었습니다.

신규 시스템에서는 일부 작업이 AI를 활용해 Airflow와 Spring Batch 기반으로 재구현되어 있었습니다. 기존 코드, 원천 데이터와 신규 구현의 처리 조건을 비교해 실제 주문·회원·통계 정책과 일치하는지 검증하는 역할을 맡았습니다.

#### My Role

- 운영 검증 대상 Batch Job **41개**를 기준으로 도메인별 검증 범위 정의
- 기존 코드·원천 데이터·신규 구현의 처리 조건 비교
- 테스트 데이터를 구성하고 기대 결과를 먼저 정의한 뒤 실제 실행 결과와 비교
- 잘못된 상태값, 포함/제외 조건, 집계 기준 분석 및 Java/MyBatis 로직 수정
- 동일 기준일 재실행·Backfill 시 중복/누락과 멱등성 검증
- Docker · PostgreSQL · LocalStack 기반 로컬 반복 검증 환경 구성
- Airflow → ECS Fargate → Spring Batch 실행 흐름 검증

#### 회원 구매 집계 오류 발견 및 수정

회원별 구매 횟수와 구매 금액을 집계하는 Batch에서 **구매 이력이 있는 회원을 기준으로 집계를 시작해 미구매 정상 회원의 요약 데이터가 생성되지 않는 문제**를 발견했습니다.

정상 회원 전체를 기준으로 구매 집계 결과를 `LEFT JOIN`하도록 변경해 구매 이력이 없는 회원도 0값으로 일관되게 관리되도록 수정했습니다. 이후 기대 결과를 정의한 테스트와 실제 애플리케이션을 이용한 로컬 E2E를 반복 실행해 결과를 검증했습니다.

#### Runtime

```text
Apache Airflow (EC2)
        ↓
    ECS RunTask
        ↓
 ECS Fargate Task
        ↓
   Spring Batch
        ↓
      MyBatis
        ↓
   PostgreSQL
```

AWS Managed Airflow는 비용을 고려해 사용하지 않고 EC2에 Apache Airflow를 직접 구성했습니다. 로컬에서는 Docker, PostgreSQL, LocalStack으로 운영 AWS 환경에 의존하지 않고 동일 Job을 반복 실행하고 데이터를 확인할 수 있도록 구성했습니다.

AI는 기존 코드 탐색과 반복 구현에 활용하고 있으며, 생성된 결과는 실제 코드와 원천 데이터, 테스트 결과를 다시 비교해 검증합니다.

**상세:** [Batch Platform 재설계 및 정책 검증](/resume/cases/batch-validation/)

---

### 2. Commerce Product Data Migration

**2026.06 — 진행**  
**MSSQL · PostgreSQL**

기존 쇼핑몰 SaaS와 발주·배송·정산 시스템의 상품 데이터를 신규 커머스 플랫폼으로 통합했습니다.

두 시스템 모두 상품이라는 이름을 사용하지만 실제로는 고객에게 판매·노출되는 상품과 공급·발주 기준으로 관리되는 상품의 역할이 달랐습니다.

#### My Role

- 판매 상품과 공급 상품 간 실제 **1:1 / 1:N / N:1** 관계 분석
- 사업자번호·업체명·상품코드 기반 매핑 규칙과 예외 정리
- 데이터가 어떤 업무에서 생성되고 무엇을 기준으로 변경되는지 확인
- 판매·전시와 공급·발주의 책임 차이와 식별자 관계 분석
- 신규 Product 모델과 레거시 데이터 연결
- 식별자 충돌과 예외 케이스 문서화

컬럼 이름이나 테이블 이름보다 **데이터가 실제 비즈니스에서 어떤 책임을 가지는지**를 기준으로 마이그레이션 규칙을 정리했습니다.

**상세:** [Commerce Product Domain Migration](/resume/cases/commerce/)

---

### 3. Legacy Image Migration & Delivery Policy

**2026.07**  
**MSSQL · PostgreSQL · AWS S3 · CloudFront**

레거시 쇼핑몰의 이미지 저장 경로와 화면 노출 규칙이 문서화되어 있지 않아 DB만으로 이관 대상을 판단하기 어려웠습니다.

DB 데이터와 실제 쇼핑몰 화면을 대조해 서비스에서 사용 중인 이미지를 확인하고, 기획자와 보존 범위를 정한 뒤 마이그레이션 결과를 검증했습니다.

#### My Role / Result

- 상품·상세·프로모션·게시판 등 이미지 유형별 원천 데이터와 실제 화면 비교
- 원본 이미지 **15,736건** 검증
- 생성·변환 결과 이미지 **73,401건** 검증
- HTML 내부 이미지 URL **5,053건** 치환 검증
- 마이그레이션 추적 경로와 신규 운영 경로 분리
- 원본 보존, UUID 기반 파일명, Temp 이미지 처리 방식 정리
- 1000px / 600px / 100px Resize, 비율 유지, 확대 금지 기준 정리
- S3 / CloudFront 기반 신규 이미지 전달 구조 검토

**상세:** [Legacy Image Migration](/resume/cases/image-migration/)

---

### 4. 쇼핑몰 이벤트 플랫폼 개발 및 운영

**2026.03 — 2026.04**  
**Spring Boot · PostgreSQL · AWS ECS(EC2) · ALB · CodePipeline · CodeBuild · CodeDeploy · ELK**

출석·랜덤 리워드·응모권 이벤트를 외부 솔루션에 의존하지 않고 내부에서 직접 운영할 수 있도록 이벤트 Backend를 개발했습니다.

#### My Role

- 이벤트 참여·보상·응모권 관련 API 개발
- 이벤트 유형별 참여 방식·상태 변화·보상 정책 분석
- 도메인 분리 구조와 범용 데이터 구조의 확장성·변경 범위·기존 시스템 영향 비교
- 결정된 데이터 모델 기준 이벤트 유형별 처리 조건 구현
- ECS(EC2) 환경 배포 및 운영
- CodePipeline · CodeBuild · CodeDeploy 기반 배포
- ELK 기반 애플리케이션 로그 및 운영 오류 확인

#### 운영 결과

- MAU 약 **16만**, DAU 약 **9,700** 환경에서 운영
- 7일 이벤트 총 응모 **10,950건**
- 참여 회원 **6,305명**
- 전체 회차 참여 회원 **212명**

![쇼핑몰 서비스 화면](https://dev-wonny.github.io/engineering-notes/resume/assets/shop.webp)

![AWS 배포 아키텍처](https://dev-wonny.github.io/engineering-notes/resume/assets/aws.webp)

**상세:** [Event Platform](/resume/cases/event-platform/)

---

## DoubleDown Interactive

**서비스개발팀 매니저**  
**2022.10 — 2024.04**

DAU 약 **123만** 규모의 글로벌 소셜카지노 게임을 운영하는 서비스개발팀에서 게임 Backend와 운영 플랫폼을 개발했습니다.

Facebook을 포함한 여러 플랫폼에서 글로벌 사용자가 이용하는 서비스였으며, Java/Spring 기반 게임 API, 광고 시스템, Deeplink / Short URL, 이메일 자동화, Admin / 백오피스 등을 개발했습니다. 개발한 서비스의 AWS 환경 생성과 배포, 애플리케이션 상태와 로그 확인도 함께 담당했습니다.

### 1. 게임 레벨·등급 정책 A/B 테스트

DAU 약 **123만** 규모의 글로벌 서비스에서 게임 레벨과 등급 정책 등 사용자 경험에 영향을 주는 기능을 변경할 때 전체 사용자에게 바로 적용하지 않고 일부 사용자 그룹을 대상으로 A/B 테스트를 진행했습니다.

기존 정책과 변경 정책을 서로 다른 사용자 그룹에 적용할 수 있도록 Backend 로직을 개발하고, 실제 서비스 결과를 확인한 뒤 유효한 변경은 전체 사용자에게 확대 적용하는 방식으로 기능을 출시했습니다.

### 2. 게임 서비스 API 개발

게임별 진행 방식과 상태, 보상 규칙에 맞는 Backend API를 개발하고 운영했습니다.

- 게임마다 공통으로 처리할 수 있는 부분과 게임별 정책을 구분해 구현
- 클라이언트에서 필요한 게임 상태와 데이터를 API로 제공
- 여러 플랫폼에서 사용하는 서비스 특성을 고려해 변경 영향 확인
- 실제 서비스 요청과 애플리케이션 로그를 확인하며 운영

### 3. 게임 내 광고 플랫폼 개선

게임 내 광고 시스템의 광고 수집, 사용자별 필터링, 노출 조건과 우선순위 로직을 개발하고 개선했습니다.

광고 유형이 늘면서 조건 분기가 복잡해지는 문제를 줄이기 위해 처리 흐름의 책임을 나누고, 광고 유형별 차이는 Strategy Pattern으로 분리했습니다.

광고팀에서 실제로 사용하는 측정 지표를 기준으로 노출 결과를 분석하고 정책을 개선했으며, 변경 이후 광고팀 측정 기준 **CTR이 약 25% 향상**됐습니다.

### 4. Deeplink / Short URL 플랫폼 내재화

게임 이벤트와 광고 캠페인에 사용하는 Deeplink와 Short URL 기능을 외부 서비스에 의존하고 있었습니다.

외부 서비스를 대체할 수 있는 내부 Deeplink 플랫폼과 운영 Admin을 개발했습니다.

- 링크 정보는 DynamoDB로 관리
- 반복 조회 데이터에 Local Cache 적용
- DynamoDB 접근량 약 **30% 감소**
- 운영자가 Admin에서 직접 Deeplink / Short URL 생성 및 관리
- 외부 의존 기능을 Self-service 형태의 내부 플랫폼으로 전환

### 5. 광고 이메일 업무 자동화

광고 이메일 발송을 위해 대상자 추출, 이메일 준비, Deeplink 생성, 발송 등을 사람이 여러 단계에 걸쳐 처리하고 있었습니다.

발송 대상과 이메일 정보를 Admin에서 관리하도록 만들고 필요한 Deeplink 생성과 대량 이메일 처리 과정을 자동화했습니다.

대량 처리에는 Spring Batch를 사용했으며, 사이트별로 사람이 직접 수행하던 작업을 시스템으로 전환해 **수작업 시간을 약 90% 줄였습니다.**

### 6. AWS 서비스 배포 및 운영

- 서비스개발팀에서 개발한 Backend의 AWS 서비스 환경 생성
- EC2/ECS 기반 애플리케이션 배포
- 배포 후 서비스 상태와 애플리케이션 로그 확인
- 운영 이슈 발생 시 로그와 서비스 상태를 확인해 대응

기능 개발만 담당하는 것이 아니라 생성·배포·운영 상태 확인까지 서비스개발팀에서 함께 관리했습니다.

---

## Future Platform

**서비스개발팀 팀장**  
**2025.06 — 2025.12**

식품의약품안전처 폐쇄망 프로젝트에서 Java/Spring 기반 백엔드 개발과 개발 환경 개선을 담당했습니다.

**Java 8 · Spring 4.x · MyBatis · Oracle · JBoss EAP 7.4 · Docker · Jenkins · Nexus**

### My Role

- 교육 관리, 심사자 실적 관리, 위기 대응 물량 시각화 등 Backend 기능 개발
- AnyID 기반 공공기관 통합 로그인 SSO 개발
- JBoss EAP 7.4 환경 배포
- Docker · Jenkins · Nexus 기반 개발·빌드 환경 정리
- 폐쇄망 로컬 실행 및 배포 절차 문서화
- 라이브러리 및 의존성 관리 기준 정리
- 개발·기획·사업 담당자 사이의 요구사항과 일정 조율

폐쇄망에서는 필요한 라이브러리와 개발 도구를 인터넷에서 바로 받을 수 없어 개발 환경과 의존성을 사전에 관리해야 했습니다. 신규 개발자가 동일한 설정 문제를 반복하지 않도록 실행·배포 방법과 라이브러리 관리 기준을 문서화했습니다.

---

## DoubleDown Interactive

**서비스개발팀 매니저**  
**2022.10 — 2024.04**

> 위의 TVING 핵심 경험 섹션에서 상세 기술했습니다.

---

## AdMax / FSN

**R&D팀 매니저**  
**2020.01 — 2022.08**

한국과 대만에서 운영되는 디지털 광고 서비스의 Tracking 및 FDS 시스템을 담당했습니다. 기존에 구축되어 있던 **Click Server, Action Server, Batch Job 등 광고 Tracking 백엔드 전반을 단독으로 유지보수**하며 신규 기능 추가와 운영 이슈 대응을 맡았습니다.

### 1. 광고 Tracking 시스템 유지보수 및 기능 추가

- 광고 클릭을 처리하는 Click Server 담당
- 클릭 이후 Action 데이터를 처리하는 Action Server 담당
- 수집 데이터를 정리·집계하는 Batch Job 담당
- 광고 요청 → 클릭 → Action → 집계로 이어지는 전체 흐름을 확인하며 기능 추가 및 장애 대응
- 한국·대만 서비스의 데이터 이상 발생 시 요청 흐름·로그·저장 데이터 기반 원인 추적

### 2. 광고 요청 및 FDS 로직 개선

약 **12대 서버**에서 처리되는 광고 요청과 클릭 트래픽의 Request Pattern과 로그를 분석했습니다.

반복되거나 불필요한 요청 패턴을 찾아 필터링 조건을 개선했고, 정상 광고 요청에 영향을 주지 않으면서 **전체 요청량을 약 20% 줄였습니다.**

### 3. AWS 리소스 및 비용 최적화

광고 트래픽과 서버 사용량을 확인하며 AWS 리소스를 운영했습니다.

실제 사용량에 따라 Scale-up / Scale-out을 적용해 **인프라 비용을 약 20% 절감**했습니다.

### 4. 소셜 미디어 데이터 수집 Batch 개발 및 운영

광고 성과 분석에 필요한 콘텐츠 데이터를 확보하기 위해 **YouTube, Instagram, Facebook 데이터를 자동 수집하는 JSoup 기반 Batch**를 개발하고 운영했습니다.

- 수집 Job **3분 주기** 실행
- 수집 데이터를 정규화해 DB에 저장
- 중복 수집 방지 체크 로직 추가
- 실패 감지를 위한 로그 보강
- YouTube IP 차단, Instagram DOM 변경 등 외부 변화 발생 시 반복 테스트와 로그로 실패 지점 추적
- 페이지 구조 변경에 맞춰 수집 로직 수정
- 수집 정확도 **90% 이상 유지**

외부 플랫폼의 변경에 영향을 받는 데이터 수집 시스템을 운영하면서 실패를 빠르게 감지하고 수정할 수 있는 흐름을 유지했습니다.

---

# Personal Project

## MSA 기반 커머스 주문 플랫폼

**Spring Boot · Java · Kafka · Redis · PostgreSQL · Docker · AWS · JPA · QueryDSL · GitHub Actions · Grafana · Loki**

실무에서 사용하거나 학습한 기술을 직접 구성해 검증하기 위해 MSA 기반 주문 플랫폼을 개발했습니다.

- Kafka 기반 서비스 간 비동기 이벤트 처리
- 주문 상태별 트랜잭션 로직 분리
- Gateway / Header 기반 사용자 인증 구조
- DDD + Layered Architecture 적용
- Docker 기반 로컬 실행 환경과 Seed Data 구성
- GitHub Actions 기반 CI/CD
- Grafana / Loki 기반 로그 확인 및 Slack 알림

![MSA 주문 및 모니터링 시스템 아키텍처](https://dev-wonny.github.io/engineering-notes/resume/assets/msa.webp)

회사에서 실제 운영한 기술과 개인 프로젝트에서 직접 구성해 검증한 기술은 구분해서 정리하고 있습니다.

---

# AI Agent 활용

개발 과정에서 AI Agent를 적극적으로 활용하고 있습니다.

- 기존 코드 탐색, 반복 구현, 문서 분석에 AI 활용
- 프로젝트의 코드 컨벤션·아키텍처 제약·검증 기준을 재사용 가능한 지침과 커스텀 스킬 형태로 정리
- 생성 결과를 그대로 반영하지 않고 실제 코드·데이터·테스트 결과와 비교
- 현재 Batch 검증에서도 기존 서비스 정책과 신규 구현의 차이, 데이터 정합성 문제를 AI와 함께 탐색하고 직접 검증·수정

AI를 코드 생성 속도를 높이는 도구로만 사용하기보다, 반복되는 분석과 구현 작업을 맡기고 개발자는 정책과 검증 기준을 명확하게 관리하는 방식으로 사용하고 있습니다.

---

# Education

**한성대학교**  
행정학과 주전공 · 멀티미디어공학과 부전공  
2016년 졸업 · 3.63 / 4.0

---

## Related Engineering Notes

- [Batch Platform 재설계 및 정책 검증](/resume/cases/batch-validation/)
- [Commerce Product Domain Migration](/resume/cases/commerce/)
- [Legacy Image Migration](/resume/cases/image-migration/)
- [Event Platform](/resume/cases/event-platform/)
