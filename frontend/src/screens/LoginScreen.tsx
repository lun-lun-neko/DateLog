import { StyleSheet, Text, View } from 'react-native';

import { AppButton } from '../components/AppButton';
import { Screen } from '../components/Screen';
import { Section } from '../components/Section';
import { colors } from '../constants/theme';

type LoginScreenProps = {
  onLogin: () => void;
};

export function LoginScreen({ onLogin }: LoginScreenProps) {
  return (
    <Screen
      title="DateLog"
      subtitle="데이트 경로, 장소, 사진, 메모를 한 번에 남기는 커플 기록 앱"
      footer={<AppButton label="카카오로 시작하기" onPress={onLogin} />}
    >
      <View style={styles.heroMap}>
        <View style={styles.path} />
        <View style={[styles.marker, styles.markerA]} />
        <View style={[styles.marker, styles.markerB]} />
      </View>
      <Section title="MVP 목표">
        <Text style={styles.body}>오늘의 데이트를 지도 위 경로와 장소 타임라인으로 저장합니다.</Text>
      </Section>
    </Screen>
  );
}

const styles = StyleSheet.create({
  heroMap: {
    aspectRatio: 1.05,
    backgroundColor: colors.mapBase,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  path: {
    backgroundColor: colors.primary,
    borderRadius: 999,
    height: 7,
    left: '16%',
    position: 'absolute',
    top: '52%',
    transform: [{ rotate: '-28deg' }],
    width: '72%',
  },
  marker: {
    backgroundColor: colors.primaryDark,
    borderColor: '#ffffff',
    borderRadius: 999,
    borderWidth: 4,
    height: 28,
    position: 'absolute',
    width: 28,
  },
  markerA: {
    left: '18%',
    top: '54%',
  },
  markerB: {
    right: '17%',
    top: '32%',
  },
  body: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
  },
});

