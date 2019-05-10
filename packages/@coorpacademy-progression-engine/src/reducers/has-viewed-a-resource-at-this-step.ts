import {Action, ActionType, Config} from '../types';

export default function hasViewedAResourceAtThisStep(config: Config) {
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
