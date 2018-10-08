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

import {
  TIMER_HIGHLIGHT_ON,
  TIMER_DISPLAY_DROP_OFF,
  TIMER_DISPLAY_BAD_OFF
} from '../../actions/ui/answers';

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

const dynamiseTowers = (previousTowers, newTowers) =>
  map.convert({cap: 0})((tower, index) => {
    return dynamiseTower(previousTowers[index], tower);
  }, newTowers);

const uiRacesReducer = (state = {entities: {}}, action) => {
  switch (action.type) {
    case PROGRESSION_FETCH_SUCCESS: {
      const {meta, payload: progression} = action;
      const {id} = meta;

      const lastDisplay = concat([], get(['entities', id], state));
      const newDisplay = dynamiseTowers(
        lastDisplay,
        map(team => team.tower, progression.state.teams)
      );

      return set(['entities', id], newDisplay, state);
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

      const refreshedTower = map(block => {
        if (block === 'drop') {
          return 'placed';
        } else {
          return block;
        }
      });

      return update(['entities', id], refreshedTower, state);
    }

    case PROGRESSION_CREATE_ANSWER_SUCCESS: {
      const {payload: progression, meta} = action;
      const {progressionId, team} = meta;
      const latestTower = progression.state.teams[team].tower;
      return set(['entities', progressionId, team], latestTower, state);
    }

    case TIMER_DISPLAY_DROP_OFF: {
      const {meta} = action;
      const {progressionId, team} = meta;

      const refreshedTower = map(block => {
        if (block === 'drop') {
          return 'placed';
        } else {
          return block;
        }
      });

      return update(['entities', progressionId, team], refreshedTower, state);
    }

    case TIMER_HIGHLIGHT_ON: {
      const {meta} = action;
      const {progressionId, isCorrect, team} = meta;
      const tower = get(['entities', progressionId, team], state);
      const newTower = [...tower];

      if (isCorrect) {
        newTower.splice(lastIndexOf('placed', newTower), 1, 'good');
      } else {
        newTower.splice(lastIndexOf('removed', newTower), 1, 'bad');
      }

      return set(['entities', progressionId, team], newTower, state);
    }

    case TIMER_DISPLAY_BAD_OFF: {
      const {meta} = action;
      const {progressionId, team} = meta;

      const refreshedTower = map(block => {
        if (block === 'bad') {
          return 'removed';
        } else if (block === 'good') {
          return 'placed';
        } else if (block === 'placed') {
          return 'drop';
        } else {
          return block;
        }
      });

      return update(['entities', progressionId, team], refreshedTower, state);
    }

    case UI_SEE_QUESTION: {
      const {meta} = action;
      const {id} = meta;

      const refreshTowers = map(
        map(block => {
          if (block === 'lost') {
            return 'removed';
          } else if (block === 'new' || block === 'good' || block === 'drop') {
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
