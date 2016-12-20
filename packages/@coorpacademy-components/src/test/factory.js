import React from 'react';
import {relative} from 'path';
import test from 'ava';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import toPairs from 'lodash/fp/toPairs';
import * as treant from '@coorpacademy/treantjs-core';
import componentsList from '../util/list-components';

// eslint-disable-next-line import/no-dynamic-require
const _require = file => require(relative(__dirname, file)).default;
const mapObject = fn => pipe(toPairs, map(([key, value]) => fn(value, key)));

mapObject((components, componentType) => mapObject((componentPath, componentName) => {
  const it = `[${componentType}] ${componentName}`;
  const component = _require(componentPath);

  test(`${it} › should be created with no option`, t => {
    component(treant);
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

    component(treant, options);
    t.pass();
  });
})(components))(componentsList);
