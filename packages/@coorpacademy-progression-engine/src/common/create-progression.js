// @flow
import getConfig from './config';
import type {Content, Progression, State, Engine, InitialStateOptions} from './types';

export default function createProgression(
  engine: Engine,
  content: Content,
  initialStateOptions: InitialStateOptions
): Progression {
  const config = getConfig({ref: engine.ref, version: engine.version});
  const {nextContent, livesDisabled, teams} = initialStateOptions;

  const currentEngine = {
    ref: engine.ref,
    version: config.version
  };

  const initialState: State = {
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
    content: undefined,
    nextContent,
    remainingLifeRequests: config.remainingLifeRequests,
    hasViewedAResourceAtThisStep: false,
    teams
  };

  return {
    content,
    initialState,
    state: initialState,
    actions: [],
    engine: currentEngine
  };
}
