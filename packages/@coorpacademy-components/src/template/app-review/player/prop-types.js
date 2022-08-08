import PropTypes from 'prop-types';
import omit from 'lodash/fp/omit';

import ReviewCongratsPropTypes from '../../../organism/review-congrats/prop-types';
import ReviewBackgroundPropTypes from '../../../atom/review-background/prop-types';
import ReviewHeader from '../../../organism/review-header/prop-types';
import SlidePropTypes from '../../../organism/review-slide/prop-types';

const StepItemProp = PropTypes.shape({
  current: PropTypes.bool,
  icon: PropTypes.string,
  value: PropTypes.string
});

export const SlidesReviewPropTypes = {
  headerProps: PropTypes.shape(omit('steps', ReviewHeader.propTypes)),
  reviewBackgroundAriaLabel: ReviewBackgroundPropTypes['aria-label'],
  validate: SlidePropTypes.validate,
  uiSlides: SlidePropTypes.uiSlides,
  apiSlides: PropTypes.shape({
    slideRefs: PropTypes.arrayOf(PropTypes.string),
    values: PropTypes.objectOf(PropTypes.object) // specify typing if time is available
  }),
  finishedSlides: SlidePropTypes.finishedSlides,
  stepItems: PropTypes.shape({
    '0': StepItemProp,
    '1': StepItemProp,
    '2': StepItemProp,
    '3': StepItemProp,
    '4': StepItemProp
  }),
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
