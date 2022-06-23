// @flow
import {type State} from '../../../types';

export const stateForFirstSlide: State = {
  content: undefined,
  nextContent: {
    ref: '1.A1.1',
    type: 'slide'
  },
  lives: 1,
  livesDisabled: false,
  stars: 0,
  slides: [],
  requestedClues: [],
  viewedResources: [],
  isCorrect: true,
  step: {
    current: 1
  },
  remainingLifeRequests: 1,
  hasViewedAResourceAtThisStep: false,
  allAnswers: [],
  variables: {},
  pendingSlides: []
};

export const stateForSecondSlide: State = {
  content: {
    ref: '1.A1.4',
    type: 'slide'
  },
  nextContent: {
    ref: '1.A1.2',
    type: 'slide'
  },
  lives: 1,
  livesDisabled: false,
  slides: ['1.A1.4'],
  requestedClues: [],
  viewedResources: [],
  isCorrect: true,
  stars: 4,
  step: {
    current: 2
  },
  remainingLifeRequests: 1,
  hasViewedAResourceAtThisStep: false,
  allAnswers: [{slideRef: '1.A1.4', isCorrect: true, answer: ['bar']}],
  variables: {},
  pendingSlides: []
};

export const extraLifeProgressionState: State = {
  content: {
    ref: '1.A1.2',
    type: 'slide'
  },
  nextContent: {
    ref: 'none',
    type: 'node'
  },
  lives: 0,
  livesDisabled: false,
  isCorrect: false,
  slides: ['1.A1.1', '1.A1.2'],
  step: {
    current: 3,
    total: 4
  },
  requestedClues: [],
  viewedResources: [],
  stars: 4,
  remainingLifeRequests: 1,
  hasViewedAResourceAtThisStep: true,
  allAnswers: [],
  variables: {},
  pendingSlides: []
};
