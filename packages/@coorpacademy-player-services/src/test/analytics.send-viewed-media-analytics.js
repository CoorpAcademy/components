import test from 'ava';
import {sendViewedMediaAnalytics} from '../analytics';

test('populate dataLayer when empty', t => {
  global.window = {};

  const dataLayer = sendViewedMediaAnalytics({type: 'video'}, 'media');
  t.deepEqual(dataLayer[0], {event: 'mediaViewed', mediaType: 'video', location: 'media'});
});

test('should send a `mediaViewed` event to the tag manager', t => {
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
