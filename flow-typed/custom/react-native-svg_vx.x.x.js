// Inspired from https://github.com/kkemple/react-native-sideswipe/blob/master/types/index.js

import type {ViewProps} from 'react-native/Libraries/Components/View/ViewPropTypes';

declare module 'react-native-svg' {
  declare export type NumberProp = string | number;

  declare export type FillRule = 'evenodd' | 'nonzero';

  declare export type Linecap = 'butt' | 'square' | 'round';

  declare export type ColumnMajorTransformMatrix = Array<number>;

  declare export type RGBColor = number;

  declare export type Linejoin = 'miter' | 'bevel' | 'round';

  declare export type FillProps = {|
    fill?: RGBColor | Array<RGBColor> | string,
    fillOpacity?: NumberProp,
    fillRule?: FillRule,
  |};

  declare export type StrokeProps = {|
    stroke?: RGBColor | Array<RGBColor> | string,
    strokeWidth?: NumberProp,
    strokeOpacity?: NumberProp,
    strokeDasharray?: Array<NumberProp> | NumberProp,
    strokeDashoffset?: NumberProp,
    strokeLinecap?: Linecap,
    strokeLinejoin?: Linejoin,
    strokeMiterlimit?: NumberProp,
  |};

  declare export type ClipProps = {|
    clipRule?: FillRule,
    clipPath?: string
  |};

  declare export type TransformObject = {|
    scale?: NumberProp,
    scaleX?: NumberProp,
    scaleY?: NumberProp,
    rotate?: NumberProp,
    rotation?: NumberProp,
    translate?: NumberProp,
    translateX?: NumberProp,
    translateY?: NumberProp,
    x?: NumberProp,
    y?: NumberProp,
    origin?: NumberProp,
    originX?: NumberProp,
    originY?: NumberProp,
    skew?: NumberProp,
    skewX?: NumberProp,
    skewY?: NumberProp,
  |};

  declare export type TransformProps = {|
    ...TransformObject,
    transform?: ColumnMajorTransformMatrix | string | TransformObject,
  |}

  declare export type VectorEffectProps = {|
    vectorEffect?: 'none' | 'non-scaling-stroke' | 'nonScalingStroke' | 'default' | 'inherit' | 'uri';
  |};

  // Don't know what it is
  declare export type GestureResponderHandlers = {||};

  declare export type ResponderProps = {|
    ...GestureResponderHandlers,
    pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto',
  |};

  declare export type TouchableProps = {|
    disabled?: boolean,
    onPress?: (event: any) => any,
    onPressIn?: (event: any) => any,
    onPressOut?: (event: any) => any,
    onLongPress?: (event: any) => any,
    delayPressIn?: number,
    delayPressOut?: number,
    delayLongPress?: number
  |};

  declare export type DefinitionProps = {|
    id?: string,
  |};

  declare export type CommonMaskProps = {|
    mask?: string;
  |};

  declare export type CommonPathProps = {|
    ...FillProps,
    ...StrokeProps,
    ...ClipProps,
    ...TransformProps,
    ...VectorEffectProps,
    ...ResponderProps,
    ...TouchableProps,
    ...DefinitionProps,
    ...CommonMaskProps
  |};

  declare export type GProps = {|
    ...CommonPathProps,
    opacity?: NumberProp,
  |};

  declare export type SvgProps = {|
    ...GProps,
    ...ViewProps,
    width?: NumberProp,
    height?: NumberProp,
    viewBox?: string,
    preserveAspectRatio?: string,
    color?: RGBColor | Array<RGBColor> | string,
    title?: string,
  |};
}
