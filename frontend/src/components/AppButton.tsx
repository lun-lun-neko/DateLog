import { Pressable, StyleSheet, Text } from 'react-native';

import { colors } from '../constants/theme';

type AppButtonProps = {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
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
      <Text style={[styles.label, variant === 'primary' ? styles.primaryLabel : styles.secondaryLabel]}>
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
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.surfaceMuted,
    borderColor: colors.border,
    borderWidth: 1,
  },
  ghost: {
    backgroundColor: 'transparent',
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
  pressed: {
    opacity: 0.78,
  },
});

