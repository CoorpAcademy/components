import React, {useEffect, useState} from 'react';
import {Text, TextStyle, StyleSheet, View, ViewStyle} from 'react-native';
import Modal from 'react-native-modal';
import {NovaSolidSpaceMoonRocket as MoonRocket} from '@coorpacademy/nova-icons';
import {Theme} from '../../variables/theme.native';
import Touchable from '../../hoc/touchable/index.native';
import {useTemplateContext} from '../../template/app-review/template-context';
import {CMPopinProps} from './types';

interface StyleSheetType {
  container: ViewStyle;
  wrapper: ViewStyle;
  icon: ViewStyle;
  content: TextStyle;
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
    container: {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      borderRadius: 20,
      width: '90%',
      maxHeight: 420,
      marginTop: '70%'
    },
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      marginVertical: theme.spacing.large,
      marginHorizontal: theme.spacing.base
    },
    icon: {
      width: 76,
      height: 76
    },
    content: {
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
    firstButton: {
      backgroundColor: theme.colors.cta,
      borderRadius: 7,
      marginBottom: theme.spacing.small
    },
    firstButtonText: {
      color: theme.colors.white
    },
    secondButton: {
      borderRadius: 7,
      marginBottom: theme.spacing.small
    },
    secondButtonText: {
      color: '#ED3436'
    }
  });

const QuitPopinReview = (props: CMPopinProps) => {
  const {content, descriptionText, firstButton, secondButton} = props;
  const templateContext = useTemplateContext();
  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);
  const {theme} = templateContext;
  const isVisible = true;

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  if (!styleSheet) {
    return null;
  }

  return (
    <Modal isVisible={isVisible} style={styleSheet.container} testID="podcast-popin-intro">
      <View style={styleSheet.wrapper}>
        <MoonRocket style={styleSheet.icon} color="#06265B" />
        <Text style={styleSheet.content}>{content}</Text>
        <Text style={styleSheet.descriptionText}>{descriptionText}</Text>
      </View>
      <View style={styleSheet.buttonContainer}>
        <Touchable
          style={styleSheet.firstButton}
          onPress={firstButton?.handleOnclick}
          accessibilityLabel={firstButton?.['aria-label']}
          testID="first-button"
        >
          <Text style={[styleSheet.buttonText, styleSheet.firstButtonText]}>
            {firstButton?.label}
          </Text>
        </Touchable>
        <Touchable
          style={styleSheet.secondButton}
          isHighlight
          onPress={secondButton?.handleOnclick}
          accessibilityLabel={secondButton?.['aria-label']}
          testID="second-button"
        >
          <Text style={[styleSheet.buttonText, styleSheet.secondButtonText]}>
            {secondButton?.label}
          </Text>
        </Touchable>
      </View>
    </Modal>
  );
};

export default QuitPopinReview;
