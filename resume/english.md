---
title: English Resume
description: Jeongwon Han — Backend / Platform Engineer with experience in commerce, global gaming, AdTech, and public-sector systems.
outline: false
pageClass: english-resume-page
---

# JEONGWON HAN

<img src="../assets/images/hanjeongwon.jpeg" alt="Jeongwon Han profile photo" width="144" style="border-radius: 18px; margin: 8px 0 18px;" />

**Backend / Platform Engineer**  
Seoul, South Korea  
[devwonny@gmail.com](mailto:devwonny@gmail.com) · +82 10-9475-0201 · [GitHub](https://github.com/dev-wonny) · [Korean Resume](/resume/index.html)

## Professional Summary

Backend and platform engineer with **5+ years of experience** across e-commerce, global gaming, AdTech, and public-sector systems. Background in Java/Spring development, AWS service operations, batch processing, and data-migration analysis, including a global gaming service with approximately **1.23M DAU**. Investigates system behavior through code, APIs, data, and logs, and works with engineering, product, operations, and external partners to clarify requirements, explain technical trade-offs, and validate proposed changes.

## Professional Experience

### DS GLOBAL

**Backend / Platform Engineer, Development Team** · **Jan 2026 – Present**  
Backend development for the rebuilding and in-house operation of Dolfarmer, a fresh-food e-commerce platform.  
[Company / Service Website](https://www.dolfarmer.com)

#### Batch Development, Platform Improvements & Policy Validation
**Aug 2026 – Present**  
Spring Batch · Airflow · AWS EC2 · ECS Fargate · PostgreSQL · MyBatis · Docker · LocalStack

- Initially investigated unclear business rules and implementation defects across Quartz schedules, Spring Batch jobs, APIs, and database state, and coordinated correction requests with the external development vendor and internal development lead.
- **Now directly developing and fixing Spring Batch jobs to meet the project timeline**, implementing clarified business rules and correcting aggregation conditions by comparing source data, batch logic, and output tables.
- Proposed separating scheduling from the backend application using Jenkins or Airflow. Work with the resulting **Airflow on EC2 → ECS Fargate → Spring Batch** structure, where jobs run as on-demand tasks rather than an always-on batch service.
- Recommended query-oriented processing to address JPA persistence-context memory and flush/clear management concerns; the team selected MyBatis. Also proposed consistent time-zone settings across the scheduler, application, and database.
- Validate execution behavior across a portfolio of **40+ batch jobs**, including reruns, retries, backfills, partial failures, and duplicate processing, using a **Docker / PostgreSQL / LocalStack** environment. Development and validation remain ongoing.

[Case study: Batch validation (Korean)](/resume/cases/batch-validation/)

#### Commerce Product Domain Analysis & Migration Criteria
**Jul 2026**  
MSSQL · PostgreSQL

- Analyzed legacy and target data structures, including a legacy MSSQL system with **500+ tables**, to define product and supplier mapping criteria for the new PostgreSQL platform.
- Distinguished customer-facing product-page data in **Weed** from product data in **Baljumoa**, a separate ordering, delivery, and settlement SaaS where supplier relationships could vary by period and operating policy.
- Identified **1:1, 1:N, and N:1 relationships** and documented mapping rules and exceptions using business registration numbers, company names, and product codes.
- Proposed separating display and supply domains and separately documented a display / supply / marketplace model. Recorded identifier risks under the retained single-Product model and handed over criteria and unresolved cases to the engineers responsible for migration execution.

[Case study: Product-domain analysis (Korean)](/resume/cases/commerce/)

#### Legacy Image Analysis, Migration Scripts & Delivery Policy
**Jul 2026**  
MSSQL · PostgreSQL · Amazon S3 · CloudFront

- Compared legacy database records and HTML with actual storefront screens to recover inconsistent image-path and display rules, and agreed preservation requirements with product stakeholders.
- Wrote database-driven image-backup and migration-validation scripts; checked **15,736 source images, 73,401 resulting images, and 5,053 HTML URL replacements** as migration reference data and validation results.
- Defined separate migration and long-term operating paths, temporary-upload promotion, UUID naming, original preservation, and **1000px / 600px / 100px** resizing rules with aspect-ratio preservation and no upscaling.
- Compared external service examples and aligned an implementable S3 / CloudFront delivery policy with the external development vendor. Reviewed Lambda-based resizing as an option with the development lead, discussing expected call volume and cost.

[Case study: Image migration and policy (Korean)](/resume/cases/image-migration/)

#### Event Platform Development
**Mar 2026 – Apr 2026**  
Java · Spring Boot · AWS ECS (EC2) · Aurora · S3

- Developed backend APIs for attendance, random-reward, and raffle-style events, including participation records, reward processing, and administrative operations.
- Discussed event-specific domain models and implemented the agreed database structure under the team's final constraints.
- Participated in application deployment and operation on ECS/EC2, using the team's existing AWS delivery environment.
- Supported a seven-day birthday campaign with **10,950 entries, 6,305 participating members, and 212 members participating in every round**.

![Dolfarmer birthday campaign interface](/resume/assets/event-verified.webp)

*Dolfarmer birthday campaign — customer-facing event screen. Backend contribution: event participation, reward processing, and administrative APIs.*

[Case study: Event platform (Korean)](/resume/cases/event-platform/)

---

### Future Platform

**Service Development Team Lead** · **Jun 2025 – Dec 2025**  
Public-sector backend development and team delivery-process improvements.  
[Food Safety Korea](https://www.foodsafetykorea.go.kr/main.do)

#### Public-sector Backend, SSO & Development Environment
**Jun 2025 – Dec 2025**  
Java 8 · Spring 4.x · MyBatis · Oracle · JBoss EAP 7.4 · Docker · Jenkins · Nexus

- Developed education management, reviewer performance management, and crisis-response volume visualization for Ministry of Food and Drug Safety projects; implemented **AnyID integrated login / SSO**.
- Documented local execution and deployment procedures in a closed-network environment and standardized Nexus dependency-version management, reducing development-environment setup time by approximately **two weeks**.
- Built an internal onboarding and work-management back office in **one day**, and introduced code reviews and technical discussions to improve team collaboration.
- Deployed self-hosted **Matomo on Google Cloud** to support usage analysis before and after UI/UX changes, providing an alternative to external analytics SaaS under the project's data-governance constraints.
- Coordinated requirements, implementation questions, and delivery with developers, project planners, and business stakeholders.

[Analytics implementation notes (Notion, Korean)](https://www.notion.so/29a47d0245aa804783dbca0ff82ebed3)

---

### DoubleDown Interactive

**Backend Engineer (Manager), Service Development Team** · **Oct 2022 – Apr 2024**  
Worked on backend services for a global social casino gaming service with approximately **1.23M DAU**.  
[Company Website](https://www.doubledowninteractive.com)

#### Game Service APIs & Production Operations
**Oct 2022 – Apr 2024**  
Java · Spring Boot · MySQL · Redis · AWS EC2 / ECS

- Designed and developed game-service APIs for **Wonder Card, Dice Master, and Super High Limit Game (roulette)**, together with game-operation administrative tools.
- Created and deployed application service environments on EC2/ECS, verified service health, and investigated production issues through application logs and runtime state.

#### Inbox Advertising Refactoring
**Dec 2023 – Jan 2024**  
Java · Spring · MySQL · EC2 · Docker · ELK

- Separated advertising collection, filtering, and serving with the **Strategy Pattern** and centralized priority and routing rules so product and advertising teams could configure campaign conditions with less developer intervention.
- Changes contributed to approximately **25% higher CTR**, based on advertising-team measurement, and **30% less operational management time**.

#### Internal Deeplink & Short URL Platform
**Oct 2023 – Dec 2023**  
Java · Spring · DynamoDB · Redis · ECS · Docker

- Built an internal Deeplink platform to replace Bitly, using **DynamoDB for persistence** and **server-side local caching with TTL-based expiration**, reducing **DynamoDB access by approximately 30%**.
- Served frequently accessed deeplinks from the application server's local cache without querying DynamoDB while the cache entry remained valid. After expiration, the next request reloaded the deeplink from DynamoDB and refreshed the cache.
- Implemented duplicate prevention and administrative search and deletion, enabling non-engineering teams to manage routine links directly.

#### Marketing Email Automation
**Jun 2023 – Aug 2023**  
Java · Spring Batch · Slack · Admin UI

- Integrated template management, recipient selection, deeplink generation, and send requests into an administrative workflow with Spring Batch automation and Slack status notifications.
- Reduced manual marketing-email processing time by approximately **90%**.

#### Player Level & Membership-tier Improvements
**Oct 2022 – Jan 2023**  
Java · Spring Boot · MySQL · Redis · AWS

- Implemented revised player-level and membership-tier rules, reward policies, and event integration to support progression for high-level players.
- Applied the new policies to the existing service and incorporated operational and user feedback.

---

### AdMax / FSN

**Backend Engineer (Manager), R&D Team** · **Jan 2020 – Aug 2022**  
Advertising Tracking and Fraud Detection System (FDS) development and operation for services in South Korea and Taiwan.  
[AdMax Website](https://www.ad-max.co.kr) · [FSN Website](https://www.fsn.co.kr)

#### Advertising Request Flow, Traffic Analysis & Infrastructure Cost
**Jan 2020 – Aug 2022**  
Java · Spring · EC2 · S3 · Athena · Route 53

- Developed and operated advertising tracking and click-processing services across approximately **12 servers**; investigated HTTP request, redirect, and log flows across AWS-hosted applications and advertising integrations.
- Used click logs and request patterns to identify unnecessary traffic from inactive campaigns, then coordinated changes with operations and DSP/SSP partners to stop obsolete requests at their source.
- Reduced unnecessary advertising requests by approximately **20%** and avoided unnecessary S3 log ingestion rather than treating server expansion as the default response.
- Compared scale-up and scale-out costs and selected scale-up, contributing to approximately **20% lower infrastructure cost**.

#### Tracking, FDS & Operational Automation
**Jan 2020 – Aug 2022**  
Java · Spring · JavaScript · Python · MySQL · MyBatis · Redis · Jenkins · AngularJS

- Installed JavaScript tracking SDKs, automated external data collection from YouTube, Instagram, and Facebook, and integrated APIs to update campaign volume and status.
- Developed FDS-related processing and operational back-office functions, including permission controls, data exports, and blacklist administration.
- Used S3 and Athena for log storage and analysis and introduced **Spring scheduled jobs with Telegram alerts** for campaign anomalies and recurring data-collection workflows.

## Personal Project

### Coopang — Microservices Commerce Platform
**Sep 2024 – Oct 2024**  
Spring Boot · Java · Kafka · Redis · PostgreSQL · Docker · AWS · JPA · QueryDSL · Grafana · Loki

- Designed a personal commerce project with gateway-based access and separate application services; explored header-based identity propagation inspired by Toss Passport.
- Implemented Kafka-based service integration and refactored order-state transaction logic, with domain-driven design, layered architecture, and shared modules.
- Configured Docker-based local integration testing and seed-data automation, and integrated **Grafana / Loki with Slack notifications** for monitoring and log investigation.

![Coopang personal project service and monitoring architecture](/resume/assets/msa.webp)

*Architecture of my personal learning project, showing service boundaries, Kafka messaging, data stores, and monitoring. Designed separately from production work.*

[Project Wiki](https://github.com/dev-wonny/coopang/wiki) · [Architecture Issue #80](https://github.com/dev-wonny/coopang/issues/80)

## Technical Skills

**Backend & Data:** Java · Spring / Spring Boot · Spring Batch · MyBatis · JPA · QueryDSL · PostgreSQL · MySQL · MSSQL · Oracle · Redis · DynamoDB  
**Cloud & Delivery:** AWS EC2 · ECS (EC2/Fargate) · ALB/ELB · S3 · CloudFront · Route 53 · CloudWatch · CodePipeline · CodeBuild · CodeDeploy · Docker · Jenkins · Nexus  
**Workflow & Troubleshooting:** Airflow · SQL-based validation · Retry / backfill / idempotency testing · ELK · Athena · LocalStack  
**Personal-project Technologies:** Kafka · GitHub Actions · Prometheus · Grafana · Loki

## Education

### Hansung University

**Bachelor's degree in Public Administration**  
Minor in **Multimedia Engineering**  
**Relevant Computer Science Coursework:** Data Structures, Operating Systems, C Programming  
Graduated **2016** · GPA: **3.63 / 4.0**

<style>
/* Keep this page's long site title from pushing navigation off mobile screens. */
@media (max-width: 767px) {
  .english-resume-page .VPNavBar .container > .title {
    min-width: 0;
    flex: 1 1 auto;
  }
  .english-resume-page .VPNavBarTitle,
  .english-resume-page .VPNavBarTitle .title {
    min-width: 0;
    max-width: 100%;
  }
  .english-resume-page .VPNavBarTitle .title span {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .english-resume-page .VPNavBar .content {
    flex: 0 0 auto;
  }
}
</style>
