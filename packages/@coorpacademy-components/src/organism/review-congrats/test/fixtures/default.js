import animationLottie from '../../../../atom/lottie-wrapper/test/fixtures/confetti';
import moleculeReviewCardStar from '../../../../molecule/review-card-congrats/test/fixtures/star';
import moleculeReviewCardRank from '../../../../molecule/review-card-congrats/test/fixtures/rank';

export const defaultProps = {
  'aria-label': 'Review Congratulations',
  animationLottie: animationLottie.props,
  title: 'Congratulations!',
  cardCongratsStar: moleculeReviewCardStar.props,
  cardCongratsRank: moleculeReviewCardRank.props,
  buttonLabelReviseSkill: 'Revise another skill',
  buttonLabelRevise: 'Continue revising',
  buttonAriaLabel: 'Continue revising',
  linkReviseSkill: '',
  linkRevise: ''
};

export default {props: defaultProps};
