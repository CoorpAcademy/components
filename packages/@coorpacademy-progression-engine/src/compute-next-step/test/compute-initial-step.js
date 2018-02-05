// @flow
import test from 'ava';
import omit from 'lodash/fp/omit';
import filter from 'lodash/fp/filter';
import getConfig from '../../config';
import {computeInitialStep} from '..';
import type {AvailableContent, Config} from '../../types';
import allSlides from './fixtures/slides';

const config: Config = getConfig({ref: 'learner', version: '1'});
const availableContent: AvailableContent = [
  {
    ref: '1.A1',
    slides: filter({chapter_id: '1.A1'}, allSlides),
    rules: null
  },
  {
    ref: '2.A1',
    slides: filter({chapter_id: '2.A1'}, allSlides),
    rules: []
  }
];

test('should return null if availableContent is empty', t => {
  t.is(computeInitialStep(config, []), null);
});

test('should return null if there are no slides for the first chapter', t => {
  t.is(computeInitialStep(config, [{ref: '1.A1', slides: [], rules: null}]), null);
});

test('should create an initial action from the slides', t => {
  const action = computeInitialStep(config, availableContent);
  if (!action) {
    throw new Error('action should not be falsy');
  }

  t.deepEqual(omit(['payload.nextContent.ref'], action), {
    type: 'move',
    payload: {
      instructions: null,
      nextContent: {
        type: 'slide'
      }
    }
  });
  t.regex(action.payload.nextContent.ref, /^1\.A1\.[1-9]+$/);
});

test('should create an adaptive initial Action', t => {
  const initialRule = {
    source: {
      type: 'slide',
      ref: ''
    },
    destination: {
      type: 'slide',
      ref: '1.A1.1'
    },
    instructions: [
      {
        field: 'foo',
        type: 'set',
        value: 0
      }
    ],
    conditions: [],
    priority: 10
  };
  const randomRule = {
    source: {
      type: 'slide',
      ref: '1.A1.1'
    },
    destination: {
      type: 'slide',
      ref: '1.A1.2'
    },
    instructions: [],
    conditions: [],
    priority: 10
  };

  const content: AvailableContent = [
    {
      ref: 'chapter1',
      slides: [],
      rules: [initialRule, randomRule]
    }
  ];

  const action = computeInitialStep(config, content);

  t.deepEqual(action, {
    type: 'move',
    payload: {
      instructions: [
        {
          field: 'foo',
          type: 'set',
          value: 0
        }
      ],
      nextContent: {type: 'slide', ref: '1.A1.1'}
    }
  });
});
