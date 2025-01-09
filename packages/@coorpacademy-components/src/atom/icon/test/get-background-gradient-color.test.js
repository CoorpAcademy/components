import test from 'ava';
import browserEnv from 'browser-env';
import {createGradientBackground} from '..';

browserEnv();

test('createGradientBackground with a valid RGB color', t => {
  const result = createGradientBackground('rgba(255, 220, 209, 1)');
  t.regex(result, /^linear-gradient\(180deg, rgb\(255, 95, 46\) 0%, rgb\(250, 58, 0\) 100%\)$/);
});

test('createGradientBackground with a valid HEX color', t => {
  const result = createGradientBackground('#D9F4F7');
  t.regex(result, /^linear-gradient\(180deg, rgb\(82, 205, 218\) 0%, rgb\(44, 190, 206\) 100%\)$/);
});

test('createGradientBackground with a valid HSL color', t => {
  const result = createGradientBackground('hsla(52, 100%, 91%, 1)');
  t.regex(result, /^linear-gradient\(180deg, rgb\(255, 227, 46\) 0%, rgb\(250, 217, 0\) 100%\)$/);
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
