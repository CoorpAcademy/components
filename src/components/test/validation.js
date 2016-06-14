import path from 'path';
import test from 'ava';
import isFunction from 'lodash/fp/isFunction';
import run from '../../util/for-each-engine';
import { extract } from '../../util/components-finder';

const _require = file => require(path.join('..', file)).default;
const components = extract();

const options = {
  skin: {
    theme: {
      primary: '#123'
    }
  }
};

const testComponent = (engineName, engine) => component => {
  if (component.type === 'behaviour') return;

  const {h, resolve} = engine;
  const it = `${engineName} › [${component.type}] ${component.name}`;
  const factory = _require(component.path);

  test(`${it} › should have a validate function`, t => {
    const Component = factory(engine, options);
    t.true(isFunction(Component.validate));
  });

  test(`${it} › should have well formed conditions`, t => {
    const Component = factory(engine, options);
    const conditions = Component.validate.conditions;
    t.true(isFunction(conditions));
    t.true(conditions.name === 'requiredChecker');
  });
};

const validationTests = (name, engine) => {
  components.forEach(testComponent(name, engine));
};

run(validationTests);

