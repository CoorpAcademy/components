import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Easing, TextStyle, StyleSheet, View, ViewStyle} from 'react-native';
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
  buttonKlfActive: TextStyle;
  buttonKlfText: TextStyle;
  iconKey: ViewStyle;
  containerTooltip: ViewStyle;
  buttonTooltip: ViewStyle;
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
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: theme.colors.white,
      borderRadius: 15,
      padding: theme.spacing.small,
      width: '112%',
      position: 'absolute',
      bottom: 4,
      right: -15,
      zIndex: 20
    },
    triangleTooltip: {
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
  klf: NonNullable<ReviewCorrectionPopinProps['klf']>;
  styleSheet: StyleSheetType;
}) => {
  const [displayTooltip, setDisplayTooltip] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.bezier(0.25, 1, 0.5, 1),
      useNativeDriver: true
    }).start();
  }, [fadeAnim]);

  const fadeOut = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      easing: Easing.bezier(0.25, 1, 0.5, 1),
      useNativeDriver: true
    }).start();
  }, [fadeAnim]);

  const handlePressKey = useCallback(() => {
    setDisplayTooltip(!displayTooltip);
    !displayTooltip ? fadeIn() : fadeOut();
  }, [displayTooltip, fadeIn, fadeOut]);

  const {
    buttonKlf,
    buttonKlfActive,
    buttonKlfText,
    containerButtonKlf,
    containerTooltip,
    buttonTooltip,
    iconKey,
    triangleTooltip
  } = styleSheet;

  const {label, tooltip} = klf;

  const tooltipMessage = {
    html: `<p style='color:#06265B; font-size:16; font-weight:600; line-height:22; text-align:center;'>${tooltip}</p>`
  };

  return (
    <View style={containerButtonKlf}>
      <Animated.View style={[containerTooltip, {opacity: fadeAnim}]}>
        <Touchable
          style={buttonTooltip}
          accessibilityLabel={`aria-label-tooltip`}
          isHighlight
          onPress={handlePressKey}
          testID="button-tooltip"
        >
          <RenderHTML source={tooltipMessage} />
        </Touchable>
        <View style={triangleTooltip} />
      </Animated.View>
      <Touchable
        style={[buttonKlf, displayTooltip ? buttonKlfActive : null]}
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

// Type narrowing function
const isWrongType = (
  klf: ReviewCorrectionPopinProps['klf'],
  type: ReviewCorrectionPopinProps['type']
): klf is NonNullable<ReviewCorrectionPopinProps['klf']> => type === 'wrong';

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
  const infoMessage = {
    html: `<p style='color:white; font-size:16; font-weight:600; line-height:19;'>${information.message}</p>`
  };
  const ICONS = {
    right: RightIcon,
    wrong: WrongIcon
  };
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
          <RenderHTML source={infoMessage} />
        </View>
        {isWrongType(klf, type) ? <KlfButton styleSheet={styleSheet} klf={klf} /> : null}
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
