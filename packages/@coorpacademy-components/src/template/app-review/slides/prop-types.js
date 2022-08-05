import PropTypes from 'prop-types';
import omit from 'lodash/fp/omit';

import ReviewCongratsPropTypes from '../../../organism/review-congrats/prop-types';
import ReviewCorrectionPopinPropTypes from '../../../molecule/review-correction-popin/prop-types';
import ReviewBackgroundPropTypes from '../../../atom/review-background/prop-types';
import ReviewHeader from '../../../organism/review-header/prop-types';
import AnswerPropTypes from '../../../molecule/answer/prop-types';

const NextSlideProp = PropTypes.shape({
  hidden: PropTypes.bool,
  position: PropTypes.number,
  // 'unstack' | 'restack'
  animationType: PropTypes.string,
  isCorrect: PropTypes.boolean,
  endReview: PropTypes.bool,
  questionText: PropTypes.string,
  answerUI: AnswerPropTypes
});

const SlideProp = PropTypes.shape({
  ...NextSlideProp.props,
  nextContent: NextSlideProp
});

const StepItemProp = PropTypes.shape({
  current: PropTypes.bool,
  icon: PropTypes.string,
  value: PropTypes.string
});

export const SlidesReviewPropTypes = {
  headerProps: PropTypes.shape(omit('steps', ReviewHeader.propTypes)),
  reviewBackgroundAriaLabel: ReviewBackgroundPropTypes['aria-label'],
  validate: PropTypes.shape({
    label: PropTypes.string
  }),
  uiSlides: PropTypes.shape({
    '0': SlideProp,
    '1': SlideProp,
    '2': SlideProp,
    '3': SlideProp,
    '4': SlideProp
  }),
  apiSlides: PropTypes.shape({
    slideRefs: PropTypes.arrayOf(PropTypes.string),
    values: PropTypes.objectOf(PropTypes.object) // specify typing if time is available
  }),
  finishedSlides: PropTypes.shape({
    '0': PropTypes.bool,
    '1': PropTypes.bool,
    '2': PropTypes.bool,
    '3': PropTypes.bool,
    '4': PropTypes.bool
  }),
  stepItems: PropTypes.shape({
    '0': StepItemProp,
    '1': StepItemProp,
    '2': StepItemProp,
    '3': StepItemProp,
    '4': StepItemProp
  }),
  // 'finished' | 'ongoing'
  reviewStatus: PropTypes.string,
  correctionPopinProps: PropTypes.shape({
    // ---------------
    klf: ReviewCorrectionPopinPropTypes.klf,
    information: ReviewCorrectionPopinPropTypes.information,
    next: PropTypes.shape({
      label: PropTypes.string,
      'aria-label': PropTypes.string
    }),
    successLabel: ReviewCorrectionPopinPropTypes.resultLabel,
    failureLabel: ReviewCorrectionPopinPropTypes.resultLabel
  }),
  congratsProps: PropTypes.shape(ReviewCongratsPropTypes),
  progression: PropTypes.shape({
    _id: PropTypes.string,
    state: PropTypes.shape({
      isCorrect: PropTypes.bool,
      // unused for now
      // step: PropTypes.shape({
      //   current: PropTypes.number
      // }),
      nextContent: PropTypes.shape({
        // 'success' | 'slide'
        type: PropTypes.string,
        // 'successExitNode' | string
        ref: PropTypes.string
      })
    })
  }).isRequired,
  // ---------------------------------------------------------------------------
  // Dispatchers
  validateSlide: PropTypes.func.isRequired,
  updateSlidesOnNext: PropTypes.func.isRequired,
  updateReviewStatus: PropTypes.func.isRequired,
  updateStepItemsOnValidation: PropTypes.func.isRequired,
  updateStepItemsOnNext: PropTypes.func.isRequired,
  updateFinishedSlides: PropTypes.func.isRequired
};

export const SlidePropTypes = {
  slideIndex: PropTypes.string,
  slides: SlidesReviewPropTypes.apiSlides,
  primarySkinColor: PropTypes.string,
  validate: SlidesReviewPropTypes.validate,
  finishedSlides: SlidesReviewPropTypes.finishedSlides,
  finishedSlidesSize: PropTypes.number,
  correctionPopinProps: SlidesReviewPropTypes.correctionPopinProps,
  // ---------------
  // Dispatchers
  validateSlide: SlidesReviewPropTypes.validateSlide,
  updateSlidesOnNext: SlidesReviewPropTypes.updateSlidesOnNext,
  updateReviewStatus: SlidesReviewPropTypes.updateReviewStatus,
  updateStepItemsOnNext: SlidesReviewPropTypes.updateStepItemsOnNext,
  progression: SlidesReviewPropTypes.progression
};

export const StackedSlidesPropTypes = omit('slideIndex', SlidePropTypes);
