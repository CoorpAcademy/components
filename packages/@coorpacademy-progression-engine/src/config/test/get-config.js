// @flow
import test from 'ava';
import {getConfig} from '..';

test('should throw an error if the engine ref is unknown', t => {
  t.throws(() => getConfig({ref: 'foobar', version: '1'}), {message: 'Unknown engine foobar'});
});

test('should return the configuration with the given version if it exists', t => {
  t.deepEqual(getConfig({ref: 'microlearning', version: '1'}), {
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
  t.deepEqual(getConfig({ref: 'microlearning', version: '2'}), {
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
  t.deepEqual(getConfig({ref: 'learner', version: '1'}), {
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
  t.deepEqual(getConfig({ref: 'learner', version: '2'}), {
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
});

test('should return the default configuration if the engine does not have the given version', t => {
  t.deepEqual(getConfig({ref: 'microlearning', version: 'foobar'}), {
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
  t.deepEqual(getConfig({ref: 'learner', version: 'foobar'}), {
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
  t.deepEqual(getConfig({ref: 'review', version: 'foobar'}), {
    version: '3',
    lives: 0,
    livesDisabled: true,
    maxTypos: 2,
    slidesToComplete: 5,
    shuffleChoices: true,
    answerBoundaryLimit: 5,
    starsPerAskingClue: 0,
    starsPerCorrectAnswer: 4,
    starsPerResourceViewed: 0,
    remainingLifeRequests: 0
  });
});
