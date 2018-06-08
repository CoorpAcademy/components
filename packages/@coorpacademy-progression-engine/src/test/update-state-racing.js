// @flow
import test from 'ava';
import isEqual from 'lodash/fp/isEqual';
import updateState from '../update-state-racing';
import {getConfig} from '../config';
import {initialState} from './fixtures/racing';
import type {AnswerAction, Config, RacingState} from '../types';

const engine = {
  ref: 'racing',
  version: '1'
};

const config = (getConfig(engine): Config);

const user1Answer = (isCorrect): AnswerAction =>
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
      godMode: null,
      instructions: null
    }
  });

const user2Answer = (isCorrect): AnswerAction =>
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
      godMode: null,
      instructions: null
    }
  });

test('should throw an error when there are no actions and state is empty', t => {
  t.throws(
    // $FlowFixMe
    () => updateState(getConfig(engine), {}, []),
    'racing progression must have at least one action: racing-setup'
  );
});

test('should update user_1 state when answering the first question correctly', t => {
  const state: RacingState = Object.freeze(initialState);
  const newState = updateState(config, state, [user1Answer(true)]);

  t.deepEqual(newState.users.user_1, {
    id: 'user_1',
    team: 0,
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

  t.is(isEqual(newState.teams['0'].tower, ['placed', 'placed']), true);
});

test('should update both user_1 and user_2 state when answering the first question correctly', t => {
  const state: RacingState = Object.freeze(initialState);
  const newState = updateState(config, state, [user1Answer(true), user2Answer(true)]);

  t.deepEqual(newState.users.user_2, {
    id: 'user_2',
    team: 0,
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

  t.is(isEqual(newState.teams['0'].tower, ['placed', 'placed', 'placed']), true);
});

test('should decrease 1 step when a user has a wrong answer', t => {
  const state: RacingState = Object.freeze(initialState);
  const newState = updateState(config, state, [user1Answer(true), user2Answer(false)]);

  t.deepEqual(newState.users.user_2, {
    id: 'user_2',
    team: 0,
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

  t.is(isEqual(newState.teams['0'].tower, ['placed', 'removed']), true);
});

test('should not decrease steps below 0', t => {
  const state: RacingState = Object.freeze(initialState);
  const newState = updateState(config, state, [user2Answer(false)]);

  t.deepEqual(newState.users.user_2, {
    id: 'user_2',
    team: 0,
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

  t.is(isEqual(newState.teams['0'].tower, ['removed']), true);
});
