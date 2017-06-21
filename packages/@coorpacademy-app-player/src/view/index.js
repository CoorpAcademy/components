import cond from 'lodash/fp/cond';
import constant from 'lodash/fp/constant';
import every from 'lodash/fp/every';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import isEqual from 'lodash/fp/isEqual';
import isNull from 'lodash/fp/isNull';
import isUndefined from 'lodash/fp/isUndefined';
import keysIn from 'lodash/fp/keysIn';
import pipe from 'lodash/fp/pipe';
import identity from 'lodash/fp/identity';
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

const slideStateToProps = (options, dispatch) => state => {
  return {
    header: toHeader(state),
    player: toPlayer(state, dispatch)
  };
};

const popinCorrectionStateToProps = ({translate}, dispatch) => state => {
  const resetProgression = () => {
    return dispatch((_dispatch, getState) => {
      const progressionId = getCurrentProgressionId(getState());
      return _dispatch(selectProgression(progressionId));
    });
  };

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

  return {
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
  };
};

const popinEndStateToProps = ({translate}, dispatch) => state => {
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
  return {
    header: toHeader(state),
    summary: {
      header,
      recommendation,
      footer
    }
  };
};

const wrapInProvider = options => vNode => createElement(Provider, options, vNode);
const identityStateToProps = (options, dispatch) => identity;

export const createView = (options, dispatch, template, mapper = identityStateToProps) => {
  const stateToProps = mapper(options, dispatch);
  return pipe(stateToProps, props => createElement(template, props), wrapInProvider(options));
};

export const createSlide = (options, dispatch) => {
  return createView(options, dispatch, Player, slideStateToProps);
};

export const createPopinEnd = (options, dispatch) => {
  return createView(options, dispatch, PopinEnd, popinEndStateToProps);
};

export const createPopinCorrection = (options, dispatch) => {
  return createView(options, dispatch, PopinCorrection, popinCorrectionStateToProps);
};

export const createLoading = (options, dispatch) => {
  return createView(options, dispatch, Loading);
};

const views = {
  slide: createSlide,
  loading: createLoading,
  popinCorrection: createPopinCorrection,
  popinEnd: createPopinEnd
};

const renderView = (options, dispatch, state) => renderer => {
  return renderer(options, dispatch)(state);
};

export const createRouter = options => dispatch => state => {
  const render = renderView(options, dispatch, state);
  const progression = getCurrentProgression(state);

  if (!progression) return render(views.loading);
  const currentContent = getCurrentContent(state);

  const {isCorrect, correction} = getAnswers(state);

  if (!every(isUndefined, [isCorrect, correction])) return render(views.popinCorrection);

  switch (get('type', currentContent)) {
    case 'slide': {
      return render(views.slide);
    }
    case 'success':
    case 'failure': {
      return render(views.popinEnd);
    }
    default: {
      return render(views.loading);
    }
  }
};

export default createRouter;
