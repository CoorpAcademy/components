import {combineReducers} from 'redux';
import answers from './answers';
import configs from './configs';
import contents from './contents';
import exitNodes from './exit-nodes';
import progressions from './progressions';
import users from './users';

export default combineReducers({
  answers,
  configs,
  contents,
  exitNodes,
  progressions,
  users
});
