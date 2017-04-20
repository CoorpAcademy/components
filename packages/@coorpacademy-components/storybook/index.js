import {relative} from 'path';
import React from 'react';
import get from 'lodash/fp/get';
import set from 'lodash/fp/set';
import each from 'lodash/fp/each';
import map from 'lodash/fp/map';
import reduce from 'lodash/fp/reduce';
import mapValues from 'lodash/fp/mapValues';
import pipe from 'lodash/fp/pipe';
import keys from 'lodash/fp/keys';
import defaults from 'lodash/fp/defaults';
import isString from 'lodash/fp/isString';
import isNumber from 'lodash/fp/isNumber';
import isBoolean from 'lodash/fp/isBoolean';
import isObject from 'lodash/fp/isObject';
import toPairs from 'lodash/fp/toPairs';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {
  withKnobs,
  text,
  number,
  boolean,
  object,
  color
} from '@kadira/storybook-addon-knobs';
import createTranslate from '@coorpacademy/translate';
import en from '../locales/en/global';
import fr from '../locales/fr/global';
import {Provider} from '../src';
import skin from './skin';
import {components, fixtures} from './components';

const forEach = mapValues.convert({cap: false});
const locales = {en, fr};
const translate = createTranslate(locales.fr);

const context = {
  skin,
  translate
};

const isColor = value => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value);

const convert = (testFunc, knobFunc, property) => value => {
  if (testFunc(value)) {
    return knobFunc(property, value);
  }

  return value;
};

// https://github.com/storybooks/storybook-addon-knobs
const toKnobs = props => reduce.convert({cap: false})((acc, value, property) => {
  const v = pipe(
    convert(isColor, color, property),
    convert(isString, text, property),
    convert(isNumber, number, property),
    convert(isBoolean, boolean, property),
    convert(isObject, object, property),
  )(value);

  return set(property, v, acc);
}, {}, props);

forEach((folder, folderName) => {
  forEach((Component, componentName) => {
    const componentFixtures = get([folderName, componentName], fixtures);
    const stories = storiesOf(`${folderName}.${componentName}`, module);
    stories.addDecorator(withKnobs);
    forEach(({props, children}, fixtureName) => {
      stories.add(fixtureName, () => (
        <Provider {...context}>
          <Component {...toKnobs(props)}>
            {children}
          </Component>
        </Provider>
      ));
    }, componentFixtures);
  }, folder);
}, components);
