// @flow

import type {Progression, Resource} from './types';

// eslint-disable-next-line import/prefer-default-export
export const sendViewedMediaAnalytics = (resource: Resource, location: string) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'mediaViewed',
    mediaType: resource.type,
    location
  });
};

export const sendProgressionAnalytics = (currentProgression, engineConfig) => {
  const state = currentProgression.state;
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
