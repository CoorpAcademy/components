// @flow
import getConfig from './config';
import createInitialState from './initial-state';
import type {Content, Progression, CreateProgressionOptions, Engine} from './types';

export default function createProgression(
  engine: Engine,
  content: Content,
  options: CreateProgressionOptions
): Progression {
  const config = getConfig({ref: engine.ref, version: engine.version});

  const currentEngine = {
    ...engine,
    version: config.version
  };

  const state = createInitialState(engine, options);

  return {
    content,
    state,
    options,
    actions: [],
    engine: currentEngine
  };
}
