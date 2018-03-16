import assign from 'lodash/fp/assign';
import set from 'lodash/fp/set';
import update from 'lodash/fp/update';
import isNull from 'lodash/fp/isNull';
import get from 'lodash/fp/get';
import unset from 'lodash/fp/unset';
import pipe from 'lodash/fp/pipe';
import {
  USER_FETCH_ME_SUCCESS
} from '../../actions/api/users';

const dataUsersReducer = (state = {entities: {}}, action) => {
  switch (action.type) {
    case USER_FETCH_ME_SUCCESS:
      return set(['entities', action.payload._id], action.payload, state);
    default:
      return state;
  }
};

export default dataUsersReducer;
