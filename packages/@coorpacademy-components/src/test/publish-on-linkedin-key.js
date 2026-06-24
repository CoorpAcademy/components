import fs from 'fs';
import path from 'path';
import test from 'ava';
import glob from 'glob';

// Guard test for spec 001-linkedin-badge-share (§4 i18n / P3, risk R2):
// the `publish_on_linkedin` key must exist in every locale, with real FR/EN values.

const KEY = 'publish_on_linkedin';
const localesDir = path.join(__dirname, '../../locales');
const globalFiles = glob.sync(path.join(localesDir, '*', 'global.json'));

const read = file => JSON.parse(fs.readFileSync(file, 'utf8'));

test('there are at least 30 locale global.json files', t => {
  t.true(globalFiles.length >= 30, `expected at least 30 locales, found ${globalFiles.length}`);
});

test(`"${KEY}" exists with a non-empty string value in every locale`, t => {
  globalFiles.forEach(file => {
    const locale = path.basename(path.dirname(file));
    const data = read(file);
    t.true(
      Object.prototype.hasOwnProperty.call(data, KEY),
      `missing "${KEY}" in locale "${locale}"`
    );
    t.is(typeof data[KEY], 'string', `"${KEY}" should be a string in locale "${locale}"`);
    t.not(data[KEY].trim(), '', `"${KEY}" should not be empty in locale "${locale}"`);
  });
});

test('FR and EN carry the real translations', t => {
  const fr = read(path.join(localesDir, 'fr', 'global.json'));
  const en = read(path.join(localesDir, 'en', 'global.json'));
  t.is(fr[KEY], 'Publier sur LinkedIn');
  t.is(en[KEY], 'Publish on LinkedIn');
});
