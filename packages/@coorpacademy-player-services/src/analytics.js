// @flow strict

import type {
  UI_PROGRESSION_UPDATED_ON_NODE,
  UI_PROGRESSION_UPDATED_ON_MOVE
} from '@coorpacademy/player-store';
import type {Lesson, Config, Progression, State} from '@coorpacademy/progression-engine';
import {UI_PROGRESSION_ACTION_TYPES} from '@coorpacademy/player-store';
import type {DataEvent, ResourceTypeAPI} from './definitions';

// eslint-disable-next-line no-shadow
declare var window: {|
  dataLayer: Array<DataEvent>
|};

// eslint-disable-next-line import/prefer-default-export
export const sendViewedMediaAnalytics = (resource: Lesson, location: string) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'mediaViewed',
    mediaType: (resource.type: ResourceTypeAPI),
    location
  });
};

export const sendProgressionAnalytics = (
  currentProgression: Progression,
  engineConfig: Config,
  type: UI_PROGRESSION_UPDATED_ON_MOVE | UI_PROGRESSION_UPDATED_ON_NODE
) => {
  if (!currentProgression.state) {
    return;
  }

  const state: State = currentProgression.state;
  const onMove = type === UI_PROGRESSION_ACTION_TYPES.PROGRESSION_UPDATED_ON_MOVE;
  const isExitNode = state.nextContent.type === 'success' || state.nextContent.type === 'failure';

  window.dataLayer = window.dataLayer || [];

  if (onMove && isExitNode) {
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
