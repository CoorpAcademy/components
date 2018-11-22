import set from 'lodash/fp/set';
import {ENGINE_CONFIG_FETCH_SUCCESS} from '../../actions/api/progressions';

const dataConfigsReducer = (state = {}, action) => {
  switch (action.type) {
    case ENGINE_CONFIG_FETCH_SUCCESS: {
      const {payload: config, meta} = action;
      const {engine} = meta;
      return set(['entities', `${engine.ref}@${engine.version}`], config, state);
    }
    default:
      return state;
  }
};

export default dataConfigsReducer;
