import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {take} from 'lodash/fp';
import {mount, configure} from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Accordion from '..';
import onlyOneFixture from './fixtures/only-one';

browserEnv();
configure({adapter: new Adapter()});

const SINGLE_TAB_PROPS = {
  ...onlyOneFixture.props,
  tabProps: take(1, onlyOneFixture.props.tabProps),
  children: take(1, onlyOneFixture.children)
};

test(`shouldn't props in state`, t => {
  const multiPropsWrapper = mount(<Accordion />);
  multiPropsWrapper.setProps(SINGLE_TAB_PROPS);

  const singlePropsWrapper = mount(<Accordion {...SINGLE_TAB_PROPS} />);

  t.is(multiPropsWrapper.html(), singlePropsWrapper.html());
});

test(`should keep isOpen in state`, t => {
  const wrapper = mount(<Accordion {...SINGLE_TAB_PROPS} />);

  t.true(wrapper.find('.part__header').exists());

  t.false(wrapper.find('.part__openHeader').exists());

  wrapper.find('.part__header').at(0).simulate('click');

  t.true(wrapper.find('.part__openHeader').exists());

  wrapper.setProps({
    ...onlyOneFixture.props,
    children: onlyOneFixture.children
  });

  t.true(wrapper.find('.part__openHeader').exists());
});
