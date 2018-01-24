// @flow
import test from 'ava';
import omit from 'lodash/fp/omit';
import filter from 'lodash/fp/filter';
import type {Engine, EngineOptions, State, Slide} from '../../types';
import computeNextStep from '..';
import allSlides from './fixtures/slides';
import {stateBeforeGettingNextContent} from './fixtures/states';

const engine: Engine = {
  ref: 'learner',
  version: '1'
};
const engineOptions: EngineOptions = {};
const slidePools = [
  {
    chapterId: '1.A1',
    slides: filter({chapter_id: '1.A1'}, allSlides)
  },
  {
    chapterId: '2.A1',
    slides: filter({chapter_id: '2.A1'}, allSlides)
  }
];

const getCurrentSlide = (slides: Array<Slide>, state: State): ?Slide =>
  slides.find(s => s._id === (state.content && state.content.ref));

test('should return a slide from slide pools if chapter rules is undefined or empty', t => {
  const state: State = Object.freeze(stateBeforeGettingNextContent);
  const currentSlide = getCurrentSlide(allSlides, state);
  const availableContent = {slidePools};
  const givenAnswer = {
    currentSlide,
    answer: [],
    godMode: true
  };

  const result = computeNextStep(engine, engineOptions, state, givenAnswer, availableContent);
  t.deepEqual(omit(['nextContent.ref'], result), {
    nextContent: {type: 'slide'},
    instructions: undefined,
    isCorrect: true
  });
  t.regex(result.nextContent.ref, /^1\.A1\.[2-9]+$/);
});

// TODO Add more tests related to adaptive
