import React, {ReactNode} from 'react';
import {View, ViewStyle, StyleSheet, Platform} from 'react-native';
import Color from 'colorjs.io';

export type Props = {
  children?: ReactNode;
  colors: Array<string>;
  transparencyPosition?: 'top' | 'bottom';
  height?: number;
  style?: ViewStyle | ViewStyle[];
  testID?: string;
  pointerEvents?: 'auto' | 'none' | 'box-none' | 'box-only' | undefined;
};

const Gradient = ({
  children,
  colors,
  transparencyPosition = 'top',
  height,
  style,
  testID,
  pointerEvents
}: Props) => {
  // Validate colors array - ensure all values are valid strings
  const validColors = colors?.filter(c => c && typeof c === 'string') || [];

  // Fallback if no valid colors provided
  if (validColors.length === 0) {
    console.warn('Gradient: No valid colors provided, using transparent fallback');
    return <>{children}</>;
  }

  let calculatedColors = validColors;
  if (validColors.length === 1) {
    const [raw] = validColors;
    const transparent = new Color(raw).to('srgb');
    transparent.alpha = 0;

    calculatedColors =
      transparencyPosition === 'top'
        ? [transparent.toString(), raw, raw]
        : [raw, raw, transparent.toString()];
  }

  const _style: ViewStyle[] = [];

  if (style) {
    _style.push(style as ViewStyle);
  }
  if (height) {
    _style.push({height});
  }

  // Build CSS gradient string (vertical by default)
  const gradientString = `linear-gradient(180deg, ${calculatedColors.join(', ')})`;

  const gradientStyle = Platform.select({
    default: {
      // @ts-ignore - experimental_backgroundImage is not yet in types
      experimental_backgroundImage: gradientString
    },
    web: {
      // @ts-ignore
      backgroundImage: gradientString
    }
  });

  const combinedStyle = StyleSheet.flatten([gradientStyle as ViewStyle, ..._style]);

  return (
    <View style={combinedStyle} pointerEvents={pointerEvents} testID={testID}>
      {children}
    </View>
  );
};

export default Gradient;
