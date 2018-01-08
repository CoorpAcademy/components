// @flow

import type {Action, Config} from '../types';

export default function hasViewedAResourceAtThisStep(config: Config): (boolean, Action) => boolean {
  return (hasAlreadyViewed: boolean = false, action: Action): boolean => {
    switch (action.type) {
      case 'resource': {
        return true;
      }
      case 'answer':
      case 'extraLifeAccepted':
      case 'extraLifeRefused': {
        return false;
      }
      default:
        return hasAlreadyViewed;
    }
  };
}
