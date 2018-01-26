// @flow

import find from 'lodash/fp/find';
import findIndex from 'lodash/fp/findIndex';
import get from 'lodash/fp/get';
import set from 'lodash/fp/set';
import concat from 'lodash/fp/concat';
import includes from 'lodash/fp/includes';
import combineReducers from '../../common/combine-reducers';

import type {
  Action,
  AnswerAction,
  AskClueAction,
  ContentResourceViewedAction,
  Content,
  ExtraLifeAcceptedAction,
  ExtraLifeRefusedAction,
  Config,
  State,
  Step,
  ViewedResource
} from '../../common/types';

function livesDisabled(config: Config): (boolean, Action) => boolean {
  return (state: boolean = false, action: Action): boolean => {
    return state;
  };
}

function isCorrect(config: Config): (boolean, Action) => boolean {
  return (state: boolean = true, action: Action): boolean => {
    switch (action.type) {
      case 'answer': {
        const answerAction = (action: AnswerAction);
        return answerAction.payload.isCorrect;
      }
      default:
        return state;
    }
  };
}

function slides(config: Config): (Array<string>, Action) => Array<string> {
  return (array: Array<string> = [], action: Action): Array<string> => {
    switch (action.type) {
      case 'answer': {
        const answerAction = (action: AnswerAction);
        return concat(array, [answerAction.payload.content.ref]);
      }
      default:
        return array;
    }
  };
}

function viewedResources(config: Config): (Array<ViewedResource>, Action) => Array<ViewedResource> {
  return (
    currentViewedResources: Array<ViewedResource> = [],
    action: Action
  ): Array<ViewedResource> => {
    switch (action.type) {
      case 'resource': {
        const resourceViewAction = (action: ContentResourceViewedAction);
        const contentRef = resourceViewAction.payload.content.ref;
        const contentType = resourceViewAction.payload.content.type;
        const resourceRef = resourceViewAction.payload.resource.ref;
        const contentIndex = findIndex({ref: contentRef}, currentViewedResources);

        if (contentIndex === -1) {
          return concat(currentViewedResources, {
            type: contentType,
            ref: contentRef,
            resources: [resourceRef]
          });
        }

        const contentResources = get('resources', currentViewedResources[contentIndex]);
        const resourceAlreadyViewed = includes(resourceRef, contentResources);

        if (resourceAlreadyViewed) return currentViewedResources;
        return set(
          [contentIndex, 'resources'],
          concat(contentResources, resourceRef),
          currentViewedResources
        );
      }
      default:
        return currentViewedResources;
    }
  };
}

function requestedClues(config: Config): (Array<string>, Action) => Array<string> {
  return (array: Array<string> = [], action: Action): Array<string> => {
    switch (action.type) {
      case 'clue': {
        const requestedClueAction = (action: AskClueAction);
        const slideRef = requestedClueAction.payload.content.ref;
        return includes(slideRef, array) ? array : concat(array, [slideRef]);
      }
      default:
        return array;
    }
  };
}

function remainingLifeRequests(config: Config): (number, Action, State) => number {
  return (count: number = config.remainingLifeRequests, action: Action, state: State): number => {
    switch (action.type) {
      case 'extraLifeAccepted': {
        return count > 0 ? count - 1 : count;
      }
      default:
        return count;
    }
  };
}

function lives(config: Config): (number, Action, State) => number {
  return (amount: number = config.lives, action: Action, state: State): number => {
    if (state.livesDisabled) {
      return amount;
    }
    switch (action.type) {
      case 'answer': {
        const answerAction = (action: AnswerAction);
        return answerAction.payload.isCorrect ? amount : amount - 1;
      }
      case 'extraLifeAccepted': {
        return state.remainingLifeRequests > 0 ? amount + 1 : amount;
      }
      default:
        return amount;
    }
  };
}

function content(config: Config): (Content, Action) => Content {
  return (c: Content, action: Action): Content => {
    switch (action.type) {
      case 'answer': {
        const answerAction = (action: AnswerAction);
        return answerAction.payload.content;
      }
      case 'extraLifeAccepted': {
        const acceptAction = (action: ExtraLifeAcceptedAction);
        return acceptAction.payload.content;
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

function nextContent(config: Config): (Content, Action) => Content {
  return (c: Content, action: Action): Content => {
    switch (action.type) {
      case 'answer': {
        const answerAction = (action: AnswerAction);
        return answerAction.payload.nextContent;
      }
      case 'extraLifeAccepted': {
        const acceptAction = (action: ExtraLifeAcceptedAction);
        return acceptAction.payload.nextContent;
      }
      case 'extraLifeRefused': {
        const refuseAction = (action: ExtraLifeRefusedAction);
        return refuseAction.payload.nextContent;
      }
      default:
        return c;
    }
  };
}

function hasViewedAResourceAtThisStep(config: Config): (boolean, Action) => boolean {
  return (hasAlreadyViewed: boolean = false, action: Action): boolean => {
    switch (action.type) {
      case 'resource': {
        return true;
      }
      case 'answer':
      case 'extraLifeAccepted':
      case 'extraLifeRefused': {
        return false;
      }
      default:
        return hasAlreadyViewed;
    }
  };
}

function step(config: Config): (Step, Action, State) => Step {
  return (s: Step, action: Action, state: State): Step => {
    return {
      current: state.slides.length + 1
    };
  };
}

function stars(config: Config): (number, Action, State) => number {
  return (currentStars: number = 0, action: Action, state: State): number => {
    switch (action.type) {
      case 'answer': {
        const answerAction = (action: AnswerAction);
        return answerAction.payload.isCorrect
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

const reduceAction = combineReducers([
  {key: 'livesDisabled', fn: livesDisabled},
  {key: 'isCorrect', fn: isCorrect},
  {key: 'slides', fn: slides},
  {key: 'lives', fn: lives},
  {key: 'step', fn: step},
  {key: 'stars', fn: stars},
  {key: 'requestedClues', fn: requestedClues},
  {key: 'viewedResources', fn: viewedResources},
  {key: 'remainingLifeRequests', fn: remainingLifeRequests},
  {key: 'hasViewedAResourceAtThisStep', fn: hasViewedAResourceAtThisStep},
  {key: 'content', fn: content},
  {key: 'nextContent', fn: nextContent}
]);

export default reduceAction;
