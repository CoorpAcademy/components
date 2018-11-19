import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withLivesFixture from './fixtures/learner';
import withoutLivesFixture from './fixtures/no-lives';
import Header from '..';

browserEnv();
configure({adapter: new Adapter()});

const livesVisible = (t, Component, fixture) => {
  const {lives} = fixture.props;

  t.true(fixture.props !== undefined, `${lives ? 'should' : 'should not'} display lives icon`);

  const wrapper = mount(<Component {...fixture.props} />);
  const element = wrapper.find('[data-name="life"]');

  t.is(element.length, lives ? 1 : 0);
};

test('with lives', t => livesVisible(t, Header, withLivesFixture));
test('without lives', t => livesVisible(t, Header, withoutLivesFixture));
