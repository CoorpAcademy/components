import test from 'ava';
import {sendViewedMediaAnalytics} from '../analytics';

test('populate dataLayer when empty', t => {
  global.window = {};

  const dataLayer = sendViewedMediaAnalytics({type: 'video'}, 'media');
  t.deepEqual(dataLayer[0], {event: 'mediaViewed', mediaType: 'video', location: 'media'});
});

test('verify viewMedia tag', t => {
  t.plan(2);
  global.window = {
    dataLayer: {
      push: evt => {
        t.deepEqual(evt, {event: 'mediaViewed', mediaType: 'video', location: 'media'});
        t.pass();
      }
    }
  };

  sendViewedMediaAnalytics({type: 'video'}, 'media');
});
