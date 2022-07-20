import map from 'lodash/fp/map';
import {
  OnNextPayload,
  SlidesAction,
  UPDATE_SLIDES_ON_NEXT,
  UPDATE_SLIDES_ON_VALIDATION,
  ValidationPayload
} from '../../actions/data/slides';
import {UISlide} from '../../types/slides';
import {HIGHEST_INDEX, slideNumbers, TOTAL_SLIDES_STACK} from '../../common';
import {slide as qcmSlide} from '../../fixtures/qcm-slide';
import {SLIDE_FETCH_SUCCESS} from '../../actions/api/fetch-slide';
import {Slide} from '../../types/common';

export type SlidesState = {
  slideNumbers: number[];
  [key: number]: Slide; // TODO: renommer
};

const getInitialState = (): SlidesState => {
  const state: SlidesState = {
    slideNumbers
  };
  // eslint-disable-next-line fp/no-loops
  for (let index = 0; index < TOTAL_SLIDES_STACK; index++) {
    state[index] = {hidden: false, position: index};
  }
  return state;
};

export const initialState: SlidesState = getInitialState();

// -----------------------------------------------------------------------------

const setFirstSlide = (state: SlidesState, slide: UISlide): SlidesState => {
  const _state: SlidesState = {
    slideNumbers
  };
  // eslint-disable-next-line lodash-fp/no-unused-result
  map(index => {
    const previousValue = state[index];
    // Only update the 1st one
    const content = index === 0 ? {...previousValue, ...slide} : {...previousValue};
    _state[index] = {...content};
  }, state.slideNumbers);

  return _state;
};

// ||-------> Handles the updates of a given slide on validation,
// & then updates de remaining slides if this given change should impact their content
const stateUpdateOnValidation = (state: SlidesState, payload: ValidationPayload): SlidesState => {
  const {slideNumber, newSlideContent, numberOfFinishedSlides, nextContent} = payload;
  const _state: SlidesState = {
    slideNumbers
  };

  // eslint-disable-next-line lodash-fp/no-unused-result
  map(index => {
    const previousValue = state[index];
    // the current slide
    if (index === slideNumber) {
      // only one slide remaining, presets the next value
      if (numberOfFinishedSlides === HIGHEST_INDEX) {
        _state[index] = {
          ...previousValue,
          nextContent,
          position: newSlideContent.position,
          isCorrect: newSlideContent.isCorrect
        };
      } else _state[slideNumber] = {...previousValue, ...newSlideContent};
    } else {
      // updates the rest of the slides here
      const {hidden, position} = previousValue;
      _state[index] = {...nextContent, endReview: newSlideContent.endReview, hidden, position};
    }
  }, state.slideNumbers);

  return _state;
};

// ||-------> Handles the updates of a given slide on correction popin's next click,
// & then updates de remaining slides (updates position to trigger animations)
const stateUpdateOnNext = (state: SlidesState, payload: OnNextPayload): SlidesState => {
  const {slideNumber, newSlideContent, numberOfFinishedSlides} = payload;
  const _state: SlidesState = {
    slideNumbers
  };

  // eslint-disable-next-line lodash-fp/no-unused-result
  map(index => {
    const previousValue = state[index];
    // the current slide
    if (index === slideNumber) {
      // when there is only one slide remaining, updates the slide value
      if (numberOfFinishedSlides === HIGHEST_INDEX && previousValue.nextContent) {
        _state[index] = {...previousValue.nextContent, position: previousValue.position};
      } else _state[slideNumber] = newSlideContent;
    } else {
      // updates the rest of the slides here
      const {hidden, position, answerUI, questionText} = previousValue;
      _state[index] = {
        hidden,
        position: position - 1, // position shift
        answerUI,
        questionText,
        endReview: newSlideContent.endReview
      };
    }
  }, state.slideNumbers);

  return _state;
};

// -----------------------------------------------------------------------------

// eslint-disable-next-line default-param-last
const reducer = (state: SlidesState = initialState, action: SlidesAction): SlidesState => {
  switch (action.type) {
    case SLIDE_FETCH_SUCCESS: {
      // TODO: An intermediate slide transform is needed here (or in fetchSlide)
      // const apiSlide = action.payload;
      // apiSlide adapt to uiSlide
      const uiSlide = qcmSlide;
      return setFirstSlide(state, uiSlide);
    }
    case UPDATE_SLIDES_ON_VALIDATION: {
      return stateUpdateOnValidation(state, action.payload);
    }
    case UPDATE_SLIDES_ON_NEXT: {
      return stateUpdateOnNext(state, action.payload);
    }
    default:
      return state;
  }
};

// -----------------------------------------------------------------------------

export default reducer;
