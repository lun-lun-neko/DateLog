import { useState } from "react";
import { MapPin, Plus, Search, Menu, Navigation, Camera, Square, CheckCircle, Upload, X, MapPinned } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

type DateStatus = "idle" | "active" | "ended";

interface Pin {
  id: string;
  lat: number;
  lng: number;
  type: "photo" | "pin";
  timestamp: Date;
  photoUrl?: string;
  placeName?: string;
  placeAddress?: string;
}

interface Place {
  id: string;
  name: string;
  address: string;
  category: string;
  distance: string;
  lat: number;
  lng: number;
}

const COLOR_OPTIONS = [
  { name: "핑크", value: "pink", bg: "bg-pink-400" },
  { name: "퍼플", value: "purple", bg: "bg-purple-400" },
  { name: "블루", value: "blue", bg: "bg-blue-400" },
  { name: "그린", value: "green", bg: "bg-green-400" },
  { name: "옐로", value: "yellow", bg: "bg-yellow-400" },
  { name: "레드", value: "red", bg: "bg-red-400" },
];

// Mock 주변 장소 데이터 (실제로는 Kakao Map API 등에서 가져옴)
const MOCK_NEARBY_PLACES: Place[] = [
  { id: "1", name: "스타벅스 강남점", address: "서울 강남구 테헤란로 152", category: "카페", distance: "50m", lat: 37.5665, lng: 126.9780 },
  { id: "2", name: "올리브영 역삼점", address: "서울 강남구 역삼동 123-45", category: "편의점/마트", distance: "120m", lat: 37.5670, lng: 126.9785 },
  { id: "3", name: "한강공원 반포지구", address: "서울 서초구 반포동", category: "공원", distance: "350m", lat: 37.5290, lng: 126.9240 },
  { id: "4", name: "CGV 강남", address: "서울 강남구 강남대로 438", category: "영화관", distance: "450m", lat: 37.5680, lng: 126.9795 },
  { id: "5", name: "교보문고 강남점", address: "서울 강남구 테헤란로 427", category: "서점", distance: "600m", lat: 37.5685, lng: 126.9800 },
  { id: "6", name: "뚜레쥬르 역삼점", address: "서울 강남구 역삼로 156", category: "베이커리", distance: "80m", lat: 37.5668, lng: 126.9782 },
];

export function DateTab() {
  const [dateStatus, setDateStatus] = useState<DateStatus>("idle");
  const [pins, setPins] = useState<Pin[]>([]);
  const [dateTitle, setDateTitle] = useState("");
  const [selectedColor, setSelectedColor] = useState("pink");
  
  // Modal states
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);
  const [selectedPhotos, setSelectedPhotos] = useState<File[]>([]);

  const [markers] = useState([
    { id: 1, lat: 37.5665, lng: 126.9780, title: "서울숲", date: "2024.05.15", color: "pink" },
    { id: 2, lat: 37.5290, lng: 126.9240, title: "한강공원", date: "2024.05.10", color: "purple" },
    { id: 3, lat: 37.5172, lng: 127.0473, title: "코엑스", date: "2024.05.05", color: "blue" },
  ]);

  const handleStartDate = () => {
    setDateStatus("active");
    setPins([]);
  };

  const handleEndDate = () => {
    setDateStatus("ended");
  };

  const handleContinueDate = () => {
    setDateStatus("active");
  };

  const handleOpenPhotoModal = () => {
    setShowPhotoModal(true);
    setSelectedPhotos([]);
  };

  const handleOpenPinModal = () => {
    setShowPinModal(true);
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setSelectedPhotos(Array.from(files));
    }
  };

  const handleConfirmPhotos = () => {
    selectedPhotos.forEach((photo) => {
      const newPin: Pin = {
        id: Date.now().toString() + Math.random(),
        lat: 37.5665 + Math.random() * 0.01,
        lng: 126.978 + Math.random() * 0.01,
        type: "photo",
        timestamp: new Date(),
        photoUrl: URL.createObjectURL(photo),
      };
      setPins(prev => [...prev, newPin]);
    });
    setShowPhotoModal(false);
    setSelectedPhotos([]);
  };

  const handleSelectPlace = (place: Place) => {
    const newPin: Pin = {
      id: Date.now().toString(),
      lat: place.lat,
      lng: place.lng,
      type: "pin",
      timestamp: new Date(),
      placeName: place.name,
      placeAddress: place.address,
    };
    setPins([...pins, newPin]);
    setShowPinModal(false);
  };

  const handleSaveDate = () => {
    // 데이트 로그 저장 로직
    console.log("Saving date log:", { dateTitle, selectedColor, pins });
    // 저장 후 초기화
    setDateStatus("idle");
    setDateTitle("");
    setSelectedColor("pink");
    setPins([]);
  };

  return (
    <div className="relative h-screen pb-16">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 p-4 flex items-center justify-between">
        <Button size="icon" variant="ghost" className="bg-white/90 backdrop-blur-sm shadow-sm">
          <Menu className="size-5" />
        </Button>
        <div className="flex-1 max-w-md mx-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-sm px-4 py-2 flex items-center gap-2">
            <Search className="size-4 text-gray-400" />
            <input
              type="text"
              placeholder="장소, 날짜 검색"
              className="flex-1 outline-none text-sm bg-transparent"
            />
          </div>
        </div>
        <Button size="icon" variant="ghost" className="bg-white/90 backdrop-blur-sm shadow-sm">
          <Navigation className="size-5" />
        </Button>
      </header>

      {/* Map Area - Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        {/* Simulated map with markers */}
        <div className="relative w-full h-full">
          {markers.map((marker, index) => (
            <div
              key={marker.id}
              className="absolute"
              style={{
                left: `${25 + index * 20}%`,
                top: `${35 + index * 12}%`,
              }}
            >
              <div className="relative animate-bounce">
                <div className={`size-12 bg-${marker.color}-500 rounded-full shadow-lg flex items-center justify-center`}>
                  <MapPin className="size-7 text-white fill-white" />
                </div>
                {/* Marker label */}
                <div className="absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <div className="bg-white px-3 py-1 rounded-full shadow-md text-xs font-medium">
                    {marker.title}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Active date pins */}
          {dateStatus !== "idle" && pins.map((pin, index) => (
            <div
              key={pin.id}
              className="absolute"
              style={{
                left: `${30 + index * 8}%`,
                top: `${40 + index * 8}%`,
              }}
            >
              <div className={`size-8 rounded-full shadow-lg flex items-center justify-center ${
                pin.type === "photo" ? "bg-blue-500" : "bg-orange-500"
              }`}>
                {pin.type === "photo" ? (
                  <Camera className="size-5 text-white" />
                ) : (
                  <MapPin className="size-5 text-white fill-white" />
                )}
              </div>
            </div>
          ))}

          {/* Route lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            <path
              d="M 25% 35% Q 38% 40% 45% 47%"
              stroke="url(#routeGradient)"
              strokeWidth="4"
              fill="none"
              strokeDasharray="8,4"
              className="opacity-60"
            />
            <path
              d="M 45% 47% Q 58% 52% 65% 59%"
              stroke="url(#routeGradient)"
              strokeWidth="4"
              fill="none"
              strokeDasharray="8,4"
              className="opacity-60"
            />
          </svg>
        </div>

        {/* Map API placeholder notice - Only show when idle */}
        {dateStatus === "idle" && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="text-center bg-white/90 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg">
              <MapPin className="size-10 mx-auto mb-2 text-gray-400" />
              <p className="text-sm text-gray-600 font-medium">지도 API 연동 예정</p>
              <p className="text-xs text-gray-500 mt-1">Kakao Map 또는 Google Maps</p>
            </div>
          </div>
        )}
      </div>

      {/* Center Action Buttons */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-4">
        {dateStatus === "idle" && (
          <Button
            onClick={handleStartDate}
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-xl transition-all hover:scale-105"
          >
            데이트 시작!!
          </Button>
        )}

        {dateStatus === "active" && (
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-3">
              <Button
                onClick={handleOpenPhotoModal}
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-6 rounded-full shadow-xl flex items-center gap-2"
              >
                <Camera className="size-6" />
                <span className="font-semibold">사진 추가</span>
              </Button>
              <Button
                onClick={handleOpenPinModal}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-6 rounded-full shadow-xl flex items-center gap-2"
              >
                <MapPin className="size-6" />
                <span className="font-semibold">핀 추가</span>
              </Button>
            </div>
            <Button
              onClick={handleEndDate}
              size="lg"
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-xl transition-all hover:scale-105"
            >
              데이트 종료
            </Button>
          </div>
        )}
      </div>

      {/* Photo Upload Modal */}
      <Dialog open={showPhotoModal} onOpenChange={setShowPhotoModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-800">사진 추가하기</DialogTitle>
            <DialogDescription>
              갤러리에서 데이트 사진을 선택해주세요
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            {/* File Upload Area */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-pink-400 transition-colors cursor-pointer">
              <input
                type="file"
                id="photo-upload"
                multiple
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
              <label htmlFor="photo-upload" className="cursor-pointer">
                <Upload className="size-12 mx-auto mb-3 text-gray-400" />
                <p className="text-sm font-medium text-gray-700 mb-1">
                  사진을 선택하거나 드래그하세요
                </p>
                <p className="text-xs text-gray-500">
                  최대 10장까지 선택 가능
                </p>
              </label>
            </div>

            {/* Selected Photos Preview */}
            {selectedPhotos.length > 0 && (
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-700">
                  선택된 사진 ({selectedPhotos.length}장)
                </Label>
                <ScrollArea className="h-48 border rounded-lg p-2">
                  <div className="grid grid-cols-3 gap-2">
                    {selectedPhotos.map((photo, index) => (
                      <div key={index} className="relative aspect-square">
                        <img
                          src={URL.createObjectURL(photo)}
                          alt={`선택된 사진 ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <button
                          onClick={() => setSelectedPhotos(prev => prev.filter((_, i) => i !== index))}
                          className="absolute -top-2 -right-2 size-6 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600"
                        >
                          <X className="size-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setShowPhotoModal(false)}
                className="flex-1"
              >
                취소
              </Button>
              <Button
                onClick={handleConfirmPhotos}
                disabled={selectedPhotos.length === 0}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white"
              >
                추가하기 ({selectedPhotos.length})
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Pin (Place) Selection Modal */}
      <Dialog open={showPinModal} onOpenChange={setShowPinModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-800">핀 추가하기</DialogTitle>
            <DialogDescription>
              주변 장소를 선택해주세요
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-3">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
              <Input
                placeholder="장소 검색..."
                className="pl-10"
              />
            </div>

            {/* Nearby Places List */}
            <ScrollArea className="h-96">
              <div className="space-y-2">
                {MOCK_NEARBY_PLACES.map((place) => (
                  <button
                    key={place.id}
                    onClick={() => handleSelectPlace(place)}
                    className="w-full p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-orange-400 hover:bg-orange-50 transition-all text-left group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="size-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200">
                        <MapPinned className="size-5 text-orange-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-800 mb-1 truncate">
                          {place.name}
                        </h4>
                        <p className="text-xs text-gray-500 mb-1 truncate">
                          {place.address}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full text-gray-600">
                            {place.category}
                          </span>
                          <span className="text-xs text-orange-600 font-medium">
                            {place.distance}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </ScrollArea>

            {/* Close Button */}
            <Button
              variant="outline"
              onClick={() => setShowPinModal(false)}
              className="w-full"
            >
              닫기
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Date End Settings Card */}
      {dateStatus === "ended" && (
        <div className="absolute inset-0 bg-black/50 z-30 flex items-center justify-center p-4">
          <Card className="w-full max-w-md max-h-[80vh] overflow-y-auto">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">데이트 완료!</h2>
              
              {/* Continue or Edit Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <Button
                  onClick={handleContinueDate}
                  variant="outline"
                  className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50"
                >
                  데이트 이어하기
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50"
                >
                  로그 수정하기
                </Button>
              </div>

              {/* Date Title Input */}
              <div className="space-y-2">
                <Label htmlFor="dateTitle" className="text-sm font-semibold text-gray-700">
                  데이트 제목
                </Label>
                <Input
                  id="dateTitle"
                  placeholder="오늘의 데이트 제목을 입력하세요"
                  value={dateTitle}
                  onChange={(e) => setDateTitle(e.target.value)}
                  className="border-2 focus:border-pink-400"
                />
              </div>

              {/* Calendar Color Selection */}
              <div className="space-y-3">
                <Label className="text-sm font-semibold text-gray-700">
                  캘린더 색상
                </Label>
                <div className="grid grid-cols-3 gap-2">
                  {COLOR_OPTIONS.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setSelectedColor(color.value)}
                      className={`relative flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-all ${
                        selectedColor === color.value
                          ? "border-gray-800 bg-gray-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className={`size-10 ${color.bg} rounded-full shadow-sm`} />
                      <span className="text-xs font-medium text-gray-700">{color.name}</span>
                      {selectedColor === color.value && (
                        <CheckCircle className="absolute top-1 right-1 size-5 text-gray-800" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Summary Info */}
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">추가한 사진</span>
                  <span className="font-semibold text-blue-600">
                    {pins.filter(p => p.type === "photo").length}개
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">추가한 핀</span>
                  <span className="font-semibold text-orange-600">
                    {pins.filter(p => p.type === "pin").length}개
                  </span>
                </div>
              </div>

              {/* Save Button */}
              <Button
                onClick={handleSaveDate}
                size="lg"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-6 text-lg rounded-xl shadow-lg"
              >
                데이트 로그 저장하기
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Bottom Summary Card - Only show when idle */}
      {dateStatus === "idle" && (
        <div className="absolute bottom-20 left-4 right-4">
          <Card className="shadow-xl border-2 border-pink-100">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-sm text-gray-700">이번 달 데이트</h3>
                <span className="text-2xl font-bold text-pink-500">5회</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div>
                  <div className="text-gray-500">방문 장소</div>
                  <div className="text-lg font-bold text-purple-500">15</div>
                </div>
                <div>
                  <div className="text-gray-500">추억 사진</div>
                  <div className="text-lg font-bold text-blue-500">42</div>
                </div>
                <div>
                  <div className="text-gray-500">총 거리</div>
                  <div className="text-lg font-bold text-green-500">85km</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Active Date Info Card - Show when date is active */}
      {dateStatus === "active" && (
        <div className="absolute bottom-20 left-4 right-4">
          <Card className="shadow-xl border-2 border-pink-400 bg-pink-50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-sm text-pink-700">데이트 진행중...</h3>
                <div className="flex items-center gap-1">
                  <div className="size-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-xs text-gray-600">LIVE</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div>
                  <div className="text-gray-600">경과 시간</div>
                  <div className="text-lg font-bold text-pink-600">1:23</div>
                </div>
                <div>
                  <div className="text-gray-600">사진</div>
                  <div className="text-lg font-bold text-blue-600">
                    {pins.filter(p => p.type === "photo").length}
                  </div>
                </div>
                <div>
                  <div className="text-gray-600">핀</div>
                  <div className="text-lg font-bold text-orange-600">
                    {pins.filter(p => p.type === "pin").length}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}