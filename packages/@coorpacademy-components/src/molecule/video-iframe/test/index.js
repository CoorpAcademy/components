import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoIframe from '..';

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
