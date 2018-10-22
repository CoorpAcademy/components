// @flow
import test from 'ava';
import {getConfigForProgression} from '..';
import type {Progression} from '../../types';

const progression: Progression = {
  engine: {ref: 'microlearning', version: '1'},
  engineOptions: {},
  content: {type: 'chapter', ref: '1.A1'},
  actions: []
};

test('should throw an error if the engine ref is unknown', t => {
  t.throws(
    () => getConfigForProgression({...progression, engine: {ref: 'foobar', version: '1'}}),
    'Unknown engine foobar'
  );
});

test('should return the configuration with the given version if it exists', t => {
  t.deepEqual(getConfigForProgression(progression), {
    version: '1',
    lives: 1,
    livesDisabled: false,
    overallRandomSlides: false,
    maxTypos: 2,
    slidesToComplete: 4,
    answerBoundaryLimit: 5,
    starsPerAskingClue: -1,
    starsPerCorrectAnswer: 4,
    starsPerResourceViewed: 4,
    remainingLifeRequests: 1
  });
  t.deepEqual(getConfigForProgression({...progression, engine: {ref: 'learner', version: '1'}}), {
    version: '1',
    lives: 3,
    livesDisabled: false,
    overallRandomSlides: false,
    maxTypos: 2,
    slidesToComplete: 4,
    answerBoundaryLimit: 5,
    starsPerAskingClue: -1,
    starsPerCorrectAnswer: 4,
    starsPerResourceViewed: 4,
    remainingLifeRequests: 1
  });
});

test('should merge the engineOptions values from the progression into the resulting configuration', t => {
  const engineOptions = {livesDisabled: true, maxTypos: 100};
  t.deepEqual(getConfigForProgression({...progression, engineOptions}), {
    version: '1',
    lives: 1,
    livesDisabled: true,
    overallRandomSlides: false,
    maxTypos: 100,
    slidesToComplete: 4,
    answerBoundaryLimit: 5,
    starsPerAskingClue: -1,
    starsPerCorrectAnswer: 4,
    starsPerResourceViewed: 4,
    remainingLifeRequests: 1
  });
});
