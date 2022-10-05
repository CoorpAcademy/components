/* eslint-disable node/no-deprecated-api */
import {parse} from 'url';
import {getOr, has, noop} from 'lodash/fp';

const isLeftClickEvent = e => e.button === 0;
const isModifiedEvent = e => !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);

const navigation = options => {
  const _history = getOr({}, 'history', options);
  if (!has('push', _history)) {
    return () => noop;
  }

  return ({href} = {}) =>
    e => {
      if (!href || e.defaultPrevented || isModifiedEvent(e) || !isLeftClickEvent(e)) {
        return;
      }
      if (parse(href).host) return;
      e.preventDefault();
      _history.push(href);
    };
};

export default navigation;
