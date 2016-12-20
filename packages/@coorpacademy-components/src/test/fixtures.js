import React from 'react';
import {relative} from 'path';
import test from 'ava';
import identity from 'lodash/fp/identity';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import keys from 'lodash/fp/keys';
import get from 'lodash/fp/get';
import toPairs from 'lodash/fp/toPairs';
import * as treant from '@coorpacademy/treantjs-core';
import componentsList from '../util/list-components';
import fixturesList from '../util/list-fixtures';

const {h, resolve} = treant;

// eslint-disable-next-line import/no-dynamic-require
const _require = file => require(relative(__dirname, file)).default;
const mapObject = fn => pipe(toPairs, map(([key, value]) => fn(value, key)));

const fullOptions = {
  skin: {
    images: {
      tree: 'dummy.url'
    }
  },
  translate: identity
};

mapObject((components, componentType) => mapObject((componentPath, componentName) => {
  const factory = _require(componentPath);
  const fixtures = get([componentType, componentName], fixturesList);

  test(`[${componentType}] ${componentName} › should have at least one fixture`, t => {
    t.true(keys(fixtures).length > 0);
  });

  return mapObject((fixturePath, fixtureName) => {
    const it = `[${componentType}] ${componentName} › ${fixtureName}`;
    const fixture = _require(fixturePath);

    test(`${it} › should have props or children in every fixture`, t => {
      t.true(undefined !== fixture.props || undefined !== fixture.children);
    });

    const children = map(createChild => createChild(treant), fixture.children);

    test(`${it} › should be instanciated as shallowTree`, t => {
      const Component = factory(treant, {skin: {}});
      const vTree = <Component {...fixture.props}>
        {children}
      </Component>;
      t.truthy(vTree);
    });

    test(`${it} › instanciated and resolved | no options`, t => {
      const Component = factory(treant);
      const vTree = <Component {...fixture.props}>
        {children}
      </Component>;
      const resolved = resolve(vTree);
      t.truthy(resolved);
    });

    test(`${it} › instanciated and resolved | options = {skin, translate}`, t => {
      const Component = factory(treant, fullOptions);
      const vTree = <Component {...fixture.props}>
        {children}
      </Component>;
      const resolved = resolve(vTree);
      t.truthy(resolved);
    });
  })(fixtures);
})(components))(componentsList);
