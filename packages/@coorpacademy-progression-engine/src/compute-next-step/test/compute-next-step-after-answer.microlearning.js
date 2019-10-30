// @flow
import test from 'ava';
import filter from 'lodash/fp/filter';
import {getConfig} from '../../config';
import type {AvailableContent, Config, State} from '../../types';
import allSlides from './fixtures/slides';
import getSlide from './helpers/get-slide';
import {stateBeforeGettingNextContent} from './fixtures/states';
import {computeNextStepAfterAnswer, type PartialAnswerAction} from '..';

const config: Config = getConfig({ref: 'microlearning', version: '1'});
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
    slides: ['1.A1.1', '1.A1.2', '1.A1.3']
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
    config,
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
