import {getOr} from 'lodash/fp';
import {POST_PROGRESSION_SUCCESS, ReceiveProgression} from '../../actions/api/post-progression';
import {ValidateSlide, VALIDATE_SLIDE} from '../../actions/data/slides';

// -----------------------------------------------------------------------------

// TODO: transform this into UI data / fix on components' repo when
// fetch slide is addressed
export type ProgressionState = {
  _id?: string;
  state: {
    isCorrect: boolean;
    nextContent: {
      ref: 'successExitNode' | string;
      type: 'success' | 'slide';
    };
    pendingSlides: string[];
    step: {
      current: number;
    };
  };
  // TO refactor: (slideNumber)
  // virtual field
  slideNumber?: number;
} | null;

// -----------------------------------------------------------------------------

export const initialState: ProgressionState = null;

// -----------------------------------------------------------------------------

const reducer = (
  // eslint-disable-next-line default-param-last
  state: ProgressionState = initialState,
  action: ValidateSlide | ReceiveProgression
): ProgressionState => {
  switch (action.type) {
    case VALIDATE_SLIDE: {
      const previousSlideNumber: number = getOr(-1, 'slideNumber', state);
      // hard coded for now
      // TODO: fix on VALIDATE ticket
      return {
        _id: '1234',
        // virtual field
        slideNumber: previousSlideNumber + 1,
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
      const {progression} = action.payload;
      return progression;
    }
    default:
      return state;
  }
};

// -----------------------------------------------------------------------------

export default reducer;
