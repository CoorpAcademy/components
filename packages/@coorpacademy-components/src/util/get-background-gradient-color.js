import {convert} from 'css-color-function';

export const createGradientBackground = (baseColor, startColorLightness, endColorLigthness) => {
  const startColor = convert(`color(${baseColor} lightness(${startColorLightness}))`);
  const endColor = convert(`color(${baseColor} lightness(${endColorLigthness}))`);
  return `linear-gradient(180deg, ${startColor} 0%, ${endColor} 100%)`;
};
