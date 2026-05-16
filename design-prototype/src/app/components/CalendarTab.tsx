import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

interface DateRecord {
  date: string;
  title: string;
  hasPhotos: boolean;
}

export function CalendarTab() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const dateRecords: DateRecord[] = [
    { date: "2024-05-15", title: "서울숲 데이트", hasPhotos: true },
    { date: "2024-05-10", title: "한강 피크닉", hasPhotos: true },
    { date: "2024-05-05", title: "코엑스 쇼핑", hasPhotos: true },
    { date: "2024-05-01", title: "영화 데이트", hasPhotos: false },
  ];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const hasDateRecord = (day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return dateRecords.find(record => record.date === dateStr);
  };

  const days = [];
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(<div key={`empty-${i}`} className="aspect-square" />);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const record = hasDateRecord(day);
    const isToday = new Date().getDate() === day &&
                    new Date().getMonth() === month &&
                    new Date().getFullYear() === year;

    days.push(
      <div
        key={day}
        className={`aspect-square flex flex-col items-center justify-center rounded-lg relative ${
          isToday ? "bg-pink-50" : ""
        } ${record ? "cursor-pointer hover:bg-pink-50" : ""}`}
      >
        <span className={`text-sm ${isToday ? "font-bold text-pink-500" : "text-gray-700"}`}>
          {day}
        </span>
        {record && (
          <div className="size-1.5 bg-pink-500 rounded-full mt-1" />
        )}
      </div>
    );
  }

  const recordsThisMonth = dateRecords.filter(record => {
    const recordDate = new Date(record.date);
    return recordDate.getMonth() === month && recordDate.getFullYear() === year;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <header className="bg-white border-b px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">데이트 캘린더</h1>
          <Badge variant="secondary" className="bg-pink-100 text-pink-700">
            <Heart className="size-3 mr-1 fill-pink-500" />
            {recordsThisMonth.length}회
          </Badge>
        </div>

        {/* Month Navigator */}
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={prevMonth}>
            <ChevronLeft className="size-5" />
          </Button>
          <h2 className="text-lg font-semibold">
            {year}년 {month + 1}월
          </h2>
          <Button variant="ghost" size="icon" onClick={nextMonth}>
            <ChevronRight className="size-5" />
          </Button>
        </div>
      </header>

      {/* Calendar Grid */}
      <div className="bg-white px-4 py-4 mb-4">
        <div className="grid grid-cols-7 gap-2 mb-2">
          {["일", "월", "화", "수", "목", "금", "토"].map((day, index) => (
            <div key={day} className="text-center text-xs font-medium text-gray-500">
              <span className={index === 0 ? "text-red-500" : index === 6 ? "text-blue-500" : ""}>
                {day}
              </span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {days}
        </div>
      </div>

      {/* Records List for This Month */}
      <div className="px-4">
        <h3 className="font-semibold mb-3">이번 달 데이트 ({recordsThisMonth.length})</h3>
        {recordsThisMonth.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <Heart className="size-12 mx-auto text-gray-300 mb-3" />
              <p className="text-gray-500">이번 달 데이트 기록이 없어요</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {recordsThisMonth.map((record, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="size-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="size-6 text-white fill-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm mb-1">{record.title}</h4>
                      <p className="text-xs text-gray-500">
                        {new Date(record.date).toLocaleDateString('ko-KR', {
                          month: 'long',
                          day: 'numeric',
                          weekday: 'short'
                        })}
                      </p>
                    </div>
                    {record.hasPhotos && (
                      <Badge variant="secondary" className="text-xs">
                        사진 있음
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
