const getClassState = (
  defaultClassName,
  modifiedClassName,
  errorClassName,
  isModified = false,
  isError = false
) => {
  if (isError) {
    return errorClassName;
  } else if (isModified) {
    return modifiedClassName;
  }
  return defaultClassName;
};

export default getClassState;
