import test from 'ava';
import browserEnv from 'browser-env';
import {getForegroundColor} from '..';

browserEnv();

test('getForegroundColor with a valid RGB background color', t => {
  t.is(getForegroundColor('rgba(255, 220, 209, 1)'), 'rgb(163, 38, 0)'); // hsl(14.348 100% 32%);
});

test('getForegroundColor with a valid HEX background color', t => {
  t.is(getForegroundColor('#D9F4F7'), 'rgb(29, 124, 135)'); // 'hsl(186 65.217% 32%)'
});

test('getForegroundColor with a valid HSL background color', t => {
  t.is(getForegroundColor('hsla(52, 100%, 91%, 1)'), 'rgb(163, 141, 0)'); // 'hsl(52 100% 32%)'
});

test('getForegroundColor throws an error with an invalid backgroundColor', t => {
  t.throws(
    () => {
      getForegroundColor('invalid color');
    },
    {message: 'Unable to parse color from string "invalid"'}
  );
});
