# 데이터 모델 초안

이 문서는 PostgreSQL 기준의 초기 데이터 모델 초안입니다. 실제 백엔드 구현 과정에서 필드명, 제약 조건, 인덱스는 조정될 수 있습니다.

## 1. 테이블

### users

카카오 계정과 연결된 앱 사용자를 저장합니다.

| 컬럼 | 타입 | 설명 |
| --- | --- | --- |
| id | uuid | 기본 키 |
| kakao_id | text | 고유값 |
| nickname | text | 선택값 |
| profile_image_url | text | 선택값 |
| created_at | timestamptz | 기본값 now |
| updated_at | timestamptz | 기본값 now |

### couples

커플 연결 관계를 저장합니다.

| 컬럼 | 타입 | 설명 |
| --- | --- | --- |
| id | uuid | 기본 키 |
| user_a_id | uuid | users.id 외래 키 |
| user_b_id | uuid | users.id 외래 키, 연결 전에는 null 가능 |
| invite_code | text | 고유 초대 코드 |
| connected_at | timestamptz | 연결 완료 시각, null 가능 |
| created_at | timestamptz | 기본값 now |
| updated_at | timestamptz | 기본값 now |

### date_records

각 데이트 기록을 저장합니다.

| 컬럼 | 타입 | 설명 |
| --- | --- | --- |
| id | uuid | 기본 키 |
| couple_id | uuid | couples.id 외래 키 |
| title | text | 필수 |
| date | date | 필수 |
| summary | text | 선택값 |
| created_by | uuid | users.id 외래 키 |
| created_at | timestamptz | 기본값 now |
| updated_at | timestamptz | 기본값 now |

### route_points

데이트 기록의 경로 좌표를 저장합니다.

| 컬럼 | 타입 | 설명 |
| --- | --- | --- |
| id | uuid | 기본 키 |
| date_record_id | uuid | date_records.id 외래 키 |
| latitude | numeric | 필수 |
| longitude | numeric | 필수 |
| sequence | integer | 필수, 경로 순서 |
| recorded_at | timestamptz | 좌표 기록 시각, null 가능 |

### places

데이트 기록에 연결된 방문 장소를 저장합니다.

| 컬럼 | 타입 | 설명 |
| --- | --- | --- |
| id | uuid | 기본 키 |
| date_record_id | uuid | date_records.id 외래 키 |
| name | text | 필수 |
| address | text | 선택값 |
| latitude | numeric | 필수 |
| longitude | numeric | 필수 |
| visit_order | integer | 필수, 방문 순서 |
| memo | text | 선택값 |
| created_at | timestamptz | 기본값 now |
| updated_at | timestamptz | 기본값 now |

### place_photos

장소에 연결된 사진 메타데이터를 저장합니다.

| 컬럼 | 타입 | 설명 |
| --- | --- | --- |
| id | uuid | 기본 키 |
| place_id | uuid | places.id 외래 키 |
| storage_path | text | 필수 |
| public_url | text | 선택값 |
| uploaded_by | uuid | users.id 외래 키 |
| created_at | timestamptz | 기본값 now |

## 2. 관계 요약

```text
users 1..n couples
couples 1..n date_records
date_records 1..n route_points
date_records 1..n places
places 1..n place_photos
```

## 3. 주요 규칙

- 사용자는 본인이 속한 커플의 기록만 읽고 쓸 수 있어야 합니다.
- 데이트 기록은 하나의 커플에만 속합니다.
- 경로 좌표는 `sequence` 기준으로 정렬합니다.
- 장소는 `visit_order` 기준으로 정렬합니다.
- 초대 코드는 추후 만료 또는 재발급 정책이 필요하지만, MVP에서는 커플당 활성 코드 1개로 시작할 수 있습니다.

