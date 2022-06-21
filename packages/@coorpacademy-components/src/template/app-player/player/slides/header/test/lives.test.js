import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Header from '..';
import withLivesFixture from './fixtures/learner';
import adaptiveFixture from './fixtures/adaptive';
import infiniteLivesFixture from './fixtures/infinite-lives';

browserEnv();
configure({adapter: new Adapter()});

const livesVisible = (t, Component, fixture) => {
  const {lives} = fixture.props;

  t.true(fixture.props !== undefined, `${lives ? 'should' : 'should not'} display lives icon`);

  const wrapper = mount(<Component {...fixture.props} />);
  const element = wrapper.find('[data-name="life"]');

  t.is(element.length, lives && lives.count !== null ? 1 : 0);
};

test('with lives', t => {
  livesVisible(t, Header, withLivesFixture);
});
test('with adaptive content', t => {
  livesVisible(t, Header, adaptiveFixture);
});
test('with infinite lives', t => {
  livesVisible(t, Header, infiniteLivesFixture);
});
