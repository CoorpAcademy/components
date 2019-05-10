import {Action, ActionType, Config, State} from '../types';

export default function remainingLifeRequests(config: Config) {
  return (count: number = config.remainingLifeRequests, action: Action, state: State): number => {
    switch (action.type) {
      case ActionType.EXTRA_LIFE_ACCEPTED: {
        return count > 0 ? count - 1 : count;
      }
      default:
        return count;
    }
  };
}
