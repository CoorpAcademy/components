import test from 'ava';
import mapValues from 'lodash.mapvalues';

import createWrapper from '../wrapper';

import react from '../../renderer/react';
import virtualDom from '../../renderer/virtual-dom';

const rendererTest = (renderer, name) => {
  const {h, resolve} = renderer;

  test(`${name}: should extend children properties`, t => {
    const Title = props => h('h1', {style: {color: props.color}}, props.children);
    const Color = createWrapper(() => props => ({color: props.color}))(renderer);

    const tree = (
      h(Color, {color: 'blue'}, [
        h(Title, null, ['foo'])
      ])
    );
    t.same(resolve(tree), resolve(h(Title, {color: 'blue'}, ['foo'])));
    t.same(resolve(tree), resolve(h('h1', {style: {color: 'blue'}}, ['foo'])));
  });
};

mapValues({
  'react': react,
  'virtual-dom': virtualDom
}, rendererTest);
