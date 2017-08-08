import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {mount} from 'enzyme';
import EventEmitter from 'events'; // eslint-disable-line fp/no-events
import VideoIframe from '..';

test('should call listeners within props, then remove them on willComponentUnmount', t => {
  t.plan(7);

  class Player extends EventEmitter {
    constructor() {
      super();
    }

    off(eventName, listener) {
      t.pass();
      this.removeListener(eventName, listener);
    }
  }

  const props = {
    type: 'vimeo',
    src: 'foo',
    onPause: () => t.pass(),
    onPlay: () => t.pass(),
    onEnded: () => t.pass()
  };

  const component = <VideoIframe {...props} />;
  const context = {Vimeo: {Player}};
  const video = mount(component, {context});
  const instance = video.instance();

  instance.setRefIframe('foo');
  t.is(instance.iframe, 'foo');

  instance.player.emit('play');
  instance.player.emit('pause');
  instance.player.emit('ended');

  video.unmount();
});

test('should render properly when Vimeo is not within context', t => {
  const props = {
    type: 'vimeo',
    src: 'foo'
  };

  const component = <VideoIframe {...props} />;
  const video = mount(component);
  t.truthy(video.find('.iframe'));
  video.unmount();
});
