// @flow
import {
  computeNextStepAfterAnswer,
  computeNextStepAfterRacingAnswer,
  computeNextStepOnAcceptExtraLife,
  computeNextStepOnRefuseExtraLife
} from './compute-next-step';
import checkAnswer from './check-answer';
import checkAnswerCorrectness from './check-answer-correctness';
import createState from './create-state';
import createProgression, {createRacing} from './create-progression';
import {getConfig, getConfigForProgression} from './config';
import ERRORS from './errors';

import computeRacingSetup from './compute-next-step/racing';

export {
  checkAnswer,
  checkAnswerCorrectness,
  computeNextStepAfterAnswer,
  computeNextStepAfterRacingAnswer,
  computeNextStepOnAcceptExtraLife,
  computeNextStepOnRefuseExtraLife,
  computeRacingSetup,
  createState,
  createRacing,
  createProgression,
  getConfig,
  getConfigForProgression,
  ERRORS
};
