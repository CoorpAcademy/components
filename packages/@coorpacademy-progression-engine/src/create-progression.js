// @flow
import getConfig from './config';
import type {Content, Progression, State, Engine} from './types';

export default function createProgression(
  engine: Engine,
  content: Content,
  initialContent: Content,
  livesDisabled: boolean
): Progression {
  const config = getConfig({ref: engine.ref, version: engine.version});

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
    nextContent: initialContent,
    remainingLifeRequests: config.remainingLifeRequests,
    hasViewedAResourceAtThisStep: false
  };

  return {
    content,
    initialState,
    state: initialState,
    actions: [],
    engine: currentEngine
  };
}
