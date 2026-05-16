import { Heart, Calendar, MapPin, Image as ImageIcon, Sparkles, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Progress } from "./ui/progress";

export function CoupleHomeTab() {
  const couple = {
    user1: { name: "홍길동", initial: "홍", color: "bg-pink-400" },
    user2: { name: "김영희", initial: "김", color: "bg-purple-400" },
    anniversary: "2023-05-14",
    dDay: 368
  };

  const stats = {
    totalDates: 52,
    totalPlaces: 145,
    totalPhotos: 428,
    thisMonthDates: 5
  };

  const recentDates = [
    { id: 1, title: "서울숲 데이트", date: "2024-05-15", thumbnail: "pink" },
    { id: 2, title: "한강 피크닉", date: "2024-05-10", thumbnail: "purple" },
    { id: 3, title: "코엑스 쇼핑", date: "2024-05-05", thumbnail: "blue" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 pb-16">
      {/* Header with Couple Info */}
      <header className="bg-gradient-to-br from-pink-500 to-purple-600 text-white px-4 pt-8 pb-12">
        <div className="text-center mb-6">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Avatar className="size-20 border-4 border-white shadow-lg">
              <AvatarFallback className={`${couple.user1.color} text-white text-2xl`}>
                {couple.user1.initial}
              </AvatarFallback>
            </Avatar>
            <div className="relative">
              <Heart className="size-10 fill-white drop-shadow-lg" />
              <Sparkles className="size-5 absolute -top-1 -right-1 fill-yellow-300 text-yellow-300" />
            </div>
            <Avatar className="size-20 border-4 border-white shadow-lg">
              <AvatarFallback className={`${couple.user2.color} text-white text-2xl`}>
                {couple.user2.initial}
              </AvatarFallback>
            </Avatar>
          </div>
          <h2 className="text-2xl font-bold mb-2">
            {couple.user1.name} ♥ {couple.user2.name}
          </h2>
          <p className="text-pink-100">우리가 함께한 시간</p>
        </div>

        {/* D-Day */}
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
          <div className="text-sm text-pink-100 mb-1">우리의 시작</div>
          <div className="text-3xl font-bold mb-1">D+{couple.dDay}</div>
          <div className="text-sm text-pink-100">
            {new Date(couple.anniversary).toLocaleDateString('ko-KR')}
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="px-4 -mt-8 mb-6">
        <div className="grid grid-cols-2 gap-3">
          <Card className="shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="size-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Heart className="size-6 text-pink-500 fill-pink-500" />
              </div>
              <div className="text-2xl font-bold text-pink-500">{stats.totalDates}</div>
              <div className="text-xs text-gray-600">총 데이트</div>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="size-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <MapPin className="size-6 text-purple-500" />
              </div>
              <div className="text-2xl font-bold text-purple-500">{stats.totalPlaces}</div>
              <div className="text-xs text-gray-600">방문 장소</div>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="size-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <ImageIcon className="size-6 text-blue-500" />
              </div>
              <div className="text-2xl font-bold text-blue-500">{stats.totalPhotos}</div>
              <div className="text-xs text-gray-600">추억 사진</div>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="size-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Calendar className="size-6 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-green-500">{stats.thisMonthDates}</div>
              <div className="text-xs text-gray-600">이번 달</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* This Month Progress */}
      <div className="px-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Trophy className="size-5 text-yellow-500" />
              이번 달 목표
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">데이트 횟수</span>
                <span className="font-medium">{stats.thisMonthDates}/8</span>
              </div>
              <Progress value={(stats.thisMonthDates / 8) * 100} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">새로운 장소</span>
                <span className="font-medium">3/5</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Dates */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold">최근 데이트</h3>
          <button className="text-sm text-pink-500">전체보기</button>
        </div>
        <div className="space-y-3">
          {recentDates.map((date) => (
            <Card key={date.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-3 flex items-center gap-3">
                <div className={`size-16 bg-gradient-to-br from-${date.thumbnail}-200 to-${date.thumbnail}-300 rounded-lg flex items-center justify-center`}>
                  <Heart className={`size-6 text-${date.thumbnail}-500 fill-${date.thumbnail}-500`} />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm mb-1">{date.title}</h4>
                  <p className="text-xs text-gray-500">{date.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
