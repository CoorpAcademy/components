import animationLottie from '../../../../atom/lottie-wrapper/test/fixtures/rank';

export const defaultProps = {
  'aria-label': 'Review Card Congrats Container',
  'data-name': 'card-rank',
  animationLottie: {...animationLottie.props, height: undefined, width: undefined},
  cardType: 'card-rank',
  className: undefined,
  reviewCardTitle: 'You are now',
  reviewCardValue: '14',
  rankSuffix: 'th',
  timerAnimation: 200
};

export default {props: defaultProps};
