import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ResourcePlayer from '..';

browserEnv();
configure({adapter: new Adapter()});

test('should call jwplayer.onPlay when overlay is clicked', t => {
  t.plan(1);

  const props = {
    resource: {
      type: 'video',
      mimeType: 'video/mp4',
      description: 'De l’éco-conception à l’innovation responsable',
      jwpOptions: {
        playerId: '12345',
        file: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        videoId: undefined,
        playerScript:
          'https://s3-eu-west-1.amazonaws.com/static.coorpacademy.com/JwPlayer/8.6.3/jwplayer.js',
        licenseKey: 'QDh3Fb2afiIAFI+XwlncwQDhNEwkXetm1y8tzWn3km8=',
        customProps: {
          autostart: false,
          width: '100%',
          height: '100%',
          skin: {
            name: 'bekle'
          }
        }
      },
      onPlay: () => t.pass()
    },
    overlay: {
      title: 'Bonus !',
      text: 'Récupérez une vie en regardant la leçon !',
      lifeAmount: 1
    }
  };

  const component = <ResourcePlayer {...props} />;
  const resourcePlayer = mount(component);
  const instance = resourcePlayer.instance();

  window.jwplayer = () => ({
    play: props.resource.onPlay
  });

  instance.handleOverlay();
});
