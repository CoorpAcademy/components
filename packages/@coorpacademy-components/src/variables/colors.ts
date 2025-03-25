export const COLORS = {
  gray: '#EAEAEB',
  negative: '#ed3436',
  cm_negative_200: '#B81400',
  cm_negative_300: '#991100',
  positive: '#35CC7F',
  cm_positive_200: '#05944F',
  white: '#ffffff',
  cm_blue_50: '#f1f6fe',
  cm_grey_400: '#9999A8',
  cm_grey_800: '#171721',
  cm_primary_blue: '#0061FF',
  primary_100: '#D6E6FF',
  cm_grey_500: '#515161',
  cm_grey_700: '#1D1D2B',
  cm_yellow_400: '#bd7e00',
  brand: '#00B0FF'
} as const;

export type Colors = typeof COLORS;
