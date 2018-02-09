// @flow
import identity from 'lodash/fp/identity';
import includes from 'lodash/fp/includes';
import mapValues from 'lodash/fp/mapValues';
import findKey from 'lodash/fp/findKey';
import allAnswers from '../all-answers';
import content from '../content';
import isCorrect from '../is-correct';
import nextContent from '../next-content';
import slides from '../slides';
import type {
  RacingSetupAction,
  AnswerAction,
  RacingUsers,
  RacingConfig,
  RacingUser
} from '../../types';
import questionNum from './question-num';

type ReducedObject = number | boolean;
type RacingAction = RacingSetupAction | AnswerAction;
type UserReducer = RacingConfig => (ReducedObject, RacingAction, RacingUser) => RacingUser;

const reducers = {
  questionNum,
  content,
  allAnswers,
  isCorrect,
  nextContent,
  slides,
  id: config => identity
};

const usersReducer = (config: RacingConfig) => (
  users: RacingUsers,
  action: RacingAction
): RacingUsers => {
  const reduceProperties = (user: RacingUser): RacingUser => {
    if (!includes(user.id, action.authors)) {
      return user;
    }

    return mapValues((reducer: UserReducer): RacingUser => {
      const key = findKey(_reducer => _reducer === reducer, reducers);
      if (!key) throw new Error('error while trying to reduce a user');
      const keyState = user[key];
      return reducer(config)(keyState, action, user);
    }, reducers);
  };

  return mapValues(reduceProperties, users);
};

export default usersReducer;
