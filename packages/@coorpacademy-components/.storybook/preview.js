const React = require('react');
const { useState } = require('react');
const { default: createTranslate } = require('@coorpacademy/translate');
const en = require('../locales/en/global');
const fr = require('../locales/fr/global');
const ja = require('../locales/ja/global');
const ko = require('../locales/ko/global');
const es = require('../locales/es/global');
const vi = require('../locales/vi/global');
const { default: Provider } = require('../src/atom/provider');
const { default: Select } = require('../src/atom/select');

const skin = require('./skin');

const LanguageSelector = ({ setLocale }) => {
  const options = [
    {
      name: 'en',
      value: 'en',
      selected: true
    },
    {
      name: 'fr',
      value: 'fr',
      selected: false
    },
    {
      name: 'ja',
      value: 'ja',
      selected: false
    },
    {
      name: 'ko',
      value: 'ko',
      selected: false
    },
    {
      name: 'es',
      value: 'es',
      selected: false
    },
    {
      name: 'vi',
      value: 'vi',
      selected: false
    },
  ]
  return (
    <div style={{marginBottom: '32px'}}>
      <Select options={options} theme={'coorpmanager'} onChange={(value) => setLocale(value)}/>
    </div>
  );
};

const withProvider = Story => {
  const [locale, setLocale] = useState('en');

  const locales = {
    en,
    fr,
    ja,
    ko,
    es,
    vi
  };

  const context = {
    skin,
    translate: createTranslate(locales[locale]),
    Vimeo: window.Vimeo,
  };

  return (
    <Provider {...context}>
      <>
      <LanguageSelector setLocale={setLocale} />
      <Story />
      </>
    </Provider>
  );
};

module.exports = {
  decorators: [
    withProvider
  ]
};


