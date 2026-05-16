import { StyleSheet, Text, View } from 'react-native';

import { MapStage } from '../components/MapStage';
import { colors } from '../constants/theme';

const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
const activeDays = [10, 15, 22];

export function DateHistoryScreen() {
  const days = Array.from({ length: 31 }, (_, index) => index + 1);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>2026년 5월</Text>
        <Text style={styles.badge}>데이트 3개</Text>
      </View>
      <View style={styles.calendar}>
        <View style={styles.weekRow}>
          {weekDays.map((day) => (
            <Text key={day} style={styles.weekText}>{day}</Text>
          ))}
        </View>
        <View style={styles.grid}>
          {days.map((day) => {
            const active = activeDays.includes(day);
            return (
              <View key={day} style={[styles.dayCell, active && styles.activeDay]}>
                <Text style={[styles.dayText, active && styles.activeDayText]}>{day}</Text>
              </View>
            );
          })}
        </View>
      </View>

      <View style={styles.detail}>
        <Text style={styles.detailTitle}>2026년 5월 16일의 데이트</Text>
        <View style={styles.mapThumb}>
          <MapStage completed />
        </View>
        <Text style={styles.recordTitle}>{'<홍대 갤러리 데이트>'}</Text>
        <View style={styles.memoBox}>
          <Text style={styles.memoText}>데이트 소감 작성하기</Text>
        </View>
        <Text style={styles.smallLabel}>캘린더 색상 바꾸기</Text>
        <View style={styles.colorRow}>
          {[colors.accent, colors.green, colors.primary, colors.yellow, colors.lilac].map((item) => (
            <View key={item} style={[styles.colorDot, { backgroundColor: item }]} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
    flex: 1,
    paddingBottom: 90,
    paddingHorizontal: 18,
    paddingTop: 56,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  title: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '900',
  },
  badge: {
    backgroundColor: colors.primarySoft,
    borderRadius: 999,
    color: colors.primaryDark,
    fontSize: 13,
    fontWeight: '900',
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  calendar: {
    borderColor: colors.border,
    borderRadius: 16,
    borderWidth: 2,
    padding: 12,
  },
  weekRow: {
    flexDirection: 'row',
  },
  weekText: {
    color: colors.textMuted,
    flex: 1,
    fontSize: 12,
    fontWeight: '800',
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  dayCell: {
    alignItems: 'center',
    aspectRatio: 1,
    justifyContent: 'center',
    width: `${100 / 7}%`,
  },
  activeDay: {
    backgroundColor: colors.primarySoft,
    borderRadius: 8,
  },
  dayText: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '700',
  },
  activeDayText: {
    color: colors.primaryDark,
    fontWeight: '900',
  },
  detail: {
    gap: 10,
    marginTop: 18,
  },
  detailTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
  },
  mapThumb: {
    borderColor: colors.border,
    borderRadius: 14,
    borderWidth: 2,
    height: 160,
    overflow: 'hidden',
  },
  recordTitle: {
    backgroundColor: colors.yellow,
    borderRadius: 8,
    color: colors.text,
    fontSize: 15,
    fontWeight: '900',
    padding: 8,
    textAlign: 'center',
  },
  memoBox: {
    borderColor: colors.border,
    borderRadius: 12,
    borderWidth: 2,
    padding: 18,
  },
  memoText: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '800',
  },
  smallLabel: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '800',
  },
  colorRow: {
    flexDirection: 'row',
    gap: 8,
  },
  colorDot: {
    borderRadius: 999,
    height: 18,
    width: 18,
  },
});

