import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import {getConfigForProgression} from '@coorpacademy/progression-engine';
import {
  allUsersHaveAnswered,
  getCurrentProgression,
  getCurrentRace,
  isLastAnswerCorrect,
  isSpectator
} from '../../utils/state-extract';
import {seeQuestion} from '../../actions/ui/location';

const getTowers = pipe(getCurrentRace, get('display'));

const raceProps = (options, {dispatch}) => state => {
  const progression = getCurrentProgression(state);
  const config = getConfigForProgression(progression);
  const success = isLastAnswerCorrect(state);

  return {
    header: {
      title: `${success ? 'Good' : 'Bad'} answer`,
      success,
      points: success ? 1 : -1,
      pointsDescription: `Your team ${success ? 'wins' : 'loses'} 1 point`
    },
    race: {
      goal: config.goal,
      towers: getTowers(state)
    },
    cta: {
      submitValue: 'Next question',
      disabled: isSpectator(state) || !allUsersHaveAnswered(state),
      primary: true,
      onClick: () => dispatch(seeQuestion)
    }
  };
};

export default raceProps;
