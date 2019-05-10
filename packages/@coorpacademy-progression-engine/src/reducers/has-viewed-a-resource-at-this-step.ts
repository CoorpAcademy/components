import {Action, ActionType, Config} from '../types';

export default function hasViewedAResourceAtThisStep(config: Config) {
  return (hasAlreadyViewed: boolean = false, action: Action): boolean => {
    switch (action.type) {
      case ActionType.RESOURCE: {
        return true;
      }
      case ActionType.ANSWER:
      case ActionType.EXTRA_LIFE_ACCEPTED:
      case ActionType.EXTRA_LIFE_REFUSE: {
        return false;
      }
      default:
        return hasAlreadyViewed;
    }
  };
}
