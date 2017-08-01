import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {mount} from 'enzyme';
import Handle from '../handle';

test('should instanciate Handle', t => {
  const handler = mount(<Handle />);
  handler.unmount();
  t.pass();
});

test('should instanciate Handle without hammmer', t => {
  const handler = mount(<Handle />);
  const instance = handler.instance();
  instance.hammer = null;
  handler.unmount();
  t.pass();
});
