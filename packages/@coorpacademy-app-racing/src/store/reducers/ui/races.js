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
import {POLL_RECEPTION} from '../../middlewares/polling-saga';

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

    case POLL_RECEPTION: {
      console.log('--> POLL_RECEPTION');
      const {payload, meta} = action;
      const {progressionId, currentView} = meta;
      const {teamIndex, isCorrect} = payload;

      const pushToRace = key =>
        update(['entities', progressionId, key, teamIndex], concat(isCorrect ? ['new'] : ['lost']), state);

      switch (currentView) {
        case 'question': {
          console.log('[other pushToRace] ------> BG ' + (isCorrect ? 'new' : 'lost'));
          return pushToRace('background');
        }
        case 'race': {
          console.log('[other pushToRace] ------> DISPLAY ' + (isCorrect ? 'new' : 'lost'));
          return pushToRace('display');
        }
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

      const background = concat([], get(['entities', progressionId, 'background'], state));

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
        console.log('[BG on reply] ------> push a NEW ');
        background[teamNum].push('new');
      } else {
        const tower = background[teamNum];
        const nbNews = countBy(identity, tower).new || 0;
        const nbPlaced = countBy(identity, progression.state.teams[teamNum].tower).placed || 0;

        console.log({
          nbNews,
          nbPlaced
        });

        if (nbNews > nbPlaced) {
          const lostIndex = findIndex(isEqual('new'), background[teamNum]);
          console.log('[BG on reply] ------> replace by LOST at ' + lostIndex);
          background[teamNum].splice(lostIndex, 1, 'lost');
        } else {
          console.log('[BG on reply] ------> push a LOST ');
          background[teamNum].push('lost');
        }
      }

      const towersUpdate = map(countBy(identity), background);
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

      return update(['entities', id, 'background'], map(() => []), state);
    }

    default:
      return state;
  }
};

export default uiRacesReducer;
