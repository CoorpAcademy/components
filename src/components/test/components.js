import test from 'ava';
import mapValues from 'lodash/fp/mapValues';
import forEachEngine from '../../util/for-each-engine';
import forEachFactory from '../../util/for-each-factory';

const performTests = (name, engine) => (factoryName, factory) => {
  const {h, resolve} = engine;
  const options = {
    skin: {
      theme: {
        primary: '#123'
      }
    }
  };

  const componentName = factoryName.split('create')[1];

  test(`${name} > ${componentName} with no options`, t => {
    const Component = factory(engine);
    t.pass();
  });

  // test(`${name} > ${componentName} with a skin`, t => {
  //   const Component = factory(engine, options);
  //   t.pass();
  // });

  // test(`${name} > ${componentName} should have a validate function`, t => {
  //   const Component = factory(engine, options);
  //   t.truthy(Component.validate);
  // });
};

forEachEngine((name, engine) => {
  forEachFactory(performTests(name, engine));
});
