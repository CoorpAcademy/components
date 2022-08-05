import * as React from 'react';
import {Text as TextBase, Platform, StyleSheet, ViewStyle} from 'react-native';

export type Props = {
  // copied from node_modules/react-native/Libraries/Text/TextProps.js
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
  testID?: string;
  numberOfLines?: number;
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
  const {children, style, testID, numberOfLines} = props;

  return (
    <TextBase style={[styles.text, style]} testID={testID} numberOfLines={numberOfLines}>
      {children}
    </TextBase>
  );
};

export default Text;
