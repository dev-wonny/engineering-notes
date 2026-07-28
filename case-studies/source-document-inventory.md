# 공개 전환 후보 인벤토리

## 핵심 요약

원본 Markdown을 공개 저장소로 복사하지 않고, 기술적으로 독립된 문서로 다시 쓸 수 있는 주제만 선별했습니다.

원본 경로와 파일명에도 조직·서비스·개인 식별 정보가 포함될 수 있으므로 이 공개 인벤토리에서는 `Source A-01` 형식의 별칭을 사용합니다. 별칭은 원문을 추적하기 위한 공개 식별자가 아니라, 조사 중 중복과 활용 범위를 구분하기 위한 분류입니다.

## 조사 범위

| 소스 그룹 | 성격 | 확인 결과 |
|---|---|---|
| Source A | 설계·운영 조사 문서 모음 | Markdown 206개 확인 |
| Source B | 백엔드 검토 저장소 | Markdown 55개 확인 |
| Source C | 프런트엔드 검토 저장소 | Markdown 1,164개 확인 |
| Source D | 쇼핑몰 프런트엔드 검토 저장소 | Markdown 20개 확인 |
| Source E | 추가 조사 대상으로 지정된 저장소 | 현재 로컬 경로에서 확인되지 않음 |

파일 수가 많은 Source C는 생성물과 컴포넌트 설명을 전부 읽지 않고, 요청 주제와 일치하는 문서만 제목·키워드·문맥으로 선별했습니다.

## 선별 결과

평가는 `높음`, `중간`, `낮음`의 상대 등급입니다. 민감정보 위험이 높아도 기술 주제만 새로 구성할 가치가 있으면 공개 전환 가치는 높을 수 있습니다.

| 원본 파일 | 핵심 주제 | 공개 전환 가치 | 민감정보 위험 | 추천 대상 경로 | 조치 |
|---|---|---:|---:|---|---|
| Source A-01 기간 이력 경계 분석 | 선분 데이터, 폐구간, 반개방 구간, 시간 정밀도 | 높음 | 높음 | `database/temporal-table/README.md` | 신규 공개 문서로 재작성 |
| Source A-02 PostgreSQL 기간 DDL 조사 | 날짜 컬럼, 제약조건, 인덱스 | 높음 | 높음 | `database/temporal-table/README.md` | 일부 내용만 활용 |
| Source A-03 두 이력 모델 비교 | 상태 복원 이력과 변경 감사 이력 | 높음 | 높음 | `case-studies/temporal-table-design.md` | 신규 공개 문서로 재작성 |
| Source A-04 인접 구간과 B-tree 분석 | 동일 경계값, 복합 인덱스, 범위 타입 | 높음 | 중간 | `database/index/temporal-index.md` | 일부 내용만 활용 |
| Source A-05 인접 구간 초기 분석 | B-tree, 범위 검색, 겹침 방지 | 중간 | 중간 | `database/index/temporal-index.md` | 중복으로 제외 |
| Source A-06 가격 저장 규칙 분석 | 기본 가격과 옵션별 가격, 현재 가격 조회 | 높음 | 높음 | `commerce/price/product-price-history.md` | 신규 공개 문서로 재작성 |
| Source A-07 상품·옵션·가격 관계 분석 | 상품, 옵션 조합, 가격 매핑 | 높음 | 높음 | `commerce/product/product-option-modeling.md` | 신규 공개 문서로 재작성 |
| Source A-08 회원가입 중복 분석 | 사전 확인과 DB 무결성, 동시 가입 | 높음 | 높음 | `commerce/member/signup-uniqueness.md` | 일부 내용만 활용 |
| Source A-09 인증 구조 분석 | Spring Security, 세션 경계, 소셜 로그인 | 중간 | 높음 | `architecture/authentication/login-boundaries.md` | 일부 내용만 활용 |
| Source A-10 본인 확인 식별자 조사 | 가입 식별자, 중복 확인, 보관 정책 | 중간 | 높음 | `commerce/member/identity-verification.md` | 내부 문서 유지 |
| Source A-11 배치·스케줄 구조 분석 | Spring Batch, Quartz, 스케줄러, Airflow 경계 | 높음 | 높음 | `backend/batch/spring-batch-without-jpa.md` | 신규 공개 문서로 재작성 |
| Source A-12 상품 피드 생성 분석 | CSV 인코딩, 파일 생성, 외부 전달 | 높음 | 중간 | `commerce/external-feed/product-feed-pipeline.md` | 신규 공개 문서로 재작성 |
| Source A-13 프런트엔드 배포 분석 | React, Vite, S3, CloudFront, SSR 구조 | 높음 | 높음 | `architecture/frontend-serving/react-vite-s3-cloudfront.md` | 신규 공개 문서로 재작성 |
| Source A-14 데이터베이스 전환 체크리스트 | 타입 변환, 리허설, 건수·관계·업무 검증 | 높음 | 낮음 | `case-studies/commerce-data-migration.md` | 신규 공개 문서로 재작성 |
| Source A-15 스키마 차이 분석 | 컬럼, 제약조건, 인덱스 차이와 검증 | 높음 | 높음 | `database/modeling/schema-diff.md` | 일부 내용만 활용 |
| Source A-16 상품 운영 품질 진단 | 동시성, 오류 모델, 로그와 추적성 | 높음 | 높음 | `infrastructure/observability/commerce-traceability.md` | 일부 내용만 활용 |
| Source A-17 상품 스키마 예시 | 상품, 옵션, 재고, 가격 모델링 | 높음 | 높음 | `commerce/product/product-option-modeling.md` | 일부 내용만 활용 |
| Source B-01 데이터베이스 성능 검토 | 조회 조건, 인덱스, 실행 계획 | 높음 | 높음 | `database/index/postgresql-index.md` | 일부 내용만 활용 |
| Source B-02 메시지 소비 구조 검토 | 이벤트 처리, 재시도, 제거 판단 | 중간 | 높음 | `architecture/event-driven/consumer-lifecycle.md` | 일부 내용만 활용 |
| Source C-01 프런트엔드 저장소 구조 | Next.js와 Vite의 역할·경계 비교 | 중간 | 높음 | `architecture/frontend-serving/nextjs-vs-vite.md` | 일부 내용만 활용 |
| Source D-01 상품 선택 흐름 | 프런트 상태와 상품 옵션 조합 | 중간 | 높음 | `commerce/product/product-option-modeling.md` | 일부 내용만 활용 |

## 요청 주제별 조사 상태

| 요청 주제 | 상태 | 비고 |
|---|---|---|
| Temporal Table | 후보 충분 | Source A-01~05를 독립 글로 재구성 |
| 선분 데이터와 History Table 차이 | 후보 충분 | Source A-03의 분류 관점만 활용 |
| 시간 정밀도와 `[start, end)` | 후보 충분 | Source A-01·04와 PostgreSQL 공식 문서로 재검증 |
| 상품 가격 이력 설계 | 후보 충분 | Source A-06·07을 일반 모델로 재구성 |
| 회원가입 및 중복 검증 | 후보 충분 | 개인정보와 실제 데이터는 사용하지 않음 |
| 본인 확인 식별자와 소셜 로그인 | 제한적 활용 | 법·정책 검토가 필요해 기술 구조만 후보로 유지 |
| Spring Batch | 후보 충분 | Source A-11과 Spring Batch 공식 문서로 재검증 |
| Airflow, Quartz, Scheduler 비교 | 후보 있음 | 운영 규모와 실행 책임을 분리해 새 문서 필요 |
| 외부 상품 피드 | 후보 있음 | 파일명·채널·저장 위치를 모두 일반화해야 함 |
| React·Vite·S3·CloudFront | 후보 충분 | Source A-13을 독립 배포 글로 재구성 |
| Next.js와 Vite 비교 | 후보 있음 | 프레임워크와 빌드 도구를 같은 축으로 오해하지 않도록 주의 |
| Redis 분산 락 | 직접 후보 부족 | 별도 재현 실험과 공식 자료 조사 후 작성 |
| PostgreSQL Index | 후보 있음 | 일반적인 인덱스 글로 만들려면 추가 실행 계획 필요 |
| 데이터 마이그레이션 검증 | 후보 충분 | Source A-14·15를 결합하지 않고 역할별로 분리 |
| 상품·옵션·가격 모델링 | 후보 충분 | 실제 테이블과 상품 데이터는 모두 폐기 |
| AWS ECS·ALB·CloudFront | 후보 있음 | 프런트 정적 경로와 동적 API 경로를 분리해 설명 |
| 운영 로그·예외 처리·추적성 | 후보 있음 | 실제 장애 규모와 내부 오류 메시지는 사용하지 않음 |

## 제외 기준

- 회의록, 일정, 담당자, 계약 관계가 중심인 문서
- 운영 자원 식별자와 실데이터가 문서 가치의 대부분인 자료
- 코드와 데이터베이스 덤프를 그대로 나열한 자료
- 같은 결론을 반복하는 초기본이나 복사본
- 현재 상태를 검증할 수 없고 추정만 남은 자료

## 다음 변환 순서

1. Temporal Table과 가격 이력
2. Spring Batch 기본 구조
3. React·Vite 정적 배포
4. 데이터 마이그레이션 검증
5. 상품·옵션 모델링
6. 회원가입 중복과 인증 경계
7. 외부 상품 피드와 운영 추적성
