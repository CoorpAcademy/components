// @flow
import {type State} from '../../../../types';

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
  variables: {}
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
  allAnswers: [],
  variables: {
    A: 0,
    reverse: false
  }
};
