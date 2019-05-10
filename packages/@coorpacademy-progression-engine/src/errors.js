const ERRORS = {
  STATE_VALIDATION_ERROR: 'STATE_VALIDATION_ERROR'
};

export default ERRORS;

export const createStateValidationError = (message: string): Error => {
  const error = new Error(message);
  error.name = ERRORS.STATE_VALIDATION_ERROR;
  return error;
};
