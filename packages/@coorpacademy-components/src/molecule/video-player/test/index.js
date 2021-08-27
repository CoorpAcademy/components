import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Player from '..';

browserEnv();
configure({adapter: new Adapter()});

test('should emit play only one', t => {
  const events = ['Play', 'Resume', 'Play', 'Resume', 'Resume'];

  const props = {
    id: 'foo',
    mimeType: 'video/mp4',
    onPause: () => t.is('Pause', events.shift()),
    onPlay: () => t.is('Play', events.shift()),
    onResume: () => t.is('Resume', events.shift()),
    onEnd: () => t.is('End', events.shift()),
    jwpOptions: {
      licenseKey: '12345',
      playerScript: '/path/to/jwplayer.js',
      playerId: '12345'
    }
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
