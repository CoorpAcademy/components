import {Action, ActionType, Config, Content} from '../types';

export default function nextContent(config: Config) {
  return (cont: Content, action: Action): Content => {
    switch (action.type) {
      case 'answer':
      case 'extraLifeAccepted':
      case 'extraLifeRefused':
      case 'move':
        return action.payload.nextContent;
      default:
        return cont;
    }
  };
}
