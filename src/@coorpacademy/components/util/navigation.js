import has from 'lodash/fp/has';

const isLeftClickEvent = event => event.button === 0;
const isModifiedEvent = event => !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

export const pushToHistory = ({history = {}}) => {
  if (!has('push', history)) {
    return () => () => {};
  }

  return ({href} = {}) => event => {
    if (!href || event.defaultPrevented || isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return;
    }
    event.preventDefault();
    history.push(href);
  };
};
