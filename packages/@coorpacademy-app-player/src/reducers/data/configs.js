import set from 'lodash/fp/set';
import {ENGINE_CONFIG_FETCH_SUCCESS} from '../../actions/api/progressions';

const dataConfigsReducer = (state = {}, action) => {
  switch (action.type) {
    case ENGINE_CONFIG_FETCH_SUCCESS: {
      const {meta, payload} = action;
      const {engine} = meta;
      return set(['entities', `${engine.ref}@${engine.version}`], payload, state);
    }
    default:
      return state;
  }
};

export default dataConfigsReducer;
