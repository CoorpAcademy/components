// @flow

import update from 'lodash/fp/update';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import reduce from 'lodash/fp/reduce';
import isEmpty from 'lodash/fp/isEmpty';
import getConfig from './config';
import allAnswers from './reducers/all-answers';
import content from './reducers/content';
import hasViewedAResourceAtThisStep from './reducers/has-viewed-a-resource-at-this-step';
import isCorrect from './reducers/is-correct';
import lives from './reducers/lives';
import livesDisabled from './reducers/lives-disabled';
import nextContent from './reducers/next-content';
import remainingLifeRequests from './reducers/remaining-life-requests';
import requestedClues from './reducers/requested-clues';
import slides from './reducers/slides';
import stars from './reducers/stars';
import step from './reducers/step';
import validate from './reducers/validate';
import viewedResources from './reducers/viewed-resources';
import variables from './reducers/variables';
import type {Action, Engine, Config, State} from './types';

function combineReducers(
  fnMap: Array<{key?: string, fn: Function}> // eslint-disable-line flowtype/no-weak-types
): Config => (State, Action) => State {
  // eslint-disable-next-line flowtype/require-return-type
  const fns = map(({fn, key}) => {
    return (config: Config, action: Action) => (state: State): State => {
      if (!key) return fn(config)(state, action);
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
  {key: 'nextContent', fn: nextContent},
  {key: 'allAnswers', fn: allAnswers},
  {fn: variables}
]);

export default function updateState(engine: Engine, state: State, actions: Array<Action>): State {
  const config = (getConfig(engine): Config);
  if (isEmpty(actions)) {
    return reduce(reduceAction(config), state, [{type: 'init'}]);
  }
  return reduce(reduceAction(config), state, actions);
}
