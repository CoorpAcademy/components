/* eslint-disable no-console */
import {SlidesViewProps} from '../types/views';

export const correctionPopinProps: SlidesViewProps['correctionPopinProps'] = {
  klf: {
    label: 'Key learning factor',
    tooltip: 'Some tooltip info.',
    onClick: () => {
      console.log('klf onClick');
    }
  },
  information: {
    label: 'Key learning factor',
    message: 'info msg'
  },
  next: {
    label: 'Next',
    ariaLabel: 'Next'
  },
  successLabel: 'CORRECT ANSWER',
  failureLabel: 'WRONG ANSWER'
};

const confettiAnimationProps = {
  'aria-label': 'aria lottie',
  'data-name': 'default-lottie',
  className: undefined,
  animationSrc: 'https://static-staging.coorpacademy.com/animations/review/confetti.json',
  loop: undefined,
  autoplay: true,
  rendererSettings: {
    hideOnTransparent: false,
    animationClassName: ''
  },
  ie11ImageBackup:
    'https://static-staging.coorpacademy.com/animations/review/conffeti_congrats.svg',
  animationControl: undefined
};

const starAnimationProps = {
  'aria-label': 'Review Card Congrats Container',
  'data-name': 'card-star',
  animationLottie: {
    'aria-label': 'aria lottie',
    'data-name': 'default-lottie',
    animationSrc: 'https://static-staging.coorpacademy.com/animations/review/star.json',
    ie11ImageBackup:
      'https://static-staging.coorpacademy.com/animations/review/stars_icon_congrats.svg'
  },
  iconAriaLabel: 'Image without information',
  cardType: 'card-star',
  reviewCardTitle: 'You have won',
  reviewCardValue: '100',
  timerAnimation: 200
};

const rankAnimationProps = {
  'aria-label': 'Review Card Congrats Container',
  'data-name': 'card-rank',
  animationLottie: {
    'aria-label': 'aria lottie',
    'data-name': 'default-lottie',
    animationSrc: 'https://static-staging.coorpacademy.com/animations/review/rank.json',
    ie11ImageBackup:
      'https://static-staging.coorpacademy.com/animations/review/rank_icon_congrats.svg'
  },
  cardType: 'card-rank',
  iconAriaLabel: 'Image without information',
  reviewCardTitle: 'You are now',
  reviewCardValue: '14',
  rankSuffix: 'th',
  timerAnimation: 200
};

export const congratsProps: SlidesViewProps['congratsProps'] = {
  'aria-label': 'Review Congratulations',
  'data-name': 'review-congrats',
  animationLottie: confettiAnimationProps,
  title: 'Congratulations!',
  cardCongratsStar: starAnimationProps,
  cardCongratsRank: rankAnimationProps,
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
