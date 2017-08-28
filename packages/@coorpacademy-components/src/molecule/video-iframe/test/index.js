import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {mount} from 'enzyme';
import VideoIframe from '..';

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
