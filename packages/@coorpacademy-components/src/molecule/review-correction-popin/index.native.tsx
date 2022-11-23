import React, {useEffect, useState} from 'react';
import {TextStyle, StyleSheet, View, ViewStyle} from 'react-native';
import RenderHTML from 'react-native-render-html';
import {
  NovaCompositionCoorpacademyCheck as RightIcon,
  NovaSolidStatusClose as WrongIcon,
  NovaLineLoginKey1 as KlfIcon
} from '@coorpacademy/nova-icons';
import {Theme} from '../../variables/theme.native';
import Text from '../../atom/text/index.native';
import Touchable from '../../hoc/touchable/index.native';
import {useTemplateContext} from '../../template/app-review/template-context';
import {ReviewCorrectionPopinProps} from './prop-types';

interface StyleSheetType {
  wrapper: ViewStyle;
  popin: ViewStyle;
  correctionSection: ViewStyle;
  iconCircle: ViewStyle;
  icon: ViewStyle;
  resultLabel: TextStyle;
  feedbackSection: ViewStyle;
  labelContainer: ViewStyle;
  label: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  buttonKlf: ViewStyle;
  buttonKlfText: TextStyle;
  iconKey: ViewStyle;
  containerTooltip: ViewStyle;
  textTooltip: TextStyle;
  containerButtonKlf: ViewStyle;
  triangleTooltip: ViewStyle;
}

const createStyleSheet = (theme: Theme, type: string): StyleSheetType =>
  StyleSheet.create({
    wrapper: {
      height: 'auto',
      color: theme.colors.white,
      display: 'flex'
    },
    popin: {
      padding: theme.spacing.medium,
      borderRadius: 16,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      backgroundColor: type === 'wrong' ? theme.colors.negative : theme.colors.positive,
      shadowRadius: 28,
      shadowColor: type === 'wrong' ? theme.colors.negative : theme.colors.positive,
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
    },
    containerButtonKlf: {
      width: '100%'
    },
    buttonKlf: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: 7,
      paddingHorizontal: theme.spacing.base,
      paddingVertical: theme.spacing.small,
      marginBottom: theme.spacing.tiny
    },
    buttonKlfText: {
      color: 'white',
      fontSize: 14,
      fontWeight: theme.fontWeight.bold,
      lineHeight: 20,
      textAlign: 'center'
    },
    iconKey: {
      width: 12,
      height: 12,
      marginRight: theme.spacing.tiny
    },
    containerTooltip: {
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: theme.colors.white,
      borderRadius: 15,
      padding: theme.spacing.small,
      width: '112%',
      position: 'absolute',
      bottom: 4,
      right: -15
    },
    textTooltip: {
      color: theme.colors.text.primary,
      fontSize: 16,
      fontWeight: '600',
      lineHeight: 22,
      textAlign: 'center'
    },
    triangleTooltip: {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderLeftWidth: 20,
      borderRightWidth: 20,
      borderBottomWidth: 20,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: theme.colors.white,
      transform: [{rotate: '180deg'}],
      position: 'absolute',
      left: 105,
      top: -12
    }
  });

const KlfButton = (klf: ReviewCorrectionPopinProps['klf'], styleSheet: StyleSheetType) => {
  const {
    buttonKlf,
    buttonKlfText,
    containerButtonKlf,
    containerTooltip,
    iconKey,
    textTooltip,
    triangleTooltip
  } = styleSheet;
  const {label} = klf;

  return (
    <View style={containerButtonKlf}>
      <View>
        <Touchable
          style={containerTooltip}
          accessibilityLabel={`aria-label-tooltip`}
          testID="tooltip"
        >
          <Text style={textTooltip}>
            17 frustrated software engineers grappling with the complexities of software
            development.
          </Text>
        </Touchable>
        <View style={triangleTooltip} />
      </View>
      <Touchable style={buttonKlf} accessibilityLabel={`aria-label-${label}`} testID={label}>
        <KlfIcon style={iconKey} color="white" />
        <Text style={buttonKlfText}>{label}</Text>
      </Touchable>
    </View>
  );
};

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
  const ICONS = {
    right: RightIcon,
    wrong: WrongIcon
  };
  const Icon = ICONS[type];

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme, type);
    setStylesheet(_stylesheet);
  }, [theme]);

  if (!styleSheet) {
    return null;
  }
  const cta = type === 'wrong' ? KlfButton(klf, styleSheet) : null;

  return (
    <View style={styleSheet.wrapper}>
      <View style={styleSheet.popin}>
        <View style={styleSheet.correctionSection}>
          <View style={styleSheet.iconCircle}>
            <Icon
              style={styleSheet.icon}
              color={type === 'wrong' ? theme.colors.negative : theme.colors.positive}
            />
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
        {cta}
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
