import {
  Action,
  AnswerAction,
  Config,
  Content,
  ExtraLifeAcceptedAction,
  ExtraLifeRefusedAction
} from '../types';

const content = (config: Config) => {
  return (cont: Content, action: Action): Content => {
    switch (action.type) {
      case 'answer': {
        const answerAction: AnswerAction = action;
        return answerAction.payload.content;
      }
      case 'extraLifeAccepted': {
        const acceptAction: ExtraLifeAcceptedAction = action;
        return acceptAction.payload.content;
      }
      case 'extraLifeRefused': {
        const refuseAction: ExtraLifeRefusedAction = action;
        return refuseAction.payload.content;
      }
      default:
        return cont;
    }
  }
}


export default content;
