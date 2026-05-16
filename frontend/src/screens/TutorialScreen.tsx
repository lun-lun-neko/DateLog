import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppButton } from '../components/AppButton';
import { MapStage } from '../components/MapStage';
import { colors } from '../constants/theme';

type TutorialScreenProps = {
  onComplete: () => void;
  onSkip: () => void;
};

const pages = [
  {
    title: '지도 위에 데이트 경로를 남겨요',
    body: '하루 동안 움직인 길을 부드러운 핑크 경로로 기록합니다.',
  },
  {
    title: '사진과 장소를 바로 꽂아두세요',
    body: '사진 핀, 장소 핀, 메모를 경로 위에 붙여서 데이트를 다시 볼 수 있습니다.',
  },
];

export function TutorialScreen({ onComplete, onSkip }: TutorialScreenProps) {
  const [index, setIndex] = useState(0);
  const page = pages[index];
  const isLast = index === pages.length - 1;

  return (
    <View style={styles.screen}>
      <View style={styles.top}>
        <AppButton label="건너뛰기" onPress={onSkip} variant="ghost" />
      </View>
      <View style={styles.preview}>
        <MapStage active={index === 1} />
      </View>
      <View style={styles.panel}>
        <Text style={styles.title}>{page.title}</Text>
        <Text style={styles.body}>{page.body}</Text>
        <View style={styles.dots}>
          {pages.map((item, itemIndex) => (
            <View key={item.title} style={[styles.dot, itemIndex === index && styles.dotActive]} />
          ))}
        </View>
        <AppButton
          label={isLast ? '커플 연결하기' : '다음'}
          onPress={isLast ? onComplete : () => setIndex(index + 1)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
    flex: 1,
    padding: 20,
    paddingTop: 56,
  },
  top: {
    alignItems: 'flex-end',
  },
  preview: {
    borderColor: colors.border,
    borderRadius: 18,
    borderWidth: 2,
    flex: 1,
    marginVertical: 28,
    overflow: 'hidden',
  },
  panel: {
    gap: 14,
    paddingBottom: 16,
  },
  title: {
    color: colors.text,
    fontSize: 25,
    fontWeight: '900',
    lineHeight: 32,
  },
  body: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
  },
  dots: {
    flexDirection: 'row',
    gap: 8,
    paddingVertical: 4,
  },
  dot: {
    backgroundColor: colors.borderSoft,
    borderRadius: 999,
    height: 8,
    width: 8,
  },
  dotActive: {
    backgroundColor: colors.primaryDark,
    width: 24,
  },
});

