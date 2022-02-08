import {convert} from 'css-color-function';

// darken the color down to 35% && apply alpha of 25%
export const getShadowBoxColorFromPrimary = primaryColor =>
  convert(`color(${primaryColor} lightness(35%) a(25%))`);
