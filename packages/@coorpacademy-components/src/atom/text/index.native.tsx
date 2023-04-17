import React from 'react';
import {Dimensions, Text as TextBase, TextStyle} from 'react-native';

export type Props = {
  children: React.ReactNode;
  style?: TextStyle;
  testID?: string;
  numberOfLines?: number;
  allowFontScaling?: boolean;
  accessibilityLabel?: string;
};

const SCREEN = Dimensions.get('screen');
const FONT_SCALING = 0.5 * (SCREEN.height / SCREEN.width);

const Text = (props: Props) => {
  const {
    children,
    style,
    testID,
    numberOfLines,
    allowFontScaling = true,
    accessibilityLabel
  } = props;

  const styleWithScaledFont: TextStyle = {
    ...style,
    fontSize: style?.fontSize ? style.fontSize * FONT_SCALING : undefined,
    lineHeight: style?.lineHeight ? style.lineHeight * FONT_SCALING : undefined
  };

  return (
    <TextBase
      allowFontScaling={allowFontScaling}
      style={styleWithScaledFont}
      testID={testID}
      numberOfLines={numberOfLines}
      accessibilityLabel={accessibilityLabel}
    >
      {children}
    </TextBase>
  );
};

export default Text;
