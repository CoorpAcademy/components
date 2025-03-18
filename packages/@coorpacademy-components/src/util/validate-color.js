import Color from 'colorjs.io';

export const validateColor = color => {
  try {
    Color.parse(color);
    return true;
  } catch (e) {
    return false;
  }
};
