import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import defaultFixture from './fixtures/checked';
import SelectMultiple from '..';

browserEnv();
configure({adapter: new Adapter()});

test('should shallow render with default props', t => {
  const props = {...defaultFixture.props};
  const wrapper = shallow(<SelectMultiple {...props} />);

  t.snapshot(wrapper);
});

test('should shallow render when select is opened', t => {
  const props = {...defaultFixture.props};
  const wrapper = shallow(<SelectMultiple {...props} />);

  wrapper.setState({opened: true});

  t.snapshot(wrapper);
});

test('should open and close list', t => {
  t.plan(8);

  const clickEvent = {preventDefault: () => t.pass(), stopPropagation: () => t.pass()};
  const props = defaultFixture.props;
  const wrapper = mount(<SelectMultiple {...props} />);
  const selectWrapper = wrapper.find('.select-multiple__select');

  t.is(wrapper.state().opened, false);

  t.is(selectWrapper.exists(), true);

  selectWrapper.simulate('click', clickEvent);

  t.is(wrapper.state().opened, true);

  selectWrapper.simulate('click', clickEvent);

  t.is(wrapper.state().opened, false);
});

test('should select choice', t => {
  t.plan(8);

  const clickEvent = {preventDefault: () => t.pass(), stopPropagation: () => t.pass()};
  const props = {
    ...defaultFixture.props,
    onChange: evt => {
      t.is(evt.value, 'digital');

      t.pass();
    }
  };
  const wrapper = mount(<SelectMultiple {...props} />);
  const selectWrapper = wrapper.find('.select-multiple__select');

  wrapper.update();

  t.is(wrapper.state().opened, false);

  t.is(selectWrapper.exists(), true);

  selectWrapper.simulate('click', clickEvent);

  wrapper.update();

  t.is(wrapper.state().opened, true);

  const checkbox = wrapper.find('[checked=false]').first();

  checkbox.simulate('change');

  t.is(wrapper.state().opened, true);

  wrapper.update();
});

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

test('should click outside', t => {
  t.plan(10);

  const clickEvent = {preventDefault: () => t.pass(), stopPropagation: () => t.pass()};
  const props = defaultFixture.props;
  const wrapper = mount(<SelectMultiple {...props} />);
  const selectWrapper = wrapper.find('.select-multiple__select');
  const instance = wrapper.instance();

  wrapper.update();

  t.is(wrapper.state().opened, false);

  t.is(selectWrapper.exists(), true);

  selectWrapper.simulate('click', clickEvent);

  wrapper.update();

  t.is(wrapper.state().opened, true);

  instance.closeHandle({target: null});

  t.is(wrapper.state().opened, false);

  selectWrapper.simulate('click', clickEvent);

  wrapper.update();

  t.is(wrapper.state().opened, true);

  instance.closeHandle({target: selectWrapper.getDOMNode()});

  t.is(wrapper.state().opened, true);

  wrapper.update();

  wrapper.unmount();
});

test('should return choices (getter)', t => {
  const props = {...defaultFixture.props};
  const wrapper = mount(<SelectMultiple {...props} />);

  t.is(wrapper.instance().choices.length, 4, 'not returning expected choices');
});

test('should set current choice (setter)', t => {
  const props = {...defaultFixture.props};
  const wrapper = mount(<SelectMultiple {...props} />);
  const instance = wrapper.instance();

  t.is(instance.choices[0].selected, false, 'not setting correctly expected value for choice[0]');

  instance.choices = {...props.options[0], i: 0};

  t.is(instance.choices[0].selected, true, 'not updating correctly expected value for choice[0]');
});
