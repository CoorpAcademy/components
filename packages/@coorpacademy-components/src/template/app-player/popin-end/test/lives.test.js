import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withLivesFixture from './fixtures/default';
import adaptiveFixture from './fixtures/adaptive';
import infiniteLivesFixture from './fixtures/infinite-lives';
import Header from '..';

browserEnv();
configure({adapter: new Adapter()});

const livesVisible = (t, Component, fixture) => {
  const {lives} = fixture.props.header;

  t.true(fixture.props !== undefined, `${lives ? 'should' : 'should not'} display lives icon`);

  const wrapper = mount(<Component {...fixture.props} />);
  const element = wrapper.find('[data-name="life"]');

  t.is(element.length, lives && lives.count !== null ? 1 : 0);
};

test('with lives', t => livesVisible(t, Header, withLivesFixture));
test('with adaptive content', t => livesVisible(t, Header, adaptiveFixture));
test('with infinite lives', t => livesVisible(t, Header, infiniteLivesFixture));
