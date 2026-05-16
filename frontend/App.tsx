import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';

import { CoupleConnectScreen } from './src/screens/CoupleConnectScreen';
import { DateDetailScreen } from './src/screens/DateDetailScreen';
import { DateHistoryScreen } from './src/screens/DateHistoryScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { NewDateRecordScreen } from './src/screens/NewDateRecordScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';
import { mockDateRecords } from './src/mocks/dateRecords';
import type { AppScreen } from './src/types/navigation';

export default function App() {
  const [screen, setScreen] = useState<AppScreen>('login');
  const [selectedRecordId, setSelectedRecordId] = useState(mockDateRecords[0]?.id);
  const selectedRecord = useMemo(
    () => mockDateRecords.find((record) => record.id === selectedRecordId) ?? mockDateRecords[0],
    [selectedRecordId],
  );

  return (
    <>
      {screen === 'login' && <LoginScreen onLogin={() => setScreen('couple-connect')} />}
      {screen === 'couple-connect' && <CoupleConnectScreen onConnected={() => setScreen('home')} />}
      {screen === 'home' && (
        <HomeScreen
          latestRecord={mockDateRecords[0]}
          onCreateRecord={() => setScreen('new-date-record')}
          onOpenHistory={() => setScreen('date-history')}
          onOpenSettings={() => setScreen('settings')}
          onOpenLatest={() => {
            setSelectedRecordId(mockDateRecords[0]?.id);
            setScreen('date-detail');
          }}
        />
      )}
      {screen === 'new-date-record' && (
        <NewDateRecordScreen onBack={() => setScreen('home')} onSave={() => setScreen('date-history')} />
      )}
      {screen === 'date-history' && (
        <DateHistoryScreen
          records={mockDateRecords}
          onBack={() => setScreen('home')}
          onSelectRecord={(recordId) => {
            setSelectedRecordId(recordId);
            setScreen('date-detail');
          }}
        />
      )}
      {screen === 'date-detail' && selectedRecord && (
        <DateDetailScreen record={selectedRecord} onBack={() => setScreen('date-history')} />
      )}
      {screen === 'settings' && <SettingsScreen onBack={() => setScreen('home')} />}
      <StatusBar style="dark" />
    </>
  );
}
