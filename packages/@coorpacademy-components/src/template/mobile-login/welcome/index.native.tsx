import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  NovaCompositionCoorpacademyLogoCoorp as LogoCoorp,
  NovaCompositionCoorpacademyQrCode as QrCodeIcon,
  NovaCompositionCoorpacademyEmail as MailIcon
} from '@coorpacademy/nova-icons';
import Touchable from '../../../hoc/touchable/index.native';
import {useTemplateContext} from '../../app-review/template-context';
import {Theme} from '../../../variables/theme.native';

type StyleSheetType = {
  wrapper: ViewStyle;
  logo: ViewStyle;
  content: ViewStyle;
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
    gradient: {
      position: 'absolute',
      top: -100,
      bottom: 0,
      left: -180,
      right: 0,
      opacity: 1,
      transform: [{rotate: '35deg'}]
    },
    gradient2: {
      position: 'absolute',
      top: -80,
      bottom: 0,
      left: 0,
      right: -200,
      opacity: 0.5,
      transform: [{rotate: '-35deg'}]
    },
    logo: {
      padding: 100
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

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  if (!styleSheet) {
    return null;
  }

  return (
    <View style={styleSheet.wrapper} testID="welcome">
      <LinearGradient
        colors={['#0061FF', '#fff']}
        locations={[0, 0.3]}
        style={styleSheet.gradient}
      />
      <LinearGradient
        colors={['#2199AB', '#fff']}
        locations={[0, 0.3]}
        style={styleSheet.gradient2}
      />
      <Touchable onLongPress={onDemoPress} style={styleSheet.logo}>
        <LogoCoorp fill={theme.colors.cta} width={77} height={75} />
      </Touchable>
      <View style={styleSheet.content}>
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
      </View>
    </View>
  );
};

export default Welcome;
