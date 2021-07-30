// @flow strict

import type {Lesson, Config, Progression} from '@coorpacademy/progression-engine';
import type {DataEvent, ResourceTypeAPI} from './definitions';

// eslint-disable-next-line no-shadow
declare var window: {|
  dataLayer: Array<DataEvent>
|};

export const sendViewedMediaAnalytics = (resource: Lesson, location: string) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'mediaViewed',
    mediaType: (resource.type: ResourceTypeAPI),
    location
  });
};

export const sendProgressionUpdated = (currentProgression: Progression, engineConfig: Config) => {
  if (!currentProgression.state) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'updateProgression',
    progression: {
      type: currentProgression.engine.ref,
      state: currentProgression.state.nextContent.type,
      extraLife: engineConfig.remainingLifeRequests - currentProgression.state.remainingLifeRequests
    }
  });
};

export const sendProgressionFinished = (currentProgression: Progression, engineConfig: Config) => {
  if (!currentProgression.state) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'finishProgression',
    progression: {
      type: currentProgression.engine.ref,
      state: currentProgression.state.nextContent.type,
      extraLife: engineConfig.remainingLifeRequests - currentProgression.state.remainingLifeRequests
    }
  });
};

export type AnalyticsService = {
  sendViewedMediaAnalytics: typeof sendViewedMediaAnalytics,
  sendProgressionUpdated?: typeof sendProgressionUpdated,
  sendProgressionFinished: typeof sendProgressionFinished
};
