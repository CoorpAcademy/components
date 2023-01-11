import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {NovaSolidStatusClose as CloseIcon} from '@coorpacademy/nova-icons';
import Step from '../../atom/review-header-step-item/index.native';
import Touchable from '../../hoc/touchable/index.native';
import {HeaderProps} from './types';

type StyleSheetType = {
  container: ViewStyle;
  header: ViewStyle;
  iconContainer: ViewStyle;
  icon: ViewStyle;
};

const style: StyleSheetType = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  header: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    paddingTop: 25
  },
  iconContainer: {
    position: 'absolute',
    right: 5,
    bottom: 10,
    borderRadius: 12,
    padding: 5
  },
  icon: {
    width: 12,
    height: 12
  }
});

const ReviewHeader = (props: HeaderProps) => {
  const {steps, onQuitClick} = props;

  return (
    <View style={style.container}>
      <View style={style.header}>
        {steps.map(step => (
          <Step {...step} key={step.value} />
        ))}
      </View>
      <Touchable
        style={style.iconContainer}
        isHighlight
        onPress={onQuitClick}
        accessibilityLabel="open-popin-button"
        testID="open-popin-button"
      >
        <CloseIcon style={style.icon} color="#06265B" />
      </Touchable>
    </View>
  );
};

export default ReviewHeader;
