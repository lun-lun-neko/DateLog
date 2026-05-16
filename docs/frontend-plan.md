# 프론트엔드 계획

## 1. 담당 범위

이 작업공간은 프론트엔드 개발 전용입니다.

백엔드는 동료가 담당합니다. 프론트엔드는 `docs/api-draft.md`에 API 기대사항을 계약 초안으로 남기고, 이 저장소에는 백엔드 코드를 구현하지 않습니다.

## 2. 현재 스택

- Expo SDK 54.
- React Native 0.81.
- React 19.
- TypeScript.

## 3. 현재 앱 구조

```text
design-prototype/
  Figma export 기반 Vite/React DOM 프로토타입

frontend/
  App.tsx
  src/
    components/
    constants/
    mocks/
    screens/
    types/
```

## 4. MVP 프론트 화면

- 로그인.
- 커플 연결.
- 홈.
- 새 데이트 기록.
- 데이트 기록 목록.
- 데이트 기록 상세.
- 설정.

## 5. 현재 구현 상태

- `design-prototype/`에 Figma MVP 초안 export를 거의 원형 그대로 흡수했습니다.
- `frontend/` 아래에 Expo TypeScript 프로젝트를 생성했습니다.
- MVP 화면 뼈대를 구현했습니다.
- 화면 전환은 현재 `App.tsx`의 로컬 React state로 처리합니다.
- 백엔드 연동 전까지 mock 데이트 기록 데이터를 사용합니다.
- 지도는 지도 SDK 연동 전까지 임시 컴포넌트로 표현합니다.

## 6. 다음 프론트엔드 작업

1. 실제 운영용 내비게이션 도입. 후보는 Expo Router 또는 React Navigation.
2. 카카오맵과 네이버맵 중 프론트 연동 방식을 결정.
3. 백엔드 계약에 맞춘 API 클라이언트 레이어 추가.
4. 카카오 로그인 인증 상태 처리.
5. mock 데이트 기록을 API 데이터로 교체.
6. 이미지 선택 및 업로드 흐름 추가.
7. 위치 권한과 GPS 좌표를 이용한 경로 기록 추가.

## 7. 백엔드와 먼저 맞춰야 할 내용

프론트엔드는 아래 결정을 초기에 백엔드와 맞춰야 합니다.

- 앱 세션 토큰 형식과 refresh 방식.
- 카카오 로그인 교환 API.
- 커플 초대 코드의 생성/만료 정책.
- 데이트 기록 상세 응답 형태.
- 사진 업로드 방식: 백엔드 multipart 업로드 또는 signed upload URL.
- 경로 좌표 payload 크기 제한.
