import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {identity} from 'lodash/fp';
import MoocFooter from '..';
import nopropsFixture from './fixtures/no-props';

browserEnv();
configure({adapter: new Adapter()});

test('if section pages are not provided, no element should be rendered on place', t => {
  const translate = identity;

  const wrapper = mount(<MoocFooter {...nopropsFixture.props} />, {
    context: {translate}
  });
  const coorpLogo = wrapper.find('[data-name="pages-list"]');
  t.is(coorpLogo.exists(), true);
  t.pass();
});

test('should find the coorplogo even if no props are provided', t => {
  const translate = identity;

  const wrapper = mount(<MoocFooter {...nopropsFixture.props} />, {
    context: {translate}
  });
  const coorpLogo = wrapper.find('[data-name="coorp-social-networks-logo"]');
  t.is(coorpLogo.exists(), true);
  t.pass();
});
