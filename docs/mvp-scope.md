# MVP Scope

## 1. MVP Statement

DateLog MVP lets a couple record one date on a map, save route-based places with photos and notes, and view the record later.

## 2. Required Features

### Authentication

- Kakao login.
- User profile creation after first login.
- Restore access through the linked Kakao account.

### Couple Connection

- Generate a couple invite code.
- Enter partner's invite code.
- Create a couple relationship after successful code matching.
- Show connected partner state.

### Date Record

- Create a date record with date and title.
- Optionally add a short summary.
- Edit and delete own couple's date records.

### Map Route

- Display map.
- Record route points while creating a date record.
- Save route coordinates.
- Render saved route on detail screen.

### Places

- Add visited place on the route or map.
- Save place name, address, latitude, longitude, visit order, and memo.
- Attach photos to a place.

### History

- List previous date records by date.
- Open date detail.
- Show map route, places, photos, and notes.

## 3. Priority

| Priority | Feature | Reason |
| --- | --- | --- |
| P0 | Kakao login | User identity and backup |
| P0 | Couple code connection | Core couple app behavior |
| P0 | Date record creation | Main content unit |
| P0 | Map route recording | Product differentiator |
| P0 | Place/photo/note saving | Memory content |
| P0 | Previous record list/detail | Recording app baseline |
| P1 | Bucket list | Natural extension from map |
| P1 | D-day | Common couple app feature |
| P1 | Daily question | Retention |
| P1 | Date impression | Emotional record |
| P2 | Mini character | Larger content system |
| P2 | Room decoration | Requires items/assets |
| P2 | Ranking | Needs enough users and scoring rules |
| P2 | Attendance scoring | Needs reward design |
| P2 | Theme color | Polish after core value |

## 4. MVP Success Criteria

- A new user can sign in with Kakao.
- Two users can connect as a couple through a code.
- A connected couple can create a date record.
- The date record can save route coordinates.
- At least one place with photo and memo can be saved.
- The saved record can be opened later from a history list.

