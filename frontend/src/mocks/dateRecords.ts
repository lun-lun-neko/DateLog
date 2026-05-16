import type { DateRecord } from '../types/dateLog';

export const mockDateRecords: DateRecord[] = [
  {
    id: 'record-1',
    title: 'Hongdae gallery date',
    date: '2026-05-16',
    summary: 'Cafe, small exhibition, and dinner near Yeonnam.',
    routePoints: [
      { latitude: 37.5563, longitude: 126.9236, sequence: 1 },
      { latitude: 37.558, longitude: 126.9252, sequence: 2 },
      { latitude: 37.561, longitude: 126.9268, sequence: 3 },
    ],
    places: [
      {
        id: 'place-1',
        name: 'Morning Cafe',
        address: 'Mapo-gu, Seoul',
        memo: 'First stop. Saved the window seat for next time.',
        visitOrder: 1,
        latitude: 37.5563,
        longitude: 126.9236,
        photos: [{ id: 'photo-1', uri: 'mock://cafe' }],
      },
      {
        id: 'place-2',
        name: 'Small Gallery',
        address: 'Yeonnam-dong, Seoul',
        memo: 'Liked the blue painting the most.',
        visitOrder: 2,
        latitude: 37.561,
        longitude: 126.9268,
        photos: [{ id: 'photo-2', uri: 'mock://gallery' }],
      },
    ],
  },
  {
    id: 'record-2',
    title: 'Han River walk',
    date: '2026-05-09',
    summary: 'Walked after dinner and saved two riverside stops.',
    routePoints: [
      { latitude: 37.528, longitude: 126.9326, sequence: 1 },
      { latitude: 37.5292, longitude: 126.9355, sequence: 2 },
    ],
    places: [
      {
        id: 'place-3',
        name: 'Riverside Bench',
        address: 'Yeouido Hangang Park',
        memo: 'Good night view.',
        visitOrder: 1,
        latitude: 37.5292,
        longitude: 126.9355,
        photos: [{ id: 'photo-3', uri: 'mock://river' }],
      },
    ],
  },
];

