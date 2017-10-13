import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {mount} from 'enzyme';
import once from 'lodash/fp/once';
import Link from '..';

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
