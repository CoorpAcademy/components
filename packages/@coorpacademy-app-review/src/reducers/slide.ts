import {
  SlidesAction,
  STORE_FIRST_SLIDE,
  UPDATE_SLIDES_ON_NEXT,
  UPDATE_SLIDES_ON_VALIDATION
} from '../actions/slide';
import {HIGHEST_INDEX, TOTAL_SLIDES_STACK} from '../common';
import {
  Slide,
  Slides,
  UpdateSlidesOnNextPayload,
  UpdateSlidesOnValidationPayload
} from '../types/slides';

// -----------------------------------------------------------------------------

export type State = Slides;

const getInitialState = (): State => {
  const state: State = new Map();
  // eslint-disable-next-line fp/no-loops
  for (let index = 0; index < TOTAL_SLIDES_STACK; index++) {
    state.set(index, {hidden: false, position: index});
  }
  return state;
};

export const initialState: State = getInitialState();

// -----------------------------------------------------------------------------

const setFirstSlide = (state, slide: Slide): State => {
  const _state: State = new Map();
  // eslint-disable-next-line fp/no-loops
  for (const [index, previousValue] of state) {
    // Only update the 1st one
    const content = index === 0 ? {...previousValue, ...slide} : {...previousValue};
    _state.set(index, {...content});
  }
  return _state;
};

// ||-------> Handles the updates of a given slide on validation,
// & then updates de remaining slides if this given change should impact their content
const stateUpdateOnValidation = (state: State, payload: UpdateSlidesOnValidationPayload): State => {
  const {slideNumber, newSlideContent, numberOfFinishedSlides, nextSlide} = payload;
  const _state: State = new Map();

  // eslint-disable-next-line fp/no-loops
  for (const [index, previousValue] of state) {
    // the current slide
    if (index === slideNumber) {
      // only one slide remaining, presets the next value
      if (numberOfFinishedSlides === HIGHEST_INDEX) {
        _state.set(index, {
          ...previousValue,
          nextSlide,
          position: newSlideContent.position,
          validationResult: newSlideContent.validationResult
        });
      } else _state.set(slideNumber, newSlideContent);
    } else {
      // updates the rest of the slides here
      const {hidden, position} = previousValue;
      _state.set(index, {...nextSlide, endReview: newSlideContent.endReview, hidden, position});
    }
  }

  return _state;
};

// ||-------> Handles the updates of a given slide on correction popin's next click,
// & then updates de remaining slides (updates position to trigger animations)
const stateUpdateOnNext = (state: State, payload: UpdateSlidesOnNextPayload): State => {
  const {slideNumber, newSlideContent, numberOfFinishedSlides} = payload;
  const _state: State = new Map();

  // eslint-disable-next-line fp/no-loops
  for (const [index, previousValue] of state) {
    // the current slide
    if (index === slideNumber) {
      // when there is only one slide remaining, updates the slide value
      if (numberOfFinishedSlides === HIGHEST_INDEX) {
        _state.set(index, {...previousValue.nextSlide, position: previousValue.position});
      } else _state.set(slideNumber, newSlideContent);
    } else {
      // updates the rest of the slides here
      const {hidden, position, answerUI, questionText} = previousValue;
      _state.set(index, {
        hidden,
        position: position - 1, // position shift
        answerUI,
        questionText,
        endReview: newSlideContent.endReview
      });
    }
  }

  return _state;
};

// -----------------------------------------------------------------------------

// eslint-disable-next-line default-param-last
const reducer = (state: State = initialState, action: SlidesAction): State => {
  switch (action.type) {
    case STORE_FIRST_SLIDE: {
      return setFirstSlide(state, action.payload);
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
