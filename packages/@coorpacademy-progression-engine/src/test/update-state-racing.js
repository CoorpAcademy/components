// @flow
import test from 'ava';
import omit from 'lodash/fp/omit';
import pick from 'lodash/fp/pick';
import get from 'lodash/fp/get';
import updateState from '../update-state-racing';
import {getConfig} from '../config';
import {initialState} from './fixtures/racing';

const engine = {
  ref: 'racing',
  version: '1'
};

const config = (getConfig(engine): Config);

const user1Answer: AnswerAction = isCorrect =>
  Object.freeze({
    type: 'answer',
    authors: ['user_1'],
    payload: {
      answer: ['foo'],
      content: {
        ref: 'slideRef1',
        type: 'slide'
      },
      nextContent: {
        ref: 'slideRef2',
        type: 'slide'
      },
      isCorrect,
      instructions: null
    }
  });

const user2Answer: AnswerAction = isCorrect =>
  Object.freeze({
    type: 'answer',
    authors: ['user_2'],
    payload: {
      answer: ['foo'],
      content: {
        ref: 'slideRef2',
        type: 'slide'
      },
      nextContent: {
        ref: 'slideRef3',
        type: 'slide'
      },
      isCorrect,
      instructions: null
    }
  });

test('should return a valid state when there are no actions and state is empty', t => {
  const state = updateState(getConfig(engine), {}, []);
  t.deepEqual(state.users, {});
  t.deepEqual(state.teams, {});
});

test('should update user_1 state when answering the first question correctly', t => {
  const state: State = Object.freeze(initialState);
  const newState = updateState(config, state, [user1Answer(true)]);

  t.deepEqual(newState.users.user_1, {
    id: 'user_1',
    questionNum: 2,
    content: {ref: 'slideRef1', type: 'slide'},
    allAnswers: [
      {
        slideRef: 'slideRef1',
        isCorrect: true,
        answer: ['foo']
      }
    ],
    isCorrect: true,
    nextContent: {ref: 'slideRef2', type: 'slide'},
    slides: ['slideRef1']
  });

  t.is(newState.teams['0'].step, 1);
});

test('should update both user_1 and user_2 state when answering the first question correctly', t => {
  const state: State = Object.freeze(initialState);
  const newState = updateState(config, state, [user1Answer(true), user2Answer(true)]);

  t.deepEqual(newState.users.user_2, {
    id: 'user_2',
    questionNum: 2,
    content: {ref: 'slideRef2', type: 'slide'},
    allAnswers: [
      {
        slideRef: 'slideRef2',
        isCorrect: true,
        answer: ['foo']
      }
    ],
    isCorrect: true,
    nextContent: {ref: 'slideRef3', type: 'slide'},
    slides: ['slideRef2']
  });

  t.is(newState.teams['0'].step, 2);
});

test('should decrease 1 step when a user has a wrong answer', t => {
  const state: State = Object.freeze(initialState);
  const newState = updateState(config, state, [user1Answer(true), user2Answer(false)]);

  t.deepEqual(newState.users.user_2, {
    id: 'user_2',
    questionNum: 2,
    content: {ref: 'slideRef2', type: 'slide'},
    allAnswers: [
      {
        slideRef: 'slideRef2',
        isCorrect: false,
        answer: ['foo']
      }
    ],
    isCorrect: false,
    nextContent: {ref: 'slideRef3', type: 'slide'},
    slides: ['slideRef2']
  });

  t.is(newState.teams['0'].step, 0);
});

test('should not decrease steps below 0', t => {
  const state: State = Object.freeze(initialState);
  const newState = updateState(config, state, [user2Answer(false)]);

  t.deepEqual(newState.users.user_2, {
    id: 'user_2',
    questionNum: 2,
    content: {ref: 'slideRef2', type: 'slide'},
    allAnswers: [
      {
        slideRef: 'slideRef2',
        isCorrect: false,
        answer: ['foo']
      }
    ],
    isCorrect: false,
    nextContent: {ref: 'slideRef3', type: 'slide'},
    slides: ['slideRef2']
  });

  t.is(newState.teams['0'].step, 0);
});
