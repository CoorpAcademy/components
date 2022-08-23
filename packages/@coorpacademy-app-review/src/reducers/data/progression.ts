import {ValidateSlide} from '../../actions/ui/slides';
import {POST_PROGRESSION_SUCCESS, ReceivedProgression} from '../../actions/api/post-progression';
import {ProgressionFromAPI} from '../../types/common';

export type ProgressionState = ProgressionFromAPI | null;

const reducer = (
  // eslint-disable-next-line default-param-last
  state: ProgressionState = null,
  action: ValidateSlide | ReceivedProgression
): ProgressionState => {
  switch (action.type) {
    case POST_PROGRESSION_SUCCESS: {
      const progression = action.payload;
      return progression;
    }
    default:
      return state;
  }
};

export default reducer;
