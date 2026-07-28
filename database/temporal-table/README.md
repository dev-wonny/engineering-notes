# Temporal Table과 반개방 구간

## 핵심 요약

- 변경 사실을 기록하는 History Table과 특정 시점에 유효한 값을 찾는 Temporal Table은 목적이 다릅니다.
- 연속된 기간은 `[start, end)`로 표현하면 경계 시각이 앞 구간에는 제외되고 다음 구간에는 포함됩니다.
- 현재 값 조회 규칙은 `start_at <= t AND t < end_at`입니다. 종료가 없는 구간은 `end_at IS NULL`을 함께 처리합니다.
- `다음 시작 - 1초` 또는 `다음 시작 - 1마이크로초` 방식은 조회 정밀도와 저장 정밀도가 바뀔 때 공백을 만들 수 있습니다.
- 인덱스는 실제 조회 패턴에 맞추고, 겹침 방지는 애플리케이션 검사만이 아니라 데이터베이스 제약으로 보강합니다.

## 문제 상황

커머스 데이터는 값 하나보다 값이 유효한 기간을 묻는 경우가 많습니다.

| 데이터 | 기간이 필요한 질문 |
|---|---|
| 가격 | 주문 시점에 적용할 판매가는 무엇인가? |
| 할인 | 캠페인이 시작되고 끝나는 정확한 시각은 언제인가? |
| 재고 정책 | 특정 기간에 예약 가능한 수량 규칙은 무엇인가? |
| 전시 | 어느 시각부터 상품을 화면에 노출하는가? |

현재 값만 덮어쓰면 과거 주문을 재현하기 어렵습니다. 변경 로그만 남기면 특정 시점의 유효 값을 계산하기 위해 로그를 다시 재생해야 할 수 있습니다. 기간 모델은 이 질문에 직접 답하도록 설계합니다.

## History Table과 Temporal Table

두 이름은 프로젝트마다 다르게 쓰이므로 이름보다 질문으로 구분하는 편이 안전합니다.

| 구분 | History Table | Temporal Table |
|---|---|---|
| 핵심 질문 | 누가 무엇을 어떻게 바꿨는가? | 시각 `t`에 어떤 값이 유효한가? |
| 대표 컬럼 | 이벤트 종류, 변경 전후 값, 변경자, 기록 시각 | 업무 키, 값, `start_at`, `end_at` |
| 조회 방식 | 시간순 이벤트 또는 감사 로그 조회 | 유효 구간 조건으로 한 행 조회 |
| 수정 방식 | 보통 append-only | 이전 구간 종료 후 새 구간 추가 |
| 주요 용도 | 감사, 원인 추적, 변경 이력 | 가격·정책 적용, 예약, 과거 시점 재현 |

하나가 다른 하나를 완전히 대체하지는 않습니다.

- 가격 기간 테이블은 주문 시점의 금액을 찾는 데 적합합니다.
- 별도의 변경 감사 기록은 운영자가 값을 바꾼 이유와 요청 맥락을 남기는 데 적합합니다.
- 주문에는 최종 적용 가격을 스냅샷으로 저장해야 결제 이후 가격 정책 변경과 분리할 수 있습니다.

이 문서에서 Temporal Table은 애플리케이션이 관리하는 유효 시간 모델을 뜻합니다. 특정 데이터베이스 제품의 자동 시스템 버전 관리 기능과 같은 의미로 한정하지 않습니다.

## 반개방 구간 `[start, end)`

`[`는 시작을 포함하고, `)`는 끝을 제외한다는 뜻입니다.

```text
구간 A: [09:00, 10:00)
구간 B: [10:00, 11:00)
```

`10:00`은 구간 A에는 포함되지 않고 구간 B에만 포함됩니다.

```sql
WHERE start_at <= :as_of
  AND :as_of < end_at
```

종료되지 않은 현재 구간을 `NULL`로 표현한다면 다음 조건을 사용합니다.

```sql
WHERE start_at <= :as_of
  AND (end_at IS NULL OR :as_of < end_at)
```

## 폐구간과 비교

| 표현 | 의미 | 인접 구간의 경계 |
|---|---|---|
| `[start, end]` | 시작과 끝을 모두 포함 | 같은 경계를 쓰면 두 구간이 동시에 유효 |
| `[start, end)` | 시작 포함, 끝 제외 | `이전 end = 다음 start`가 자연스럽게 연결 |

### 폐구간에서 중복이 생기는 경우

```text
A: [09:00:00, 10:00:00]
B: [10:00:00, 11:00:00]
```

`10:00:00`을 조회하면 A와 B가 모두 일치합니다.

### 끝에서 시간을 빼면 공백이 생기는 경우

```text
A: [09:00:00, 09:59:59]
B: [10:00:00, 11:00:00]
```

조회 값이 밀리초 정밀도라면 `09:59:59.500`은 어느 구간에도 포함되지 않습니다.

종료를 `09:59:59.999999`로 바꿔도 마찬가지입니다. 더 높은 정밀도의 입력이나 다른 저장소와의 변환이 개입하면 마지막 표현 가능한 값을 계속 다시 정의해야 합니다.

## `[start, end)`를 선택하는 이유

### 경계 소유권이 하나다

경계 시각은 다음 구간이 소유합니다. 같은 시각에 두 가격이 적용되는 모호함이 없습니다.

### 기간 길이 계산이 단순하다

기간 길이는 `end - start`입니다. 끝점을 포함하기 위한 보정값이 필요하지 않습니다.

### 정밀도에 덜 의존한다

`다음 시작 - 최소 시간 단위`를 계산하지 않으므로 초, 밀리초, 마이크로초 사이의 변환 규칙에 덜 의존합니다.

### 인접성 검증이 명확하다

이상적인 연속 구간은 `previous.end_at = current.start_at`입니다. 비교할 보정값이 없습니다.

## 시간 정밀도

PostgreSQL의 `timestamp`와 `timestamptz`는 마이크로초 해상도를 가지며, 선언 시 초의 소수 자릿수 정밀도 `p`를 0부터 6까지 지정할 수 있습니다.

| 선언 | 저장 예시 | 의미 |
|---|---|---|
| `timestamptz(0)` | `10:00:00+00` | 초 단위 |
| `timestamptz(3)` | `10:00:00.123+00` | 밀리초 단위 |
| `timestamptz(6)` | `10:00:00.123456+00` | 마이크로초 단위 |

정밀도를 높이는 것만으로 구간 모델이 올바르게 되지는 않습니다. 애플리케이션, 메시지 형식, 데이터베이스가 같은 규칙으로 시각을 직렬화하고 비교해야 합니다.

실제 순간을 나타내는 가격 적용 시각에는 보통 `timestamptz`가 안전합니다. 매장 영업일처럼 지역의 벽시계 시간이 업무 의미 자체라면 시간대 정책을 별도로 설계해야 합니다.

## 동작 원리

```mermaid
flowchart LR
    P1["2026-01-01<br/>10,000원 시작"]
    P2["2026-02-01<br/>11,000원 시작"]
    P3["2026-03-01<br/>9,500원 예약 가격 시작"]
    P1 --> P2 --> P3
```

데이터는 다음처럼 저장합니다.

| amount | start_at | end_at |
|---:|---|---|
| 10000 | 2026-01-01 00:00 | 2026-02-01 00:00 |
| 11000 | 2026-02-01 00:00 | 2026-03-01 00:00 |
| 9500 | 2026-03-01 00:00 | `NULL` |

`2026-02-01 00:00`에는 두 번째 행만 유효합니다.

## PostgreSQL 테이블 예제

다음 예제는 같은 상품의 유효 기간이 겹치지 않도록 범위 타입과 exclusion constraint를 사용합니다.

```sql
CREATE EXTENSION IF NOT EXISTS btree_gist;

CREATE TABLE product_price_period (
    id           bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    product_id   bigint NOT NULL,
    amount       numeric(19, 2) NOT NULL CHECK (amount >= 0),
    start_at     timestamptz(6) NOT NULL,
    end_at       timestamptz(6),
    valid_during tstzrange GENERATED ALWAYS AS (
        tstzrange(start_at, end_at, '[)')
    ) STORED,
    CHECK (end_at IS NULL OR start_at < end_at),
    EXCLUDE USING gist (
        product_id WITH =,
        valid_during WITH &&
    )
);
```

`end_at`이 `NULL`이면 범위의 위쪽 경계가 열려 있는 현재 구간으로 취급됩니다. `&&` 연산자는 두 범위가 겹치는지 검사합니다.

### 재현 데이터

```sql
INSERT INTO product_price_period
    (product_id, amount, start_at, end_at)
VALUES
    (1001, 10000, '2026-01-01 00:00:00+00', '2026-02-01 00:00:00+00'),
    (1001, 11000, '2026-02-01 00:00:00+00', '2026-03-01 00:00:00+00'),
    (1001,  9500, '2026-03-01 00:00:00+00', NULL);
```

다음 행은 기존 기간과 겹치므로 제약조건에 의해 거부됩니다.

```sql
INSERT INTO product_price_period
    (product_id, amount, start_at, end_at)
VALUES
    (1001, 10500, '2026-01-15 00:00:00+00', '2026-02-15 00:00:00+00');
```

## 조회 SQL

### 특정 시점의 값

```sql
SELECT id, product_id, amount, start_at, end_at
FROM product_price_period
WHERE product_id = 1001
  AND start_at <= '2026-02-01 00:00:00+00'
  AND (
      end_at IS NULL
      OR '2026-02-01 00:00:00+00' < end_at
  )
ORDER BY start_at DESC
LIMIT 1;
```

### 주어진 기간과 겹치는 값

```sql
SELECT id, product_id, amount, start_at, end_at
FROM product_price_period
WHERE product_id = 1001
  AND valid_during && tstzrange(
      '2026-01-20 00:00:00+00',
      '2026-02-10 00:00:00+00',
      '[)'
  )
ORDER BY start_at;
```

## 구간 변경 트랜잭션

현재 가격을 즉시 변경할 때는 이전 구간 종료와 새 구간 생성을 하나의 트랜잭션에서 수행합니다.

```sql
BEGIN;

SELECT pg_advisory_xact_lock(1001);

UPDATE product_price_period
SET end_at = '2026-02-15 09:30:00.123456+00'
WHERE product_id = 1001
  AND end_at IS NULL;

INSERT INTO product_price_period
    (product_id, amount, start_at, end_at)
VALUES
    (1001, 12000, '2026-02-15 09:30:00.123456+00', NULL);

COMMIT;
```

예제는 이해를 위해 상품 ID를 트랜잭션 락 키로 사용합니다. 실제 시스템에서는 한 업무 키의 변경을 직렬화할 수 있는 엔터티 행 잠금이나 일관된 락 키 정책을 선택해야 합니다. exclusion constraint는 마지막 방어선이며, 충돌 시 애플리케이션이 오류를 해석하고 재시도 여부를 결정해야 합니다.

## 인덱스 설계

### 특정 시점 조회가 중심인 경우

```sql
CREATE INDEX idx_product_price_period_lookup
    ON product_price_period (product_id, start_at DESC)
    INCLUDE (end_at, amount);
```

이 인덱스는 상품을 먼저 좁히고, 기준 시각 이전의 가장 최근 시작점을 찾는 조회에 맞습니다. `end_at` 조건은 잔여 필터가 될 수 있으므로 실제 데이터 분포와 실행 계획을 확인해야 합니다.

### 현재 값 조회가 매우 많은 경우

```sql
CREATE UNIQUE INDEX uq_product_price_period_open
    ON product_price_period (product_id)
    WHERE end_at IS NULL;
```

상품마다 열린 구간을 하나만 허용하면서 현재 값 조회도 빠르게 할 수 있습니다. 미래 예약 구간을 별도로 열어 두는 모델이라면 `end_at IS NULL`의 업무 의미부터 다시 정의해야 합니다.

### 기간 겹침 조회가 중심인 경우

DDL의 exclusion constraint가 생성하는 GiST 인덱스는 범위 겹침 검사에도 활용될 수 있습니다. B-tree와 GiST 중 하나가 항상 우월한 것은 아닙니다.

| 조회 패턴 | 우선 검토 |
|---|---|
| 한 상품의 특정 시점 값 | `(product_id, start_at DESC)` B-tree |
| 한 상품의 현재 열린 값 | 부분 인덱스 |
| 많은 기간의 겹침 검색 | 범위 타입과 GiST |

인덱스는 쓰기 비용과 저장 공간을 증가시킵니다. `EXPLAIN (ANALYZE, BUFFERS)`와 운영에 가까운 데이터 분포로 검증합니다.

## 무결성 검증

### 겹침 찾기

exclusion constraint를 적용하기 전 기존 데이터를 점검할 때 사용합니다.

```sql
SELECT a.id AS left_id, b.id AS right_id
FROM product_price_period a
JOIN product_price_period b
  ON a.product_id = b.product_id
 AND a.id < b.id
 AND a.valid_during && b.valid_during;
```

### 공백과 인접성 찾기

```sql
WITH ordered AS (
    SELECT
        product_id,
        start_at,
        end_at,
        lag(end_at) OVER (
            PARTITION BY product_id
            ORDER BY start_at
        ) AS previous_end_at
    FROM product_price_period
)
SELECT product_id, previous_end_at, start_at
FROM ordered
WHERE previous_end_at IS NOT NULL
  AND previous_end_at <> start_at;
```

결과가 있다고 항상 오류는 아닙니다. 가격이 없는 기간을 허용하는 모델이라면 공백은 정상일 수 있습니다. 먼저 업무 불변식을 정의해야 합니다.

## 설계 대안

| 대안 | 적합한 상황 | trade-off |
|---|---|---|
| 현재 값만 저장 | 과거 재현이 필요 없음 | 단순하지만 과거 상태를 잃음 |
| 변경 이벤트만 저장 | 감사와 이벤트 재생이 핵심 | 시점 조회 비용과 재생 복잡도 |
| 시작·종료 컬럼 | 시점 조회가 단순하고 이식성이 중요 | 겹침 제약을 직접 설계해야 함 |
| PostgreSQL 범위 타입 | 겹침 조회와 DB 무결성이 중요 | PostgreSQL 의존성이 커짐 |
| 현재 테이블 + 이력 테이블 | 현재 조회와 감사 요구를 분리 | 두 저장소의 원자적 갱신 필요 |

## 운영 시 주의점

- 종료 없는 기간을 `NULL`과 무한대 시각 중 무엇으로 표현할지 하나로 통일합니다.
- 애플리케이션 서버, 데이터베이스 세션, 외부 메시지의 시간대 규칙을 문서화합니다.
- 가격 변경과 주문 생성이 경쟁할 때 어느 트랜잭션의 시각을 기준으로 할지 정합니다.
- 과거 기간 정정은 단순 UPDATE가 아니라 감사 기록과 재계산 영향을 함께 검토합니다.
- 캐시는 기준 시각이 포함된 조회인지 확인하고, 예약 가격 시작 시점의 무효화 전략을 둡니다.
- 구간 제약 추가 전 기존 겹침과 공백을 읽기 전용 쿼리로 조사합니다.

## 정리

기간 데이터 설계의 핵심은 마이크로초를 얼마나 정교하게 빼는지가 아닙니다. 경계의 포함 규칙을 하나로 정하고, 같은 업무 키의 구간이 겹치지 않는다는 불변식을 트랜잭션과 데이터베이스 제약으로 지키는 것입니다.

`[start, end)`는 인접 구간을 같은 경계값으로 연결할 수 있어 가격, 할인, 재고 정책, 전시 기간에 일관된 규칙을 제공합니다.

## 참고자료

- [PostgreSQL Date/Time Types](https://www.postgresql.org/docs/current/datatype-datetime.html)
- [PostgreSQL Range Types](https://www.postgresql.org/docs/current/rangetypes.html)
- [PostgreSQL CREATE TABLE](https://www.postgresql.org/docs/current/sql-createtable.html)
- [PostgreSQL btree_gist](https://www.postgresql.org/docs/current/btree-gist.html)
