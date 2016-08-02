import test from 'ava';
import run from '../../util/run-tests-on-components';

const factoryTests = (name, engine) => (factoryName, factory) => {
  const componentName = factoryName.split('create')[1] || factoryName.split('Behaviour')[0];
  const it = `${name} › ${componentName}`;

  test(`${it} › should be instanciated`, t => {
    factory(engine);
  });
};

run(factoryTests);
