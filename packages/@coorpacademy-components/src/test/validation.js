import {relative} from 'path';
import test from 'ava';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import toPairs from 'lodash/fp/toPairs';
import isFunction from 'lodash/fp/isFunction';
import startsWith from 'lodash/fp/startsWith';
import * as treant from '@coorpacademy/treantjs-core';
import componentsList from '../util/list-components';

const _require = file => require(relative(__dirname, file)).default;
const mapObject = fn => pipe(toPairs, map(([key, value]) => fn(value, key)));

const options = {
  skin: {
    theme: {
      primary: '#123'
    }
  }
};

mapObject((components, componentType) => mapObject((componentPath, componentName) => {
  if (startsWith('Behaviour', componentType)) return;

  const it = `[${componentType}] ${componentName}`;
  const factory = _require(componentPath);

  test(`${it} › should have a validate function`, t => {
    const Component = factory(treant, options);
    t.true(isFunction(Component.validate));
  });

  test(`${it} › should have well formed conditions`, t => {
    const Component = factory(treant, options);
    const conditions = Component.validate.conditions;
    t.true(isFunction(conditions));
    t.true(conditions.name === 'requiredChecker');
  });
})(components))(componentsList);
