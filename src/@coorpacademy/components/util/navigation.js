import curry from 'lodash/fp/curry';
import has from 'lodash/fp/has';
import {navigate} from '../../redux-tools/redux-history';

const isLeftClickEvent = event => event.button === 0;
const isModifiedEvent = event => !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

export const pushToHistory = ({history = {}}) => event => {
  if (!has('push', history) || !has('target.href', event)) {
    return;
  }
  event.preventDefault();
  history.push(event.target.href);
};
