import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {once} from 'lodash/fp';
import {render, fireEvent} from '@testing-library/react';
import Audio from '..';
import defaultFixture from './fixtures/default';

browserEnv();

test('should call listeners within props', t => {
  t.plan(2);

  window.HTMLMediaElement.prototype.load = () => {
    t.pass();
  };
  const onPlay = once(() => t.pass());

  const component = <Audio {...defaultFixture.props} onPlay={onPlay} />;
  const {getByTestId, rerender, unmount} = render(component);

  const audio = getByTestId('audio');

  fireEvent.play(audio);

  rerender(
    <Audio
      {...defaultFixture.props}
      onPlay={onPlay}
      mediaUrl="//static.coorpacademy.com/content/CoorpAcademy/content-bnpp/cockpit-letsgetdigital-migration/raw/3-methodes-efficaces-pour-gerer-les-conflits-1619536987180.mp3"
    />
  );

  unmount();
});

test('should be able to play without onPlay handler', t => {
  t.plan(1);

  window.HTMLMediaElement.prototype.load = () => {
    t.fail();
  };

  const component = <Audio {...defaultFixture.props} onPlay={null} />;
  const {getByTestId} = render(component);
  const audio = getByTestId('audio');
  fireEvent.play(audio);
  t.pass();
});
