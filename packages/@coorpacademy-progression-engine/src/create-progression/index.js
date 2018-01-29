// @flow
import getConfig from '../config';
import type {AvailableContent, Content, Progression, Engine, EngineOptions} from '../types';
import {computeInitialStep} from '../compute-next-step';

const createProgression = (
  engine: Engine,
  content: Content,
  engineOptions: EngineOptions,
  availableContent: AvailableContent
): Progression => {
  const config = getConfig({ref: engine.ref, version: engine.version});
  const initialAction = computeInitialStep(engine, engineOptions, availableContent);

  return {
    engine: {
      ...engine,
      version: config.version
    },
    content,
    engineOptions,
    actions: [initialAction]
  };
};

export default createProgression;
