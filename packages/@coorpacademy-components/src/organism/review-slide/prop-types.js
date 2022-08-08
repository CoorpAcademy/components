import PropTypes from 'prop-types';
import ReviewCorrectionPopinPropTypes from '../../molecule/review-correction-popin/prop-types';

export default {
  slideIndex: PropTypes.string,
  slides: PropTypes.shape({
    slideRefs: PropTypes.arrayOf(PropTypes.string),
    values: PropTypes.objectOf(PropTypes.object) // specify typing if time is available
  }),
  primarySkinColor: PropTypes.string,
  validate: PropTypes.shape({
    label: PropTypes.string
  }),
  finishedSlides: PropTypes.shape({
    '0': PropTypes.bool,
    '1': PropTypes.bool,
    '2': PropTypes.bool,
    '3': PropTypes.bool,
    '4': PropTypes.bool
  }),
  finishedSlidesSize: PropTypes.number,
  correctionPopinProps: PropTypes.shape({
    klf: ReviewCorrectionPopinPropTypes.klf,
    information: ReviewCorrectionPopinPropTypes.information,
    next: PropTypes.shape({
      label: PropTypes.string,
      'aria-label': PropTypes.string
    }),
    successLabel: ReviewCorrectionPopinPropTypes.resultLabel,
    failureLabel: ReviewCorrectionPopinPropTypes.resultLabel
  }),
  validateSlide: PropTypes.func.isRequired,
  updateSlidesOnNext: PropTypes.func.isRequired,
  updateReviewStatus: PropTypes.func.isRequired,
  updateStepItemsOnNext: PropTypes.func.isRequired,
  progression: PropTypes.shape({
    _id: PropTypes.string,
    state: PropTypes.shape({
      isCorrect: PropTypes.bool,
      nextContent: PropTypes.shape({
        type: PropTypes.string, // 'success' | 'slide'
        ref: PropTypes.string // 'successExitNode' | string
      })
    })
  }).isRequired
};
