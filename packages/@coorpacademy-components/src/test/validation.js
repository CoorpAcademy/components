import path from 'path';
import test from 'ava';
import isFunction from 'lodash/fp/isFunction';
import * as treant from '@coorpacademy/treantjs-core';
import {extractAllComponents} from '../util/components-finder';

const _require = file => require(path.join('..', file)).default;

const options = {
  skin: {
    theme: {
      primary: '#123'
    }
  }
};

const testComponent = component => {
  if (component.type === 'behaviour') return;

  const it = `[${component.type}] ${component.name}`;
  const factory = _require(component.path);

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
};

const components = extractAllComponents();
components.forEach(testComponent);
