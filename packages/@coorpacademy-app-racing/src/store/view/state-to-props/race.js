import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import get from 'lodash/fp/get';
import {getConfigForProgression} from '@coorpacademy/progression-engine';
import {
  allUsersHaveAnswered,
  getCurrentProgression,
  isLastAnswerCorrect
} from '../../utils/state-extract';
import {seeQuestion} from '../../actions/ui/location';

const getTeamsPoints = pipe(getCurrentProgression, get('state.teams'), map(get('step')));

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
      length: config.goal,
      teamsPoints: getTeamsPoints(state)
    },
    cta: {
      submitValue: 'Next question',
      disabled: !allUsersHaveAnswered(state),
      primary: true,
      onClick: () => dispatch(seeQuestion)
    }
  };
};

export default raceProps;
