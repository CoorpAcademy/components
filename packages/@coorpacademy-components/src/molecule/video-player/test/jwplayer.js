import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {JWPLAYER_SCRIPT_URL} from '../../../util/constants';
import JWPlayer from '../jwplayer';

browserEnv();
configure({adapter: new Adapter()});

test.serial('should update props and call componentDidUpdate successfully', t => {
  const props = {
    video: 'foo',
    jwpOptions: {
      playerId: '1',
      file: 'https://simoocdigital.credit-agricole.fr/media/content/bigdata/159363386.mp4',
      playerScript: JWPLAYER_SCRIPT_URL,
      licenseKey: 'QDh3Fb2afiIAFI+XwlncwQDhNEwkXetm1y8tzWn3km8='
    }
  };

  window.jwplayer = null;
  const component = <JWPlayer {...props} />;
  const video = mount(component);

  video.setProps({dummy: true});
  video.unmount();
  t.pass();
});

test.serial('should do nothing if autoplay is triggered and jwplayer script is not ready', t => {
  const props = {
    video: 'bar',
    jwpOptions: {
      playerId: '2',
      file: 'https://simoocdigital.credit-agricole.fr/media/content/bigdata/159363386.mp4',
      playerScript: JWPLAYER_SCRIPT_URL,
      licenseKey: 'QDh3Fb2afiIAFI+XwlncwQDhNEwkXetm1y8tzWn3km8='
    }
  };

  window.jwplayer = null;
  const component = <JWPlayer {...props} />;
  const video = mount(component);

  video.setProps({autoplay: true});
  video.unmount();
  t.pass();
});

test('should call handlers within props, then add autoplay props', t => {
  t.plan(6);

  const props = {
    video: 'baz',
    onPause: () => t.pass(),
    onPlay: () => t.pass(),
    onResume: () => t.pass(),
    onEnded: () => t.pass(),
    onError: () => t.pass(),
    jwpOptions: {
      playerId: '3',
      file: 'https://simoocdigital.credit-agricole.fr/media/content/bigdata/159363386.mp4',
      playerScript: JWPLAYER_SCRIPT_URL,
      licenseKey: 'QDh3Fb2afiIAFI+XwlncwQDhNEwkXetm1y8tzWn3km8=',
      customProps: {
        aspectratio: '16:9',
        autostart: false,
        width: '100%',
        skin: {
          name: 'bekle'
        }
      }
    }
  };

  const component = <JWPlayer {...props} />;
  const video = mount(component);

  const instance = video.instance();

  instance.handlePlay();
  instance.handlePause();
  instance.handleResume();
  instance.handleEnded();
  instance.handleError(new Error('Foo bar'));

  window.jwplayer = () => ({
    play: props.onPlay
  });

  video.setProps({autoplay: true});
});
