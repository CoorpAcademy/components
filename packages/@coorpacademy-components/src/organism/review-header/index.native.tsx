import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import Step from '../../atom/review-header-step-item/index.native';

type ReviewHeaderProps = {style: ViewStyle};

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

const ReviewHeader = (props: ReviewHeaderProps) => {
  const {
    steps,
    mode,
    skillName,
    'aria-label': ariaLabel,
    closeButtonAriaLabel,
    onQuitClick,
    hiddenSteps
  } = props;

  console.log({steps});

  return (
    <View style={style.header}>
      {steps.map(step => (
        <Step key={step.value} {...step} />
      ))}
    </View>
  );
};

export default ReviewHeader;
