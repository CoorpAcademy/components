import test from 'ava';
import browserEnv from 'browser-env';
import flatten from 'lodash/fp/flatten';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import SelectMultiple, {useChoices} from '..';
import defaultFixture from './fixtures/checked';

browserEnv();
configure({adapter: new Adapter()});

const setup = options => {
  const returnVal = [];
  const TestComponent = () => {
    returnVal.push(useChoices(options));
    return null;
  };

  mount(<TestComponent />);
  return flatten(returnVal);
};

test('should select array of choices when props.multiple is set', t => {
  t.plan(2);
  const props = {
    ...defaultFixture.props,
    multiple: true,
    onChange: choices => {
      t.true(Array.isArray(choices), 'dffdff');
      t.pass();
    }
  };

  const wrapper = mount(<SelectMultiple {...props} />);

  wrapper.update();

  const checkbox = wrapper.find('[checked=false]').first();

  checkbox.simulate('change', {props});
});

test('should return choices (getter)', t => {
  const props = {...defaultFixture.props};
  const [getChoices] = setup(props.options);

  t.is(getChoices().length, 4, 'not returning expected choices');
});

test('should set current choice (setter)', t => {
  const props = {...defaultFixture.props};
  const [getChoices, setChoices] = setup(props.options);
  const choices = getChoices();

  t.is(choices[0].selected, false, 'not setting correctly expected value for choice[0]');

  setChoices({...props.options[0], i: 0});

  t.is(getChoices()[0].selected, true, 'not updating correctly expected value for choice[0]');
});
