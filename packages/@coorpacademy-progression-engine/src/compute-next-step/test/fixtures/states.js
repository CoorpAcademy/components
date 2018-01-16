// @flow
import {type State} from '../../../types';

export const stateBeforeGettingNextContent: State = {
  content: {
    ref: '1.A1.1',
    type: 'slide'
  },
  nextContent: {
    ref: 'none',
    type: 'node'
  },
  lives: 1,
  livesDisabled: false,
  stars: 0,
  slides: ['1.A1.1'],
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

export const firstState: State = {
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
  step: {
    current: 0
  },
  isCorrect: null,
  remainingLifeRequests: 1,
  hasViewedAResourceAtThisStep: false,
  allAnswers: [],
  variables: {}
};

export const failProgressionState: State = {
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
    current: 3
  },
  requestedClues: [],
  viewedResources: [],
  stars: 4,
  remainingLifeRequests: 0,
  hasViewedAResourceAtThisStep: false,
  allAnswers: [],
  variables: {}
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
  variables: {}
};

export const extraLifeAlreadyRefusedProgressionState: State = {
  content: {
    ref: 'extraLife',
    type: 'node'
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
  remainingLifeRequests: 4,
  hasViewedAResourceAtThisStep: false,
  allAnswers: [],
  variables: {}
};

export const successProgressionState: State = {
  content: {
    ref: '1.A1.4',
    type: 'slide'
  },
  nextContent: {
    ref: 'none',
    type: 'node'
  },
  lives: 1,
  livesDisabled: false,
  isCorrect: true,
  slides: ['1.A1.1', '1.A1.3', '1.A1.2', '1.A1.4'],
  step: {
    current: 4
  },
  requestedClues: [],
  viewedResources: [],
  stars: 16,
  remainingLifeRequests: 1,
  hasViewedAResourceAtThisStep: false,
  allAnswers: [],
  variables: {}
};
