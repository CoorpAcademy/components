const ignored = [
  'Warning: React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers. http://fb.me/react-polyfills',
  "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
  "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
  'Browserslist: browsers data (caniuse-lite) is 6 months old',
  // node >= 21 emits DEP0040 at runtime for transitive `punycode` requires
  'DeprecationWarning: The `punycode` module is deprecated'
];

const isIgnored = warningMessage =>
  ignored.some(ignoredWarning => warningMessage && warningMessage.includes(ignoredWarning));

// eslint-disable-next-line no-console
console.warn = (...args) => {
  if (isIgnored(args[0])) {
    return;
  }
  throw new Error(...args);
};
// eslint-disable-next-line no-console
console.error = (...args) => {
  if (isIgnored(args[0])) {
    return;
  }

  if (args.length > 3) {
    throw new Error(args.join(''));
  } else {
    throw new Error(...args);
  }
};
