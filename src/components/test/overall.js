import test from 'ava';
import mapValues from 'lodash/fp/mapValues';
import isFunction from 'lodash/fp/isFunction';
import forEachEngine from '../../util/for-each-engine';
import forEachFactory from '../../util/for-each-factory';

const options = {
  skin: {
    theme: {
      primary: '#123'
    }
  }
};

const performTests = (name, engine) => (factoryName, factory) => {
  const {h, resolve} = engine;
  const componentName = factoryName.split('create')[1];

  test(`${name} > ${componentName} should be created with no option`, t => {
    factory(engine);
    t.pass();
  });

  test(`${name} > ${componentName} should be created with a skin`, t => {
    factory(engine, options);
    t.pass();
  });

  test(`${name} > ${componentName} should have a validate function`, t => {
    const Component = factory(engine, options);
    t.true(isFunction(Component.validate));
  });

  test(`${name} > ${componentName} should have well formed conditions`, t => {
    const Component = factory(engine, options);
    const conditions = Component.validate.conditions;
    t.true(isFunction(conditions.props || conditions.children));
  });
};

forEachEngine((name, engine) => {
  forEachFactory(performTests(name, engine));
});
