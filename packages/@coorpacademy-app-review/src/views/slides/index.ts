import findLast from 'lodash/fp/findLast';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import last from 'lodash/fp/last';
import reduce from 'lodash/fp/reduce';
import set from 'lodash/fp/set';
import toInteger from 'lodash/fp/toInteger';
import type {Dispatch} from 'redux';
import join from 'lodash/fp/join';
import {CongratsCardProps} from '@coorpacademy/components/es/molecule/review-card-congrats/prop-types';
import {CMPopinProps} from '@coorpacademy/components/es/molecule/cm-popin/types';
import {LottieAnimationProps} from '@coorpacademy/components/es/atom/lottie-wrapper/prop-types';
import {ReviewPlayerProps} from '@coorpacademy/components/es/template/app-review/player/prop-types';
import {ReviewCorrectionPopinProps} from '@coorpacademy/components/es/molecule/review-correction-popin/prop-types';
import {SlideProps} from '@coorpacademy/components/es/organism/review-slide/prop-types';
import {ReviewCongratsProps} from '@coorpacademy/components/es/organism/review-congrats/prop-types';
import {closeQuitPopin, openQuitPopin} from '../../actions/ui/quit-popin';
import {getProgressionSlidesRefs} from '../../common';
import type {
  ConnectedOptions,
  PrimarySkin,
  ProgressionAnswerItem,
  ProgressionFromAPI,
  SlideContent,
  Translate
} from '../../types/common';
import type {StoreState} from '../../reducers';
import type {AnswerUI} from '../../types/slides';
import {postAnswer} from '../../actions/api/post-answer';
import {postProgression} from '../../actions/api/post-progression';
import {nextSlide} from '../../actions/ui/next-slide';
import {ProgressionState} from '../../reducers/data/progression';
import {mapApiSlideToUi} from './map-api-slide-to-ui';

const ICON_VALUES = {
  right: 'right',
  wrong: 'wrong',
  'no-answer': 'no-answer'
} as const;

type IconValue = keyof typeof ICON_VALUES;

type StepItem = {
  current: boolean;
  icon: IconValue;
  value: string;
};

type SlideUIAnimations = 'unstack' | 'restack';

export type ReviewSlide = {
  position: number;
  loading: boolean;
  showCorrectionPopin?: boolean;
  animateCorrectionPopin?: boolean;
  parentContentTitle?: string;
  questionText?: string;
  answerUI?: AnswerUI;
  animationType?: SlideUIAnimations;
};

type SlidesStack = {[key: string]: SlideProps};

const confettiAnimation: LottieAnimationProps = {
  'aria-label': 'aria lottie',
  'data-name': 'default-lottie',
  className: undefined,
  animationSrc: 'https://static-staging.coorpacademy.com/animations/review/confetti.json',
  loop: undefined,
  autoplay: true,
  rendererSettings: {
    hideOnTransparent: false
  },
  ie11ImageBackup: 'https://static-staging.coorpacademy.com/animations/review/conffeti_congrats.svg'
};

export const initialState: SlidesStack = {
  '0': {
    position: 0,
    loading: true
  },
  '1': {
    position: 1,
    loading: true
  },
  '2': {
    position: 2,
    loading: true
  },
  '3': {
    position: 3,
    loading: true
  },
  '4': {
    position: 4,
    loading: true
  }
};

const getCurrentSlideRef = (state: StoreState): string => {
  const currentSlideRef = get(['ui', 'currentSlideRef'], state);
  const endReview = currentSlideRef === 'successExitNode';

  if (!endReview) return currentSlideRef;
  const progression = state.data.progression as ProgressionFromAPI;
  const content = progression.state.content as SlideContent;
  return content.ref;
};

const isLastSlideAnswered = (slidesRef: string[], slideRef: string): boolean => {
  return last(slidesRef) === slideRef;
};

const buildStackSlides = (
  state: StoreState,
  dispatch: Dispatch,
  options: ConnectedOptions
): SlidesStack => {
  const {translate} = options;
  const currentSlideRef = getCurrentSlideRef(state);
  const progression = state.data.progression;

  if (!currentSlideRef || !progression) return initialState;
  const slideRefs = getProgressionSlidesRefs(progression);

  // @ts-expect-error typescript does not support capped versions of lodash functions
  const stack = reduce.convert({cap: false})(
    (acc: SlidesStack, uiSlide: ReviewSlide, _index: string): SlidesStack => {
      const index = toInteger(_index);
      const slideRef = slideRefs[index];
      const lastAnsweredSlideRef = isLastSlideAnswered(progression.state.slides, slideRef);

      const positions = state.ui.positions;
      // when unstack the last answered slide (position -1), we set the position to 0 only during the animation
      // to avoid to hide the slide (caused by the position -1).
      const position = lastAnsweredSlideRef && positions[index] === -1 ? 0 : positions[index];

      if (!slideRef) return set(index, {...uiSlide, position}, acc);
      const slideFromAPI = get(slideRef, state.data.slides);
      if (!slideFromAPI) return set(index, {...uiSlide, position}, acc);

      const answers = getOr([], ['ui', 'answers', slideRef], state);
      const {questionText, answerUI} = mapApiSlideToUi(dispatch, translate)(slideFromAPI, answers);
      const {title: parentContentTitle, type: parentContentType} = slideFromAPI.parentContentTitle;

      const isCurrentSlideRef = currentSlideRef === slideRef;
      const slideUI = get(['ui', 'slide', slideRef], state);
      const animateCorrectionPopin = isCurrentSlideRef && slideUI.animateCorrectionPopin;
      const showCorrectionPopin = isCurrentSlideRef && slideUI.showCorrectionPopin;
      const animationType = lastAnsweredSlideRef ? slideUI.animationType : undefined;

      const updatedUiSlide = {
        ...uiSlide,
        position,
        showCorrectionPopin,
        animateCorrectionPopin,
        loading: false,
        questionText,
        answerUI,
        parentContentTitle: translate('Content Parent Title', {
          contentTitle: parentContentTitle,
          contentType: parentContentType
        }),
        animationType
      };

      return set(index, updatedUiSlide, acc);
    },
    initialState,
    initialState
  );

  return stack;
};

const getIconForCurrentStep = (
  slideRef: string,
  lastGivenAnswerForSlide: ProgressionAnswerItem,
  currentSlideRef: string,
  lastGivenAnswer: ProgressionAnswerItem
): IconValue => {
  if (slideRef !== currentSlideRef) return lastGivenAnswerForSlide.isCorrect ? 'right' : 'wrong';

  if (lastGivenAnswer.slideRef !== slideRef) return 'no-answer';
  return lastGivenAnswerForSlide.isCorrect ? 'right' : 'wrong';
};

export const buildStepItems = (state: StoreState): StepItem[] => {
  const {progression} = state.data;
  const {currentSlideRef} = state.ui;
  if (!progression) return [];

  const defaultProps: StepItem[] = [
    {
      icon: 'no-answer',
      current: true,
      value: '1'
    },
    {
      icon: 'no-answer',
      current: false,
      value: '2'
    },
    {
      icon: 'no-answer',
      current: false,
      value: '3'
    },
    {
      icon: 'no-answer',
      current: false,
      value: '4'
    },
    {
      icon: 'no-answer',
      current: false,
      value: '5'
    }
  ];

  const slideRefs = getProgressionSlidesRefs(progression);
  const allAnswers = progression.state.allAnswers;
  const step = progression.state.step;
  const nextContentRef = progression.state.nextContent.ref;
  const lastGivenAnswer = last(allAnswers);
  if (!lastGivenAnswer) return defaultProps;

  const steps = defaultProps.map((stepItem, index): StepItem => {
    const slideRef = slideRefs[index];
    if (!slideRef) return stepItem; // non fecthed slide pour given index

    const lastGivenAnswerForSlide = findLast(answer => answer.slideRef === slideRef, allAnswers);
    // never answered slide
    if (!lastGivenAnswerForSlide) {
      return {
        ...stepItem,
        current: nextContentRef === currentSlideRef && step.current === index + 1
      };
    }

    // already answered slide, we computed based on the lastGivenAnswer
    return {
      ...stepItem,
      icon: getIconForCurrentStep(
        slideRef,
        lastGivenAnswerForSlide,
        currentSlideRef,
        lastGivenAnswer
      ),
      current: lastGivenAnswerForSlide.slideRef === currentSlideRef
    };
  });
  return steps;
};

const getCorrectionPopinProps =
  (dispatch: Dispatch) =>
  (
    isCorrect: boolean,
    correctAnswer: string[],
    klf: string,
    translate: Translate,
    endReview: boolean
  ): ReviewCorrectionPopinProps => {
    const nextLabel = endReview ? translate('Continue') : translate('Next Question');
    return {
      klf: isCorrect
        ? undefined
        : {
            label: translate('KLF'),
            tooltip: klf
          },
      resultLabel: isCorrect ? translate('Correct Answer') : translate('Wrong Answer'),
      information: {
        label: isCorrect ? translate('KLF') : translate('Correct Answer'),
        message: isCorrect ? klf : join(', ', correctAnswer)
      },
      next: {
        'aria-label': nextLabel,
        label: nextLabel,
        onClick: (): void => {
          dispatch(nextSlide);
        }
      },
      type: isCorrect ? 'right' : 'wrong'
    };
  };

const buildQuitPopinProps =
  (dispatch: Dispatch) =>
  (onQuitClick: () => void, translate: Translate, skin: PrimarySkin): CMPopinProps => {
    return {
      content: translate('Quit Title'),
      icon: `MoonRocket`,
      mode: 'alert',
      descriptionText: translate('Quit Description Text'),
      firstButton: {
        label: translate('Stop learning'),
        type: 'tertiary',
        customStyle: {
          color: '#ED3436'
        },
        handleOnclick: onQuitClick,
        'aria-label': translate('Stop learning')
      },
      secondButton: {
        label: translate('Continue learning'),
        type: 'primary',
        customStyle: {
          backgroundColor: skin.common.primary
        },
        handleOnclick: (): void => {
          dispatch(closeQuitPopin);
        },
        'aria-label': translate('Continue learning')
      }
    };
  };

const buildRankCard = (rank: number, translate: Translate): CongratsCardProps => {
  return {
    'aria-label': 'Review Card Congrats Container',
    'data-name': 'card-rank',
    animationLottie: {
      'aria-label': 'aria lottie',
      'data-name': 'default-lottie',
      animationSrc: 'https://static-staging.coorpacademy.com/animations/review/rank.json',
      loop: true,
      autoplay: true,
      ie11ImageBackup:
        'https://static-staging.coorpacademy.com/animations/review/rank_icon_congrats.svg'
    },
    cardType: 'card-rank',
    iconAriaLabel: 'Image without information',
    className: undefined,
    reviewCardTitle: translate('You are now'),
    reviewCardValue: `${rank}`,
    rankSuffix: 'th',
    timerAnimation: 200
  };
};

const buildCongratsProps = (
  state: StoreState,
  dispatch: Dispatch,
  options: ConnectedOptions
): ReviewCongratsProps | undefined => {
  if (!state.ui.showCongrats) return;

  const {translate, onQuitClick} = options;
  const progression = state.data.progression as ProgressionFromAPI;
  const stars = progression.state.stars;
  const cardCongratsStar: CongratsCardProps = {
    'aria-label': 'Review Card Congrats Container',
    'data-name': 'card-star',
    animationLottie: {
      'aria-label': 'aria lottie',
      'data-name': 'default-lottie',
      className: undefined,
      animationSrc: 'https://static-staging.coorpacademy.com/animations/review/star.json',
      loop: false,
      autoplay: undefined,
      rendererSettings: {
        hideOnTransparent: false
      },
      ie11ImageBackup:
        'https://static-staging.coorpacademy.com/animations/review/stars_icon_congrats.svg'
    },
    iconAriaLabel: 'Image without information',
    className: undefined,
    cardType: 'card-star',
    reviewCardTitle: translate('You have won'),
    reviewCardValue: `${stars}`,
    timerAnimation: 200
  };
  const {start, end} = state.data.rank;
  const newRank = start - end;
  const cardCongratsRank =
    !Number.isNaN(newRank) && newRank > 0 ? buildRankCard(end, translate) : undefined;

  const skillRef = progression.content.ref;
  const buttonRevising = state.ui.showButtonRevising
    ? {
        'aria-label': translate('Continue reviewing'),
        label: translate('Continue reviewing'),
        onClick: (): void => {
          dispatch(postProgression(skillRef));
        },
        type: 'tertiary'
      }
    : undefined;
  const buttonRevisingSkill = {
    'aria-label': translate('Revise another skill'),
    label: translate('Revise another skill'),
    onClick: onQuitClick,
    type: 'primary'
  };

  return {
    'aria-label': 'Review Congratulations',
    'data-name': 'review-congrats',
    animationLottie: confettiAnimation,
    title: translate('Congratulations!'),
    cardCongratsStar,
    cardCongratsRank,
    buttonRevising,
    buttonRevisingSkill
  };
};

const isEndOfProgression = (progression: ProgressionState): boolean => {
  if (!progression) return false;
  return progression.state.nextContent.ref === 'successExitNode';
};

export const mapStateToSlidesProps = (
  state: StoreState,
  dispatch: Dispatch,
  options: ConnectedOptions
): ReviewPlayerProps => {
  const {translate, onQuitClick, skin} = options;
  const currentSlideRef = getCurrentSlideRef(state);
  const endReview = isEndOfProgression(state.data.progression);
  const correction = get(['data', 'corrections', currentSlideRef], state);
  const isCorrect = get(['data', 'progression', 'state', 'isCorrect'], state);
  const klf = getOr('', ['data', 'slides', currentSlideRef, 'klf'], state);
  const showQuitPopin = get(['ui', 'showQuitPopin'], state);
  const showCongrats = get(['ui', 'showCongrats'], state);
  const skillName = getOr('', ['data', 'currentSkill', 'name'], state);
  return {
    header: {
      mode: translate('Review Title'),
      skillName,
      onQuitClick: () => dispatch(openQuitPopin),
      'aria-label': 'aria-header-wrapper',
      closeButtonAriaLabel: 'aria-close-button',
      steps: buildStepItems(state),
      hiddenSteps: showCongrats
    },
    stack: {
      slides: buildStackSlides(state, dispatch, options),
      validateButton: {
        label: translate('Validate'),
        disabled: !get(['ui', 'slide', currentSlideRef, 'validateButton'], state),
        onClick: (): void => {
          dispatch(postAnswer);
        }
      },
      correctionPopinProps:
        correction &&
        getCorrectionPopinProps(dispatch)(
          isCorrect,
          correction.correctAnswer,
          klf,
          translate,
          endReview
        ),
      endReview: endReview && state.ui.showCongrats
    },
    congrats: buildCongratsProps(state, dispatch, options),
    quitPopin: showQuitPopin
      ? buildQuitPopinProps(dispatch)(onQuitClick, translate, skin)
      : undefined
  };
};
