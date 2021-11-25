import React from 'react';
import {
  get,
  set,
  reduce,
  mapValues,
  pipe,
  isString,
  isNumber,
  isBoolean,
  isObject
} from 'lodash/fp';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, number, boolean, object, color} from '@storybook/addon-knobs';

import createTranslate from '@coorpacademy/translate';
import en from '../locales/en/global';
// import fr from '../locales/fr/global';
import Provider from '../es/atom/provider';
import skin from './skin';
import {components, fixtures} from './components';

const forEach = mapValues.convert({cap: false});
// const locales = {en, fr};
const translate = createTranslate(en);

const context = {
  skin,
  translate,
  Vimeo: window.Vimeo
};

const isColor = value => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value);

const convert = (testFunc, knobFunc, property) => value => {
  if (testFunc(value)) {
    return knobFunc(property, value);
  }

  return value;
};

// https://github.com/storybooks/storybook-addon-knobs
const toKnobs = props =>
  reduce.convert({cap: false})(
    (acc, value, property) => {
      const v = pipe(
        convert(isColor, color, property),
        convert(isString, text, property),
        convert(isNumber, number, property),
        convert(isBoolean, boolean, property),
        convert(isObject, object, property)
      )(value);

      return set(property, v, acc);
    },
    {},
    props
  );

forEach((folder, folderName) => {
  forEach((Component, componentName) => {
    const componentFixtures = get([folderName, componentName], fixtures);
    const stories = storiesOf(`${componentName}`, module);
    stories.addDecorator(withKnobs);
    forEach(({props, children}, fixtureName) => {
      stories.add(
        fixtureName,
        () => (
          <Provider {...context}>
            <Component {...toKnobs(props)}>{children}</Component>
          </Provider>
        ),
        {knobs: {escapeHTML: false}}
      );
    }, componentFixtures);
  }, folder);
}, components);
