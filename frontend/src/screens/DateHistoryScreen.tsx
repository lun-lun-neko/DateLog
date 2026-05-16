import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AppButton } from '../components/AppButton';
import { Screen } from '../components/Screen';
import { Section } from '../components/Section';
import { colors, spacing } from '../constants/theme';
import type { DateRecord } from '../types/dateLog';

type DateHistoryScreenProps = {
  records: DateRecord[];
  onBack: () => void;
  onSelectRecord: (recordId: string) => void;
};

export function DateHistoryScreen({ records, onBack, onSelectRecord }: DateHistoryScreenProps) {
  return (
    <Screen title="데이트 기록" subtitle="저장된 데이트를 최신순으로 확인합니다." footer={<AppButton label="홈으로" onPress={onBack} variant="secondary" />}>
      {records.map((record) => (
        <Pressable key={record.id} onPress={() => onSelectRecord(record.id)}>
          <Section>
            <View style={styles.row}>
              <View style={styles.thumbnail} />
              <View style={styles.copy}>
                <Text style={styles.title}>{record.title}</Text>
                <Text style={styles.muted}>{record.date}</Text>
                <Text style={styles.muted}>{record.places.length} places · {record.routePoints.length} route points</Text>
              </View>
            </View>
          </Section>
        </Pressable>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  thumbnail: {
    backgroundColor: colors.accentSoft,
    borderRadius: 8,
    height: 72,
    width: 72,
  },
  copy: {
    flex: 1,
    gap: 4,
    justifyContent: 'center',
  },
  title: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '800',
  },
  muted: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 18,
  },
});

