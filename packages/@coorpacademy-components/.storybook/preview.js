import React from 'react';
import createTranslate from '@coorpacademy/translate';
import en from '../locales/en/global';
import fr from '../locales/fr/global';
import de from '../locales/de/global';
import ja from '../locales/ja/global';
import ko from '../locales/ko/global';
import es from '../locales/es/global';
import vi from '../locales/vi/global';
import Provider from '../src/atom/provider';

import skin from './skin';

const withProvider = (Story, context) => {
  const locales = {en, fr, de, ja, ko, es, vi};

  const providerContext = {
    skin,
    translate: createTranslate(locales[context.globals.locale]),
    Vimeo: window.Vimeo,
  };

  return (
    <Provider {...providerContext}>
      <Story />
    </Provider>
  );
};

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'fr', right: '🇫🇷', title: 'Français' },
        { value: 'de', right: '🇩🇪', title: 'German' },
        { value: 'es', right: '🇪🇸', title: 'Español' },
        { value: 'ja', right: '🇯🇵', title: 'Japanese' },
        { value: 'ko', right: '🇰🇷', title: 'Korean' },
        { value: 'vi', right: '🇻🇳', title: 'Vietnamese' },
      ],
    },
  },
};

export const decorators = [
  withProvider
];