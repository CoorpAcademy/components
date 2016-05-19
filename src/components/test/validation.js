import test from 'ava';
import isFunction from 'lodash/fp/isFunction';
import run from '../../util/run-tests-on-components';

const options = {
  skin: {
    theme: {
      primary: '#123'
    }
  }
};

const validationTests = (name, engine) => (factoryName, factory) => {
  const {h, resolve} = engine;
  const componentName = factoryName.split('create')[1];
  const it = `${name} › ${componentName}`;

  test(`${it} › should have a validate function`, t => {
    const Component = factory(engine, options);
    t.true(isFunction(Component.validate));
  });

  test(`${it} › should have well formed conditions`, t => {
    const Component = factory(engine, options);
    const conditions = Component.validate.conditions;
    t.true(isFunction(conditions.props || conditions.children));
  });
};

run(validationTests);
