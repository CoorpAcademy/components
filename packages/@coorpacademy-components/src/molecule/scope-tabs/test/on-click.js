import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ScopeTabs from '..';
import fixture from './fixtures/without-status';

browserEnv();
configure({adapter: new Adapter()});

test('should call onClick with the index value', t => {
  t.plan(6);
  let selectedIndex;
  const onClick = index => {
    t.is(index, selectedIndex);
  };
  const wrapper = mount(<ScopeTabs {...fixture.props} onClick={onClick} />);

  [0, 1, 2].forEach(index => {
    selectedIndex = index;
    const selector = `li[data-name="scopeTab"][data-index=${selectedIndex}]`;
    t.true(wrapper.find(selector).exists());
    wrapper.find(selector).simulate('click');
  });
});
