import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import type {SlideFromAPI, UISlide} from '../../types/common';
import {SlideIndexes} from '../../common';
import {mapApiSlideToUi} from '../../helpers/map-api-slide-to-ui';
import {SET_CURRENT_SLIDE, UISlidesAction} from '../../actions/ui/slides';

export type UISlidesState = {
  [key in SlideIndexes]: UISlide;
};

export const initialState: UISlidesState = {
  '0': {
    hidden: false,
    position: 0
  },
  '1': {
    hidden: false,
    position: 1
  },
  '2': {
    hidden: false,
    position: 2
  },
  '3': {
    hidden: false,
    position: 3
  },
  '4': {
    hidden: false,
    position: 4
  }
};

const setFirstSlide = (state: UISlidesState, slideFromAPI: SlideFromAPI): UISlidesState => {
  const {questionText, answerUI} = mapApiSlideToUi({translate: (text: string) => text})(
    slideFromAPI
  );

  return pipe(
    set(['0', 'questionText'], questionText),
    set(['0', 'answerUI'], answerUI),
    set(['0', 'parentContentTitle'], 'Parent Title') // TODO parentContentTitle + translate
  )(state);
};

// eslint-disable-next-line default-param-last
const reducer = (state: UISlidesState = initialState, action: UISlidesAction): UISlidesState => {
  switch (action.type) {
    case SET_CURRENT_SLIDE: {
      return setFirstSlide(state, action.payload);
    }
    default:
      return state;
  }
};

export default reducer;
