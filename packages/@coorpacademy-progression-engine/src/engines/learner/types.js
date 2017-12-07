// @flow

import type {Content, ViewedResource, Step} from '../../common/types';

export type InitialStateOptions = {
  nextContent: Content,
  livesDisabled: boolean
};

export type State = {
  content?: Content,
  nextContent: Content,
  lives: number,
  livesDisabled?: boolean,
  isCorrect: boolean,
  slides: Array<string>,
  requestedClues: Array<string>,
  viewedResources: Array<ViewedResource>,
  stars: number,
  step: Step,
  remainingLifeRequests: number,
  hasViewedAResourceAtThisStep: boolean
};

export type Config = {
  version: string,
  lives: number,
  livesDisabled: boolean,
  maxTypos: number,
  slidesToComplete: number,
  answerBoundaryLimit: number,
  starsPerAskingClue: number,
  starsPerCorrectAnswer: number,
  starsPerResourceViewed: number,
  remainingLifeRequests: number
};
