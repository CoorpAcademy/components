// @flow
import {type State} from '../../../types';

export const stateBeforeGettingNextContent: State = {
  content: {
    ref: '1.A1.1',
    type: 'slide'
  },
  nextContent: {
    ref: '1.A1.2',
    type: 'slide'
  },
  lives: 1,
  livesDisabled: false,
  stars: 0,
  slides: ['1.A1.1'],
  requestedClues: [],
  viewedResources: [],
  isCorrect: true,
  step: {
    current: 2
  },
  remainingLifeRequests: 1,
  hasViewedAResourceAtThisStep: false,
  allAnswers: [{slideRef: '1.A1.1', isCorrect: true, answer: []}],
  variables: {},
  pendingSlides: []
};
export const stateBeforeAcceptExtraLife: State = {
  content: {
    ref: '1.A1.2',
    type: 'slide'
  },
  nextContent: {
    type: 'node',
    ref: 'extraLife'
  },
  lives: 0,
  livesDisabled: false,
  stars: 0,
  slides: ['1.A1.1', '1.A1.2'],
  requestedClues: [],
  viewedResources: [],
  isCorrect: true,
  step: {
    current: 2
  },
  remainingLifeRequests: 1,
  hasViewedAResourceAtThisStep: false,
  allAnswers: [{slideRef: '1.A1.1', isCorrect: true, answer: []}],
  variables: {},
  pendingSlides: []
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
  variables: {},
  pendingSlides: []
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
  variables: {},
  pendingSlides: []
};

export const oneLifeLeftState: State = {
  content: {
    ref: '1.A1.1',
    type: 'slide'
  },
  nextContent: {
    ref: '1.A1.2',
    type: 'slide'
  },
  lives: 1,
  livesDisabled: false,
  isCorrect: false,
  slides: ['1.A1.4', '1.A1.1', '1.A1.2'],
  step: {
    current: 3
  },
  requestedClues: [],
  viewedResources: [],
  stars: 0,
  remainingLifeRequests: 0,
  hasViewedAResourceAtThisStep: false,
  allAnswers: [],
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

export const extraLifeState: State = {
  content: {
    ref: '1.A1.2',
    type: 'slide'
  },
  nextContent: {
    ref: 'extraLife',
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
  variables: {},
  pendingSlides: []
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
  variables: {},
  pendingSlides: []
};

export const lastStepProgressionState: State = {
  content: {
    ref: '1.A1.2',
    type: 'slide'
  },
  nextContent: {
    ref: '1.A1.3',
    type: 'slide'
  },
  lives: 1,
  livesDisabled: false,
  isCorrect: true,
  slides: ['1.A1.1', '1.A1.2'],
  step: {
    current: 3
  },
  requestedClues: [],
  viewedResources: [],
  stars: 16,
  remainingLifeRequests: 1,
  hasViewedAResourceAtThisStep: false,
  allAnswers: [
    {slideRef: '1.A1.1', isCorrect: true, answer: []},
    {slideRef: '1.A1.2', isCorrect: true, answer: []}
  ],
  variables: {},
  pendingSlides: []
};

export const firstStateReview: State = {
  nextContent: {
    ref: '1.A1.1',
    type: 'slide'
  },
  lives: 0,
  livesDisabled: true,
  stars: 0,
  slides: [],
  requestedClues: [],
  viewedResources: [],
  step: {
    current: 0
  },
  isCorrect: null,
  remainingLifeRequests: 0,
  hasViewedAResourceAtThisStep: false,
  allAnswers: [],
  variables: {},
  pendingSlides: []
};

export const secondStateReview: State = {
  nextContent: {
    ref: '1.A1.2',
    type: 'slide'
  },
  lives: 0,
  livesDisabled: true,
  stars: 8,
  slides: ['1.A1.1'],
  requestedClues: [],
  viewedResources: [],
  step: {
    current: 2
  },
  isCorrect: null,
  remainingLifeRequests: 0,
  hasViewedAResourceAtThisStep: false,
  allAnswers: [
    {
      slideRef: '1.A1.1',
      isCorrect: true,
      answer: ['foo', 'bar']
    }
  ],
  variables: {},
  pendingSlides: []
};

export const thirdStateReview: State = {
  nextContent: {
    ref: '1.A1.3',
    type: 'slide'
  },
  lives: 0,
  livesDisabled: true,
  stars: 16,
  slides: ['1.A1.1', '1.A1.2'],
  requestedClues: [],
  viewedResources: [],
  step: {
    current: 2
  },
  isCorrect: null,
  remainingLifeRequests: 0,
  hasViewedAResourceAtThisStep: false,
  allAnswers: [
    {
      slideRef: '1.A1.1',
      isCorrect: true,
      answer: ['foo', 'bar']
    },
    {
      slideRef: '1.A1.2',
      isCorrect: true,
      answer: ['foo', 'bar']
    }
  ],
  variables: {},
  pendingSlides: []
};

export const fourthStateReview: State = {
  nextContent: {
    ref: '1.A1.4',
    type: 'slide'
  },
  lives: 0,
  livesDisabled: true,
  stars: 32,
  slides: ['1.A1.1', '1.A1.2', '1.A1.3'],
  requestedClues: [],
  viewedResources: [],
  step: {
    current: 2
  },
  isCorrect: null,
  remainingLifeRequests: 0,
  hasViewedAResourceAtThisStep: false,
  allAnswers: [
    {
      slideRef: '1.A1.1',
      isCorrect: true,
      answer: ['foo', 'bar']
    },
    {
      slideRef: '1.A1.2',
      isCorrect: true,
      answer: ['foo', 'bar']
    },
    {
      slideRef: '1.A1.3',
      isCorrect: true,
      answer: ['foo', 'bar']
    }
  ],
  variables: {},
  pendingSlides: []
};

export const allRightAnswersBeforeLastStepStateReview: State = {
  nextContent: {
    ref: '1.A1.5',
    type: 'slide'
  },
  lives: 0,
  livesDisabled: true,
  stars: 32,
  slides: ['1.A1.1', '1.A1.2', '1.A1.3', '1.A1.4'],
  requestedClues: [],
  viewedResources: [],
  step: {
    current: 5
  },
  isCorrect: null,
  remainingLifeRequests: 0,
  hasViewedAResourceAtThisStep: false,
  allAnswers: [
    {
      slideRef: '1.A1.1',
      isCorrect: true,
      answer: ['foo', 'bar']
    },
    {
      slideRef: '1.A1.2',
      isCorrect: true,
      answer: ['foo']
    },
    {
      slideRef: '1.A1.3',
      isCorrect: true,
      answer: ['foo']
    },
    {
      slideRef: '1.A1.4',
      isCorrect: true,
      answer: ['foo']
    }
  ],
  variables: {},
  pendingSlides: []
};

export const wrongAnswersBeforeLastStepStateReview: State = {
  nextContent: {
    ref: '1.A1.5',
    type: 'slide'
  },
  lives: 0,
  livesDisabled: true,
  stars: 16,
  slides: ['1.A1.1', '1.A1.2', '1.A1.3', '1.A1.4'],
  requestedClues: [],
  viewedResources: [],
  step: {
    current: 5
  },
  isCorrect: null,
  remainingLifeRequests: 0,
  hasViewedAResourceAtThisStep: false,
  allAnswers: [
    {
      slideRef: '1.A1.1',
      isCorrect: true,
      answer: ['foo', 'bar']
    },
    {
      slideRef: '1.A1.2',
      isCorrect: false,
      answer: ['foo']
    },
    {
      slideRef: '1.A1.3',
      isCorrect: true,
      answer: ['foo']
    },
    {
      slideRef: '1.A1.4',
      isCorrect: true,
      answer: ['foo']
    }
  ],
  variables: {},
  pendingSlides: ['1.A1.2']
};

export const wrongAnswersAfterLastStepStateReview: State = {
  nextContent: {
    ref: '1.A1.2',
    type: 'slide'
  },
  lives: 0,
  livesDisabled: true,
  stars: 16,
  slides: ['1.A1.1', '1.A1.2', '1.A1.3', '1.A1.4', '1.A1.5'],
  requestedClues: [],
  viewedResources: [],
  step: {
    current: 5
  },
  isCorrect: null,
  remainingLifeRequests: 0,
  hasViewedAResourceAtThisStep: false,
  allAnswers: [
    {
      slideRef: '1.A1.1',
      isCorrect: true,
      answer: ['foo', 'bar']
    },
    {
      slideRef: '1.A1.2',
      isCorrect: false,
      answer: ['foo']
    },
    {
      slideRef: '1.A1.3',
      isCorrect: true,
      answer: ['foo']
    },
    {
      slideRef: '1.A1.4',
      isCorrect: false,
      answer: ['foo']
    },
    {
      slideRef: '1.A1.5',
      isCorrect: true,
      answer: ['foo']
    }
  ],
  variables: {},
  pendingSlides: ['1.A1.2', '1.A1.4']
};

export const stillOneWrongAnswersAfterLastStepStateReview: State = {
  nextContent: {
    ref: '1.A1.4',
    type: 'slide'
  },
  lives: 0,
  livesDisabled: true,
  stars: 32,
  slides: ['1.A1.1', '1.A1.2', '1.A1.3', '1.A1.4', '1.A1.5', '1.A1.2'],
  requestedClues: [],
  viewedResources: [],
  step: {
    current: 5
  },
  isCorrect: null,
  remainingLifeRequests: 0,
  hasViewedAResourceAtThisStep: false,
  allAnswers: [
    {
      slideRef: '1.A1.1',
      isCorrect: true,
      answer: ['foo', 'bar']
    },
    {
      slideRef: '1.A1.2',
      isCorrect: false,
      answer: ['foo']
    },
    {
      slideRef: '1.A1.3',
      isCorrect: true,
      answer: ['foo']
    },
    {
      slideRef: '1.A1.4',
      isCorrect: false,
      answer: ['foo']
    },
    {
      slideRef: '1.A1.5',
      isCorrect: true,
      answer: ['foo']
    },
    {
      slideRef: '1.A1.2',
      isCorrect: true,
      answer: ['foo']
    }
  ],
  variables: {},
  pendingSlides: ['1.A1.4']
};
