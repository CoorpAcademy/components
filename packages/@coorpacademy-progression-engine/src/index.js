// @flow
import computeNextStep, {newComputeNextStep} from './compute-next-step';
import checkAnswer from './check-answer';
import checkAnswerCorrectness from './check-answer-correctness';
import createState from './create-state';
import updateState from './update-state';
import createProgression, {createStateFromConfig, newCreateProgression} from './create-progression';
import getConfig from './config';

export {
  computeNextStep,
  newComputeNextStep,
  checkAnswer,
  checkAnswerCorrectness,
  createState,
  updateState,
  createProgression,
  newCreateProgression,
  createStateFromConfig,
  getConfig
};
