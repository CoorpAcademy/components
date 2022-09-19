export type FlexDirection = 'column' | 'row' | 'row-reverse' | 'column-reverse' | undefined;
export type JustifyContent =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | undefined;
export type TextAlign = 'auto' | 'left' | 'right' | 'center' | undefined;
export type FontSize = number | undefined;
export type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;
export type Position = 'absolute' | 'relative' | undefined;
export type FlexAlignType = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
export type AlignSelf = 'auto' | FlexAlignType | undefined;
export type Overflow = 'visible' | 'hidden' | 'scroll' | undefined;
