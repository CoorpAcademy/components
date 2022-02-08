import test from 'ava';
import forEach from 'lodash/fp/forEach';

import {getShadowBoxColorFromPrimary} from '../get-shadow-box-color-from-primary';

test('should return transformed colors', t => {
  t.plan(13);
  const expectedOrange = 'rgba(179, 42, 0, 0.25)';
  const expectedRed = 'rgba(179, 0, 0, 0.25)';
  const expectedYellow = 'rgba(179, 140, 0, 0.25)';
  const expectedBlue = 'rgba(0, 68, 179, 0.25)';
  // a set of possible primary/brand colors
  const primaryColors = {
    orange: ['#ff6f43', expectedOrange], // original, expected
    orangeRGB: ['rgb(255, 111, 67)', expectedOrange],
    orangeRGBA: ['rgba(255, 111, 67, 0)', expectedOrange],
    red: ['#FF0A0A', expectedRed],
    redRGB: ['rgb(255, 10, 10)', expectedRed],
    redRGBA: ['rgba(255, 10, 10, 0)', expectedRed],
    yellow: ['#ffca0a', expectedYellow],
    yellowRGB: ['rgb(255, 202, 10)', expectedYellow],
    yellowRGBA: ['rgba(255, 202, 10, 0)', expectedYellow],
    blue: ['#0061FF', expectedBlue],
    blueRGB: ['rgb(0, 97, 255)', expectedBlue],
    blueRGBA: ['rgba(0, 97, 255, 1)', expectedBlue]
  };

  forEach(color => {
    const [original, expected] = color;
    const boxShadowColor = getShadowBoxColorFromPrimary(original);
    t.is(boxShadowColor, expected);
  }, primaryColors);

  t.pass();
});
