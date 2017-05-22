import pipe from 'lodash/fp/pipe';
import getOr from 'lodash/fp/getOr';
import includes from 'lodash/fp/includes';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import {createElement} from 'react';
import {Provider, FreeRun} from '@coorpacademy/components';
import {editAnswer} from './actions/ui';

const getProgression = state => {
  const entities = getOr({}, 'data.progressions.entities')(state);
  const currentId = getOr(null, 'ui.current.progressionId')(state);
  return getOr({}, currentId)(entities);
};

const getSlide = (progression, state) => {
  const entities = getOr({}, 'data.slides.entities')(state);
  const ref = getOr(null, 'content.ref')(progression);
  return getOr({}, ref)(entities);
};

const choicesToAnswers = (slide, state, dispatch) =>
  map(
    choice => ({
      title: choice.label,
      selected: pipe(get('ui.answers'), includes(choice.id))(state),
      onClick: () => {
        dispatch(editAnswer(choice));
      }
    }),
    get('question.content.choices')(slide)
  );

const getAnswer = (slide, state, dispatch) => {
  return {
    type: 'qcm',
    answers: choicesToAnswers(slide, state, dispatch)
  };
};

const toHeader = state => {
  return {
    primary: {
      title: 'Du management classique au nouveau blablabla'
    },
    lives: {
      count: get('lives')(getProgression(state))
    }
  };
};

const toPlayer = (state, dispatch) => {
  // const editAnswer = () => dispatch({plop: 'plup'});
  // const editAnswer = editAnswerAction(dispatch);
  const progression = getProgression(state);
  const slide = getSlide(progression, state);
  const answer = getAnswer(slide, state, dispatch);

  // slide, answer => props

  return {
    step: get('step')(progression),
    question: get('question.header')(slide),
    cta: {
      submitValue: 'Validate',
      href: () => dispatch(),
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
