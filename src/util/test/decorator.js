import test from 'ava';
import mapValues from 'lodash.mapvalues';

import createDecorator from '../decorator';

import react from '../../renderer/react';
import virtualDom from '../../renderer/virtual-dom';

const rendererTest = (renderer, name) => {
  const {h, resolve, walker} = renderer;

  test(`${name}: should decorate element`, t => {
    const List = props => h('ul', props, props.children);
    const ItemList = props => h('li', props, props.children);

    const CompleteList = createDecorator(renderer)(List)(ItemList);

    const tree = h(CompleteList, null, ['foo']);

    t.same(walker(resolve, tree), h('ul', null, [
      h('li', null, [
        'foo'
      ])
    ]));
  });

  test(`${name}: should pass properties to composite components`, t => {
    const List = props => h('ul', props, props.children);
    const ItemList = props => h('li', props, props.children);

    const CompleteList = createDecorator(renderer)(List, {foo: 'foo'})(ItemList, {bar: 'bar'});

    const tree = h(CompleteList, null, ['foo']);

    t.same(walker(resolve, tree), h('ul', {foo: 'foo'}, [
      h('li', {bar: 'bar'}, [
        'foo'
      ])
    ]));
  });
};

mapValues({
  'react': react,
  'virtual-dom': virtualDom
}, rendererTest);
