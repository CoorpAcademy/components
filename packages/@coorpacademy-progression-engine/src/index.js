// @flow
import computeNextStep, {newComputeNextStep} from './compute-next-step';
import checkAnswer from './check-answer';
import checkAnswerCorrectness from './check-answer-correctness';
import updateState from './update-state';
import createProgression, {createStateFromConfig} from './create-progression';
import getConfig from './config';

export {
  computeNextStep,
  newComputeNextStep,
  checkAnswer,
  checkAnswerCorrectness,
  updateState,
  createProgression,
  createStateFromConfig,
  getConfig
};
