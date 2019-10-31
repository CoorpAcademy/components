// @flow
import test from 'ava';
import omit from 'lodash/fp/omit';
import filter from 'lodash/fp/filter';
import {getConfig} from '../../config';
import type {AvailableContent, Config} from '../../types';
import allSlides from './fixtures/slides';
import {computeInitialStep} from '..';

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

test('should return successExitNode if availableContent is empty', t => {
  t.deepEqual(computeInitialStep(config, []), {
    type: 'move',
    payload: {
      nextContent: {
        type: 'success',
        ref: 'successExitNode'
      },
      instructions: null
    }
  });
});

test('should return a success exitNode if there are no slides in all chapters', t => {
  const action = computeInitialStep(config, [{ref: '1.A1', slides: [], rules: null}]);
  if (!action) {
    throw new Error('action should not be falsy');
  }
  t.deepEqual(action, {
    type: 'move',
    payload: {
      instructions: null,
      nextContent: {
        type: 'success',
        ref: 'successExitNode'
      }
    }
  });
});

test('should return a slide in next chapter if there are no slides for the first chapter', t => {
  const action = computeInitialStep(config, [
    {ref: '1.A1', slides: [], rules: null},
    {ref: '1.1.A1', slides: [], rules: null},
    {ref: '2.A1', slides: filter({chapter_id: '2.A1'}, allSlides), rules: null}
  ]);
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
  t.regex(action.payload.nextContent.ref, /^2\.A1\.[1-9]+$/);
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
      slides: allSlides,
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
