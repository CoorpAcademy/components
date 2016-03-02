import test from 'ava';
import mapValues from 'lodash.mapvalues';

import react from '../react';
import virtualDom from '../virtual-dom';

const rendererTest = ({h, map, resolve}, name) => {
  test(`${name}: should travel each children`, t => {
    const Component = (props) => h(
      'h1',
      null,
      map(child => t.pass() || child, props.children)
    );

    const tree = h(Component, null, [
      'foo',
      h('span', null, [
        'bar'
      ])
    ]);

    t.plan(2);
    resolve(tree);
  });

  test(`${name}: should return new children`, t => {
    const Component = (props) => h(
      'h1',
      null,
      map((child, index) => index.toString(), props.children)
    );

    const tree = h(Component, null, [
      'foo',
      h('span', null, [
        'bar'
      ])
    ]);

    t.same(resolve(tree), h('h1', null, [
      '0',
      '1'
    ]));
  });
};

mapValues({
  'react': react,
  'virtual-dom': virtualDom
}, rendererTest);
