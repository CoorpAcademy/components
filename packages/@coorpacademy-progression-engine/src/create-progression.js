// @flow
import getConfig from './config';
import type {Content, Progression, State, Engine} from './types';

export default function createProgression(
  engine: Engine,
  content: Content,
  initialContent: Content
): Progression {
  const config = getConfig({ref: engine.ref, version: 'latest'});

  const currentEngine = {
    ref: engine.ref,
    version: config.version
  };

  const initialState: State = {
    lives: config.lives,
    isCorrect: true,
    slides: [],
    stars: 0,
    requestedClues: [],
    viewedResources: [],
    step: {
      current: 1,
      total: config.slidesToComplete
    },
    content: undefined,
    nextContent: initialContent,
    jokers: config.jokers
  };

  return {
    content,
    initialState,
    state: initialState,
    actions: [],
    engine: currentEngine
  };
}
