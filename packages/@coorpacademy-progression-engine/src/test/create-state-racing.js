// @flow
import test from 'ava';
import createState from '../create-state';
import type {Progression} from '../types';

const progression: Progression = {
  engine: {
    ref: 'racing',
    version: '1'
  },
  engineOptions: {
    goal: 18
  },
  content: {
    type: 'chapter',
    ref: '1.A1'
  },
  actions: [
    {
      type: 'racing-setup',
      authors: ['user_1', 'user_2', 'user_3', 'user_4'],
      payload: {
        goal: 20,
        teams: {
          '0': {players: ['user_1', 'user_2'], step: 0},
          '1': {players: ['user_3', 'user_4'], step: 0}
        },
        users: {
          user_1: {
            id: 'user_1',
            isCorrect: true,
            questionNum: 1,
            slides: [],
            allAnswers: [],
            nextContent: {type: 'slide', ref: '1.A1.1'},
            team: 0
          },
          user_2: {
            id: 'user_2',
            isCorrect: true,
            questionNum: 1,
            slides: [],
            allAnswers: [],
            nextContent: {type: 'slide', ref: '1.A1.2'},
            team: 0
          },
          user_3: {
            id: 'user_3',
            isCorrect: true,
            questionNum: 1,
            slides: [],
            allAnswers: [],
            nextContent: {type: 'slide', ref: '1.A1.3'},
            team: 1
          },
          user_4: {
            id: 'user_4',
            isCorrect: true,
            questionNum: 1,
            slides: [],
            allAnswers: [],
            nextContent: {type: 'slide', ref: '1.A1.4'},
            team: 1
          }
        }
      }
    }
  ]
};

test('should create a state from a racing progression just created', t => {
  const state = createState(progression);
  t.deepEqual(state, {
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
        isCorrect: true,
        questionNum: 1,
        nextContent: {
          type: 'slide',
          ref: '1.A1.1'
        },
        content: undefined,
        slides: [],
        allAnswers: []
      },
      user_2: {
        isCorrect: true,
        questionNum: 1,
        nextContent: {
          type: 'slide',
          ref: '1.A1.2'
        },
        content: undefined,
        slides: [],
        allAnswers: []
      },
      user_3: {
        isCorrect: true,
        questionNum: 1,
        nextContent: {
          type: 'slide',
          ref: '1.A1.3'
        },
        content: undefined,
        slides: [],
        allAnswers: []
      },
      user_4: {
        isCorrect: true,
        questionNum: 1,
        nextContent: {
          type: 'slide',
          ref: '1.A1.4'
        },
        content: undefined,
        slides: [],
        allAnswers: []
      }
    }
  });
});
