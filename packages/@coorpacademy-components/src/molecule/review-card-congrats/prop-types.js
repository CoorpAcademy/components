import PropTypes from 'prop-types';
import AtomLottieWrapperPropTypes from '../../atom/lottie-wrapper/prop-types';

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
