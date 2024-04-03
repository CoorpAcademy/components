import React, {ReactNode} from 'react';
import {ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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
  let calculatedColors = colors;
  if (colors.length === 1) {
    const {r, g, b} = new Color(colors[0]);
    calculatedColors =
      transparencyPosition === 'top'
        ? [`rgba(${r}, ${g}, ${b}, 0)`, colors[0], colors[0]]
        : [colors[0], colors[0], `rgba(${r}, ${g}, ${b}, 0)`];
  }

  const _style = [];

  if (style) {
    _style.push(style);
  }
  if (height) {
    _style.push({height});
  }

  return (
    (
      <LinearGradient
        colors={calculatedColors}
        style={_style}
        pointerEvents={pointerEvents}
        testID={testID}
      >
        {children}
      </LinearGradient>
    ) || null
  );
};

export default Gradient;
