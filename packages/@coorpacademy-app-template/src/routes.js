import {createRouter} from '@coorpacademy/redux-router';
import createView from './views';

const routes = [
  {
    path: ':id?',
    view: createView
  }
];

export default createRouter(routes);
