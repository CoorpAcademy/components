import has from 'lodash/fp/has';
import set from 'lodash/fp/set';
import {SlidesAction} from '../../actions/data/slides';
import {SLIDE_FETCH_SUCCESS} from '../../actions/api/fetch-slide';
import {SlideFromAPI} from '../../types/common';

export type SlidesState = Record<string, SlideFromAPI>;
export const initialState: SlidesState = {};

// eslint-disable-next-line default-param-last
const reducer = (state: SlidesState = initialState, action: SlidesAction): SlidesState => {
  switch (action.type) {
    case SLIDE_FETCH_SUCCESS: {
      const slide = action.payload;
      if (has(slide.id, state)) return state;
      return set(slide.id, slide, state);
    }
    default:
      return state;
  }
};

export default reducer;
