import get from 'lodash/fp/get';
import {
  getCurrentProgression,
  getCurrentSlide,
  getCurrentProgressionId,
  getAnswerValues,
  getCurrentClue,
  getRoute
} from '../../utils/state-extract';
import {validateAnswer} from '../../actions/ui/answers';
import {selectRoute} from '../../actions/ui/route';
import {selectClue} from '../../actions/ui/clues';
import getAnswerProps from './answer';

const playerProps = (state, dispatch) => {
  const progression = getCurrentProgression(state);
  const slide = getCurrentSlide(state);
  const answer = getAnswerProps(state, slide, dispatch);
  const clue = getCurrentClue(state) || '';
  const route = getRoute(state);

  const clickClueHandler = () => dispatch(selectClue);
  const clickCTAHandler = () => {
    dispatch(
      validateAnswer(getCurrentProgressionId(state), {
        answers: getAnswerValues(state),
        slideId: slide._id
      })
    );
  };

  return {
    typeClue: route === 'clue',
    text: clue,
    step: get('state.step')(progression),
    question: get('question.header')(slide),
    cta: {
      submitValue: 'Validate',
      onClick: route === 'clue' ? clickClueHandler : clickCTAHandler,
      light: false,
      small: false,
      secondary: false
    },
    help: 'Select something below',
    answer,
    buttons: [
      {
        title: 'Media',
        type: 'media',
        selected: route === 'media',
        onClick: () => {
          return dispatch(selectRoute('media'));
        }
      },
      {
        title: 'Clue',
        type: 'clue',
        selected: route === 'clue',
        onClick: clickClueHandler
      },
      {
        title: 'Coach',
        type: 'coach'
      }
    ]
  };
};

export default playerProps;
