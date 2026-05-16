import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../constants/theme';

type MapStageProps = {
  active?: boolean;
  completed?: boolean;
};

export function MapStage({ active = false, completed = false }: MapStageProps) {
  return (
    <View style={styles.map}>
      <View style={[styles.road, styles.roadOne]} />
      <View style={[styles.road, styles.roadTwo]} />
      <View style={[styles.road, styles.roadThree]} />
      <View style={styles.water} />

      <View style={[styles.route, active && styles.routeActive, completed && styles.routeComplete]} />
      <View style={[styles.pin, styles.startPin]}>
        <Text style={styles.pinText}>사진</Text>
      </View>
      <View style={[styles.pin, styles.placePin]}>
        <Text style={styles.pinText}>장소</Text>
      </View>
      <View style={[styles.dot, styles.dotOne]} />
      <View style={[styles.dot, styles.dotTwo]} />
      <View style={[styles.dot, styles.dotThree]} />

      <Text style={styles.mapLabel}>Kakao Map 연동 예정</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    backgroundColor: colors.mapBase,
    flex: 1,
    overflow: 'hidden',
    position: 'relative',
  },
  road: {
    backgroundColor: '#ffffff',
    borderColor: '#c7d6e2',
    borderWidth: 1,
    height: 34,
    position: 'absolute',
    width: '135%',
  },
  roadOne: {
    left: '-18%',
    top: '20%',
    transform: [{ rotate: '-24deg' }],
  },
  roadTwo: {
    left: '-10%',
    top: '43%',
    transform: [{ rotate: '18deg' }],
  },
  roadThree: {
    left: '-20%',
    top: '65%',
    transform: [{ rotate: '-10deg' }],
  },
  water: {
    backgroundColor: '#99dcec',
    bottom: 0,
    position: 'absolute',
    right: -24,
    top: 0,
    width: '22%',
  },
  route: {
    backgroundColor: colors.route,
    borderRadius: 999,
    height: 26,
    left: '20%',
    opacity: 0.75,
    position: 'absolute',
    top: '34%',
    transform: [{ rotate: '37deg' }],
    width: '58%',
  },
  routeActive: {
    height: 30,
    opacity: 0.82,
  },
  routeComplete: {
    backgroundColor: colors.routeStrong,
    opacity: 0.88,
    width: '68%',
  },
  pin: {
    alignItems: 'center',
    backgroundColor: colors.yellow,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 2,
    justifyContent: 'center',
    minWidth: 54,
    paddingHorizontal: 8,
    paddingVertical: 6,
    position: 'absolute',
  },
  startPin: {
    left: '35%',
    top: '48%',
  },
  placePin: {
    right: '18%',
    top: '30%',
  },
  pinText: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '800',
  },
  dot: {
    backgroundColor: colors.yellow,
    borderColor: '#ffffff',
    borderRadius: 999,
    borderWidth: 3,
    height: 34,
    position: 'absolute',
    width: 34,
  },
  dotOne: {
    left: '12%',
    top: '70%',
  },
  dotTwo: {
    left: '55%',
    top: '28%',
  },
  dotThree: {
    right: '8%',
    top: '56%',
  },
  mapLabel: {
    backgroundColor: 'rgba(255,255,255,0.72)',
    borderRadius: 999,
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '700',
    left: 14,
    paddingHorizontal: 10,
    paddingVertical: 6,
    position: 'absolute',
    top: 14,
  },
});
