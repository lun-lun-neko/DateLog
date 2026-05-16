export type RoutePoint = {
  latitude: number;
  longitude: number;
  sequence: number;
};

export type PlacePhoto = {
  id: string;
  uri: string;
};

export type DatePlace = {
  id: string;
  name: string;
  address: string;
  memo: string;
  visitOrder: number;
  latitude: number;
  longitude: number;
  photos: PlacePhoto[];
};

export type DateRecord = {
  id: string;
  title: string;
  date: string;
  summary: string;
  routePoints: RoutePoint[];
  places: DatePlace[];
};

