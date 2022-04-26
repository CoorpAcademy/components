import animationLottie from '../../../../atom/lottie-wrapper/test/fixtures/confetti';
import moleculeReviewCardCongrats from '../../../../molecule/review-card-congrats/test/fixtures/star';

export const defaultProps = {
  'aria-label': 'Review Congratulations',
  animationLottie: animationLottie.props,
  title: 'Congratulations!',
  cardCongratsStar: moleculeReviewCardCongrats.props,
  buttonLabelReviseSkill: 'Revise another skill',
  buttonLabelRevise: 'Continue revising',
  buttonAriaLabel: 'Continue revising',
  linkReviseSkill: '',
  linkRevise: ''
};

export default {props: defaultProps};
