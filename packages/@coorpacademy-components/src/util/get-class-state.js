const getClassState = (
  defaultClassName,
  modifiedClassName,
  errorClassName,
  istitleClassName,
  isModified = false,
  isError = false,
  isTitle = false
) => {
  if (isError) {
    return errorClassName;
  }
  if (isTitle) {
    return istitleClassName;
  } else if (isModified) {
    return modifiedClassName;
  }
  return defaultClassName;
};

export default getClassState;
