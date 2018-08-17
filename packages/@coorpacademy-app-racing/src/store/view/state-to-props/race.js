import {getConfigForProgression} from '@coorpacademy/progression-engine';
import {
  allUsersHaveAnswered,
  currentTeam,
  getCurrentProgression,
  getCurrentRace,
  isLastAnswerCorrect,
  isSpectator,
  showGameOver
} from '../../utils/state-extract';
import {seeQuestion} from '../../actions/ui/location';

const raceProps = (options, {dispatch}) => state => {
  const progression = getCurrentProgression(state);
  const config = getConfigForProgression(progression);
  const gameOver = showGameOver(state);
  const spectate = isSpectator(state);
  const success = gameOver ? null : isLastAnswerCorrect(state);
  const title = gameOver ? null : `${success ? 'Good' : 'Bad'} answer`;
  const team = currentTeam(state);

  return {
    info: {
      title: spectate ? 'Spectating' : title,
      gameOver
    },
    race: {
      goal: config.goal,
      towers: getCurrentRace(state)
    },
    cta: {
      submitValue: 'Next question',
      disabled: gameOver || spectate || !allUsersHaveAnswered(state),
      primary: true,
      onClick: () => dispatch(seeQuestion)
    },
    team
  };
};

export default raceProps;
