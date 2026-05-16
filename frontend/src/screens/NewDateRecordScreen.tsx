import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { AppButton } from '../components/AppButton';
import { MapStage } from '../components/MapStage';
import { colors } from '../constants/theme';

type DateStatus = 'idle' | 'active' | 'ended';

const colorsForRecord = [colors.accent, colors.green, colors.primary, colors.yellow, colors.lilac];

export function NewDateRecordScreen() {
  const [status, setStatus] = useState<DateStatus>('idle');
  const [showPhotoCard, setShowPhotoCard] = useState(false);
  const [showPlaceCard, setShowPlaceCard] = useState(false);

  return (
    <View style={styles.screen}>
      <MapStage active={status === 'active'} completed={status === 'ended'} />

      <View style={styles.header}>
        <Pressable style={styles.iconButton}>
          <Text style={styles.iconText}>☰</Text>
        </Pressable>
        <View style={styles.search}>
          <Text style={styles.searchIcon}>⌕</Text>
          <TextInput placeholder="장소, 날짜 검색" placeholderTextColor={colors.textMuted} style={styles.searchInput} />
        </View>
        <Pressable style={styles.iconButton}>
          <Text style={styles.iconText}>⌖</Text>
        </Pressable>
      </View>

      {status === 'idle' && (
        <View style={styles.centerAction}>
          <AppButton label="데이트 시작!!" onPress={() => setStatus('active')} />
        </View>
      )}

      {status === 'active' && (
        <View style={styles.activeActions}>
          <View style={styles.pinActions}>
            <Pressable style={[styles.roundAction, styles.photoAction]} onPress={() => setShowPhotoCard(true)}>
              <Text style={styles.roundActionText}>사진</Text>
            </Pressable>
            <Pressable style={[styles.roundAction, styles.placeAction]} onPress={() => setShowPlaceCard(true)}>
              <Text style={styles.roundActionText}>장소</Text>
            </Pressable>
          </View>
          <AppButton label="데이트 종료!!" onPress={() => setStatus('ended')} variant="danger" />
        </View>
      )}

      {status === 'ended' && (
        <View style={styles.savePanel}>
          <Text style={styles.doneTitle}>데이트 로그가 완성 되었어요!</Text>
          <TextInput placeholder="데이트 제목을 입력해주세요" placeholderTextColor={colors.textMuted} style={styles.titleInput} />
          <Text style={styles.smallLabel}>앨범대표 색상 설정</Text>
          <View style={styles.colorRow}>
            {colorsForRecord.map((item) => (
              <View key={item} style={[styles.colorDot, { backgroundColor: item }]} />
            ))}
          </View>
          <View style={styles.saveActions}>
            <AppButton label="데이트 이어하기" onPress={() => setStatus('active')} variant="secondary" />
            <AppButton label="데이트 로그 저장!" onPress={() => setStatus('idle')} />
          </View>
        </View>
      )}

      {showPhotoCard && (
        <View style={styles.modalCard}>
          <Text style={styles.close} onPress={() => setShowPhotoCard(false)}>×</Text>
          <Text style={styles.modalText}>사진 추가</Text>
        </View>
      )}

      {showPlaceCard && (
        <View style={styles.placeList}>
          <Text style={styles.close} onPress={() => setShowPlaceCard(false)}>×</Text>
          <Text style={styles.modalTitle}>근처 장소 목록</Text>
          {['스타벅스', '맥도날드', '리벤느당'].map((place) => (
            <Pressable key={place} style={styles.placeItem} onPress={() => setShowPlaceCard(false)}>
              <Text style={styles.placeName}>{place}</Text>
              <View style={styles.placeThumb} />
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
    flex: 1,
    paddingBottom: 74,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    left: 14,
    position: 'absolute',
    right: 14,
    top: 54,
  },
  iconButton: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 999,
    borderWidth: 2,
    height: 44,
    justifyContent: 'center',
    width: 44,
  },
  iconText: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '900',
  },
  search: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 999,
    borderWidth: 2,
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    height: 44,
    paddingHorizontal: 14,
  },
  searchIcon: {
    color: colors.textMuted,
    fontSize: 18,
  },
  searchInput: {
    color: colors.text,
    flex: 1,
    fontSize: 14,
  },
  centerAction: {
    alignSelf: 'center',
    position: 'absolute',
    top: '50%',
    width: 190,
  },
  activeActions: {
    alignItems: 'center',
    bottom: 96,
    gap: 14,
    left: 24,
    position: 'absolute',
    right: 24,
  },
  pinActions: {
    flexDirection: 'row',
    gap: 34,
  },
  roundAction: {
    alignItems: 'center',
    borderColor: colors.border,
    borderRadius: 999,
    borderWidth: 2,
    height: 58,
    justifyContent: 'center',
    width: 58,
  },
  photoAction: {
    backgroundColor: colors.yellow,
  },
  placeAction: {
    backgroundColor: colors.accent,
  },
  roundActionText: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '900',
  },
  savePanel: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 18,
    borderWidth: 2,
    bottom: 90,
    gap: 10,
    left: 16,
    padding: 14,
    position: 'absolute',
    right: 16,
  },
  doneTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '900',
    textAlign: 'center',
  },
  titleInput: {
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 2,
    color: colors.text,
    height: 42,
    paddingHorizontal: 10,
  },
  smallLabel: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '700',
  },
  colorRow: {
    flexDirection: 'row',
    gap: 8,
  },
  colorDot: {
    borderColor: colors.surface,
    borderRadius: 999,
    borderWidth: 2,
    height: 22,
    width: 22,
  },
  saveActions: {
    gap: 8,
  },
  modalCard: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.borderSoft,
    borderRadius: 18,
    borderWidth: 2,
    height: 260,
    justifyContent: 'center',
    left: 32,
    position: 'absolute',
    right: 32,
    top: 150,
  },
  close: {
    color: colors.textMuted,
    fontSize: 26,
    fontWeight: '900',
    position: 'absolute',
    right: 14,
    top: 8,
  },
  modalText: {
    color: colors.textMuted,
    fontSize: 17,
    fontWeight: '800',
  },
  placeList: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 18,
    borderWidth: 2,
    left: 28,
    padding: 16,
    paddingTop: 40,
    position: 'absolute',
    right: 28,
    top: 128,
  },
  modalTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '900',
    marginBottom: 10,
    textAlign: 'center',
  },
  placeItem: {
    alignItems: 'center',
    borderColor: colors.borderSoft,
    borderRadius: 12,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 12,
  },
  placeName: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '800',
  },
  placeThumb: {
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 2,
    height: 36,
    width: 36,
  },
});

