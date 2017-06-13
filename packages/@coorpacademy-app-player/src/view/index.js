import pipe from 'lodash/fp/pipe';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import isUndefined from 'lodash/fp/isUndefined';
import isNull from 'lodash/fp/isNull';
import every from 'lodash/fp/every';
import {createElement} from 'react';
import Provider from '@coorpacademy/components/es/atom/provider';
import Player from '@coorpacademy/components/es/template/app-player/player';
// import Loading from '@coorpacademy/components/es/template/app-player/loading';
import PopinCorrection from '@coorpacademy/components/es/template/app-player/popin-correction';
// import PopinEnd from '@coorpacademy/components/es/template/app-player/popin-end';
import Title from '@coorpacademy/components/es/atom/title';
import {
  getCurrentProgression,
  getCurrentSlide,
  getPreviousSlide,
  getCurrentProgressionId,
  getAnswerValues,
  getAnswers
} from '../utils/state-extract';
import {validateAnswer} from '../actions/ui/answers';
import {selectProgression} from '../actions/ui/progressions';
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

export const createPopinCorrection = ({translate}) => dispatch => {
  const resetProgression = () => {
    return dispatch((_dispatch, getState) => {
      const progressionId = getCurrentProgressionId(getState());
      return _dispatch(selectProgression(progressionId));
    });
  };
  return state => {
    const {isCorrect, correction} = getAnswers(state);
    const slide = getPreviousSlide(state);
    const progression = getCurrentProgression(state);

    const header = isNull(isCorrect)
      ? {}
      : {
          title: translate(`correction.header.${isCorrect ? 'correct' : 'fail'}.title`),
          subtitle: translate(`correction.header.${isCorrect ? 'correct' : 'fail'}.subtitle`),
          fail: !isCorrect,
          lives: progression.state.lives
        };

    const question = {
      header: getOr('', 'question.header', slide),
      answer: translate('correction.answer', {
        answer: correction || ''
      })
    };

    return PopinCorrection({
      header: {
        lives: 1,
        title: '',
        subtitle: '',
        cta: {
          title: translate('correction.header.cta'),
          onClick: resetProgression
        },
        ...header
      },
      question,
      ressources: {
        title: translate('correction.ressources.title'),
        value: getOr([], 'lessons', slide),
        open: false,
        onClick: () => {}
      },
      klf: {
        title: translate('correction.klf.title'),
        value: getOr('', 'klf', slide),
        onClick: () => {},
        open: false
      },
      tips: {
        title: translate('correction.tips.title'),
        value: getOr('', 'tips', slide),
        onClick: () => {},
        open: false
      }
    });
  };
};

export const createRouter = options => dispatch => state => {
  const progression = getCurrentProgression(state);

  const {isCorrect, correction} = getAnswers(state);

  if (!every(isUndefined, [isCorrect, correction]))
    return createPopinCorrection(options)(dispatch)(state);

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
