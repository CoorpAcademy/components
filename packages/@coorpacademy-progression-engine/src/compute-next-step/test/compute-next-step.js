// @flow
import test from 'ava';
import filter from 'lodash/fp/filter';
import assign from 'lodash/fp/assign';
import pipe from 'lodash/fp/pipe';
import find from 'lodash/fp/find';
import omit from 'lodash/fp/omit';
import matches from 'lodash/fp/matches';
import type {State, Content, Slide} from '../../types';
import computeNextStep from '..';
import allSlides from './fixtures/slides';
import {stateBeforeGettingNextContent} from './fixtures/states';

const engine = {
  ref: 'microlearning',
  version: '1'
};

const merge = arr2 => (arr: Array<Slide>): Array<Slide> => {
  return arr.map((v, i): Slide => {
    return assign(v, arr2[i]);
  });
};

const prioritySlides: Array<Slide> = pipe(
  filter({chapter_id: '1.A1'}),
  merge([{position: 0}, {position: 0}, {position: 0}, {position: 1}, {position: 0}])
)(allSlides);

const slides = [
  {
    chapterId: '1.A1',
    slides: prioritySlides
  }
];

const hasHighPriority: Slide => boolean = matches({position: 1});
const findHigherPrioritySlide: (Array<Slide>) => ?Slide = find(hasHighPriority);
const getId = (slide: ?Slide) => {
  if (slide) return slide._id;
  return;
};
const tryfindHigherPrioritySlideId = pipe(findHigherPrioritySlide, getId);

test('should return the slide with higher priority from slides', t => {
  const state: State = Object.freeze(stateBeforeGettingNextContent);

  const nextStep: Content = computeNextStep(engine, slides, state);

  t.is(nextStep.ref, tryfindHigherPrioritySlideId(prioritySlides));

  const nextState: State = {
    ...state,
    content: nextStep,
    slides: [...state.slides, nextStep.ref]
  };

  const nextNextStep = computeNextStep(engine, slides, nextState);

  t.is((find({_id: nextNextStep.ref}, prioritySlides) || {}).position, 0);
});

test('should return first slide pool if no slides in state', t => {
  const state: State = omit(['slides'], stateBeforeGettingNextContent);

  const nextStep = computeNextStep(engine, slides, state);

  t.is(nextStep.ref, tryfindHigherPrioritySlideId(prioritySlides));

  const nextState = {
    ...state,
    content: nextStep,
    slides: [nextStep.ref]
  };

  const nextNextStep = computeNextStep(engine, slides, nextState);

  t.is((find({_id: nextNextStep.ref}, prioritySlides) || {}).position, 0);
});
