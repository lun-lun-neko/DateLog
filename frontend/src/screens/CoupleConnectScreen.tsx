import { StyleSheet, Text, TextInput, View } from 'react-native';

import { AppButton } from '../components/AppButton';
import { colors } from '../constants/theme';

type CoupleConnectScreenProps = {
  onConnected: () => void;
  onSkip?: () => void;
};

export function CoupleConnectScreen({ onConnected, onSkip }: CoupleConnectScreenProps) {
  return (
    <View style={styles.screen}>
      <View style={styles.phoneFrame}>
        <Text style={styles.skip} onPress={onSkip}>건너뛰기</Text>
        <View style={styles.card}>
          <Text style={styles.label}>나의 코드</Text>
          <Text style={styles.code}>ASDFASDF</Text>
        </View>
        <View style={styles.row}>
          <TextInput
            autoCapitalize="characters"
            placeholder="코드 입력하세요"
            placeholderTextColor={colors.textMuted}
            style={styles.input}
          />
          <AppButton label="제출" onPress={onConnected} variant="secondary" />
        </View>
        <View style={styles.notice}>
          <Text style={styles.noticeText}>알람이 켜져있습니다</Text>
        </View>
        <AppButton label="개발자에게 메일 보내기" onPress={() => undefined} variant="secondary" />
      </View>
      <AppButton label="임시로 연결 완료" onPress={onConnected} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
    flex: 1,
    gap: 18,
    justifyContent: 'center',
    padding: 24,
  },
  phoneFrame: {
    borderColor: colors.border,
    borderRadius: 26,
    borderWidth: 2,
    gap: 14,
    padding: 18,
    paddingTop: 44,
  },
  skip: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '900',
    position: 'absolute',
    right: 18,
    top: 18,
  },
  card: {
    alignItems: 'center',
    borderColor: colors.border,
    borderRadius: 14,
    borderWidth: 2,
    padding: 22,
  },
  label: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '800',
  },
  code: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '900',
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
  },
  input: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 2,
    color: colors.text,
    flex: 1,
    fontSize: 15,
    minHeight: 48,
    paddingHorizontal: 12,
  },
  notice: {
    borderColor: colors.border,
    borderRadius: 12,
    borderWidth: 2,
    padding: 18,
  },
  noticeText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
  },
});
