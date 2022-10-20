import {
  ReceivedSlidesToReviewBySkillRef,
  SLIDES_TO_REVIEW_FETCH_SUCCESS
} from '../../actions/api/fetch-slides-to-review-by-skill-ref';

export type UIShowButtonRevisingState = boolean;

const reducer = (
  // eslint-disable-next-line default-param-last
  state: UIShowButtonRevisingState = false,
  action: ReceivedSlidesToReviewBySkillRef
): UIShowButtonRevisingState => {
  switch (action.type) {
    case SLIDES_TO_REVIEW_FETCH_SUCCESS: {
      return action.payload.length === 5;
    }
    default:
      return state;
  }
};

export default reducer;
