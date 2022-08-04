import {ValidateSlide, VALIDATE_SLIDE} from '../../actions/data/slides';
import {POST_PROGRESSION_SUCCESS, ReceiveProgression} from '../../actions/api/post-progression';
import {ProgressionFromAPI} from '../../types/common';

export type ProgressionState = ProgressionFromAPI | null;

const reducer = (
  // eslint-disable-next-line default-param-last
  state: ProgressionState = null,
  action: ValidateSlide | ReceiveProgression
): ProgressionState => {
  switch (action.type) {
    case VALIDATE_SLIDE: {
      // hard coded for now
      // TODO: fix on VALIDATE ticket -> launch a POST PROGRESSION
      return {
        _id: '1234',
        state: {
          pendingSlides: [],
          step: {
            current: Number.NaN
          },
          isCorrect: true,
          nextContent: {
            ref: 'sli_V1gKpYYZ2',
            type: 'slide'
          }
        }
      };
    }
    case POST_PROGRESSION_SUCCESS: {
      const progression = action.payload;
      return progression;
    }
    default:
      return state;
  }
};

// -----------------------------------------------------------------------------

export default reducer;
