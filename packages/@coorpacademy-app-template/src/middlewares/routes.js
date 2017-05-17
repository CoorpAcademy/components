import isNaN from 'lodash/fp/isNaN'; // eslint-disable-line no-shadow
import parseInt from 'lodash/fp/parseInt'; // eslint-disable-line no-shadow
import {createPushNavigate, LOCATION} from '@coorpacademy/redux-history';
import {createRouterMiddleware} from '@coorpacademy/redux-router';
import {assign} from '../actions';

const routes = [
  {
    path: '/:id?',
    action: ({id}) => {
      const counter = parseInt(10, id);
      return isNaN(counter) ? createPushNavigate('/0') : assign(counter);
    }
  }
];

export default createRouterMiddleware(routes, LOCATION);
