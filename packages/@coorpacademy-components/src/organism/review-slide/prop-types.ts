import PropTypes from 'prop-types';
import ReviewCorrectionPopinPropTypes from '../../molecule/review-correction-popin/prop-types';
import AnswerPropTypes, {Props as AnswerProps} from '../../molecule/answer/prop-types';

export const SlidePropsTypes = PropTypes.shape({
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

export type CorrectionPopinProps = {
  klf: {
    label: string;
    tooltip: string;
  };
  information: {
    label: string;
    message: string;
  };
  next: {
    label: string;
    'aria-label': string;
  };
  resultLabel: string;
  type: 'right' | 'wrong';
};

export type SlideProps = {
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

export type Props = {
  slideIndex: string;
  num: number;
  slide: SlideProps;
  correctionPopinProps: CorrectionPopinProps;
  validateButton: {
    label: string;
    onClick: (args: unknown[]) => unknown;
    disabled: boolean;
  };
};
