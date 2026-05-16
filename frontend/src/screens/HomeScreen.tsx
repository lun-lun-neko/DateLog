import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AppButton } from '../components/AppButton';
import { MapPreview } from '../components/MapPreview';
import { Screen } from '../components/Screen';
import { Section } from '../components/Section';
import { colors, spacing } from '../constants/theme';
import type { DateRecord } from '../types/dateLog';

type HomeScreenProps = {
  latestRecord: DateRecord;
  onCreateRecord: () => void;
  onOpenHistory: () => void;
  onOpenLatest: () => void;
  onOpenSettings: () => void;
};

export function HomeScreen({
  latestRecord,
  onCreateRecord,
  onOpenHistory,
  onOpenLatest,
  onOpenSettings,
}: HomeScreenProps) {
  return (
    <Screen title="오늘의 데이트" subtitle="연결된 커플 공간에서 데이트 기록을 만들고 다시 볼 수 있습니다.">
      <View style={styles.actions}>
        <AppButton label="새 데이트 기록" onPress={onCreateRecord} />
        <AppButton label="설정" onPress={onOpenSettings} variant="secondary" />
      </View>
      <Pressable onPress={onOpenLatest}>
        <Section title="최근 기록">
          <Text style={styles.recordTitle}>{latestRecord.title}</Text>
          <Text style={styles.muted}>{latestRecord.date}</Text>
          <MapPreview routeCount={latestRecord.routePoints.length} placeCount={latestRecord.places.length} />
        </Section>
      </Pressable>
      <Section title="기록 보관함">
        <Text style={styles.muted}>이전 데이트 기록을 날짜별로 확인합니다.</Text>
        <AppButton label="기록 목록 보기" onPress={onOpenHistory} variant="secondary" />
      </Section>
    </Screen>
  );
}

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  recordTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '800',
  },
  muted: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
});

