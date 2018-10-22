// @flow
import type {
  Action,
  AnswerAction,
  AskClueAction,
  ExtraLifeAcceptedAction,
  ExtraLifeRefusedAction,
  MoveAction
} from '../../../types';

export const answerAction: AnswerAction = Object.freeze({
  type: 'answer',
  authors: ['bar'],
  payload: {
    answer: ['foo'],
    content: {
      ref: '1.A1.2',
      type: 'slide'
    },
    nextContent: {
      ref: '1.A1.1',
      type: 'slide'
    },
    isCorrect: false,
    godMode: false,
    instructions: null
  }
});

export const askClueAction: AskClueAction = Object.freeze({
  type: 'clue',
  authors: ['bar'],
  payload: {
    content: {
      ref: '1.A1.2',
      type: 'slide'
    }
  }
});

export const extraLifeAcceptedAction: ExtraLifeAcceptedAction = Object.freeze({
  type: 'extraLifeAccepted',
  authors: ['bar'],
  payload: {
    content: {
      type: 'node',
      ref: 'extraLife'
    },
    nextContent: {
      ref: '1.A1.1',
      type: 'slide'
    },
    instructions: null
  }
});

export const extraLifeRefusedAction: ExtraLifeRefusedAction = Object.freeze({
  type: 'extraLifeRefused',
  authors: ['bar'],
  payload: {
    content: {
      type: 'node',
      ref: 'extraLife'
    },
    nextContent: {
      ref: 'failExitNode',
      type: 'failure'
    }
  }
});

export const moveAction: MoveAction = Object.freeze({
  type: 'move',
  authors: ['bar'],
  payload: {
    instructions: null,
    nextContent: {
      ref: '1.A1.1',
      type: 'slide'
    }
  }
});

export const resourceAction: Action = Object.freeze({
  type: 'resource',
  authors: ['bar'],
  payload: {
    resource: {
      ref: 'les_1',
      type: 'video',
      version: '1'
    },
    content: {
      ref: '1.A1',
      type: 'chapter',
      version: '1'
    }
  }
});
