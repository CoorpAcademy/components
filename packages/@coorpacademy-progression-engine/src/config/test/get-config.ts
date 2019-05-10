import test from 'ava';

import {getConfig} from '..';
import {EngineRef} from '../../types';

test('should throw an error if the engine ref is unknown', t => {
  // @ts-ignore: Voluntary bad ref
  t.throws(() => getConfig({ref: 'foobar', version: '1'}), 'Unknown engine foobar');
});

test('should return the configuration with the given version if it exists', t => {
  t.deepEqual(getConfig({ref: EngineRef.MICROLEARNING, version: '1'}), {
    version: '1',
    lives: 1,
    livesDisabled: false,
    maxTypos: 2,
    slidesToComplete: 4,
    answerBoundaryLimit: 5,
    starsPerAskingClue: -1,
    starsPerCorrectAnswer: 4,
    starsPerResourceViewed: 4,
    remainingLifeRequests: 1
  });
  t.deepEqual(getConfig({ref: EngineRef.LEARNER, version: '1'}), {
    version: '1',
    lives: 3,
    livesDisabled: false,
    maxTypos: 2,
    slidesToComplete: 4,
    answerBoundaryLimit: 5,
    starsPerAskingClue: -1,
    starsPerCorrectAnswer: 4,
    starsPerResourceViewed: 4,
    remainingLifeRequests: 1
  });
});

test('should return the default configuration if the engine does not have the given version', t => {
  t.deepEqual(getConfig({ref: EngineRef.MICROLEARNING, version: 'foobar'}), {
    version: '1',
    lives: 1,
    livesDisabled: false,
    maxTypos: 2,
    slidesToComplete: 4,
    answerBoundaryLimit: 5,
    starsPerAskingClue: -1,
    starsPerCorrectAnswer: 4,
    starsPerResourceViewed: 4,
    remainingLifeRequests: 1
  });
  t.deepEqual(getConfig({ref: EngineRef.LEARNER, version: 'foobar'}), {
    version: '1',
    lives: 3,
    livesDisabled: false,
    maxTypos: 2,
    slidesToComplete: 4,
    answerBoundaryLimit: 5,
    starsPerAskingClue: -1,
    starsPerCorrectAnswer: 4,
    starsPerResourceViewed: 4,
    remainingLifeRequests: 1
  });
});
