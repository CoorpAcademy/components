import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import {set} from 'lodash/fp';
import {wrappingComponent} from '../../../test/helpers/render-component';
import Go1Banner from '..';
import defaultFixture from './fixtures/default';

browserEnv();
configure({adapter: new Adapter()});

test('should call onClick on go1Banner', t => {
  t.plan(2);
  const props = set('onClick', e => t.pass(), defaultFixture.props);
  const wrapper = mount(<Go1Banner {...props} />, {wrappingComponent});
  console.log(wrapper.html());
  const go1BannerCta = wrapper.find('[data-name="go1-banner"] a');
  t.is(go1BannerCta.exists(), true);
  go1BannerCta.simulate('click');
});
