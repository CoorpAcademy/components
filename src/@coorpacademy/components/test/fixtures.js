import path from 'path';
import test from 'ava';
import identity from 'lodash/fp/identity';
import map from 'lodash/fp/map';
import * as treant from '../../../@treantjs/core';
import { extractAllComponents } from '../util/components-finder';

const _require = file => require(path.join('..', file)).default;

const fullOptions = {
  skin: {
    images: {
      tree: 'dummy.url'
    }
  },
  translate: identity
};

const testFixture = (_it, component, treant) => _fixture => {
  const { h, resolve } = treant;
  const factory = _require(component.path);
  const fixture = _require(_fixture.path);
  const name = _fixture.name.split('.')[0];

  const createChildren = fixture => {
    return map(createChild => {
      return createChild(treant);
    }, fixture.children);
  };

  const it = `${_it} › ${name} `;

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

  const children = createChildren(fixture);

  test(`${it} › should be instanciated as shallowTree`, t => {
    const Component = factory(treant, {skin: {}});
    const component = <Component {...fixture.props}>
      {children}
    </Component>;
    t.truthy(component);
  });

  test(`${it} › instanciated and resolved | no options`, t => {
    const Component = factory(treant);
    const component = <Component {...fixture.props}>
      {children}
    </Component>;
    const resolved = resolve(component);
    t.truthy(resolved);
  });

  test(`${it} › instanciated and resolved | options = {skin, translate}`, t => {
    const Component = factory(treant, fullOptions);
    const component = <Component {...fixture.props}>
      {children}
    </Component>;
    const resolved = resolve(component);
    t.truthy(resolved);
  });
};

const testComponent = treant => component => {
  const it = `[${component.type}] ${component.name}`;

  test(`${it} › should have at least one fixture`, t => {
    t.true(component.fixtures.length > 0);
  });

  component.fixtures.forEach(testFixture(it, component, treant));
};

const components = extractAllComponents();
components.forEach(testComponent(treant));
