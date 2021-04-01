import PropTypes from 'prop-types';
import {forEach, set, split, map, concat} from 'lodash/fp';
import test from 'ava';
import {
  ColorPropType,
  HexPropType,
  ImagePropType,
  UrlPropType,
  PathPropType,
  SrcPropType
} from '../proptypes';

const validMacro = (t, proptype, values) => {
  forEach(value => {
    const props = set('assert', value, {});
    const propTypes = set('assert', proptype, {});
    t.notThrows(() => PropTypes.checkPropTypes(propTypes, props, 'assert', 'Assertion'));
  }, values);
};

const failMacro = (t, proptype, values) => {
  forEach(value => {
    const props = set('assert', value, {});
    const propTypes = set('assert', proptype, {});
    t.throws(() => PropTypes.checkPropTypes(propTypes, props, 'assert', 'Assertion'));
  }, values);
};

test('ColorPropType should pass when correct color value is passed', validMacro, ColorPropType, [
  '#FF00FF'
]);
test(
  'ColorPropType should throw error when incorrect color value is passed',
  failMacro,
  ColorPropType,
  ['#123', 'blue']
);

const VALID_HEX_CHAR = split('', '0123456789ABCDEF');
test(
  'HexPropType should pass when heximal value is passed',
  validMacro,
  HexPropType,
  concat(
    VALID_HEX_CHAR,
    map(char => `0x${char}`, VALID_HEX_CHAR)
  )
);

const INVALID_HEX_CHAR = split('', 'GHIJKLMNOPQRSTUVWXYZ&é"\'(§è!çà)-@');
test(
  'HexPropType should throw error when incorrect value is passed',
  failMacro,
  HexPropType,
  concat(
    INVALID_HEX_CHAR,
    map(char => `0x${char}`, INVALID_HEX_CHAR)
  )
);

test('UrlPropType should pass when valid URL is passed', validMacro, UrlPropType, [
  'https://static.coorpacademy.com/content/digital/raw/login-bg-1491236164055.jpg'
]);
test('UrlPropType should throw error when incorrect url is passed', failMacro, UrlPropType, [
  '/assets/css/skin/logos/logo_coorpacademy-retina-theme3.png'
]);

test('PathPropType should pass when valid path is passed', validMacro, PathPropType, [
  '/assets/css/skin/logos/logo_coorpacademy-retina-theme3.png'
]);
test('PathPropType should throw error when incorrect path is passed', failMacro, PathPropType, [
  'https://static.coorpacademy.com/content/digital/raw/login-bg-1491236164055.jpg'
]);

test('SrcPropType should pass when valid source is passed', validMacro, SrcPropType, [
  '/assets/css/skin/logos/logo_coorpacademy-retina-theme3.png',
  'https://static.coorpacademy.com/content/digital/raw/login-bg-1491236164055.jpg'
]);
test('SrcPropType should throw error when incorrect source is passed', failMacro, SrcPropType, [0]);

test('ImagePropType should pass when correct image type is passed', validMacro, ImagePropType, [
  'svg+xml',
  'jpg',
  'png'
]);

test(
  'ImagePropType should throw error when incorrect image type is passed: misspelled',
  failMacro,
  ImagePropType,
  ['sgv+xml']
);

test(
  'ImagePropType should throw error when incorrect image type is passed: not included',
  failMacro,
  ImagePropType,
  ['pdf', 'another']
);

test(
  'ImagePropType should throw error when incorrect image type is passed even if the rest are ok',
  failMacro,
  ImagePropType,
  ['jpg', 'pdf']
);
