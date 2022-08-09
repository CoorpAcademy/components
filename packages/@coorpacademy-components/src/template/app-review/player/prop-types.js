import PropTypes from 'prop-types';

import ReviewCongratsPropTypes from '../../../organism/review-congrats/prop-types';
import ReviewBackgroundPropTypes from '../../../atom/review-background/prop-types';
import ReviewHeader from '../../../organism/review-header/prop-types';
import SlidePropTypes from '../../../organism/review-slide/prop-types';

export const SlidesReviewPropTypes = {
  header: ReviewHeader.propTypes,
  reviewBackgroundAriaLabel: ReviewBackgroundPropTypes['aria-label'],
  validate: SlidePropTypes.validate,
  uiSlides: SlidePropTypes.uiSlides,
  apiSlides: PropTypes.shape({
    slideRefs: PropTypes.arrayOf(PropTypes.string),
    values: PropTypes.objectOf(PropTypes.object) // specify typing if time is available
  }),
  finishedSlides: SlidePropTypes.finishedSlides,
  reviewStatus: PropTypes.string, // 'finished' | 'ongoing'
  correctionPopinProps: SlidePropTypes.correctionPopinProps,
  congratsProps: PropTypes.shape(ReviewCongratsPropTypes),
  progression: SlidePropTypes.progression,
  validateSlide: SlidePropTypes.validateSlide,
  updateSlidesOnNext: PropTypes.func.isRequired,
  updateReviewStatus: PropTypes.func.isRequired,
  updateStepItemsOnValidation: PropTypes.func.isRequired,
  updateStepItemsOnNext: PropTypes.func.isRequired,
  updateFinishedSlides: PropTypes.func.isRequired
};
