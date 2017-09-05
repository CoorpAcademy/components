import test from 'ava';
import {sendViewedMediaAnalytics, sendProgressionAnalytics} from '../analytics';

test('populate dataLayer when empty', t => {
  global.window = {};

  const dataLayer = sendViewedMediaAnalytics({type: 'video'}, 'media');
  t.deepEqual(dataLayer[0], {event: 'mediaViewed', mediaType: 'video', location: 'media'});
});

test('verify viewMedia tag', t => {
  t.plan(1);
  global.window = {
    dataLayer: {
      push: evt => {
        t.deepEqual(evt, {event: 'mediaViewed', mediaType: 'video', location: 'media'});
      }
    }
  };

  sendViewedMediaAnalytics({type: 'video'}, 'media');
});

test('verify sendProgressionAnalytics tag', t => {
  t.plan(1);
  global.window = {
    dataLayer: {
      push: evt => {
        t.deepEqual(evt, {
          event: 'finishProgression',
          progression: {type: 'microlearning', state: 'success'}
        });
      }
    }
  };

  sendProgressionAnalytics({
    type: 'success'
  });
});
