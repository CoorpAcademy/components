import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, ViewStyle, TextStyle} from 'react-native';
import {
  NovaLineSelectionCursorsCursorArrowTarget as TargetIcon,
  NovaSolidInterfaceFeedbackInterfaceQuestionMark as QuestionMarkIcon,
  NovaSolidStatusCheckCircle2 as CheckCircle2Icon,
  NovaCompositionCoorpacademyHeart as HeartIcon
} from '@coorpacademy/nova-icons';

import {useTemplateContext} from '../template-context';
import {Theme} from '../../../variables/theme.native';
import {HEADER_HEIGHT} from '../../../organism/header-v2/index.native';
import Touchable from '../../../hoc/touchable/index.native';
import {OnboardingProps, TipProps} from '../../../atom/review-presentation/prop-types';

type StyleSheetType = {
  container: ViewStyle;
  title: TextStyle;
  text: TextStyle;
  tip: ViewStyle;
  tipText: TextStyle;
  icon: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
};

const createStyleSheet = (theme: Theme): StyleSheetType =>
  StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      flex: 1,
      padding: 20,
      paddingTop: HEADER_HEIGHT + 20
    },
    title: {
      height: 72,
      width: 268,
      fontSize: theme.fontSize.xxlarge,
      fontWeight: theme.fontWeight.bold,
      lineHeight: 36,
      color: theme.colors.text.primary,
      marginBottom: theme.spacing.small
    },
    text: {
      fontSize: theme.fontSize.large,
      color: theme.colors.text.primary,
      opacity: 0.7,
      marginBottom: theme.spacing.small
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
      fontSize: theme.fontSize.large,
      color: theme.colors.text.primary
    },
    icon: {
      margin: 10
    },
    button: {
      height: 52,
      borderRadius: 7,
      marginBottom: theme.spacing.large,
      marginTop: theme.spacing.large
    },
    buttonText: {
      fontWeight: theme.fontWeight.bold,
      fontSize: theme.fontSize.large,
      color: theme.colors.text.secondary
    }
  });

const Tip = (props: TipProps) => {
  const templateContext = useTemplateContext();
  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);
  const {theme} = templateContext;
  const {Icon, text} = props;

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  if (!styleSheet) {
    return null;
  }

  return (
    <View style={styleSheet.tip}>
      {<Icon height={16} width={16} style={styleSheet.icon} color={theme.colors.text.primary} />}
      <Text style={styleSheet.tipText}>{text}</Text>
    </View>
  );
};

const Onboarding = (props: OnboardingProps) => {
  const templateContext = useTemplateContext();
  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);
  const {theme, translations} = templateContext;
  const {onPress} = props;

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  // ------------------------------------

  if (!styleSheet) {
    return null;
  }

  return (
    <View style={styleSheet.container}>
      <Text style={styleSheet.title}>{translations.appReview?.title}</Text>
      <Text style={styleSheet.text}>{translations.appReview?.text}</Text>

      <Tip Icon={TargetIcon} text={translations.appReview?.label_list?.skills?.text} />
      <Tip Icon={QuestionMarkIcon} text={translations.appReview?.label_list?.questions?.text} />
      <Tip Icon={HeartIcon} text={translations.appReview?.label_list?.lifes?.text} />
      <Tip Icon={CheckCircle2Icon} text={translations.appReview?.label_list?.allright?.text} />
      <Touchable
        testID={`button-quit-revision-onboarding`}
        onPress={onPress}
        analyticsID="button-start"
        style={styleSheet.button}
      >
        <Text style={styleSheet.buttonText}>{translations.appReview?.button}</Text>
      </Touchable>
    </View>
  );
};

export default Onboarding;
