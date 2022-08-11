import PropTypes from 'prop-types';

import ReviewCongratsPropTypes from '../../../organism/review-congrats/prop-types';
import ReviewBackgroundPropTypes from '../../../atom/review-background/prop-types';
import ReviewHeaderPropTypes from '../../../organism/review-header/prop-types';
import StackedSlidesPropTypes from '../../../organism/review-stacked-slides/prop-types';

export const PlayerReviewPropTypes = {
  header: PropTypes.shape(ReviewHeaderPropTypes),
  stack: PropTypes.shape(StackedSlidesPropTypes),
  reviewBackgroundAriaLabel: ReviewBackgroundPropTypes['aria-label'],
  congratsProps: PropTypes.shape(ReviewCongratsPropTypes),
  // à quoi sertil la progression ?
  progression: PropTypes.shape({
    _id: PropTypes.string,
    state: PropTypes.shape({
      isCorrect: PropTypes.bool,
      nextContent: PropTypes.shape({
        type: PropTypes.string,
        ref: PropTypes.string
      })
    })
  }),
  // à quoi cela sert ?
  apiSlides: PropTypes.shape({
    slideRefs: PropTypes.arrayOf(PropTypes.string),
    values: PropTypes.objectOf(PropTypes.object) // specify typing if time is available
  })
};
