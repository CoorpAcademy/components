import test, {ExecutionContext} from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render} from '@testing-library/react';
import Header from '..';
import withLivesFixture from './fixtures/default';
import adaptiveFixture from './fixtures/adaptive';
import infiniteLivesFixture from './fixtures/infinite-lives';

browserEnv();

const livesVisible = (
  t: ExecutionContext,
  Component: React.ComponentType<any>,
  fixture: {props: any}
) => {
  const {lives} = fixture.props.header;
  const shouldDisplayLives = lives !== null && lives.count !== null;

  t.not(
    fixture.props,
    undefined,
    `${shouldDisplayLives ? 'should' : 'should not'} display lives icon`
  );

  const {container} = render(<Component {...fixture.props} />);
  const element = container.querySelector('[data-name="life"]');
  t.is(element !== null, shouldDisplayLives);
};

test('with infinite lives', t => {
  t.plan(2);
  livesVisible(t, Header, infiniteLivesFixture);
});

test('with lives', t => {
  t.plan(2);
  livesVisible(t, Header, withLivesFixture);
});

test('with adaptive content', t => {
  t.plan(2);
  livesVisible(t, Header, adaptiveFixture);
});
