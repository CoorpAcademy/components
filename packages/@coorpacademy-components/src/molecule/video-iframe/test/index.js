import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import VideoIframe from '..';

browserEnv();
configure({adapter: new Adapter()});

test('should render properly a kontiki iframe', t => {
  const props = {
    type: 'kontiki',
    src: 'foo'
  };

  const component = <VideoIframe {...props} />;
  const video = mount(component);
  t.truthy(video.find('.iframe'));
  video.unmount();
});

test('should render properly a youtube iframe', t => {
  const props = {
    type: 'youtube',
    id: 'foo'
  };

  const component = <VideoIframe {...props} />;
  const video = mount(component);
  t.truthy(video.find('.iframe'));
  video.unmount();
});

test('should render properly a omniPlayer iframe', t => {
  const props = {
    type: 'omniPlayer',
    id: 'foo'
  };

  const component = <VideoIframe {...props} />;
  const video = mount(component);
  t.truthy(video.find('.iframe'));
  video.unmount();
});

test('should render properly a h5p iframe', t => {
  const props = {
    type: 'h5p',
    url: 'https://coorpacademy.h5p.com/content/1291025352652664897/embed'
  };

  const component = <VideoIframe {...props} />;
  const video = mount(component);
  t.truthy(video.find('.iframe'));
  video.unmount();
});
