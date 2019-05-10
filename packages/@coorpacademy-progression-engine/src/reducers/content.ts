import {
  Action,
  ActionType,
  AnswerAction,
  Config,
  Content,
  ExtraLifeAcceptedAction,
  ExtraLifeRefusedAction
} from '../types';

const content = (config: Config) => (cont: Content, action: Action): Content => {
  switch (action.type) {
    case ActionType.ANSWER:
    case ActionType.EXTRA_LIFE_ACCEPTED:
    case ActionType.EXTRA_LIFE_REFUSE: {
      const _action: AnswerAction | ExtraLifeAcceptedAction | ExtraLifeRefusedAction = action;
      return _action.payload.content;
    }
    default:
      return cont;
  }
}

export default content;
