import getOr from 'lodash/fp/getOr';
import has from 'lodash/fp/has';

const isLeftClickEvent = e => e.button === 0;
const isModifiedEvent = e => !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);

export default options => {
  const _history = getOr({}, 'history', options);
  if (!has('push', _history)) {
    return () => () => {};
  }

  return ({href} = {}) => e => {
    if (!href || e.defaultPrevented || isModifiedEvent(e) || !isLeftClickEvent(e)) {
      return;
    }
    e.preventDefault();
    _history.push(href);
  };
};
