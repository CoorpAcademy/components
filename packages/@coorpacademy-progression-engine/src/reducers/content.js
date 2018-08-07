// @flow

import type {
  Action,
  AnswerAction,
  Config,
  Content,
  ExtraLifeAcceptedAction,
  ExtraLifeRefusedAction,
  State
} from '../types';

export default function content(config: Config): (Content, Action, State) => Content {
  return (c: Content, action: Action, state: State): Content => {
    switch (action.type) {
      case 'answer': {
        const answerAction = (action: AnswerAction);
        return answerAction.payload.content;
      }
      case 'extraLifeAccepted': {
        const acceptAction = (action: ExtraLifeAcceptedAction);
        return state.remainingLifeRequests > 0 ? acceptAction.payload.content : c;
      }
      case 'extraLifeRefused': {
        const refuseAction = (action: ExtraLifeRefusedAction);
        return refuseAction.payload.content;
      }
      default:
        return c;
    }
  };
}
