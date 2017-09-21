// @flow
import {type State} from '../../types';

export const stateForFirstSlide: State = {
  content: undefined,
  nextContent: {
    ref: '1.A1.1',
    type: 'slide'
  },
  lives: 1,
  stars: 0,
  slides: [],
  requestedClues: [],
  viewedResources: [],
  isCorrect: true,
  step: {
    current: 1
  },
  remainingLifeRequests: 1
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
  slides: ['1.A1.4'],
  requestedClues: [],
  viewedResources: [],
  isCorrect: true,
  stars: 4,
  step: {
    current: 2
  },
  remainingLifeRequests: 1
};

export const failProgressionState: State = {
  content: {
    ref: '1.A1.1',
    type: 'slide'
  },
  nextContent: {
    ref: '1.A1.2',
    type: 'slide'
  },
  lives: 0,
  isCorrect: false,
  slides: ['1.A1.1', '1.A1.2'],
  step: {
    current: 3
  },
  requestedClues: [],
  viewedResources: [],
  stars: 4,
  remainingLifeRequests: 0
};

export const extraLifeProgressionState: State = {
  content: {
    ref: '1.A1.1',
    type: 'slide'
  },
  nextContent: {
    ref: '1.A1.2',
    type: 'slide'
  },
  lives: 0,
  isCorrect: false,
  slides: ['1.A1.1', '1.A1.2'],
  step: {
    current: 3,
    total: 4
  },
  requestedClues: [],
  viewedResources: [],
  stars: 4,
  remainingLifeRequests: 1
};

export const successProgressionState: State = {
  content: {
    ref: '1.A1.2',
    type: 'slide'
  },
  nextContent: {
    ref: '1.A1.4',
    type: 'slide'
  },
  lives: 1,
  isCorrect: true,
  slides: ['1.A1.1', '1.A1.3', '1.A1.2', '1.A1.4'],
  step: {
    current: 4
  },
  requestedClues: [],
  viewedResources: [],
  stars: 16,
  remainingLifeRequests: 1
};
