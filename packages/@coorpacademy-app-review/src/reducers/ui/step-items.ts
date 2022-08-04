import get from 'lodash/fp/get';
import has from 'lodash/fp/has';
import map from 'lodash/fp/map';
import toNumber from 'lodash/fp/toNumber';
import {IconValue, FinishedSlides} from '../../types/common';
import {
  StepItemsAction,
  UPDATE_STEP_ITEMS_ON_NEXT,
  UPDATE_STEP_ITEMS_ON_VALIDATION
} from '../../actions/ui/step-items';
import {
  HIGHEST_INDEX,
  indexToString,
  SlideNumbers,
  slideNumbers,
  TOTAL_SLIDES_STACK
} from '../../common';

export type StepItem = {
  current: boolean;
  icon: IconValue;
  value: string;
};

export type StepItemsState = {
  [key in SlideNumbers]: StepItem;
};

const getInitialState = (): StepItemsState => {
  // Use reducer?
  const state: Partial<StepItemsState> = {};

  // eslint-disable-next-line fp/no-loops
  for (let index = 0; index < TOTAL_SLIDES_STACK; index++) {
    const current = index === 0;
    state[indexToString(index)] = {current, value: `${index + 1}`, icon: 'no-answer'};
  }
  return <StepItemsState>state;
};

export const initialState: StepItemsState = getInitialState();

// -----------------------------------------------------------------------------

// ||-------> aux function, finds the next consecutive index
// to loop from 0 to HIGHEST_INDEX (4) & again to 0
const getNextIndex = (currentIndex: number): SlideNumbers =>
  indexToString(currentIndex === HIGHEST_INDEX ? 0 : currentIndex + 1);

// ||-------> calculates which should be the next step to visit (as there can be already answered slides &&
// they have to be skipped)
const calculateNextStepIndex = (
  currentStepNumber: SlideNumbers,
  finishedSlides: FinishedSlides,
  lastVisitedIndex: SlideNumbers | '-1' = '-1'
): SlideNumbers => {
  // only one slide remaining, the step should stay on the same number
  if (lastVisitedIndex === currentStepNumber) {
    return currentStepNumber;
  }

  const indexToVisit = getNextIndex(
    toNumber(lastVisitedIndex === '-1' ? currentStepNumber : lastVisitedIndex)
  );

  // if the index is already included in the correctly answered (finished) slides, then we proceed to check for the next one
  return has(indexToVisit, finishedSlides)
    ? calculateNextStepIndex(currentStepNumber, finishedSlides, indexToVisit)
    : indexToVisit;
};

type StepItemToUpdateProps =
  | {icon: StepItem['icon']}
  | ({current: StepItem['current']} & {nextIndex: SlideNumbers | '-1'});

const recalculateStepItemsState = (
  state: StepItemsState,
  stepNumber: SlideNumbers,
  stepItemToUpdateProps: StepItemToUpdateProps
): StepItemsState => {
  const nextIndex: SlideNumbers | '-1' = get('nextIndex', stepItemToUpdateProps);
  const _state: Partial<StepItemsState> = {};

  // eslint-disable-next-line lodash-fp/no-unused-result
  map(index => {
    const previousValue = state[index];
    if (stepNumber === index)
      _state[stepNumber] = {
        ...previousValue,
        ...stepItemToUpdateProps
      };
    /* only for UPDATE_STEP_ITEMS_ON_NEXT -> */ else if (nextIndex === index) {
      _state[index] = {...previousValue, current: true};
    } else _state[index] = previousValue;
  }, slideNumbers);

  return <StepItemsState>_state;
};

// -----------------------------------------------------------------------------

// eslint-disable-next-line default-param-last
const reducer = (state: StepItemsState = initialState, action: StepItemsAction): StepItemsState => {
  switch (action.type) {
    case UPDATE_STEP_ITEMS_ON_VALIDATION: {
      const {stepNumber, icon} = action.payload;
      return recalculateStepItemsState(state, stepNumber, {icon});
    }
    case UPDATE_STEP_ITEMS_ON_NEXT: {
      const {stepNumber, finishedSlides, current} = action.payload;
      const nextIndex: SlideNumbers | '-1' = !current
        ? calculateNextStepIndex(stepNumber, finishedSlides)
        : '-1';
      return recalculateStepItemsState(state, stepNumber, {
        current,
        nextIndex
      });
    }
    default:
      return state;
  }
};

// -----------------------------------------------------------------------------

export default reducer;
