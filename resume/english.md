---
title: English Resume
description: Jeongwon Han — Backend & Cloud Engineer / Production Problem Solver
outline: false
---

# JEONGWON HAN

<img src="https://avatars.githubusercontent.com/u/161826579?v=4" alt="Jeongwon Han profile photo" width="144" style="border-radius: 18px; margin: 8px 0 18px;" />

**Backend & Cloud Engineer · Production Problem Solver**  
Seoul, South Korea

> **Diagnose · Structure · Solve**  
> I turn ambiguous production problems and operational constraints into clearly defined, practical solutions.

## Professional Summary

Backend and cloud engineer with **5+ years of experience** building, operating, and troubleshooting production systems across application, data, batch processing, advertising traffic, and AWS infrastructure layers.

I am most effective when the problem is not yet clearly defined. I investigate what is actually happening through logs, APIs, databases, runtime behavior, infrastructure, and business workflows; separate symptoms from root causes; and turn the findings into actions that engineering, product, operations, and external partners can execute.

My experience spans **AdTech, a global gaming service, government systems, and e-commerce**. Across these environments, the recurring theme has been the same: identify unnecessary complexity or load, understand the real constraint, and design a solution that fits the operating environment rather than defaulting to the most obvious technical answer.

## Selected Impact

- **25% increase in advertising CTR** by restructuring advertising collection, filtering, prioritization, and serving logic.
- **90% reduction in manual email operations** by automating repetitive marketing workflows with Spring Batch.
- **20% reduction in unnecessary advertising requests** by analyzing request patterns and click logs and removing traffic that no longer produced meaningful value.
- **20% reduction in AWS cost** by matching infrastructure capacity to actual usage through scale-up / scale-out decisions.
- Reduced **DynamoDB access by approximately 30%** through local caching in an internal Deeplink platform.
- Analyzed and validated **40+ production batch jobs** across commerce domains with a focus on retries, duplicate processing, idempotency, and backfill safety.
- Validated migration rules and data consistency for a legacy commerce system containing **500+ MSSQL tables**.
- Built and operated an event platform serving approximately **160K MAU**, including performance validation with **1M synthetic product records**.

## Core Strengths

**Production Troubleshooting**  
Root-cause analysis across application, database, batch, cache, infrastructure, traffic, and operational workflows.

**Problem Framing & Solution Design**  
Turning unclear requirements, abnormal metrics, and technical constraints into testable hypotheses and practical architectures.

**Cloud & Origin-side Operations**  
Hands-on experience with AWS execution environments, deployment, monitoring, troubleshooting, and service operations behind ALB/ECS-based architectures.

**Technical Communication**  
Converting technical findings into concrete actions across engineering, product, QA, operations, government-project stakeholders, and external vendors or partners.

---

# Professional Experience

## DS GLOBAL

**Backend / Platform Engineer** · **Jan 2026 — Present**  
Vertical fresh-food e-commerce company operating **Dolfarmer**, an agricultural and food commerce platform in South Korea.  
[Company / Service Website](https://www.dolfarmer.com)

### Commerce Platform Migration & System Validation · 2026 — Present

- Led technical validation for the migration of a legacy commerce platform into a new PostgreSQL-based architecture, analyzing source data from a legacy MSSQL database containing **500+ tables**.
- Identified ambiguous mapping rules and data inconsistencies across products, suppliers, pricing, shipping, reviews, and related commerce domains.
- Treated migration as more than data copying: clarified **domain meaning, ownership, mapping rules, validation criteria, and failure cases** between legacy and target systems.
- Converted unclear requirements into reproducible SQL checks, API scenarios, and QA cases that could be shared across backend engineers, product teams, and an external development vendor.

### Production Batch Reliability · Aug 2026 — Present

- Analyzed and validated **40+ production batch jobs** across order, settlement, promotion, shopping, statistics, and backbone domains.
- Reviewed not only whether jobs completed successfully, but whether they remained safe under **retry, rerun, backfill, partial failure, duplicate execution, and external-call failure** scenarios.
- Identified duplicate-processing and idempotency gaps as well as overlapping job responsibilities in coupon and membership workflows.
- Traced business rules across scheduler definitions, Spring Batch jobs, APIs, and database state to distinguish implementation defects from ambiguous policy.

### Event Platform · Feb 2026 — Apr 2026

- Developed and operated an event platform supporting attendance, random-reward, and entry-based campaigns.
- Deployed and operated services in **AWS ECS on EC2** environments with production monitoring and troubleshooting responsibilities.
- Validated system behavior using **1M synthetic product records** before rollout.
- Supported a production service reaching approximately **160K monthly active users**.

### AWS Production Operations · Jan 2026 — Present

- Created, deployed, and operated backend service environments using **ECS on EC2, EC2, ALB, RDS, Redis, S3, CloudWatch**, and AWS-native CI/CD services.
- Worked with **CodePipeline, CodeBuild, and CodeDeploy** for production delivery.
- Investigated issues across application logs, API behavior, database state, cache, deployment status, and AWS infrastructure rather than treating the application layer as the only possible failure point.

---

## Future Platform

**Service Development Team Lead** · **Jun 2025 — Dec 2025**  
Enterprise software company delivering application-development projects, including public-sector information systems.

### Self-hosted Analytics Under Government Security Constraints · 2025

- Worked on a government information-system project operating under **closed-network and strict data-governance constraints**.
- Identified that Google Analytics was not an appropriate fit because stakeholders were concerned about service and usage data being transmitted to an external SaaS provider.
- Instead of giving up analytics capability, designed and deployed a **self-hosted Matomo analytics environment** on a dedicated server.
- Built analytics dashboards and reporting data while keeping collection under project control.
- Simplified frontend integration so client developers only needed to call the internal analytics service rather than directly integrating with an external analytics platform.
- Delivered a practical alternative that preserved **usage visibility while respecting privacy, network, and governance requirements**.

### Public-sector Backend & Technical Leadership · Jun 2025 — Dec 2025

- Developed backend services using **Java 8, Spring 4.x, MyBatis, and JBoss EAP 7.4** in a legacy enterprise environment.
- Implemented **Any-ID based public-sector integrated login / SSO** functionality.
- Worked with Docker, Jenkins, and Nexus-based development and build environments.
- Coordinated requirements and delivery across developers, planning, and business stakeholders while working within legacy technology and deployment constraints.

---

## DoubleDown Interactive

**Service Development Manager / Backend Engineer** · **Oct 2022 — Apr 2024**  
Global digital gaming company operating consumer gaming services across international markets, including the United States. I worked in a production environment serving approximately **1.23M DAU**.  
[Company Website](https://www.doubledowninteractive.com)

### Global Production Operations · 2022 — 2024

- Developed and operated backend services for a large-scale global gaming environment where deployment stability, service visibility, and production troubleshooting were part of normal engineering ownership.
- Created and deployed service environments on **AWS EC2/ECS**, checked service health and application logs, and responded to production issues beyond feature implementation.
- Gained practical experience thinking about systems serving users outside a single domestic environment, especially in a service with a significant U.S. user base.

### Internal Deeplink & Short URL Platform · 2023 — 2024

- Replaced dependence on an external Short URL / Deeplink service with an internally operated platform.
- Designed lifecycle management using **DynamoDB TTL**, duplicate-prevention logic, and local caching.
- Reduced **DynamoDB access by approximately 30%** through local caching.
- Created operational tooling so non-engineering teams could manage routine links without repeated developer intervention.
- Turned an external dependency and recurring operational task into a reusable internal platform.

### Advertising & Marketing Platform Improvement · 2023 — 2024

- Restructured advertising collection, filtering, prioritization, and serving logic into a more maintainable architecture.
- Worked across engineering, product, and advertising operations to centralize fragmented campaign rules.
- The changes contributed to an approximately **25% increase in advertising CTR**, based on advertising-team measurement.
- Automated repetitive site-by-site marketing email workflows with **Spring Batch**, reducing manual work by approximately **90%**.

---

## AdMax / FSN

**R&D Manager / Backend Engineer** · **Jan 2020 — Aug 2022**  
AdTech and digital marketing business operating advertising tracking, data collection, campaign, and performance-marketing systems within the DSP/SSP ecosystem.  
[Company Website](https://www.fsn.co.kr)

### Advertising Traffic Diagnosis & Optimization · 2020 — 2022

- Operated advertising request and click-processing workloads across approximately **12 servers** and investigated increasing click-server traffic through request patterns and logs.
- Noticed that request volume was growing while meaningful conversion traffic was not increasing proportionally.
- Traced click logs and found traffic continuing to arrive from **inactive campaigns** that no longer produced meaningful business value.
- Coordinated with internal operations teams to disable obsolete campaign settings and asked downstream **DSP/SSP partners** to stop generating unnecessary requests at their source.
- Reduced unnecessary requests by approximately **20%** rather than treating additional server capacity as the default solution.
- Optimized infrastructure capacity according to actual usage, contributing to approximately **20% lower AWS cost** through scale-up / scale-out decisions.

### Data Collection & Operational Automation · 2020 — 2022

- Developed advertising tracking and fraud-detection-related systems and automated data collection from platforms including **YouTube, Instagram, and Facebook**.
- Added operational notifications and monitoring around recurring data-collection workflows.
- Developed an early habit of asking a core production question before scaling infrastructure: **Is this traffic actually worth processing?**

---

# Technical Skills

### Cloud / Infrastructure
AWS EC2 · ECS (EC2/Fargate) · ALB/ELB · S3 · CloudFront · Route 53 · CloudWatch · RDS · DynamoDB · ACM

### Backend
Java · Spring · Spring Boot · Spring Security · Spring Batch · MyBatis · JPA · QueryDSL

### Data
PostgreSQL · MySQL · MSSQL · Oracle · Redis · DynamoDB

### Messaging / Workflow
Kafka · RabbitMQ · Airflow

### Delivery / Operations
Docker · AWS CodePipeline · CodeBuild · CodeDeploy · Jenkins · ELK · LocalStack

### Observability — Personal Projects
Prometheus · Grafana · Loki · GitHub Actions

---

# Education

## Dongyang Mirae University

**Associate Degree in Computer Software Engineering** · **Mar 2014 — Feb 2016**

---

# How I Work

### 1. Observe
I look at actual data, logs, runtime behavior, APIs, UI behavior, and infrastructure rather than relying only on documentation or source code.

### 2. Define
I separate the visible symptom from the actual problem and make the success/failure criteria explicit.

### 3. Design Options
I compare technical alternatives, trade-offs, operational impact, security constraints, and implementation cost.

### 4. Align
I communicate findings with the people who can act on them — engineers, product teams, operations, external vendors, or infrastructure partners.

### 5. Execute
I turn the analysis into a change that can actually be deployed and operated under the real constraints of the environment.

### 6. Validate
I verify the result using real data and failure/retry scenarios rather than assuming that one successful execution proves correctness.

---

## Positioning for Solutions Engineering

Most of my career has been spent on the **origin side of Internet services** — applications, containers, load balancers, databases, caching, deployment, traffic-processing systems, and production operations.

Across advertising, gaming, government, and commerce environments, I repeatedly found myself solving problems that crossed technical and operational boundaries: filtering traffic that should never have consumed application capacity, replacing SaaS products that did not fit security constraints, reducing external-service dependency, automating operational workflows, and validating complex distributed business processes.

I now want to extend that production experience toward **Internet infrastructure, networking, security, and edge technologies**, where many of the same problems can be identified and solved earlier in the request path.
