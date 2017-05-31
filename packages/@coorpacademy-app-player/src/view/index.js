import pipe from 'lodash/fp/pipe';
import get from 'lodash/fp/get';
import {createElement} from 'react';
import {Provider, FreeRun} from '@coorpacademy/components';
import {getProgression, getSlide, getProgressionId} from '../utils/state-extract';
import {validateAnswer} from '../actions/ui/answers';
import getAnswerProps from './answer-props';

const toHeader = state => {
  return {
    primary: {
      title: 'Du management classique au nouveau blablabla'
    },
    lives: {
      count: get('state.lives')(getProgression(state))
    }
  };
};

const toPlayer = (state, dispatch) => {
  const progression = getProgression(state);
  const slide = getSlide(state);
  const answer = getAnswerProps(state, slide, dispatch);

  return {
    step: get('state.step')(progression),
    question: get('question.header')(slide),
    cta: {
      submitValue: 'Validate',
      onClick: () => {
        dispatch(
          validateAnswer(getProgressionId(state), {
            answers: get('ui.answers')(state),
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

const createMapStateToProps = ({api}) => dispatch => state => {
  return {
    header: toHeader(state),
    player: toPlayer(state, dispatch)
  };
};

export {createMapStateToProps};

const wrapInProvider = options => vNode => createElement(Provider, options, vNode);

export default options => dispatch => {
  const mapStateToProps = createMapStateToProps(options)(dispatch);

  return pipe(mapStateToProps, FreeRun, wrapInProvider(options));
};
