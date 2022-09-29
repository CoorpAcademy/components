const React = require('react');
const {default: createTranslate} = require('@coorpacademy/translate');
const en = require('../locales/en/global');
const {default: Provider} = require('../src/atom/provider');
const skin = require('./skin');

const translate = createTranslate(en);

const context = {
  skin,
  translate,
  Vimeo: window.Vimeo
};

module.exports = {
  decorators: [
    Story => (
      <Provider {...context}>
        <Story />
      </Provider>
    )
  ]
};
