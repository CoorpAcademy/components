import React, {useEffect, useState} from 'react';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import Text from '../text/index.native';
import {useTemplateContext} from '../../template/app-review/template-context';
import {Theme} from '../../variables/theme.native';
import Touchable from '../../hoc/touchable/index.native';
import {Brand} from '../../variables/brand.native';

type StyleSheetType = {
  wrapper: ViewStyle;
  text: ViewStyle;
};

const createStyle = (theme: Theme, brandTheme: Brand): StyleSheetType =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: brandTheme?.colors?.primary || theme.colors.text.primary,
      borderRadius: 7,
      width: '100%'
    },
    text: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '700',
      color: theme.colors.white,
      marginBottom: 16,
      marginTop: 16,
      textAlign: 'center'
    }
  });

type ButtonProps = {
  accessibilityLabel?: string;
  disabled?: boolean;
  onPress: () => void;
  style?: ViewStyle;
  submitValue: string;
  testID?: string;
  textStyle?: TextStyle;
};

const Button = (props: ButtonProps) => {
  const {accessibilityLabel, disabled, onPress, style, submitValue, testID, textStyle} = props;
  const {theme, brandTheme} = useTemplateContext();
  const [styleSheet, setStylesheet] = useState<StyleSheetType>();

  useEffect(() => {
    const _style = createStyle(theme, brandTheme);
    setStylesheet(_style);
  }, [theme, brandTheme]);

  if (!styleSheet) return null;

  return (
    <Touchable
      testID={testID}
      onPress={onPress}
      disabled={disabled}
      accessibilityLabel={accessibilityLabel}
      style={[styleSheet.wrapper, style]}
    >
      <Text style={[styleSheet.text, textStyle]}>{submitValue}</Text>
    </Touchable>
  );
};

export default Button;
