import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import RenderHTML from 'react-native-render-html';
import {NovaCompositionCoorpacademyCheck as RightIcon} from '@coorpacademy/nova-icons';
import {COLORS} from '../../variables/colors';

const styles = StyleSheet.create({
  wrapper: {
    height: 'auto',
    fontFamily: 'Gilroy',
    color: 'white',
    display: 'flex'
  },
  popin: {
    padding: 32,
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  right: {
    backgroundColor: COLORS.positive,
    shadowRadius: 28,
    shadowColor: COLORS.positive,
    shadowOpacity: 0.4
  },
  correctionSection: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%'
  },
  iconCircle: {
    width: 60,
    minWidth: 60,
    height: 60,
    minHeight: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    opacity: 0.7,
    borderRadius: 50
  },
  icon: {
    height: 30,
    width: 30
  },
  resultLabel: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 24,
    marginLeft: 12,
    textTransform: 'uppercase',
    wordBreak: 'break-word'
  },
  feedbackSection: {
    marginTop: 32
  },
  labelContainer: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 56,
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  label: {
    color: 'white',
    fontSize: 14,
    fontWeight: '900',
    lineHeight: 17,
    wordBreak: 'break-word'
  }
});

const popinRight = StyleSheet.compose(styles.popin, styles.right);

const ReviewCorrectionPopin = props => {
  const {information, resultLabel} = props;
  const source = {
    html: `<p aria-label='${information.message}' style='color:white; font-size:16; font-weight:600; line-height:19;'>${information.message}</p>`
  };

  return (
    <View style={styles.wrapper}>
      <View style={popinRight}>
        <View style={styles.correctionSection}>
          <View style={styles.iconCircle}>
            <RightIcon style={styles.icon} color={COLORS.positive} />
          </View>
          <Text accessibilityLabel={resultLabel} style={styles.resultLabel}>
            {resultLabel}
          </Text>
        </View>
        <View style={styles.feedbackSection} accessibilityLabel="answer-information">
          <View style={styles.labelContainer} needsOffscreenAlphaCompositing>
            <Text accessibilityLabel={information.label} style={styles.label}>
              {information.label}
            </Text>
          </View>
          <RenderHTML source={source} />
        </View>
      </View>
    </View>
  );
};

export default ReviewCorrectionPopin;
