// @flow
import {type RacingState} from '../../types';

export const initialState: RacingState = {
  goal: 20,
  teams: {
    '0': {
      players: ['user_1', 'user_2'],
      step: 0
    },
    '1': {
      players: ['user_3', 'user_4'],
      step: 0
    }
  },
  users: {
    user_1: {
      id: 'user_1',
      isCorrect: true,
      questionNum: 1,
      nextContent: {
        type: 'slide',
        ref: 'slideRef1'
      }
    },
    user_2: {
      id: 'user_2',
      isCorrect: true,
      questionNum: 1,
      nextContent: {
        type: 'slide',
        ref: 'slideRef2'
      }
    },
    user_3: {
      id: 'user_3',
      isCorrect: true,
      questionNum: 1,
      nextContent: {
        type: 'slide',
        ref: 'slideRef3'
      }
    },
    user_4: {
      id: 'user_4',
      isCorrect: true,
      questionNum: 1,
      nextContent: {
        type: 'slide',
        ref: 'slideRef4'
      }
    }
  }
};
