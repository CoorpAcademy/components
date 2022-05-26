import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Accordion from '..';
import fixture from './fixtures/default';

browserEnv();
configure({adapter: new Adapter()});

test('should call the onClick function', t => {
  t.plan(7);
  let selectetKey = 0;
  const onClick = (key, e) => {
    t.is(e.value, 'foo');
    t.is(key, selectetKey);
  };
  const wrapper = mount(
    <Accordion {...fixture.props} onClick={onClick}>
      {fixture.children}
    </Accordion>
  );
  t.is(wrapper.find(`.part__header`).exists(), true);
  selectetKey = 0;
  wrapper.find('.part__header').at(selectetKey).simulate('click', {
    value: 'foo'
  });
  selectetKey = 1;
  wrapper.find('.part__header').at(selectetKey).simulate('click', {
    value: 'foo'
  });
  selectetKey = 2;
  wrapper.find('.part__header').at(selectetKey).simulate('click', {
    value: 'foo'
  });
});
