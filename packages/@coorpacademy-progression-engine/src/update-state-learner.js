// @flow

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
import viewedResources from './reducers/viewed-resources';
import variables from './reducers/variables';
import combineReducers from './combine-reducers';
import createUpdateState from './create-update-state';
import type {Action, Config, State} from './types';

const reduceAction = combineReducers([
  {key: 'livesDisabled', fn: livesDisabled},
  {key: 'isCorrect', fn: isCorrect},
  {key: 'slides', fn: slides},
  {key: 'lives', fn: lives},
  {key: 'step', fn: step},
  {key: 'stars', fn: stars},
  {key: 'requestedClues', fn: requestedClues},
  {key: 'viewedResources', fn: viewedResources},
  {key: 'hasViewedAResourceAtThisStep', fn: hasViewedAResourceAtThisStep},
  {key: 'content', fn: content},
  {key: 'nextContent', fn: nextContent},
  {key: 'allAnswers', fn: allAnswers},
  {key: 'remainingLifeRequests', fn: remainingLifeRequests},
  {fn: variables}
]);

export type UpdateStateLearner = (Config, State, Array<Action>) => State;

const updateStateLearner: UpdateStateLearner = createUpdateState(reduceAction);
export default updateStateLearner;
