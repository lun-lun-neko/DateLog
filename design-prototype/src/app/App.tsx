import { useState } from "react";
import { LandingPage } from "./components/LandingPage";
import { TutorialPage } from "./components/TutorialPage";
import { CoupleConnectModal } from "./components/CoupleConnectModal";
import { DateTab } from "./components/DateTab";
import { CoupleHomeTab } from "./components/CoupleHomeTab";
import { CalendarTab } from "./components/CalendarTab";
import { SettingsTab } from "./components/SettingsTab";
import { BottomNav } from "./components/BottomNav";
import { Toaster } from "./components/ui/sonner";

type AppFlow = "landing" | "tutorial" | "coupleConnect" | "main";
type Tab = "date" | "home" | "calendar" | "settings";
type LoginMode = "kakao" | "guest" | null;

export default function App() {
  const [currentFlow, setCurrentFlow] = useState<AppFlow>("landing");
  const [currentTab, setCurrentTab] = useState<Tab>("date");
  const [loginMode, setLoginMode] = useState<LoginMode>(null);
  const [showCoupleConnect, setShowCoupleConnect] = useState(false);

  // Landing -> Tutorial
  const handleKakaoLogin = () => {
    setLoginMode("kakao");
    setCurrentFlow("tutorial");
  };

  const handleGuestStart = () => {
    setLoginMode("guest");
    setCurrentFlow("tutorial");
  };

  // Tutorial -> Couple Connect
  const handleTutorialComplete = () => {
    setCurrentFlow("coupleConnect");
  };

  const handleTutorialSkip = () => {
    setCurrentFlow("main");
  };

  // Couple Connect -> Main
  const handleCoupleConnect = () => {
    setCurrentFlow("main");
    setShowCoupleConnect(false);
  };

  const handleCoupleConnectSkip = () => {
    setCurrentFlow("main");
    setShowCoupleConnect(false);
  };

  // Settings에서 커플 연결 다시 열기
  const handleOpenCoupleConnect = () => {
    setShowCoupleConnect(true);
  };

  const renderContent = () => {
    switch (currentTab) {
      case "date":
        return <DateTab />;
      case "home":
        return <CoupleHomeTab />;
      case "calendar":
        return <CalendarTab />;
      case "settings":
        return <SettingsTab onCoupleConnect={handleOpenCoupleConnect} />;
      default:
        return <DateTab />;
    }
  };

  // Landing Page
  if (currentFlow === "landing") {
    return (
      <>
        <LandingPage onKakaoLogin={handleKakaoLogin} onGuestStart={handleGuestStart} />
        <Toaster />
      </>
    );
  }

  // Tutorial
  if (currentFlow === "tutorial") {
    return (
      <>
        <TutorialPage onComplete={handleTutorialComplete} onSkip={handleTutorialSkip} />
        <Toaster />
      </>
    );
  }

  // Couple Connect
  if (currentFlow === "coupleConnect") {
    return (
      <>
        <CoupleConnectModal onConnect={handleCoupleConnect} onSkip={handleCoupleConnectSkip} />
        <Toaster />
      </>
    );
  }

  // Main App
  return (
    <>
      {renderContent()}
      <BottomNav currentTab={currentTab} onTabChange={(tab) => setCurrentTab(tab as Tab)} />

      {/* Couple Connect Modal (설정에서 다시 열기) */}
      {showCoupleConnect && (
        <div className="fixed inset-0 z-50">
          <CoupleConnectModal
            onConnect={handleCoupleConnect}
            onSkip={handleCoupleConnectSkip}
            canSkip={true}
          />
        </div>
      )}

      <Toaster />
    </>
  );
}