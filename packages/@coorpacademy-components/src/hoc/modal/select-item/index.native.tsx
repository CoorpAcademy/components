import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';

import Text from '../../../atom/text/index.native';
import Touchable from '../../touchable/index.native';
import {useTemplateContext} from '../../../template/app-review/template-context';

export type Props = {
  isSelected?: boolean;
  children: string;
  onPress: () => void;
  testID?: string;
};

type StyleSheetType = {
  container: {
    backgroundColor: string;
    padding: number;
  };
  text: {
    fontWeight: string;
    color: string;
  };
};

const createStyleSheet = theme =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.white,
      padding: theme.spacing.small
    },
    text: {
      fontWeight: theme.fontWeight.bold,
      color: theme.colors.black
    }
  });

const ModalSelectItem = (props: Props) => {
  const templateContext = useTemplateContext();
  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);
  const {theme, brandTheme} = templateContext;
  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  if (!styleSheet) {
    return null;
  }
  const selectedTextStyle = {
    color: brandTheme.colors.primary
  };

  const {children, onPress, isSelected, testID} = props;

  return (
    <Touchable onPress={onPress} style={styleSheet.container} testID={testID}>
      <Text style={[styleSheet.text, isSelected && selectedTextStyle]}>{children}</Text>
    </Touchable>
  );
};

export default ModalSelectItem;
