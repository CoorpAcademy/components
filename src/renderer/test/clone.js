import test from 'ava';
import mapValues from 'lodash.mapvalues';

import react from '../react';
import virtualDom from '../virtual-dom';

const rendererTest = ({h, clone}, name) => {
  test(`${name}: should clone element`, t => {
    const node = h('foo', {bar: 'baz'}, ['quz']);
    const cloneNode = clone(node);

    t.not(cloneNode, node);
    t.same(cloneNode, h('foo', {bar: 'baz'}, ['quz']));
  });

  test(`${name}: should clone element and replace property`, t => {
    const node = h('foo', {bar: 'baz'}, ['quz']);
    const cloneNode = clone(node, {bar: 'quz'});

    t.same(cloneNode, h('foo', {bar: 'quz'}, ['quz']));
  });

  test(`${name}: should clone element and add property`, t => {
    const node = h('foo', {bar: 'baz'}, ['quz']);
    const cloneNode = clone(node, {baz: 'baz'});

    t.same(cloneNode, h('foo', {
      bar: 'baz',
      baz: 'baz'
    }, ['quz']));
  });

  test(`${name}: should clone element and add deep property`, t => {
    const node = h('foo', {bar: {baz: 'baz'}}, ['quz']);
    const cloneNode = clone(node, {bar: {quz: 'quz'}});

    t.same(cloneNode, h('foo', {
      bar: {
        baz: 'baz',
        quz: 'quz'
      }
    }, ['quz']));
  });

  test(`${name}: should clone element and replace children`, t => {
    const node = h('foo', {bar: 'baz'}, ['quz']);
    const cloneNode = clone(node, null, ['quuz']);

    t.same(cloneNode, h('foo', {bar: 'baz'}, ['quuz']));
  });
};

mapValues({
  'react': react,
  'virtual-dom': virtualDom
}, rendererTest);
