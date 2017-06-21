import get from 'lodash/fp/get';
import {
  getCurrentProgression,
  getCurrentSlide,
  getCurrentProgressionId,
  getAnswerValues
} from '../../utils/state-extract';
import {validateAnswer} from '../../actions/ui/answers';
import getAnswerProps from './answer';

const playerProps = (state, dispatch) => {
  const progression = getCurrentProgression(state);
  const slide = getCurrentSlide(state);
  const answer = getAnswerProps(state, slide, dispatch);

  return {
    step: get('state.step')(progression),
    question: get('question.header')(slide),
    cta: {
      submitValue: 'Validate',
      onClick: () => {
        dispatch(
          validateAnswer(getCurrentProgressionId(state), {
            answers: getAnswerValues(state),
            slideId: slide._id
          })
        );
      },
      light: false,
      small: false,
      secondary: false
    },
    help: 'Select something below',
    answer,
    buttons: [
      {
        title: 'Media',
        type: 'media'
      },
      {
        title: 'Clue',
        type: 'clue'
      },
      {
        title: 'Coach',
        type: 'coach'
      }
    ]
  };
};

export default playerProps;
