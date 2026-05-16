import { Heart, Calendar, LogOut, Settings, Bell, HelpCircle, ChevronRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Separator } from "./ui/separator";

export function ProfilePage() {
  const couple = {
    user1: { name: "홍길동", initial: "홍" },
    user2: { name: "김영희", initial: "김" },
    anniversary: "2023-05-14",
    code: "ABC123"
  };

  const daysTogehter = Math.floor(
    (new Date().getTime() - new Date(couple.anniversary).getTime()) / (1000 * 60 * 60 * 24)
  );

  const menuItems = [
    { icon: Bell, label: "알림 설정", action: () => console.log("알림 설정") },
    { icon: Settings, label: "앱 설정", action: () => console.log("앱 설정") },
    { icon: HelpCircle, label: "도움말", action: () => console.log("도움말") },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <header className="bg-gradient-to-br from-pink-500 to-purple-600 text-white px-4 pt-8 pb-8">
        <div className="text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Avatar className="size-16 border-2 border-white">
              <AvatarFallback className="bg-pink-300 text-white text-xl">
                {couple.user1.initial}
              </AvatarFallback>
            </Avatar>
            <Heart className="size-8 fill-white" />
            <Avatar className="size-16 border-2 border-white">
              <AvatarFallback className="bg-purple-300 text-white text-xl">
                {couple.user2.initial}
              </AvatarFallback>
            </Avatar>
          </div>
          <h2 className="text-xl font-semibold mb-1">
            {couple.user1.name} ♥ {couple.user2.name}
          </h2>
          <p className="text-pink-100 text-sm">함께한 지 {daysTogehter}일</p>
        </div>
      </header>

      {/* Couple Code */}
      <div className="px-4 -mt-6 mb-6">
        <Card className="shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-500 mb-1">커플 코드</div>
                <div className="font-mono text-lg font-semibold text-pink-500">
                  {couple.code}
                </div>
              </div>
              <Button variant="outline" size="sm">
                코드 복사
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Anniversary */}
      <div className="px-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="size-12 bg-pink-100 rounded-full flex items-center justify-center">
                <Calendar className="size-6 text-pink-500" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500">우리의 시작</div>
                <div className="font-semibold">
                  {new Date(couple.anniversary).toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
              <Button variant="ghost" size="sm">
                수정
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Menu Items */}
      <div className="px-4 mb-6">
        <Card>
          <CardContent className="p-0">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index}>
                  {index > 0 && <Separator />}
                  <button
                    onClick={item.action}
                    className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="size-5 text-gray-600" />
                      <span className="text-sm">{item.label}</span>
                    </div>
                    <ChevronRight className="size-5 text-gray-400" />
                  </button>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      {/* Logout */}
      <div className="px-4">
        <Button variant="outline" className="w-full" size="lg">
          <LogOut className="size-4 mr-2" />
          로그아웃
        </Button>
      </div>
    </div>
  );
}
