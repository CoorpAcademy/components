import find from 'lodash/fp/find';
import includes from 'lodash/fp/includes';
import {
  Action,
  ActionType,
  AnswerAction,
  AskClueAction,
  Config,
  ContentResourceViewedAction,
  State
} from '../types';

export default function stars(config: Config) {
  return (currentStars: number = 0, action: Action, state: State): number => {
    switch (action.type) {
      case ActionType.ANSWER: {
        const answerAction: AnswerAction = action;
        return !answerAction.payload.instructions && answerAction.payload.isCorrect
          ? currentStars + config.starsPerCorrectAnswer
          : currentStars;
      }
      case ActionType.CLUE: {
        const requestedClueAction: AskClueAction = action;
        const slideRef = requestedClueAction.payload.content.ref;
        return includes(slideRef, state.requestedClues)
          ? currentStars
          : currentStars + config.starsPerAskingClue;
      }
      case ActionType.RESOURCE: {
        const contentResourceViewedAction: ContentResourceViewedAction =  action;
        const contentRef = contentResourceViewedAction.payload.content.ref;
        const contentType = contentResourceViewedAction.payload.content.type;
        const contentResourceAlreadyViewed = Boolean(
          find({type: contentType, ref: contentRef}, state.viewedResources)
        );
        if (contentResourceAlreadyViewed) {
          return currentStars;
        }
        return currentStars + config.starsPerResourceViewed;
      }
      default:
        return currentStars;
    }
  };
}
