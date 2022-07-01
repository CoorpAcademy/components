import PropTypes from 'prop-types';
import omit from 'lodash/fp/omit';

import ReviewCongrats from '../../../organism/review-congrats';
import ReviewCorrectionPopin from '../../../molecule/review-correction-popin';
import ReviewBackground from '../../../atom/review-background';
import ReviewHeader from '../../../organism/review-header';
import Answer from '../../../molecule/answer';

const NextSlideProp = PropTypes.shape({
  hidden: PropTypes.bool,
  position: PropTypes.number,
  // 'unstack' | 'restack'
  animationType: PropTypes.string,
  // 'success' | 'failure'
  validationResult: PropTypes.string,
  endReview: PropTypes.bool,
  questionText: PropTypes.string,
  answerUI: Answer
});

const SlideProp = PropTypes.shape({
  ...NextSlideProp.props,
  nextSlide: NextSlideProp
});

const StepItemProp = PropTypes.shape({
  current: PropTypes.bool,
  icon: PropTypes.string,
  value: PropTypes.string
});

export const SlidesReviewPropTypes = {
  headerProps: PropTypes.shape(omit('steps', ReviewHeader.propTypes)),
  reviewBackgroundAriaLabel: ReviewBackground.propTypes['aria-label'],
  validate: PropTypes.shape({
    label: PropTypes.string
  }),
  slides: PropTypes.shape({
    slideNumbers: PropTypes.arrayOf(PropTypes.number),
    0: SlideProp,
    1: SlideProp,
    2: SlideProp,
    3: SlideProp,
    4: SlideProp
  }),
  finishedSlides: PropTypes.shape({
    slideNumbers: PropTypes.arrayOf(PropTypes.number),
    0: PropTypes.bool,
    1: PropTypes.bool,
    2: PropTypes.bool,
    3: PropTypes.bool,
    4: PropTypes.bool
  }),
  stepItems: PropTypes.shape({
    slideNumbers: PropTypes.arrayOf(PropTypes.number),
    0: StepItemProp,
    1: StepItemProp,
    2: StepItemProp,
    3: StepItemProp,
    4: StepItemProp
  }),
  // 'finished' | 'ongoing'
  reviewStatus: PropTypes.string,
  correctionPopinProps: PropTypes.shape({
    // ---------------
    klf: ReviewCorrectionPopin.propTypes.klf,
    information: ReviewCorrectionPopin.propTypes.information,
    next: PropTypes.shape({
      label: PropTypes.string,
      'aria-label': PropTypes.string
    }),
    successLabel: ReviewCorrectionPopin.propTypes.resultLabel,
    failureLabel: ReviewCorrectionPopin.propTypes.resultLabel
  }),
  congratsProps: PropTypes.shape(ReviewCongrats.propTypes),
  progression: PropTypes.shape({
    slideNumber: PropTypes.number,
    // 'success' | 'failure'
    isCorrect: PropTypes.bool,
    // 'successExitNode' | 'failExitNode'
    exitNode: PropTypes.string,
    nextSlide: PropTypes.shape({
      questionText: PropTypes.string,
      answerUI: PropTypes.shape(Answer.propTypes)
    })
  }),
  // ---------------------------------------------------------------------------
  // Dispatchers
  validateSlide: PropTypes.func.isRequired,
  updateSlidesOnValidation: PropTypes.func.isRequired,
  updateSlidesOnNext: PropTypes.func.isRequired,
  updateReviewStatus: PropTypes.func.isRequired,
  updateStepItemsOnValidation: PropTypes.func.isRequired,
  updateStepItemsOnNext: PropTypes.func.isRequired,
  updateFinishedSlides: PropTypes.func.isRequired
};

export const SlidePropTypes = {
  slideNumber: PropTypes.number,
  slides: SlidesReviewPropTypes.slides,
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

export const StackedSlidesPropTypes = omit('slideNumber', SlidePropTypes);
