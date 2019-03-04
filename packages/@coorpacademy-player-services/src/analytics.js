// @flow strict

import type {Lesson, Config, Progression, State} from '@coorpacademy/progression-engine';
import type {DataEvent, ResourceType} from './definitions';

// eslint-disable-next-line no-shadow
declare var window: {|
  dataLayer: Array<DataEvent>
|};

// eslint-disable-next-line import/prefer-default-export
export const sendViewedMediaAnalytics = (resource: Lesson, location: string) => {
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

export type AnalyticsService = {
  sendViewedMediaAnalytics: typeof sendViewedMediaAnalytics,
  sendProgressionAnalytics: typeof sendProgressionAnalytics
};
