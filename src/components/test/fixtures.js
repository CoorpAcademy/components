import path from 'path';
import test from 'ava';
import identity from 'lodash/fp/identity';
import run from '../../util/for-each-engine';
import { extract } from '../../util/components-finder';

const _require = file => require(path.join('..', file)).default;

const fullOptions = {
  skin: {
    images: {
      tree: 'dummy.url'
    }
  },
  translate: identity
};

const testFixture = (_it, component, engine) => _fixture => {
  const { h, resolve } = engine;
  const factory = _require(component.path);
  const fixture = _require(_fixture.path);
  const name = _fixture.name.split('.')[0];

  const it = `${_it} › ${name} `;

  test(`${it} › should have props or children in every fixture`, t => {
    t.true(undefined !== fixture.props || undefined !== fixture.children);
  });

  test(`${it} › should be instanciated as shallowTree`, t => {
    const Component = factory(engine, {skin: {}});
    t.pass();

    const component = <Component {...fixture.props}>
      {fixture.children}
    </Component>;
    t.pass();
  });

  test(`${it} › instanciated and resolved | no options`, t => {
    const Component = factory(engine);
    t.pass();

    const component = <Component {...fixture.props}>
      {fixture.children}
    </Component>;
    t.pass();

    resolve(component);
    t.pass();
  });

  test(`${it} › instanciated and resolved | options = {skin, translate}`, t => {
    const Component = factory(engine, fullOptions);
    t.pass();

    const component = <Component {...fixture.props}>
      {fixture.children}
    </Component>;
    t.pass();

    resolve(component);
    t.pass();
  });
};

const testComponent = (engineName, engine) => component => {
  const it = `${engineName} › [${component.type}] ${component.name}`;

  test(`${it} › should have at least one fixture`, t => {
    t.true(component.fixtures.length > 0);
  });

  component.fixtures.forEach(testFixture(it, component, engine));
};

const fixturesTests = (name, engine) => {
  const components = extract();
  components.forEach(testComponent(name, engine));
};

run(fixturesTests);
