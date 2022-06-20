// @flow
import {getConfig} from '../config';
import type {
  Action,
  AvailableContent,
  Config,
  GenericContent,
  Progression,
  Engine,
  EngineConfig
} from '../types';
import {computeInitialStep, computeInitialStepForReview} from '../compute-next-step';

const getActions = (
  engine: Engine,
  config: Config,
  availableContent: AvailableContent
): Array<Action> => {
  if (engine.ref === 'external') {
    return [];
  }

  if (engine.ref === 'review') {
    return [computeInitialStepForReview(config, availableContent)];
  }

  return [computeInitialStep(config, availableContent)];
};

const createProgression = (
  engine: Engine,
  content: GenericContent,
  engineOptions: EngineConfig,
  availableContent: AvailableContent
): Progression => {
  const config = {
    ...getConfig({ref: engine.ref, version: engine.version || 'latest'}),
    ...engineOptions
  };

  return {
    engine: {
      ...engine,
      version: config.version
    },
    content,
    engineOptions,
    actions: getActions(engine, config, availableContent)
  };
};

export default createProgression;
