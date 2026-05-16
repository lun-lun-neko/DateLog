import type { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors, spacing } from '../constants/theme';

type SectionProps = PropsWithChildren<{
  title?: string;
}>;

export function Section({ title, children }: SectionProps) {
  return (
    <View style={styles.section}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    gap: spacing.md,
    padding: spacing.md,
  },
  title: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
  },
});

