import test from 'ava';
import set from 'lodash/fp/set';
import pipe from 'lodash/fp/pipe';
import {sendProgressionAnalytics} from '../analytics';

const engineConfig = {remainingLifeRequests: 3};

test('should send a `finishProgression` event to the tag manager when finishing a progression successfully', t => {
  t.plan(1);

  global.window = {
    dataLayer: {
      push: evt => {
        t.deepEqual(evt, {
          event: 'finishProgression',
          progression: {type: 'microlearning', state: 'success', extraLife: 2}
        });
      }
    }
  };

  const currentProgression = pipe(
    set('engine.ref', 'microlearning'),
    set('state.nextContent.type', 'success'),
    set('state.remainingLifeRequests', 1)
  )({});

  sendProgressionAnalytics(currentProgression, engineConfig);
});

test('should send a `finishProgression` event to the tag manager when failing a progression', t => {
  t.plan(1);

  global.window = {
    dataLayer: {
      push: evt => {
        t.deepEqual(evt, {
          event: 'finishProgression',
          progression: {type: 'microlearning', state: 'failure', extraLife: 2}
        });
      }
    }
  };

  const currentProgression = pipe(
    set('engine.ref', 'microlearning'),
    set('state.nextContent.type', 'failure'),
    set('state.remainingLifeRequests', 1)
  )({});

  sendProgressionAnalytics(currentProgression, engineConfig);
});

test('should do nothing if neither success nor failure', t => {
  global.window = {
    dataLayer: {
      push: evt => {
        t.fail();
      }
    }
  };

  const currentProgression = pipe(
    set('engine.ref', 'microlearning'),
    set('state.nextContent.type', 'foo')
  )({});

  const res = sendProgressionAnalytics(currentProgression, engineConfig);
  t.is(global.window.dataLayer, res);
});
