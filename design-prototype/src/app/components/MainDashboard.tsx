import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Heart, Plus, MapPin, Calendar, Image as ImageIcon } from "lucide-react";
import { Badge } from "./ui/badge";

interface DateRecord {
  id: string;
  date: string;
  title: string;
  locations: number;
  photos: number;
  preview: string;
}

export function MainDashboard() {
  const [records] = useState<DateRecord[]>([
    {
      id: "1",
      date: "2024-05-15",
      title: "서울숲 데이트",
      locations: 3,
      photos: 12,
      preview: "카페 → 서울숲 → 맛집"
    },
    {
      id: "2",
      date: "2024-05-10",
      title: "한강 피크닉",
      locations: 2,
      photos: 8,
      preview: "편의점 → 여의도 한강공원"
    }
  ]);

  const createNewDate = () => {
    // TODO: 새 데이트 기록 생성 페이지로 이동
    console.log("새 데이트 기록 생성");
  };

  const openRecord = (id: string) => {
    // TODO: 상세 페이지로 이동
    console.log("기록 열기:", id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
              <Heart className="size-5 text-white fill-white" />
            </div>
            <div>
              <h1 className="font-semibold">데이트 로그</h1>
              <p className="text-xs text-gray-500">홍길동 ♥ 김영희</p>
            </div>
          </div>
          <Button onClick={createNewDate} size="sm">
            <Plus className="size-4 mr-1" />
            새 기록
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-pink-500">12</div>
              <div className="text-sm text-gray-600">총 데이트</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-purple-500">45</div>
              <div className="text-sm text-gray-600">방문 장소</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-blue-500">128</div>
              <div className="text-sm text-gray-600">사진</div>
            </CardContent>
          </Card>
        </div>

        {/* Date Records */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">데이트 기록</h2>

          {records.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Heart className="size-12 mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500 mb-4">아직 기록이 없어요</p>
                <Button onClick={createNewDate}>
                  <Plus className="size-4 mr-2" />
                  첫 데이트 기록하기
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-3">
              {records.map((record) => (
                <Card
                  key={record.id}
                  className="cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => openRecord(record.id)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-base">{record.title}</CardTitle>
                        <CardDescription className="mt-1 flex items-center gap-1">
                          <Calendar className="size-3" />
                          {new Date(record.date).toLocaleDateString('ko-KR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <MapPin className="size-3" />
                          {record.locations}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <ImageIcon className="size-3" />
                          {record.photos}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{record.preview}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
