import animationLottie from '../../../../atom/lottie-wrapper/test/fixtures/rank';

export const defaultProps = {
  'aria-label': 'Review Card Congrats Container',
  animationLottie: animationLottie.props,
  cardType: 'card-rank',
  className: undefined,
  reviewCardTitle: 'You are now',
  reviewCardValue: '14',
  rankSuffix: 'th'
};

export default {props: defaultProps};
