import {
  getCurrentSlide,
  getLives,
  hideTourguide,
  isTourguideEligible,
  setTourguideStep,
  trackTourguideCompleted,
  trackTourguideDismissed,
  trackTourguideStarted,
  trackTourguideStepViewed
} from '@coorpacademy/player-store';
import {cloneDeep, filter, get, map, pipe, size} from 'lodash/fp';
import createPlayerStateToProps from './player';
import mapStateToErrorPopinProps from './error-popin';

const TOUR_GROUP = 'app-player-question-tour-guide';

const createTutorialSteps = translate => [
  {
    ref: 'page',
    target: 'body',
    title: translate('Tourguide step 1 title'),
    content: translate('Tourguide step 1 content'),
    order: 1,
    group: TOUR_GROUP
  },
  {
    ref: 'slide',
    target: '[data-name="slide"]',
    title: translate('Tourguide step 2 title'),
    content: translate('Tourguide step 2 content'),
    order: 2,
    group: TOUR_GROUP
  },
  {
    ref: 'media',
    target: '[data-type="media"]',
    title: translate('Tourguide step 3 title'),
    content: translate('Tourguide step 3 content'),
    order: 3,
    group: TOUR_GROUP
  },
  {
    ref: 'clue',
    target: '[data-type="clue"]',
    title: translate('Tourguide step 4 title'),
    content: translate('Tourguide step 4 content'),
    order: 4,
    group: TOUR_GROUP
  },
  {
    ref: 'language',
    target: '[data-name="button-multi-lang"]',
    title: translate('Tourguide step 5 title'),
    content: translate('Tourguide step 5 content'),
    order: 5,
    group: TOUR_GROUP
  },
  {
    ref: 'help',
    target: '[data-name="help-button"]',
    title: translate('Tourguide step 6 title'),
    content: translate('Tourguide step 6 content'),
    order: 6,
    group: TOUR_GROUP
  },
  {
    ref: 'life',
    target: '[data-name="life"]',
    title: translate('Tourguide step 7 title'),
    content: translate('Tourguide step 7 content'),
    order: 7,
    group: TOUR_GROUP
  }
];

const tourguideStateToProps = (state, options, store) => {
  const {translate} = options;
  const slide = getCurrentSlide(state);
  const hasMedia = pipe(get('lessons'), size)(slide) > 0;
  const hasClue = pipe(get('hasClue'), Boolean)(slide);
  const {hide: livesHidden} = getLives(state);
  const tourguideState = get('ui.tourguide', state) || {};
  const tourguideVisible = Boolean(tourguideState.visible);
  const tourguideStep = typeof tourguideState.step === 'number' ? tourguideState.step : 0;
  const tourguideForceStart = Boolean(tourguideState.forceStart);
  const canShowHelp = isTourguideEligible(state, options);
  const multiLangOptions = options.multiLang || {};
  const canShowLang = pipe(get('supportedLangs'), size)(multiLangOptions) > 1;

  const stepsForTour = pipe(
    filter(step => {
      if (step.order === 3) {
        return hasMedia;
      }
      if (step.order === 4) {
        return hasClue;
      }
      if (step.order === 5) {
        return canShowLang;
      }
      if (step.order === 6) {
        return canShowHelp;
      }
      if (step.order === 7) {
        return !livesHidden;
      }
      return true;
    }),
    map(cloneDeep)
  )(createTutorialSteps(translate));
  const getStepTracking = stepIndex => {
    const totalSteps = stepsForTour.length;
    const isValidIndex = typeof stepIndex === 'number' && stepIndex >= 0 && stepIndex < totalSteps;
    const stepRef = isValidIndex ? stepsForTour[stepIndex].ref : null;
    return {
      stepRef,
      stepNumber: isValidIndex ? stepIndex + 1 : null,
      totalSteps
    };
  };

  if (!tourguideVisible) {
    return null;
  }

  return {
    steps: stepsForTour,
    group: TOUR_GROUP,
    autoStart: tourguideVisible,
    forceStart: tourguideForceStart,
    startStep: tourguideStep,
    onStart: () =>
      store.dispatch(trackTourguideStarted(TOUR_GROUP, getStepTracking(tourguideStep))),
    onStepChange: step => {
      store.dispatch(trackTourguideStepViewed(TOUR_GROUP, getStepTracking(step)));
      store.dispatch(setTourguideStep(step));
    },
    onExit: () => {
      store.dispatch(trackTourguideDismissed(TOUR_GROUP, getStepTracking(tourguideStep)));
      store.dispatch(hideTourguide());
    },
    onFinish: () =>
      store.dispatch(trackTourguideCompleted(TOUR_GROUP, getStepTracking(tourguideStep))),
    options: {
      closeButton: false,
      nextLabel: translate('Tourguide next'),
      prevLabel: translate('Tourguide prev'),
      finishLabel: translate('Tourguide finish'),
      targetPadding: 2,
      showStepDots: false,
      keyboardControls: true,
      exitOnEscape: true,
      exitOnClickOutside: true,
      debug: false,
      completeOnFinish: true,
      rememberStep: true
    }
  };
};

const playerProps = (options, store) => {
  const errorPopinStateToProps = mapStateToErrorPopinProps({dispatch: store.dispatch});
  const playerStateToProps = createPlayerStateToProps(options, store);

  return state => {
    return {
      player: playerStateToProps(state),
      tourguide: tourguideStateToProps(state, options, store),
      popin: errorPopinStateToProps(state)
    };
  };
};

export default playerProps;
