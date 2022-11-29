import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
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
  iconCircle: ViewStyle;
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
    iconCircle: {
      borderRadius: 100,
      padding: 34,
      marginBottom: 12,
      width: 132,
      height: 132
    }
  });

const CardCongrats = ({
  TitleIcon,
  RewardIcon,
  value,
  text,
  titleIconColor,
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
      <View style={[styleSheet.iconCircle, {backgroundColor: `${titleIconColor}2f`}]}>
        <TitleIcon style={styleSheet.iconBig} color={titleIconColor} />
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
          text={cardCongratsRank.reviewCardTitle}
          value={`${cardCongratsRank.reviewCardValue} ${cardCongratsRank.rankSuffix}`}
          TitleIcon={RankIcon}
          titleIconColor={theme.colors.battle}
          RewardIcon={RankIcon}
          rewardIconColor={theme.colors.positive}
          rewardTextColor={theme.colors.text.primary}
          rewardDirection="row-reverse"
        />
      ) : null}
      {/* <CardCongrats
        Icon={StarIcon}
        text={cardCongratsStar.reviewCardTitle}
        value={cardCongratsStar.reviewCardValue}
        titleIconColor={theme.colors.battle}
        rewardIconColor={theme.colors.battle}
        rewardTextColor={theme.colors.battle}
        rewardDirection="row"
      /> */}
    </View>
  );
};

export default ReviewHeader;
