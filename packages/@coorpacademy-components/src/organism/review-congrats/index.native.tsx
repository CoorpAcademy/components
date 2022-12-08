import React, {useEffect, useState} from 'react';
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  useWindowDimensions,
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
import useAnimation from '../../behaviours/use-animation.native';
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

  const animation = useAnimation({
    type: 'sequence',
    steps: [
      {
        property: 'translateY',
        fromValue: windowHeight,
        toValue: 0,
        duration: 850
      },
      {
        type: 'parallel',
        steps: [
          {
            property: 'opacity',
            fromValue: 0,
            toValue: 1,
            duration: 350
          },
          {
            type: 'parallel',
            steps: [
              {
                property: 'opacity',
                fromValue: 0,
                toValue: 1,
                duration: 350
              },
              {
                property: 'translateX',
                fromValue: 180,
                toValue: 0,
                duration: 800
              }
            ]
          }
        ]
      },
      {
        type: 'parallel',
        steps: [
          {
            property: 'opacity',
            fromValue: 0,
            toValue: 1,
            delay: 1000,
            duration: 350
          },
          {
            property: 'translateX',
            fromValue: 180,
            toValue: 0,
            delay: 1000,
            duration: 800
          }
        ]
      },
      {
        property: 'opacity',
        fromValue: 0,
        toValue: 1,
        duration: 850
      }
    ]
  });

  const {timing: translateCongratsUp, style} = animation;
  const [animatedCongratsY, step2, animatedStars, animatedButtons] = style;
  const [animatedConfettis, animatedRank] = step2;

  useEffect(() => {
    translateCongratsUp.start();
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
    <Animated.View style={[styleSheet.congrats, animatedCongratsY]} accessibilityLabel={ariaLabel}>
      <Text style={styleSheet.title}>{title}</Text>
      <ScrollView
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
        <Animated.View style={animatedStars}>
          <CardCongrats
            animationUri={cardCongratsStar.animationLottie.animationSrc}
            Icon={StarIcon}
            text={cardCongratsStar.reviewCardTitle}
            value={cardCongratsStar.reviewCardValue}
            iconColor={theme.colors.battle}
            textColor={theme.colors.battle}
            direction="row"
          />
        </Animated.View>
      </ScrollView>

      <Animated.View style={[styleSheet.buttons, animatedButtons]}>
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
      </Animated.View>

      <Animated.View pointerEvents="none" style={[styleSheet.confettis, animatedConfettis]}>
        <LottieView source={{uri: animationLottie.animationSrc}} autoPlay loop={false} />
      </Animated.View>
    </Animated.View>
  );
};

export default ReviewCongrats;
