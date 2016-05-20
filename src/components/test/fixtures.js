import test from 'ava';
import isArray from 'lodash/fp/isArray';
import isFunction from 'lodash/fp/isFunction';
import run from '../../util/run-tests-on-components';

const options = {
  skin: {
    theme: {
      primary: '#123'
    }
  }
};

const fixturesTests = (name, engine) => (factoryName, factory) => {
  const {h, resolve} = engine;
  const componentName = factoryName.split('create')[1];
  const it = `${name} › ${componentName}`;

  test(`${it} › should have at least one fixture`, t => {
    const Component = factory(engine, options);
    t.true(isArray(Component.fixtures));
    t.true(Component.fixtures.length > 0);
  });

  test(`${it} › should have props or children in every fixture`, t => {
    const Component = factory(engine, options);
    Component.fixtures.forEach(function(fixture) {
      t.true(undefined !== fixture.props || undefined !== fixture.children);
    });
  });

  test(`${it} › should be instanciated as shallow Component`, t => {
    const Component = factory(engine, options);
    Component.fixtures.forEach(function(fixture) {
      const p = <Component {...fixture.props}>
        {fixture.children}
      </Component>;
      t.pass();
    });
  });
};

run(fixturesTests);
