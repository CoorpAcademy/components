// @flow
import type {Config} from '../types';

const configurations: Array<Config> = [
  {
    version: '1',
    lives: 1,
    livesDisabled: true,
    maxTypos: 0,
    slidesToComplete: 0,
    answerBoundaryLimit: 0,
    starsPerAskingClue: 0,
    starsPerCorrectAnswer: 0,
    starsPerResourceViewed: 0,
    remainingLifeRequests: 0
  }
];

export default {
  configurations,
  defaultConfiguration: configurations[0]
};
