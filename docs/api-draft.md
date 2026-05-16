# API Draft

This document assumes a FastAPI backend. Paths and payloads are initial drafts.

## 1. Auth

### POST /auth/kakao

Exchange Kakao login data for an app session.

Request:

```json
{
  "access_token": "kakao-access-token"
}
```

Response:

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

## 2. Couple

### POST /couples/invite-code

Create or fetch the current user's invite code.

Response:

```json
{
  "invite_code": "A1B2C3"
}
```

### POST /couples/connect

Connect with a partner by invite code.

Request:

```json
{
  "invite_code": "A1B2C3"
}
```

Response:

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

Return the current couple state.

## 3. Date Records

### GET /date-records

List previous date records for the current couple.

### POST /date-records

Create a date record.

Request:

```json
{
  "title": "Hongdae date",
  "date": "2026-05-16",
  "summary": "Cafe, exhibition, and dinner"
}
```

### GET /date-records/{date_record_id}

Return detail with route, places, and photos.

### PATCH /date-records/{date_record_id}

Update title, date, or summary.

### DELETE /date-records/{date_record_id}

Delete a date record and its child data.

## 4. Route

### PUT /date-records/{date_record_id}/route-points

Replace route points for a date record.

Request:

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

## 5. Places

### POST /date-records/{date_record_id}/places

Add a visited place.

Request:

```json
{
  "name": "Cafe Example",
  "address": "Seoul Mapo-gu ...",
  "latitude": 37.5563,
  "longitude": 126.9236,
  "visit_order": 1,
  "memo": "First stop"
}
```

### PATCH /places/{place_id}

Update place fields.

### DELETE /places/{place_id}

Delete a place.

## 6. Photos

### POST /places/{place_id}/photos

Upload or register a photo for a place.

MVP implementation choice:

- Option A: backend receives multipart upload and stores it.
- Option B: backend issues a signed upload URL and client uploads directly to storage.

### DELETE /photos/{photo_id}

Delete photo metadata and storage object.

