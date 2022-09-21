import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import Step from '../../atom/review-header-step-item/index.native';
import {Props} from './types';

type StyleSheetType = {
  header: ViewStyle;
};

const style: StyleSheetType = StyleSheet.create({
  header: {
    // backgroundColor: '#ded', // flex-debug
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    paddingTop: 25
  }
});

const ReviewHeader = (props: Props) => {
  const {steps} = props;

  return (
    <View style={style.header}>
      {steps.map(step => (
        <Step {...step} key={step.value} />
      ))}
    </View>
  );
};

export default ReviewHeader;
