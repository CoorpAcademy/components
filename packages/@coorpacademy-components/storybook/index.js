import {relative} from 'path';
import React from 'react';
import get from 'lodash/fp/get';
import set from 'lodash/fp/set';
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
import Provider from '../src/atom/provider';
import en from '../locales/en/global';
import fr from '../locales/fr/global';
import skin from './skin';

import {components, fixtures} from './components';

const locales = {en, fr};
const translate = key => {
  try {
    return createTranslate(locales.fr)(key);
  } catch (e) {
    return key;
  }
};

const options = {
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
const toKnobs = props => {
  const res = pipe(
    toPairs,
    reduce((acc, [property, value]) => {
      const v = pipe(
        convert(isColor, color, property),
        convert(isString, text, property),
        convert(isNumber, number, property),
        convert(isBoolean, boolean, property),
        convert(isObject, object, property),
      )(value);

      return set(property, v, acc);
    }, {})
  )(props);

  return res;
};

// eslint-disable-next-line lodash-fp/no-unused-result
pipe(
  toPairs,
  map(([folderName, _folder]) => ([
    folderName,
    pipe(
      toPairs,
      map(([componentName, factory]) => {
        const _fixtures = get([folderName, componentName], fixtures);
        const stories = storiesOf(`${folderName}.${componentName}`, module);
        stories.addDecorator(withKnobs);

        // eslint-disable-next-line lodash-fp/no-unused-result
        pipe(
          toPairs,
          map(([fixtureName, fixture]) => {
            stories.add(fixtureName, () => React.createElement(
              Provider,
              options,
              React.createElement(
                factory,
                toKnobs(fixture.props),
                fixtures.children
              )
            ));
          })
        )(_fixtures);
      })
    )(_folder)
  ]))
)(components);
