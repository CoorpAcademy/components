import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import JWPlayer from '../jwplayer';

configure({adapter: new Adapter()});

test('should call listeners within props, then remove them on willComponentUnmount', t => {
  t.plan(4);

  const props = {
    video: 'foo',
    onPause: () => t.pass(),
    onPlay: () => t.pass(),
    onResume: () => t.pass(),
    onEnded: () => t.pass(),
    jwpOptions: {
      playerId: '5980934b7dfebe01618a57df',
      file: 'https://simoocdigital.credit-agricole.fr/media/content/bigdata/159363386.mp4',
      playerScript: 'https://up-staging.coorpacademy.com/libs/jwplayer/7.10.7/jwplayer.js',
      licenseKey: 'yI8rSuuJ+fs7VdJzWjY4zGZU48UcOn+Gjg+FXZag16o=',
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

  video.unmount();
});
