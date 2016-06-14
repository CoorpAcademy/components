import path from 'path';
import test from 'ava';
import run from '../../util/for-each-engine';
import { extract } from '../../util/components-finder';

const _require = file => require(path.join('..', file)).default;
const components = extract();

const testComponent = (engineName, engine) => component => {
  const it = `${engineName} › [${component.type}] ${component.name}`;
  const factory = _require(component.path);

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

const factoryTests = (name, engine) => {
  components.forEach(testComponent(name, engine));
};

run(factoryTests);
