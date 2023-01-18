import React, {useEffect, useState} from 'react';
import {Text, TextStyle, StyleSheet, View, ViewStyle} from 'react-native';
import Modal from 'react-native-modal';
import {NovaSolidSpaceMoonRocket as MoonRocket} from '@coorpacademy/nova-icons';
import {Theme} from '../../variables/theme.native';
import Touchable from '../../hoc/touchable/index.native';
import {useTemplateContext} from '../../template/app-review/template-context';
import {CMPopinProps} from './types';

interface StyleSheetType {
  modalView: ViewStyle;
  textsContainer: ViewStyle;
  icon: ViewStyle;
  title: TextStyle;
  descriptionText: TextStyle;
  buttonContainer: ViewStyle;
  buttonText: TextStyle;
  firstButton: ViewStyle;
  firstButtonText: TextStyle;
  secondButton: ViewStyle;
  secondButtonText: TextStyle;
}

const createStyleSheet = (theme: Theme): StyleSheetType =>
  StyleSheet.create({
    modalView: {
      backgroundColor: '#fff',
      margin: 5,
      borderRadius: 20
    },
    textsContainer: {
      display: 'flex',
      alignItems: 'center',
      marginVertical: theme.spacing.large,
      marginHorizontal: theme.spacing.base
    },
    icon: {
      width: 76,
      height: 76
    },
    title: {
      color: '#1D1D2B',
      fontWeight: theme.fontWeight.bold,
      fontSize: 20,
      lineHeight: 28,
      marginVertical: theme.spacing.small
    },
    descriptionText: {
      color: '#515161',
      fontWeight: theme.fontWeight.semiBold,
      fontSize: 14,
      lineHeight: 20,
      textAlign: 'center'
    },
    buttonContainer: {
      marginHorizontal: theme.spacing.base
    },
    buttonText: {
      fontWeight: theme.fontWeight.bold,
      fontSize: 14,
      lineHeight: 20,
      marginVertical: 12,
      textAlign: 'center'
    },
    secondButton: {
      backgroundColor: theme.colors.cta,
      borderRadius: 7,
      marginBottom: theme.spacing.small
    },
    secondButtonText: {
      color: theme.colors.white
    },
    firstButton: {
      borderRadius: 7,
      marginBottom: theme.spacing.small
    },
    firstButtonText: {
      color: '#ED3436'
    }
  });

const QuitPopinReview = (props: CMPopinProps) => {
  const {content, descriptionText, firstButton, secondButton} = props;
  const templateContext = useTemplateContext();
  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);
  const {theme} = templateContext;

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  if (!styleSheet) {
    return null;
  }

  return (
    <Modal isVisible animationIn="fadeIn" animationOut="fadeOut">
      <View style={styleSheet.modalView}>
        <View style={styleSheet.textsContainer}>
          <MoonRocket style={styleSheet.icon} color="#06265B" />
          <Text style={styleSheet.title}>{content}</Text>
          <Text style={styleSheet.descriptionText}>{descriptionText}</Text>
        </View>
        <View style={styleSheet.buttonContainer}>
          <Touchable
            style={styleSheet.secondButton}
            onPress={secondButton?.handleOnclick}
            accessibilityLabel={secondButton?.['aria-label']}
            testID="second-button"
          >
            <Text style={[styleSheet.buttonText, styleSheet.secondButtonText]}>
              {secondButton?.label}
            </Text>
          </Touchable>
          <Touchable
            style={styleSheet.firstButton}
            isHighlight
            onPress={firstButton?.handleOnclick}
            accessibilityLabel={firstButton?.['aria-label']}
            testID="first-button"
          >
            <Text style={[styleSheet.buttonText, styleSheet.firstButtonText]}>
              {firstButton?.label}
            </Text>
          </Touchable>
        </View>
      </View>
    </Modal>
  );
};

export default QuitPopinReview;
