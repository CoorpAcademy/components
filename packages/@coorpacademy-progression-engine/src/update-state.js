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
  State,
  Content,
  MicroLearningConfig,
  Engine,
  Step
} from './types';

function isCorrect(config: MicroLearningConfig) {
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

function slides(config: MicroLearningConfig) {
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

function lives(config: MicroLearningConfig) {
  return (amount: number = config.level, action: Action): number => {
    const currentLives = amount || config.lives;
    switch (action.type) {
      // eslint-disable-next-line no-case-declarations
      case 'answer':
        const answerAction = (action: AnswerAction);
        return answerAction.payload.isCorrect ? currentLives : currentLives - 1;
      default:
        return currentLives;
    }
  };
}

function content(config: MicroLearningConfig) {
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

function nextContent(config: MicroLearningConfig) {
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

function step(config: MicroLearningConfig) {
  return (s: Step, action: Action, state: State): Step => {
    return {
      total: config.slidesToComplete,
      current: (state.slides || []).length
    };
  };
}

function validate(config: MicroLearningConfig) {
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
  }
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
