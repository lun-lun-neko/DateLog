# Frontend Plan

## 1. Ownership

This workspace is for frontend development only.

Backend work is owned by a teammate. Frontend should keep API expectations documented in `docs/api-draft.md` and avoid implementing backend code in this repository.

## 2. Current Stack

- Expo SDK 54.
- React Native 0.81.
- React 19.
- TypeScript.

## 3. Current App Structure

```text
frontend/
  App.tsx
  src/
    components/
    constants/
    mocks/
    screens/
    types/
```

## 4. MVP Frontend Screens

- Login.
- Couple connect.
- Home.
- New date record.
- Date history.
- Date detail.
- Settings.

## 5. Current Implementation State

- Expo TypeScript project is created under `frontend/`.
- MVP screen skeletons are implemented.
- Screen transitions currently use local React state in `App.tsx`.
- Mock date records are used before backend integration.
- Map is represented by a placeholder component until map SDK integration.

## 6. Next Frontend Tasks

1. Add production navigation, likely Expo Router or React Navigation.
2. Decide Kakao Map vs Naver Map frontend integration path.
3. Add API client layer based on backend contract.
4. Add auth state handling for Kakao login.
5. Replace mock date records with API-backed data.
6. Add image picker and upload flow.
7. Add route recording using location permission and GPS points.

## 7. Backend Contract Notes

Frontend needs these backend decisions early:

- App session token format and refresh behavior.
- Kakao login exchange endpoint.
- Couple invite code lifecycle.
- Date record detail response shape.
- Photo upload strategy: multipart through backend or signed upload URL.
- Route point payload size limit.
