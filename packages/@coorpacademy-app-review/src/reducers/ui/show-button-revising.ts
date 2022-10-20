import {
  ReceivedSlidesToReviewBySkillRef,
  SLIDES_TO_REVIEW_FETCH_SUCCESS
} from '../../actions/api/fetch-slides-to-review-by-skill-ref';
import {FetchProgression, POST_PROGRESSION_REQUEST} from '../../actions/api/post-progression';

export type UIShowButtonRevisingState = boolean;

const reducer = (
  // eslint-disable-next-line default-param-last
  state: UIShowButtonRevisingState = false,
  action: ReceivedSlidesToReviewBySkillRef | FetchProgression
): UIShowButtonRevisingState => {
  switch (action.type) {
    case SLIDES_TO_REVIEW_FETCH_SUCCESS: {
      return action.payload.length === 5;
    }
    case POST_PROGRESSION_REQUEST: {
      return false;
    }
    default:
      return state;
  }
};

export default reducer;
