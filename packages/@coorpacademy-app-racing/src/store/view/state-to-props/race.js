import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import get from 'lodash/fp/get';
import {getCurrentProgression} from '../../utils/state-extract';

const getTeamsPoints = pipe(
  getCurrentProgression,
  get('state.teams'),
  map(get('step'))
);

const raceProps = (options, store) => state => {
  const progression = getCurrentProgression(state);

  return {
    header: {
      title: 'Bonne réponse !',
      success: true,
      points: 1,
      pointsDescription: 'Vous faites avancer votre équipe d\'un pas'
    },
    race: {
      length: get('state.goal', progression),
      teamsPoints: getTeamsPoints(state)
    },
    cta: {
      submitValue: 'Question suivante',
      disabled: true,
      primary: true
    }
  };
};

export default raceProps;
