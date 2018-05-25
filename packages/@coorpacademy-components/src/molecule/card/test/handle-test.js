import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import set from 'lodash/fp/set';
import unset from 'lodash/fp/unset';
import Card from '..';
import defaultFixture from './fixtures/default';

browserEnv();
configure({adapter: new Adapter()});

test('should call the onFavoriteClick function with click on favorite icon', t => {
  t.plan(4);

  const clickEvent = {preventDefault: () => t.pass(), stopPropagation: () => t.pass()};
  const props = set('onFavoriteClick', e => t.is(e, clickEvent), defaultFixture.props);
  const wrapper = shallow(<Card {...props} />);
  const favoriteSection = wrapper.find('[data-name="favorite"]');
  t.is(favoriteSection.exists(), true);
  favoriteSection.simulate('click', clickEvent);
});
test('should no render favorite section if favorite is not defined on  the props', t => {
  const props = unset('favorite', defaultFixture.props);
  const wrapper = shallow(<Card {...props} />);

  const favoriteSection = wrapper.find('[data-name="favorite"]');
  t.is(favoriteSection.exists(), false);
});
