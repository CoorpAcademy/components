import 'jsdom-global/register';
import EventEmitter from 'events'; // eslint-disable-line fp/no-events
import test from 'ava';
import React from 'react';
import {mount} from 'enzyme';
import Vimeo from '../vimeo';

test('should call listeners within props, then remove them on willComponentUnmount', t => {
  t.plan(4);

  class Player extends EventEmitter {
    constructor() {
      super();
      this.setVolume = () => true;
      this.setAutopause = () => true;
      this.setColor = () => true;
      this.setLoop = () => true;
      this.loadVideo = () => true;
      this.unload = () => true;
      this.play = () => true;
      this.pause = () => true;
      this.setWidth = () => true;
      this.setHeight = () => true;
      this.element = {
        width: '',
        height: ''
      };
    }
  }

  const props = {
    video: 'foo',
    onPause: () => t.pass(),
    onPlay: () => t.pass(),
    onEnd: () => t.pass()
  };

  const component = <Vimeo {...props} />;
  const context = {Vimeo: {Player}};
  const video = mount(component, {context});
  const instance = video.instance();

  instance.refContainer('foo');
  t.is(instance.container, 'foo');

  instance.player.emit('play');
  instance.player.emit('pause');
  instance.player.emit('ended');

  video.unmount();
});

test('should render properly when Vimeo is not within context', t => {
  const props = {
    video: 'foo'
  };

  const component = <Vimeo {...props} />;
  const video = mount(component);
  t.truthy(video.find('.iframe'));
  video.unmount();
});
