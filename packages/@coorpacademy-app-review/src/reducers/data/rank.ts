import set from 'lodash/fp/set';
import {
  POST_PROGRESSION_REQUEST,
  POST_PROGRESSION_SUCCESS,
  type ReceivedProgression,
  type FetchProgression
} from '../../actions/api/post-progression';
import {
  RankAction,
  RANK_FETCH_START_SUCCESS,
  RANK_FETCH_END_SUCCESS
} from '../../actions/api/fetch-rank';

export type RankState = {
  start: number;
  end: number;
};

const initialState: RankState = {
  start: Number.NaN,
  end: Number.NaN
};

const reducer = (
  // eslint-disable-next-line default-param-last
  state: RankState = initialState,
  action: RankAction | ReceivedProgression | FetchProgression
): RankState => {
  switch (action.type) {
    case POST_PROGRESSION_REQUEST:
    case POST_PROGRESSION_SUCCESS: {
      return initialState;
    }
    case RANK_FETCH_START_SUCCESS: {
      const {payload} = action;
      return set('start', payload.rank, state);
    }
    case RANK_FETCH_END_SUCCESS: {
      const {payload} = action;
      return set('end', payload.rank, state);
    }
    default:
      return state;
  }
};

export default reducer;
