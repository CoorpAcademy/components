// @flow
import test from 'ava';
import {filter, concat} from 'lodash/fp';

import {getConfig} from '../../config';
import type {AvailableContent, Config, State} from '../../types';
import {
  computeNextStep,
  nextSlidePool,
  computeNextStepForNewChapter,
  prepareStateToSwitchChapters
} from '../compute-next-step';
import allSlides from './fixtures/slides';
import {stateBeforeGettingNextContent, lastStepProgressionState} from './fixtures/states';

const config: Config = getConfig({ref: 'learner', version: '1'});
const availableContent: AvailableContent = [
  {
    ref: '1.A1',
    slides: filter({chapter_id: '1.A1'}, allSlides),
    rules: null
  }
];

test('should return a success ExitNode if there is no available content with one chapter', t => {
  const availableContenta: AvailableContent = [
    {
      ref: '1.A1',
      slides: concat(filter({_id: '1.A1.1'}, allSlides), filter({_id: '1.A1.2'}, allSlides)),
      rules: null
    }
  ];
  const state: State = Object.freeze(stateBeforeGettingNextContent);
  // $FlowFixMe
  const action = computeNextStep(config, state, availableContenta, {
    type: 'answer',
    payload: {
      answer: [],
      content: {
        ref: '1.A1.2',
        type: 'slide'
      },
      godMode: false,
      isCorrect: true
    }
  });
  // $FlowFixMe
  t.deepEqual(action.nextContent, {type: 'success', ref: 'successExitNode'});
});
test('should return a success ExitNode if there is no available content with any empty chapters', t => {
  const availableContenta: AvailableContent = [
    {
      ref: '1.A1',
      slides: concat(filter({_id: '1.A1.1'}, allSlides), filter({_id: '1.A1.2'}, allSlides)),
      rules: null
    },
    {
      ref: '2.A1',
      slides: [],
      rules: null
    },
    {
      ref: '3.A1',
      slides: [],
      rules: null
    }
  ];
  const state: State = Object.freeze(stateBeforeGettingNextContent);
  // $FlowFixMe
  const action = computeNextStep(config, state, availableContenta, {
    type: 'answer',
    payload: {
      answer: [],
      content: {
        ref: '1.A1.2',
        type: 'slide'
      },
      godMode: false,
      isCorrect: true
    }
  });
  // $FlowFixMe
  t.deepEqual(action.nextContent, {type: 'success', ref: 'successExitNode'});
});
test('should return next slide if there is no available content in current chapter', t => {
  const availableContenta: AvailableContent = [
    {
      ref: '1.A1',
      slides: concat(filter({_id: '1.A1.1'}, allSlides), filter({_id: '1.A1.2'}, allSlides)),
      rules: null
    },
    {
      ref: '2.A1',
      slides: filter({chapter_id: '2.A1'}, allSlides),
      rules: null
    }
  ];
  const state: State = Object.freeze(stateBeforeGettingNextContent);
  // $FlowFixMe
  const action = computeNextStep(config, state, availableContenta, {
    type: 'answer',
    payload: {
      answer: [],
      content: {
        ref: '1.A1.2',
        type: 'slide'
      },
      godMode: false,
      isCorrect: true
    }
  });
  // $FlowFixMe
  t.regex(action.nextContent.ref, /^2\.A1\.[1-9]+$/);
});

test('should return next slide if there is available content in current chapter', t => {
  const availableContentbb: AvailableContent = [
    {
      ref: '1.A1',
      slides: [
        ...filter({_id: '1.A1.1'}, allSlides),
        ...filter({_id: '1.A1.2'}, allSlides),
        ...filter({_id: '1.A1.3'}, allSlides),
        ...filter({_id: '1.A1.4'}, allSlides)
      ],
      rules: null
    }
  ];
  const state: State = Object.freeze(lastStepProgressionState);
  // $FlowFixMe
  const action = computeNextStep(config, state, availableContentbb, {
    type: 'answer',
    payload: {
      answer: [],
      content: {
        ref: '1.A1.3',
        type: 'slide'
      },
      godMode: false,
      isCorrect: true
    }
  });
  // $FlowFixMe
  t.is(action.nextContent.ref, '1.A1.4');
});

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
