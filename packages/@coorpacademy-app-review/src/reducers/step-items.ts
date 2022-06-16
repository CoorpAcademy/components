import isNil from 'lodash/fp/isNil';
import get from 'lodash/fp/get';
import {
  StepItemsAction,
  UPDATE_STEP_ITEMS_ON_NEXT,
  UPDATE_STEP_ITEMS_ON_VALIDATION
} from '../actions/step-items';
import {HIGHEST_INDEX, TOTAL_SLIDES_STACK} from '../common';
import {SlideNumber} from '../types/slides';
import {FinishedSlides} from '../types/finished-slides';
import {StepItem, StepItems} from '../types/step-items';

// -----------------------------------------------------------------------------

export type State = StepItems;

const getInitialState = (): State => {
  const state: StepItems = new Map();
  // eslint-disable-next-line fp/no-loops
  for (let index = 0; index < TOTAL_SLIDES_STACK; index++) {
    const current = index === 0;
    state.set(index, {current, value: `${index + 1}`, icon: null});
  }
  return state;
};

export const initialState: State = getInitialState();

// -----------------------------------------------------------------------------

// ||-------> aux function, finds the next consecutive index
// to loop from 0 to HIGHEST_INDEX (4) & again to 0
const getNextIndex = (currentIndex: number): number =>
  currentIndex === HIGHEST_INDEX ? 0 : currentIndex + 1;

// ||-------> calculates which should be the next step to visit (as there can be already answered slides &&
// they have to be skipped)
const calculateNextStepIndex = (
  currentStepNumber: number,
  finishedSlides: FinishedSlides,
  lastVisitedIndex: number | null = null
): number => {
  // only one slide remaining, the step should stay on the same number
  if (lastVisitedIndex === currentStepNumber) {
    return currentStepNumber;
  }

  const indexToVisit = getNextIndex(isNil(lastVisitedIndex) ? currentStepNumber : lastVisitedIndex);

  // if the index is already included in the correctly answered (finished) slides, then we proceed to check for the next one
  return finishedSlides.has(indexToVisit)
    ? calculateNextStepIndex(currentStepNumber, finishedSlides, indexToVisit)
    : indexToVisit;
};

type StepItemToUpdateProps =
  | Pick<StepItem, 'icon'>
  | (Pick<StepItem, 'current'> & {nextIndex: SlideNumber});

const recalculateStepItemsState = (
  state: State,
  stepNumber,
  stepItemToUpdateProps: StepItemToUpdateProps
): State => {
  const nextIndex: number | null = get('nextIndex', stepItemToUpdateProps);
  const _state: State = new Map();
  // eslint-disable-next-line fp/no-loops
  for (const [index, previousValue] of state) {
    if (stepNumber === index)
      _state.set(stepNumber, {
        ...previousValue,
        ...stepItemToUpdateProps
      });
    /* only for UPDATE_STEP_ITEMS_ON_NEXT -> */ else if (nextIndex === index) {
      _state.set(index, {...previousValue, current: true});
    } else _state.set(index, previousValue);
  }
  return _state;
};

// -----------------------------------------------------------------------------

// eslint-disable-next-line default-param-last
const reducer = (state: State = initialState, action: StepItemsAction): State => {
  switch (action.type) {
    case UPDATE_STEP_ITEMS_ON_VALIDATION: {
      const {stepNumber, icon} = action.payload;
      return recalculateStepItemsState(state, stepNumber, {icon});
    }
    case UPDATE_STEP_ITEMS_ON_NEXT: {
      const {stepNumber, finishedSlides, current} = action.payload;
      const nextIndex = !current ? calculateNextStepIndex(stepNumber, finishedSlides) : null;
      return recalculateStepItemsState(state, stepNumber, {current, nextIndex});
    }
    default:
      return state;
  }
};

// -----------------------------------------------------------------------------

export default reducer;
