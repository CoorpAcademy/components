// @flow
import test from 'ava';
import omit from 'lodash/fp/omit';
import updateState from '../update-state';
import type {Action, State} from '../types';

const engine = {
  ref: 'microlearning',
  version: '1'
};

test('should update state when answering a question correctly', t => {
  const state: State = Object.freeze({
    content: undefined,
    nextContent: {
      ref: '1.A1.1',
      type: 'slide'
    },
    lives: 1,
    slides: [],
    isCorrect: true,
    step: {
      current: 0,
      total: 4
    }
  });

  const action: Action = Object.freeze({
    type: 'answer',
    payload: {
      content: {
        ref: '1.A1.1',
        type: 'slide'
      },
      nextContent: {
        ref: '1.A1.2',
        type: 'slide'
      },
      isCorrect: true
    }
  });

  const omitChangedFields = omit(['slides', 'isCorrect', 'content', 'nextContent', 'step']);
  const newState = updateState(engine, state, [action]);

  t.true(
    newState.isCorrect,
    '`isCorrect` should reflect the `isCorrect` field from the action payload'
  );
  t.deepEqual(newState.slides, ['1.A1.1'], 'answered slide should have been stored in `slides`');
  t.deepEqual(newState.step, {current: 1, total: 4}, 'step progression is wrong');
  t.deepEqual(
    newState.content,
    state.nextContent,
    '`content` should be updated to be the previous `nextContent`'
  );
  t.deepEqual(
    newState.nextContent,
    action.payload.nextContent,
    "`nextContent` should be updated to be the action's `nextContent`"
  );
  t.deepEqual(
    omitChangedFields(newState),
    omitChangedFields(state),
    'Some fields that should not have been touched have been modified'
  );
});

test('should update state when answering a question incorrectly', t => {
  const state: State = Object.freeze({
    content: undefined,
    nextContent: {
      ref: '1.A1.2',
      type: 'slide'
    },
    lives: 1,
    slides: ['1.A1.4'],
    isCorrect: true,
    step: {
      current: 1,
      total: 4
    }
  });

  const action: Action = Object.freeze({
    type: 'answer',
    payload: {
      content: {
        ref: '1.A1.2',
        type: 'slide'
      },
      nextContent: {
        ref: '1.A1.1',
        type: 'slide'
      },
      isCorrect: false
    }
  });

  const omitChangedFields = omit([
    'lives',
    'slides',
    'isCorrect',
    'content',
    'nextContent',
    'step'
  ]);
  const newState = updateState(engine, state, [action]);

  t.true(newState.lives === 0, '`lives` should have been decremented');
  t.false(
    newState.isCorrect,
    '`isCorrect` should reflect the `isCorrect` field from the action payload'
  );
  t.deepEqual(newState.step, {current: 2, total: 4}, 'step progression is wrong');
  t.deepEqual(
    newState.slides,
    ['1.A1.4', '1.A1.2'],
    'answered slide should have been stored in `slides`'
  );
  t.deepEqual(
    newState.content,
    state.nextContent,
    '`content` should be updated to be the previous `nextContent`'
  );
  t.deepEqual(
    newState.nextContent,
    action.payload.nextContent,
    "`nextContent` should be updated to be the action's `nextContent`"
  );
  t.deepEqual(
    omitChangedFields(newState),
    omitChangedFields(state),
    'Some fields that should not have been touched have been modified'
  );
});

test("should throw if the state's nextContent is not the same as the action's content", t => {
  const state: State = Object.freeze({
    content: undefined,
    nextContent: {
      ref: '1.A1.2',
      type: 'slide'
    },
    lives: 1,
    slides: ['1.A1.4'],
    isCorrect: true,
    step: {
      current: 1,
      total: 4
    }
  });

  const action: Action = Object.freeze({
    type: 'answer',
    payload: {
      content: {
        ref: '1.A1.200',
        type: 'slide'
      },
      nextContent: {
        ref: '1.A1.1',
        type: 'slide'
      },
      isCorrect: true
    }
  });

  t.throws(
    () => updateState(engine, state, [action]),
    'The content of the progression state does not match the content of the given answer'
  );
});
