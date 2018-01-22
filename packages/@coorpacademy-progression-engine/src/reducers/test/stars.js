// @flow
import test from 'ava';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import getConfig from '../../config';
import stars from '../stars';
import {answerAction, askClueAction, resourceAction} from './fixtures/actions';
import {microlearning} from './fixtures/engines';
import {stateForSecondSlide} from './fixtures/states';

const config = getConfig(microlearning);

test('should return updated stars when action type is answer with isCorrect true', t => {
  const action = set('payload.isCorrect', true, answerAction);
  const result = stars(config)(0, action, stateForSecondSlide);
  t.is(result, 4);
});

test('should not change stars when action has instructions and its type is answer with isCorrect true', t => {
  const action = pipe(
    set('payload.isCorrect', true),
    set('payload.instructions', [
      {
        value: 1,
        type: 'add',
        field: 'A'
      }
    ])
  )(answerAction);
  const result = stars(config)(0, action, stateForSecondSlide);

  t.is(result, 0);
});

test('should not update stars when action type is answer with isCorrect false', t => {
  const result = stars(config)(0, answerAction, stateForSecondSlide);
  t.is(result, 0);
});

test('should return updated stars when action type is clue and slide is not in state', t => {
  const result = stars(config)(5, askClueAction, stateForSecondSlide);
  t.is(result, 4);
});

test('should not update stars when action type is clue and slide is already in state', t => {
  const state = set('requestedClues', '1.A1.2', stateForSecondSlide);
  const result = stars(config)(5, askClueAction, state);
  t.is(result, 5);
});

test('should return updated stars when action type is resource and content ref is not in state', t => {
  const result = stars(config)(5, resourceAction, stateForSecondSlide);
  t.is(result, 9);
});

test('should not update stars when action type is resource and slide is already in state', t => {
  const state = set('viewedResources', [{ref: '1.A1', type: 'chapter'}], stateForSecondSlide);
  const result = stars(config)(5, resourceAction, state);
  t.is(result, 5);
});
