import test from 'ava';
import mapValues from 'lodash.mapvalues';

import createBehaviour from '../behaviour';

import react from '../../renderer/react';
import virtualDom from '../../renderer/virtual-dom';

const rendererTest = (renderer, name) => {
  const {h, resolve} = renderer;

  test(`${name}: should extend children properties`, t => {
    const Title = props => h('h1', null, props.children);
    const Color = createBehaviour(() => props => ({style: {color: props.color}}))(renderer);

    const tree = (
      h(Color, {color: 'blue'}, [
        h(Title, null, ['foo'])
      ])
    );
    t.same(resolve(tree), h('h1', {style: {color: 'blue'}}, ['foo']));
  });
};

mapValues({
  'react': react,
  'virtual-dom': virtualDom
}, rendererTest);
