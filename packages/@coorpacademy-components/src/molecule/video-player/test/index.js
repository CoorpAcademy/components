import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import Player from '..';

test('should emit play only one', t => {
  const events = ['Play', 'Resume', 'Play', 'Resume', 'Resume'];

  const props = {
    id: 'foo',
    mimeType: 'video/mp4',
    onPause: () => t.is('Pause', events.shift()),
    onPlay: () => t.is('Play', events.shift()),
    onResume: () => t.is('Resume', events.shift()),
    onEnd: () => t.is('End', events.shift())
  };

  const component = <Player {...props} />;
  const player = shallow(component);

  const instance = player.instance();

  instance.handleOnPlay();
  instance.handleOnPlay();

  player.setProps({
    id: 'bar'
  });

  instance.handleOnPlay();
  instance.handleOnPlay();

  player.setProps({
    id: 'bar'
  });

  instance.handleOnPlay();

  t.deepEqual(events, []);
});
