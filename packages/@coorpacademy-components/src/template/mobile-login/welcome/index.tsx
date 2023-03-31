import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {NovaCompositionCoorpacademyLogoCoorp as LogoCoorp} from '@coorpacademy/nova-icons';
import Touchable from '../../../hoc/touchable/index.native';
import {useTemplateContext} from '../../app-review/template-context';
import {Theme} from '../../../variables/theme.native';

type StyleSheetType = {
  wrapper: ViewStyle;
  logo: ViewStyle;
  content: ViewStyle;
  title: TextStyle;
  description: TextStyle;
  actions: ViewStyle;
  buttons: ViewStyle;
  button: ViewStyle;
  ctaQRCode: ViewStyle;
  ctaReceiveMail: ViewStyle;
  help: ViewStyle;
};

const createStyleSheet = (theme: Theme) =>
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
      borderRadius: 12,
      alignItems: 'center',
      overflow: 'hidden'
    },
    ctaQRCode: {
      backgroundColor: theme.colors.cta
    },
    ctaReceiveMail: {
      backgroundColor: '#eaeaeb'
    },
    help: {
      flexDirection: 'row',
      justifyContent: 'center'
    },
    ctaHelp: {
      marginLeft: 5,
      textDecorationLine: 'underline'
    }
  });

type Props = {
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
              <Text> {locales.ctaQRCode} </Text>
            </Touchable>
            <Touchable
              style={[styleSheet.button, styleSheet.ctaReceiveMail]}
              onPress={onMobileButtonPress}
            >
              <Text>{locales.ctaReceiveMail}</Text>
            </Touchable>
          </View>
          <Touchable onPress={onHelpPress} style={styleSheet.help}>
            <Text>{locales.titleHelp}</Text>
            <Text style={styleSheet.ctaHelp}>{locales.ctaHelp}</Text>
          </Touchable>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
