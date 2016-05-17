import test from 'ava';
import mapValues from 'lodash/fp/mapValues';
import forEachEngine from '../../util/for-each-engine';
import forEachFactory from '../../util/for-each-factory';

const performTests = (name, engine) => (factoryName, factory) => {
  const {h, resolve} = engine;
  const options = null;

  const componentName = factoryName.split('create')[1];

  test(`${name}: should create ${componentName} with no options`, t => {
    const Component = factory(engine);
  });
};

forEachEngine((name, engine) => {
  forEachFactory(performTests(name, engine));
});
