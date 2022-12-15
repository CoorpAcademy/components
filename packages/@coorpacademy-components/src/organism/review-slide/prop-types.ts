import PropTypes from 'prop-types';
import type {Animation} from '@coorpacademy/react-native-animation';
import ReviewCorrectionPopinPropTypes, {
  ReviewCorrectionPopinProps
} from '../../molecule/review-correction-popin/prop-types';
import AnswerPropTypes, {AnswerProps} from '../../molecule/answer/prop-types';
import {TemplateContextValues} from '../../template/app-review/template-context';

export const SlidePropsTypes = PropTypes.shape({
  position: PropTypes.number,
  loading: PropTypes.bool,
  loadingAriaLabel: PropTypes.string,
  animationType: PropTypes.string, // 'unstack' | 'restack'
  isCorrect: PropTypes.bool,
  animateCorrectionPopin: PropTypes.bool,
  showCorrectionPopin: PropTypes.bool,
  disableContent: PropTypes.bool,
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

export type PopinProps = {
  correctionPopinProps: ReviewCorrectionPopinProps;
  slideIndex: string;
  showCorrectionPopin?: boolean;
  animateCorrectionPopin?: boolean;
};

export type ValidateButtonProps = {
  slideIndex: string;
  validateButton: ReviewSlideProps['validateButton'];
  primarySkinColor?: string;
};

export type SlideProps = {
  position: number;
  loading: boolean;
  loadingAriaLabel?: string;
  animationType?: 'unstack' | 'restack';
  isCorrect?: boolean;
  animateCorrectionPopin?: boolean;
  showCorrectionPopin?: boolean;
  parentContentTitle?: string;
  questionText?: string;
  answerUI?: AnswerProps;
};

export type ReviewSlideProps = {
  slideIndex: string;
  num: number;
  slide: SlideProps;
  correctionPopinProps?: ReviewCorrectionPopinProps;
  validateButton: {
    label: string;
    onClick: () => void;
    disabled: boolean;
  };
  animatedStyle?: Animation['animatedStyle'][];
};

export type Fixture = {props: ReviewSlideProps; mobileContext?: TemplateContextValues};
