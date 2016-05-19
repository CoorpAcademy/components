import test from 'ava';
import run from '../../util/run-tests-on-components';

const factoryTests = (name, engine) => (factoryName, factory) => {
  const componentName = factoryName.split('create')[1];
  const it = `${name} › ${componentName}`;

  test(`${it} › should be created with no option`, t => {
    factory(engine);
    t.pass();
  });

  test(`${it} › should be created with a skin`, t => {
    const options = {
      skin: {
        theme: {
          primary: '#123'
        }
      }
    };

    factory(engine, options);
    t.pass();
  });
};

run(factoryTests);
