import {getOr, noop, set} from 'lodash/fp';
import map from 'lodash/fp/map';
import {
  NextPayload,
  Slide,
  SlidesAction,
  STORE_FIRST_SLIDE,
  UPDATE_SLIDES_ON_NEXT,
  UPDATE_SLIDES_ON_VALIDATION,
  VALIDATE_SLIDE,
  ValidationPayload
} from '../../actions/data/slides';
import {Slide as SlideFromAPI} from '../../types/slides';
import {HIGHEST_INDEX, slideNumbers, TOTAL_SLIDES_STACK} from '../../common';

// -----------------------------------------------------------------------------

type Slides = {
  slideNumbers: number[];
  [key: number]: Slide;
};

export type SlidesState = Slides;

// -----------------------------------------------------------------------------

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

const setFirstSlide = (state: SlidesState, slide: SlideFromAPI): SlidesState => {
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
  const {slideNumber, newSlideContent, numberOfFinishedSlides, nextSlide} = payload;
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
          nextSlide,
          position: newSlideContent.position,
          validationResult: newSlideContent.validationResult
        };
      } else _state[slideNumber] = {...previousValue, ...newSlideContent};
    } else {
      // updates the rest of the slides here
      const {hidden, position} = previousValue;
      _state[index] = {...nextSlide, endReview: newSlideContent.endReview, hidden, position};
    }
  }, state.slideNumbers);

  return _state;
};

// ||-------> Handles the updates of a given slide on correction popin's next click,
// & then updates de remaining slides (updates position to trigger animations)
const stateUpdateOnNext = (state: SlidesState, payload: NextPayload): SlidesState => {
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
      if (numberOfFinishedSlides === HIGHEST_INDEX && previousValue.nextSlide) {
        _state[index] = {...previousValue.nextSlide, position: previousValue.position};
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
    case STORE_FIRST_SLIDE: {
      return setFirstSlide(state, action.payload);
    }
    case UPDATE_SLIDES_ON_VALIDATION: {
      return stateUpdateOnValidation(state, action.payload);
    }
    case UPDATE_SLIDES_ON_NEXT: {
      return stateUpdateOnNext(state, action.payload);
    }
    case VALIDATE_SLIDE: {
      const previousnumber: number = getOr(-1, 'slideValidationResult.slideNumber', state);
      // hard coded for now
      return set(
        'slideValidationResult',
        {
          slideNumber: previousnumber + 1,
          result: 'success',
          // exitNode
          nextSlide: {
            questionText: 'Test',
            answerUI: {
              model: {
                answers: [
                  {
                    title: 'There is no need for a password',
                    onClick: noop,
                    selected: false
                  },
                  {
                    title: 'Lorem ipsum',
                    onClick: noop,
                    selected: false
                  },
                  {
                    title: 'Lorem',
                    onClick: noop,
                    selected: true,
                    order: 1
                  },
                  {
                    title: 'You need to have a password',
                    onClick: noop,
                    selected: false
                  },
                  {
                    title: 'Pouet',
                    onClick: noop,
                    selected: true,
                    order: 0
                  }
                ],
                type: 'qcmDrag'
              },
              help: 'Help text will appear here'
            }
          }
        },
        state
      );
    }
    default:
      return state;
  }
};

// -----------------------------------------------------------------------------

export default reducer;
