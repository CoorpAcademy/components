import set from 'lodash/fp/set';
import {CorrectionFromAPI} from '../../types/common';
import {
  ReceivedCorrection,
  CORRECTION_FETCH_SUCCESS,
  CORRECTION_FETCH_REQUEST,
  FetchCorrection
} from '../../actions/api/fetch-correction';

export type AnswersCorrectionState = Record<string, CorrectionFromAPI>;

export type AnswersCorrectionAction = ReceivedCorrection | FetchCorrection;

const initialState: AnswersCorrectionState = {};

const reducer = (
  // eslint-disable-next-line default-param-last
  state: AnswersCorrectionState = initialState,
  action: AnswersCorrectionAction
): AnswersCorrectionState => {
  switch (action.type) {
    case CORRECTION_FETCH_REQUEST: {
      const {meta} = action;
      return set(meta.slideRef, null, state);
    }
    case CORRECTION_FETCH_SUCCESS: {
      const {meta} = action;
      const correction = action.payload;
      return set(meta.slideRef, correction, state);
    }
    default:
      return state;
  }
};

export default reducer;
