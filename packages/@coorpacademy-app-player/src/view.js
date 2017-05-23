import pipe from 'lodash/fp/pipe';
import getOr from 'lodash/fp/getOr';
import includes from 'lodash/fp/includes';
import get from 'lodash/fp/get';
import find from 'lodash/fp/find';
import concat from 'lodash/fp/concat';
import map from 'lodash/fp/map';
import reduce from 'lodash/fp/reduce';
import {createElement} from 'react';
import {Provider, FreeRun} from '@coorpacademy/components';
import {editAnswer, validateAnswer} from './actions/ui';

const getChoices = slide => get('question.content.choices')(slide);
const getProgressionId = state => getOr(null, 'ui.current.progressionId')(state);

const getProgression = state => {
  const entities = getOr({}, 'data.progressions.entities')(state);
  const currentId = getProgressionId(state);
  return getOr({}, currentId)(entities);
};

const getSlide = (progression, state) => {
  const entities = getOr({}, 'data.slides.entities')(state);
  const ref = getOr(null, 'content.ref')(progression);
  return getOr({}, ref)(entities);
};

const choicesToAnswers = (state, dispatch) =>
  map(choice => ({
    title: choice.label,
    selected: pipe(get('ui.answers'), includes(choice.id))(state),
    onClick: () => {
      dispatch(editAnswer(getProgressionId(state), choice));
    }
  }));

const getAnswer = (slide, state, dispatch) => {
  return {
    type: get('question.type')(slide),
    answers: choicesToAnswers(state, dispatch)(getChoices(slide))
  };
};

const extractFinalAnswer = (choices, questionType) => {
  switch (questionType) {
    case 'qcm':
      return pipe(
        get('ui.answers'),
        reduce((acc, answer) => concat(acc, find({id: answer}, choices)), [])
      );

    default:
      return get('ui.answers');
  }
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
  const progression = getProgression(state);
  const slide = getSlide(progression, state);
  const answer = getAnswer(slide, state, dispatch);

  return {
    step: get('step')(progression),
    question: get('question.header')(slide),
    cta: {
      submitValue: 'Validate',
      onClick: () => {
        const finalAnswer = extractFinalAnswer(getChoices(slide), answer.type)(state);
        dispatch(validateAnswer(getProgressionId(state), finalAnswer));
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
