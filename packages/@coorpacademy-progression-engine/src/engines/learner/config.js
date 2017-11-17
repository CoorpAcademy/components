// @flow
import type {Config} from '../types';

const realConfigurations: Array<Config> = [
  {
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
  }
];

const testConfigurations: Array<Config> = [
  {
    version: 'allow_typos_3',
    lives: 3,
    livesDisabled: false,
    maxTypos: 3,
    slidesToComplete: 8,
    answerBoundaryLimit: 5,
    starsPerAskingClue: -1,
    starsPerCorrectAnswer: 4,
    starsPerResourceViewed: 5,
    remainingLifeRequests: 1
  },
  {
    version: 'livesDisabled',
    lives: 3,
    livesDisabled: true,
    maxTypos: 2,
    slidesToComplete: 4,
    answerBoundaryLimit: 5,
    starsPerAskingClue: -1,
    starsPerCorrectAnswer: 4,
    starsPerResourceViewed: 4,
    remainingLifeRequests: 1
  }
];

const configurations = realConfigurations.concat(
  process.env.NODE_ENV === 'test' ? testConfigurations : []
);

export default {
  configurations,
  defaultConfiguration: configurations[0]
};
