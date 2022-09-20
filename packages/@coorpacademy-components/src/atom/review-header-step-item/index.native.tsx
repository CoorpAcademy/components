import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const createStyle = (current: boolean) =>
  StyleSheet.create({
    step: {
      width: current ? 40 : 32,
      height: current ? 40 : 32,
      opacity: current ? 1 : 0.5,
      marginHorizontal: 8,
      backgroundColor: '#EAEAEB', // flex-debug,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50
    },
    stepText: {
      fontWeight: '600',
      fontSize: current ? 16 : 12
      // lineHeight: current ? 16 : 12
    }
  });

type StepProps = {
  current: boolean;
  icon: 'no-answer' | 'right' | 'wrong';
  value: string;
};

const Step = ({value, icon, current}: StepProps) => {
  const style = createStyle(current, icon);

  return (
    <View style={style.step}>
      <Text style={style.stepText}>{value}</Text>
    </View>
  );
};

export default Step;
