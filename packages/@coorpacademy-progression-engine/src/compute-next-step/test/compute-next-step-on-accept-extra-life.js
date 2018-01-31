// @flow
import test from 'ava';
import omit from 'lodash/fp/omit';
import filter from 'lodash/fp/filter';
import type {AvailableContent, Engine, EngineOptions, State} from '../../types';
import {computeNextStepOnAcceptExtraLife} from '..';
import allSlides from './fixtures/slides';
import {stateBeforeGettingNextContent} from './fixtures/states';

const engine: Engine = {ref: 'learner', version: '1'};
const engineOptions: EngineOptions = {};
const state: State = {...stateBeforeGettingNextContent, lives: 0};

test('should return an action linking to a new slide', t => {
  const availableContent: AvailableContent = [
    {
      ref: '1.A1',
      slides: filter({chapter_id: '1.A1'}, allSlides),
      rules: null
    }
  ];
  const result = computeNextStepOnAcceptExtraLife(engine, engineOptions, state, availableContent);
  t.deepEqual(omit(['payload.nextContent.ref'], result), {
    type: 'extraLifeAccepted',
    payload: {
      content: {ref: 'extraLife', type: 'node'},
      nextContent: {type: 'slide'},
      instructions: null
    }
  });
  t.regex(result.payload.nextContent.ref, /^1\.A1\.[2-9]+$/);
});

test('should not apply the lives increment twice when switching chapters', t => {
  const availableContent: AvailableContent = [
    {
      ref: '1.A1',
      slides: filter({chapter_id: '1.A1'}, allSlides),
      rules: [
        {
          source: {
            type: 'slide',
            ref: '*'
          },
          destination: {
            type: 'chapter',
            ref: '2.A1'
          },
          instructions: [],
          conditions: [],
          priority: 10
        }
      ]
    },
    {
      ref: '2.A1',
      slides: filter({chapter_id: '2.A1'}, allSlides),
      rules: [
        {
          source: {
            type: 'slide',
            ref: ''
          },
          destination: {
            type: 'slide',
            ref: '2.A1.2'
          },
          instructions: [],
          conditions: [
            {
              target: {
                scope: 'variable',
                field: 'lives'
              },
              operator: 'EQUALS',
              values: [1]
            }
          ],
          priority: 10
        }
      ]
    }
  ];

  const result = computeNextStepOnAcceptExtraLife(engine, engineOptions, state, availableContent);
  t.deepEqual(result, {
    type: 'extraLifeAccepted',
    payload: {
      content: {ref: 'extraLife', type: 'node'},
      nextContent: {type: 'slide', ref: '2.A1.2'},
      instructions: []
    }
  });
});
