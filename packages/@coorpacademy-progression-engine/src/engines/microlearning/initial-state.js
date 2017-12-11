// @flow
import type {Config, InitialStateOptions, State} from './types';

export default function createInitialState(
  config: Config,
  initialStateOptions: InitialStateOptions
): State {
  const {nextContent} = initialStateOptions;
  const initialState: State = {
    lives: config.lives,
    isCorrect: true,
    slides: [],
    stars: 0,
    requestedClues: [],
    viewedResources: [],
    step: {
      current: 1
    },
    content: undefined,
    nextContent,
    remainingLifeRequests: config.remainingLifeRequests,
    hasViewedAResourceAtThisStep: false
  };

  return initialState;
}
