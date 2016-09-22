import path from 'path';
import test from 'ava';
import identity from 'lodash/fp/identity';
import map from 'lodash/fp/map';
import * as treant from '@coorpacademy/treantjs-core';
import {extractAllComponents} from '../util/components-finder';

const _require = file => require(path.join('..', file)).default;

const fullOptions = {
  skin: {
    images: {
      tree: 'dummy.url'
    }
  },
  translate: identity
};

const testFixture = (_it, component) => _fixture => {
  const { h, resolve } = treant;
  const factory = _require(component.path);
  const fixture = _require(_fixture.path);
  const _name = _fixture.name.split('.')[0];

  const it = `${_it} › ${_name} `;

  if (component.type === 'behaviour') {
    test(`${it} › should have children in every fixture`, t => {
      t.true(undefined !== fixture.children);
    });
  }
  else {
    test(`${it} › should have props or children in every fixture`, t => {
      t.true(undefined !== fixture.props || undefined !== fixture.children);
    });
  }

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
};

const testComponent = component => {
  const it = `[${component.type}] ${component.name}`;

  test(`${it} › should have at least one fixture`, t => {
    t.true(component.fixtures.length > 0);
  });

  component.fixtures.forEach(testFixture(it, component));
};

const components = extractAllComponents();
components.forEach(testComponent);
