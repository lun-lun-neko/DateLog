import { Pressable, StyleSheet, Text } from 'react-native';

import { colors } from '../constants/theme';

type AppButtonProps = {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'kakao' | 'outlineLight' | 'danger';
};

export function AppButton({ label, onPress, variant = 'primary' }: AppButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.label, ['primary', 'danger'].includes(variant) ? styles.primaryLabel : styles.secondaryLabel, variant === 'outlineLight' && styles.lightLabel]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    borderRadius: 8,
    minHeight: 48,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  primary: {
    backgroundColor: colors.primaryDark,
  },
  secondary: {
    backgroundColor: colors.surfaceMuted,
    borderColor: colors.border,
    borderWidth: 1,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  kakao: {
    backgroundColor: colors.yellow,
    borderColor: colors.border,
    borderWidth: 2,
  },
  outlineLight: {
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderColor: '#ffffff',
    borderWidth: 2,
  },
  danger: {
    backgroundColor: colors.routeStrong,
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
  },
  primaryLabel: {
    color: '#ffffff',
  },
  secondaryLabel: {
    color: colors.text,
  },
  lightLabel: {
    color: '#ffffff',
  },
  pressed: {
    opacity: 0.78,
  },
});
