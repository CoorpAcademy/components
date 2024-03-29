import PropTypes from 'prop-types';
import AtomLottieWrapperPropTypes, {
  LottieAnimationProps
} from '../../atom/lottie-wrapper/prop-types';

export type CongratsCardProps = {
  'aria-label': string;
  'data-name': string;
  animationLottie: LottieAnimationProps;
  iconAriaLabel: string;
  className?: string;
  cardType: string;
  reviewCardTitle: string;
  reviewCardValue: string;
  rankSuffix?: string;
  timerAnimation: number;
};

export default {
  'aria-label': PropTypes.string,
  'data-name': PropTypes.string,
  animationLottie: PropTypes.shape(AtomLottieWrapperPropTypes),
  cardType: PropTypes.string,
  iconAriaLabel: PropTypes.string,
  className: PropTypes.string,
  reviewCardTitle: PropTypes.string,
  reviewCardValue: PropTypes.string,
  rankSuffix: PropTypes.string,
  timerAnimation: PropTypes.number
};
