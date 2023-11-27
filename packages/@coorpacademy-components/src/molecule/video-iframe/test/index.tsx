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
  t.plan(8);
  const props = {
    type: 'kontiki',
    src: 'foo'
  };

  const {container} = render(<VideoIframe {...props} />);
  const video = container.querySelector('iframe');
  t.truthy(video);
  t.is(video?.getAttribute('allow'), null);
  t.is(video?.getAttribute('allowFullScreen'), '');
  t.is(video?.getAttribute('allowvr'), null);
  t.is(video?.getAttribute('scrolling'), null);
  t.is(video?.getAttribute('frameBorder'), '0');
  t.is(video?.getAttribute('width'), '100%');
  t.is(video?.getAttribute('height'), '400px');
});

test('should render properly a youtube iframe', t => {
  t.plan(9);
  const props = {
    type: 'youtube',
    id: 'foo'
  };

  const {container} = render(<VideoIframe {...props} />);
  const video = container.querySelector('iframe');
  t.truthy(video);
  t.is(video?.getAttribute('allow'), null);
  t.is(video?.getAttribute('allowFullScreen'), '');
  t.is(video?.getAttribute('allowvr'), null);
  t.is(video?.getAttribute('scrolling'), null);
  t.is(video?.getAttribute('frameBorder'), '0');
  t.is(video?.getAttribute('src'), 'https://www.youtube.com/embed/foo?');
  t.is(video?.getAttribute('width'), '100%');
  t.is(video?.getAttribute('height'), '400px');
});

test('should render properly a omniPlayer iframe', t => {
  t.plan(9);
  const props = {
    type: 'omniPlayer',
    id: 'foo'
  };

  const {container} = render(<VideoIframe {...props} />);
  const video = container.querySelector('iframe');
  t.truthy(video);
  t.is(video?.getAttribute('allow'), null);
  t.is(video?.getAttribute('allowFullScreen'), '');
  t.is(video?.getAttribute('allowvr'), null);
  t.is(video?.getAttribute('scrolling'), null);
  t.is(video?.getAttribute('frameBorder'), '0');
  t.is(video?.getAttribute('src'), 'https://mms.myomni.live/foo');
  t.is(video?.getAttribute('width'), '100%');
  t.is(video?.getAttribute('height'), '400px');
});

test('should render properly a faurecia-vr iframe', t => {
  t.plan(9);
  const props = {
    type: 'faurecia-vr',
    url: 'https://learning-lab-forvr-preprod.app.corp/Experiences/WebGL/1?player=true'
  };

  const {container} = render(<VideoIframe {...props} />);
  const video = container.querySelector('iframe');
  t.truthy(video);
  t.is(video?.getAttribute('allow'), 'xr-spatial-tracking;fullscreen');
  t.is(video?.getAttribute('allowFullScreen'), '');
  t.is(video?.getAttribute('allowvr'), 'yes');
  t.is(video?.getAttribute('scrolling'), 'no');
  t.is(video?.getAttribute('frameBorder'), '0');
  t.is(
    video?.getAttribute('src'),
    'https://learning-lab-forvr-preprod.app.corp/Experiences/WebGL/1?player=true'
  );
  t.is(video?.getAttribute('width'), '100%');
  t.is(video?.getAttribute('height'), '400px');
});

test('should render properly a h5p iframe', t => {
  t.plan(9);
  const props = {
    type: 'h5p',
    url: 'https://coorpacademy.h5p.com/content/1291025352652664897/embed'
  };

  const {container} = render(<VideoIframe {...props} />);
  const video = container.querySelector('iframe');
  t.truthy(video);
  t.is(video?.getAttribute('allow'), null);
  t.is(video?.getAttribute('allowFullScreen'), '');
  t.is(video?.getAttribute('allowvr'), null);
  t.is(video?.getAttribute('scrolling'), null);
  t.is(video?.getAttribute('frameBorder'), '0');
  t.is(
    video?.getAttribute('src'),
    'https://coorpacademy.h5p.com/content/1291025352652664897/embed'
  );
  t.is(video?.getAttribute('width'), '100%');
  t.is(video?.getAttribute('height'), '400px');
});

test('should render properly a uptale iframe', t => {
  t.plan(9);
  const props = {
    type: 'uptale',
    id: 'foo'
  };

  const {container} = render(<VideoIframe {...props} />);
  const video = container.querySelector('iframe');
  t.truthy(video);
  t.is(video?.getAttribute('allow'), null);
  t.is(video?.getAttribute('allowFullScreen'), '');
  t.is(video?.getAttribute('allowvr'), 'yes');
  t.is(video?.getAttribute('scrolling'), 'no');
  t.is(video?.getAttribute('frameBorder'), '0');
  t.is(video?.getAttribute('src'), 'https://my.uptale.io/Experience/Launch?id=foo');
  t.is(video?.getAttribute('width'), '100%');
  t.is(video?.getAttribute('height'), '400px');
});

test('should render properly a jwplayer iframe', t => {
  t.plan(9);
  const props = {
    type: 'jwplayer',
    id: 'foo'
  };

  const {container} = render(<VideoIframe {...props} />);
  const video = container.querySelector('iframe');
  t.truthy(video);
  t.is(video?.getAttribute('allow'), null);
  t.is(video?.getAttribute('allowFullScreen'), '');
  t.is(video?.getAttribute('allowvr'), null);
  t.is(video?.getAttribute('scrolling'), null);
  t.is(video?.getAttribute('frameBorder'), '0');
  t.is(video?.getAttribute('src'), 'https://content.jwplatform.com/players/foo-7IMa4DCK.html');
  t.is(video?.getAttribute('width'), '100%');
  t.is(video?.getAttribute('height'), '400px');
});
