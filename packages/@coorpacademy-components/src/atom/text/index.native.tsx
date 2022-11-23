import * as React from 'react';
import {Text as TextBase, Platform, StyleSheet, TextStyle} from 'react-native';

export type Props = {
  // copied from node_modules/react-native/Libraries/Text/TextProps.js
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
  testID?: string;
  numberOfLines?: number;
  allowFontScaling?: boolean;
  accessibilityLabel?: string;
};

export const DEFAULT_STYLE = {
  ...Platform.select({
    android: {
      fontFamily: 'Roboto'
    }
  })
};

const styles = StyleSheet.create({
  text: {
    ...DEFAULT_STYLE
  }
});

const Text = (props: Props) => {
  const {
    children,
    style,
    testID,
    numberOfLines,
    allowFontScaling = true,
    accessibilityLabel
  } = props;

  return (
    <TextBase
      allowFontScaling={allowFontScaling}
      style={[styles.text, style]}
      testID={testID}
      numberOfLines={numberOfLines}
      accessibilityLabel={accessibilityLabel}
    >
      {children}
    </TextBase>
  );
};

export default Text;
