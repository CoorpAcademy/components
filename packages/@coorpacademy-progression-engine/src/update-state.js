// @flow

import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import concat from 'lodash/fp/concat';
import reduce from 'lodash/fp/reduce';
import update from 'lodash/fp/update';
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
  MicroLearningConfig,
  State,
  Step
} from './types';

// eslint-disable-next-line flowtype/no-weak-types
function isCorrect(config: MicroLearningConfig): Function {
  return (state: boolean = false, action: Action): boolean => {
    switch (action.type) {
      // eslint-disable-next-line no-case-declarations
      case 'answer':
        const answerAction = (action: AnswerAction);
        return answerAction.payload.isCorrect;
      default:
        return state;
    }
  };
}

// eslint-disable-next-line flowtype/no-weak-types
function slides(config: MicroLearningConfig): Function {
  return (array: Array<string> = [], action: Action): Array<string> => {
    switch (action.type) {
      // eslint-disable-next-line no-case-declarations
      case 'answer':
        const answerAction = (action: AnswerAction);
        return concat(array, [answerAction.payload.content.ref]);
      default:
        return array;
    }
  };
}

// eslint-disable-next-line flowtype/no-weak-types
function viewedResources(config: MicroLearningConfig): Function {
  return (array: Array<string> = [], action: Action): Array<string> => {
    switch (action.type) {
      // eslint-disable-next-line no-case-declarations
      case 'resource':
        const requestedClueAction = (action: ChapterResourceViewedAction);
        const chapterRef = requestedClueAction.payload.content.chapter_ref;
        return array.indexOf(chapterRef) === -1 ? concat(array, [chapterRef]) : array;
      default:
        return array;
    }
  };
}

// eslint-disable-next-line flowtype/no-weak-types
function requestedClues(config: MicroLearningConfig): Function {
  return (array: Array<string> = [], action: Action): Array<string> => {
    switch (action.type) {
      // eslint-disable-next-line no-case-declarations
      case 'clue':
        const requestedClueAction = (action: AskClueAction);
        const slideRef = requestedClueAction.payload.content.ref;
        return array.indexOf(slideRef) === -1 ? concat(array, [slideRef]) : array;
      default:
        return array;
    }
  };
}

// eslint-disable-next-line flowtype/no-weak-types
function lives(config: MicroLearningConfig): Function {
  return (amount: number = config.lives, action: Action): number => {
    switch (action.type) {
      // eslint-disable-next-line no-case-declarations
      case 'answer':
        const answerAction = (action: AnswerAction);
        return answerAction.payload.isCorrect ? amount : amount - 1;
      default:
        return amount;
    }
  };
}

// eslint-disable-next-line flowtype/no-weak-types
function content(config: MicroLearningConfig): Function {
  return (c: Content, action: Action): Content => {
    switch (action.type) {
      // eslint-disable-next-line no-case-declarations
      case 'answer':
        const answerAction = (action: AnswerAction);
        return answerAction.payload.content;
      default:
        return c;
    }
  };
}

// eslint-disable-next-line flowtype/no-weak-types
function nextContent(config: MicroLearningConfig): Function {
  return (c: Content, action: Action): Content => {
    switch (action.type) {
      // eslint-disable-next-line no-case-declarations
      case 'answer':
        const answerAction = (action: AnswerAction);
        return answerAction.payload.nextContent;
      default:
        return c;
    }
  };
}

// eslint-disable-next-line flowtype/no-weak-types
function step(config: MicroLearningConfig): Function {
  return (s: Step, action: Action, state: State): Step => {
    return {
      total: config.slidesToComplete,
      current: (state.slides || []).length
    };
  };
}

// eslint-disable-next-line flowtype/no-weak-types
function stars(config: MicroLearningConfig): Function {
  return (currentStars: number = 0, action: Action, state: State): number => {
    switch (action.type) {
      // eslint-disable-next-line no-case-declarations
      case 'answer':
        const answerAction = (action: AnswerAction);
        return answerAction.payload.isCorrect
          ? currentStars + config.starsPerCorrectAnswer
          : currentStars;
      // eslint-disable-next-line no-case-declarations
      case 'clue':
        const requestedClueAction = (action: AskClueAction);
        const slideRef = requestedClueAction.payload.content.ref;
        return state.requestedClues.indexOf(slideRef) === -1
          ? currentStars + config.starsPerAskingClue
          : currentStars;
      // eslint-disable-next-line no-case-declarations
      case 'resource':
        const chapterResourceViewedAction = (action: ChapterResourceViewedAction);
        const chapterRef = chapterResourceViewedAction.payload.content.chapter_ref;
        return state.viewedResources.indexOf(chapterRef) === -1
          ? currentStars + config.starsPerCorrectAnswer
          : currentStars;
      default:
        return currentStars;
    }
  };
}

// eslint-disable-next-line flowtype/no-weak-types
function validate(config: MicroLearningConfig): Function {
  return (state: State, action: Action) => {
    switch (action.type) {
      // eslint-disable-next-line no-case-declarations
      case 'answer':
        const answerAction = (action: AnswerAction);
        if (!isEqual(state.nextContent, answerAction.payload.content)) {
          throw new Error(
            'The content of the progression state does not match the content of the given answer'
          );
        }
        break;
    }
  };
}

function combineReducers(
  fnMap: Array<{key: string, fn: Function}> // eslint-disable-line flowtype/no-weak-types
): MicroLearningConfig => (State, Action) => State {
  // eslint-disable-next-line flowtype/require-return-type
  const fns = map(({fn, key}) => {
    return (config: MicroLearningConfig, action: Action) => (state: State): State => {
      validate(config)(state, action);
      const newState = update(key, value => fn(config)(value, action, state), state);
      return (newState: State);
    };
  }, fnMap);

  return (config: MicroLearningConfig): ((State, Action) => State) => {
    return (state: State, action: Action): State =>
      pipe(...map(fn => fn(config, action), fns))(state);
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
  {key: 'content', fn: content},
  {key: 'nextContent', fn: nextContent}
]);

export default function updateState(engine: Engine, state: State, actions: Array<Action>): State {
  const config = (getConfig(engine): MicroLearningConfig);
  if (isEmpty(actions)) {
    return reduce(reduceAction(config), state, [{type: 'init'}]);
  }
  return reduce(reduceAction(config), state, actions);
}
