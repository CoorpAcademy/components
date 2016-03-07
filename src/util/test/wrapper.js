import test from 'ava';
import mapRenderer from '../map-renderer';

import createWrapper from '../wrapper';

mapRenderer((renderer, name) => {
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
    t.same(resolve(tree), h('h1', {style: {color: 'blue'}}, ['foo']));
  });
});
