# Screen Map

## 1. MVP Navigation

```text
Launch
  -> Login
  -> Onboarding / Couple Connect
  -> Home
      -> Create Date Record
      -> Date History
      -> Date Detail
      -> Settings
```

## 2. Screens

### Login

Purpose: authenticate users through Kakao.

Main elements:

- App name.
- Kakao login button.
- Basic terms/privacy links.

### Couple Connect

Purpose: connect two users into one couple space.

Main elements:

- My invite code.
- Code copy/share action.
- Partner code input.
- Connect button.
- Connected partner state.

### Home

Purpose: show the couple's current state and primary actions.

Main elements:

- Couple profile summary.
- Latest date record preview.
- Create date button.
- Date history entry.
- Optional D-day area later.

### Create Date Record

Purpose: create one date record and capture its route.

Main elements:

- Date title input.
- Date picker.
- Map.
- Start/stop route recording action.
- Add place action.
- Save record action.

### Add Place

Purpose: attach a visited place to the current date.

Main elements:

- Place name.
- Address or map-selected location.
- Memo.
- Photo upload.
- Visit order.

### Date History

Purpose: browse previous records.

Main elements:

- Date-grouped list.
- Record title.
- Thumbnail from first photo.
- Number of places.
- Created date.

### Date Detail

Purpose: revisit a full date memory.

Main elements:

- Date title and date.
- Map with saved route.
- Place timeline.
- Photos and notes per place.
- Edit/delete actions.

### Settings

Purpose: manage account and couple state.

Main elements:

- User profile.
- Partner profile.
- Logout.
- Disconnect couple action.

## 3. MVP Main Flow

```text
Kakao Login
  -> Generate or enter couple code
  -> Home
  -> Create date record
  -> Record route on map
  -> Add place/photo/memo
  -> Save
  -> Open from history
```

