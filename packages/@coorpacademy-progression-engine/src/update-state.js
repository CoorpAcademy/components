// @flow

import update from 'lodash/fp/update';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import reduce from 'lodash/fp/reduce';
import isEmpty from 'lodash/fp/isEmpty';
import getConfig from './config';
import allAnswers from './update-state/all-answers';
import content from './update-state/content';
import hasViewedAResourceAtThisStep from './update-state/has-viewed-a-resource-at-this-step';
import isCorrect from './update-state/is-correct';
import lives from './update-state/lives';
import livesDisabled from './update-state/lives-disabled';
import nextContent from './update-state/next-content';
import remainingLifeRequests from './update-state/remaining-life-requests';
import requestedClues from './update-state/requested-clues';
import slides from './update-state/slides';
import stars from './update-state/stars';
import step from './update-state/step';
import validate from './update-state/validate';
import viewedResources from './update-state/viewed-resources';
import type {Action, Engine, Config, State} from './types';

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
  {key: 'allAnswers', fn: allAnswers}
]);

export default function updateState(engine: Engine, state: State, actions: Array<Action>): State {
  const config = (getConfig(engine): Config);
  if (isEmpty(actions)) {
    return reduce(reduceAction(config), state, [{type: 'init'}]);
  }
  return reduce(reduceAction(config), state, actions);
}
