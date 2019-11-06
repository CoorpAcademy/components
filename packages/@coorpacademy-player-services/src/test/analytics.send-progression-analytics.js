// @flow strict

import test from 'ava';
import {set, pipe} from 'lodash/fp';
import type {Config} from '@coorpacademy/progression-engine';
import type {DataEvent} from '../definitions';
import {sendProgressionFinished, sendProgressionUpdated} from '../analytics';

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

test('should push a finish event even if dataLayer is not defined previously', t => {
  global.window = {dataLayer: undefined};

  const currentProgression = pipe(
    set('engine.ref', 'microlearning'),
    set('state.nextContent.type', 'success'),
    set('state.remainingLifeRequests', 1)
  )({});

  sendProgressionFinished(currentProgression, engineConfig);

  const res = [
    {
      event: 'finishProgression',
      progression: {type: 'microlearning', state: 'success', extraLife: 2}
    }
  ];

  t.deepEqual(global.window.dataLayer, res);
});

test('should push a update event even if dataLayer is not defined previously', t => {
  global.window = {dataLayer: undefined};

  const currentProgression = pipe(
    set('engine.ref', 'microlearning'),
    set('state.nextContent.type', 'success'),
    set('state.remainingLifeRequests', 1)
  )({});

  sendProgressionUpdated(currentProgression, engineConfig);

  const res = [
    {
      event: 'updateProgression',
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
          progression: {type: 'microlearning', state: 'whatever', extraLife: 2}
        });
      }
    }
  };

  const currentProgression = pipe(
    set('engine.ref', 'microlearning'),
    set('state.nextContent.type', 'whatever'),
    set('state.remainingLifeRequests', 1)
  )({});

  sendProgressionFinished(currentProgression, engineConfig);
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
  sendProgressionFinished(currentProgression, engineConfig);
  sendProgressionUpdated(currentProgression, engineConfig);
  t.pass();
});

test('should send a `updateProgression` event to the tag manager when Updating a progression successfully', t => {
  t.plan(1);

  global.window = {
    dataLayer: {
      push: evt => {
        t.deepEqual(evt, {
          event: 'updateProgression',
          progression: {type: 'microlearning', state: 'whatever', extraLife: 2}
        });
      }
    }
  };

  const currentProgression = pipe(
    set('engine.ref', 'microlearning'),
    set('state.nextContent.type', 'whatever'),
    set('state.remainingLifeRequests', 1)
  )({});

  sendProgressionUpdated(currentProgression, engineConfig);
});
