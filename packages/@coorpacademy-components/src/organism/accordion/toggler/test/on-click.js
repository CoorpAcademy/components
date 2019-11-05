import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fixture from './fixtures/all-are-openable';
import onlyOneFixture from './fixtures/only-one';
import Accordion from '..';

browserEnv();
configure({adapter: new Adapter()});

test('should open/close accordion', t => {
  t.plan(11);

  const wrapper = mount(<Accordion {...fixture.props}>{fixture.children}</Accordion>);
  t.is(wrapper.find('.part__header').exists(), true);

  t.is(wrapper.find('.part__openHeader').exists(), true);
  wrapper
    .find('.part__header')
    .at(1)
    .simulate('click');
  t.is(wrapper.find(`.part__openHeader`).exists(), false);

  wrapper
    .find('.part__header')
    .at(0)
    .simulate('click');
  t.is(wrapper.find('.part__openHeader').exists(), true);
  wrapper
    .find('.part__header')
    .at(0)
    .simulate('click');
  t.is(wrapper.find('.part__openHeader').exists(), false);

  wrapper
    .find('.part__header')
    .at(2)
    .simulate('click');
  t.is(wrapper.find('.part__openHeader').exists(), true);
  wrapper
    .find('.part__header')
    .at(2)
    .simulate('click');
  t.is(wrapper.find('.part__openHeader').exists(), false);

  wrapper
    .find('.part__header')
    .at(1)
    .simulate('click');
  t.is(wrapper.find('.part__openHeader').exists(), true);
  wrapper
    .find('.part__header')
    .at(1)
    .simulate('click');
  t.is(wrapper.find('.part__openHeader').exists(), false);

  wrapper
    .find('.part__header')
    .at(0)
    .simulate('click');
  wrapper
    .find('.part__header')
    .at(1)
    .simulate('click');
  wrapper
    .find('.part__header')
    .at(2)
    .simulate('click');
  t.is(wrapper.find('.part__openHeader').exists(), true);
  t.is(wrapper.find('.part__openHeader').length, 3);
});

test('should open/close accordion - only one open', t => {
  t.plan(12);

  const wrapper = mount(<Accordion {...onlyOneFixture.props}>{onlyOneFixture.children}</Accordion>);
  t.is(wrapper.find('.part__header').exists(), true);

  t.is(wrapper.find('.part__openHeader').exists(), true);

  wrapper
    .find('.part__header')
    .at(1)
    .simulate('click');
  t.is(wrapper.find('.part__openHeader').length, 0);
  t.is(wrapper.find('.part__openHeader').exists(), false);

  wrapper
    .find('.part__header')
    .at(0)
    .simulate('click');
  t.is(wrapper.find('.part__openHeader').length, 1);
  t.is(wrapper.find('.part__openHeader').exists(), true);

  wrapper
    .find('.part__header')
    .at(1)
    .simulate('click');
  t.is(wrapper.find('.part__openHeader').length, 1);
  t.is(wrapper.find('.part__openHeader').exists(), true);

  wrapper
    .find('.part__header')
    .at(2)
    .simulate('click');
  t.is(wrapper.find('.part__openHeader').length, 1);
  t.is(wrapper.find('.part__openHeader').exists(), true);

  wrapper
    .find('.part__header')
    .at(2)
    .simulate('click');
  t.is(wrapper.find('.part_openHeader').length, 0);
  t.is(wrapper.find('.part_openHeader').exists(), false);
});
