import test from 'ava';
import * as treant from '../../../../@treantjs/core';

import createWrapper from '../wrapper';

const {h, resolve} = treant;

test('should extend children properties', t => {
  const Title = (props, children) => <h1 style={{color: props.color}}>{children}</h1>;
  const Color = createWrapper(() => props => ({color: props.color}))(treant);

  const tree = (
    <Color color="blue">
      <Title>foo</Title>
    </Color>
  );

  t.deepEqual(resolve(tree), resolve(<Title color="blue">foo</Title>));
  t.deepEqual(resolve(tree), <h1 style={{color: 'blue'}}>foo</h1>);
});

test('should override or use default children properties', t => {
  const Title = props => <h1 foo={props.foo}><strong bar={props.bar}>{props.baz}</strong></h1>;
  const Wrapper = createWrapper(() => props => props)(treant);

  const titleDefault = <Title foo="foo" bar="bar" baz="baz"/>;
  const wrapper = <Wrapper foo="__FOO">{titleDefault}</Wrapper>;
  const expectedTitle = <h1 foo="__FOO"><strong bar="bar">baz</strong></h1>;

  t.deepEqual(resolve(wrapper), expectedTitle);
});

test('should use children attributes', t => {
  t.plan(1);
  const title = <h1/>;

  const Wrapper = createWrapper(() => (props, child) => {
    t.deepEqual(child, title);
    return {};
  })(treant);

  const component = <Wrapper>{title}</Wrapper>;
  resolve(component);
});
