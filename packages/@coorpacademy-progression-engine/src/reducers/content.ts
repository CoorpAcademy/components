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
    case 'answer':
    case 'extraLifeAccepted':
    case 'extraLifeRefused': {
      const _action: AnswerAction | ExtraLifeAcceptedAction | ExtraLifeRefusedAction = action;
      return _action.payload.content;
    }
    default:
      return cont;
  }
};

export default content;
