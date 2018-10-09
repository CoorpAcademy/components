import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
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
  getUserState,
  isLastAnswerCorrect,
  isSpectator,
  getVictors,
  isTimerOn
} from '../../utils/state-extract';
import {validateAnswer} from '../../actions/ui/answers';
import {createGetAnswerProps} from './answer';

const createCTAHandler = (dispatch, state) => () => {
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

  const gameOver = getVictors(state) !== null;
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

  const victorIds = getVictors(state);
  const gameOver = !!victorIds;
  const victors = map(id => getUserState(id, state), victorIds);
  // const spectate = isSpectator(state);

  const success = gameOver ? null : isLastAnswerCorrect(state);
  const view = gameOver || isSpectator(state) ? 'race' : getRoute(state);
  const message =
    isTimerOn('waitingCorrection')(state) ||
    view === 'question' ||
    gameOver ||
    success === undefined
      ? null
      : `${success ? 'Good' : 'Bad'} answer`;

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
    // blurType: view === 'question' ? 'all' : isTimerOn('highlight')(state) ? 'all-but-mine' : null, // eslint-disable-line no-nested-ternary
    blurType: isTimerOn('highlight')(state) ? 'all-but-mine' : null,
    info: {
      success,
      message
    },
    slide,
    team: {
      members,
      num: teamNum
    },
    victors,
    goal: config.goal,
    towers: getCurrentRace(state),
    cta: null
  };
};

export default gameProps;
