// @flow
import {getConfig} from '../config';
import type {
  AvailableContent,
  GenericContent,
  MoveAction,
  Progression,
  Engine,
  EngineConfig
} from '../types';
import {computeInitialStep} from '../compute-next-step';

const createProgression = (
  engine: Engine,
  content: GenericContent,
  engineOptions: EngineConfig,
  availableContent: AvailableContent
): Progression | null => {
  const config = {
    ...getConfig({ref: engine.ref, version: 'latest'}),
    ...engineOptions
  };
  const initialAction: MoveAction | null = computeInitialStep(config, availableContent);

  if (!initialAction) {
    return null;
  }

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
