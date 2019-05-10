import {Action, ActionType, Config, Content} from '../types';

export default function nextContent(config: Config) {
  return (cont: Content, action: Action): Content => {
    switch (action.type) {
      case ActionType.ANSWER:
      case ActionType.EXTRA_LIFE_ACCEPTED:
      case ActionType.EXTRA_LIFE_REFUSE:
      case ActionType.MOVE:
        return action.payload.nextContent;
      default:
        return cont;
    }
  };
}
