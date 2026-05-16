import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { ArrowLeft, MapPin, Plus, Image as ImageIcon, X } from "lucide-react";
import { toast } from "sonner";

interface Location {
  id: string;
  name: string;
  memo: string;
  photos: string[];
}

export function CreateDatePage() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [currentLocation, setCurrentLocation] = useState({ name: "", memo: "" });

  const goBack = () => {
    // TODO: 뒤로가기
    console.log("뒤로가기");
  };

  const addLocation = () => {
    if (!currentLocation.name) {
      toast.error("장소 이름을 입력해주세요");
      return;
    }

    const newLocation: Location = {
      id: Date.now().toString(),
      name: currentLocation.name,
      memo: currentLocation.memo,
      photos: []
    };

    setLocations([...locations, newLocation]);
    setCurrentLocation({ name: "", memo: "" });
    toast.success("장소가 추가되었습니다");
  };

  const removeLocation = (id: string) => {
    setLocations(locations.filter(loc => loc.id !== id));
  };

  const saveDate = () => {
    if (!title) {
      toast.error("제목을 입력해주세요");
      return;
    }

    if (locations.length === 0) {
      toast.error("최소 1개의 장소를 추가해주세요");
      return;
    }

    // TODO: 저장 API 호출
    console.log({ title, date, locations });
    toast.success("데이트 기록이 저장되었습니다!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={goBack}>
            <ArrowLeft className="size-4 mr-1" />
            뒤로
          </Button>
          <h1 className="font-semibold">새 데이트 기록</h1>
          <Button size="sm" onClick={saveDate}>저장</Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Basic Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">기본 정보</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">제목</Label>
              <Input
                id="title"
                placeholder="예) 서울숲 데이트"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">날짜</Label>
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Map Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">데이트 경로</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="size-8 mx-auto mb-2" />
                <p className="text-sm">지도 기능은 추후 구현됩니다</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Locations */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">방문 장소</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Location List */}
            {locations.length > 0 && (
              <div className="space-y-2">
                {locations.map((loc, index) => (
                  <div key={loc.id} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="flex items-center justify-center size-6 bg-pink-500 text-white rounded-full text-xs">
                          {index + 1}
                        </span>
                        <span className="font-medium">{loc.name}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-6"
                        onClick={() => removeLocation(loc.id)}
                      >
                        <X className="size-4" />
                      </Button>
                    </div>
                    {loc.memo && (
                      <p className="text-sm text-gray-600 ml-8">{loc.memo}</p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Add Location Form */}
            <div className="space-y-3 pt-4 border-t">
              <div className="space-y-2">
                <Label htmlFor="location-name">장소 이름</Label>
                <Input
                  id="location-name"
                  placeholder="예) 성수동 카페"
                  value={currentLocation.name}
                  onChange={(e) => setCurrentLocation({ ...currentLocation, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location-memo">메모 (선택)</Label>
                <Textarea
                  id="location-memo"
                  placeholder="이 장소에서의 추억을 적어보세요"
                  value={currentLocation.memo}
                  onChange={(e) => setCurrentLocation({ ...currentLocation, memo: e.target.value })}
                  rows={2}
                />
              </div>
              <Button onClick={addLocation} variant="outline" className="w-full">
                <Plus className="size-4 mr-2" />
                장소 추가
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Photos Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">사진</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <ImageIcon className="size-12 mx-auto text-gray-400 mb-3" />
              <p className="text-sm text-gray-500 mb-4">사진 업로드 기능은 추후 구현됩니다</p>
              <Button variant="outline" disabled>
                <Plus className="size-4 mr-2" />
                사진 추가
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
