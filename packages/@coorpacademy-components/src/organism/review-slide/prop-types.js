import PropTypes from 'prop-types';
import ReviewCorrectionPopinPropTypes from '../../molecule/review-correction-popin/prop-types';
import AnswerPropTypes from '../../molecule/answer/prop-types';

export const SlideProp = PropTypes.shape({
  hidden: PropTypes.bool,
  position: PropTypes.number,
  loading: PropTypes.bool,
  animationType: PropTypes.string, // 'unstack' | 'restack'
  isCorrect: PropTypes.bool,
  animateCorrectionPopin: PropTypes.bool,
  showCorrectionPopin: PropTypes.bool,
  parentContentTitle: PropTypes.string,
  questionText: PropTypes.string,
  answerUI: PropTypes.shape(AnswerPropTypes)
});

export default {
  slideIndex: PropTypes.string,
  slide: SlideProp,
  validateButton: PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool
  }),
  correctionPopinProps: PropTypes.shape({
    klf: ReviewCorrectionPopinPropTypes.klf,
    information: ReviewCorrectionPopinPropTypes.information,
    next: PropTypes.shape({
      label: PropTypes.string,
      'aria-label': PropTypes.string // Pourquoi le onClick du next n'est pas ici !
      // updateSlidesOnNext: PropTypes.func.isRequired ???
    }),
    resultLabel: ReviewCorrectionPopinPropTypes.resultLabel,
    type: ReviewCorrectionPopinPropTypes.type
  })
};
