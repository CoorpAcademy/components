import test from 'ava';
import browserEnv from 'browser-env';
import { createGradientBackground } from '..';

browserEnv();

test('createGradientBackground with a valid RGB color', t => {
  const result = createGradientBackground('rgba(255, 220, 209, 1)');
  t.regex(
    result,
    /^linear-gradient\(180deg, rgba\(\d+, \d+, \d+, 1\) 0%, rgba\(\d+, \d+, \d+, 1\) 100%\)$/
  );
});

test('createGradientBackground with a valid HEX color', t => {
  const result = createGradientBackground('#D9F4F7');
  t.regex(
    result,
    /^linear-gradient\(180deg, rgba\(\d+, \d+, \d+, 1\) 0%, rgba\(\d+, \d+, \d+, 1\) 100%\)$/
  );
});

test('createGradientBackground with a valid HSL color', t => {
  const result = createGradientBackground('hsla(52, 100%, 91%, 1)');
  t.regex(
    result,
    /^linear-gradient\(180deg, rgba\(\d+, \d+, \d+, 1\) 0%, rgba\(\d+, \d+, \d+, 1\) 100%\)$/
  );
});

test('createGradientBackground with edge-case HEX color (black)', t => {
  const result = createGradientBackground('#000000');
  t.regex(
    result,
    /^linear-gradient\(180deg, rgba\(\d+, \d+, \d+, 1\) 0%, rgba\(\d+, \d+, \d+, 1\) 100%\)$/
  );
});

test('createGradientBackground with edge-case HEX color (white)', t => {
  const result = createGradientBackground('#FFFFFF');
  t.regex(
    result,
    /^linear-gradient\(180deg, rgba\(\d+, \d+, \d+, 1\) 0%, rgba\(\d+, \d+, \d+, 1\) 100%\)$/
  );
});

test('createGradientBackground with semi-transparent RGBA color', t => {
  const result = createGradientBackground('rgba(255, 0, 0, 0.5)');
  t.regex(
    result,
    /^linear-gradient\(180deg, rgba\(\d+, \d+, \d+, 1\) 0%, rgba\(\d+, \d+, \d+, 1\) 100%\)$/
  );
});

test('createGradientBackground with invalid color format', t => {
  t.throws(() => {
    createGradientBackground('invalid color');
  }, { message: /Unable to parse color/ });
});

test('createGradientBackground with empty string', t => {
  t.throws(() => {
    createGradientBackground('');
  }, { message: /Unable to parse color/ });
});

test('createGradientBackground with null input', t => {
  t.throws(() => {
    createGradientBackground(null);
  }, { message: /Unable to parse color/ });
});

test('createGradientBackground with undefined input', t => {
  t.throws(() => {
    createGradientBackground(undefined);
  }, { message: /Unable to parse color/ });
});
