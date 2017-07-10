import forEach from 'lodash/fp/forEach';
import set from 'lodash/fp/set';
import split from 'lodash/fp/split';
import map from 'lodash/fp/map';
import concat from 'lodash/fp/concat';
import test from 'ava';
import {color, hex, url, path} from '../proptypes';

const validMacro = (t, proptype, values) => {
  forEach(value => {
    const props = set(value, value, {});
    const error = proptype(props, value, 'test');
    t.falsy(error);
  }, values);
};

const failMacro = (t, proptype, values) => {
  forEach(value => {
    const props = set('assert', value, {});
    const error = proptype(props, 'assert', 'test');
    t.truthy(error);
  }, values);
};

test('Color should pass when correct color value is passed', validMacro, color, ['#FF00FF']);
test('Color should throw error when incorrect color value is passed', failMacro, color, [
  '#123',
  'blue'
]);

const VALID_HEX_CHAR = split('', '0123456789ABCDEF');
test(
  'Hex should pass when heximal value is passed',
  validMacro,
  hex,
  concat(VALID_HEX_CHAR, map(char => `0x${char}`, VALID_HEX_CHAR))
);

const INVALID_HEX_CHAR = split('', 'GHIJKLMNOPQRSTUVWXYZ&é"\'(§è!çà)-@');
test(
  'Hex should throw error when incorrect value is passed',
  failMacro,
  hex,
  concat(INVALID_HEX_CHAR, map(char => `0x${char}`, INVALID_HEX_CHAR))
);

test('Url should pass when valid URL is passed', validMacro, url, [
  'https://static.coorpacademy.com/content/digital/raw/login-bg-1491236164055.jpg'
]);
test('Url should throw error when incorrect url is passed', failMacro, url, [
  '/assets/css/skin/logos/logo_coorpacademy-retina-theme3.png'
]);

test('Path should pass when valid path is passed', validMacro, path, [
  '/assets/css/skin/logos/logo_coorpacademy-retina-theme3.png'
]);
test('Path should throw error when incorrect path is passed', failMacro, path, [
  'https://static.coorpacademy.com/content/digital/raw/login-bg-1491236164055.jpg'
]);
