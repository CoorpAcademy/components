import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {mount} from 'enzyme';
import once from 'lodash/fp/once';
import VideoIframe from '..';

test('should call listeners within props', t => {
  t.plan(6);

  class Player {
    // eslint-disable-next-line class-methods-use-this
    on(eventName, listener) {
      listener();
    }

    // eslint-disable-next-line class-methods-use-this
    off(eventName, listener) {
      t.pass();
    }
  }

  const props = {
    type: 'vimeo',
    src: 'foo',
    onPause: once(() => t.pass()),
    onPlay: once(() => t.pass()),
    onEnded: once(() => t.pass())
  };

  const component = <VideoIframe {...props} />;
  const context = {Vimeo: {Player}};
  const video = mount(component, {context});

  video.instance().handlePlay();
  video.instance().handlePause();
  video.instance().handleEnded();
  video.unmount();
});

test('should warn when Vimeo is not within context', t => {
  const props = {
    type: 'vimeo',
    src: 'foo'
  };

  const component = <VideoIframe {...props} />;
  try {
    mount(component);
    t.fail();
  } catch (e) {
    t.is(e.message, 'Vimeo not found in context, events are unplugged.');
  }
});
