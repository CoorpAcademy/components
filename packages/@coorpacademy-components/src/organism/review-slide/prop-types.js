import PropTypes from 'prop-types';
import ReviewCorrectionPopinPropTypes from '../../molecule/review-correction-popin/prop-types';
import AnswerPropTypes from '../../molecule/answer/prop-types';

const NextSlideProp = PropTypes.shape({
  hidden: PropTypes.bool,
  position: PropTypes.number,
  animationType: PropTypes.string, // 'unstack' | 'restack'
  isCorrect: PropTypes.bool,
  showCorrectionPopin: PropTypes.bool,
  questionText: PropTypes.string,
  answerUI: AnswerPropTypes
});

const SlideProp = PropTypes.shape({
  ...NextSlideProp.props,
  nextContent: NextSlideProp
});

export default {
  slideIndex: PropTypes.string,
  uiSlides: PropTypes.shape({
    '0': SlideProp,
    '1': SlideProp,
    '2': SlideProp,
    '3': SlideProp,
    '4': SlideProp
  }),
  endReview: PropTypes.bool,
  validateButton: PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool
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
      'aria-label': PropTypes.string // Pourquoi le onClick du next n'est pas ici !
    }),
    resultLabel: ReviewCorrectionPopinPropTypes.resultLabel,
    type: ReviewCorrectionPopinPropTypes.type
  }),
  updateSlidesOnNext: PropTypes.func.isRequired,
  updateReviewStatus: PropTypes.func.isRequired,
  updateStepItemsOnNext: PropTypes.func.isRequired
};
