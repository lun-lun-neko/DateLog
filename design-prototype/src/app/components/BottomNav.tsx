import { MapPin, Heart, Calendar, Settings } from "lucide-react";

interface BottomNavProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNav({ currentTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: "date", icon: MapPin, label: "데이트" },
    { id: "home", icon: Heart, label: "커플홈" },
    { id: "calendar", icon: Calendar, label: "캘린더" },
    { id: "settings", icon: Settings, label: "설정" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-inset-bottom z-50">
      <div className="max-w-4xl mx-auto px-2">
        <div className="flex items-center justify-around h-16">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors ${
                  isActive ? "text-pink-500" : "text-gray-400"
                }`}
              >
                <Icon className={`size-6 ${isActive && tab.id === "home" ? "fill-pink-500" : ""}`} />
                <span className="text-xs">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
