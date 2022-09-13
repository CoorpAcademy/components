import {get, isNull, isUndefined, pipe, set, unset, update} from 'lodash/fp';
import {
  RankAction,
  RANK_FETCH_START_REQUEST,
  RANK_FETCH_START_SUCCESS,
  RANK_FETCH_START_FAILURE,
  RANK_FETCH_END_REQUEST,
  RANK_FETCH_END_SUCCESS,
  RANK_FETCH_END_FAILURE
} from '../../actions/api/fetch-rank';

export type RankState = {
  start?: number | null;
  end?: number | null;
};

const initialState: RankState = {};

const reducer = (
  // eslint-disable-next-line default-param-last
  state: RankState = initialState,
  action: RankAction
): RankState => {
  switch (action.type) {
    case RANK_FETCH_START_REQUEST: {
      return update(
        'start',
        (startRank: RankState['start']) => (isUndefined(startRank) ? null : startRank),
        state
      );
    }
    case RANK_FETCH_START_SUCCESS: {
      const {payload} = action;
      return set('start', payload.rank, state);
    }
    case RANK_FETCH_START_FAILURE: {
      if (pipe(get('start'), isNull)(state)) return unset('start', state);
      return state;
    }
    case RANK_FETCH_END_REQUEST: {
      return update(
        'end',
        (endRank: RankState['end']) => (isUndefined(endRank) ? null : endRank),
        state
      );
    }
    case RANK_FETCH_END_SUCCESS: {
      const {payload} = action;
      return set('end', payload.rank, state);
    }
    case RANK_FETCH_END_FAILURE: {
      if (pipe(get('end'), isNull)(state)) return unset('end', state);
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
