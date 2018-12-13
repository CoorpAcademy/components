// @flow strict

import type {Config, Progression, State} from '@coorpacademy/progression-engine';
import type {Resource, ResourceType} from './types';

// eslint-disable-next-line no-shadow
declare var window: {|
  dataLayer: Array<{
    event: string,
    mediaType?: string,
    location?: string
  }>
|};

// eslint-disable-next-line import/prefer-default-export
export const sendViewedMediaAnalytics = (resource: Resource, location: string) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'mediaViewed',
    mediaType: (resource.type: ResourceType),
    location
  });
};

export const sendProgressionAnalytics = (currentProgression: Progression, engineConfig: Config) => {
  if (!currentProgression.state) {
    return;
  }

  const state: State = currentProgression.state;
  /* istanbul ignore next */
  window.dataLayer = window.dataLayer || [];

  if (state.nextContent.type === 'success' || state.nextContent.type === 'failure') {
    window.dataLayer.push({
      event: 'finishProgression',
      progression: {
        type: currentProgression.engine.ref,
        state: state.nextContent.type,
        extraLife: engineConfig.remainingLifeRequests - state.remainingLifeRequests
      }
    });
  }
};
