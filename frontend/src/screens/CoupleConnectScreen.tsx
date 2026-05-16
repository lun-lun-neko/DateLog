import { StyleSheet, Text, TextInput, View } from 'react-native';

import { AppButton } from '../components/AppButton';
import { Screen } from '../components/Screen';
import { Section } from '../components/Section';
import { colors } from '../constants/theme';

type CoupleConnectScreenProps = {
  onConnected: () => void;
};

export function CoupleConnectScreen({ onConnected }: CoupleConnectScreenProps) {
  return (
    <Screen
      title="커플 연결"
      subtitle="초대 코드를 공유하거나 상대방 코드를 입력해 둘만의 기록 공간을 만듭니다."
      footer={<AppButton label="임시로 연결 완료" onPress={onConnected} />}
    >
      <Section title="내 초대 코드">
        <View style={styles.codeBox}>
          <Text style={styles.code}>A1B2C3</Text>
        </View>
        <AppButton label="코드 복사" onPress={() => undefined} variant="secondary" />
      </Section>
      <Section title="상대방 코드 입력">
        <TextInput
          autoCapitalize="characters"
          placeholder="예: K9L8M7"
          placeholderTextColor={colors.textMuted}
          style={styles.input}
        />
      </Section>
    </Screen>
  );
}

const styles = StyleSheet.create({
  codeBox: {
    alignItems: 'center',
    backgroundColor: colors.warningSoft,
    borderRadius: 8,
    padding: 20,
  },
  code: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 0,
  },
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
});

