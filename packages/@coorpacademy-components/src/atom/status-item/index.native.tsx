import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {
  NovaCompositionCoorpacademyCheck as RightIcon,
  NovaSolidStatusClose as WrongIcon
} from '@coorpacademy/nova-icons';
import {COLORS} from '../../variables/colors';
import {StatusItemProps} from './types';

type StyleSheetType = {
  step: ViewStyle;
  stepText: TextStyle;
  icon: ViewStyle;
};

const createStyle = (icon: StatusItemProps['icon'], current?: boolean): StyleSheetType => {
  let backgroundColor;

  switch (icon) {
    case 'right':
      backgroundColor = COLORS.cm_positive_500;
      break;
    case 'wrong':
      backgroundColor = COLORS.negative;
      break;
    case 'no-answer':
    default:
      backgroundColor = COLORS.cm_grey_100;
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

const Step = ({value, icon, current}: StatusItemProps) => {
  const [style, setStyle] = useState<StyleSheetType | null>(null);

  useEffect(() => {
    const _style = createStyle(icon, current);
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
