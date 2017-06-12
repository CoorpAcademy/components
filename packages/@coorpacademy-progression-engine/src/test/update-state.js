// @flow
import test from 'ava';
import pick from 'lodash/fp/pick';
import updateState from '../update-state';
import type {AnswerAction, State} from '../types';

const engine = {
  ref: 'microlearning',
  version: '1'
};

test('should initialize state from state without actions', t => {
  const state: State = Object.freeze({
    nextContent: {
      ref: '1.A1.1',
      type: 'slide'
    }
  });

  const newState = updateState(engine, state, []);
  t.deepEqual(newState, {
    isCorrect: false,
    slides: [],
    lives: 1,
    step: {
      current: 0,
      total: 4
    },
    stars: 0,
    content: undefined,
    nextContent: {
      ref: '1.A1.1',
      type: 'slide'
    }
  });
});

test('should update state when answering the first question correctly', t => {
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

  const action: AnswerAction = Object.freeze({
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

  const pickUnchangedFields = pick(['lives']);
  const newState = updateState(engine, state, [action]);

  t.true(
    newState.isCorrect,
    '`isCorrect` should reflect the `isCorrect` field from the action payload'
  );
  t.deepEqual(newState.slides, ['1.A1.1'], 'answered slide should have been stored in `slides`');
  t.deepEqual(newState.step, {current: 1, total: 4}, 'step progression is wrong');
  t.deepEqual(newState.stars, 4, 'step progression is wrong');
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
    pickUnchangedFields(newState),
    pickUnchangedFields(state),
    'Some fields that should not have been touched have been modified'
  );
});

test('should update state when answering the another question correctly', t => {
  const state: State = Object.freeze({
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
    isCorrect: true,
    stars: 4,
    step: {
      current: 1,
      total: 4
    }
  });

  const action: AnswerAction = Object.freeze({
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
      isCorrect: true
    }
  });

  const pickUnchangedFields = pick(['lives']);
  const newState = updateState(engine, state, [action]);

  t.true(
    newState.isCorrect,
    '`isCorrect` should reflect the `isCorrect` field from the action payload'
  );
  t.deepEqual(newState.slides, ['1.A1.4', '1.A1.2'], 'answered slide should have been stored in `slides`');
  t.deepEqual(newState.step, {current: 2, total: 4}, 'step progression is wrong');
  t.deepEqual(newState.stars, 8, 'step progression is wrong');
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
    pickUnchangedFields(newState),
    pickUnchangedFields(state),
    'Some fields that should not have been touched have been modified'
  );
});

test('should update state when answering a question incorrectly', t => {
  const state: State = Object.freeze({
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
    isCorrect: true,
    stars: 4,
    step: {
      current: 1,
      total: 4
    }
  });

  const action: AnswerAction = Object.freeze({
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

  const pickUnchangedFields = pick(['stars']);
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
    pickUnchangedFields(newState),
    pickUnchangedFields(state),
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

  const action: AnswerAction = Object.freeze({
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
