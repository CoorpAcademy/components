import fs from 'fs';
import path from 'path';
import test from 'ava';

// English is the Transifex SOURCE locale (.tx/config: source_lang=en). The other
// locales/<lang>/global.json files are produced by the transifex-integration bot
// after merge to master, so a feature PR only edits the en source. We therefore
// assert the key on the source locale only.

const KEY = 'publish_on_linkedin';
const enFile = path.join(__dirname, '../../locales/en/global.json');

test(`"${KEY}" exists in the en (Transifex source) locale with the expected value`, t => {
  const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
  t.is(en[KEY], 'Publish on LinkedIn');
});
