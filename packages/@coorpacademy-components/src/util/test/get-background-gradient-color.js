import test from 'ava';
import browserEnv from 'browser-env';
import {createGradientBackground} from '../get-background-gradient-color';

browserEnv();

test('createGradientBackground with a valid RGB color', t => {
  const result = createGradientBackground('rgba(255, 220, 209, 1)', '91%', '81%');
  t.is(result, 'linear-gradient(180deg, rgb(255, 220, 209) 0%, rgb(255, 181, 158) 100%)');
});

test('createGradientBackground with a valid HEX color', t => {
  const result = createGradientBackground('#D9F4F7', '91%', '81%');
  t.is(result, 'linear-gradient(180deg, rgb(217, 244, 247) 0%, rgb(175, 232, 238) 100%)');
});

test('createGradientBackground with a valid HSL color', t => {
  const result = createGradientBackground('hsla(52, 100%, 91%, 1)', '91%', '81%');
  t.is(result, 'linear-gradient(180deg, rgb(255, 249, 209) 0%, rgb(255, 242, 158) 100%)');
});

test('createGradientBackground with invalid color format', t => {
  t.throws(
    () => {
      createGradientBackground('invalid color');
    },
    {message: /Unable to parse color/}
  );
});

test('createGradientBackground with empty string', t => {
  t.throws(
    () => {
      createGradientBackground('');
    },
    {message: /Unable to parse color/}
  );
});

test('createGradientBackground with null input', t => {
  t.throws(
    () => {
      createGradientBackground(null);
    },
    {message: /Unable to parse color/}
  );
});

test('createGradientBackground with undefined input', t => {
  t.throws(
    () => {
      createGradientBackground(undefined);
    },
    {message: /Unable to parse color/}
  );
});
