import test from 'ava';
import browserEnv from 'browser-env';
import {DEFAULT_ICON_COLOR, getIconColor} from '..';

browserEnv();

test('getIconColor with a valid RGB background color', t => {
  t.is(getIconColor({backgroundColor: 'rgba(255, 220, 209, 1)'}), 'hsl(14.348 100% 32%)');
});

test('getIconColor with a valid HEX background color', t => {
  t.is(getIconColor({backgroundColor: '#D9F4F7'}), 'hsl(186 65.217% 32%)');
});

test('getIconColor with a valid HSL background color', t => {
  t.is(getIconColor({backgroundColor: 'hsla(52, 100%, 91%, 1)'}), 'hsl(52 100% 32%)');
});

test('getIconColor with no background color provided uses default icon color', t => {
  t.is(getIconColor(), DEFAULT_ICON_COLOR);
});

test('getIconColor with no background color provided uses custom default icon color', t => {
  t.is(getIconColor({defaultIconColor: 'red'}), 'red');
});

test('getIconColor throws an error with an invalid backgroundColor', t => {
  const invalidColor = 'invalid color';
  const error = t.throws(
    () => {
      getIconColor({backgroundColor: invalidColor});
    },
    {instanceOf: Error}
  );
  t.is(error.message, 'Could not parse invalid color as a color. Missing a plugin?');
});
