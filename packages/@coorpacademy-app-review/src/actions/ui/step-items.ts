import {FinishedSlides, IconValue} from '../../types/common';

export const UPDATE_STEP_ITEMS_ON_VALIDATION = '@@step-items/UPDATE_STEP_ITEMS_ON_VALIDATION';
export const UPDATE_STEP_ITEMS_ON_NEXT = '@@step-items/UPDATE_STEP_ITEMS_ON_NEXT';

type UpdateStepItemsOnValidationClickPayload = {
  stepNumber: number;
  icon: IconValue;
};

type UpdateStepItemsOnNextClickPayload = {
  stepNumber: number;
  finishedSlides: FinishedSlides;
  current: boolean;
};

// -----------------------------------------------------------------------------

export type UpdateStepItemsOnValidation = {
  type: typeof UPDATE_STEP_ITEMS_ON_VALIDATION;
  payload: UpdateStepItemsOnValidationClickPayload;
};

export type UpdateStepItemsOnNext = {
  type: typeof UPDATE_STEP_ITEMS_ON_NEXT;
  payload: UpdateStepItemsOnNextClickPayload;
};

export type StepItemsAction = UpdateStepItemsOnValidation | UpdateStepItemsOnNext;

// -----------------------------------------------------------------------------

export const updateStepItemsOnValidation = (
  payload: UpdateStepItemsOnValidationClickPayload
): UpdateStepItemsOnValidation => ({
  type: UPDATE_STEP_ITEMS_ON_VALIDATION,
  payload
});

export const updateStepItemsOnNext = (
  payload: UpdateStepItemsOnNextClickPayload
): UpdateStepItemsOnNext => ({
  type: UPDATE_STEP_ITEMS_ON_NEXT,
  payload
});
