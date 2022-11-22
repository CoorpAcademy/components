import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
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
    width: 30,
    height: 30
  },
  resultLabel: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 24,
    textTransform: 'uppercase',
    wordBreak: 'break-word',
    marginLeft: 12
  }
});

const popinRight = StyleSheet.compose(styles.popin, styles.right);

const ReviewCorrectionPopin = props => {
  const {resultLabel} = props;
  return (
    <View style={styles.wrapper}>
      <View style={popinRight}>
        <View style={styles.correctionSection}>
          <View style={styles.iconCircle}>
            <RightIcon style={styles.icon} color={COLORS.positive} />
          </View>
          <Text aria-label={resultLabel} style={styles.resultLabel}>
            {resultLabel}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewCorrectionPopin;
