import React, {useState, useEffect, FC} from 'react';
import {StyleSheet, ViewStyle, Text, TextStyle, View, GestureResponderEvent} from 'react-native';
import Modal from 'react-native-modal';
import {NovaSolidStatusClose as CloseIcon} from '@coorpacademy/nova-icons';

import {useTemplateContext} from '../../template/app-review/template-context';
import Touchable from '../../hoc/touchable/index.native';

import type {Theme} from '../../variables/theme.native';
import type {Brand} from '../../variables/brand.native';

export type Props = {
  isVisible: boolean;
  locales: {
    title: string;
    description1: string;
    description2: string;
    cta: string;
  };
  Icon?: FC<{style: ViewStyle}>;
  onValidate: (event: GestureResponderEvent) => void;
  onCancel: (event: GestureResponderEvent) => void;
};

type StyleSheetType = {
  popin: ViewStyle;
  content: ViewStyle;
  icon: ViewStyle;
  iconWrapper: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  closeButton: ViewStyle;
  closeIcon: ViewStyle;
  title: TextStyle;
  description1: TextStyle;
  description2: TextStyle;
};

const createStyleSheet = (brandTheme: Brand, theme: Theme) =>
  StyleSheet.create({
    popin: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },
    content: {
      backgroundColor: '#fff',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 8,
      paddingVertical: 24
    },
    iconWrapper: {
      width: 100,
      height: 100,
      backgroundColor: '#FFEFEB',
      justifyContent: 'center',
      borderRadius: 60,
      marginBottom: 12
    },
    icon: {
      alignSelf: 'center',
      width: 60,
      height: 60,
      fill: brandTheme.colors?.primary
    },
    title: {
      textAlign: 'center',
      lineHeight: 24,
      fontWeight: '700',
      fontSize: 20,
      marginHorizontal: 24,
      marginVertical: 12
    },
    description1: {
      textAlign: 'center',
      lineHeight: 19,
      fontWeight: '300',
      fontSize: 14,
      marginHorizontal: 24,
      marginVertical: 12
    },
    description2: {
      textAlign: 'center',
      lineHeight: 19,
      fontWeight: '700',
      fontSize: 16,
      paddingHorizontal: 48,
      marginVertical: 12
    },
    button: {
      height: 44,
      backgroundColor: brandTheme.colors?.primary,
      borderRadius: 7,
      justifyContent: 'center',
      padding: 12,
      paddingVertical: 12,
      marginTop: 12
    },
    buttonText: {
      alignSelf: 'center',
      color: '#FFFFFF',
      fontWeight: theme.fontWeight.bold,
      fontFamily: 'System',
      fontSize: 14,
      lineHeight: 20
    },
    closeButton: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 45,
      height: 45,
      padding: 10,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    closeIcon: {
      width: '100%',
      height: '100%',
      fill: '#aeaeae'
    }
  });

const PopinIntro = (props: Props) => {
  const templateContext = useTemplateContext();
  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);
  const {brandTheme, theme} = templateContext;
  const {isVisible, onValidate, onCancel, locales, Icon} = props;

  useEffect(() => {
    const _stylesheet = createStyleSheet(brandTheme, theme);
    setStylesheet(_stylesheet);
  }, [brandTheme, theme]);

  if (!styleSheet) {
    return null;
  }

  return (
    <Modal isVisible={isVisible} style={styleSheet.popin} testID="intro-popin">
      <View style={styleSheet.content}>
        {Icon ? (
          <View style={styleSheet.iconWrapper}>
            <Icon style={styleSheet.icon} />
          </View>
        ) : null}
        <Text style={styleSheet.title}>{locales.title}</Text>
        <Text style={styleSheet.description1}>{locales.description1}</Text>
        <Text style={styleSheet.description2}>{locales.description2}</Text>
        <Touchable
          style={styleSheet.button}
          onPress={onValidate}
          testID="intro-popin-validate-button"
        >
          <Text style={styleSheet.buttonText}>{locales.cta}</Text>
        </Touchable>
        <Touchable
          style={styleSheet.closeButton}
          onPress={onCancel}
          testID="intro-popin-cancel-button"
        >
          <CloseIcon style={styleSheet.closeIcon} />
        </Touchable>
      </View>
    </Modal>
  );
};

export type PopinIntroProps = Props;
export default PopinIntro;
