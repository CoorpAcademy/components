import concat from 'lodash/fp/concat';
import countBy from 'lodash/fp/countBy';
import each from 'lodash/fp/each';
import findIndex from 'lodash/fp/findIndex';
import findLastIndex from 'lodash/fp/findLastIndex';
import get from 'lodash/fp/get';
import identity from 'lodash/fp/identity';
import map from 'lodash/fp/map';
import range from 'lodash/fp/range';
import set from 'lodash/fp/set';
import update from 'lodash/fp/update';

import {
  PROGRESSION_CREATE_ANSWER_SUCCESS,
  PROGRESSION_FETCH_SUCCESS,
  PROGRESSION_FETCH_REQUEST,
  PROGRESSION_WAIT_FOR_REFRESH_SUCCESS
} from '../../actions/api/progressions';

import {UI_SEE_QUESTION} from '../../actions/ui/location';

const uiRacesReducer = (state = {entities: {}}, action) => {
  switch (action.type) {
    case PROGRESSION_FETCH_SUCCESS: {
      const {meta, payload: progression} = action;
      const {id} = meta;
      const towers = map(team => team.tower, progression.state.teams);

      return set(['entities', id, 'display'], towers, state);
    }
    case PROGRESSION_WAIT_FOR_REFRESH_SUCCESS: {
      const {payload, meta} = action;
      const {id, currentView} = meta;
      const {teamIndex, isCorrect} = payload;

      const updateTower = towers => {
        const tower = towers[teamIndex];
        if (isCorrect) {
          return concat(tower, ['new']);
        } else {
          const lostIndex = findIndex('placed', tower);
          tower.splice(lostIndex, 1, 'lost');
          return tower;
        }
      };

      switch (currentView) {
        case 'question': {
          return update(['entities', id, 'background'], updateTower, state);
        }
        case 'race':
          return update(['entities', id, 'display'], updateTower, state);
        default:
          return state;
      }
    }
    case PROGRESSION_FETCH_REQUEST: {
      const {meta} = action;
      const {id} = meta;
      return update(['entities', id], race => race || null, state);
    }
    case PROGRESSION_CREATE_ANSWER_SUCCESS: {
      const {payload: progression, meta} = action;
      const {progressionId} = meta;

      const background = get(['entities', progressionId, 'background'], state);
      const towersUpdate = map(countBy(identity), background);

      const newDisplay = map.convert({cap: 0})((team, t) => {
        const tower = team.tower;
        const losts = range(0, towersUpdate.lost);
        const news = range(0, towersUpdate.new);

        each(l => {
          const removedIndex = findIndex('removed', towersUpdate[t]);
          tower.splice(removedIndex, 1, 'lost');
        }, losts);

        each(n => {
          const placedIndex = findLastIndex('placed', towersUpdate[t]);
          tower.splice(placedIndex, 1, 'new');
        }, news);

        return tower;
      }, progression.state.teams);

      return set(['entities', progressionId, 'display'], newDisplay, state);
    }
    case UI_SEE_QUESTION: {
      const {meta} = action;
      const {id} = meta;
      return set(['entities', id, 'background'], [], state);
    }
    default:
      return state;
  }
};

export default uiRacesReducer;
