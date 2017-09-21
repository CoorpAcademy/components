// @flow

import find from 'lodash/fp/find';
import findIndex from 'lodash/fp/findIndex';
import get from 'lodash/fp/get';
import set from 'lodash/fp/set';
import update from 'lodash/fp/update';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import concat from 'lodash/fp/concat';
import reduce from 'lodash/fp/reduce';
import includes from 'lodash/fp/includes';
import isEmpty from 'lodash/fp/isEmpty';
import isEqual from 'lodash/fp/isEqual';
import getConfig from './config';
import type {
  Action,
  AnswerAction,
  AskClueAction,
  ChapterResourceViewedAction,
  Content,
  Engine,
  ExtraLifeAcceptedAction,
  ExtraLifeRefusedAction,
  Config,
  State,
  Step,
  ViewedResource
} from './types';

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
        const resourceViewAction = (action: ChapterResourceViewedAction);
        const chapterRef = resourceViewAction.payload.chapter.ref;
        const resourceRef = resourceViewAction.payload.resource.ref;
        const chapterIndex = findIndex({ref: chapterRef}, currentViewedResources);

        if (chapterIndex === -1) {
          return concat(currentViewedResources, {
            type: 'chapter',
            ref: chapterRef,
            resources: [resourceRef]
          });
        }

        const chapterResources = get('resources', currentViewedResources[chapterIndex]);
        const resourceAlreadyViewed = includes(resourceRef, chapterResources);

        if (resourceAlreadyViewed) return currentViewedResources;
        return set(
          [chapterIndex, 'resources'],
          concat(chapterResources, resourceRef),
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
      case 'extraLifeRefused': {
        return 0;
      }
      default:
        return count;
    }
  };
}

function lives(config: Config): (number, Action, State) => number {
  return (amount: number = config.lives, action: Action, state: State): number => {
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
        const chapterResourceViewedAction = (action: ChapterResourceViewedAction);
        const chapterRef = chapterResourceViewedAction.payload.chapter.ref;
        const chapterResourceAlreadyViewed = Boolean(
          find({type: 'chapter', ref: chapterRef}, state.viewedResources)
        );
        if (chapterResourceAlreadyViewed) {
          return currentStars;
        }
        return currentStars + config.starsPerResourceViewed;
      }
      default:
        return currentStars;
    }
  };
}

function validate(config: Config): (State, Action) => void {
  return (state: State, action: Action) => {
    switch (action.type) {
      case 'answer': {
        const answerAction = (action: AnswerAction);
        if (!isEqual(state.nextContent, answerAction.payload.content)) {
          throw new Error(
            'The content of the progression state does not match the content of the given answer'
          );
        }
        break;
      }
    }
  };
}

function combineReducers(
  fnMap: Array<{key: string, fn: Function}> // eslint-disable-line flowtype/no-weak-types
): Config => (State, Action) => State {
  // eslint-disable-next-line flowtype/require-return-type
  const fns = map(({fn, key}) => {
    return (config: Config, action: Action) => (state: State): State => {
      const newState = update(key, value => fn(config)(value, action, state), state);
      return (newState: State);
    };
  }, fnMap);

  return (config: Config): ((State, Action) => State) => {
    return (state: State, action: Action): State => {
      validate(config)(state, action);
      return pipe(...map(fn => fn(config, action), fns))(state);
    };
  };
}

const reduceAction = combineReducers([
  {key: 'isCorrect', fn: isCorrect},
  {key: 'slides', fn: slides},
  {key: 'lives', fn: lives},
  {key: 'step', fn: step},
  {key: 'stars', fn: stars},
  {key: 'requestedClues', fn: requestedClues},
  {key: 'viewedResources', fn: viewedResources},
  {key: 'remainingLifeRequests', fn: remainingLifeRequests},
  {key: 'content', fn: content},
  {key: 'nextContent', fn: nextContent}
]);

export default function updateState(engine: Engine, state: State, actions: Array<Action>): State {
  const config = (getConfig(engine): Config);
  if (isEmpty(actions)) {
    return reduce(reduceAction(config), state, [{type: 'init'}]);
  }
  return reduce(reduceAction(config), state, actions);
}
