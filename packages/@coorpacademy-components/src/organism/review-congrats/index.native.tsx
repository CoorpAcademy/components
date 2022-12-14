import React, {useEffect, useRef, useState} from 'react';
import {Animated, ScrollView, StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';
import LottieView from 'lottie-react-native';
import {noop} from 'lodash/fp';
import {
  NovaCompositionCoorpacademyStar as StarIcon,
  NovaSolidVoteRewardsRewardsBadge5 as RankIcon
} from '@coorpacademy/nova-icons';
import {
  sequence,
  parallel,
  useAnimateProp,
  useTranslateY,
  useTranslateX
} from '@coorpacademy/react-native-animation';
import type {AnimatePropParams} from '@coorpacademy/react-native-animation/es/use-animate-prop';

import {useTemplateContext} from '../../template/app-review/template-context';
import {Theme} from '../../variables/theme.native';
import Button from '../../atom/button/index.native';
import {BOX_STYLE} from '../../variables/shadow';
import CardCongrats from '../../molecule/card-congrats/index.native';
import {ReviewCongratsProps} from './prop-types';

type StyleSheetType = {
  buttons: ViewStyle;
  congrats: ViewStyle;
  confettis: ViewStyle;
  scrollView: ViewStyle;
  scrollViewContent: ViewStyle;
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
    },
    scrollView: {
      height: 300
    },
    scrollViewContent: {
      alignItems: 'center',
      paddingHorizontal: 40
    }
  });

const fadeIn: AnimatePropParams = {
  property: 'opacity',
  fromValue: 0,
  toValue: 1,
  duration: 350
};

const translateHorizontally = {
  property: 'translateX',
  fromValue: 180,
  toValue: 0,
  duration: 800
};

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

  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);
  const [isCongratsTranslationDone, setCongratsTranslationDone] = useState<boolean>(false);
  const [isRankShown, setRankShown] = useState<boolean>(false);

  const scrollViewRef = useRef<ScrollView>(null);

  const showCongrats = useAnimateProp({
    property: 'opacity',
    fromValue: 0,
    toValue: 1,
    duration: 950,
    onComplete: () => {
      setCongratsTranslationDone(true);
    }
  });

  const translateCongrats = useTranslateY({
    fromValue: 100,
    toValue: 0,
    duration: 550
  });

  const showConfettis = useAnimateProp(fadeIn);
  const fadeInRank = useAnimateProp(fadeIn);
  const translateRank = useTranslateX({
    ...translateHorizontally,
    onComplete: () => {
      setRankShown(true);
      setTimeout(() => {
        scrollViewRef?.current?.scrollToEnd();
      }, 700);
    }
  });

  const animatedRank = [fadeInRank.animatedStyle, translateRank.animatedStyle];

  const fadeInStars = useAnimateProp({
    ...fadeIn,
    delay: 1000
  });

  const translateStars = useTranslateX({
    ...translateHorizontally,
    delay: 1000
  });

  const showButton1 = useAnimateProp(fadeIn);
  const showButton2 = useAnimateProp(fadeIn);

  const congratsSequence = sequence([
    parallel([showCongrats, translateCongrats]),
    parallel([showConfettis, fadeInRank, translateRank]),
    parallel([fadeInStars, translateStars]),
    sequence([showButton1, showButton2])
  ]);

  useEffect(() => {
    congratsSequence.start();
    // (required only once on mount)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  if (!styleSheet) {
    return null;
  }

  const handleContinueRevisingPress = buttonRevising?.onClick || noop;
  const handleReviseAnotherSkillPress = buttonRevisingSkill?.onClick || noop;

  return (
    <Animated.View
      style={[styleSheet.congrats, translateCongrats.animatedStyle, showCongrats.animatedStyle]}
      accessibilityLabel={ariaLabel}
    >
      <Text style={styleSheet.title}>{title}</Text>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styleSheet.scrollView}
        contentContainerStyle={styleSheet.scrollViewContent}
      >
        {cardCongratsRank ? (
          <Animated.View style={animatedRank}>
            <CardCongrats
              animationUri={cardCongratsRank.animationLottie.animationSrc}
              text={cardCongratsRank.reviewCardTitle}
              value={`${cardCongratsRank.reviewCardValue} ${cardCongratsRank.rankSuffix}`}
              Icon={RankIcon}
              iconColor={theme.colors.positive}
              textColor={theme.colors.text.primary}
              direction="row-reverse"
            />
          </Animated.View>
        ) : null}
        <Animated.View style={[fadeInStars.animatedStyle, translateStars.animatedStyle]}>
          <CardCongrats
            animationUri={isRankShown ? cardCongratsStar.animationLottie.animationSrc : null}
            Icon={StarIcon}
            text={cardCongratsStar.reviewCardTitle}
            value={cardCongratsStar.reviewCardValue}
            iconColor={theme.colors.battle}
            textColor={theme.colors.battle}
            direction="row"
          />
        </Animated.View>
      </ScrollView>

      <Animated.View style={styleSheet.buttons}>
        {buttonRevisingSkill ? (
          <Animated.View style={showButton1.animatedStyle}>
            <Button
              onPress={handleReviseAnotherSkillPress}
              accessibilityLabel={buttonRevisingSkill['aria-label']}
              submitValue={buttonRevisingSkill.label}
              style={{...BOX_STYLE, backgroundColor: '#fff'}}
              textStyle={{color: '#123'}}
            />
          </Animated.View>
        ) : null}
        {buttonRevising ? (
          <Animated.View style={showButton2.animatedStyle}>
            <Button
              onPress={handleContinueRevisingPress}
              accessibilityLabel={buttonRevising['aria-label']}
              submitValue={buttonRevising.label}
            />
          </Animated.View>
        ) : null}
      </Animated.View>

      {isCongratsTranslationDone ? (
        <Animated.View
          pointerEvents="none"
          style={[styleSheet.confettis, showConfettis.animatedStyle]}
        >
          <LottieView source={{uri: animationLottie.animationSrc}} autoPlay loop={false} />
        </Animated.View>
      ) : null}
    </Animated.View>
  );
};

export default ReviewCongrats;
