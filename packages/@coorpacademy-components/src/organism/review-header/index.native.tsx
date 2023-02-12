import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {NovaSolidStatusClose as CloseIcon} from '@coorpacademy/nova-icons';
import Step from '../../atom/status-item/index.native';
import Touchable from '../../hoc/touchable/index.native';
import {HeaderProps} from './types';

type StyleSheetType = {
  container: ViewStyle;
  header: ViewStyle;
  touchArea: ViewStyle;
  icon: ViewStyle;
};

const style: StyleSheetType = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%'
  },
  header: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    paddingTop: 8
  },
  touchArea: {
    position: 'absolute',
    right: 24,
    borderRadius: 12,
    paddingTop: 16,
    padding: 8
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
        style={style.touchArea}
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
