# Data Model Draft

This is an initial PostgreSQL-oriented draft. Field names and constraints can be adjusted during backend implementation.

## 1. Tables

### users

Stores app users linked to Kakao.

| Column | Type | Notes |
| --- | --- | --- |
| id | uuid | Primary key |
| kakao_id | text | Unique |
| nickname | text | Nullable |
| profile_image_url | text | Nullable |
| created_at | timestamptz | Default now |
| updated_at | timestamptz | Default now |

### couples

Stores a connected couple relationship.

| Column | Type | Notes |
| --- | --- | --- |
| id | uuid | Primary key |
| user_a_id | uuid | FK users.id |
| user_b_id | uuid | FK users.id, nullable until connected |
| invite_code | text | Unique |
| connected_at | timestamptz | Nullable |
| created_at | timestamptz | Default now |
| updated_at | timestamptz | Default now |

### date_records

Stores each date memory.

| Column | Type | Notes |
| --- | --- | --- |
| id | uuid | Primary key |
| couple_id | uuid | FK couples.id |
| title | text | Required |
| date | date | Required |
| summary | text | Nullable |
| created_by | uuid | FK users.id |
| created_at | timestamptz | Default now |
| updated_at | timestamptz | Default now |

### route_points

Stores route coordinates for a date record.

| Column | Type | Notes |
| --- | --- | --- |
| id | uuid | Primary key |
| date_record_id | uuid | FK date_records.id |
| latitude | numeric | Required |
| longitude | numeric | Required |
| sequence | integer | Required |
| recorded_at | timestamptz | Nullable |

### places

Stores visited places attached to a date record.

| Column | Type | Notes |
| --- | --- | --- |
| id | uuid | Primary key |
| date_record_id | uuid | FK date_records.id |
| name | text | Required |
| address | text | Nullable |
| latitude | numeric | Required |
| longitude | numeric | Required |
| visit_order | integer | Required |
| memo | text | Nullable |
| created_at | timestamptz | Default now |
| updated_at | timestamptz | Default now |

### place_photos

Stores photo metadata for a place.

| Column | Type | Notes |
| --- | --- | --- |
| id | uuid | Primary key |
| place_id | uuid | FK places.id |
| storage_path | text | Required |
| public_url | text | Nullable |
| uploaded_by | uuid | FK users.id |
| created_at | timestamptz | Default now |

## 2. Relationship Summary

```text
users 1..n couples
couples 1..n date_records
date_records 1..n route_points
date_records 1..n places
places 1..n place_photos
```

## 3. Important Rules

- A user can only read and write records for their own couple.
- A date record belongs to exactly one couple.
- Route points should be ordered by `sequence`.
- Places should be ordered by `visit_order`.
- Invite codes should expire or be rotated later, but MVP can start with one active code per couple.

