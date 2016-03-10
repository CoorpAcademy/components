import test from 'ava';
import forEachRenderer from '../for-each-renderer';

import createBehaviour from '../behaviour';

forEachRenderer((renderer, name) => {
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

  test(`${name}: should override children properties`, t => {
    const Title = props => h('h1', {style: {color: props.color}}, props.children);
    const Color = createBehaviour(() => props => ({style: {color: props.color}}))(renderer);

    const pinkTitle = h(Title, {color: 'pink'}, ['foo']);

    const blueTitle = (
      h(Color, {color: 'blue'}, [
        pinkTitle
      ])
    );

    t.same(resolve(pinkTitle), h('h1', {style: {color: 'pink'}}, ['foo']));
    t.same(resolve(blueTitle), h('h1', {style: {color: 'blue'}}, ['foo']));
  });
});
