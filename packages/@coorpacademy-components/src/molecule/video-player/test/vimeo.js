import 'jsdom-global/register';
import EventEmitter from 'events'; // eslint-disable-line fp/no-events
import test from 'ava';
import React from 'react';
import {mount} from 'enzyme';
import Vimeo from '../vimeo';

class Player extends EventEmitter {
  constructor() {
    super();
    this.setVolume = () => true;
    this.setAutopause = () => true;
    this.setColor = () => true;
    this.setLoop = () => true;
    this.play = () => true;
    this.pause = () => true;
    this.setWidth = () => true;
    this.setHeight = () => true;
    this.element = {
      width: '',
      height: ''
    };
  }

  /* eslint-disable class-methods-use-this */
  loadVideo() {}
  unload() {}
  /* eslint-enable class-methods-use-this */
}

test('should call listeners within props, then remove them on willComponentUnmount', t => {
  t.plan(4);

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

test('should render a div with an ID and className', t => {
  const props = {
    className: 'myClassName'
  };

  const component = <Vimeo {...props} />;
  const video = mount(component);

  const _props = video.props();
  t.is(_props.className, 'myClassName');
  video.unmount();
});

test('should instanciate vimeo with good width/height', t => {
  const props = {
    width: '111',
    height: '222'
  };

  const component = <Vimeo {...props} />;
  const context = {Vimeo: {Player}};
  const video = mount(component, {context});
  const instance = video.instance();

  t.deepEqual(instance.player.element, {width: '', height: ''});
  instance.player.emit('loaded');
  t.deepEqual(instance.player.element, props);

  video.unmount();
});

test('should update vimeo video', t => {
  t.plan(2);

  class _Player extends Player {
    /* eslint-disable class-methods-use-this */
    loadVideo() {
      t.pass();
    }
    unload() {
      t.pass();
    }
    /* eslint-enable class-methods-use-this */
  }

  const component = <Vimeo />;
  const context = {Vimeo: {Player: _Player}};
  const video = mount(component, {context});

  video.setProps({
    id: 'bar'
  });

  video.setProps({
    id: null
  });

  video.unmount();
});
