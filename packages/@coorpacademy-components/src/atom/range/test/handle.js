import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Handle from '../handle';

browserEnv();
configure({adapter: new Adapter()});

test('should instanciate Handle, mount and unmount it', t => {
  const handler = mount(<Handle />);
  handler.unmount();
  t.pass();
});
