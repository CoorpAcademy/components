// @flow

import find from 'lodash/fp/find';
import includes from 'lodash/fp/includes';
import type {
  Action,
  AnswerAction,
  AskClueAction,
  Config,
  ContentResourceViewedAction,
  State
} from '../types';

export default function stars(config: Config): (number, Action, State) => number {
  return (currentStars: number = 0, action: Action, state: State): number => {
    switch (action.type) {
      case 'answer': {
        const answerAction = (action: AnswerAction);
        return !answerAction.payload.instructions && answerAction.payload.isCorrect
          ? currentStars + config.starsPerCorrectAnswer
          : currentStars;
      }
      case 'clue': {
        const requestedClueAction = (action: AskClueAction);
        const slideRef = requestedClueAction.payload.content.ref;
        return includes(slideRef, state.requestedClues)
          ? currentStars
          : currentStars + config.starsPerAskingClue;
      }
      case 'resource': {
        const contentResourceViewedAction = (action: ContentResourceViewedAction);
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
