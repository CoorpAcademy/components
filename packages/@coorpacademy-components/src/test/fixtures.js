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

const _require = file => require(relative(__dirname, file)).default; // eslint-disable-line import/no-dynamic-require
const mapObject = fn => pipe(toPairs, map(([key, value]) => fn(value, key)));

const context = {
  skin: {
    images: {
      tree: 'dummy.url'
    }
  },
  translate: identity
};

test.before(() => {
  sinon.stub(console, 'error').callsFake(error => {
    throw new Error(error);
  });
});

test.after(() => {
  console.error.restore(); // eslint-disable-line no-console
});

mapObject((components, componentType) =>
  mapObject((componentPath, componentName) => {
    const Component = _require(componentPath);
    const fixtures = get([componentType, componentName], fixturesList);

    return mapObject((fixturePath, fixtureName) => {
      const it = `[${componentType}] ${componentName} › ${fixtureName}`;
      const fixture = _require(fixturePath);
      const children = fixture.children;

      test(`${it} › should have props or children in every fixture`, t => {
        t.true(undefined !== fixture.props || undefined !== fixture.children);
      });

      test(`${it} › should be renderered`, t => {
        const vTree = (
          <Component {...fixture.props}>
            {children}
          </Component>
        );

        const wrappedVTree = (
          <Provider {...context}>
            {vTree}
          </Provider>
        );

        ReactDOM.renderToStaticMarkup(wrappedVTree);
        t.pass();
      });
    })(fixtures);
  })(components)
)(componentsList);
