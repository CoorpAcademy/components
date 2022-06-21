import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import MoocFooter from '..';

browserEnv();
configure({adapter: new Adapter()});

test('if section pages are not provided, no element should be rendered on place', t => {
  const wrapper = mount(<MoocFooter />);
  const pages = wrapper.find('[data-name="pages-list"]').children().length;
  t.is(pages, 0);
  t.pass();
});

test('should find the coorplogo even if no props are provided', t => {
  const wrapper = mount(<MoocFooter />);
  const coorpLogo = wrapper.find('[data-name="coorp-social-networks-logo"]');
  t.is(coorpLogo.exists(), true);
  t.pass();
});
