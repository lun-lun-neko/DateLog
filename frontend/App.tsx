import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { BottomNav } from './src/components/BottomNav';
import { CoupleConnectScreen } from './src/screens/CoupleConnectScreen';
import { DateHistoryScreen } from './src/screens/DateHistoryScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { NewDateRecordScreen } from './src/screens/NewDateRecordScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';
import { TutorialScreen } from './src/screens/TutorialScreen';
import type { AppFlow, MainTab } from './src/types/navigation';

export default function App() {
  const [flow, setFlow] = useState<AppFlow>('landing');
  const [tab, setTab] = useState<MainTab>('date');

  if (flow === 'landing') {
    return (
      <>
        <LoginScreen onKakaoLogin={() => setFlow('tutorial')} onGuestStart={() => setFlow('tutorial')} />
        <StatusBar style="light" />
      </>
    );
  }

  if (flow === 'tutorial') {
    return (
      <>
        <TutorialScreen onComplete={() => setFlow('couple-connect')} onSkip={() => setFlow('main')} />
        <StatusBar style="dark" />
      </>
    );
  }

  if (flow === 'couple-connect') {
    return (
      <>
        <CoupleConnectScreen onConnected={() => setFlow('main')} onSkip={() => setFlow('main')} />
        <StatusBar style="dark" />
      </>
    );
  }

  return (
    <>
      {tab === 'date' && <NewDateRecordScreen />}
      {tab === 'home' && <HomeScreen />}
      {tab === 'calendar' && <DateHistoryScreen />}
      {tab === 'settings' && <SettingsScreen onCoupleConnect={() => setFlow('couple-connect')} />}
      <BottomNav currentTab={tab} onTabChange={setTab} />
      <StatusBar style="dark" />
    </>
  );
}
