import {PostAnswerSuccessAction, POST_ANSWER_SUCCESS} from '../../actions/api/post-answer';
import {POST_PROGRESSION_SUCCESS, ReceivedProgression} from '../../actions/api/post-progression';
import {ProgressionFromAPI} from '../../types/common';

export type ProgressionState = ProgressionFromAPI | null;

const reducer = (
  // eslint-disable-next-line default-param-last
  state: ProgressionState = null,
  action: ReceivedProgression | PostAnswerSuccessAction
): ProgressionState => {
  switch (action.type) {
    case POST_ANSWER_SUCCESS:
    case POST_PROGRESSION_SUCCESS: {
      const progression = action.payload;
      return progression;
    }
    default:
      return state;
  }
};

export default reducer;
