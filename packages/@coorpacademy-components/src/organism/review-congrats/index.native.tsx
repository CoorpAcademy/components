import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import LottieView from 'lottie-react-native';
import {
  NovaCompositionCoorpacademyStar as StarIcon,
  NovaSolidVoteRewardsRewardsBadge5 as RankIcon
} from '@coorpacademy/nova-icons';

import {useTemplateContext} from '../../template/app-review/template-context';
import {Theme} from '../../variables/theme.native';
import {ReviewCongratsProps} from './prop-types';

type StyleSheetType = {
  congrats: ViewStyle;
  card: ViewStyle;
  iconBig: ViewStyle;
  iconSmall: ViewStyle;
  animation: ViewStyle;
  confettis: ViewStyle;
  reward: ViewStyle;
  rewardText: TextStyle;
  title: TextStyle;
};

const createStyleSheet = (theme: Theme): StyleSheetType =>
  StyleSheet.create({
    congrats: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: '#e7e7e778',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 25
    },
    title: {
      fontWeight: '400',
      fontSize: 32,
      lineHeight: 40,
      color: theme.colors.text.primary
    },
    confettis: {
      flexGrow: 1,
      position: 'absolute',
      width: '100%',
      height: '100%'
    },
    card: {
      alignItems: 'center',
      paddingTop: 32,
      paddingBottom: 24,
      backgroundColor: theme.colors.white,
      borderRadius: 24,
      width: 280,
      height: 317
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
    },
    animation: {
      marginBottom: 12,
      width: 132,
      height: 132
    }
  });

const CardCongrats = ({
  animationUri,
  RewardIcon,
  value,
  text,
  rewardIconColor,
  rewardTextColor,
  rewardDirection
}) => {
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
      <Text style={styleSheet.title}>{text}</Text>
      <View style={[styleSheet.reward, {flexDirection: rewardDirection}]}>
        <Text style={[styleSheet.rewardText, {color: rewardTextColor}]}>{value}</Text>
        <RewardIcon style={styleSheet.iconSmall} color={rewardIconColor} />
      </View>
    </View>
  );
};

const ReviewHeader = (props: ReviewCongratsProps) => {
  const {
    'aria-label': ariaLabel,
    'data-name': dataName,
    animationLottie,
    title,
    cardCongratsStar,
    cardCongratsRank,
    buttonRevising,
    buttonRevisingSkill
  } = props;

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
    <View style={styleSheet.congrats}>
      <Text style={styleSheet.title}>{title}</Text>
      {cardCongratsRank ? (
        <CardCongrats
          animationUri={cardCongratsRank.animationLottie.animationSrc}
          text={cardCongratsRank.reviewCardTitle}
          value={`${cardCongratsRank.reviewCardValue} ${cardCongratsRank.rankSuffix}`}
          RewardIcon={RankIcon}
          rewardIconColor={theme.colors.positive}
          rewardTextColor={theme.colors.text.primary}
          rewardDirection="row-reverse"
        />
      ) : null}
      <CardCongrats
        animationUri={cardCongratsStar.animationLottie.animationSrc}
        RewardIcon={StarIcon}
        text={cardCongratsStar.reviewCardTitle}
        value={cardCongratsStar.reviewCardValue}
        rewardIconColor={theme.colors.battle}
        rewardTextColor={theme.colors.battle}
        rewardDirection="row"
      />
      <LottieView
        source={{uri: animationLottie.animationSrc}}
        autoPlay
        loop={false}
        style={styleSheet.confettis}
      />
    </View>
  );
};

export default ReviewHeader;
