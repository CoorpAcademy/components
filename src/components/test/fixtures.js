import path from 'path';
import test from 'ava';
import run from '../../util/for-each-engine';
import { extract } from '../../util/components-finder';

const _require = file => require(path.join('..', file)).default;

const options = {
  skin: {
    theme: {
      primary: '#123'
    }
  }
};

const testFixture = (it, component, engine) => _fixture => {
  const {h} = engine;
  const factory = _require(component.path);
  const fixture = _require(_fixture.path);
  const Component = factory(engine, options);
  const name = _fixture.name.split('.')[0];

  it = `${it} › ${name} `;

  test(`${it} › should have props or children in every fixture`, t => {
    t.true(undefined !== fixture.props || undefined !== fixture.children);
  });

  test(`${it} › should be instanciated as shallow Component`, t => {
    <Component {...fixture.props}>
      {fixture.children}
    </Component>;
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
