// @flow
import test from 'ava';
import filter from 'lodash/fp/filter';
import get from 'lodash/fp/get';
import merge from 'lodash/fp/merge';
import pipe from 'lodash/fp/pipe';
import find from 'lodash/fp/find';
import omit from 'lodash/fp/omit';
import type {State, Content} from '../../types';
import computeNextStep from '..';
import allSlides from './fixtures/slides';
import {stateBeforeGettingNextContent} from './fixtures/states';

const engine = {
  ref: 'microlearning',
  version: '1'
};

const prioritySlides = pipe(
  filter({chapter_id: '1.A1'}),
  merge([{position: 0}, {position: 0}, {position: 0}, {position: 1}, {position: 0}])
)(allSlides);

const slides = [
  {
    chapterId: '1.A1',
    slides: prioritySlides
  }
];

test('should return the slide with higher priority from slides', t => {
  const state: State = Object.freeze(stateBeforeGettingNextContent);

  const nextStep: Content = computeNextStep(engine, slides, state);

  t.is(nextStep.ref, pipe(find({position: 1}), get('_id'))(prioritySlides));

  const nextState: State = {
    ...state,
    content: nextStep,
    slides: [...state.slides, nextStep.ref]
  };

  const nextNextStep = computeNextStep(engine, slides, nextState);

  t.is(find({_id: nextNextStep.ref}, prioritySlides).position, 0);
});

test('should return first slide pool if no slides in state', t => {
  const state: State = omit(['slides'], stateBeforeGettingNextContent);

  const nextStep = computeNextStep(engine, slides, state);

  t.is(nextStep.ref, pipe(find({position: 1}), get('_id'))(prioritySlides));

  const nextState = {
    ...state,
    content: nextStep,
    slides: [nextStep.ref]
  };

  const nextNextStep = computeNextStep(engine, slides, nextState);

  t.is(find({_id: nextNextStep.ref}, prioritySlides).position, 0);
});
