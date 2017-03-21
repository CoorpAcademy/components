export default (style, isModified, isError) => {
  if (isError) {
    return style.error;
  }
  else if (isModified) {
    return style.modified;
  }
  return style.default;
};
