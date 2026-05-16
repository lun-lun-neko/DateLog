import { Button } from "./ui/button";
import { Heart, MapPin } from "lucide-react";

interface LandingPageProps {
  onKakaoLogin: () => void;
  onGuestStart: () => void;
}

export function LandingPage({ onKakaoLogin, onGuestStart }: LandingPageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-pink-400 via-pink-500 to-purple-600 p-6 py-12">
      {/* Logo & Title */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="relative inline-block mb-8">
          <div className="size-28 bg-white rounded-3xl shadow-2xl flex items-center justify-center">
            <Heart className="size-16 text-pink-500 fill-pink-500" />
          </div>
          <div className="absolute -bottom-3 -right-3 size-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
            <MapPin className="size-7 text-white fill-white" />
          </div>
        </div>

        <h1 className="text-5xl font-bold text-white mb-3">데이트 로그</h1>
        <p className="text-pink-100 text-lg text-center leading-relaxed">
          우리의 특별한 순간을
          <br />
          지도 위에 기록해요
        </p>
      </div>

      {/* Action Buttons */}
      <div className="w-full max-w-sm space-y-3">
        <Button
          onClick={onKakaoLogin}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 shadow-xl h-14"
          size="lg"
        >
          <svg className="size-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.442 1.492 4.64 3.839 6.182-.203.79-.75 2.898-.862 3.367-.132.548.2.54.422.392.18-.118 2.925-1.974 3.397-2.296A13.32 13.32 0 0012 18c5.523 0 10-3.477 10-7.5S17.523 3 12 3z"/>
          </svg>
          카카오로 시작하기
        </Button>

        <Button
          onClick={onGuestStart}
          variant="outline"
          className="w-full bg-white/20 border-2 border-white text-white hover:bg-white/30 backdrop-blur-sm shadow-xl h-14"
          size="lg"
        >
          로그인 없이 시작하기
        </Button>

        <p className="text-xs text-center text-white/80 px-4 pt-2">
          로그인하면 서비스 이용약관 및<br/>개인정보 처리방침에 동의하게 됩니다
        </p>
      </div>
    </div>
  );
}
