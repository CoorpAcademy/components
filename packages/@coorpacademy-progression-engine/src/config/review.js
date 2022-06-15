// @flow
import type {Config} from '../types';

const configurations: Array<Config> = [
  {
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
  }
];

export default {
  configurations,
  defaultConfiguration: configurations[0]
};
