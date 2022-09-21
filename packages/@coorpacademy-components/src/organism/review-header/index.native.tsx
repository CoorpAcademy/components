import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import Step from '../../atom/review-header-step-item/index.native';
import {Props as StepProps} from '../../atom/review-header-step-item/prop-types';

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

  const _s: StepProps[] = [
    {current: false, icon: 'right', value: '1'},
    {current: false, icon: 'right', value: '2'},
    {current: false, icon: 'wrong', value: '3'},
    {current: true, icon: 'no-answer', value: '4'},
    {current: false, icon: 'no-answer', value: '5'}
  ];

  return (
    <View style={style.header}>
      {_s.map(step => (
        <Step {...step} key={step.value} />
      ))}
    </View>
  );
};

export default ReviewHeader;
