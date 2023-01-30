import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, ViewStyle, TextStyle} from 'react-native';
import {
  NovaLineSelectionCursorsCursorArrowTarget as TargetIcon,
  NovaSolidInterfaceFeedbackInterfaceQuestionMark as QuestionMarkIcon,
  NovaSolidStatusCheckCircle2 as CheckCircle2Icon,
  NovaCompositionCoorpacademyVoteHeartOutline as HeartIcon
} from '@coorpacademy/nova-icons';

import {useTemplateContext} from '../../template/app-review/template-context';
import {Theme} from '../../variables/theme.native';
import Touchable from '../../hoc/touchable/index.native';
import Html from '../html/index.native';
import {Brand} from '../../variables/brand.native';
import {OnboardingProps, TipProps} from './prop-types';

type StyleSheetType = {
  container: ViewStyle;
  title: TextStyle;
  text: TextStyle;
  textContainer: ViewStyle;
  tips: ViewStyle;
  tip: ViewStyle;
  tipText: TextStyle;
  icon: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
};

const createStyleSheet = (brandTheme: Brand, theme: Theme): StyleSheetType =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.white,
      justifyContent: 'space-between',
      flex: 1,
      padding: 20,
      paddingTop: 20,
      paddingBottom: 100
    },
    title: {
      height: 72,
      width: 268,
      fontSize: theme.fontSize.xxlarge,
      fontWeight: theme.fontWeight.bold,
      lineHeight: 36,
      color: theme.colors.text.primary,
      marginBottom: 32
    },
    textContainer: {
      marginTop: 8
    },
    text: {
      fontSize: theme.fontSize.large,
      color: theme.colors.text.primary,
      opacity: 0.7
    },
    tips: {
      marginTop: 32,
      height: 230,
      justifyContent: 'center'
    },
    tip: {
      flexDirection: 'row',
      overflow: 'hidden',
      alignItems: 'center',
      height: 54,
      borderRadius: 8,
      backgroundColor: theme.colors.gray.extra,
      marginTop: theme.spacing.micro,
      marginBottom: theme.spacing.micro
    },
    tipText: {
      fontSize: 16,
      lineHeight: 22,
      color: theme.colors.text.primary
    },
    icon: {
      margin: 10
    },
    button: {
      height: 52,
      borderRadius: 7,
      marginBottom: 32,
      marginTop: 16,
      backgroundColor: brandTheme?.colors?.primary || theme.colors.cta,
      justifyContent: 'center'
    },
    buttonText: {
      alignSelf: 'center',
      fontWeight: theme.fontWeight.bold,
      fontSize: theme.fontSize.large,
      color: '#fff'
    }
  });

const Tip = (props: TipProps) => {
  const templateContext = useTemplateContext();
  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);
  const {brandTheme, theme} = templateContext;
  const {Icon, text} = props;

  useEffect(() => {
    const _stylesheet = createStyleSheet(brandTheme, theme);
    setStylesheet(_stylesheet);
  }, [brandTheme, theme]);

  if (!styleSheet) {
    return null;
  }

  return (
    <View style={styleSheet.tip}>
      <Icon height={16} width={16} style={styleSheet.icon} color={theme.colors.text.primary} />
      <Text style={styleSheet.tipText}>{text}</Text>
    </View>
  );
};

const Onboarding = (props: OnboardingProps) => {
  const templateContext = useTemplateContext();
  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);
  const {brandTheme, theme, translations} = templateContext;
  const {onPress} = props;

  useEffect(() => {
    const _stylesheet = createStyleSheet(brandTheme, theme);
    setStylesheet(_stylesheet);
  }, [brandTheme, theme]);

  // ------------------------------------

  if (!styleSheet) {
    return null;
  }

  return (
    <View style={styleSheet.container}>
      <Html style={styleSheet.title}>{translations.appReview.presentation.title}</Html>

      <View style={styleSheet.textContainer}>
        <Html style={styleSheet.text}>{translations.appReview.presentation.text}</Html>
      </View>

      <View style={styleSheet.tips}>
        <Tip Icon={TargetIcon} text={translations.appReview.presentation.labelList.skills.text} />
        <Tip
          Icon={QuestionMarkIcon}
          text={translations.appReview.presentation.labelList.questions.text}
        />
        <Tip Icon={HeartIcon} text={translations.appReview.presentation.labelList.lifes.text} />
        <Tip
          Icon={CheckCircle2Icon}
          text={translations.appReview.presentation.labelList.allright.text}
        />
      </View>
      <Touchable
        testID="button-quit-revision-onboarding"
        onPress={onPress}
        analyticsID="button-start"
        style={styleSheet.button}
      >
        <Text style={styleSheet.buttonText}>{translations.ok}</Text>
      </Touchable>
    </View>
  );
};

export default Onboarding;
