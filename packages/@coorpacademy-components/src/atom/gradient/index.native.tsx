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
    const [raw] = colors;
    const transparent = new Color(raw).to('srgb');
    transparent.alpha = 0;

    calculatedColors =
      transparencyPosition === 'top'
        ? [transparent.toString(), raw, raw]
        : [raw, raw, transparent.toString()];
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
