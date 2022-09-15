import animationLottie from '../../../../atom/lottie-wrapper/test/fixtures/confetti';
import moleculeReviewCardStar from '../../../../molecule/review-card-congrats/test/fixtures/star';

export const defaultProps = {
  'aria-label': 'Review Congratulations',
  'data-name': 'review-congrats',
  animationLottie: {...animationLottie.props, height: undefined, width: undefined},
  title: 'Congratulations!',
  cardCongratsStar: moleculeReviewCardStar.props,
  cardCongratsRank: undefined,
  buttonRevising: {
    'aria-label': 'Continue revising button',
    label: 'Continue revising',
    onClick: () => console.log('Continue revising'),
    type: 'tertiary'
  },
  buttonRevisingSkill: {
    label: 'Revise another skill',
    'aria-label': 'Revise another skill button',
    onClick: () => console.log('Revise another skill'),
    type: 'primary'
  }
};

export default {props: defaultProps};
