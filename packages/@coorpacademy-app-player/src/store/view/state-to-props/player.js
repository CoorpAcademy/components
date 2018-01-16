import includes from 'lodash/fp/includes';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import isNil from 'lodash/fp/isNil';
import isEmpty from 'lodash/fp/isEmpty';
import intersection from 'lodash/fp/intersection';
import map from 'lodash/fp/map';
import flatMap from 'lodash/fp/flatMap';
import {
  getCoaches,
  getCurrentContent,
  getCurrentProgression,
  getCurrentSlide,
  getCurrentProgressionId,
  getEngineConfig,
  getAnswerValues,
  getCurrentClue,
  getRoute,
  getQuestionMedia,
  getNbSlides
} from '../../utils/state-extract';
import {validateAnswer} from '../../actions/ui/answers';
import {selectRoute} from '../../actions/ui/route';
import {selectClue, getClue} from '../../actions/ui/clues';
import {startChat} from '../../actions/ui/coaches';
import {createGetAnswerProps, createGetHelp} from './answer';
import getResourcesProps from './resources';

const ROUTES = ['media', 'clue', 'context'];
const STARS_DIFF = {
  media: 'starsPerResourceViewed',
  clue: 'starsPerAskingClue'
};

const shouldDisplayNewMedia = (slide, progression) => {
  const currentLessons = map('ref', get('lessons', slide));
  const viewedResources = flatMap('resources', getOr([], 'state.viewedResources', progression));
  return isEmpty(intersection(currentLessons, viewedResources)) && !isEmpty(currentLessons);
};

const getProgressionStep = state => {
  const progression = getCurrentProgression(state);
  const content = getCurrentContent(state);
  const isAdaptive = getOr(false, 'isConditional', content);

  return !isAdaptive
    ? {
        current: get('state.step.current')(progression),
        total: getNbSlides(state)
      }
    : null;
};

const playerProps = (options, store) => state => {
  const {translate} = options;
  const {dispatch} = store;

  const progression = getCurrentProgression(state);
  const engineConfig = getEngineConfig(state);
  const slide = getCurrentSlide(state);
  const answer = createGetAnswerProps(options, store)(state, slide);
  const mediaQuestion = getQuestionMedia(state);
  const clue = getCurrentClue(state) || null;
  const route = getRoute(state);
  const resources = getResourcesProps(options, store)(state, slide);
  const help = createGetHelp(options, store)(slide);
  const notifyNewMedia = shouldDisplayNewMedia(slide, progression);
  const starsDiff = get(STARS_DIFF[route], engineConfig) || 0;
  const isAnswer = !includes(route, ROUTES);
  const clickClueHandler = () => dispatch(selectClue);
  const clickSeeClueHandler = () => dispatch(getClue);
  const clickBackToAnswerHandler = () => dispatch(selectRoute('answer'));
  const clickCTAHandler = () =>
    dispatch(
      validateAnswer(getCurrentProgressionId(state), {
        answer: getAnswerValues(slide, state),
        slideId: slide._id
      })
    );

  const slideContext = get('context', slide);
  const hasClue = get('hasClue', slide);
  const slideLessons = get('lessons', slide);
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
    {
      title: translate('Coach'),
      type: 'coach',
      disabled: availableCoaches === 0,
      onClick: () => dispatch(startChat())
    }
  ];

  return {
    typeClue: isAnswer ? 'answer' : route,
    text: clue,
    onClickSeeClue: clickSeeClueHandler,
    question: get('question.header')(slide),
    step: getProgressionStep(state),
    slideContext,
    verticalMargin: 260,
    starsDiff,
    resources,
    cta: isAnswer
      ? {
          submitValue: translate('Validate'),
          onClick: clickCTAHandler,
          light: false,
          small: false,
          name: 'validateAnswerCTA',
          secondary: false
        }
      : {
          submitValue: translate(route === 'context' ? 'Go to question' : 'Back to question'),
          onClick: clickBackToAnswerHandler,
          light: false,
          small: false,
          name: 'backToQuestionCTA',
          secondary: true
        },
    help,
    answerType: {
      model: answer,
      media: mediaQuestion
    },
    showNewMedia: (isNil(route) || route === 'answer') && notifyNewMedia,
    buttons
  };
};

export default playerProps;
