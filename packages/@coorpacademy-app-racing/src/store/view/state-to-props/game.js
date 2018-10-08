import get from 'lodash/fp/get';
import {getConfigForProgression} from '@coorpacademy/progression-engine';
import {
  currentTeam,
  getCurrentProgression,
  getCurrentRace,
  getCurrentUserState,
  getAnswerValues,
  getCurrentProgressionId,
  getCurrentSlide,
  getQuestionMedia,
  getRoute,
  isLastAnswerCorrect,
  isSpectator,
  showGameOver,
  isTimerOn
} from '../../utils/state-extract';
import {validateAnswer} from '../../actions/ui/answers';
import {createGetAnswerProps} from './answer';

const createCTAHandler = (dispatch, state) => async () => {
  const slide = getCurrentSlide(state);
  const progressionId = getCurrentProgressionId(state);

  return dispatch(
    validateAnswer(progressionId, {
      answer: getAnswerValues(slide, state),
      slideId: slide._id
    })
  );
};

const getSlideProps = (options, store, state) => {
  const {translate} = options;
  const {dispatch} = store;
  const slide = getCurrentSlide(state);
  const answer = createGetAnswerProps(options, store)(state, slide);
  const mediaQuestion = getQuestionMedia(state);

  const gameOver = showGameOver(state);
  if (gameOver) {
    return null;
  }

  if (isTimerOn('startAnimation')(state)) {
    return null;
  }

  if (isTimerOn('waitingCorrection')(state)) {
    return null;
  }

  return {
    typeClue: 'answer',
    question: get('question.header')(slide),
    help: 'Select something below',
    answerType: {
      model: answer,
      media: mediaQuestion
    },
    cta: {
      submitValue: translate('Validate'),
      onClick: createCTAHandler(dispatch, state),
      light: false,
      small: false,
      name: 'validateAnswerCTA',
      secondary: false,
      disabled: false
    }
  };
};

const gameProps = (options, store) => state => {
  // const {dispatch} = store;

  const progression = getCurrentProgression(state);
  const config = getConfigForProgression(progression);
  const members = currentTeam(state);

  const gameOver = showGameOver(state);
  // const spectate = isSpectator(state);

  const success = gameOver ? null : isLastAnswerCorrect(state);
  const view = gameOver || isSpectator(state) ? 'race' : getRoute(state);
  // const title =
  //   isTimerOn('me')(state) || view === 'question' || gameOver || success === undefined
  //     ? null
  //     : `${success ? 'Good' : 'Bad'} answer`;

  // const hideNextQuestionButton =
  //   view === 'question' ||
  //   spectate ||
  //   gameOver ||
  //   !allTeammatesHaveAnswered(state) ||
  //   isTimerOn('me')(state) ||
  //   isTimerOn('nextQuestion')(state);

  const slide = getSlideProps(options, store, state);

  const userState = getCurrentUserState(state);
  const teamNum = get('team', userState);

  return {
    view,
    start: isTimerOn('startAnimation')(state),
    getReadyTime: isTimerOn('nextQuestion')(state),
    blurType: view === 'question' ? 'all' : isTimerOn('highlight')(state) ? 'all-but-mine' : null, // eslint-disable-line no-nested-ternary
    grayBottom: gameOver,
    info: {
      success,
      gameOver
    },
    slide,
    team: {
      members,
      num: teamNum
    },
    goal: config.goal,
    towers: getCurrentRace(state),
    cta: null
  };
};

export default gameProps;
