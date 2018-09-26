import get from 'lodash/fp/get';
import {getConfigForProgression} from '@coorpacademy/progression-engine';
import {
  allUsersHaveAnswered,
  currentTeam,
  getCurrentProgression,
  getCurrentRace,
  getAnswerValues,
  getCurrentProgressionId,
  getCurrentSlide,
  getQuestionMedia,
  isLastAnswerCorrect,
  isSpectator,
  showGameOver,
  showQuestion
} from '../../utils/state-extract';
import {selectProgression} from '../../actions/ui/progressions';
import {validateAnswer} from '../../actions/ui/answers';
import {seeQuestion} from '../../actions/ui/location';
import {createGetAnswerProps} from './answer';

const createCTAHandler = (dispatch, state) => async () => {
  const slide = getCurrentSlide(state);
  const progressionId = getCurrentProgressionId(state);

  await dispatch(
    validateAnswer(progressionId, {
      answer: getAnswerValues(slide, state),
      slideId: slide._id
    })
  );

  return dispatch(selectProgression(progressionId));
};

const gameProps = (options, store) => state => {
  const {translate} = options;
  const {dispatch} = store;
  const slide = getCurrentSlide(state);
  const answer = createGetAnswerProps(options, store)(state, slide);
  const mediaQuestion = getQuestionMedia(state);

  const progression = getCurrentProgression(state);
  const config = getConfigForProgression(progression);
  const members = currentTeam(state);

  const gameOver = showGameOver(state);
  const spectate = isSpectator(state);

  const success = gameOver ? null : isLastAnswerCorrect(state);
  const title = gameOver || success === undefined ? null : `${success ? 'Good' : 'Bad'} answer`;
  const view = showQuestion(state) ? 'question' : 'race';

  const hideNextQuestionButton =
    view === 'question' || spectate || gameOver || !allUsersHaveAnswered(state);

  return {
    view,
    info: {
      title: spectate ? 'Spectating' : title,
      gameOver
    },
    slide: {
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
    },
    team: {
      members,
      num: 2
    },
    goal: config.goal,
    towers: getCurrentRace(state),
    cta: hideNextQuestionButton
      ? null
      : {
          submitValue: 'Next question',
          primary: true,
          onClick: () => dispatch(seeQuestion)
        }
  };
};

export default gameProps;
