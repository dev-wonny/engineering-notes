---
title: TVING Backend Engineer | 한정원
description: TVING Service Platform / API Platform 지원용 상세 경력 기술서
outline: [2, 3]
---

# 한정원

**Backend / Platform Engineer**  
**희망 도메인: Service Platform · API Platform**

Email. devwonny@gmail.com · GitHub. [github.com/dev-wonny](https://github.com/dev-wonny)

![한정원 프로필](https://dev-wonny.github.io/engineering-notes/resume/assets/profile.jpg)

Java/Spring 기반 백엔드 개발과 AWS 환경의 서비스 배포·운영을 경험해 온 엔지니어입니다.

기능 구현에 그치지 않고 **실제 데이터, 로그, 실행 환경과 운영 흐름을 함께 확인해 시스템의 동작을 검증**합니다. 반복적인 운영 업무는 자동화하고, 배포·Batch·로그·검증 환경처럼 여러 개발자가 더 안전하게 변경할 수 있는 기반을 만드는 일에 관심이 많습니다.

최근에는 외부 개발사가 구현한 기존 Batch와 AI 기반으로 재구성된 Batch Job을 인수해 **실제 데이터와 도메인 정책 기준으로 검증·수정**하고 있습니다. AI Agent를 개발 보조 도구로 활용하되, 생성된 코드가 비즈니스적으로 올바른지는 코드·원천 데이터·결과 데이터·재실행 테스트로 검증하는 방식을 중요하게 생각합니다.

---

## TVING에서 기여할 수 있는 경험

### AI-assisted Engineering

- AI 기반으로 구현된 Spring Batch Job을 기존 코드·실제 데이터·도메인 정책과 비교해 검증 및 수정
- 코드가 실행되는지보다 **올바른 데이터를 만들고 재실행해도 안전한지**를 기준으로 테스트
- Docker · PostgreSQL · LocalStack 기반 로컬 반복 검증 환경 구성
- AI Agent를 분석·구현 보조에 활용하고 결과를 사람이 정의한 테스트 기준으로 검증

### Backend / Service Platform

- Java · Spring Boot 기반 사용자 서비스 및 운영 기능 개발
- 공통 운영 기능, Batch, 내부 플랫폼과 반복 업무 자동화 경험
- CodePipeline · CodeBuild · CodeDeploy 기반 배포 파이프라인 운영
- ELK 및 애플리케이션 로그를 활용한 운영 상태 확인과 문제 분석

### API / Data

- 실제 사용자 트래픽이 발생하는 API 서비스 개발·배포·운영
- DAU 약 123만 규모 글로벌 게임 서비스의 EC2/ECS 기반 서비스 환경 생성·배포 및 운영 지원
- 커머스 원천 데이터와 신규 플랫폼 데이터를 비교하며 집계·마이그레이션 정책 검증
- PostgreSQL · MySQL · MSSQL · Oracle · Redis · DynamoDB 사용 경험

### AWS / Runtime

- EC2 · ECS(EC2) 기반 애플리케이션 실행 환경 생성·배포 경험
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

레거시 쇼핑몰을 신규 커머스 플랫폼으로 전환하는 과정에서 백엔드 개발과 AWS 실행 환경, Batch 시스템 검증, 데이터 마이그레이션과 운영 정책 정리를 담당하고 있습니다.

### 1. Batch Platform 재설계 및 AI 기반 구현 검증

**2026.07 — 진행 중**  
**Spring Batch · Airflow · AWS EC2 · ECS Fargate · PostgreSQL · MyBatis · Docker · LocalStack**

#### 배경

기존 외부 개발사 시스템은 장기 실행 ECS Service 내부의 Quartz Scheduler, `@Scheduled`, 수동 실행 API 등 여러 위치에 정기 작업이 분산되어 있었습니다. 이후 일부 Job이 AI를 활용해 Airflow / Spring Batch 구조로 재구성되었지만, 주문·회원·통계 정책과 실제 데이터 기준의 정확성 검증이 필요했습니다.

#### My Role

- 기존 Quartz / Spring Batch / API 기반 실행 구조와 Job 책임 분석
- 외부 스케줄링 구조를 제안하고 최종 Airflow 기반 실행 구조 검증
- AI 기반으로 구현된 Batch Job과 기존 시스템 로직 비교
- 원천 데이터·결과 데이터·화면/정책을 기준으로 예상 결과 정의
- 잘못된 상태값, 포함/제외 조건, 집계 기준 분석 및 Java/MyBatis 로직 수정
- 동일 기준일 재실행·실패 후 재실행·Backfill 시 중복/누락과 멱등성 검증
- Docker · PostgreSQL · LocalStack 기반 로컬 반복 검증 환경 구성
- Airflow 실행 파라미터와 애플리케이션/DB 시간 해석 차이 분석

#### Runtime

```text
Apache Airflow (EC2)
        ↓
      Schedule
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

Managed Airflow는 비용을 고려해 사용하지 않고 EC2에 Apache Airflow를 직접 구성했습니다. Spring Batch Job은 일부 실행 환경에서 ECS Fargate Task로 기동하고, Airflow에서 종료 상태를 확인하는 구조로 검증하고 있습니다.

#### Engineering Point

AI가 코드를 빠르게 생성하는 것과 **도메인 정책에 맞는 결과를 만드는 것**은 별개의 문제라고 봤습니다.

```text
기존 코드 + 원천 데이터 + 정책
              ↓
         예상 결과 정의
              ↓
      AI 기반 구현 실행
              ↓
         결과 데이터 비교
          ↙         ↘
       불일치       일치
         ↓           ↓
      로직 수정    재실행
          └────→ 멱등성 검증
```

예를 들어 회원·주문 집계 Job에서는 특정 원천 데이터만 출발점으로 사용할 경우 정상 회원의 0건 집계가 생성되지 않는 문제를 확인했습니다. 대상 집합과 집계 집합의 책임을 분리해 정상 회원 전체를 기준으로 결과를 보장하도록 수정하고, 실제 Fixture와 반복 실행으로 결과를 확인했습니다.

**상세:** [Batch Platform 재설계 및 정책 검증](/resume/cases/batch-validation/)

---

### 2. Event Platform 개발 및 운영

**2026.03 — 2026.04**  
**Spring Boot · PostgreSQL · Redis · AWS ECS(EC2) · ALB · CodePipeline · CodeBuild · CodeDeploy · ELK**

출석·랜덤 리워드·응모권 이벤트를 외부 솔루션에 의존하지 않고 직접 운영할 수 있도록 이벤트 플랫폼을 개발했습니다.

#### My Role

- 이벤트 참여 기록, 보상 처리와 운영 API 개발
- 출석·랜덤 리워드·응모권의 서로 다른 정책을 분석하고 도메인 모델 대안 제안
- 범용 이벤트 테이블의 Nullable 증가와 유형별 조건 분기 trade-off 설명
- 조직의 최종 데이터 모델 제약을 수용해 실제 구현 구조로 재조정
- ECS(EC2) 환경 배포 및 서비스 상태 확인
- ELK 기반 애플리케이션 로그 확인과 운영 이슈 대응

#### 운영 결과

- MAU 약 **16만**, DAU 약 **9,700** 환경에서 운영
- 7일 이벤트 총 응모 **10,950건**
- 참여 회원 **6,305명**
- 전체 회차 참여 회원 **212명**

![쇼핑몰 서비스 화면](https://dev-wonny.github.io/engineering-notes/resume/assets/shop.webp)

![AWS 배포 아키텍처](https://dev-wonny.github.io/engineering-notes/resume/assets/aws.webp)

**상세:** [Event Platform](/resume/cases/event-platform/)

---

### 3. Commerce Data Migration & Domain Analysis

**2026.06 — 진행**  
**MSSQL · PostgreSQL**

고객이 사용하는 판매/전시 시스템과 발주·배송·정산 시스템의 데이터를 신규 커머스 플랫폼으로 통합하는 과정에서 단순 컬럼 매핑보다 **각 데이터가 실제 비즈니스에서 어떤 책임을 갖는지**를 기준으로 분석했습니다.

#### My Role

- 레거시 DB와 신규 PostgreSQL 데이터 구조 비교
- 사업자번호·업체명·상품코드를 기준으로 매핑 규칙과 예외 정리
- 판매상품과 공급상품 사이의 1:1 / 1:N / N:1 실제 관계 분석
- 단일 Product 모델에서 발생 가능한 식별자·변경 책임 충돌 리스크 문서화
- 이미 진행된 최종 구조는 수용하되 향후 재설계를 위한 도메인 분리 근거 기록

이 경험을 통해 데이터 모델링에서 **같은 이름의 데이터가 반드시 같은 도메인을 의미하지 않는다**는 점을 중요하게 보고 있습니다.

**상세:** [Commerce Product Domain Migration](/resume/cases/commerce/)

---

### 4. Legacy Image Migration & Delivery Policy

**2026.07**  
**MSSQL · PostgreSQL · AWS S3 · CloudFront**

레거시 시스템의 이미지 저장·노출 규칙을 실제 DB 데이터와 화면을 대조해 역추적하고, 마이그레이션 검증 기준과 신규 운영 이미지 정책을 정리했습니다.

#### My Role / Result

- 상품·상세·배너 등 이미지 유형별 원천 데이터와 실제 화면 비교
- 원본 **15,736건**, 결과 이미지 **73,401건**, HTML URL 치환 **5,053건** 검증
- 마이그레이션 추적용 경로와 신규 운영 경로의 목적 분리
- 원본 보존, UUID 기반 파일명, Temp → 운영 경로 전환 기준 정리
- 1000px / 600px / 100px Resize, 비율 유지, 확대 금지 등 전달 정책 정리

**상세:** [Legacy Image Migration](/resume/cases/image-migration/)

---

## DoubleDown Interactive

**서비스개발팀 매니저**  
**2022.10 — 2024.04**

DAU 약 **123만** 규모의 글로벌 게임 서비스에서 백엔드 개발과 AWS 서비스 환경 생성·배포, 내부 운영 플랫폼과 반복 업무 자동화를 담당했습니다.

### Global Service Backend & Operations

#### My Role

- EC2/ECS 기반 서비스 환경 생성 및 애플리케이션 배포
- 배포 후 서비스 상태와 애플리케이션 로그 확인, 운영 이슈 대응
- 외부 URL 서비스에 의존하던 Deeplink 기능을 내부 서비스로 전환
- Local Cache를 적용해 DynamoDB 접근량 약 **30% 감소**
- 사이트별 수동 이메일 발송 업무를 Spring Batch로 자동화해 반복 작업 시간 약 **90% 감소**
- 광고 수집·필터링·우선순위·노출 로직 구조화

#### Result

- 광고팀 측정 지표 기준 광고 CTR 약 **25% 향상**
- 반복적인 이메일 운영 업무 자동화
- 외부 서비스 의존 기능을 내부 플랫폼으로 전환해 운영 통제 범위 확대

이 경험에서 애플리케이션 기능뿐 아니라 **배포, 상태 확인, 로그, 운영자의 반복 업무까지 하나의 서비스 운영 문제로 보는 방식**을 익혔습니다.

---

## Future Platform

**서비스개발팀 팀장**  
**2025.06 — 2025.12**

식품의약품안전처 폐쇄망 정보시스템 프로젝트에서 Java/Spring 기반 백엔드 개발, 인증 연계, 개발·배포 환경 정비와 팀 협업을 담당했습니다.

### Public System Backend & Development Environment

#### My Role

- Java 8 · Spring 4.x · MyBatis 기반 백엔드 기능 개발
- JBoss EAP 7.4 환경 배포
- AnyID 기반 공공기관 통합로그인 SSO 개발
- Docker · Jenkins · Nexus 기반 개발/빌드 환경과 의존성 관리 기준 정리
- 개발·기획·사업 관계자 간 요구사항과 진행 상황 조율
- 신규 구성원이 시스템을 빠르게 실행할 수 있도록 개발환경과 온보딩 문서 정비

---

## AdMax / FSN

**R&D팀 매니저**  
**2020.01 — 2022.08**

글로벌 디지털 마케팅 환경에서 한국·대만 서비스의 광고 Tracking 및 FDS 시스템 개발·운영과 데이터 수집 자동화를 담당했습니다.

### Advertising Tracking / FDS Platform

#### My Role / Result

- 약 12대 서버의 광고 요청·클릭 트래픽 처리 및 로그 분석
- Request Pattern을 분석해 불필요 요청 약 **20% 감소**
- 사용량에 따른 Scale-up / Scale-out으로 AWS 비용 약 **20% 절감**
- YouTube · Instagram · Facebook 데이터 자동 수집 및 운영 알림 연동
- 광고 Tracking/FDS 시스템 개발·운영

---

# Personal Project

## MSA 기반 커머스 주문 플랫폼 — Coopang

**2024.09 — 2024.10**  
**Spring Boot · Java · Kafka · Redis · PostgreSQL · Docker · AWS · JPA · QueryDSL · Grafana · Loki**

실무 외에도 서비스 분리, 비동기 이벤트 처리와 Observability 구조를 직접 구성해 보기 위해 진행한 개인 프로젝트입니다.

- 토스 Passport 구조를 참고한 Header 기반 내부 인증 흐름 설계
- Kafka 기반 서비스 분리 및 주문 상태별 트랜잭션 로직 리팩토링
- DDD + Layered Architecture 적용 및 공통 모듈 분리
- Loki · Grafana · Slack 알림을 이용한 로그/모니터링 체계 구성
- Docker 기반 개발환경 및 Seed Data 자동화
- 개인 프로젝트에서 GitHub Actions · Prometheus · Grafana · Loki 기반 CI/관측성 환경 학습·검증

![MSA 주문 및 모니터링 아키텍처](https://dev-wonny.github.io/engineering-notes/resume/assets/msa.webp)

[GitHub Wiki](https://github.com/dev-wonny/coopang/wiki)

---

# How I Work

### Observe

코드만으로 결론을 내리지 않고 실제 데이터, 로그, 화면, 실행 환경을 함께 확인합니다.

### Define

정책과 시스템 동작이 어긋나는 지점을 먼저 정의하고 예상 결과를 명확하게 만듭니다.

### Design Options

하나의 정답을 주장하기보다 대안과 trade-off, 변경 영향을 비교해 설명합니다.

### Align

개발·기획·운영·외부 개발사와 기술적인 문제와 선택지를 공통 언어로 정리합니다.

### Validate

첫 실행의 성공보다 실제 결과와 재실행 안전성까지 확인합니다.

---

# Education

**한성대학교**  
행정학과 주전공 · 멀티미디어공학과 부전공  
2016년 졸업 · 3.63 / 4.0

---

## Related Engineering Notes

- [Batch Platform 재설계 및 정책 검증](/resume/cases/batch-validation/)
- [Event Platform](/resume/cases/event-platform/)
- [Commerce Product Domain Migration](/resume/cases/commerce/)
- [Legacy Image Migration](/resume/cases/image-migration/)
