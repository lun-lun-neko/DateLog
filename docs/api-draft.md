# API 초안

이 문서는 FastAPI 백엔드를 가정한 초기 API 계약 초안입니다. 실제 경로와 payload는 백엔드 구현 과정에서 조정될 수 있습니다.

## 1. 인증

### POST /auth/kakao

카카오 로그인 정보를 앱 세션으로 교환합니다.

요청:

```json
{
  "access_token": "kakao-access-token"
}
```

응답:

```json
{
  "access_token": "app-jwt",
  "user": {
    "id": "uuid",
    "nickname": "string",
    "profile_image_url": "string"
  }
}
```

## 2. 커플

### POST /couples/invite-code

현재 사용자의 초대 코드를 생성하거나 기존 코드를 조회합니다.

응답:

```json
{
  "invite_code": "A1B2C3"
}
```

### POST /couples/connect

초대 코드로 상대방과 커플 연결을 합니다.

요청:

```json
{
  "invite_code": "A1B2C3"
}
```

응답:

```json
{
  "couple_id": "uuid",
  "partner": {
    "id": "uuid",
    "nickname": "string"
  }
}
```

### GET /couples/me

현재 사용자의 커플 연결 상태를 반환합니다.

## 3. 데이트 기록

### GET /date-records

현재 커플의 이전 데이트 기록 목록을 반환합니다.

### POST /date-records

데이트 기록을 생성합니다.

요청:

```json
{
  "title": "홍대 데이트",
  "date": "2026-05-16",
  "summary": "카페, 전시, 저녁"
}
```

### GET /date-records/{date_record_id}

경로, 장소, 사진을 포함한 데이트 기록 상세를 반환합니다.

### PATCH /date-records/{date_record_id}

제목, 날짜, 요약을 수정합니다.

### DELETE /date-records/{date_record_id}

데이트 기록과 하위 데이터를 삭제합니다.

## 4. 경로

### PUT /date-records/{date_record_id}/route-points

데이트 기록의 경로 좌표를 교체 저장합니다.

요청:

```json
{
  "points": [
    {
      "latitude": 37.5563,
      "longitude": 126.9236,
      "sequence": 1,
      "recorded_at": "2026-05-16T10:00:00+09:00"
    }
  ]
}
```

## 5. 장소

### POST /date-records/{date_record_id}/places

방문 장소를 추가합니다.

요청:

```json
{
  "name": "예시 카페",
  "address": "서울시 마포구 ...",
  "latitude": 37.5563,
  "longitude": 126.9236,
  "visit_order": 1,
  "memo": "첫 번째 방문 장소"
}
```

### PATCH /places/{place_id}

장소 정보를 수정합니다.

### DELETE /places/{place_id}

장소를 삭제합니다.

## 6. 사진

### POST /places/{place_id}/photos

장소에 사진을 업로드하거나 사진 메타데이터를 등록합니다.

MVP 구현 방식 후보:

- 방식 A: 백엔드가 multipart 업로드를 받아 스토리지에 저장.
- 방식 B: 백엔드가 signed upload URL을 발급하고, 클라이언트가 스토리지에 직접 업로드.

### DELETE /photos/{photo_id}

사진 메타데이터와 스토리지 객체를 삭제합니다.

