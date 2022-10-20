import set from 'lodash/fp/set';
import type {CorrectionFromAPI} from '../../types/common';
import {
  ReceivedCorrection,
  CORRECTION_FETCH_SUCCESS,
  CORRECTION_FETCH_REQUEST,
  FetchCorrection
} from '../../actions/api/fetch-correction';
import {FetchProgression, POST_PROGRESSION_REQUEST} from '../../actions/api/post-progression';

export type CorrectionsState = Record<string, CorrectionFromAPI>;

export type CorrectionsAction = ReceivedCorrection | FetchCorrection;

const initialState: CorrectionsState = {};

const reducer = (
  // eslint-disable-next-line default-param-last
  state: CorrectionsState = initialState,
  action: CorrectionsAction | FetchProgression
): CorrectionsState => {
  switch (action.type) {
    case CORRECTION_FETCH_REQUEST: {
      const {meta} = action;
      return set([meta.slideRef], null, state);
    }
    case CORRECTION_FETCH_SUCCESS: {
      const {meta} = action;
      const correction = action.payload;
      return set([meta.slideRef], correction, state);
    }
    case POST_PROGRESSION_REQUEST: {
      return initialState;
    }
    default:
      return state;
  }
};

export default reducer;
