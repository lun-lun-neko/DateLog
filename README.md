# DateLog

DateLog는 커플이 데이트 추억을 지도 기반으로 기록하는 모바일 앱입니다. 데이트 경로를 지도 위에 남기고, 경로 위에 방문 장소, 사진, 메모를 붙인 뒤 나중에 다시 볼 수 있게 만드는 것이 핵심입니다.

## 현재 단계

프론트엔드 MVP 뼈대 작업 중입니다.

이 작업공간은 **프론트엔드 개발 전용**으로 사용합니다. 백엔드는 동료가 별도로 담당하며, 이 저장소에서는 프론트 구현과 API 계약 초안을 관리합니다.

## MVP 목표

커플이 하루 데이트 경로를 지도 위에 그리고, 장소·사진·메모를 저장한 뒤 나중에 다시 볼 수 있는 앱을 만듭니다.

## 문서

- [프로젝트 기획서](docs/project-brief.md)
- [MVP 범위](docs/mvp-scope.md)
- [화면 구성](docs/screen-map.md)
- [프론트엔드 계획](docs/frontend-plan.md)
- [데이터 모델 초안](docs/data-model.md)
- [API 초안](docs/api-draft.md)

## 디자인 프로토타입

Figma에서 export한 MVP 앱 초안은 `design-prototype/`에 거의 원형 그대로 보관합니다.

```bash
cd design-prototype
npm install
npm run dev
```

이 프로토타입은 Vite/React DOM 기반입니다. 실제 모바일 앱 구현은 `frontend/`의 Expo 앱에서 진행합니다.

## 프론트엔드

Expo 앱은 `frontend/`에 있습니다.

```bash
cd frontend
npm run start
```

현재 프론트엔드 스택:

- Expo SDK 54
- React Native 0.81
- React 19
- TypeScript
