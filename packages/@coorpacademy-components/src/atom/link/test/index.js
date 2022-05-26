import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {once} from 'lodash/fp';
import Link from '..';

browserEnv();
configure({adapter: new Adapter()});

test('should call listeners within props', t => {
  t.plan(3);

  const props = {
    onClick: once(() => t.pass()),
    onMouseEnter: once(() => t.pass()),
    onMouseLeave: once(() => t.pass())
  };

  const component = <Link {...props} />;
  const link = mount(component);

  link.instance().handleMouseEnter();
  link.instance().handleMouseLeave();
  link.instance().handleOnClick();
  link.unmount();
});
