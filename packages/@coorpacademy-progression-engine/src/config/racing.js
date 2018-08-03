// @flow
import type {RacingConfig} from '../types';

const configurations: Array<RacingConfig> = [
  {
    version: '1',
    lives: 999999,
    livesDisabled: true,
    infiniteSlides: true,
    maxTypos: 2,
    slidesToComplete: 999999,
    answerBoundaryLimit: 5,
    starsPerAskingClue: 0,
    starsPerCorrectAnswer: 0,
    starsPerResourceViewed: 0,
    remainingLifeRequests: 0,
    goal: 25
  }
];

export default {
  configurations,
  defaultConfiguration: configurations[0]
};
