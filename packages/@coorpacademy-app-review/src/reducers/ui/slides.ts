import map from 'lodash/fp/map';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import indexOf from 'lodash/fp/indexOf';
import pipe from 'lodash/fp/pipe';
import omit from 'lodash/fp/omit';
import set from 'lodash/fp/set';
import type {SlideFromAPI, UISlide} from '../../types/common';
import {HIGHEST_INDEX, indexToString, SlideIndexes, slideIndexes} from '../../common';
import {mapApiSlideToUi} from '../../helpers/map-api-slide-to-ui';
import {
  OnNextPayload,
  SET_FIRST_SLIDE,
  UISlidesAction,
  UpdateSlidesOnValidation,
  UPDATE_SLIDES_ON_NEXT,
  UPDATE_SLIDES_ON_VALIDATION
} from '../../actions/ui/slides';

export type UISlidesState = {
  [key in SlideIndexes]: UISlide;
};

const emptyState: UISlidesState = {} as UISlidesState; // Je comprend pas sa fonction ?

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

  return pipe(set(['0', 'questionText'], questionText), set(['0', 'answerUI'], answerUI))(state);
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

  const slideIndex = pipe(indexOf(slideRef), indexToString)(fetchedSlidesRefs);

  const newSlideContent: UISlide['nextContent'] = {
    hidden: getOr(false, `${slideIndex}.hidden`, state),
    endReview: get('state.nextContent.ref', progressionFromAPI) === 'successExitNode',
    position: get(`${slideIndex}.position`, state),
    isCorrect: get('state.isCorrect', progressionFromAPI)
  };

  const _state: UISlidesState = emptyState;

  // eslint-disable-next-line lodash-fp/no-unused-result
  map(index => {
    const previousValue = state[index];
    // the current slide
    if (index === slideIndex) {
      // only one slide remaining, presets the next value
      if (numberOfFinishedSlides === HIGHEST_INDEX) {
        _state[index] = {
          ...previousValue,
          nextContent: omit('position', nextContent),
          position: getOr(Number.NaN, 'position', newSlideContent),
          isCorrect: get('isCorrect', newSlideContent)
        };
      } else _state[slideIndex] = {...previousValue, ...newSlideContent};
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
  }, slideIndexes);

  return _state;
};

// ||-------> Handles the updates of a given slide on correction popin's next click,
// & then updates de remaining slides (updates position to trigger animations)
const stateUpdateOnNext = (state: UISlidesState, payload: OnNextPayload): UISlidesState => {
  const {slideIndex, newSlideContent, numberOfFinishedSlides} = payload;
  const _state: UISlidesState = emptyState;

  // eslint-disable-next-line lodash-fp/no-unused-result
  map(index => {
    const previousValue = state[index];
    // the current slide
    if (index === slideIndex) {
      // when there is only one slide remaining, updates the slide value
      if (numberOfFinishedSlides === HIGHEST_INDEX && previousValue.nextContent) {
        _state[index] = {...previousValue.nextContent, position: previousValue.position};
      } else _state[slideIndex] = newSlideContent;
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
  }, slideIndexes);

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
