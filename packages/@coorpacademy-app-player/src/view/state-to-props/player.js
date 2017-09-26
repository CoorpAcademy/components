import includes from 'lodash/fp/includes';
import get from 'lodash/fp/get';
import isNil from 'lodash/fp/isNil';
import isEmpty from 'lodash/fp/isEmpty';
import {
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
import {selectClue} from '../../actions/ui/clues';
import {createGetAnswerProps, createGetHelp} from './answer';
import getResourcesProps from './resources';

const ROUTES = ['media', 'clue', 'context'];
const STARS_DIFF = {
  media: 'starsPerResourceViewed',
  clue: 'starsPerAskingClue'
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
  const notifyNewMedia = isEmpty(get('state.viewedResources', progression));
  const starsDiff = (STARS_DIFF[route] && get(STARS_DIFF[route], engineConfig)) || 0;
  const isAnswer = !includes(route, ROUTES);
  const clickClueHandler = () => dispatch(selectClue);
  const clickBackToAnswerHandler = () => dispatch(selectRoute('answer'));
  const clickCTAHandler = () =>
    dispatch(
      validateAnswer(getCurrentProgressionId(state), {
        answers: getAnswerValues(slide, state),
        slideId: slide._id
      })
    );

  const getHelp = createGetHelp(options, store);
  const help = getHelp(slide);

  const slideContext = get('context', slide);
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

  return {
    typeClue: isAnswer ? 'answer' : route,
    text: clue,
    step: {
      current: get('state.step.current')(progression),
      total: getNbSlides(state)
    },
    question: get('question.header')(slide),
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
          secondary: false
        }
      : {
          submitValue: translate(route === 'context' ? 'Go to question' : 'Back to question'),
          onClick: clickBackToAnswerHandler,
          light: false,
          small: false,
          secondary: true
        },
    help,
    answerType: {
      model: answer,
      media: mediaQuestion
    },
    showNewMedia: (isNil(route) || route === 'answer') && notifyNewMedia,
    buttons: [
      ...contextButton,
      {
        title: translate('Media'),
        type: 'media',
        selected: route === 'media',
        onClick: () => {
          return dispatch(selectRoute('media'));
        },
        notify: notifyNewMedia
      },
      {
        title: translate('Clue'),
        type: 'clue',
        selected: route === 'clue',
        onClick: clickClueHandler
      }
      // {
      //   title: translate('Coach'),
      //   type: 'coach',
      //   onClick: () => {})
      // }
    ]
  };
};

export default playerProps;
