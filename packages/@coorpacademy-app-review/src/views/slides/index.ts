import findLast from 'lodash/fp/findLast';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import last from 'lodash/fp/last';
import reduce from 'lodash/fp/reduce';
import set from 'lodash/fp/set';
import toInteger from 'lodash/fp/toInteger';
import type {Dispatch} from 'redux';
import join from 'lodash/fp/join';
import {Props as CongratsProps} from '@coorpacademy/components/es/organism/review-congrats/prop-types';
import {Props as CongratsCardProps} from '@coorpacademy/components/es/molecule/review-card-congrats/prop-types';
import {Props as QuitPopinProps} from '@coorpacademy/components/es/molecule/cm-popin/types';
import {Props as LottieAnimationProps} from '@coorpacademy/components/es/atom/lottie-wrapper/prop-types';
import {Props as PlayerProps} from '@coorpacademy/components/es/template/app-review/player/prop-types';
import {Props as CorrectionPopinProps} from '@coorpacademy/components/es/molecule/review-correction-popin/prop-types';
import {SlideProps} from '@coorpacademy/components/es/organism/review-slide/prop-types';
import {closeQuitPopin, openQuitPopin} from '../../actions/ui/quit-popin';
import type {ProgressionAnswerItem, ProgressionFromAPI, SlideContent} from '../../types/common';
import {getProgressionSlidesRefs} from '../../common';
import type {StoreState} from '../../reducers';
import type {AnswerUI} from '../../types/slides';
import {postAnswer} from '../../actions/api/post-answer';
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

const buildStackSlides = (state: StoreState, dispatch: Dispatch): SlidesStack => {
  const currentSlideRef = getCurrentSlideRef(state);
  const progression = state.data.progression;

  if (!currentSlideRef || !progression) return initialState;
  const slideRefs = getProgressionSlidesRefs(progression);

  // @ts-expect-error typescript does not support capped versions of lodash functions
  const stack = reduce.convert({cap: false})(
    (acc: SlidesStack, uiSlide: ReviewSlide, _index: string): SlidesStack => {
      const index = toInteger(_index);

      const positions = state.ui.positions;
      const position = positions[index];

      const slideRef = slideRefs[index];
      if (!slideRef) return set(index, {...uiSlide, position}, acc);
      const slideFromAPI = get(slideRef, state.data.slides);
      if (!slideFromAPI) return set(index, {...uiSlide, position}, acc);

      const answers = getOr([], ['ui', 'answers', slideRef], state);
      const {questionText, answerUI} = mapApiSlideToUi(dispatch)(slideFromAPI, answers);
      const {title: parentContentTitle, type: parentContentType} = slideFromAPI.parentContentTitle;

      const isCurrentSlideRef = currentSlideRef === slideRef;
      const slideUI = get(['ui', 'slide', slideRef], state);
      const animateCorrectionPopin = isCurrentSlideRef && slideUI.animateCorrectionPopin;
      const showCorrectionPopin = isCurrentSlideRef && slideUI.showCorrectionPopin;
      const animationType = slideUI.animationType;

      const updatedUiSlide = {
        ...uiSlide,
        position,
        showCorrectionPopin,
        animateCorrectionPopin,
        loading: false,
        questionText,
        answerUI,
        parentContentTitle: `From "${parentContentTitle}" ${parentContentType}`,
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
  (isCorrect: boolean, correctAnswer: string[], klf: string): CorrectionPopinProps => {
    return {
      klf: isCorrect
        ? undefined
        : {
            label: '_klf',
            tooltip: klf
          },
      resultLabel: isCorrect ? '_right' : '_wrong',
      information: {
        label: isCorrect ? '_klf' : '_correctAnswer',
        message: isCorrect ? klf : join(',', correctAnswer)
      },
      next: {
        'aria-label': '_correctionNextAriaLabel',
        label: '_correctionNextLabel',
        onClick: (): void => {
          dispatch(nextSlide);
        }
      },
      type: isCorrect ? 'right' : 'wrong'
    };
  };

const buildQuitPopinProps =
  (dispatch: Dispatch) =>
  (onQuitClick: () => void): QuitPopinProps => {
    return {
      content: `Tu t'en vas déjà ?`,
      icon: `MoonRocket`,
      mode: 'alert',
      descriptionText: `Tu vas t'en sortir ! Si tu arrêtes maintenant, tu vas perdre ta progression.`,
      firstButton: {
        label: 'Arrêter ma session',
        type: 'tertiary',
        customStyle: {
          color: '#ED3436'
        },
        handleOnclick: onQuitClick,
        'aria-label': 'Stop session'
      },
      secondButton: {
        label: `Continuer d'apprendre`,
        type: 'primary',
        handleOnclick: (): void => {
          dispatch(closeQuitPopin);
        },
        'aria-label': 'Continue review'
      }
    };
  };

const buildRankCard = (rank: number): CongratsCardProps => {
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
    reviewCardTitle: 'You are now',
    reviewCardValue: `${rank}`,
    rankSuffix: 'th',
    timerAnimation: 200
  };
};

const buildCongratsProps = (state: StoreState): CongratsProps | undefined => {
  if (!state.ui.showCongrats) return;

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
    reviewCardTitle: 'You have won',
    reviewCardValue: `${stars}`,
    timerAnimation: 200
  };

  const {start, end} = state.data.rank;
  const newRank = start - end;
  const cardCongratsRank = !Number.isNaN(newRank) && newRank > 0 ? buildRankCard(end) : undefined;

  return {
    'aria-label': 'Review Congratulations',
    'data-name': 'review-congrats',
    animationLottie: confettiAnimation,
    title: 'Congratulations!',
    cardCongratsStar,
    cardCongratsRank,
    buttonRevising: undefined, // TODO make boutons and actions
    buttonRevisingSkill: undefined // TODO make boutons and actions
  };
};

const isEndOfProgression = (progression: ProgressionState): boolean => {
  if (!progression) return false;
  return progression.state.nextContent.ref === 'successExitNode';
};

export const mapStateToSlidesProps = (
  state: StoreState,
  dispatch: Dispatch,
  onQuitClick: () => void
): PlayerProps => {
  const currentSlideRef = getCurrentSlideRef(state);
  const endReview = isEndOfProgression(state.data.progression);
  const correction = get(['data', 'corrections', currentSlideRef], state);
  const isCorrect = get(['data', 'progression', 'state', 'isCorrect'], state);
  const klf = getOr('', ['data', 'slides', currentSlideRef, 'klf'], state);
  const showQuitPopin = get(['ui', 'showQuitPopin'], state);
  const showCongrats = get(['ui', 'showCongrats'], state);
  return {
    header: {
      mode: '__revision_mode',
      skillName: '__agility',
      onQuitClick: () => dispatch(openQuitPopin),
      'aria-label': 'aria-header-wrapper',
      closeButtonAriaLabel: 'aria-close-button',
      steps: buildStepItems(state),
      hiddenSteps: showCongrats
    },
    stack: {
      slides: buildStackSlides(state, dispatch),
      validateButton: {
        label: '__validate',
        disabled: !get(['ui', 'slide', currentSlideRef, 'validateButton'], state),
        onClick: (): void => {
          dispatch(postAnswer);
        }
      },
      correctionPopinProps:
        correction && getCorrectionPopinProps(dispatch)(isCorrect, correction.correctAnswer, klf),
      endReview: endReview && state.ui.showCongrats
    },
    congrats: buildCongratsProps(state),
    quitPopin: showQuitPopin ? buildQuitPopinProps(dispatch)(onQuitClick) : undefined
  };
};
