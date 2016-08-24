import curry from 'lodash/fp/curry';
import {navigate} from '../../redux-tools/redux-history';

const isLeftClickEvent = event => event.button === 0;
const isModifiedEvent = event => !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

export const createNavigationHandler = curry(({dispatch, history}, event) => {
  if (event.defaultPrevented)
    return;

  if (isModifiedEvent(event) || !isLeftClickEvent(event))
    return;

  if (event.target.target)
    return;

  event.preventDefault();

  const location = history.createLocation(event.target.href);
  const action = navigate(location);
  dispatch(action);
});
