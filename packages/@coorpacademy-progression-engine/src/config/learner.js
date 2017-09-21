// @flow
import type {Config} from '../types';

const realConfigurations: Array<Config> = [
  {
    version: '1',
    lives: 3,
    maxTypos: 2,
    slidesToComplete: 4,
    answerBoundaryLimit: 5,
    starsPerAskingClue: -1,
    starsPerCorrectAnswer: 4,
    starsPerResourceViewed: 4
  }
];

const testConfigurations: Array<Config> = [
  {
    version: 'allow_typos_3',
    lives: 3,
    maxTypos: 3,
    slidesToComplete: 8,
    answerBoundaryLimit: 5,
    starsPerAskingClue: -1,
    starsPerCorrectAnswer: 4,
    starsPerResourceViewed: 5
  }
];

const configurations = realConfigurations.concat(
  process.env.NODE_ENV === 'test' ? testConfigurations : []
);

export default {
  configurations,
  defaultConfiguration: configurations[0]
};
