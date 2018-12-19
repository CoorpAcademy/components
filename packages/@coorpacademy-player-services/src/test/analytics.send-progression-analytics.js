// @flow strict

import test from 'ava';
import set from 'lodash/fp/set';
import pipe from 'lodash/fp/pipe';
import type {Config} from '@coorpacademy/progression-engine';
import type {DataEvent} from '../definitions';
import {sendProgressionAnalytics} from '../analytics';

// eslint-disable-next-line no-shadow
type Window = {|
  dataLayer?: {push: (event: DataEvent) => void}
|};

// eslint-disable-next-line no-shadow
declare var global: {|window: Window|};

const engineConfig: Config = {
  version: '1',
  livesDisabled: true,
  lives: 1,
  maxTypos: 1,
  slidesToComplete: 1,
  answerBoundaryLimit: 1,
  starsPerAskingClue: 1,
  starsPerCorrectAnswer: 1,
  starsPerResourceViewed: 1,
  remainingLifeRequests: 3
};

test('should push an event even if dataLayer is not defined previously', t => {
  global.window = {dataLayer: undefined};

  const currentProgression = pipe(
    set('engine.ref', 'microlearning'),
    set('state.nextContent.type', 'success'),
    set('state.remainingLifeRequests', 1)
  )({});

  sendProgressionAnalytics(currentProgression, engineConfig);

  const res = [
    {
      event: 'finishProgression',
      progression: {type: 'microlearning', state: 'success', extraLife: 2}
    }
  ];

  t.deepEqual(global.window.dataLayer, res);
});

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

  sendProgressionAnalytics(currentProgression, engineConfig);
  t.pass();
});

test('should do nothing if progression has no state', t => {
  global.window = {
    dataLayer: {
      push: evt => {
        t.fail();
      }
    }
  };

  const currentProgression = set('engine.ref', 'microlearning')({});
  sendProgressionAnalytics(currentProgression, engineConfig);
  t.pass();
});
