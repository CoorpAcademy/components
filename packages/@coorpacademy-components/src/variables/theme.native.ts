import {TextStyle} from 'react-native';

export const HTML_ANCHOR_TEXT_COLOR = '#002BDB';

export type Colors = {
  border: string;
  gray: {
    extra: string;
    light: string;
    lighter: string;
    lightMedium: string;
    medium: string;
    dark: string;
    extraDark: string;
  };
  text: {
    primary: '#06265B';
  };
  negative: string;
  positive: string;
  white: string;
  black: string;
  battle: string;
  notification: string;
  salmon: string;
};

export type Theme = {
  colors: Colors;
  spacing: {
    micro: number;
    tiny: number;
    small: number;
    base: number;
    medium: number;
    large: number;
    xlarge: number;
  };
  radius: {
    button: number;
    common: number;
    card: number;
    medium: number;
    regular: number;
    search: number;
    thumbnail: number;
  };
  background?: number;
  fontWeight: {
    regular: TextStyle['fontWeight'];
    semiBold: TextStyle['fontWeight'];
    bold: TextStyle['fontWeight'];
    extraBold: TextStyle['fontWeight'];
  };
  fontSize: {
    extraSmall: TextStyle['fontSize'];
    small: TextStyle['fontSize'];
    medium: TextStyle['fontSize'];
    regular: TextStyle['fontSize'];
    large: TextStyle['fontSize'];
    xlarge: TextStyle['fontSize'];
    xxlarge: TextStyle['fontSize'];
    xxxlarge: TextStyle['fontSize'];
  };
  letterSpacing: {
    header: number;
  };
};

const defaultTheme: Theme = {
  colors: {
    border: 'rgba(0, 0, 0, 0.1)',
    gray: {
      extra: '#FAFAFA',
      lighter: '#F4F4F5',
      light: '#ededed',
      lightMedium: '#CFD8DC',
      medium: '#90A4AE',
      dark: '#546E7A',
      extraDark: '#323232'
    },
    text: {
      primary: '#06265B'
    },
    background: {},
    cta: '#0061FF',
    negative: '#F73F52',
    positive: '#3EC483',
    white: '#FFFFFF',
    black: '#14171A',
    battle: '#FFDE03',
    notification: '#FF7043',
    salmon: '#FDE2E5'
  },
  spacing: {
    micro: 4,
    tiny: 8,
    small: 16,
    base: 24,
    medium: 32,
    large: 48,
    xlarge: 64
  },
  radius: {
    common: 3,
    card: 5,
    regular: 8,
    medium: 12,
    search: 24,
    button: 32,
    thumbnail: 1000
  },
  fontWeight: {
    regular: '400',
    semiBold: '500',
    bold: '700',
    extraBold: '900'
  },
  fontSize: {
    extraSmall: 10,
    small: 12,
    medium: 13,
    regular: 15,
    large: 17,
    xlarge: 22,
    xxlarge: 28,
    xxxlarge: 40
  },
  letterSpacing: {
    header: 5
  }
};

export default defaultTheme;
