import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MoocFooter from '..';
import nopropsFixture from './fixtures/no-props';
import defaultFixture from './fixtures/default';

browserEnv();
configure({adapter: new Adapter()});

test('if section pages are not provided, no element should be rendered on place', t => {
  const wrapper = mount(<MoocFooter {...nopropsFixture.props} />);
  const pages = wrapper.find('[data-name="pages-list"]').children().length;
  t.is(pages, 0);
  t.pass();
});

test('should find the coorplogo even if no props are provided', t => {
  const wrapper = mount(<MoocFooter {...nopropsFixture.props} />);
  const coorpLogo = wrapper.find('[data-name="coorp-social-networks-logo"]');
  t.is(coorpLogo.exists(), true);
  t.pass();
});
