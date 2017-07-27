import includes from 'lodash/fp/includes';
import get from 'lodash/fp/get';
import {
  getCurrentProgression,
  getCurrentSlide,
  getCurrentProgressionId,
  getAnswerValues,
  getCurrentClue,
  getRoute,
  getQuestionMedia
} from '../../utils/state-extract';
import {validateAnswer} from '../../actions/ui/answers';
import {selectRoute} from '../../actions/ui/route';
import {selectClue} from '../../actions/ui/clues';
import {createGetAnswerProps, createGetHelp} from './answer';
import getResourcesProps from './resources';

const ROUTES = ['media', 'clue'];

const playerProps = (options, store) => state => {
  const {translate} = options;
  const {dispatch} = store;

  const progression = getCurrentProgression(state);
  const slide = getCurrentSlide(state);
  const answer = createGetAnswerProps(options, store)(state, slide);
  const mediaQuestion = getQuestionMedia(state);
  const clue = getCurrentClue(state) || null;
  const route = getRoute(state);
  const resources = getResourcesProps(options, store)(state, slide);
  const isAnswer = !includes(route, ROUTES);
  const clickClueHandler = () => dispatch(selectClue);
  const clickBackToAnswerHandler = () => dispatch(selectRoute('answer'));
  const clickCTAHandler = () =>
    dispatch(
      validateAnswer(getCurrentProgressionId(state), {
        answers: getAnswerValues(state),
        slideId: slide._id
      })
    );

  const getHelp = createGetHelp(options, store);
  const help = getHelp(slide);

  return {
    typeClue: isAnswer ? 'answer' : route,
    text: clue,
    step: get('state.step')(progression),
    question: get('question.header')(slide),
    verticalMargin: 260,
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
          submitValue: translate('Back to question'),
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
    buttons: [
      {
        title: translate('Media'),
        type: 'media',
        selected: route === 'media',
        onClick: () => {
          return dispatch(selectRoute('media'));
        }
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
