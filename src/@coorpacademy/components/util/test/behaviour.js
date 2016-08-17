import test from 'ava';
import * as treant from '../../../../@treantjs/core';

import createBehaviour from '../behaviour';

const {h, resolve} = treant;

test('should extend children properties', t => {
  const Title = (props, children) => <h1>{children}</h1>;
  const Color = createBehaviour(() => props => ({style: {color: props.color}}))(treant);

  const tree = (
    <Color color="blue">
      <Title>foo</Title>
    </Color>
  );

  const expected = <h1 style={{color: 'blue'}}>foo</h1>;
  t.deepEqual(resolve(tree), expected);
});

test('should override children properties', t => {
  const Title = (props, children) => <h1 style={{color: props.color}}>{children}</h1>;
  const Color = createBehaviour(() => props => ({style: {color: props.color}}))(treant);

  const pinkTitle = <Title color="pink">foo</Title>;

  const blueTitle = (
    <Color color="blue">
      {pinkTitle}
    </Color>
  );

  const pinkExpected = <h1 style={{color: 'pink'}}>foo</h1>;
  t.deepEqual(resolve(pinkTitle), pinkExpected);
  const blueExpected = <h1 style={{color: 'blue'}}>foo</h1>;
  t.deepEqual(resolve(blueTitle), blueExpected);
});
