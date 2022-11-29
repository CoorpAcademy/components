import type {ProgressionFromAPI} from '@coorpacademy/review-services';
import {PostAnswerSuccessAction, POST_ANSWER_SUCCESS} from '../../actions/api/post-answer';
import {
  POST_PROGRESSION_REQUEST,
  POST_PROGRESSION_SUCCESS,
  FetchProgression,
  ReceivedProgression
} from '../../actions/api/post-progression';

export type ProgressionState = ProgressionFromAPI | null;

const initialState: ProgressionState = null;

const reducer = (
  // eslint-disable-next-line default-param-last
  state: ProgressionState = initialState,
  action: ReceivedProgression | PostAnswerSuccessAction | FetchProgression
): ProgressionState => {
  switch (action.type) {
    case POST_ANSWER_SUCCESS:
    case POST_PROGRESSION_SUCCESS: {
      const progression = action.payload;
      return progression;
    }
    case POST_PROGRESSION_REQUEST: {
      return initialState;
    }
    default:
      return state;
  }
};

export default reducer;
