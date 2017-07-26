import test from 'ava';
import locales from '../../locales/en/player';

const forbiddenCharacters = /:/;

test('locales keys should not contain forbidden characters', t => {
  Object.keys(locales).forEach(key => {
    t.false(forbiddenCharacters.test(key));
  });
});
