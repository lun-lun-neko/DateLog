import { StyleSheet, Text, View } from 'react-native';

import { AppButton } from '../components/AppButton';
import { colors } from '../constants/theme';

type LoginScreenProps = {
  onKakaoLogin: () => void;
  onGuestStart: () => void;
};

export function LoginScreen({ onKakaoLogin, onGuestStart }: LoginScreenProps) {
  return (
    <View style={styles.screen}>
      <View style={styles.logoWrap}>
        <View style={styles.logoCard}>
          <Text style={styles.logoMark}>♡</Text>
        </View>
        <View style={styles.mapBadge}>
          <Text style={styles.badgeText}>⌖</Text>
        </View>
      </View>

      <View style={styles.copy}>
        <Text style={styles.title}>데이트 로그</Text>
        <Text style={styles.subtitle}>우리의 발자국을 지도 위에 기록해요</Text>
      </View>

      <View style={styles.actions}>
        <AppButton label="카카오로 시작하기" onPress={onKakaoLogin} variant="kakao" />
        <AppButton label="로그인 없이 시작하기" onPress={onGuestStart} variant="outlineLight" />
        <Text style={styles.terms}>시작하면 서비스 이용약관과 개인정보 처리방침에 동의하게 됩니다.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.primaryDark,
    flex: 1,
    justifyContent: 'space-between',
    padding: 24,
    paddingBottom: 42,
    paddingTop: 92,
  },
  logoWrap: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  logoCard: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 28,
    borderWidth: 2,
    height: 116,
    justifyContent: 'center',
    width: 116,
  },
  logoMark: {
    color: colors.primaryDark,
    fontSize: 62,
    fontWeight: '900',
  },
  mapBadge: {
    alignItems: 'center',
    backgroundColor: colors.accentDark,
    borderColor: colors.surface,
    borderRadius: 999,
    borderWidth: 3,
    bottom: -8,
    height: 46,
    justifyContent: 'center',
    position: 'absolute',
    right: -12,
    width: 46,
  },
  badgeText: {
    color: colors.surface,
    fontSize: 24,
    fontWeight: '900',
  },
  copy: {
    alignItems: 'center',
    gap: 10,
  },
  title: {
    color: colors.surface,
    fontSize: 42,
    fontWeight: '900',
    letterSpacing: 0,
  },
  subtitle: {
    color: '#ffe9ee',
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },
  actions: {
    gap: 12,
  },
  terms: {
    color: '#ffe9ee',
    fontSize: 12,
    lineHeight: 18,
    paddingHorizontal: 16,
    textAlign: 'center',
  },
});

