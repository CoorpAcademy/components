import PropTypes from 'prop-types';
import ReviewCorrectionPopinPropTypes from '../../molecule/review-correction-popin/prop-types';
import AnswerPropTypes, {Props as AnswerProps} from '../../molecule/answer/prop-types';

export const SlidePropsTypes = PropTypes.shape({
  hidden: PropTypes.bool,
  position: PropTypes.number,
  loading: PropTypes.bool,
  loadingAriaLabel: PropTypes.string,
  animationType: PropTypes.string, // 'unstack' | 'restack'
  isCorrect: PropTypes.bool,
  animateCorrectionPopin: PropTypes.bool,
  showCorrectionPopin: PropTypes.bool,
  parentContentTitle: PropTypes.string,
  questionText: PropTypes.string,
  answerUI: PropTypes.shape(AnswerPropTypes)
});

const propTypes = {
  slideIndex: PropTypes.string,
  num: PropTypes.number.isRequired,
  slide: SlidePropsTypes,
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

export default propTypes;

export type Props = PropTypes.InferProps<typeof propTypes>;
export type SlideProps = {
  hidden: boolean;
  position: number;
  loading: boolean;
  loadingAriaLabel: string;
  animationType: 'unstack' | 'restack';
  isCorrect: boolean;
  animateCorrectionPopin: boolean;
  showCorrectionPopin: boolean;
  parentContentTitle: string;
  questionText: string;
  answerUI: AnswerProps;
};
