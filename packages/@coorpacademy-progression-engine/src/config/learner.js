// @flow
import {assign} from 'lodash/fp';
import type {Config} from '../types';

const CURRENT_BASE_VERSION = {
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
};

const configurations: Array<Config> = [
  // V1: original engine with 3 live
  assign(CURRENT_BASE_VERSION, {
    version: '1',
    lives: 3
  }),
  // V2: current classic engine with 4 live 🚀
  CURRENT_BASE_VERSION,
  // V3: Extra life (4+1) saint valentin engine
  assign(CURRENT_BASE_VERSION, {
    version: '3',
    lives: 5
  }),
  // V4: Extra life (4+1) and double stars
  assign(CURRENT_BASE_VERSION, {
    version: '4',
    lives: 5,
    starsPerCorrectAnswer: 8
  }),
  // V5: Double stars engine
  assign(CURRENT_BASE_VERSION, {
    version: '5',
    starsPerCorrectAnswer: 8
  })
];

export default {
  configurations,
  defaultConfiguration: CURRENT_BASE_VERSION
};
