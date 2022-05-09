import animationLottie from '../../../../atom/lottie-wrapper/test/fixtures/default';

export const defaultProps = {
  'aria-label': 'Review Card Congrats Container',
  'data-name': 'card-star',
  animationLottie: {...animationLottie.props, height: undefined, width: undefined},
  iconAriaLabel: 'Image without information',
  className: undefined,
  cardType: 'card-star',
  reviewCardTitle: 'You have won',
  reviewCardValue: '100',
  timerAnimation: 200
};

export default {props: defaultProps};
