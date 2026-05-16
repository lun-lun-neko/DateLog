import { StyleSheet, Text, TextInput, View } from 'react-native';

import { AppButton } from '../components/AppButton';
import { colors } from '../constants/theme';

type SettingsScreenProps = {
  onCoupleConnect: () => void;
};

export function SettingsScreen({ onCoupleConnect }: SettingsScreenProps) {
  return (
    <View style={styles.screen}>
      <View style={styles.codeCard}>
        <Text style={styles.label}>나의 코드</Text>
        <Text style={styles.code}>ASDFASDF</Text>
      </View>
      <View style={styles.row}>
        <TextInput placeholder="코드 입력하세요" placeholderTextColor={colors.textMuted} style={styles.input} />
        <AppButton label="제출" onPress={onCoupleConnect} variant="secondary" />
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>알람이 켜져있습니다</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>개발자에게 메일 보내기</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
    flex: 1,
    gap: 14,
    justifyContent: 'center',
    padding: 24,
    paddingBottom: 98,
  },
  codeCard: {
    alignItems: 'center',
    borderColor: colors.border,
    borderRadius: 14,
    borderWidth: 2,
    padding: 24,
  },
  label: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '800',
  },
  code: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '900',
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
  },
  input: {
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 2,
    color: colors.text,
    flex: 1,
    minHeight: 48,
    paddingHorizontal: 12,
  },
  card: {
    borderColor: colors.border,
    borderRadius: 12,
    borderWidth: 2,
    padding: 22,
  },
  cardText: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '900',
    textAlign: 'center',
  },
});
