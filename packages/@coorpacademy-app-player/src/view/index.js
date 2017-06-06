import pipe from 'lodash/fp/pipe';
import get from 'lodash/fp/get';
import {createElement} from 'react';
import Provider from '@coorpacademy/components/es/atom/provider';
import Player from '@coorpacademy/components/es/template/app-player/player';
import Loading from '@coorpacademy/components/es/template/app-player/loading';
import PopinCorrection from '@coorpacademy/components/es/template/app-player/popin-correction';
import PopinEnd from '@coorpacademy/components/es/template/app-player/popin-end';
import Title from '@coorpacademy/components/es/atom/title';
import {
  getCurrentProgression,
  getCurrentSlide,
  getCurrentProgressionId,
  getAnswers
} from '../utils/state-extract';
import {validateAnswer} from '../actions/ui/answers';
import getAnswerProps from './answer-props';

const toHeader = state => {
  return {
    primary: {
      title: 'Du management classique au nouveau blablabla'
    },
    lives: {
      count: get('state.lives')(getCurrentProgression(state))
    }
  };
};

const toPlayer = (state, dispatch) => {
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
            answers: getAnswers(state),
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

export const createSlide = options => dispatch => {
  const mapStateToProps = createMapStateToProps(options)(dispatch);

  return pipe(mapStateToProps, Player, wrapInProvider(options));
};

export const createRouter = options => dispatch => state => {
  const progression = getCurrentProgression(state);

  switch (get('state.nextContent.type', progression)) {
    case 'slide': {
      return createSlide(options)(dispatch)(state);
    }
    case 'success':
    case 'failure': {
      return Title({children: progression.state.nextContent.ref});
    }
    default: {
      return Title({children: 'Loading'});
    }
  }
};

export default createRouter;
