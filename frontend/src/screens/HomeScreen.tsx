import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../constants/theme';

export function HomeScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.coupleCard}>
        <Text style={styles.names}>나(ASDFASDF)</Text>
        <Text style={styles.heart}>♥</Text>
        <Text style={styles.names}>너(qwerqwer)</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>알람이 켜져있습니다</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>개발자에게 메일 보내기</Text>
      </View>
      <View style={styles.ready}>
        <Text style={styles.readyText}>커플홈 확장 기능은 아직 준비중</Text>
        <Text style={styles.readySub}>오늘의 질문, 디데이, 버킷리스트가 여기에 들어갑니다.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
    flex: 1,
    gap: 16,
    justifyContent: 'center',
    padding: 24,
    paddingBottom: 98,
  },
  coupleCard: {
    alignItems: 'center',
    borderColor: colors.border,
    borderRadius: 18,
    borderWidth: 2,
    gap: 4,
    padding: 24,
  },
  names: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '900',
  },
  heart: {
    color: colors.primaryDark,
    fontSize: 24,
  },
  card: {
    borderColor: colors.border,
    borderRadius: 12,
    borderWidth: 2,
    padding: 22,
  },
  cardTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '900',
    textAlign: 'center',
  },
  ready: {
    marginTop: 28,
  },
  readyText: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
  },
  readySub: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 8,
    textAlign: 'center',
  },
});

