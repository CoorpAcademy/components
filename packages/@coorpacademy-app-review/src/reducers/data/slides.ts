import includes from 'lodash/fp/includes';
import {SlidesAction} from '../../actions/data/slides';
import {SLIDE_FETCH_SUCCESS} from '../../actions/api/fetch-slide';
import {SlideFromAPI} from '../../types/common';

export type SlidesState = {
  slideRefs: string[];
  values: Record<string, SlideFromAPI>;
};

const getInitialState = (): SlidesState => {
  const state: SlidesState = {
    slideRefs: [],
    values: {}
  };
  return state;
};

export const initialState: SlidesState = getInitialState();

// -----------------------------------------------------------------------------

const setSlide = (state: SlidesState, slide: SlideFromAPI): SlidesState => {
  const slideRefs = state.slideRefs;
  if (!includes(slide.universalRef, slideRefs)) slideRefs.push(slide.universalRef);
  const _state: SlidesState = {
    slideRefs,
    values: {
      ...state.values,
      [slide.universalRef]: slide
    }
  };

  return _state;
};

// eslint-disable-next-line default-param-last
const reducer = (state: SlidesState = initialState, action: SlidesAction): SlidesState => {
  switch (action.type) {
    case SLIDE_FETCH_SUCCESS: {
      return setSlide(state, action.payload);
    }
    default:
      return state;
  }
};

// -----------------------------------------------------------------------------

export default reducer;
