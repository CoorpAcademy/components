// @flow

import users from './reducers/racing/users';
import teams from './reducers/racing/teams';
import combineReducers from './combine-reducers';
import createUpdateState from './create-update-state';

const reduceAction = combineReducers([{key: 'users', fn: users}, {key: 'teams', fn: teams}]);
const updateStateRacing = createUpdateState(reduceAction);
export default updateStateRacing;
