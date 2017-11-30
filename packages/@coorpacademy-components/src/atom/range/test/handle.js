import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Handle from '../handle';

browserEnv();
configure({adapter: new Adapter()});

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
