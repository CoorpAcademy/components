// @flow
import test from 'ava';
import filter from 'lodash/fp/filter';
import {getConfig} from '../../config';
import type {AvailableContent, Config, State} from '../../types';
import computeNextStep, {
  nextSlidePool,
  computeNextStepForNewChapter,
  prepareStateToSwitchChapters
} from '../compute-next-step';
import allSlides from './fixtures/slides';
import {stateBeforeGettingNextContent} from './fixtures/states';

const config: Config = getConfig({ref: 'learner', version: '1'});
const availableContent: AvailableContent = [
  {
    ref: '1.A1',
    slides: filter({chapter_id: '1.A1'}, allSlides),
    rules: null
  }
];

test('should return null if there is no available content', t => {
  const state: State = Object.freeze(stateBeforeGettingNextContent);
  // $FlowFixMe
  const action = computeNextStep(config, state, availableContent, {type: 'foo'});
  // $FlowFixMe
  t.regex(action.nextContent.ref, /^1\.A1\.[1-9]+$/);
});

test('nextSlidePool --> should handle next chapter when no present within availableContent', t => {
  const state: State = Object.freeze({
    nextContent: {
      ref: '1.A2',
      type: 'chapter'
    },
    lives: 1,
    livesDisabled: false,
    stars: 0,
    slides: [],
    requestedClues: [],
    viewedResources: [],
    step: {
      current: 0
    },
    isCorrect: null,
    remainingLifeRequests: 1,
    hasViewedAResourceAtThisStep: false,
    allAnswers: [],
    variables: {}
  });

  const result = nextSlidePool(config, availableContent, state);
  t.deepEqual(result, {
    currentChapterContent: null,
    nextChapterContent: null,
    temporaryNextContent: {type: 'slide', ref: ''}
  });
});

test('prepareStateToSwitchChapters --> should return null when state is null', t => {
  // $FlowFixMe
  t.is(prepareStateToSwitchChapters({}, null), null);
});

test('computeNextStepForNewChapter --> should return null when computeNextStep returns null', t => {
  const state: State = Object.freeze({
    nextContent: {
      ref: '1.A2',
      type: 'chapter'
    },
    lives: 1,
    livesDisabled: false,
    stars: 0,
    slides: [],
    requestedClues: [],
    viewedResources: [],
    step: {
      current: 0
    },
    isCorrect: null,
    remainingLifeRequests: 1,
    hasViewedAResourceAtThisStep: false,
    allAnswers: [],
    variables: {}
  });

  const chapterRule = {
    source: {
      type: 'slide',
      ref: '1.A1.7'
    },
    destination: {
      type: 'chapter',
      ref: '2.A1'
    },
    instructions: [{field: 'bar', type: 'set', value: 'I was in 1.A1.7'}],
    conditions: [],
    priority: 10
  };

  const result = computeNextStepForNewChapter(config, state, chapterRule, false, availableContent);
  t.is(result, null);
});

test('computeNextStep --> should warn when there are no more slides', t => {
  const state: State = Object.freeze(stateBeforeGettingNextContent);
  t.throws(
    () =>
      computeNextStep(
        config,
        state,
        [
          {
            ref: '1.A1',
            slides: filter({_id: '1.A1.1'}, allSlides),
            rules: null
          }
        ],
        // $FlowFixMe
        {type: 'foo'}
      ),
    'There is 0 remaining slides'
  );
});
