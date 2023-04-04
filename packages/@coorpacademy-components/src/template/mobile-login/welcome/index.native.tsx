import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  NovaCompositionCoorpacademyLogoCoorp as LogoCoorp,
  NovaCompositionCoorpacademyQrCode as QrCodeIcon,
  NovaCompositionCoorpacademyEmail as MailIcon
} from '@coorpacademy/nova-icons';
import {useAnimateProp, useTranslateY} from '@coorpacademy/react-native-animation';
import Touchable from '../../../hoc/touchable/index.native';
import {useTemplateContext} from '../../app-review/template-context';
import {Theme} from '../../../variables/theme.native';

type StyleSheetType = {
  wrapper: ViewStyle;
  animatedLogoWrapper: ViewStyle;
  animatedLogo: ViewStyle;
  logo: ViewStyle;
  logoBG: ViewStyle;
  content: ViewStyle;
  gradients: ViewStyle;
  gradient: ViewStyle;
  gradient2: ViewStyle;
  title: TextStyle;
  description: TextStyle;
  actions: ViewStyle;
  buttons: ViewStyle;
  button: ViewStyle;
  qrCodeIcon: ViewStyle;
  mailIcon: ViewStyle;
  ctaQRCode: ViewStyle;
  ctaQRCodeText: TextStyle;
  ctaReceiveMail: ViewStyle;
  ctaReceiveMailText: TextStyle;
  help: ViewStyle;
  titleHelp: TextStyle;
  ctaHelp: ViewStyle;
};

const createStyleSheet = (theme: Theme): StyleSheetType =>
  StyleSheet.create({
    wrapper: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingHorizontal: 24
    },
    content: {
      width: '100%',
      alignItems: 'flex-start'
    },
    gradients: {
      position: 'absolute',
      top: 400,
      bottom: 400,
      left: 0,
      right: 0,
      flex: 1
    },
    gradient: {
      position: 'absolute',
      top: -730,
      bottom: 0,
      left: -380,
      right: -380,
      opacity: 1,
      transform: [{rotate: '35deg'}]
    },
    gradient2: {
      position: 'absolute',
      top: -630,
      bottom: -200,
      left: -300,
      right: -400,
      opacity: 0.6,
      transform: [{rotate: '-35deg'}]
    },
    animatedLogoWrapper: {
      alignItems: 'center'
    },
    animatedLogo: {
      position: 'absolute',
      width: 77,
      height: 100
    },
    logo: {
      padding: 100
    },
    logoBG: {
      backgroundColor: '#fff',
      top: 20,
      width: 60,
      height: 60
    },
    title: {
      fontWeight: '600',
      fontSize: 28,
      lineHeight: 36,
      paddingVertical: 8
    },
    description: {
      fontSize: 18,
      lineHeight: 24,
      paddingVertical: 8
    },
    actions: {
      width: '100%'
    },
    buttons: {
      paddingVertical: 20,
      alignItems: 'center'
    },
    button: {
      paddingVertical: 12,
      marginVertical: 4,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      borderRadius: 12,
      alignItems: 'center',
      overflow: 'hidden'
    },
    ctaQRCode: {
      backgroundColor: theme.colors.cta
    },
    ctaQRCodeText: {
      marginLeft: 8,
      color: '#fff',
      fontWeight: '700',
      fontSize: 14,
      lineHeight: 24
    },
    qrCodeIcon: {
      fill: '#fff',
      height: 14,
      width: 14
    },
    ctaReceiveMail: {
      backgroundColor: '#eaeaeb'
    },
    ctaReceiveMailText: {
      marginLeft: 8,
      color: '#1D1D2B',
      fontWeight: '700',
      fontSize: 14,
      lineHeight: 24
    },
    mailIcon: {
      fill: '#1D1D2B',
      height: 12,
      width: 16
    },
    help: {
      flexDirection: 'row',
      justifyContent: 'center'
    },
    titleHelp: {
      color: '#9999A8'
    },
    ctaHelp: {
      marginLeft: 5,
      textDecorationLine: 'underline',
      color: '#9999A8'
    }
  });

export type Props = {
  onDemoPress: () => void;
  onDesktopButtonPress: () => void;
  onHelpPress: () => void;
  onMobileButtonPress: () => void;
  locales: {
    title: string;
    description: string;
    ctaQRCode: string;
    ctaReceiveMail: string;
    titleHelp: string;
    ctaHelp: string;
  };
};

const Welcome = (props: Props) => {
  const {locales, onDemoPress, onDesktopButtonPress, onHelpPress, onMobileButtonPress} = props;
  const {theme} = useTemplateContext();
  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);

  const translateGradients = useTranslateY({
    fromValue: 0,
    toValue: -200,
    duration: 300,
    delay: 750
  });

  const translateContent = useTranslateY({
    fromValue: 170,
    toValue: 0,
    duration: 450,
    delay: 750
  });

  const fadeInContent = useAnimateProp({
    property: 'opacity',
    fromValue: 0,
    toValue: 1,
    duration: 650,
    delay: 750
  });

  const fadeOutStartLogo = useAnimateProp({
    property: 'opacity',
    fromValue: 1,
    toValue: 0,
    duration: 450,
    delay: 1000
  });

  const fadeInFinalLogo = useAnimateProp({
    property: 'opacity',
    fromValue: 0,
    toValue: 1,
    duration: 250,
    delay: 900
  });

  const scaleAnim = useRef<Animated.Value>(new Animated.Value(0)).current;
  const interpolateScale = scaleAnim.interpolate({
    inputRange: [0, 0.4, 0.5, 0.6, 1],
    outputRange: [1, 1.7, 1.7, 1.7, 1]
  });

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  useEffect(() => {
    fadeInContent.start();
    fadeInFinalLogo.start();
    fadeOutStartLogo.start();
    translateContent.start();
    translateGradients.start();

    const animatedScale = Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    });

    animatedScale.start();

    // on mount only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!styleSheet) {
    return null;
  }
  return (
    <Animated.View style={[styleSheet.wrapper, translateContent.animatedStyle]} testID="welcome">
      <Animated.View style={[styleSheet.gradients, translateGradients.animatedStyle]}>
        <LinearGradient
          colors={['#0061FF', '#fff']}
          locations={[0, 0.95]}
          style={styleSheet.gradient}
        />
        <LinearGradient
          colors={['#2199AB', '#fff']}
          locations={[0, 0.95]}
          style={styleSheet.gradient2}
        />
      </Animated.View>

      <Touchable onLongPress={onDemoPress} style={styleSheet.logo}>
        <Animated.View
          style={[styleSheet.animatedLogoWrapper, {transform: [{scale: interpolateScale}]}]}
        >
          <Animated.View style={[styleSheet.logoBG, fadeInFinalLogo.animatedStyle]} />
          <Animated.View style={[styleSheet.animatedLogo, fadeInFinalLogo.animatedStyle]}>
            <LogoCoorp fill="#0061FF" />
          </Animated.View>
          <Animated.View style={[styleSheet.animatedLogo, fadeOutStartLogo.animatedStyle]}>
            <LogoCoorp fill="#fff" />
          </Animated.View>
        </Animated.View>
      </Touchable>
      <Animated.View style={[styleSheet.content, fadeInContent.animatedStyle]}>
        <Text style={styleSheet.title}>{locales.title}</Text>
        <Text style={styleSheet.description}>{locales.description}</Text>

        <View style={styleSheet.actions}>
          <View style={styleSheet.buttons}>
            <Touchable
              style={[styleSheet.button, styleSheet.ctaQRCode]}
              onPress={onDesktopButtonPress}
            >
              <QrCodeIcon style={styleSheet.qrCodeIcon} />
              <Text style={styleSheet.ctaQRCodeText}>{locales.ctaQRCode}</Text>
            </Touchable>
            <Touchable
              style={[styleSheet.button, styleSheet.ctaReceiveMail]}
              onPress={onMobileButtonPress}
            >
              <MailIcon style={styleSheet.mailIcon} />
              <Text style={styleSheet.ctaReceiveMailText}>{locales.ctaReceiveMail}</Text>
            </Touchable>
          </View>
          <Touchable onPress={onHelpPress} style={styleSheet.help}>
            <Text style={styleSheet.titleHelp}>{locales.titleHelp}</Text>
            <Text style={styleSheet.ctaHelp}>{locales.ctaHelp}</Text>
          </Touchable>
        </View>
      </Animated.View>
    </Animated.View>
  );
};

export default Welcome;
