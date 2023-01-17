import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import {once} from 'lodash/fp';
import Audio from '..';
import defaultFixture from './fixtures/default';

browserEnv();
configure({adapter: new Adapter()});

test('should call listeners within props', t => {
  t.plan(3);

  window.HTMLMediaElement.prototype.load = () => {
    t.pass();
  };
  const onPlay = once(() => t.pass());

  const component = <Audio {...defaultFixture.props} onPlay={onPlay} />;
  const audioPlayer = mount(component);
  const instance = audioPlayer.instance();

  instance.handlePlay();

  audioPlayer.setProps({
    mediaUrl:
      '//static.coorpacademy.com/content/CoorpAcademy/content-bnpp/cockpit-letsgetdigital-migration/raw/3-methodes-efficaces-pour-gerer-les-conflits-1619536987180.mp3'
  });
  t.pass();
});

test('should call listeners without onPlay handler', t => {
  t.plan(1);

  window.HTMLMediaElement.prototype.load = () => {
    t.fail();
  };

  const component = <Audio {...defaultFixture.props} onPlay={null} />;
  const audioPlayer = mount(component);
  const instance = audioPlayer.instance();

  instance.handlePlay();
  t.pass();
});
