import React, {useEffect, useState} from 'react';
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  useWindowDimensions,
  View,
  ViewStyle
} from 'react-native';
import LottieView from 'lottie-react-native';
import {noop} from 'lodash/fp';
import {
  NovaCompositionCoorpacademyStar as StarIcon,
  NovaSolidVoteRewardsRewardsBadge5 as RankIcon
} from '@coorpacademy/nova-icons';

import {useTemplateContext} from '../../template/app-review/template-context';
import {Theme} from '../../variables/theme.native';
import Button from '../../atom/button/index.native';
import {BOX_STYLE} from '../../variables/shadow';
import CardCongrats from '../../molecule/card-congrats/index.native';
import useTranslateVertically from '../../hooks/use-translate-vertically/index.native';
import {ReviewCongratsProps} from './prop-types';

type StyleSheetType = {
  buttons: ViewStyle;
  congrats: ViewStyle;
  confettis: ViewStyle;
  title: TextStyle;
};

const createStyleSheet = (theme: Theme): StyleSheetType =>
  StyleSheet.create({
    congrats: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      paddingVertical: 90,
      flex: 1
    },
    buttons: {
      width: '100%',
      paddingHorizontal: 20,
      flexDirection: 'column',
      justifyContent: 'space-between',
      flex: 1
    },
    title: {
      fontWeight: '400',
      fontSize: 32,
      lineHeight: 40,
      marginVertical: 20,
      color: theme.colors.text.primary
    },
    confettis: {
      flexGrow: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
      pointerEvents: 'box-none'
    }
  });

const ReviewCongrats = (props: ReviewCongratsProps) => {
  const {
    'aria-label': ariaLabel,
    animationLottie,
    title,
    cardCongratsStar,
    cardCongratsRank,
    buttonRevising,
    buttonRevisingSkill
  } = props;

  const {theme} = useTemplateContext();
  const {height: windowHeight} = useWindowDimensions();

  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  const translateUp = useTranslateVertically({
    fromValue: windowHeight,
    toValue: 0
  });

  if (!styleSheet) {
    return null;
  }

  const handleContinueRevisingPress = buttonRevising?.onClick || noop;
  const handleReviseAnotherSkillPress = buttonRevisingSkill?.onClick || noop;

  return (
    <Animated.View style={[styleSheet.congrats, translateUp]} accessibilityLabel={ariaLabel}>
      <Text style={styleSheet.title}>{title}</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{height: 300}}>
        {cardCongratsRank ? (
          <CardCongrats
            animationUri={cardCongratsRank.animationLottie.animationSrc}
            text={cardCongratsRank.reviewCardTitle}
            value={`${cardCongratsRank.reviewCardValue} ${cardCongratsRank.rankSuffix}`}
            Icon={RankIcon}
            iconColor={theme.colors.positive}
            textColor={theme.colors.text.primary}
            direction="row-reverse"
          />
        ) : null}
        <CardCongrats
          animationUri={cardCongratsStar.animationLottie.animationSrc}
          Icon={StarIcon}
          text={cardCongratsStar.reviewCardTitle}
          value={cardCongratsStar.reviewCardValue}
          iconColor={theme.colors.battle}
          textColor={theme.colors.battle}
          direction="row"
        />
      </ScrollView>

      <View style={styleSheet.buttons}>
        {buttonRevisingSkill ? (
          <Button
            onPress={handleReviseAnotherSkillPress}
            accessibilityLabel={buttonRevisingSkill['aria-label']}
            submitValue={buttonRevisingSkill.label}
            style={{...BOX_STYLE, backgroundColor: '#fff'}}
            textStyle={{color: '#123'}}
          />
        ) : null}
        {buttonRevising ? (
          <Button
            onPress={handleContinueRevisingPress}
            accessibilityLabel={buttonRevising['aria-label']}
            submitValue={buttonRevising.label}
          />
        ) : null}
      </View>

      <View pointerEvents="none" style={styleSheet.confettis}>
        <LottieView source={{uri: animationLottie.animationSrc}} autoPlay loop={false} />
      </View>
    </Animated.View>
  );
};

export default ReviewCongrats;
