import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {
  NovaCompositionCoorpacademyCheck as RightIcon,
  NovaSolidStatusClose as WrongIcon
} from '@coorpacademy/nova-icons';
import {COLORS} from '../../variables/colors';
import {HeaderStepItemProps} from './types';

type StyleSheetType = {
  step: ViewStyle;
  stepText: TextStyle;
  icon: ViewStyle;
};

const createStyle = (current: boolean, icon: HeaderStepItemProps['icon']): StyleSheetType => {
  let backgroundColor;

  switch (icon) {
    case 'right':
      backgroundColor = COLORS.positive;
      break;
    case 'wrong':
      backgroundColor = COLORS.negative;
      break;
    case 'no-answer':
    default:
      backgroundColor = COLORS.gray;
  }

  return StyleSheet.create({
    step: {
      width: current ? 40 : 32,
      height: current ? 40 : 32,
      opacity: current ? 1 : 0.5,
      marginHorizontal: 8,
      backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50
    },
    stepText: {
      fontWeight: '600',
      fontSize: current ? 16 : 12
    },
    icon: {
      width: current ? 14 : 12,
      height: current ? 14 : 12
    }
  });
};

const Step = ({value, icon, current}: HeaderStepItemProps) => {
  const [style, setStyle] = useState<StyleSheetType | null>(null);

  useEffect(() => {
    const _style = createStyle(current, icon);
    setStyle(_style);
  }, [current, icon]);

  if (!style) {
    return null;
  }

  let child;

  switch (icon) {
    case 'right':
      child = <RightIcon style={style.icon} color="#fff" />;
      break;
    case 'wrong':
      child = <WrongIcon style={style.icon} color="#fff" />;
      break;
    case 'no-answer':
    default:
      child = <Text style={style.stepText}>{value}</Text>;
  }

  return <View style={style.step}>{child}</View>;
};

export default Step;
