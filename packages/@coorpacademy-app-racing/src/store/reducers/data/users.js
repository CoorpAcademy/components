import set from 'lodash/fp/set';
import {USER_FETCH_ME_SUCCESS} from '../../actions/api/users';

const dataUsersReducer = (state = {entities: {}}, action) => {
  switch (action.type) {
    case USER_FETCH_ME_SUCCESS:
      return set(['entities', action.payload._id], action.payload, state);
    default:
      return state;
  }
};

export default dataUsersReducer;
