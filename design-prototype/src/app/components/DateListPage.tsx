import { useState } from "react";
import { Calendar, MapPin, Image as ImageIcon, ChevronRight, Search } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

interface DateRecord {
  id: string;
  title: string;
  date: string;
  locations: number;
  photos: number;
  thumbnail?: string;
  route: string;
}

export function DateListPage() {
  const [records] = useState<DateRecord[]>([
    {
      id: "1",
      title: "서울숲 데이트",
      date: "2024-05-15",
      locations: 3,
      photos: 12,
      route: "카페 → 서울숲 → 맛집"
    },
    {
      id: "2",
      title: "한강 피크닉",
      date: "2024-05-10",
      locations: 2,
      photos: 8,
      route: "편의점 → 여의도 한강공원"
    },
    {
      id: "3",
      title: "코엑스 쇼핑",
      date: "2024-05-05",
      locations: 4,
      photos: 15,
      route: "코엑스몰 → 별마당 → 카페 → 레스토랑"
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecords = records.filter(record =>
    record.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    record.route.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-screen bg-gray-50 flex flex-col pb-16">
      {/* Header */}
      <header className="bg-white border-b px-4 py-4">
        <h1 className="text-xl font-bold mb-3">데이트 기록</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
          <Input
            type="text"
            placeholder="제목, 장소 검색"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </header>

      {/* Stats Summary */}
      <div className="bg-white border-b px-4 py-4">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-pink-500">{records.length}</div>
            <div className="text-xs text-gray-600">총 데이트</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-500">
              {records.reduce((sum, r) => sum + r.locations, 0)}
            </div>
            <div className="text-xs text-gray-600">방문 장소</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-500">
              {records.reduce((sum, r) => sum + r.photos, 0)}
            </div>
            <div className="text-xs text-gray-600">사진</div>
          </div>
        </div>
      </div>

      {/* Records List */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {filteredRecords.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p>검색 결과가 없습니다</p>
          </div>
        ) : (
          filteredRecords.map((record) => (
            <Card key={record.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  {/* Thumbnail placeholder */}
                  <div className="size-20 bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <MapPin className="size-8 text-pink-500" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base mb-1 truncate">{record.title}</h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                      <Calendar className="size-3" />
                      <span>{new Date(record.date).toLocaleDateString('ko-KR')}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2 truncate">{record.route}</p>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">
                        <MapPin className="size-3 mr-1" />
                        {record.locations}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        <ImageIcon className="size-3 mr-1" />
                        {record.photos}
                      </Badge>
                    </div>
                  </div>

                  {/* Arrow */}
                  <ChevronRight className="size-5 text-gray-400 flex-shrink-0" />
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
