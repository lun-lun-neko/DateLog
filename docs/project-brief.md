# DateLog Project Brief

## 1. Service Overview

DateLog is a mobile app for couples to record dating memories around a map.

The core experience is:

> A couple draws a date route on a map, saves visited places, photos, and notes on that route, and can look back on the record later.

## 2. Target Users

- Couples who want to preserve date memories more meaningfully than a photo album.
- Couples who often visit cafes, restaurants, parks, exhibitions, or travel spots together.
- Users who want to remember where they went, what they did, and how they felt on a date.

## 3. Core Value

Photo apps store images, but they do not clearly show the story of a date.

DateLog should preserve:

- Where the couple moved.
- Which places they visited.
- What photos and notes belong to each place.
- How the couple can revisit the full date later.

## 4. MVP Objective

The first version should focus only on the core memory-recording loop:

1. Sign in.
2. Connect with partner.
3. Create a date record.
4. Draw or save a route on a map.
5. Add places, photos, and notes.
6. View previous date records.

## 5. Out of Scope for MVP

These are good expansion features, but should wait until the core loop is solid:

- Couple mini characters.
- Character room decoration.
- Bucket list places.
- Daily couple question.
- Date impression prompts.
- Attendance.
- Couple ranking.
- D-day calculator.
- Theme color customization.

## 6. Recommended Stack

Initial recommended stack:

- Frontend: React Native or Flutter.
- Backend: FastAPI.
- Database: Supabase PostgreSQL.
- Storage: Supabase Storage or S3.
- Login: Kakao Login API.
- Map: Kakao Map API or Naver Map API.

For a Korea-focused consumer app, Kakao Login and Kakao Map are the natural first candidates.

