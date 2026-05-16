import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../constants/theme';

type MapPreviewProps = {
  routeCount: number;
  placeCount: number;
};

export function MapPreview({ routeCount, placeCount }: MapPreviewProps) {
  return (
    <View style={styles.map}>
      <View style={styles.route} />
      <View style={[styles.pin, styles.pinOne]} />
      <View style={[styles.pin, styles.pinTwo]} />
      <Text style={styles.label}>{routeCount} route points · {placeCount} places</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    aspectRatio: 1.45,
    backgroundColor: colors.mapBase,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    overflow: 'hidden',
    position: 'relative',
  },
  route: {
    backgroundColor: colors.route,
    borderRadius: 999,
    height: 5,
    left: '18%',
    position: 'absolute',
    top: '50%',
    transform: [{ rotate: '-18deg' }],
    width: '65%',
  },
  pin: {
    backgroundColor: colors.primaryDark,
    borderColor: '#ffffff',
    borderRadius: 999,
    borderWidth: 3,
    height: 18,
    position: 'absolute',
    width: 18,
  },
  pinOne: {
    left: '21%',
    top: '43%',
  },
  pinTwo: {
    right: '19%',
    top: '35%',
  },
  label: {
    bottom: 12,
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: '700',
    left: 12,
    position: 'absolute',
  },
});

