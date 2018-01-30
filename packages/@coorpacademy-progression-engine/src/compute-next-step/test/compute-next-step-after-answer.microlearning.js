// @flow
import test from 'ava';
import filter from 'lodash/fp/filter';
import type {AvailableContent, Engine, EngineOptions, State} from '../../types';
import {computeNextStepAfterAnswer, type PartialAnswerAction} from '..';
import allSlides from './fixtures/slides';
import getSlide from './helpers/get-slide';
import {stateBeforeGettingNextContent} from './fixtures/states';

const engine: Engine = {ref: 'microlearning', version: '1'};
const engineOptions: EngineOptions = {};
const availableContent: AvailableContent = [
  {
    ref: '1.A1',
    slides: filter({chapter_id: '1.A1'}, allSlides),
    rules: null
  }
];

test('should return the success endpoint when user has answered `config.slidesToComplete` number of slides', t => {
  const state: State = Object.freeze({
    ...stateBeforeGettingNextContent,
    nextContent: {
      type: 'slide',
      ref: '1.A1.4'
    },
    slides: ['1.A1.1', '1.A1.2', '1.A1.3', '1.A1.4']
  });
  const currentSlide = getSlide(allSlides, state.nextContent);
  const partialAction: PartialAnswerAction = {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: true
    }
  };

  const result = computeNextStepAfterAnswer(
    engine,
    engineOptions,
    state,
    availableContent,
    currentSlide,
    partialAction
  );
  t.deepEqual(result, {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: true,
      nextContent: {ref: 'successExitNode', type: 'success'},
      instructions: null,
      isCorrect: true
    }
  });
});
