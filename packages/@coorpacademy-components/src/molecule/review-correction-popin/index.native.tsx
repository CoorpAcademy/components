import React, {useCallback, useEffect, useState} from 'react';
import {Animated, Easing, TextStyle, StyleSheet, View, ViewStyle} from 'react-native';
import {
  NovaCompositionCoorpacademyCheck as RightIcon,
  NovaSolidStatusClose as WrongIcon,
  NovaLineLoginKey1 as KlfIcon
} from '@coorpacademy/nova-icons';
import {useAnimateProp} from '@coorpacademy/react-native-animation';
import Html from '../../atom/html/index.native';
import {Theme} from '../../variables/theme.native';
import Text from '../../atom/text/index.native';
import Touchable from '../../hoc/touchable/index.native';
import {useTemplateContext} from '../../template/app-review/template-context';
import {ReviewCorrectionPopinKLFProps, ReviewCorrectionPopinProps} from './prop-types';

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
  htmlInfoMessage: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  buttonKlf: ViewStyle;
  buttonKlfActive: TextStyle;
  buttonKlfText: TextStyle;
  iconKey: ViewStyle;
  containerTooltip: ViewStyle;
  buttonTooltip: ViewStyle;
  containerButtonKlf: ViewStyle;
  triangleTooltip: ViewStyle;
  htmlTooltipText: TextStyle;
}

const createStyleSheet = (theme: Theme, type: string): StyleSheetType =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: '#00000000',
      height: 2000,
      display: 'flex',
      justifyContent: 'flex-end'
    },
    popin: {
      padding: theme.spacing.medium,
      borderRadius: 16,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      backgroundColor: type === 'wrong' ? theme.colors.negative : theme.colors.positive,
      shadowColor: type === 'wrong' ? theme.colors.negative : theme.colors.positive,
      shadowOpacity: 0.5,
      shadowOffset: {width: 0, height: 0},
      shadowRadius: 15,
      elevation: 4
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
      textTransform: 'uppercase'
    },
    feedbackSection: {
      marginVertical: theme.spacing.medium
    },
    labelContainer: {
      alignSelf: 'flex-start',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: 56,
      paddingHorizontal: theme.spacing.tiny,
      paddingVertical: theme.spacing.micro,
      marginBottom: 8
    },
    label: {
      color: theme.colors.white,
      fontSize: 14,
      fontWeight: theme.fontWeight.extraBold,
      lineHeight: 17
    },
    htmlInfoMessage: {
      color: theme.colors.white,
      fontSize: 16,
      fontWeight: '600',
      lineHeight: 19
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
    buttonKlfActive: {
      backgroundColor:
        'linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), rgba(255, 255, 255, 0.1)'
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
      zIndex: 30,
      position: 'relative',
      shadowColor: theme.colors.black,
      shadowOpacity: 0.3,
      shadowOffset: {width: 0, height: 0},
      shadowRadius: 8
    },
    buttonTooltip: {
      zIndex: 20,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: theme.colors.white,
      borderRadius: 15,
      padding: theme.spacing.small,
      width: '112%',
      position: 'absolute',
      bottom: 4,
      right: -15,
      shadowColor: theme.colors.black,
      shadowOpacity: 0.3,
      shadowOffset: {width: 0, height: 0},
      shadowRadius: 8,
      elevation: 6
    },
    htmlTooltipText: {
      color: theme.colors.text.primary,
      fontSize: 16,
      fontWeight: '600',
      lineHeight: 22,
      textAlign: 'center'
    },
    triangleTooltip: {
      zIndex: 31,
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderLeftWidth: 13,
      borderRightWidth: 13,
      borderBottomWidth: 13,
      borderTopWidth: 13,
      borderLeftColor: 'transparent',
      borderTopColor: 'transparent',
      borderRightColor: theme.colors.white,
      borderBottomColor: theme.colors.white,
      transform: [{rotate: '45deg'}],
      position: 'absolute',
      left: 110,
      top: -20,
      borderRadius: 4
    }
  });

const KlfButton = ({
  klf,
  styleSheet
}: {
  klf: ReviewCorrectionPopinKLFProps;
  styleSheet: StyleSheetType;
}) => {
  const [displayTooltip, setDisplayTooltip] = useState(false);
  const fadeIn = useAnimateProp({
    property: 'opacity',
    fromValue: 0,
    toValue: 1,
    duration: 250,
    easing: Easing.bezier(0.25, 1, 0.5, 1)
  });

  const handlePressKey = useCallback(() => {
    setDisplayTooltip(!displayTooltip);
    !displayTooltip ? fadeIn.start() : fadeIn.reset();
  }, [displayTooltip, fadeIn]);

  const {
    buttonKlf,
    buttonKlfActive,
    buttonKlfText,
    containerButtonKlf,
    containerTooltip,
    buttonTooltip,
    htmlTooltipText,
    iconKey,
    triangleTooltip
  } = styleSheet;

  const {label, tooltip} = klf;

  return (
    <View style={containerButtonKlf}>
      <Animated.View style={[containerTooltip, fadeIn.animatedStyle]}>
        <Touchable
          style={buttonTooltip}
          accessibilityLabel={`aria-label-tooltip`}
          isHighlight
          onPress={handlePressKey}
          testID="button-tooltip"
        >
          <Html style={htmlTooltipText}>{tooltip}</Html>
        </Touchable>
        <View style={triangleTooltip} />
      </Animated.View>
      <Touchable
        style={displayTooltip ? {...buttonKlf, ...buttonKlfActive} : buttonKlf}
        accessibilityLabel={`aria-label-${label}`}
        onPress={handlePressKey}
        testID="button-klf"
      >
        <KlfIcon style={iconKey} color="white" />
        <Text style={buttonKlfText}>{label}</Text>
      </Touchable>
    </View>
  );
};

const ICONS = {
  right: RightIcon,
  wrong: WrongIcon
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

  const Icon = ICONS[type];

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme, type);
    setStylesheet(_stylesheet);
  }, [theme, type]);

  if (!styleSheet) {
    return null;
  }

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
          <Html style={styleSheet.htmlInfoMessage}>{information.message}</Html>
        </View>
        {klf && type === 'wrong' ? <KlfButton styleSheet={styleSheet} klf={klf} /> : null}
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
