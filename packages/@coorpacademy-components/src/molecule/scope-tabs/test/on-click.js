import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fixture from './fixtures/without-status';
import ScopeTabs from '..';

browserEnv();
configure({adapter: new Adapter()});

test('should call onClick with the index value', t => {
  t.plan(6);
  let selectedIndex;
  const onClick = index => {
    t.is(index, selectedIndex);
  };
  const wrapper = shallow(<ScopeTabs {...fixture.props} onClick={onClick} />);

  [0, 1, 2].forEach(index => {
    selectedIndex = index;
    const selector = `li[data-name="scopeTab"][data-index=${selectedIndex}]`;
    t.is(wrapper.find(selector).exists(), true);
    wrapper.find(selector).simulate('click');
  });
});
