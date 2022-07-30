import React, {useState, useEffect} from 'react';
import {StyleSheet, TextStyle} from 'react-native';
import type {PressEvent} from 'react-native/Libraries/Types/CoreEventTypes';

import Text from '../../../atom/text/index.native';
import Touchable from '../../touchable/index.native';
import {useTemplateContext} from '../../../template/app-review/template-context';
import {Theme} from '../../../variables/theme.native';

export type Props = {
  isSelected?: boolean;
  children: string;
  onPress?: (event: PressEvent) => any;
  testID?: string;
};

type StyleSheetType = {
  container: {
    backgroundColor: string;
    padding: number;
  };
  text: {
    fontWeight: TextStyle;
    color: string;
  };
  selectedTextStyle: {
    color: string;
  };
};

const createStyleSheet = (brandTheme: any, theme: Theme) =>
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
      color: brandTheme?.colors.primary
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

  return (
    <Touchable onPress={onPress} style={styleSheet.container} testID={testID}>
      <Text style={[styleSheet.text, isSelected && styleSheet.selectedTextStyle]}>{children}</Text>
    </Touchable>
  );
};

export default ModalSelectItem;
