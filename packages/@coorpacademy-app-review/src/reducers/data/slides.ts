import set from 'lodash/fp/set';
import {
  ReceivedSlide,
  FetchSlide,
  SLIDE_FETCH_REQUEST,
  SLIDE_FETCH_SUCCESS
} from '../../actions/api/fetch-slide';
import {SlideFromAPI} from '../../types/common';

export type SlidesAction = FetchSlide | ReceivedSlide;

export type SlidesState = Record<string, SlideFromAPI | null>;
export const initialState: SlidesState = {};

// eslint-disable-next-line default-param-last
const reducer = (state: SlidesState = initialState, action: SlidesAction): SlidesState => {
  switch (action.type) {
    case SLIDE_FETCH_REQUEST: {
      const {meta} = action;
      return set([meta.slideRef], null, state);
    }
    case SLIDE_FETCH_SUCCESS: {
      const slide = action.payload;
      return set([slide._id], slide, state);
    }
    default:
      return state;
  }
};

export default reducer;
