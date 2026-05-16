import { StyleSheet, Text, View } from 'react-native';

import { AppButton } from '../components/AppButton';
import { MapPreview } from '../components/MapPreview';
import { Screen } from '../components/Screen';
import { Section } from '../components/Section';
import { colors, spacing } from '../constants/theme';
import type { DateRecord } from '../types/dateLog';

type DateDetailScreenProps = {
  record: DateRecord;
  onBack: () => void;
};

export function DateDetailScreen({ record, onBack }: DateDetailScreenProps) {
  return (
    <Screen title={record.title} subtitle={`${record.date} · ${record.summary}`} footer={<AppButton label="목록으로" onPress={onBack} variant="secondary" />}>
      <Section title="지도">
        <MapPreview routeCount={record.routePoints.length} placeCount={record.places.length} />
      </Section>
      <Section title="장소 타임라인">
        {record.places.map((place) => (
          <View key={place.id} style={styles.place}>
            <View style={styles.order}>
              <Text style={styles.orderText}>{place.visitOrder}</Text>
            </View>
            <View style={styles.placeCopy}>
              <Text style={styles.placeName}>{place.name}</Text>
              <Text style={styles.muted}>{place.address}</Text>
              <Text style={styles.memo}>{place.memo}</Text>
            </View>
          </View>
        ))}
      </Section>
    </Screen>
  );
}

const styles = StyleSheet.create({
  place: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  order: {
    alignItems: 'center',
    backgroundColor: colors.accent,
    borderRadius: 999,
    height: 28,
    justifyContent: 'center',
    width: 28,
  },
  orderText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '800',
  },
  placeCopy: {
    flex: 1,
    gap: 4,
  },
  placeName: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
  },
  muted: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 18,
  },
  memo: {
    color: colors.text,
    fontSize: 14,
    lineHeight: 20,
  },
});

