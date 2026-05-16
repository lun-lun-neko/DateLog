import {
  User,
  Heart,
  Bell,
  Lock,
  HelpCircle,
  FileText,
  LogOut,
  ChevronRight,
  Settings as SettingsIcon,
  Palette
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Switch } from "./ui/switch";

interface SettingsTabProps {
  onCoupleConnect?: () => void;
}

export function SettingsTab({ onCoupleConnect }: SettingsTabProps) {
  const user = {
    name: "홍길동",
    initial: "홍",
    email: "hong@example.com"
  };

  const settingSections = [
    {
      title: "계정",
      items: [
        { icon: User, label: "프로필 수정", action: () => console.log("프로필 수정") },
        { icon: Heart, label: "커플 연결", action: () => onCoupleConnect?.() },
      ]
    },
    {
      title: "알림",
      items: [
        { icon: Bell, label: "푸시 알림", action: () => console.log("푸시 알림"), hasSwitch: true, switchValue: true },
      ]
    },
    {
      title: "앱 설정",
      items: [
        { icon: Palette, label: "테마 설정", action: () => console.log("테마 설정") },
        { icon: SettingsIcon, label: "환경 설정", action: () => console.log("환경 설정") },
      ]
    },
    {
      title: "지원",
      items: [
        { icon: HelpCircle, label: "도움말", action: () => console.log("도움말") },
        { icon: FileText, label: "이용약관", action: () => console.log("이용약관") },
        { icon: Lock, label: "개인정보처리방침", action: () => console.log("개인정보처리방침") },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <header className="bg-gradient-to-br from-pink-500 to-purple-600 text-white px-4 pt-8 pb-6">
        <h1 className="text-xl font-bold mb-6">설정</h1>

        {/* User Profile Card */}
        <Card className="bg-white/95 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <Avatar className="size-16 border-2 border-pink-200">
                <AvatarFallback className="bg-gradient-to-br from-pink-400 to-purple-500 text-white text-xl">
                  {user.initial}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
              <ChevronRight className="size-5 text-gray-400" />
            </div>
          </CardContent>
        </Card>
      </header>

      {/* Settings Sections */}
      <div className="px-4 py-6 space-y-6">
        {settingSections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h3 className="text-sm font-semibold text-gray-500 mb-3 px-1">
              {section.title}
            </h3>
            <Card>
              <CardContent className="p-0">
                {section.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  return (
                    <div key={itemIndex}>
                      {itemIndex > 0 && <Separator />}
                      <button
                        onClick={item.action}
                        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="size-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <Icon className="size-5 text-gray-600" />
                          </div>
                          <span className="text-sm font-medium">{item.label}</span>
                        </div>
                        {item.hasSwitch ? (
                          <Switch checked={item.switchValue} />
                        ) : (
                          <ChevronRight className="size-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        ))}

        {/* App Info */}
        <div className="text-center py-4">
          <p className="text-xs text-gray-500 mb-1">데이트 로그</p>
          <p className="text-xs text-gray-400">버전 1.0.0</p>
        </div>

        {/* Logout Button */}
        <Card className="border-red-200">
          <CardContent className="p-0">
            <button className="w-full flex items-center justify-center gap-2 p-4 text-red-500 hover:bg-red-50 transition-colors">
              <LogOut className="size-5" />
              <span className="font-medium">로그아웃</span>
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
