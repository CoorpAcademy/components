// @flow
import getConfig from './config';
import type {Content, Progression, Slide, State, EngineType} from './types';
import computeNextStep from './compute-next-step';

export default function createProgression(
  engineType: EngineType,
  content: Content,
  slidePool: Array<Slide>
): Progression {
  const config = getConfig({ref: engineType, version: 'latest'});
  const engine = {
    ref: engineType,
    version: config.version
  };
  const initialState: State = {
    lives: config.lives,
    isCorrect: true,
    slides: [],
    step: {
      current: 0,
      total: 4
    },
    content: undefined,
    nextContent: {
      type: 'slide',
      ref: 'unknown_ref'
    }
  };
  initialState.nextContent = computeNextStep(engine, slidePool, initialState);

  return {
    content,
    initialState,
    state: initialState,
    actions: [],
    engine
  };
}
