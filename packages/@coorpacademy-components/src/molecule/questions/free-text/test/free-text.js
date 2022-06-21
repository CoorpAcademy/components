import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import {identity} from 'lodash/fp';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import FreeText from '..';
import defaultFixture from './fixtures/default';
import withValueFixture from './fixtures/with-value';
import withValueOnChangeFixture from './fixtures/with-value-on-change';

browserEnv();
configure({adapter: new Adapter()});
const translate = identity;

test('onInput should be reachable and replace onChange, onChange should not trigger value changes, should use aria-label', t => {
  t.plan(7);
  let onInputWasTriggered = false;
  const props = {
    ...withValueOnChangeFixture.props,
    onChange: value => {
      onInputWasTriggered = true;
      t.is(value, 'new value');
    }
  };
  const wrapper = shallow(<FreeText {...props} />, {
    context: {translate}
  });
  let freeText = wrapper.find('[data-name="free-text-input"]');
  t.true(freeText.at(0).exists());
  t.is(freeText.at(0).props()['aria-label'], 'aria input');
  t.is(freeText.at(0).props().value, 'plop!');
  // should not trigger a value change with onChange
  freeText.at(0).simulate('change', {target: {value: 'new value'}});
  wrapper.update();
  // should not update the trigger flag with onChange
  t.false(onInputWasTriggered);
  freeText.at(0).simulate('input', {target: {value: 'new value'}});
  wrapper.update();
  freeText = wrapper.find('[data-name="free-text-input"]');
  t.true(onInputWasTriggered);
  t.pass();
});

test('should set: boxShadow (hover & not hovered variants) && color for the input if a value is provided', t => {
  const wrapper = mount(<FreeText {...withValueFixture.props} />);
  let freeTextWrapper = wrapper.find('[data-name="freeText"]');
  t.true(freeTextWrapper.at(0).exists());
  t.deepEqual(freeTextWrapper.at(0).props().style, {
    boxShadow: '0 4px 16px rgba(0, 176, 255, 0.12)'
  });

  let freeText = wrapper.find('[data-name="free-text-input"]');
  t.true(freeText.at(0).exists());
  t.is(freeText.at(0).props().value, 'plop!');
  t.deepEqual(freeTextWrapper.at(0).props().style, {
    boxShadow: '0 4px 16px rgba(0, 176, 255, 0.12)'
  });
  freeTextWrapper.simulate('mouseover');
  wrapper.update();

  freeText = wrapper.find('[data-name="free-text-input"]');
  freeTextWrapper = wrapper.find('[data-name="freeText"]');
  // hovered
  t.deepEqual(freeText.at(0).props().style, {
    boxShadow: '0 4px 16px rgba(0, 176, 255, 0.2)',
    color: '#00B0FF'
  });
  t.deepEqual(freeTextWrapper.at(0).props().style, {
    boxShadow: 'none'
  });

  freeTextWrapper.simulate('mouseleave');
  wrapper.update();
  freeText = wrapper.find('[data-name="free-text-input"]');
  t.deepEqual(freeText.at(0).props().style, {
    boxShadow: '0 4px 16px rgba(0, 176, 255, 0.12)',
    color: '#00B0FF'
  });

  t.pass();
});

test('should use value as default aria-label if no aria-label is provided', t => {
  const wrapper = mount(<FreeText {...withValueFixture.props} />);
  const freeText = wrapper.find('[data-name="free-text-input"]');
  t.true(freeText.at(0).exists());
  t.is(freeText.at(0).props()['aria-label'], 'plop!');
  t.pass();
});

test('should use placeholder as default aria-label if no aria-label is provided and no value is present', t => {
  const wrapper = mount(<FreeText {...defaultFixture.props} />);
  const freeText = wrapper.find('[data-name="free-text-input"]');
  t.true(freeText.at(0).exists());
  t.is(freeText.at(0).props()['aria-label'], 'Type your answer here');
  t.pass();
});
