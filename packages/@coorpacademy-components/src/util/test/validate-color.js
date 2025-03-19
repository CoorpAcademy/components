import test from 'ava';
import {validateColor} from '../validate-color';

test('validateColor with a valid RGB color', t => {
  t.true(validateColor('rgb(255, 220, 209)'));
});

test('validateColor with a valid RGBA color', t => {
  t.true(validateColor('rgba(255, 220, 209, 1)'));
});

test('validateColor with a valid HEX color', t => {
  t.true(validateColor('#D9F4F7'));
});

test('validateColor with a valid short HEX color', t => {
  t.true(validateColor('#FFF'));
});

test('validateColor with a valid HSL color', t => {
  t.true(validateColor('hsl(52, 100%, 91%)'));
});

test('validateColor with a valid HSLA color', t => {
  t.true(validateColor('hsla(52, 100%, 91%, 1)'));
});

test('validateColor with an invalid color format', t => {
  t.false(validateColor('invalid color'));
});

test('validateColor with an empty string', t => {
  t.false(validateColor(''));
});

test('validateColor with null input', t => {
  t.false(validateColor(null));
});

test('validateColor with undefined input', t => {
  t.false(validateColor(undefined));
});
