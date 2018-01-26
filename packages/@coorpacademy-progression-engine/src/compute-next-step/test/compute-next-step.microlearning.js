// @flow
import test from 'ava';
import filter from 'lodash/fp/filter';
import type {Engine, EngineOptions, State, Slide} from '../../types';
import computeNextStep from '..';
import allSlides from './fixtures/slides';
import {successProgressionState} from './fixtures/states';

const engine: Engine = {
  ref: 'microlearning',
  version: '1'
};
const engineOptions: EngineOptions = {};
const slidePools = [
  {
    chapterId: '1.A1',
    slides: filter({chapter_id: '1.A1'}, allSlides)
  }
];

const getCurrentSlide = (slides: Array<Slide>, state: State): ?Slide =>
  slides.find(s => s._id === (state.content && state.content.ref));

test('should return the success endpoint when user has answered `config.slidesToComplete` number of slides', t => {
  const state: State = Object.freeze(successProgressionState);
  const currentSlide = getCurrentSlide(allSlides, state);
  const availableContent = {slidePools};
  const givenAnswer = {
    currentSlide,
    answer: [],
    godMode: true
  };

  const result = computeNextStep(engine, engineOptions, state, givenAnswer, availableContent);
  t.deepEqual(result, {
    nextContent: {ref: 'successExitNode', type: 'success'},
    instructions: undefined,
    isCorrect: true
  });
});
