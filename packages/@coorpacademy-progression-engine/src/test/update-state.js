// @flow
import test from 'ava';
import omit from 'lodash/fp/omit';
import pick from 'lodash/fp/pick';
import updateState from '../update-state';
import createProgression from '../create-progression';
import type {
  AnswerAction,
  AskClueAction,
  Content,
  State,
  ChapterResourceViewedAction,
  UseJokerAction
} from '../types';
import {
  stateForFirstSlide,
  stateForSecondSlide,
  failProgressionState,
  successProgressionState,
  usedJokerProgressionState
} from './fixtures/states';

const engine = {
  ref: 'microlearning',
  version: '1'
};

function chapterResourceViewedAction(
  chapterRef: string,
  lessonRef: string
): ChapterResourceViewedAction {
  return Object.freeze({
    type: 'resource',
    payload: {
      resource: {
        ref: lessonRef,
        type: 'video',
        version: '1'
      },
      chapter: {
        ref: chapterRef,
        type: 'chapter',
        version: '1'
      }
    }
  });
}

test('should return a valid state when there are no actions', t => {
  const content: Content = Object.freeze({
    type: 'chapter',
    ref: '1.A1',
    version: '1.0.0'
  });

  const initialContent: Content = Object.freeze({
    type: 'slide',
    ref: '1.A1.1'
  });
  const progression = createProgression(engine, content, initialContent);

  const state = updateState(engine, progression.state, []);

  t.is(state.lives, 1);
  t.is(state.stars, 0);
  t.true(state.isCorrect);
  t.is(state.content, undefined);
  t.deepEqual(state.nextContent, initialContent);
  t.deepEqual(state.slides, []);
  t.deepEqual(state.requestedClues, []);
  t.deepEqual(state.viewedResources, []);
  t.deepEqual(state.step, {current: 1, total: 4});
});

test('should return a valid state when there are no actions and state is empty', t => {
  const initialContent: Content = Object.freeze({
    type: 'slide',
    ref: '1.A1.1'
  });

  // $FlowFixMe
  const state = updateState(engine, {nextContent: initialContent}, []);

  t.is(state.lives, 1);
  t.is(state.stars, 0);
  t.true(state.isCorrect);
  t.is(state.content, undefined);
  t.deepEqual(state.nextContent, initialContent);
  t.deepEqual(state.slides, []);
  t.deepEqual(state.requestedClues, []);
  t.deepEqual(state.viewedResources, []);
  t.deepEqual(state.step, {current: 1, total: 4});
});

test('should update state when answering the first question correctly', t => {
  const state: State = Object.freeze(stateForFirstSlide);

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

  const pickUnchangedFields = pick(['lives', 'requestedClues', 'viewedResources']);
  const newState = updateState(engine, state, [action]);

  t.true(
    newState.isCorrect,
    '`isCorrect` should reflect the `isCorrect` field from the action payload'
  );
  t.deepEqual(newState.slides, ['1.A1.1'], 'answered slide should have been stored in `slides`');
  t.deepEqual(newState.step, {current: 2, total: 4}, 'step progression is wrong');
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
  const state: State = Object.freeze(stateForSecondSlide);

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

  const pickUnchangedFields = pick(['lives', 'requestedClues', 'viewedResources']);
  const newState = updateState(engine, state, [action]);

  t.true(
    newState.isCorrect,
    '`isCorrect` should reflect the `isCorrect` field from the action payload'
  );
  t.deepEqual(
    newState.slides,
    ['1.A1.4', '1.A1.2'],
    'answered slide should have been stored in `slides`'
  );
  t.deepEqual(newState.step, {current: 3, total: 4}, 'step progression is wrong');
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
  const state: State = Object.freeze(stateForSecondSlide);

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

  const pickUnchangedFields = pick(['stars', 'requestedClues', 'viewedResources']);
  const newState = updateState(engine, state, [action]);

  t.true(newState.lives === 0, '`lives` should have been decremented');
  t.false(
    newState.isCorrect,
    '`isCorrect` should reflect the `isCorrect` field from the action payload'
  );
  t.deepEqual(newState.step, {current: 3, total: 4}, 'step progression is wrong');
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

test('should update state when asking for a clue', t => {
  const state: State = Object.freeze(stateForSecondSlide);

  const action: AskClueAction = Object.freeze({
    type: 'clue',
    payload: {
      content: {
        ref: '1.A1.2',
        type: 'slide'
      }
    }
  });

  const pickUnchangedFields = pick([
    'content',
    'nextContent',
    'lives',
    'slides',
    'isCorrect',
    'step'
  ]);
  const newState = updateState(engine, state, [action]);

  t.is(newState.stars, 3);
  t.deepEqual(newState.requestedClues, ['1.A1.2']);
  t.deepEqual(
    pickUnchangedFields(newState),
    pickUnchangedFields(state),
    'Some fields that should not have been touched have been modified'
  );
});

test('should update stars once when actions has several AskClueAction for the same content', t => {
  const state: State = Object.freeze(stateForSecondSlide);

  const action: AskClueAction = Object.freeze({
    type: 'clue',
    payload: {
      content: {
        ref: '1.A1.2',
        type: 'slide'
      }
    }
  });

  const omitChangedFields = omit(['requestedClues', 'stars', 'previousLives']);
  const newState = updateState(engine, state, [action, action]);

  t.is(newState.stars, 3);
  t.deepEqual(newState.requestedClues, ['1.A1.2']);
  t.deepEqual(
    omitChangedFields(newState),
    omitChangedFields(state),
    'Some fields that should not have been touched have been modified'
  );
});

test('should update stars after viewing a resource', t => {
  const state: State = Object.freeze(stateForFirstSlide);

  const omitChangedFields = omit(['viewedResources', 'stars', 'previousLives']);
  const newState = updateState(engine, state, [chapterResourceViewedAction('1.A1', 'lesson_1')]);

  t.is(newState.stars, 4);
  t.deepEqual(newState.viewedResources, [{type: 'chapter', ref: '1.A1', resources: ['lesson_1']}]);
  t.deepEqual(
    omitChangedFields(newState),
    omitChangedFields(state),
    'Some fields that should not have been touched have been modified'
  );
});

test('should update stars after viewing a resource (with different number of stars)', t => {
  const state: State = Object.freeze(stateForFirstSlide);

  const engineWithDifferentStars = {
    ref: 'microlearning',
    version: 'allow_typos_3'
  };

  const omitChangedFields = omit(['viewedResources', 'stars', 'previousLives']);
  const newState = updateState(engineWithDifferentStars, state, [
    chapterResourceViewedAction('1.A1', 'lesson_1')
  ]);

  t.is(newState.stars, 5);
  t.deepEqual(newState.viewedResources, [{type: 'chapter', ref: '1.A1', resources: ['lesson_1']}]);
  t.deepEqual(
    omitChangedFields(newState),
    omitChangedFields(state),
    'Some fields that should not have been touched have been modified'
  );
});

test('should only count stars for viewing a resource once for every chapter even if there are multiple resource viewing actions', t => {
  const state: State = Object.freeze(stateForFirstSlide);

  const omitChangedFields = omit(['viewedResources', 'stars', 'previousLives']);
  const newState = updateState(engine, state, [
    chapterResourceViewedAction('1.A1', 'lesson_1'),
    chapterResourceViewedAction('1.A1', 'lesson_2'),
    chapterResourceViewedAction('1.A1', 'lesson_1')
  ]);

  t.is(newState.stars, 4);
  t.deepEqual(newState.viewedResources, [
    {type: 'chapter', ref: '1.A1', resources: ['lesson_1', 'lesson_2']}
  ]);
  t.deepEqual(
    omitChangedFields(newState),
    omitChangedFields(state),
    'Some fields that should not have been touched have been modified'
  );
});

test('should count stars for viewing resources multiple times as long as they are for different chapters', t => {
  const state: State = Object.freeze(stateForFirstSlide);

  const omitChangedFields = omit(['viewedResources', 'stars', 'previousLives']);
  const newState = updateState(engine, state, [
    chapterResourceViewedAction('1.A1', 'lesson_1'),
    chapterResourceViewedAction('1.A1', 'lesson_1'),
    chapterResourceViewedAction('1.A2', 'lesson_1')
  ]);

  t.is(newState.stars, 8);
  t.deepEqual(newState.viewedResources, [
    {type: 'chapter', ref: '1.A1', resources: ['lesson_1']},
    {type: 'chapter', ref: '1.A2', resources: ['lesson_1']}
  ]);
  t.deepEqual(
    omitChangedFields(newState),
    omitChangedFields(state),
    'Some fields that should not have been touched have been modified'
  );
});

test("should throw if the state's nextContent is not the same as the action's content", t => {
  const state: State = Object.freeze(stateForSecondSlide);

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

test('should add one life when using joker', t => {
  const state: State = Object.freeze(failProgressionState);
  const action: UseJokerAction = Object.freeze({type: 'joker'});
  const newState = updateState(engine, state, [action]);

  t.is(newState.lives, 1);
  t.is(newState.usedJoker, true);
});

test('should not change life when trying to use joker and life > 0', t => {
  const state: State = Object.freeze(successProgressionState);
  const action: UseJokerAction = Object.freeze({type: 'joker'});
  const newState = updateState(engine, state, [action]);

  t.is(newState.lives, 1);
  t.is(newState.usedJoker, false);
});

test('should not change life when trying to use joker another time', t => {
  const state: State = Object.freeze(usedJokerProgressionState);
  const action: UseJokerAction = Object.freeze({type: 'joker'});
  const newState = updateState(engine, state, [action]);

  t.is(newState.lives, 0);
  t.is(newState.usedJoker, true);
});
