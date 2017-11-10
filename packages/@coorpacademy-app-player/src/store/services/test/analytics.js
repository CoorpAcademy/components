import test from 'ava';
import set from 'lodash/fp/set';
import pipe from 'lodash/fp/pipe';
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
          progression: {type: 'microlearning', state: 'success', nbExtraLifeUsed: 2}
        });
      }
    }
  };

  const currentProgression = pipe(
    set('engine.ref', 'microlearning'),
    set('state.nextContent.type', 'success'),
    set('state.remainingLifeRequests', 1)
  )({});

  const engineConfig = {remainingLifeRequests: 3};

  sendProgressionAnalytics(currentProgression, engineConfig);
});
