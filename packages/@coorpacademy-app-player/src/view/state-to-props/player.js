import get from 'lodash/fp/get';
import noop from 'lodash/fp/noop';
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
import getAnswerProps from './answer';

const playerProps = (options, store) => state => {
  const {translate} = options;
  const {dispatch} = store;

  const progression = getCurrentProgression(state);
  const slide = getCurrentSlide(state);
  const answer = getAnswerProps(options, store)(state, slide);
  const mediaQuestion = getQuestionMedia(state);
  const clue = getCurrentClue(state) || null;
  const route = getRoute(state);

  const clickClueHandler = () => dispatch(selectClue);
  const clickCTAHandler = () =>
    dispatch(
      validateAnswer(getCurrentProgressionId(state), {
        answers: getAnswerValues(state),
        slideId: slide._id
      })
    );

  return {
    typeClue: route === 'clue' ? 'clue' : 'answer',
    text: clue,
    step: get('state.step')(progression),
    question: get('question.header')(slide),
    verticalMargin: 260,
    cta: route === 'clue'
      ? {
          submitValue: translate('Back'),
          onClick: clickClueHandler,
          light: false,
          small: false,
          secondary: false
        }
      : {
          submitValue: translate('Validate'),
          onClick: clickCTAHandler,
          light: false,
          small: false,
          secondary: false
        },
    help: translate('Select something below'),
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
      },
      {
        title: translate('Coach'),
        type: 'coach',
        onClick: noop
      }
    ]
  };
};

export default playerProps;
