// @flow
import type {CreateProgressionOptions, Config, State} from '../types';
import updateVariables from '../compute-next-step/rule-engine/apply-instructions';

export const createStateFromConfig = (
  defaultState: State,
  options: ?CreateProgressionOptions
): State => {
  const {instructions = null} = options || {};
  if (instructions) {
    return updateVariables(instructions)(defaultState);
  }
  return defaultState;
};

export default function createInitialState(
  config: Config,
  options: CreateProgressionOptions
): State {
  const {livesDisabled = false, nextContent} = options || {};

  const defaultState: State = {
    lives: config.lives,
    livesDisabled: Boolean(livesDisabled || config.livesDisabled),
    isCorrect: true,
    slides: [],
    stars: 0,
    requestedClues: [],
    viewedResources: [],
    step: {
      current: 1
    },
    nextContent,
    remainingLifeRequests: config.remainingLifeRequests,
    hasViewedAResourceAtThisStep: false,
    allAnswers: [],
    variables: {}
  };

  const initialState = createStateFromConfig(defaultState, options);

  return initialState;
}
