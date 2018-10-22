// @flow
import {getConfig} from '../config';
import type {
  AvailableContent,
  Content,
  MoveAction,
  Progression,
  Engine,
  EngineOptions
} from '../types';
import {computeInitialStep} from '../compute-next-step';
import createRacing from './racing';

const createProgression = (
  engine: Engine,
  content: Content,
  engineOptions: EngineOptions,
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

export {createRacing};
export default createProgression;
