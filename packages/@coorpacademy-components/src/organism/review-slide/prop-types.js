import PropTypes from 'prop-types';
import ReviewCorrectionPopinPropTypes from '../../molecule/review-correction-popin/prop-types';
import AnswerPropTypes from '../../molecule/answer/prop-types';

const NextSlideProp = PropTypes.shape({
  hidden: PropTypes.bool,
  position: PropTypes.number,
  animationType: PropTypes.string, // 'unstack' | 'restack'
  isCorrect: PropTypes.bool,
  animateCorrectionPopin: PropTypes.bool,
  showCorrectionPopin: PropTypes.bool,
  questionText: PropTypes.string,
  answerUI: AnswerPropTypes
});

export const SlideProp = PropTypes.shape({
  ...NextSlideProp.props,
  nextContent: NextSlideProp
});

export default {
  slideIndex: PropTypes.string,
  slide: PropTypes.shape(SlideProp),
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
