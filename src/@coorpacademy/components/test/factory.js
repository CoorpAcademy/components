import path from 'path';
import test from 'ava';
import * as treant from '../../../@treantjs/core';
import { extractAllComponents } from '../util/components-finder';

const _require = file => require(path.join('..', file)).default;

const testComponent = treant => component => {
  const it = `[${component.type}] ${component.name}`;
  const factory = _require(component.path);

  test(`${it} › should be created with no option`, t => {
    factory(treant);
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

    factory(treant, options);
    t.pass();
  });
};

const components = extractAllComponents();
components.forEach(testComponent(treant));
