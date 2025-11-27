import React, {useEffect, useState} from 'react';
import {Animated, Dimensions, StyleSheet, TextStyle, View, ViewStyle, Platform} from 'react-native';
import {
  NovaSolidStatusClose as CloseIcon,
  NovaCompositionCoorpacademyCheck as CheckIcon,
  NovaCompositionCoorpacademyEmail as MailIcon
} from '@coorpacademy/nova-icons';
import {useAnimateProp, useTranslateY} from '@coorpacademy/react-native-animation';
import Touchable from '../../../hoc/touchable/index.native';
import {useTemplateContext} from '../../app-review/template-context';
import {Theme} from '../../../variables/theme.native';
import Text from '../../../atom/text/index.native';

const SCREEN = Dimensions.get('screen');

type StyleSheetType = {
  wrapper: ViewStyle;
  content: ViewStyle;
  backButton: ViewStyle;
  closeIcon: ViewStyle & {fill?: string};
  gradients: ViewStyle;
  gradient: ViewStyle;
  gradient2: ViewStyle;
  title: TextStyle;
  description: TextStyle;
  ctaWrapper: ViewStyle;
  ctaOpenInbox: ViewStyle;
  ctaOpenInboxText: TextStyle;
  mailIcon: ViewStyle & {fill?: string};
  checkIconWrapper: ViewStyle;
  checkIconInnerWrapper: ViewStyle;
  checkIcon: ViewStyle & {fill?: string};
};

const createStyleSheet = (theme: Theme): StyleSheetType =>
  StyleSheet.create<StyleSheetType>({
    wrapper: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 24
    },
    backButton: {
      position: 'absolute',
      top: 60,
      left: 30
    },
    closeIcon: {
      fill: '#515161',
      width: 20,
      height: 20
    } as ViewStyle & {fill?: string},
    gradients: {
      position: 'absolute',
      top: 0,
      height: SCREEN.height,
      left: 0,
      right: 0,
      flex: 1
    },
    gradient: {
      position: 'absolute',
      top: -80,
      bottom: 400,
      left: -180,
      right: -180,
      opacity: 1,
      transform: [{rotate: '15deg'}]
    },
    gradient2: {
      position: 'absolute',
      top: -30,
      bottom: 0,
      left: 0,
      right: 0,
      opacity: 0.6
    },
    content: {
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    checkIconWrapper: {
      backgroundColor: '#E8FCF8',
      width: 64,
      height: 64,
      marginVertical: 12,
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center'
    },
    checkIconInnerWrapper: {
      backgroundColor: '#18BB98',
      width: 24,
      height: 24,
      padding: 4,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center'
    },
    checkIcon: {
      fill: '#fff',
      width: 12,
      height: 12
    } as ViewStyle & {fill?: string},
    title: {
      color: '#1D1D2B',
      fontWeight: '600',
      textAlign: 'center',
      fontSize: 28,
      lineHeight: 36,
      paddingVertical: 8
    },
    description: {
      color: '#1D1D2B',
      fontWeight: '400',
      textAlign: 'center',
      fontSize: 17,
      lineHeight: 24,
      paddingVertical: 8
    },
    ctaWrapper: {
      position: 'absolute',
      width: '100%',
      bottom: 60
    },
    ctaOpenInbox: {
      paddingVertical: 12,
      marginVertical: 4,
      flexDirection: 'row',
      justifyContent: 'center',
      borderRadius: 12,
      alignItems: 'center',
      overflow: 'hidden',
      backgroundColor: theme.colors.cta
    },
    ctaOpenInboxText: {
      marginLeft: 8,
      color: '#fff',
      fontWeight: '700',
      fontSize: 14,
      lineHeight: 24
    },
    mailIcon: {
      fill: '#fff',
      height: 14,
      width: 14
    } as ViewStyle & {fill?: string}
  });

export type Props = {
  onClose: () => void;
  onOpenInbox: () => void;
  locales: {
    successTitle: string;
    successDescription: string;
    successCta: string;
  };
};

const ConfirmEmailSent = (props: Props) => {
  const {locales, onClose, onOpenInbox} = props;
  const {theme} = useTemplateContext();
  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);

  const translateGradients = useTranslateY({
    fromValue: 50,
    toValue: -SCREEN.height * 0.4,
    duration: 250,
    delay: 650
  });

  const fadeInContent = useAnimateProp({
    property: 'opacity',
    fromValue: 0,
    toValue: 1,
    duration: 650,
    delay: 750
  });

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  useEffect(() => {
    fadeInContent.start();
    translateGradients.start();
    // on mount only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!styleSheet) {
    return null;
  }

  return (
    <Animated.View style={styleSheet.wrapper}>
      <Animated.View style={[styleSheet.gradients, translateGradients.animatedStyle]}>
        <View
          style={[
            styleSheet.gradient,
            Platform.select({
              default: {
                // @ts-ignore
                experimental_backgroundImage: 'linear-gradient(180deg, #179c57 0%, #fff0 50%)'
              },
              web: {
                // @ts-ignore
                backgroundImage: 'linear-gradient(180deg, #179c57 0%, #fff0 50%)'
              }
            })
          ]}
        />
        <View
          style={[
            styleSheet.gradient2,
            Platform.select({
              default: {
                // @ts-ignore
                experimental_backgroundImage: 'linear-gradient(180deg, #18BB98 0%, #18BB9800 100%)'
              },
              web: {
                // @ts-ignore
                backgroundImage: 'linear-gradient(180deg, #18BB98 0%, #18BB9800 100%)'
              }
            })
          ]}
        />
      </Animated.View>
      <Animated.View style={[styleSheet.content, fadeInContent.animatedStyle]}>
        <View style={styleSheet.checkIconWrapper}>
          <View style={styleSheet.checkIconInnerWrapper}>
            <CheckIcon style={styleSheet.checkIcon} />
          </View>
        </View>
        <Text style={styleSheet.title}>{locales.successTitle}</Text>
        <Text style={styleSheet.description}>{locales.successDescription}</Text>
      </Animated.View>

      <Touchable style={styleSheet.backButton} onPress={onClose} testID="close-button">
        <CloseIcon style={styleSheet.closeIcon} />
      </Touchable>

      <Animated.View style={[styleSheet.ctaWrapper, fadeInContent.animatedStyle]}>
        <Touchable style={styleSheet.ctaOpenInbox} onPress={onOpenInbox} testID="open-inbox-button">
          <MailIcon style={styleSheet.mailIcon} />
          <Text style={styleSheet.ctaOpenInboxText}>{locales.successCta}</Text>
        </Touchable>
      </Animated.View>
    </Animated.View>
  );
};

export default ConfirmEmailSent;
