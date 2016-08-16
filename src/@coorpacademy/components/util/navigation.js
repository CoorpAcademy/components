import curry from 'lodash/fp/curry';

export const push = curry(({history: {push} = {}}, {href}, e) => {
  if (!push || !href) return;
  e.preventDefault();
  push(href);
});
