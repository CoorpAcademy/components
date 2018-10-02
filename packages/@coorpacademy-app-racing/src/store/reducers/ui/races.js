import concat from 'lodash/fp/concat';
import get from 'lodash/fp/get';
import lastIndexOf from 'lodash/fp/lastIndexOf';
import map from 'lodash/fp/map';
import set from 'lodash/fp/set';
import update from 'lodash/fp/update';

import {
  PROGRESSION_CREATE_ANSWER_SUCCESS,
  PROGRESSION_FETCH_SUCCESS,
  PROGRESSION_FETCH_REQUEST
} from '../../actions/api/progressions';

import {TIMER_HIGHLIGHT_ON} from '../../actions/ui/answers';
import {UI_SEE_QUESTION} from '../../actions/ui/location';
import {POLL_RECEPTION} from '../../middlewares/polling-saga';

const dynamiseTower = (previousTower, newTower) =>
  map.convert({cap: 0})((block, index) => {
    const previousBlock = previousTower[index];

    if (block === 'removed' && previousBlock !== 'removed') {
      return 'lost';
    }

    if (block === 'placed' && previousBlock !== 'placed') {
      return 'new';
    }

    return block;
  }, newTower);

const uiRacesReducer = (state = {entities: {}}, action) => {
  switch (action.type) {
    case PROGRESSION_FETCH_SUCCESS: {
      const {meta, payload: progression} = action;
      const {id} = meta;

      const currentDisplay = get(['entities', id], state);
      if (currentDisplay) {
        return state;
      }

      const towers = map(team => team.tower, progression.state.teams);
      return set(['entities', id], towers, state);
    }

    case POLL_RECEPTION: {
      const {payload, meta} = action;
      const {progressionId} = meta;
      const {progression, teamIndex} = payload;

      const lastDisplay = concat([], get(['entities', progressionId], state));

      const newTower = dynamiseTower(
        lastDisplay[teamIndex],
        get(['state', 'teams', teamIndex, 'tower'], progression)
      );

      return set(['entities', progressionId, teamIndex], newTower, state);
    }

    case PROGRESSION_FETCH_REQUEST: {
      const {meta} = action;
      const {id} = meta;
      return update(['entities', id], race => race || null, state);
    }

    case PROGRESSION_CREATE_ANSWER_SUCCESS: {
      console.log('-------------------------->> racesPROGRESSION_CREATE_ANSWER_SUCCESS ');
      const {payload: progression, meta} = action;
      const {progressionId} = meta;
      const newTowers = map(team => team.tower, progression.state.teams);
      console.log('---------     newTowers');
      console.log(newTowers[0]);
      console.log('---------');
      return set(['entities', progressionId], newTowers, state);
    }

    case TIMER_HIGHLIGHT_ON: {
      const {meta} = action;
      const {progressionId, isCorrect, team} = meta;
      const tower = get(['entities', progressionId, team], state);
      console.log('---> 1', tower);
      if (isCorrect) {
        tower.splice(lastIndexOf('placed', tower), 1, 'good');
      } else {
        tower.splice(lastIndexOf('removed', tower), 1, 'bad');
      }

      console.log('---> 2', tower);
      return set(['entities', progressionId, team], tower, state);
    }

    case UI_SEE_QUESTION: {
      const {meta} = action;
      const {id} = meta;

      const refreshTowers = map(
        map(block => {
          if (block === 'lost' || block === 'bad') {
            return 'removed';
          } else if (block === 'new' || block === 'good') {
            return 'placed';
          } else {
            return block;
          }
        })
      );

      return update(['entities', id], refreshTowers, state);
    }

    default:
      return state;
  }
};

export default uiRacesReducer;
