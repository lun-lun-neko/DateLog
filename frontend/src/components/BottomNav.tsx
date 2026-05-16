import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '../constants/theme';
import type { MainTab } from '../types/navigation';

type BottomNavProps = {
  currentTab: MainTab;
  onTabChange: (tab: MainTab) => void;
};

const tabs: Array<{ id: MainTab; label: string; icon: string }> = [
  { id: 'date', label: '데이트', icon: '⌖' },
  { id: 'home', label: '커플홈', icon: '♡' },
  { id: 'calendar', label: '캘린더', icon: '□' },
  { id: 'settings', label: '설정', icon: '⚙' },
];

export function BottomNav({ currentTab, onTabChange }: BottomNavProps) {
  return (
    <View style={styles.wrap}>
      {tabs.map((tab) => {
        const active = tab.id === currentTab;

        return (
          <Pressable
            accessibilityRole="tab"
            key={tab.id}
            onPress={() => onTabChange(tab.id)}
            style={styles.item}
          >
            <View style={[styles.iconBubble, active && styles.activeBubble]}>
              <Text style={[styles.icon, active && styles.activeText]}>{tab.icon}</Text>
            </View>
            <Text style={[styles.label, active && styles.activeLabel]}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderTopColor: colors.border,
    borderTopWidth: 2,
    bottom: 0,
    flexDirection: 'row',
    height: 74,
    justifyContent: 'space-around',
    left: 0,
    paddingBottom: 8,
    paddingHorizontal: 8,
    position: 'absolute',
    right: 0,
  },
  item: {
    alignItems: 'center',
    flex: 1,
    gap: 2,
    justifyContent: 'center',
  },
  iconBubble: {
    alignItems: 'center',
    borderRadius: 999,
    height: 30,
    justifyContent: 'center',
    width: 44,
  },
  activeBubble: {
    backgroundColor: colors.lilac,
  },
  icon: {
    color: colors.textMuted,
    fontSize: 17,
    fontWeight: '800',
  },
  activeText: {
    color: colors.primaryDark,
  },
  label: {
    color: colors.text,
    fontSize: 12,
    fontWeight: '700',
  },
  activeLabel: {
    color: colors.primaryDark,
  },
});

