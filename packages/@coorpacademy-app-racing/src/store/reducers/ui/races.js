import concat from 'lodash/fp/concat';
import countBy from 'lodash/fp/countBy';
import each from 'lodash/fp/each';
import findIndex from 'lodash/fp/findIndex';
import findLastIndex from 'lodash/fp/findLastIndex';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import identity from 'lodash/fp/identity';
import isEqual from 'lodash/fp/isEqual';
import last from 'lodash/fp/last';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import range from 'lodash/fp/range';
import set from 'lodash/fp/set';
import update from 'lodash/fp/update';

import {
  PROGRESSION_CREATE_ANSWER_SUCCESS,
  PROGRESSION_FETCH_SUCCESS,
  PROGRESSION_FETCH_REQUEST
} from '../../actions/api/progressions';

import {UI_SEE_QUESTION} from '../../actions/ui/location';
import {UI_REFRESH_RACE_ON_POLLING} from '../../actions/ui/progressions';

const uiRacesReducer = (state = {entities: {}}, action) => {
  switch (action.type) {
    case PROGRESSION_FETCH_SUCCESS: {
      const {meta, payload: progression} = action;
      const {id} = meta;

      const currentDisplay = get(['entities', id, 'display'], state);
      if (currentDisplay) {
        return state;
      }
      const towers = map(team => team.tower, progression.state.teams);

      return pipe(
        set(['entities', id, 'background'], map(() => [], towers)),
        set(['entities', id, 'display'], towers)
      )(state);
    }

    case UI_REFRESH_RACE_ON_POLLING: {
      const {payload, meta} = action;
      const {id, currentView} = meta;
      const {teamIndex, isCorrect} = payload;

      const updateTower = tower => {
        if (isCorrect) {
          return concat(tower, ['new']);
        } else {
          const goodBlock = currentView === 'question' ? 'new' : 'placed';
          const lostIndex = findIndex(isEqual(goodBlock), tower);
          if (lostIndex !== -1) {
            tower.splice(lostIndex, 1, 'lost');
          }
          return tower;
        }
      };

      switch (currentView) {
        case 'question': {
          return update(['entities', id, 'background', teamIndex], updateTower, state);
        }
        case 'race':
          return update(['entities', id, 'display', teamIndex], updateTower, state);
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
      const {progressionId, author} = meta;

      const background = get(['entities', progressionId, 'background'], state);
      const backgroundWithCorrection = concat(background, []);

      const isCorrect = pipe(
        get(['users', author]),
        get('allAnswers'),
        last,
        get('isCorrect')
      )(progression.state);

      const teamNum = pipe(
        get(['users', author]),
        get('team')
      )(progression.state);

      if (isCorrect) {
        backgroundWithCorrection[teamNum].push('new');
      } else {
        const removedIndex = findIndex(isEqual('new'), background[teamNum]);
        if (removedIndex !== -1) {
          backgroundWithCorrection[teamNum].splice(removedIndex, 1, 'lost');
        }
      }

      const towersUpdate = map(countBy(identity), backgroundWithCorrection);

      const newDisplay = map.convert({cap: 0})((team, t) => {
        const tower = concat([], team.tower);
        const losts = range(0, getOr(0, [t, 'lost'], towersUpdate));
        const news = range(0, getOr(0, [t, 'new'], towersUpdate));

        each(l => {
          const removedIndex = findIndex(isEqual('removed'), tower);
          if (removedIndex !== -1) {
            tower.splice(removedIndex, 1, 'lost');
          }
        }, losts);

        each(n => {
          const placedIndex = findLastIndex(isEqual('placed'), tower);
          if (placedIndex !== -1) {
            tower.splice(placedIndex, 1, 'new');
          } else {
            tower.push('new');
          }
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
