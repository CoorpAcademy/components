import {Config} from '../types';

const configurations: Array<Config> = [
  {
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
  }
];

export default {
  configurations,
  defaultConfiguration: configurations[0]
};
