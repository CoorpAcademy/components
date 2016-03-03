import test from 'ava';
import mapValues from 'lodash.mapvalues';

import react from '../react';
import virtualDom from '../virtual-dom';

const rendererTest = ({h}, name) => {
  test(`${name}: should create element`, t => {
    const node1 = h('div');
    const node2 = h('div');

    t.not(node1, node2);
    t.same(node1, node2);
  });

  test(`${name}: should create element with properties`, t => {
    const node1 = h('div', {style: {color: 'blue'}, name: 'test'});
    const node2 = h('div', {style: {color: 'blue'}, name: 'test'});

    t.same(node1, node2);
  });

  test(`${name}: should create element with null properties`, t => {
    const node1 = h('div', {});
    const node2 = h('div', null);

    t.same(node1, node2);
  });

  test(`${name}: should create element with empty children`, t => {
    const node1 = h('div', null, []);
    const node2 = h('div', {}, []);

    t.same(node1, node2);
  });

  test(`${name}: should create element with null children`, t => {
    const node1 = h('div', null, null);
    const node2 = h('div', {}, []);

    t.same(node1, node2);
  });

  test(`${name}: should create element with children`, t => {
    const children = [
      'title',
      h('span', null, 'sub-title')
    ];

    const node1 = h('div', null, children);
    const node2 = h('div', null, children);

    t.same(node1, node2);
  });
};

mapValues({
  'react': react,
  'virtual-dom': virtualDom
}, rendererTest);
