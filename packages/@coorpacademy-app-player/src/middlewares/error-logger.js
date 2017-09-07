import getOr from 'lodash/fp/getOr';
import pick from 'lodash/fp/pick';

const logger = ({services}) => store => next => action => {
  const {Logger} = services;

  if (action.error) {
    const error = getOr(new Error(`error during action ${action.type}`), 'payload', action);
    try {
      Logger.error(error);
    } catch (err) {
      store.dispatch({
        type: '@@logger/ERROR',
        payload: pick(['message', 'stack'], err)
      });
    }
  }
  return next(action);
};

export default logger;
