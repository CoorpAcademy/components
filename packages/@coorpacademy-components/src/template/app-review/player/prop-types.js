import PropTypes from 'prop-types';

import ReviewCongratsPropTypes from '../../../organism/review-congrats/prop-types';
import ReviewBackgroundPropTypes from '../../../atom/review-background/prop-types';
import ReviewHeader from '../../../organism/review-header/prop-types';
import SlidesPropTypes from '../../../organism/review-stacked-slides/prop-types';

export const SlidesReviewPropTypes = {
  header: PropTypes.shape(ReviewHeader.propTypes),
  slides: PropTypes.shape(SlidesPropTypes.propTypes),
  reviewBackgroundAriaLabel: ReviewBackgroundPropTypes['aria-label'],
  apiSlides: PropTypes.shape({
    slideRefs: PropTypes.arrayOf(PropTypes.string),
    values: PropTypes.objectOf(PropTypes.object) // specify typing if time is available
  }),
  reviewStatus: PropTypes.string, // 'finished' | 'ongoing'
  congratsProps: PropTypes.shape(ReviewCongratsPropTypes)
};
