// @flow
import test from 'ava';
import type {Progression} from '../../types';
import {getConfigForProgression} from '..';

const createProgression = ({ref, version}: {ref: string, version: string}): Progression => ({
  engine: {ref, version},
  engineOptions: {
    version
  },
  content: {type: 'chapter', ref: '1.A1'},
  actions: []
});

test('should throw an error if the engine ref is unknown', t => {
  t.throws(() => getConfigForProgression(createProgression({ref: 'foobar', version: '1'})), {
    message: 'Unknown engine foobar'
  });
});

test('should return the configuration with the given version if it exists', t => {
  t.deepEqual(getConfigForProgression(createProgression({ref: 'microlearning', version: '1'})), {
    version: '1',
    lives: 1,
    livesDisabled: false,
    maxTypos: 2,
    slidesToComplete: 4,
    shuffleChoices: true,
    answerBoundaryLimit: 5,
    starsPerAskingClue: -1,
    starsPerCorrectAnswer: 4,
    starsPerResourceViewed: 4,
    remainingLifeRequests: 1
  });
  t.deepEqual(getConfigForProgression(createProgression({ref: 'microlearning', version: '2'})), {
    version: '2',
    lives: 1,
    livesDisabled: true,
    maxTypos: 2,
    slidesToComplete: 4,
    shuffleChoices: true,
    answerBoundaryLimit: 5,
    starsPerAskingClue: -1,
    starsPerCorrectAnswer: 4,
    starsPerResourceViewed: 4,
    remainingLifeRequests: 1
  });
  t.deepEqual(getConfigForProgression(createProgression({ref: 'learner', version: '1'})), {
    version: '1',
    lives: 3,
    livesDisabled: false,
    maxTypos: 2,
    slidesToComplete: 4,
    shuffleChoices: true,
    answerBoundaryLimit: 5,
    starsPerAskingClue: -1,
    starsPerCorrectAnswer: 4,
    starsPerResourceViewed: 4,
    remainingLifeRequests: 1
  });
  t.deepEqual(getConfigForProgression(createProgression({ref: 'learner', version: '2'})), {
    version: '2',
    lives: 4,
    livesDisabled: false,
    maxTypos: 2,
    slidesToComplete: 4,
    shuffleChoices: true,
    answerBoundaryLimit: 5,
    starsPerAskingClue: -1,
    starsPerCorrectAnswer: 4,
    starsPerResourceViewed: 4,
    remainingLifeRequests: 1
  });
  t.deepEqual(getConfigForProgression(createProgression({ref: 'external', version: '1'})), {
    version: '1',
    lives: 1,
    livesDisabled: true,
    maxTypos: 0,
    slidesToComplete: 0,
    shuffleChoices: false,
    answerBoundaryLimit: 0,
    starsPerAskingClue: 0,
    starsPerCorrectAnswer: 0,
    starsPerResourceViewed: 0,
    remainingLifeRequests: 0
  });
  t.deepEqual(getConfigForProgression(createProgression({ref: 'review', version: '1'})), {
    version: '1',
    lives: 0,
    livesDisabled: true,
    maxTypos: 2,
    slidesToComplete: 5,
    shuffleChoices: true,
    answerBoundaryLimit: 5,
    starsPerAskingClue: 0,
    starsPerCorrectAnswer: 8,
    starsPerResourceViewed: 0,
    remainingLifeRequests: 0
  });
});

test('should merge the engineOptions values from the progression into the resulting configuration', t => {
  const engineOptions = {
    livesDisabled: true,
    maxTypos: 100,
    version: 'foobar'
  };
  t.deepEqual(
    getConfigForProgression({
      ...createProgression({ref: 'microlearning', version: '1'}),
      engineOptions
    }),
    {
      version: 'foobar',
      lives: 1,
      livesDisabled: true,
      maxTypos: 100,
      slidesToComplete: 4,
      shuffleChoices: true,
      answerBoundaryLimit: 5,
      starsPerAskingClue: -1,
      starsPerCorrectAnswer: 4,
      starsPerResourceViewed: 4,
      remainingLifeRequests: 1
    }
  );
});
