import {includes, isEmpty, get, isNil} from 'lodash/fp';
import {
  getClue,
  getCoaches,
  getCurrentClue,
  getCurrentContent,
  getCurrentSlide,
  getEngineConfig,
  getQuestionMedia,
  getRoute,
  hasSeenLesson,
  selectClue,
  selectRoute,
  startChat,
  validateAnswer,
  isQuestionCtaDisabled,
  getProgressionSteps
} from '@coorpacademy/player-store';
import {createGetAnswerProps, createGetHelp} from './answer';
import createHeaderStateToProps from './header';
import getResourcesProps from './resources';

const ROUTES = ['media', 'clue', 'context', 'answer'];

const STARS_DIFF = {
  media: 'starsPerResourceViewed',
  clue: 'starsPerAskingClue'
};

const playerProps = (options, store) => {
  const createGetAnswerProps_ = createGetAnswerProps(options, store);
  const getResourcesProps_ = getResourcesProps(options, store);
  const createGetHelp_ = createGetHelp(options, store);
  const createHeaderStateToProps_ = createHeaderStateToProps(options, store);

  return state => {
    const {translate, services} = options;
    const {dispatch} = store;

    const engineConfig = getEngineConfig(state);
    const slide = getCurrentSlide(state);
    const slideContext = get('context', slide);
    const currentContent = getCurrentContent(state);
    const answer = createGetAnswerProps_(state, slide);
    const mediaQuestion = getQuestionMedia(state);
    const clue = getCurrentClue(state) || null;
    const route = getRoute(state);
    const resources = getResourcesProps_(state, slide);
    const help = createGetHelp_(slide);
    const starsDiff = get(STARS_DIFF[route], engineConfig) || 0;
    const clickClueHandler = () => dispatch(selectClue);
    const clickSeeClueHandler = () => dispatch(getClue);
    const clickBackToAnswerHandler = () => dispatch(selectRoute('answer'));
    const clickCTAHandler = () => dispatch(validateAnswer());

    const hasClue = get('hasClue', slide);
    const slideLessons = get('lessons', slide);

    const notifyNewMedia = !isEmpty(slideLessons) && !hasSeenLesson(state);
    const notifyReviewLesson = !isEmpty(slideLessons) && hasSeenLesson(state);

    const contextButton = get('title', slideContext)
      ? [
          {
            title: translate('Context'),
            type: 'context',
            selected: route === 'context',
            onClick: () => {
              return dispatch(selectRoute('context'));
            }
          }
        ]
      : [];

    const availableCoaches = getCoaches(state);
    const buttons = [
      ...contextButton,
      {
        title: translate('Question'),
        type: 'question',
        selected: route === 'answer',
        onClick: clickBackToAnswerHandler
      },
      {
        title: translate('Media'),
        type: 'media',
        selected: route === 'media',
        disabled: isEmpty(slideLessons),
        onClick: () => dispatch(selectRoute('media')),
        notify: notifyNewMedia
      },
      {
        title: translate('Clue'),
        type: 'clue',
        selected: route === 'clue',
        disabled: !hasClue,
        onClick: clickClueHandler
      },
    ];
    services?.Coach && buttons.push({
      title: translate('Coach'),
      type: 'coach',
      disabled: availableCoaches === 0,
      onClick: () => dispatch(startChat())
    })
    const headerProps = createHeaderStateToProps_(state);

    if (!includes(route, ROUTES)) {
      return {};
    }

    const ctaButtonValidate = {
      submitValue: translate('Validate'),
      onClick: clickCTAHandler,
      light: false,
      small: false,
      name: 'validateAnswerCTA',
      secondary: false,
      disabled: isQuestionCtaDisabled(state)
    };

    const ctaButtonBackToQuestion = {
      submitValue: translate(route === 'context' ? 'Go to question' : 'Back to question'),
      onClick: clickBackToAnswerHandler,
      light: false,
      small: false,
      name: 'backToQuestionCTA',
      secondary: true,
      disabled: false
    };

    return {
      typeClue: route,
      text: clue,
      onClickSeeClue: clickSeeClueHandler,
      question: get('question.header')(slide),
      step: getProgressionSteps(state),
      slideContext,
      backgroundUrl: get('backgroundUrl')(currentContent),
      verticalMargin: 260,
      starsDiff,
      resources,
      cta: route === 'answer' ? ctaButtonValidate : ctaButtonBackToQuestion,
      help,
      answerType: {
        model: answer,
        media: mediaQuestion
      },
      showNewMedia: (isNil(route) || route === 'answer') && notifyNewMedia,
      showReviewLesson: (isNil(route) || route === 'answer') && notifyReviewLesson,
      buttons,
      header: headerProps
    };
  };
};

export default playerProps;
