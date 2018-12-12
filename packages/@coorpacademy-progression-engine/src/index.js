// @flow
import {
  computeNextStepAfterAnswer,
  computeNextStepOnAcceptExtraLife,
  computeNextStepOnRefuseExtraLife
} from './compute-next-step';
import checkAnswer from './check-answer';
import checkAnswerCorrectness from './check-answer-correctness';
import createState from './create-state';
import createProgression from './create-progression';
import {getConfig, getConfigForProgression} from './config';
import ERRORS from './errors';

import type {Action, Config, Content, Progression, State} from './types';

export type {Action, Config, Content, Progression, State};

export {
  checkAnswer,
  checkAnswerCorrectness,
  computeNextStepAfterAnswer,
  computeNextStepOnAcceptExtraLife,
  computeNextStepOnRefuseExtraLife,
  createState,
  createProgression,
  getConfig,
  getConfigForProgression,
  ERRORS
};
