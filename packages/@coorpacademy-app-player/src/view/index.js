import cond from 'lodash/fp/cond';
import constant from 'lodash/fp/constant';
import every from 'lodash/fp/every';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import isEqual from 'lodash/fp/isEqual';
import isNull from 'lodash/fp/isNull';
import isUndefined from 'lodash/fp/isUndefined';
import pipe from 'lodash/fp/pipe';
import {createElement} from 'react';
import Provider from '@coorpacademy/components/es/atom/provider';
import Player from '@coorpacademy/components/es/template/app-player/player';
import Loading from '@coorpacademy/components/es/template/app-player/loading';
import PopinCorrection from '@coorpacademy/components/es/template/app-player/popin-correction';
import PopinEnd from '@coorpacademy/components/es/template/app-player/popin-end';
import {
  getCurrentContent,
  getCurrentExitNode,
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

  return pipe(mapStateToProps, props => createElement(Player, props), wrapInProvider(options));
};

export const createPopinEnd = ({translate}) => dispatch => {
  return state => {
    const exitNode = getCurrentExitNode(state);
    const progression = getCurrentProgression(state);

    const header = cond([
      [
        pipe(get('type'), isEqual('success')),
        () => ({
          title: '',
          subtitle: translate('Congratulations!'),
          fail: false,
          stars: get('state.stars')(progression),
          cta: {
            title: translate('Back to dashboard'),
            subtitle: '',
            href: '/'
          }
        })
      ],
      [
        pipe(get('type'), isEqual('failure')),
        () => ({
          title: translate('O O O P S'),
          subtitle: translate('You are missing lives!'),
          fail: true,
          lives: get('state.lives')(progression),
          cta: {
            title: translate('Retry level'),
            href: `/`
          }
        })
      ],
      [constant(true), constant(null)]
    ])(exitNode);
    const recommendation = {
      title: translate('Related subjects'),
      coards: null
    };
    const footer = {
      title: translate('Back to dashboard'),
      href: '/'
    };

    return createElement(PopinEnd, {
      header: toHeader(state),
      summary: {
        header,
        recommendation,
        footer
      }
    });
  };
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
          title: translate(isCorrect ? 'Good job' : 'Ouch'),
          subtitle: translate(isCorrect ? 'Good answer' : 'Wrong answer'),
          fail: !isCorrect,
          lives: progression.state.lives
        };

    const question = {
      header: getOr('', 'question.header', slide),
      answer: translate('Correct answer {answer}', {
        answer: correction || ''
      })
    };

    return createElement(PopinCorrection, {
      header: {
        lives: 1,
        title: '',
        subtitle: '',
        cta: {
          title: translate('Next'),
          onClick: resetProgression
        },
        ...header
      },
      question,
      resources: {
        title: translate('Key point'),
        value: getOr([], 'lessons', slide),
        open: false,
        onClick: () => {}
      },
      klf: {
        title: translate('Access the lesson'),
        value: getOr('', 'klf', slide),
        onClick: () => {},
        open: false
      },
      tips: {
        title: translate('Did you know that?'),
        value: getOr('', 'tips', slide),
        onClick: () => {},
        open: false
      }
    });
  };
};

export const createRouter = options => dispatch => state => {
  const progression = getCurrentProgression(state);
  if (!progression) return createElement(Loading);
  const currentContent = getCurrentContent(state);

  const {isCorrect, correction} = getAnswers(state);

  if (!every(isUndefined, [isCorrect, correction]))
    return createPopinCorrection(options)(dispatch)(state);

  switch (get('type', currentContent)) {
    case 'slide': {
      return createSlide(options)(dispatch)(state);
    }
    case 'success':
    case 'failure': {
      return createPopinEnd(options)(dispatch)(state);
    }
    default: {
      return createElement(Loading);
    }
  }
};

export default createRouter;
