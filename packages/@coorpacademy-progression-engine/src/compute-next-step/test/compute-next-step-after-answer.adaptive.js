// @flow
import test from 'ava';
import omit from 'lodash/fp/omit';
import filter from 'lodash/fp/filter';
import type {Engine, EngineOptions, State} from '../../types';
import {computeNextStepAfterAnswer, type PartialAnswerAction} from '..';
import allSlides from './fixtures/slides';
import getSlide from './helpers/get-slide';
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

test('should return a slide from slide pools if chapter rules is undefined or empty', t => {
  const state: State = Object.freeze(stateBeforeGettingNextContent);
  const currentSlide = getSlide(allSlides, state.nextContent);
  const availableContent = {slidePools};
  const partialAction: PartialAnswerAction = {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: true
    }
  };

  const resultAction = computeNextStepAfterAnswer(
    engine,
    engineOptions,
    state,
    availableContent,
    currentSlide,
    partialAction
  );
  t.deepEqual(omit(['payload.nextContent.ref'], resultAction), {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: true,
      nextContent: {type: 'slide'},
      instructions: null,
      isCorrect: true
    }
  });
  t.regex(resultAction.payload.nextContent.ref, /^1\.A1\.[2-9]+$/);
});

// TODO Add more tests related to adaptive
