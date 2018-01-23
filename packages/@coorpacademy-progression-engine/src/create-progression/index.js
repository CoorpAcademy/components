// @flow
import getConfig from '../config';
import type {AvailableContent, Content, NewProgression, Engine, EngineOptions} from '../types';
import createInitialAction from './create-initial-action';

const createProgression = (
  engine: Engine,
  content: Content,
  engineOptions: EngineOptions,
  availableContent: AvailableContent
): NewProgression => {
  const config = getConfig({ref: engine.ref, version: engine.version});
  const initialAction = createInitialAction(availableContent);

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
