import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import LottieView from 'lottie-react-native';
import {useTemplateContext} from '../../template/app-review/template-context';
import {Theme} from '../../variables/theme.native';
import {BOX_STYLE} from '../../variables/shadow';
import {CardCongratsProps} from './types';

type StyleSheetType = {
  animation: ViewStyle;
  card: ViewStyle;
  cardTitle: TextStyle;
  iconBig: ViewStyle;
  iconSmall: ViewStyle;
  reward: ViewStyle;
  rewardText: TextStyle;
};

const createStyleSheet = (theme: Theme): StyleSheetType =>
  StyleSheet.create({
    animation: {
      marginBottom: 12,
      width: 132,
      height: 132
    },
    // eslint-disable-next-line @coorpacademy/coorpacademy/no-overwriting-spread
    card: {
      alignItems: 'center',
      paddingTop: 32,
      paddingBottom: 24,
      borderRadius: 24,
      margin: 10,
      width: 280,
      height: 317,
      ...BOX_STYLE,
      backgroundColor: theme.colors.white
    },
    cardTitle: {
      fontWeight: '400',
      fontSize: 32,
      lineHeight: 40,
      color: theme.colors.text.primary
    },
    reward: {
      alignItems: 'center'
    },
    rewardText: {
      fontWeight: '700',
      fontSize: 64,
      lineHeight: 77,
      marginHorizontal: 10
    },
    iconBig: {
      width: 70,
      height: 70
    },
    iconSmall: {
      width: 53,
      height: 53
    }
  });

const CardCongrats = ({
  animationUri,
  Icon,
  value,
  text,
  iconColor,
  textColor,
  direction
}: CardCongratsProps) => {
  const {theme} = useTemplateContext();

  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  if (!styleSheet) {
    return null;
  }

  return (
    <View style={styleSheet.card}>
      <View style={styleSheet.animation}>
        <LottieView source={{uri: animationUri}} autoPlay loop={false} />
      </View>
      <Text style={styleSheet.cardTitle}>{text}</Text>
      <View style={[styleSheet.reward, {flexDirection: direction}]}>
        <Text style={[styleSheet.rewardText, {color: textColor}]}>{value}</Text>
        <Icon style={styleSheet.iconSmall} color={iconColor} />
      </View>
    </View>
  );
};

export default CardCongrats;
