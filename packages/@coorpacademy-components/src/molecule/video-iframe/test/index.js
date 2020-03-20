import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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
