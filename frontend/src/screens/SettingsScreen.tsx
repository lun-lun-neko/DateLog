import { StyleSheet, Text } from 'react-native';

import { AppButton } from '../components/AppButton';
import { Screen } from '../components/Screen';
import { Section } from '../components/Section';
import { colors } from '../constants/theme';

type SettingsScreenProps = {
  onBack: () => void;
};

export function SettingsScreen({ onBack }: SettingsScreenProps) {
  return (
    <Screen title="설정" subtitle="계정과 커플 연결 상태를 확인합니다." footer={<AppButton label="홈으로" onPress={onBack} variant="secondary" />}>
      <Section title="내 계정">
        <Text style={styles.body}>Kakao account connected</Text>
      </Section>
      <Section title="커플 연결">
        <Text style={styles.body}>Partner connected through invite code A1B2C3</Text>
      </Section>
      <Section title="나중에 추가">
        <Text style={styles.body}>D-day, theme color, notification settings can be added after MVP.</Text>
      </Section>
    </Screen>
  );
}

const styles = StyleSheet.create({
  body: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
  },
});
