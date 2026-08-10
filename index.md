---
layout: home

title: Jeongwon Han · Backend / Platform Engineer
titleTemplate: Engineering Notes

hero:
  name: Jeongwon Han
  text: Backend / Platform Engineer
  tagline: Java와 Spring 기반의 서비스 개발을 중심으로 커머스 시스템, AWS 환경, 데이터 마이그레이션과 Batch 시스템을 경험했습니다. 문제를 해결하며 얻은 설계 판단과 trade-off를 기록합니다.
  actions:
    - theme: brand
      text: Resume
      link: /resume/
    - theme: alt
      text: Engineering Notes
      link: /getting-started/about-this-site
    - theme: alt
      text: GitHub
      link: https://github.com/dev-wonny

features:
  - title: Backend & Platform
    details: Java, Spring을 중심으로 서비스 API와 공통 플랫폼 영역을 개발하고 운영합니다.
    link: /backend/
    linkText: Backend notes
  - title: Commerce & Data
    details: 상품·가격·회원 등 커머스 도메인과 데이터 이관, 정합성, 이력 모델링 문제를 다룹니다.
    link: /commerce/
    linkText: Commerce notes
  - title: AWS & Delivery
    details: AWS 기반 서비스 환경 구성과 배포, ECS 운영 경험에서 얻은 판단을 정리합니다.
    link: /infrastructure/
    linkText: Infrastructure notes
  - title: Case Studies
    details: 문제 → 대안 → 결정 → 결과와 trade-off 순서로 실제 경험을 일반화한 설계 사례입니다.
    link: /case-studies/
    linkText: Case studies
---

## Selected Engineering Notes

처음 방문했다면 아래 문서부터 읽어보는 것을 추천합니다.

- [Temporal Table과 반개방 구간](database/temporal-table/README.md) — 시간 이력 데이터에서 경계 중복을 피하는 방법
- [상품 가격 이력 설계](commerce/price/product-price-history.md) — 커머스 가격 이력을 모델링할 때의 판단
- [JPA 없이 구성하는 Spring Batch](backend/batch/spring-batch-without-jpa.md) — 대량 처리 관점에서 Batch 구성하기
- [React·Vite 정적 파일을 S3와 CloudFront로 제공하기](architecture/frontend-serving/react-vite-s3-cloudfront.md) — 프런트엔드 정적 배포 구조 이해하기

## What I Write About

| Area | Topics |
|---|---|
| Backend | Java, Spring, Batch, Security, API |
| Database | PostgreSQL, transaction, index, temporal data modeling |
| Commerce | Member, Product, Price, Order, Payment, Inventory |
| Architecture | System design, cache, event, authentication, frontend serving |
| Infrastructure | AWS, ECS, S3, CloudFront, Redis, observability |
| Case Studies | Problem solving, alternatives, decisions, results, trade-offs |
| Troubleshooting | Symptoms, investigation, root cause, prevention |

> 회사 내부 정보나 실제 인프라 식별자는 공개하지 않습니다. 실무 경험은 재현 가능한 일반 문제로 바꾸고, 단순 개념 설명보다 선택 이유와 trade-off를 중심으로 기록합니다.
