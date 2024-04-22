import test from 'ava';
import browserEnv from 'browser-env';
import {calculateLuminosity} from '..';

browserEnv();

test('calculateLuminosity with default luminosity delta', t => {
  t.is(calculateLuminosity(0.5), 0.46);
});

test('calculateLuminosity with custom luminosity delta', t => {
  t.is(calculateLuminosity(0.5, 0.2), 0.4);
});
