// @flow
import getConfig from './config';
import createInitialState from './initial-state';
import type {Content, Progression, Engine, InitialStateOptions} from './types';

export default function createProgression(
  engine: Engine,
  content: Content,
  initialStateOptions: InitialStateOptions
): Progression {
  const config = getConfig({ref: engine.ref, version: engine.version});

  const currentEngine = {
    ref: engine.ref,
    version: config.version
  };

  return {
    content,
    initialStateOptions,
    state: createInitialState(engine, config, initialStateOptions),
    actions: [],
    engine: currentEngine
  };
}
