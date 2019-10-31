// @flow
import test from 'ava';
import omit from 'lodash/fp/omit';
import filter from 'lodash/fp/filter';
import {getConfig} from '../../config';
import type {AvailableContent, Config, State} from '../../types';
import allSlides from './fixtures/slides';
import getSlide from './helpers/get-slide';
import {stateBeforeGettingNextContent} from './fixtures/states';
import {computeNextStepAfterAnswer, type PartialAnswerAction} from '..';

const config: Config = getConfig({ref: 'learner', version: '1'});
const availableContent: AvailableContent = [
  {
    ref: '1.A1',
    slides: filter({chapter_id: '1.A1'}, allSlides),
    rules: null
  },
  {
    ref: '2.A1',
    slides: filter({chapter_id: '2.A1'}, allSlides),
    rules: null
  }
];

test('should switch chapters when user has answered `config.slidesToComplete` number of slides of a chapter', t => {
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
  if (!result) {
    throw new Error('action should not be falsy');
  }
  t.deepEqual(omit(['payload.nextContent.ref'], result), {
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
  t.regex(result.payload.nextContent.ref, /^2\.A1\.\d+$/);
});

test('should return the success endpoint when user has answered `config.slidesToComplete` number of slides of every chapter', t => {
  const state: State = Object.freeze({
    ...stateBeforeGettingNextContent,
    nextContent: {
      type: 'slide',
      ref: '2.A1.4'
    },
    slides: ['1.A1.1', '1.A1.2', '1.A1.3', '1.A1.4', '2.A1.1', '2.A1.2', '2.A1.3']
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
