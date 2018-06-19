// @flow
import {getConfig} from '../config';
import type {
  AvailableContent,
  Content,
  Progression,
  Engine,
  EngineOptions,
  RacingConfig,
  Teams
} from '../types';
import computeRacingSetup from '../compute-next-step/racing';

const createRacing = (
  engine: Engine,
  content: Content,
  engineOptions: EngineOptions,
  availableContent: AvailableContent,
  teams: Teams
): Progression | null => {
  const config: RacingConfig = {
    ...getConfig({ref: engine.ref, version: 'latest'}),
    ...engineOptions
  };

  const setupAction = computeRacingSetup(config, availableContent, teams);

  if (!setupAction) {
    return null;
  }

  return {
    engine: {
      ...engine,
      version: config.version
    },
    content,
    engineOptions,
    actions: [setupAction]
  };
};

export default createRacing;
