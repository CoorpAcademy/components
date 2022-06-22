import PropTypes from 'prop-types';
import omit from 'lodash/fp/omit';

import ReviewCongrats from '../../../organism/review-congrats';
import ReviewCorrectionPopin from '../../../molecule/review-correction-popin';
import ReviewBackground from '../../../atom/review-background';
import ReviewHeader from '../../../organism/review-header';
import Answer from '../../../molecule/answer';

export default {
  headerProps: PropTypes.shape(omit(['steps', ''], ReviewHeader.propTypes)),
  reviewBackgroundAriaLabel: ReviewBackground.propTypes['aria-label'],
  validate: PropTypes.shape({
    label: PropTypes.string
  }),
  slides: PropTypes.instanceOf(Map),
  finishedSlides: PropTypes.instanceOf(Map),
  stepItems: PropTypes.instanceOf(Map),
  reviewStatus: PropTypes.oneOfType(['finished', 'ongoing']),
  // .shape({
  //   questionText: PropTypes.string,
  //   answerUI: PropTypes.shape(Answer.propTypes)
  // }),
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
  // ---------------
  // Dispatchers
  validateSlide: PropTypes.func.isRequired,
  updateSlidesOnValidation: PropTypes.func.isRequired,
  updateSlidesOnNext: PropTypes.func.isRequired,
  updateReviewStatus: PropTypes.func.isRequired,
  updateStepItemsOnValidation: PropTypes.func.isRequired,
  updateStepItemsOnNext: PropTypes.func.isRequired,
  updateFinishedSlides: PropTypes.func.isRequired,
  slideValidationResult: PropTypes.shape({
    slideNumber: PropTypes.number,
    result: PropTypes.oneOfType(['success', 'failure']),
    exitNode: PropTypes.oneOfType(['successExitNode', 'failExitNode', undefined]),
    nextSlide: PropTypes.shape({
      questionText: PropTypes.string,
      answerUI: PropTypes.shape(Answer.propTypes)
    })
  })
};
