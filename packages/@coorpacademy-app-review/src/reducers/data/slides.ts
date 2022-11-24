import set from 'lodash/fp/set';
import {SlideFromAPI} from '@coorpacademy/review-services/es/types/services-types';
import {
  ReceivedSlide,
  FetchSlide,
  SLIDE_FETCH_REQUEST,
  SLIDE_FETCH_SUCCESS
} from '../../actions/api/fetch-slide';
import {FetchProgression, POST_PROGRESSION_REQUEST} from '../../actions/api/post-progression';

export type SlidesAction = FetchSlide | ReceivedSlide;

export type SlidesState = Record<string, SlideFromAPI | null>;
export const initialState: SlidesState = {};

const reducer = (
  // eslint-disable-next-line default-param-last
  state: SlidesState = initialState,
  action: SlidesAction | FetchProgression
): SlidesState => {
  switch (action.type) {
    case SLIDE_FETCH_REQUEST: {
      const {meta} = action;
      return set([meta.slideRef], null, state);
    }
    case SLIDE_FETCH_SUCCESS: {
      const slide = action.payload;
      return set([slide._id], slide, state);
    }
    case POST_PROGRESSION_REQUEST: {
      return initialState;
    }
    default:
      return state;
  }
};

export default reducer;
