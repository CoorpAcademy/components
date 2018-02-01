// @flow
import test from 'ava';
import omit from 'lodash/fp/omit';
import filter from 'lodash/fp/filter';
import {computeInitialStep} from '..';
import type {AvailableContent, Engine, EngineOptions} from '../../types';
import allSlides from './fixtures/slides';

const engine: Engine = {ref: 'learner', version: '1'};
const engineOptions: EngineOptions = {};
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

// TODO Handle error cases
// test('should check adaptive params on computeInitialStep', t => {
//   t.throws(
//     () => computeInitialStep(engine, engineOptions, {chapterRulePool: []}),
//     'Available content should have at least some slides or chapter rules'
//   );
// });
//
// test('should check params content to create an initial action', t => {
//   t.throws(
//     () => computeInitialStep(engine, engineOptions, {}),
//     'Available content should have at least some slides or chapter rules'
//   );
// });
//
// test('should check whether an initial slide is found to create an initial action', t => {
//   t.throws(
//     () => computeInitialStep(engine, engineOptions, {slidePools: []}),
//     'Available content should have at least some slides or chapter rules'
//   );
// });

test('should create an initial action from the slides', t => {
  const action = computeInitialStep(engine, engineOptions, availableContent);

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

  const action = computeInitialStep(engine, engineOptions, content);

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
