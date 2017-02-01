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

const options = {
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
    const children = fixture.children;

    const createVtree = () => (
      <Provider {...options}>
        <Component {...fixture.props}>
          {children}
        </Component>
      </Provider>
    );

    test(`${it} › should have props or children in every fixture`, t => {
      t.true(undefined !== fixture.props || undefined !== fixture.children);
    });

    test(`${it} › should be renderered`, t => {
      const vTree = createVtree();
      t.truthy(ReactDOM.renderToString(vTree));
    });

    // test(`${it} › vDom should be pure`, t => {
    //   const vTree1 = createVtree();
    //   const vTree2 = createVtree();
    //   const dom1 = ReactDOM.renderToString(vTree1);
    //   const dom2 = ReactDOM.renderToString(vTree2);
    //
    //   t.deepEqual(vTree1, vTree2);
    //   t.deepEqual(dom1, dom2);
    // });
  })(fixtures);
})(components))(componentsList);
