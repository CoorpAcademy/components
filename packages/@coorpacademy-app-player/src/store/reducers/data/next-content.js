import set from 'lodash/fp/set';
import {NEXT_CONTENT_FETCH_SUCCESS} from '../../actions/api/next-content';

const nextContentReducer = (state = {entities: {}}, action) => {
  switch (action.type) {
    case NEXT_CONTENT_FETCH_SUCCESS: {
      const {payload, meta} = action;
      const {id} = meta;
      const nextLevel = payload;
      if (nextLevel) {
        const {level, ref, levelTranslation, name} = nextLevel;
        return set(['entities', id, 'nextLevel'], {level, ref, levelTranslation, name}, state);
      }
      return set(['entities', id, 'nextLevel'], null, state);
    }
    default:
      return state;
  }
};

export default nextContentReducer;
