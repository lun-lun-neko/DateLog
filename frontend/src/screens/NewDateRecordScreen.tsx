import { StyleSheet, Text, TextInput, View } from 'react-native';

import { AppButton } from '../components/AppButton';
import { MapPreview } from '../components/MapPreview';
import { Screen } from '../components/Screen';
import { Section } from '../components/Section';
import { colors, spacing } from '../constants/theme';

type NewDateRecordScreenProps = {
  onBack: () => void;
  onSave: () => void;
};

export function NewDateRecordScreen({ onBack, onSave }: NewDateRecordScreenProps) {
  return (
    <Screen
      title="데이트 기록 생성"
      subtitle="MVP에서는 제목, 날짜, 지도 경로, 장소 메모 저장 흐름을 먼저 검증합니다."
      footer={
        <View style={styles.footerActions}>
          <AppButton label="뒤로" onPress={onBack} variant="secondary" />
          <AppButton label="저장" onPress={onSave} />
        </View>
      }
    >
      <Section title="기본 정보">
        <TextInput placeholder="데이트 제목" placeholderTextColor={colors.textMuted} style={styles.input} />
        <TextInput placeholder="날짜 YYYY-MM-DD" placeholderTextColor={colors.textMuted} style={styles.input} />
      </Section>
      <Section title="지도 경로">
        <MapPreview routeCount={3} placeCount={2} />
        <View style={styles.inlineActions}>
          <AppButton label="경로 기록 시작" onPress={() => undefined} variant="secondary" />
          <AppButton label="장소 추가" onPress={() => undefined} variant="secondary" />
        </View>
      </Section>
      <Section title="장소 메모">
        <Text style={styles.muted}>사진 업로드와 실제 위치 선택은 API/지도 연동 단계에서 붙입니다.</Text>
      </Section>
    </Screen>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.surfaceMuted,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    color: colors.text,
    fontSize: 16,
    minHeight: 48,
    paddingHorizontal: 14,
  },
  inlineActions: {
    gap: spacing.sm,
  },
  footerActions: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  muted: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
});

