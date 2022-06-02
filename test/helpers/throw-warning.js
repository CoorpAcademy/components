const ignored = [
  'Warning: React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers. http://fb.me/react-polyfills'
];

// eslint-disable-next-line no-console
console.warn = (...args) => {
  throw new Error(...args);
};
// eslint-disable-next-line no-console
console.error = (...args) => {
  if (ignored.includes(args[0])) {
    return;
  }

  if (args.length > 3) {
    throw new Error(args.join(''));
  } else {
    throw new Error(...args);
  }
};
