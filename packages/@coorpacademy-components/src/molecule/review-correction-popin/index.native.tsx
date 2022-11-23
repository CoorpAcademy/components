import React, {useEffect, useState} from 'react';
import {TextStyle, StyleSheet, View, ViewStyle} from 'react-native';
import RenderHTML from 'react-native-render-html';
import {NovaCompositionCoorpacademyCheck as RightIcon} from '@coorpacademy/nova-icons';
import {COLORS} from '../../variables/colors';
import {Theme} from '../../variables/theme.native';
import Text from '../../atom/text/index.native';
import Touchable from '../../hoc/touchable/index.native';
import {useTemplateContext} from '../../template/app-review/template-context';
import {ReviewCorrectionPopinProps} from './prop-types';

type StyleSheetType = {
  wrapper: ViewStyle;
  popinRight: ViewStyle;
  correctionSection: ViewStyle;
  iconCircle: ViewStyle;
  icon: ViewStyle;
  resultLabel: TextStyle;
  feedbackSection: ViewStyle;
  labelContainer: ViewStyle;
  label: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
};
const createStyleSheet = (theme: Theme): StyleSheetType =>
  StyleSheet.create({
    wrapper: {
      height: 'auto',
      color: theme.colors.white,
      display: 'flex'
    },
    popinRight: {
      padding: theme.spacing.medium,
      borderRadius: 16, // TODO
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      backgroundColor: theme.colors.positive,
      shadowRadius: 28,
      shadowColor: theme.colors.positive,
      shadowOpacity: 0.4
    },
    correctionSection: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '80%'
    },
    iconCircle: {
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.white,
      opacity: 0.7,
      borderRadius: 50
    },
    icon: {
      height: 30,
      width: 30
    },
    resultLabel: {
      color: theme.colors.white,
      fontSize: 24,
      fontWeight: '600',
      lineHeight: 24,
      marginLeft: 12,
      textTransform: 'uppercase',
      wordBreak: 'break-word'
    },
    feedbackSection: {
      marginVertical: theme.spacing.medium
    },
    labelContainer: {
      alignSelf: 'flex-start',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: 56,
      paddingHorizontal: theme.spacing.tiny,
      paddingVertical: theme.spacing.micro
    },
    label: {
      color: theme.colors.white,
      fontSize: 14,
      fontWeight: theme.fontWeight.extraBold,
      lineHeight: 17,
      wordBreak: 'break-word'
    },
    button: {
      alignSelf: 'stretch',
      backgroundColor: theme.colors.white,
      borderRadius: 7,
      paddingHorizontal: theme.spacing.base,
      paddingVertical: theme.spacing.small
    },
    buttonText: {
      color: theme.colors.cta,
      fontSize: 14,
      fontWeight: theme.fontWeight.bold,
      lineHeight: 20,
      textAlign: 'center'
    }
  });

const ReviewCorrectionPopin = ({
  information,
  klf,
  next,
  type,
  resultLabel
}: ReviewCorrectionPopinProps) => {
  const templateContext = useTemplateContext();
  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);
  const {theme} = templateContext;
  const handlePressNext = next.onClick;
  const source = {
    html: `<p aria-label='${information.message}' style='color:white; font-size:16; font-weight:600; line-height:19;'>${information.message}</p>`
  };

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  if (!styleSheet) {
    return null;
  }

  return (
    <View style={styleSheet.wrapper}>
      <View style={styleSheet.popinRight}>
        <View style={styleSheet.correctionSection}>
          <View style={styleSheet.iconCircle}>
            <RightIcon style={styleSheet.icon} color={COLORS.positive} />
          </View>
          <Text style={styleSheet.resultLabel}>{resultLabel}</Text>
        </View>
        <View style={styleSheet.feedbackSection} accessibilityLabel="answer-information">
          <View style={styleSheet.labelContainer} needsOffscreenAlphaCompositing>
            <Text accessibilityLabel={information.label} style={styleSheet.label}>
              {information.label}
            </Text>
          </View>
          <RenderHTML source={source} systemFonts={['Gilroy']} />
        </View>
        <Touchable
          style={styleSheet.button}
          onPress={handlePressNext}
          accessibilityLabel={next['aria-label']}
          testID={next['data-name']}
        >
          <Text style={styleSheet.buttonText}>{next.label}</Text>
        </Touchable>
      </View>
    </View>
  );
};

export default ReviewCorrectionPopin;
