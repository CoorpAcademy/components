export default (
  dfaultClassName,
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
  return dfaultClassName;
};
