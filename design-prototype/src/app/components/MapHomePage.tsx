import { useState } from "react";
import { MapPin, Plus, Search, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function MapHomePage() {
  const [markers] = useState([
    { id: 1, lat: 37.5665, lng: 126.9780, title: "서울숲 데이트", date: "2024.05.15" },
    { id: 2, lat: 37.5290, lng: 126.9240, title: "한강 피크닉", date: "2024.05.10" },
    { id: 3, lat: 37.5172, lng: 127.0473, title: "코엑스", date: "2024.05.05" },
  ]);

  return (
    <div className="relative h-screen">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 p-4 flex items-center justify-between">
        <Button size="icon" variant="ghost" className="bg-white shadow-sm">
          <Menu className="size-5" />
        </Button>
        <div className="flex-1 max-w-md mx-4">
          <div className="bg-white rounded-full shadow-sm px-4 py-2 flex items-center gap-2">
            <Search className="size-4 text-gray-400" />
            <input
              type="text"
              placeholder="장소, 날짜 검색"
              className="flex-1 outline-none text-sm"
            />
          </div>
        </div>
        <div className="size-10" /> {/* Spacer */}
      </header>

      {/* Map Area - Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        {/* Simulated map markers */}
        <div className="relative w-full h-full">
          {markers.map((marker, index) => (
            <div
              key={marker.id}
              className="absolute"
              style={{
                left: `${20 + index * 25}%`,
                top: `${30 + index * 15}%`,
              }}
            >
              <div className="relative">
                <div className="size-10 bg-pink-500 rounded-full shadow-lg flex items-center justify-center animate-bounce">
                  <MapPin className="size-6 text-white fill-white" />
                </div>
                <div className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <Card className="shadow-md">
                    <CardContent className="p-2 text-xs">
                      <div className="font-medium">{marker.title}</div>
                      <div className="text-gray-500">{marker.date}</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}

          {/* Simulated route lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <path
              d="M 20% 30% Q 35% 35% 45% 45%"
              stroke="#ec4899"
              strokeWidth="3"
              fill="none"
              strokeDasharray="5,5"
              className="opacity-50"
            />
            <path
              d="M 45% 45% Q 60% 50% 70% 60%"
              stroke="#ec4899"
              strokeWidth="3"
              fill="none"
              strokeDasharray="5,5"
              className="opacity-50"
            />
          </svg>
        </div>

        {/* Map placeholder text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center text-gray-400 bg-white/80 px-6 py-4 rounded-lg">
            <MapPin className="size-12 mx-auto mb-2" />
            <p className="text-sm">실제 지도는 추후 연동됩니다</p>
            <p className="text-xs mt-1">(Kakao Map API 또는 Google Maps)</p>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="absolute bottom-24 right-6 size-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow">
        <Plus className="size-6" />
      </button>

      {/* Bottom Summary Card */}
      <div className="absolute bottom-20 left-4 right-4">
        <Card className="shadow-xl">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600">함께한 데이트</div>
                <div className="text-2xl font-bold text-pink-500">12회</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">방문한 장소</div>
                <div className="text-2xl font-bold text-purple-500">45곳</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">추억 사진</div>
                <div className="text-2xl font-bold text-blue-500">128장</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
