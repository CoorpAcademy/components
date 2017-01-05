import {relative} from 'path';
import test from 'ava';
import sinon from 'sinon';
import React from 'react';
import ReactDOM from 'react-dom/server';
import identity from 'lodash/fp/identity';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import keys from 'lodash/fp/keys';
import get from 'lodash/fp/get';
import toPairs from 'lodash/fp/toPairs';
import Provider from '../atom/provider';
import componentsList from '../util/list-components';
import fixturesList from '../util/list-fixtures';

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

test.before(() => {
  sinon.stub(console, 'error', warning => {
    throw new Error(warning);
  });
});

test.after(() =>
  console.error.restore() // eslint-disable-line no-console
);

mapObject((components, componentType) => mapObject((componentPath, componentName) => {
  const Component = _require(componentPath);
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

    const children = fixture.children;

    test(`${it} › should be instanciated as shallowTree`, t => {
      const vTree = (
        <Provider {...{skin: {}}}>
          <Component {...fixture.props}>
            {children}
          </Component>
        </Provider>
      );
      t.truthy(ReactDOM.renderToString(vTree));
    });

    test(`${it} › instanciated and resolved | no options`, t => {
      const vTree = (
        <Component {...fixture.props}>
          {children}
        </Component>
      );
      t.truthy(ReactDOM.renderToString(vTree));
    });

    test(`${it} › instanciated and resolved | options = {skin, translate}`, t => {
      const vTree = (
        <Provider {...fullOptions}>
          <Component {...fixture.props}>
            {children}
          </Component>
        </Provider>
      );
      t.truthy(ReactDOM.renderToString(vTree));
    });
  })(fixtures);
})(components))(componentsList);
