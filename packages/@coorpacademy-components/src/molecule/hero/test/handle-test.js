import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {set} from 'lodash/fp';
import {wrappingComponent} from '../../../test/helpers/render-component';
import defaultFixture from './fixtures/hero';
import Hero from '..';

browserEnv();
configure({adapter: new Adapter()});

test('should call onClick on hero', t => {
  t.plan(1);
  const props = set('onClick', e => t.pass(), defaultFixture.props);
  const wrapper = mount(<Hero {...props} />, {wrappingComponent});
  const hero = wrapper.find('[data-name="hero"]');
  t.is(hero.exists(), true);
  hero.simulate('click');
});
