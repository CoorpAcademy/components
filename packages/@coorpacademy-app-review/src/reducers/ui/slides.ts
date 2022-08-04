import map from 'lodash/fp/map';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import indexOf from 'lodash/fp/indexOf';
import pipe from 'lodash/fp/pipe';
import omit from 'lodash/fp/omit';
import type {SlideFromAPI, UISlide} from '../../types/common';
import {
  HIGHEST_INDEX,
  indexToString,
  SlideNumbers,
  slideNumbers,
  TOTAL_SLIDES_STACK
} from '../../common';
import {mapApiSlideToUi} from '../../helpers/map-api-slide-to-ui';
import {
  OnNextPayload,
  SET_FIRST_SLIDE,
  UISlidesAction,
  UpdateSlidesOnValidation,
  UPDATE_SLIDES_ON_NEXT,
  UPDATE_SLIDES_ON_VALIDATION
} from '../../actions/ui/slides';

const emptyState: UISlidesState = {} as UISlidesState;

export type UISlidesState = {
  [key in SlideNumbers]: UISlide;
};

const getInitialState = (): UISlidesState => {
  const state: UISlidesState = emptyState;
  // eslint-disable-next-line fp/no-loops
  for (let index = 0; index < TOTAL_SLIDES_STACK; index++) {
    state[indexToString(index)] = {hidden: false, position: index};
  }
  return state;
};

export const initialState: UISlidesState = getInitialState();

const setFirstSlide = (state: UISlidesState, slideFromAPI: SlideFromAPI): UISlidesState => {
  const _state: UISlidesState = emptyState;
  const mappedSlide: Partial<UISlide> = mapApiSlideToUi({translate: (text: string) => text})(
    slideFromAPI
  );

  // eslint-disable-next-line lodash-fp/no-unused-result
  map(index => {
    const previousValue = state[index];
    // Only update the 1st one
    const content = index === '0' ? {...previousValue, ...mappedSlide} : {...previousValue};
    _state[index] = {...content};
  }, slideNumbers);

  return _state;
};

// ||-------> Handles the updates of a given slide on validation,
// & then updates de remaining slides if this given change should impact their content
const stateUpdateOnValidation = (
  state: UISlidesState,
  {
    slideFromAPI,
    progressionFromAPI,
    fetchedSlidesRefs,
    numberOfFinishedSlides
  }: UpdateSlidesOnValidation['payload']
): UISlidesState => {
  const slideRef = get('universalRef', slideFromAPI);
  // TODO: implement Translate function
  const nextContent = mapApiSlideToUi({translate: (text: string) => text})(slideFromAPI);

  const slideNumber = pipe(indexOf(slideRef), indexToString)(fetchedSlidesRefs);

  const newSlideContent: UISlide['nextContent'] = {
    hidden: getOr(false, `${slideNumber}.hidden`, state),
    endReview: get('state.nextContent.ref', progressionFromAPI) === 'successExitNode',
    position: get(`${slideNumber}.position`, state),
    isCorrect: get('state.isCorrect', progressionFromAPI)
  };

  const _state: UISlidesState = emptyState;

  // eslint-disable-next-line lodash-fp/no-unused-result
  map(index => {
    const previousValue = state[index];
    // the current slide
    if (index === slideNumber) {
      // only one slide remaining, presets the next value
      if (numberOfFinishedSlides === HIGHEST_INDEX) {
        _state[index] = {
          ...previousValue,
          nextContent: omit('position', nextContent),
          position: getOr(Number.NaN, 'position', newSlideContent),
          isCorrect: get('isCorrect', newSlideContent)
        };
      } else _state[slideNumber] = {...previousValue, ...newSlideContent};
    } else {
      // updates the rest of the slides here
      const {hidden: _hidden, position: _position} = previousValue;
      _state[index] = {
        ...nextContent,
        endReview: newSlideContent.endReview,
        hidden: _hidden,
        position: _position
      };
    }
  }, slideNumbers);

  return _state;
};

// ||-------> Handles the updates of a given slide on correction popin's next click,
// & then updates de remaining slides (updates position to trigger animations)
const stateUpdateOnNext = (state: UISlidesState, payload: OnNextPayload): UISlidesState => {
  const {slideNumber, newSlideContent, numberOfFinishedSlides} = payload;
  const _state: UISlidesState = emptyState;

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
  }, slideNumbers);

  return _state;
};

// eslint-disable-next-line default-param-last
const reducer = (state: UISlidesState = initialState, action: UISlidesAction): UISlidesState => {
  switch (action.type) {
    case SET_FIRST_SLIDE: {
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

export default reducer;
