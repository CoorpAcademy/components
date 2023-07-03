import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, render} from '@testing-library/react';
import VideoIframe from '..';

browserEnv();

test.afterEach(() => {
  cleanup();
});

test('should render properly a kontiki iframe', t => {
  t.plan(1);
  const props = {
    type: 'kontiki',
    src: 'foo'
  };

  const {container} = render(<VideoIframe {...props} />);
  const video = container.querySelector('iframe');
  t.truthy(video);
});

test('should render properly a youtube iframe', t => {
  t.plan(1);
  const props = {
    type: 'youtube',
    id: 'foo'
  };

  const {container} = render(<VideoIframe {...props} />);
  const video = container.querySelector('iframe');
  t.truthy(video);
});

test('should render properly a omniPlayer iframe', t => {
  t.plan(1);
  const props = {
    type: 'omniPlayer',
    id: 'foo'
  };

  const {container} = render(<VideoIframe {...props} />);
  const video = container.querySelector('iframe');
  t.truthy(video);
});

test('should render properly a h5p iframe', t => {
  t.plan(1);
  const props = {
    type: 'h5p',
    url: 'https://coorpacademy.h5p.com/content/1291025352652664897/embed'
  };

  const {container} = render(<VideoIframe {...props} />);
  const video = container.querySelector('iframe');
  t.truthy(video);
});

test('should render properly a uptale iframe', t => {
  t.plan(1);
  const props = {
    type: 'uptale',
    id: 'foo'
  };

  const {container} = render(<VideoIframe {...props} />);
  const video = container.querySelector('iframe');
  t.truthy(video);
});

test('should render properly a jwplayer iframe', t => {
  t.plan(1);
  const props = {
    type: 'jwplayer',
    id: 'foo'
  };

  const {container} = render(<VideoIframe {...props} />);
  const video = container.querySelector('iframe');
  t.truthy(video);
});
