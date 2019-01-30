// @flow
import {getConfig} from '../config';
import type {AvailableContent, GenericContent, Progression, Engine, EngineConfig} from '../types';
import {computeInitialStep} from '../compute-next-step';

const createProgression = (
  engine: Engine,
  content: GenericContent,
  engineOptions: EngineConfig,
  availableContent: AvailableContent
): Progression => {
  const config = {
    ...getConfig({ref: engine.ref, version: 'latest'}),
    ...engineOptions
  };
  const initialAction = computeInitialStep(config, availableContent);

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
