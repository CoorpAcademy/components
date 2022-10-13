import React, {useState, useEffect} from 'react';
import {GestureResponderEvent, StyleSheet, TextStyle, ViewStyle} from 'react-native';

import Text from '../../../atom/text/index.native';
import Touchable from '../../touchable/index.native';
import {useTemplateContext} from '../../../template/app-review/template-context';
import {Theme} from '../../../variables/theme.native';
import {Brand} from '../../../variables/brand.native';

export type Props = {
  isSelected?: boolean;
  children: string;
  onPress?: (event: GestureResponderEvent) => void;
  testID?: string;
};

type StyleSheetType = {
  container: ViewStyle;
  text: TextStyle;
  selectedTextStyle: TextStyle;
};

const createStyleSheet = (brandTheme: Brand, theme: Theme): StyleSheetType =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.white,
      padding: theme.spacing.small
    },
    text: {
      fontWeight: theme.fontWeight.bold,
      color: theme.colors.black
    },
    selectedTextStyle: {
      color: brandTheme?.colors?.primary
    }
  });

const ModalSelectItem = (props: Props) => {
  const templateContext = useTemplateContext();
  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);
  const {brandTheme, theme} = templateContext;

  useEffect(() => {
    const _stylesheet = createStyleSheet(brandTheme, theme);
    setStylesheet(_stylesheet);
  }, [theme, brandTheme]);

  if (!styleSheet) {
    return null;
  }

  const {children, onPress, isSelected, testID} = props;

  const textStyle: TextStyle[] = [styleSheet.text];
  if (isSelected) {
    textStyle.push(styleSheet.selectedTextStyle);
  }

  return (
    <Touchable onPress={onPress} style={styleSheet.container} testID={testID}>
      <Text style={textStyle}>{children}</Text>
    </Touchable>
  );
};

export default ModalSelectItem;
