// eslint-disable-next-line no-console
console.warn = (...args) => {
  throw new Error(...args);
};
// eslint-disable-next-line no-console
console.error = (...args) => {
  throw new Error(...args);
};
