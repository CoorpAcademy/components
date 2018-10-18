import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import set from 'lodash/fp/set';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SelectMultiple from '..';
import defaultFixture from './fixtures/checked';

browserEnv();
configure({adapter: new Adapter()});

test('should open and close list', t => {
  t.plan(9);
  const clickEvent = {preventDefault: () => t.pass(), stopPropagation: () => t.pass()};
  const props = defaultFixture.props;
  const wrapper = mount(<SelectMultiple {...props} />);
  const selectWrapper = wrapper.find('.select-multiple__select');
  t.is(
    selectWrapper.text(),
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
  );
  t.is(wrapper.state().opened, false);
  t.is(selectWrapper.exists(), true);
  selectWrapper.simulate('click', clickEvent);
  t.is(wrapper.state().opened, true);
  selectWrapper.simulate('click', clickEvent);
  t.is(wrapper.state().opened, false);
});

test('should select choice', t => {
  t.plan(9);
  const clickEvent = {preventDefault: () => t.pass(), stopPropagation: () => t.pass()};
  const props = set(
    'onChange',
    evt => {
      t.is(evt.value, 'digital');
      t.pass();
    },
    defaultFixture.props
  );
  const wrapper = mount(<SelectMultiple {...props} />);
  wrapper.update();
  const selectWrapper = wrapper.find('.select-multiple__select');
  t.is(
    selectWrapper.text(),
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
  );
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
